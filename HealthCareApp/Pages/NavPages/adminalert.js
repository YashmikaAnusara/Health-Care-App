import React, {useState, useEffect} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import IP from '../../ip_address';
import axios from 'axios';

export default function Admin_alert({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 8}}>
        <ScrollView>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 30,
              marginTop: 20,
              color: '#5DB075',
              fontWeight: 'bold',
            }}>
            Alert
          </Text>
        </ScrollView>
      </View>
      <View style={{flex: 1.4}}></View>
    </View>
  );
}
