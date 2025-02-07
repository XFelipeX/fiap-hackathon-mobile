import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { useFirebase } from '@/app/contexts/FirebaseContext';
import LoadingIndicator from '@/app/components/Loading';
import { Result } from './types';

export default function Grade() {
  const { fetchData } = useFirebase();
  const [loading, setLoading] = useState<boolean>(true);
  const [grades, setGrades] = useState<Result[]>([]);

  useEffect(() => {
    fetchData('results').then((data) => {
      setGrades(data);
      setLoading(false);
    });
  }, []);

  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.container}>
        <Text style={styles.title}>Minhas notas</Text>
        {loading && <LoadingIndicator />}
        <View style={styles.listContainer}>
          {grades.map((item, index) => (
            <View key={index} style={styles.row}>
              <Text style={styles.subtitle}>{item.subject}</Text>
              <View style={styles.grades}>
                {item.results.map((grade, index) => (
                  <View key={index} style={styles.grade}>
                    <Text style={styles.text}>{grade.period}</Text>
                    <Text style={styles.text}>{grade.result}</Text>
                  </View>
                ))}
              </View>
              <View style={styles.info}>
                <View style={styles.fouls}>
                  <Text style={styles.text}>Faltas</Text>
                  <Text style={styles.text}>{item.fouls}</Text>
                </View>
                <View style={styles.fouls}>
                  <Text style={styles.text}>Média</Text>
                  <Text style={styles.text}>{item.final}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
