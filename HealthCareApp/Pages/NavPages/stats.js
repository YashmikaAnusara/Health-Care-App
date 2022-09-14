import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default function Stats({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Stats Page</Text>
      <Button
        title="Press Me"
        onPress={() => alert('wow You press me Stats')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5DB075',
  },
});
