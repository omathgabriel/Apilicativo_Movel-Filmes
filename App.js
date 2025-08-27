import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackRoutes from './src/rotas/stacksRoute';

export default function App() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}