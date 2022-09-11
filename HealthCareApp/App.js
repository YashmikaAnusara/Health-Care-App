import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Health Care App</Text>
      <View>
        <Text style={styles.footer}>footter</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    color: 'blue',

  },
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'red',
    fontSize: 20,
    fontWeight: '500',
  },
});

export default App;
