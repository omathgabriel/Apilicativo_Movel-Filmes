import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../componentes/paginas/home';
import PesquisaFilmes from '../componentes/paginas/pesquisa2';
import Detalhes from '../componentes/paginas/detalhes';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="PesquisaFilmes" component={PesquisaFilmes} options={{ title: 'Pesquisa' }} />
      <Stack.Screen name="Detalhes" component={Detalhes} options={{ title: 'Detalhes do Filme' }} />
    </Stack.Navigator>
  );
}