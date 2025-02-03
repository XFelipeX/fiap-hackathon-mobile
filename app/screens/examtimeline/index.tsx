import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';

export default function ExamTimeline() {
  const periods = [
    {
      period: 'Primeiro Bimestre',
      exams: [
        { date: '10/03', subject: 'Matemática' },
        { date: '12/03', subject: 'Física' },
        { date: '15/03', subject: 'Química' },
        { date: '17/03', subject: 'Biologia' },
        { date: '19/03', subject: 'História' },
      ],
    },
    {
      period: 'Segundo Bimestre',
      exams: [
        { date: '10/06', subject: 'Matemática' },
        { date: '12/06', subject: 'Física' },
        { date: '15/06', subject: 'Química' },
        { date: '17/06', subject: 'Biologia' },
        { date: '19/06', subject: 'História' },
      ],
    },
    {
      period: 'Terceiro Bimestre',
      exams: [
        { date: '10/09', subject: 'Matemática' },
        { date: '12/09', subject: 'Física' },
        { date: '15/09', subject: 'Química' },
        { date: '17/09', subject: 'Biologia' },
        { date: '19/09', subject: 'História' },
      ],
    },
    {
      period: 'Quarto Bimestre',
      exams: [
        { date: '10/12', subject: 'Matemática' },
        { date: '12/12', subject: 'Física' },
        { date: '15/12', subject: 'Química' },
        { date: '17/12', subject: 'Biologia' },
        { date: '19/12', subject: 'História' },
      ],
    },
  ];

  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.container}>
        <Text style={styles.title}>Cronograma de provas</Text>
        {periods.map((period, index) => (
          <View key={index} style={styles.dayContainer}>
            <Text style={styles.dayTitle}>{period.period}</Text>
            {period.exams.map((classItem, idx) => (
              <View key={idx} style={styles.row}>
                <Text style={styles.time}>{classItem.date}</Text>
                <Text style={styles.subject}>{classItem.subject}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
