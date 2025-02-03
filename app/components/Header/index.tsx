import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native';
import styles from './styles';
import { useState } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link, useRouter } from 'expo-router';
// import { useAuth } from '@/context/AuthContext';

export default function Header() {
  const navigation = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // const { isAuthenticated, logout } = useAuth();

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="default"
        translucent={true}
        backgroundColor="transparent"
      />
      <View style={styles.header}>
        <TouchableOpacity style={styles.menu} onPress={() => toggleMenu()}>
          {!isOpen && <Ionicons name="menu" size={34} color="white" />}
          {isOpen && <Ionicons name="close" size={34} color="white" />}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <MaterialIcons name="dark-mode" size={34} color="white" />
        </TouchableOpacity>
      </View>

      {isOpen && (
        <View style={styles.sidebar}>
          <Text
            style={styles.sidebarItems}
            onPress={() => {
              navigation.push('/screens/main');
              setIsOpen(!isOpen);
            }}
          >
            Próximas aulas
          </Text>
          <Text
            style={styles.sidebarItems}
            onPress={() => {
              navigation.push('/screens/timeline');
              setIsOpen(!isOpen);
            }}
          >
            Cronograma semanal
          </Text>
          <Text
            style={styles.sidebarItems}
            onPress={() => {
              navigation.push('/screens/examtimeline');
              setIsOpen(!isOpen);
            }}
          >
            Cronograma de provas
          </Text>
          <Text
            style={styles.sidebarItems}
            onPress={() => {
              navigation.push('/screens/notifications');
              setIsOpen(!isOpen);
            }}
          >
            Notificações
          </Text>
          <Text
            style={styles.sidebarItems}
            onPress={() => {
              navigation.push('/screens/contact');
              setIsOpen(!isOpen);
            }}
          >
            Contato
          </Text>
        </View>
      )}
    </View>
  );
}
