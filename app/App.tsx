import React, { useEffect } from 'react';
import { AppRoutes } from './routes/app.routes';
import { FirebaseProvider } from './contexts/FirebaseContext';
import * as ScreenOrientation from 'expo-screen-orientation';
import { LocationProvider } from './contexts/LocationContext';

export default function App() {
  useEffect(() => {
    async function blockOrientation() {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT,
      );
    }
    blockOrientation();
  }, []);
  return (
    <>
      <FirebaseProvider>
        <LocationProvider
          location={null}
          requestLocationPermissions={() => {}}
          getDistance={(lat1, lon1, lat2, lon2) => 0}
          getLocation={() => {}}
          error={null}
          loading={false}
        >
          <AppRoutes />
        </LocationProvider>
      </FirebaseProvider>
    </>
  );
}
