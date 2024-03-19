import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Raika from './SRC/COMPONENTS/RAIKA/main';
import Vinicius from './SRC/COMPONENTS/VINICIUS';


export default function App() {
  return (
    <View style={styles.container}>   
<Vinicius/>
<Raika/>
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
