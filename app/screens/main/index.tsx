import {
  ScrollView,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

const lessons = [
  {
    id: 1,
    data: '10/10/2021',
    materia: 'Matemática',
    professor: 'João',
    link_material: 'https://www.youtube.com/watch?v=3K6v8JZmD5Y',
  },
  {
    id: 2,
    data: '11/10/2021',
    materia: 'Português',
    professor: 'Maria',
    link_material: 'https://www.youtube.com/watch?v=3K6v8JZmD5Y',
  },
  {
    id: 3,
    data: '12/10/2021',
    materia: 'História',
    professor: 'José',
    link_material: 'https://www.youtube.com/watch?v=3K6v8JZmD5Y',
  },
];

export default function Main() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Próximas aulas</Text>
      {lessons.map((lesson) => (
        <View key={lesson.id} style={styles.lesson}>
          <View style={styles.content}>
            <Text style={[styles.text, { fontWeight: 'bold' }]}>
              {lesson.data}
            </Text>
            <Text style={[styles.text, { fontWeight: 'bold' }]}>
              {lesson.materia}
            </Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.text}>Professor: {lesson.professor}</Text>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.text}>Material</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
}
