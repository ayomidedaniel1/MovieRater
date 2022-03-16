import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import RootNavigator from './navigation/RootNavigator';
import { StyleSheet } from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
