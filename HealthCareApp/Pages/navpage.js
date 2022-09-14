import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//user pages
import Feed from './NavPages/Feed';
import Proflie from './NavPages/proflie';
import Stats from './NavPages/stats';
import Pins from './NavPages/pins';

//admin pages
import Admin_proflie from './NavPages/adminproflie';
import Admin_stats from './NavPages/adminstats';
import Admin_feed from './NavPages/adminfeed';

const Tab = createBottomTabNavigator();

export default function Navpage({route}) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          //   display: 'flex',
          position: 'absolute',
          bottom: 15,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 90,
          ...styles.shadow,
        },
      }}>
      {route.params.position === 'User' ? (
        <Tab.Screen
          name="Feed"
          component={Feed}
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
                    tintColor: focused ? '#5DB075' : '#3C3C43',
                  }}
                />
                <Text
                  style={{
                    color: 'black',
                    fontSize: 12,
                    //   textAlign:'center'
                  }}>
                  My Feed
                </Text>
              </View>
            ),
          }}
        />
      ) : (
        <Tab.Screen
          name="Admin_feed"
          component={Admin_feed}
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
                    tintColor: focused ? '#5DB075' : '#3C3C43',
                  }}
                />
                <Text
                  style={{
                    color: 'black',
                    fontSize: 12,
                    //   textAlign:'center'
                  }}>
                  Feed
                </Text>
              </View>
            ),
          }}
        />
      )}
      {route.params.position === 'User' ? (
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
                    tintColor: focused ? '#5DB075' : '#3C3C43',
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
      ) : (
        <Tab.Screen
          name="Admin_stats"
          component={Admin_stats}
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
                    tintColor: focused ? '#5DB075' : '#3C3C43',
                  }}
                />
                <Text
                  style={{
                    color: 'black',
                    fontSize: 12,
                    //   textAlign:'center'
                  }}>
                  Emp Stats
                </Text>
              </View>
            ),
          }}
        />
      )}
      {route.params.position === 'User' ? (
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
                    tintColor: focused ? '#5DB075' : '#3C3C43',
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
      ) : null}
      {route.params.position === 'User' ? (
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
                    tintColor: focused ? '#5DB075' : '#3C3C43',
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
      ) : (
        <Tab.Screen
          name="Admin_proflie"
          component={Admin_proflie}
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
                    tintColor: focused ? '#5DB075' : '#3C3C43',
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
      )}
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
