import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';

export default function Timeline() {
  const days = [
    {
      day: 'Segunda',
      classes: [
        { time: '07:00', subject: 'Biologia', teacher: 'Flavia P.' },
        { time: '07:50', subject: 'Geografia', teacher: 'Pedro G.' },
        { time: '08:40', subject: 'Química', teacher: 'Carol D.' },
        { time: '09:45', subject: 'Artes', teacher: 'Ana L.' },
        { time: '10:35', subject: 'Inglês', teacher: 'Maria S.' },
        { time: '11:25', subject: 'Português', teacher: 'Carlos D.' },
      ],
    },
    {
      day: 'Terça',
      classes: [
        { time: '07:00', subject: 'Matemática', teacher: 'João R.' },
        { time: '07:50', subject: 'Física', teacher: 'Gabriel T.' },
        { time: '08:40', subject: 'Educação Física', teacher: 'Paula N.' },
        { time: '09:45', subject: 'Sociologia', teacher: 'Ana C.' },
        { time: '10:35', subject: 'Inglês', teacher: 'Maria S.' },
        { time: '11:25', subject: 'Redação', teacher: 'Luciana V.' },
      ],
    },
    {
      day: 'Quarta',
      classes: [
        { time: '07:00', subject: 'Química', teacher: 'Carol D.' },
        { time: '07:50', subject: 'Geografia', teacher: 'Pedro G.' },
        { time: '08:40', subject: 'Matemática', teacher: 'João R.' },
        { time: '09:45', subject: 'História', teacher: 'Ana L.' },
        { time: '10:35', subject: 'Português', teacher: 'Carlos D.' },
      ],
    },
    {
      day: 'Quinta',
      classes: [
        { time: '07:00', subject: 'Física', teacher: 'Gabriel T.' },
        { time: '07:50', subject: 'Biologia', teacher: 'Flavia P.' },
        { time: '08:40', subject: 'História', teacher: 'Ana L.' },
        { time: '09:45', subject: 'Filosofia', teacher: 'Paulo S.' },
        { time: '10:35', subject: 'Espanhol', teacher: 'Maria S.' },
        { time: '11:25', subject: 'Matemática', teacher: 'João R.' },
      ],
    },
    {
      day: 'Sexta',
      classes: [
        { time: '07:00', subject: 'Português', teacher: 'Carlos D.' },
        { time: '07:50', subject: 'Biologia', teacher: 'Flavia P.' },
        { time: '08:40', subject: 'Física', teacher: 'Gabriel T.' },
        { time: '09:45', subject: 'Química', teacher: 'Carol D.' },
        { time: '10:35', subject: 'Matemática', teacher: 'João R.' },
        { time: '11:25', subject: 'Inglês', teacher: 'Maria S.' },
      ],
    },
  ];

  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.container}>
        <Text style={styles.title}>Cronograma semanal</Text>
        {days.map((day, index) => (
          <View key={index} style={styles.dayContainer}>
            <Text style={styles.dayTitle}>{day.day}</Text>
            {day.classes.map((classItem, idx) => (
              <View key={idx} style={styles.row}>
                <Text style={styles.time}>{classItem.time}</Text>
                <Text style={styles.subject}>{classItem.subject}</Text>
                <Text style={styles.teacher}>{classItem.teacher}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
