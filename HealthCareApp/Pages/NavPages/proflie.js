import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default function Proflie({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Proflie Page</Text>
      <Button
        title="Press Me"
        onPress={() => alert('wow You press me Proflie')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
});
