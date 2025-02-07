import React from 'react';
import { Stack } from 'expo-router';
import Header from '../components/Header';
import Menu from '../components/Menu';
import { useFirebase } from '../contexts/FirebaseContext';

export function AppRoutes() {
  const { user } = useFirebase();

  return (
    <>
      {user && <Header />}
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'none',
        }}
      ></Stack>
      {user && <Menu />}
    </>
  );
}
