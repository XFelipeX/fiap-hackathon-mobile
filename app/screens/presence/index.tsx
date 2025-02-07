import React, { useContext, useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import styles from './styles';
import { LocationContext } from '@/app/contexts/LocationContext';
import { useFirebase } from '@/app/contexts/FirebaseContext';
import LoadingIndicator from '@/app/components/Loading';

export default function Presence() {
  const [confirmation, setConfirmation] = useState<boolean>(false);
  const [code, setCode] = useState<string>('');
  const inputRef = useRef<TextInput>(null);
  const { location, getDistance, setStateUpdate, getLocation } =
    useContext(LocationContext);
  const [distance, setDistance] = useState<number | null>(null);
  const { fetchData } = useFirebase();
  const [loading, setLoading] = useState<boolean>(true);
  const [codeVerified, setCodeVerified] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    const fetchSchoolLocation = async () => {
      const data = await fetchData('location');
      if (data) {
        return data[1].coords;
      }
    };

    if (location) {
      fetchSchoolLocation()
        .then((coords) => {
          const distance = getDistance(
            location.coords.lat,
            location.coords.lon,
            coords.lat,
            coords.lon,
          );
          setDistance(distance);
          if (distance && distance < 100) {
            setConfirmation(true);
          }
        })
        .then(() => {
          setLoading(false);
        });
    }
  }, [location]);

  const handleInputChange = (text: string) => {
    if (/^\d*$/.test(text) && text.length <= 6) {
      setCode(text);
    }
  };

  const handleFocusInput = () => {
    inputRef.current?.focus();
  };

  const handleVerifyCode = async () => {
    if (code == '') return;
    const lessons = await fetchData('lessons');
    const lesson = lessons.find((lesson: any) => lesson.code === code);
    if (lesson) {
      const lessonCode = lesson.code;
      if (code == lessonCode) {
        setCodeVerified(true);
        setCode('');
      } else {
        setError('Código inválido!');
      }
    } else {
      setError('Código inválido!');
    }

    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Marcar presença</Text>
      {loading && (
        <View>
          <Text style={styles.confirmationText}>
            Confirmando localização...
          </Text>
          <LoadingIndicator />
        </View>
      )}
      {confirmation && !loading ? (
        <>
          <View style={styles.confirmationBox}>
            <Text style={styles.confirmationText}>Localização confirmada</Text>
            <AntDesign name="checkcircle" size={24} color="white" />
          </View>
          {codeVerified && (
            <View style={styles.confirmationBox}>
              <Text style={styles.confirmationText}>
                Presença confirmada com sucesso!
              </Text>
              <AntDesign name="checkcircle" size={24} color="white" />
            </View>
          )}
          <View style={styles.center}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View>
                <TouchableWithoutFeedback onPress={handleFocusInput}>
                  <View style={styles.codeInputContainer}>
                    {Array(6)
                      .fill(0)
                      .map((_, index) => (
                        <Text key={index} style={styles.codeInput}>
                          {code[index] || ''}
                        </Text>
                      ))}
                  </View>
                </TouchableWithoutFeedback>

                {/* Campo de entrada invisível */}
                <TextInput
                  ref={inputRef}
                  style={styles.hiddenInput}
                  value={code}
                  onChangeText={handleInputChange}
                  keyboardType="numeric"
                  maxLength={6}
                  autoFocus={false}
                />
              </View>
            </TouchableWithoutFeedback>
            <TouchableOpacity
              style={styles.verifyButton}
              onPress={handleVerifyCode}
            >
              <Text style={styles.verifyButtonText}>Verificar Código</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footerTextContainer}>
            <MaterialIcons name="info" size={30} color="gray" />
            <Text style={styles.footerText}>
              O código será dado pelo professor na sala de aula
            </Text>
          </View>
        </>
      ) : (
        !loading && (
          <View style={styles.confirmationBoxNotConfirmed}>
            <Text style={styles.confirmationText}>
              Por favor, vá até a escola
            </Text>
            <AntDesign name="closecircle" size={24} color="white" />
          </View>
        )
      )}
      {error && (
        <View style={styles.confirmationBoxNotConfirmed}>
          <Text style={styles.confirmationText}>{error}</Text>
          <AntDesign name="closecircle" size={24} color="white" />
        </View>
      )}
    </View>
  );
}
