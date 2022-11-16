import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ width: 200, height: 100, backgroundColor: 'red' }}></View>
      <View style={{ width: 200, height: 100, backgroundColor: 'green' }}></View>
      <View style={{ width: 200, height: 100, backgroundColor: 'blue' }}></View>
      <StatusBar style='auto' />
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
