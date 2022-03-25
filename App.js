import { StyleSheet, View, StatusBar } from 'react-native';
import Navigation from './components/Navigation';
import AddRoom from './screens/AddRoom';
import RoomDetail from './screens/RoomDetail';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#2A2A37"
      />
      <Navigation/>
      {/* <RoomDetail/> */}
      {/* <AddRoom/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
