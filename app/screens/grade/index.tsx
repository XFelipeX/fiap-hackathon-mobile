import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import EvilIcons from '@expo/vector-icons/EvilIcons';

export default function Grade() {
  const grades = [
    {
      discipline: 'Matemática',
      grades: [
        {
          period: '1º Bimestre',
          grade: 8.5,
        },
        {
          period: '2º Bimestre',
          grade: 9.5,
        },
        {
          period: '3º Bimestre',
          grade: 7.5,
        },
        {
          period: '4º Bimestre',
          grade: 8.0,
        },
      ],
    },
    {
      discipline: 'Português',
      grades: [
        {
          period: '1º Bimestre',
          grade: 7.5,
        },
        {
          period: '2º Bimestre',
          grade: 8.5,
        },
        {
          period: '3º Bimestre',
          grade: 9.5,
        },
        {
          period: '4º Bimestre',
          grade: 8.0,
        },
      ],
    },
    {
      discipline: 'História',
      grades: [
        {
          period: '1º Bimestre',
          grade: 8.5,
        },
        {
          period: '2º Bimestre',
          grade: 9.5,
        },
        {
          period: '3º Bimestre',
          grade: 7.5,
        },
        {
          period: '4º Bimestre',
          grade: 8.0,
        },
      ],
    },
  ];

  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.container}>
        <Text style={styles.title}>Minhas notas</Text>
        <View style={styles.listContainer}>
          {grades.map((item, index) => (
            <View key={index} style={styles.row}>
              <Text style={styles.subtitle}>{item.discipline}</Text>
              <View style={styles.grades}>
                {item.grades.map((grade, index) => (
                  <View key={index} style={styles.grade}>
                    <Text style={styles.text}>{grade.period}</Text>
                    <Text style={styles.text}>{grade.grade}</Text>
                  </View>
                ))}
              </View>
              <View style={styles.info}>
                <View style={styles.fouls}>
                  <Text style={styles.text}>Faltas</Text>
                  <Text style={styles.text}>{10}</Text>
                </View>
                <View style={styles.fouls}>
                  <Text style={styles.text}>Média</Text>
                  <Text style={styles.text}>{10}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
