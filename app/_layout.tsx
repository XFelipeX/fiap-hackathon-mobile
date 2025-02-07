import React, { useEffect } from 'react';
import { AppRoutes } from './routes/app.routes';
import { FirebaseProvider } from './contexts/FirebaseContext';
import App from './App';

export default function RootLayout() {
  return <App />;
}
