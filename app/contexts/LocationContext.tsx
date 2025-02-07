import { createContext, useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { Alert, Linking } from 'react-native';

export const LocationContext = createContext<LocationProviderProps | Object>(
  {},
);
const { Provider } = LocationContext;

interface LocationObject {
  coords: {
    lat: number;
    lon: number;
  };
}

interface LocationProviderProps {
  children: React.ReactNode;
  location: LocationObject | null;
  getDistance: (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number,
  ) => number;
  getLocation: Function;
  error: string | null;
  loading: boolean;
  requestLocationPermissions: () => void;
}

// Função para calcular a distância entre duas coordenadas usando Haversine
const getDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
) => {
  const R = 6371e3; // Raio da Terra em metros
  const toRad = (value: number) => (value * Math.PI) / 180;

  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Retorna a distância em metros
};

export const LocationProvider = ({ children }: LocationProviderProps) => {
  const [location, setLocation] = useState<LocationObject | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const getLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setError('Permissão de localização foi negada.');
      setLoading(false);
      return;
    }

    const watchId = await Location.watchPositionAsync(
      { distanceInterval: 10, accuracy: Location.Accuracy.High },
      (location) => {
        setLocation({
          coords: {
            lat: location.coords.latitude,
            lon: location.coords.longitude,
          },
        });
        setError(null);
        setLoading(false);
      },
    );

    return () => {
      watchId.remove();
    };
  };

  useEffect(() => {
    getLocation();
  }, []);

  const requestLocationPermissions = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status === 'granted') {
      const watchId = Location.watchPositionAsync(
        { distanceInterval: 10, accuracy: Location.Accuracy.High },
        (location) => {
          setLocation({
            coords: {
              lat: location.coords.latitude,
              lon: location.coords.longitude,
            },
          });
          setError(null);
          setLoading(false);
        },
      );
      return () => watchId.then((watch) => watch.remove());
    } else if (status === 'denied') {
      Alert.alert(
        'Permissão de localização negada',
        'Você precisa permitir o uso da localização para validar a presença nas aulas.',
        [
          {
            text: 'Cancelar',
            style: 'cancel',
          },
          {
            text: 'Configurações',
            onPress: () => {
              Linking.openSettings();
            },
          },
        ],
      );
    }
  };

  return (
    <Provider
      value={{
        location,
        error,
        loading,
        requestLocationPermissions,
        getDistance,
        getLocation,
        children,
      }}
    >
      {children}
    </Provider>
  );
};
