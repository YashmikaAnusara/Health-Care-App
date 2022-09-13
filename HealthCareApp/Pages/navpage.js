import React, { Profiler } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './NavPages/home';
import Proflie from './NavPages/proflie';
import Stats from './NavPages/stats';
import Pins from './NavPages/pins';

const Tab = createBottomTabNavigator();

export default function Navpage() {
  return (
    <Tab.Navigator
      tabBarOptions={{showLabel: false}}
      screenOptions={{
        tabBarStyle: {
          //   display: 'flex',
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 90,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 5,
              }}>
              <Image
                source={require('../Assets/Feed.png')}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 35,
                  tintColor: focused ? '#007AFF' : '#3C3C43',
                }}
              />
              <Text
                style={{
                  color: 'black',
                  fontSize: 12,
                  //   textAlign:'center'
                }}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Stats"
        component={Stats}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 5,
              }}>
              <Image
                source={require('../Assets/My_Stats.png')}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 35,
                  tintColor: focused ? '#007AFF' : '#3C3C43',
                }}
              />
              <Text
                style={{
                  color: 'black',
                  fontSize: 12,
                  //   textAlign:'center'
                }}>
                My Stats
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Pins"
        component={Pins}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 5,
              }}>
              <Image
                source={require('../Assets/pins.png')}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 35,
                  tintColor: focused ? '#007AFF' : '#3C3C43',
                }}
              />
              <Text
                style={{
                  color: 'black',
                  fontSize: 12,
                  //   textAlign:'center'
                }}>
                My Pins
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Proflie}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 5,
              }}>
              <Image
                source={require('../Assets/profile.png')}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 35,
                  tintColor: focused ? '#007AFF' : '#3C3C43',
                }}
              />
              <Text
                style={{
                  color: 'black',
                  fontSize: 12,
                  //   textAlign:'center'
                }}>
                My Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 4,
  },
});
