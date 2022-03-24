import { StyleSheet, View, StatusBar } from 'react-native';
import NavBottom from './components/NavBottom';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#2A2A37"
      />
      <NavBottom/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
