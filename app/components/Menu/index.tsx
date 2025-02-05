import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';

export default function Menu() {
  const navigation = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.push('/screens/materials')}
        >
          <AntDesign name="folderopen" size={30} color="white" />
          <Text style={styles.text}>Materiais</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItemCenter}
          onPress={() => navigation.push('/screens/presence')}
        >
          <View style={styles.personIcon}>
            <Ionicons name="person" size={30} color="white" />
          </View>
          <Text style={styles.text}>Marcar presença</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.push('/screens/grade')}
        >
          <Ionicons name="star-outline" size={30} color="white" />
          <Text style={styles.text}>Notas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
