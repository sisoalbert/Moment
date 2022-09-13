import {StyleSheet, Text, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

// redux persist
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

let persistor = persistStore(store);

import RootApp from './src/navigation/RootApp';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootApp />
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
