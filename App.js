import { StyleSheet, View, StatusBar } from 'react-native';
import Home from './screens/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#2A2A37"
      />
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
