import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';
import { useFirebase } from '@/app/contexts/FirebaseContext';
import LoadingIndicator from '@/app/components/Loading';
import { Period } from './types';

export default function ExamTimeline() {
  const { fetchData } = useFirebase();
  const [loading, setLoading] = useState<boolean>(true);
  const [periods, setPeriods] = useState<Period[]>([]);

  React.useEffect(() => {
    fetchData('exams').then((data) => {
      setPeriods(data);
      setLoading(false);
    });
  }, []);

  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.container}>
        <Text style={styles.title}>Cronograma de provas</Text>
        {loading && <LoadingIndicator />}
        {periods.map((period, index) => (
          <View key={index} style={styles.dayContainer}>
            <Text style={styles.dayTitle}>{period.period}</Text>
            {period.exams.map((classItem, idx) => (
              <View key={idx} style={styles.row}>
                <Text style={styles.time}>
                  {classItem.date.toDate().toLocaleDateString()}
                </Text>
                <Text style={styles.subject}>{classItem.subject}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
