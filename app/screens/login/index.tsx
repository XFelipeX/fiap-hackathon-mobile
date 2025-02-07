import React, { useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Alert,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles';
import { useFirebase } from '@/app/contexts/FirebaseContext';
import { useRouter } from 'expo-router';
import * as LocalAuthentication from 'expo-local-authentication';

export default function Login() {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const { login } = useFirebase();
  const navigation = useRouter();

  const handleLogin = async () => {
    const logou = await login(email, password);
    if (!logou) {
      Alert.alert('Erro', 'Email ou senha inválidos');
    }
    if (logou) {
      navigation.push('/screens/main');
    }
  };

  const handleBiometrics = async () => {
    const hasBiometrics = await LocalAuthentication.hasHardwareAsync();
    if (!hasBiometrics) {
      Alert.alert('Erro', 'Biometria não disponível');
      return;
    }

    const isEnrolled = await LocalAuthentication.isEnrolledAsync();
    if (!isEnrolled) {
      Alert.alert('Erro', 'Biometria não cadastrada');
      return;
    }

    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Faça a autenticação',
    });

    if (result.success) {
      await login('', '');
      navigation.push('/screens/main');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="default"
        translucent={true}
        backgroundColor="transparent"
      />
      <View style={styles.header}>
        <Text style={styles.title}>Minha Escola</Text>

        <Text style={styles.label}>Email</Text>
        <TextInput
          onChange={(event) => setEmail(event.nativeEvent.text)}
          style={styles.input}
          placeholderTextColor="#fff"
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          onChange={(event) => setPassword(event.nativeEvent.text)}
          style={styles.input}
          secureTextEntry
          placeholderTextColor="#fff"
        />

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Entrar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.divider}>
        <TouchableOpacity
          style={styles.biometricsButton}
          onPress={handleBiometrics}
        >
          <Text style={styles.biometricsButtonText}>Entrar com biometria</Text>
          <MaterialIcons name="fingerprint" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Não sei minha senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
