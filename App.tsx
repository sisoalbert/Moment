import {StyleSheet, Text, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-context';

import RootApp from './src/navigation/RootApp';

export default function App() {
  return (
    <View style={styles.container}>
      <RootApp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
