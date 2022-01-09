import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import GameScreen from './app/components/GameScreen';
import Quiz from './app/components/Quiz';
import Tictactoe from './app/components/Tictactoe';

export default function App() {
  return (
    <View style={styles.container}>
      <Quiz />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
});
