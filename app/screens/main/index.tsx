import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useFirebase } from '@/app/contexts/FirebaseContext';
import { useEffect, useState } from 'react';
import { Teacher, Lesson } from './types';
import LoadingIndicator from '@/app/components/Loading';

export default function Main() {
  const { fetchData } = useFirebase();
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchContent = async () => {
      fetchData('lessons').then((data) => {
        setLessons(data);
      });
      fetchData('teachers').then((data) => {
        setTeachers(data);
      });
    };

    fetchContent().then(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Próximas aulas</Text>
      {loading && <LoadingIndicator />}
      {lessons &&
        lessons.map((lesson) => (
          <View key={lesson.id} style={styles.lesson}>
            <View style={styles.content}>
              <Text style={[styles.text, { fontWeight: 'bold' }]}>
                {lesson.timeDate.toDate().toLocaleDateString()}
              </Text>
              <Text style={[styles.text, { fontWeight: 'bold' }]}>
                {lesson.subject}
              </Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.text}>
                Professor:{' '}
                {teachers
                  .filter((teacher) => teacher.id === lesson.teacherId)
                  .map((teacher) => teacher.name)
                  .join(', ')}
              </Text>
              <TouchableOpacity style={styles.button} onPress={() => {}}>
                <Text style={styles.text}>Material</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
    </View>
  );
}
