import React from 'react';
import {View, StyleSheet} from 'react-native';
import Home from './src/screens/home/Home';

const App = () => {
  return (
    <View style={styles.root}>
      <Home />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});

export default App;
