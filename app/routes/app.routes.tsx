import React, { useEffect } from 'react';
import { Stack } from 'expo-router';
import * as ScreenOrientation from 'expo-screen-orientation';
import Header from '../components/Header';
import Menu from '../components/Menu';

export function AppRoutes() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(true);
  useEffect(() => {
    async function blockOrientation() {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT,
      );
    }
    blockOrientation();
  }, []);
  return (
    <>
      {isAuthenticated && <Header />}
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'none',
        }}
      ></Stack>
      {isAuthenticated && <Menu />}
    </>
  );
}
