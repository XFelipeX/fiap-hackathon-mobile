import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import styles from './styles';

export default function Presence() {
  const [confirmation, setConfirmation] = useState<boolean>(false);
  const [code, setCode] = useState<string>('');
  const inputRef = useRef<TextInput>(null);

  const handleInputChange = (text: string) => {
    if (/^\d*$/.test(text) && text.length <= 6) {
      setCode(text);
    }
  };

  const handleFocusInput = () => {
    inputRef.current?.focus();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Marcar presença</Text>
      {confirmation && (
        <View style={styles.confirmationBox}>
          <Text style={styles.confirmationText}>Localização confirmada</Text>
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
        <TouchableOpacity style={styles.verifyButton}>
          <Text style={styles.verifyButtonText}>Verificar Código</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footerTextContainer}>
        <MaterialIcons name="info" size={30} color="gray" />
        <Text style={styles.footerText}>
          O código será dado pelo professor na sala de aula
        </Text>
      </View>
    </View>
  );
}
