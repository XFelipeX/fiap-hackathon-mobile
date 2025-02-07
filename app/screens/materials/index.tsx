import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { useFirebase } from '@/app/contexts/FirebaseContext';
import { Material } from './types';
import LoadingIndicator from '@/app/components/Loading';

export default function Materials() {
  const { fetchData } = useFirebase();
  const [loading, setLoading] = useState<boolean>(true);
  const [materials, setMaterials] = useState<Material[]>([]);

  useEffect(() => {
    fetchData('disciplines').then((data) => {
      setMaterials(data);
      setLoading(false);
    });
  }, []);

  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.container}>
        <Text style={styles.title}>Materiais</Text>
        {loading && <LoadingIndicator />}
        <View style={styles.listContainer}>
          {materials.map((item, index) => (
            <TouchableOpacity key={index} style={styles.row}>
              <Text style={styles.text}>{item.description}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
