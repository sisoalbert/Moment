import {StyleSheet, Text, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

import RootApp from './src/navigation/RootApp';

export default function App() {
  return (
    <Provider store={store}>
      <RootApp />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
