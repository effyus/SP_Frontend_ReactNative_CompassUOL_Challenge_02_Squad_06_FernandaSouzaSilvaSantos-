import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import styled from 'styled-components/native';
import { Login } from './src/screens/login/Login'; 

export default function App() {
  return (
    <View>
     <Login/>
      <StatusBar style="auto" />
    </View>
  );
}



