import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default function Admin_feed({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Admin Feed Page</Text>
      <Button title="Press Me" onPress={() => alert('wow You press me Feed')} />
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
