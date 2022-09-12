import React,{useEffect} from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import {useNavigation} from '@react-navigation/core';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    },2000)
  },[])
  return (
    <View style={styles.container}>
      <Image source={require('../Assets/logo.jpeg')} style={styles.logo} />
      <Text style={styles.topic}>My Health Advisor</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop:-50
  },
  logo: {
    width: 400,
    height: 180,
  },
  topic: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#5DB075',
  },
});

export default Splash;