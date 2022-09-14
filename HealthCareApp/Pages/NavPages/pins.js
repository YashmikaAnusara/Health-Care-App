 import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
export default function Pins({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Body}>
        <ScrollView>
          <View style={styles.ItemHeader}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: 'green',
                fontFamily: 'Arial',
                marginTop: 20,
              }}>
              My Options
            </Text>
          </View>
          <View style={styles.ItemBody}>
            <View style={styles.RowWrapper}>
              <Text>Hi</Text>
            </View>
            <View style={styles.RowWrapper}>
              <Text>Hi</Text>
            </View>
            <View style={styles.RowWrapper}>
              <Text>Hi</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.Footter}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  Body: {
    flex: 8,
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  ItemHeader: {alignItems: 'center', justifyContent: 'center'},
  ItemBody: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },

  Footter: {
    flex: 1.7,
  },

  RowWrapper: {
    padding: 10,
    width: "100%",
    borderBottomWidth: 2,
    borderColor: 'rgb(224, 224, 224)',
    flexDirection:"row"
  },
});
