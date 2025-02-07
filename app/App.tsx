import React, { useEffect } from 'react';
import { AppRoutes } from './routes/app.routes';
import { FirebaseProvider } from './contexts/FirebaseContext';
import * as ScreenOrientation from 'expo-screen-orientation';

export default function App() {
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
      <FirebaseProvider>
        <AppRoutes />
      </FirebaseProvider>
    </>
  );
}
