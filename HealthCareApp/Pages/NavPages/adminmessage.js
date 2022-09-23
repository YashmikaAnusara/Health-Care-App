import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import IP from '../../ip_address';
import axios from 'axios';

export default function Admin_alert({navigation}) {
  const [chat, setchat] = useState([]);
  useEffect(() => {
    axios.get(`http://${IP}:8000/details/chat`).then(res => {
      setchat(res.data);
    });
  }, [chat]);
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 8}}>
        <ScrollView>
          <View style={{paddingBottom: 20}}>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 30,
                marginTop: 20,
                color: '#5DB075',
                fontWeight: 'bold',
              }}>
              Message
            </Text>

            <View
              style={{
                width: '100%',
                // backgroundColor: 'blue',
                // height: 580,
                paddingLeft: 10,
                paddingRight: 10,
              }}>
              {chat.map((data, index) => (
                <TouchableOpacity key={index}>
                  <View
                    style={{
                      top: 20,
                      paddingLeft: 25,
                      backgroundColor: '#5DB075',
                      height: 80,
                      borderRadius: 20,
                      marginBottom: 10,
                    }}>
                    <Image
                      source={require('../../Assets/chat.png')}
                      resizeMode="contain"
                      style={{
                        // tintColor: '#5DB075',
                        width: 50,
                        height: 50,
                        top: 16,
                        left: 2,
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 20,
                        left: 70,
                        top: -35,
                        fontWeight: 'bold',
                        color: '#ffffff',
                      }}>
                      {data.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: 20,
                        left: 70,
                        top: -35,
                        // fontWeight: 'bold',
                        color: '#ffffff',
                      }}>
                      {data.email}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={{flex: 1.3}}></View>
    </View>
  );
}
