import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles';

export default function Login() {
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
        <TextInput style={styles.input} placeholderTextColor="#fff" />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholderTextColor="#fff"
        />

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Entrar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.divider}>
        <TouchableOpacity style={styles.biometricsButton}>
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
