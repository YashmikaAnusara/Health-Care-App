import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native';

export default function Stats() {
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
              My Stats
            </Text>
          </View>
          <View style={styles.ItemBody}>
            <View style={{padding: 20}}>
              <Text style={{fontSize: 25, fontWeight: '600', color: 'black'}}>
                Daily Measures
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '500',
                  marginTop: 8,
                  color: 'rgb(119, 119, 119)',
                }}>
                The value each share was expected to gain vs. the value that
                each share actually gained.
              </Text>
            </View>
            <View
              style={{
                paddingLeft: 20,
                paddingRight: 20,
                color: 'rgb(119, 119, 119)',
              }}>
              <Text>Graph 01</Text>
            </View>
            <View style={{padding: 20}}>
              <Text style={{fontSize: 25, fontWeight: '600', color: 'black'}}>
                Stats
              </Text>
            </View>
            <View
              style={{
                paddingLeft: 20,
                paddingRight: 20,
                 
              }}>
              <Text>Graph 02</Text>
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
     
  },

  Footter: {
    flex: 1.7,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
