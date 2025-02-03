import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import EvilIcons from '@expo/vector-icons/EvilIcons';

export default function Materials() {
  const materials = [
    {
      discipline: 'Matemática',
    },
    {
      discipline: 'Português',
    },
    {
      discipline: 'História',
    },
    {
      discipline: 'Geografia',
    },
    {
      discipline: 'Física',
    },
    {
      discipline: 'Química',
    },
    {
      discipline: 'Biologia',
    },
    {
      discipline: 'Inglês',
    },
    {
      discipline: 'Espanhol',
    },
    {
      discipline: 'Artes',
    },
    {
      discipline: 'Educação Física',
    },
    {
      discipline: 'Filosofia',
    },
    {
      discipline: 'Sociologia',
    },
  ];

  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.container}>
        <Text style={styles.title}>Materiais</Text>
        <View style={styles.listContainer}>
          {materials.map((item, index) => (
            <TouchableOpacity key={index} style={styles.row}>
              <Text style={styles.text}>{item.discipline}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
