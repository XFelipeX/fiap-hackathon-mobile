import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';
import { useFirebase } from '@/app/contexts/FirebaseContext';
import { Days, Discipline } from './types';
import LoadingIndicator from '@/app/components/Loading';
import { Teacher } from '../main/types';

export default function Timeline() {
  const { fetchData } = useFirebase();
  const [loading, setLoading] = useState<boolean>(true);
  const [disciplines, setDisciplines] = useState<Discipline[]>([]);
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [days, setDays] = useState<Days[]>([]);

  useEffect(() => {
    const fetchContent = async () => {
      fetchData('timeline').then((data) => {
        setDays(data);
        setLoading(false);
      });

      fetchData('disciplines').then((data) => {
        setDisciplines(data);
      });

      fetchData('teachers').then((data) => {
        setTeachers(data);
      });
    };

    fetchContent();
  }, []);

  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.container}>
        <Text style={styles.title}>Cronograma semanal</Text>
        {loading && <LoadingIndicator />}
        {days.map((day, index) => (
          <View key={index} style={styles.dayContainer}>
            <Text style={styles.dayTitle}>{day.day}</Text>
            {day.classes.map((classItem, idx) => (
              <View key={idx} style={styles.row}>
                <Text style={styles.time}>{classItem.time}</Text>
                <Text style={styles.subject}>
                  {disciplines
                    .filter(
                      (discipline) => discipline.id === classItem.subjectId,
                    )
                    .map((discipline) => discipline.description)}
                </Text>
                <Text style={styles.teacher}>
                  {teachers
                    .filter((teacher) => teacher.id === classItem.teacherId)
                    .map((teacher) => teacher.name)}
                </Text>
              </View>
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
