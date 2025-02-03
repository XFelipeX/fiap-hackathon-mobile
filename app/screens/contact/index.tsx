import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Contact() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contatos</Text>
      <View style={styles.contactContainer}>
        <View style={styles.contact}>
          <View>
            <Feather name="phone-call" size={34} color="#ED145B" />
          </View>

          <Text style={styles.text}>
            <Text style={{ textDecorationLine: 'underline' }}>Secretaria:</Text>{' '}
            (xx) 1234-5678
          </Text>
        </View>
        <View style={styles.contact}>
          <View>
            <Feather name="mail" size={34} color="#ED145B" />
          </View>

          <Text style={styles.text}>
            <Text style={{ textDecorationLine: 'underline' }}>
              Coordenação:
            </Text>{' '}
            email@escola.com
          </Text>
        </View>
        <View style={styles.contact}>
          <View>
            <Ionicons name="chatbox" size={34} color="#ED145B" />
          </View>

          <Text style={styles.text}>
            <Text style={{ textDecorationLine: 'underline' }}>WhatsApp:</Text>{' '}
            (xx) 1234-5678
          </Text>
        </View>
      </View>
    </View>
  );
}
