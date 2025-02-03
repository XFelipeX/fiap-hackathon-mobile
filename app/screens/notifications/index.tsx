import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import EvilIcons from '@expo/vector-icons/EvilIcons';

export default function Notifications() {
  const notifications = [
    {
      date: '10/03',
      message: 'Você tem uma nova tarefa de Matemática',
    },
    {
      date: '12/03',
      message: 'Você tem uma nova tarefa de Física',
    },
    {
      date: '15/03',
      message: 'Você tem uma nova tarefa de Química',
    },
  ];

  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Ultimas notificações</Text>
          <TouchableOpacity onPress={() => {}}>
            <FontAwesome name="gear" size={34} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.listContainer}>
          {notifications.map((notification, index) => (
            <View key={index} style={styles.row}>
              <View style={styles.headerRow}>
                <Text style={styles.message}>{notification.message}</Text>
                <EvilIcons name="trash" size={34} color="white" />
              </View>
              <Text style={styles.date}>{notification.date}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
