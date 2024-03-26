import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Raika from './SRC/COMPONENTS/RAIKA/main.js';
import Vinicius from './SRC/COMPONENTS/VINICIUS/index.js';



export default function App() {
  return (
    <View style={styles.container}>   
    <Raika/>
    <Vinicius/>
    <StatusBar style="auto" />
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
