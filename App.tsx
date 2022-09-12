import {StyleSheet, Text, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-context';

import RootApp from './src/navigation/RootApp';
import {Provider} from 'react-redux';
import store from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <RootApp />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
