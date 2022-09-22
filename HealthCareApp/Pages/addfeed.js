import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import IP from '../ip_address';

export default function Addfeed({navigation}) {
  const [feedtopic, setfeedtopic] = useState('');
  const [feedbody, setfeedbody] = useState('');

  const back = () => {
    navigation.navigate('Admin_feed');
  };

  const submit = () => {
    const feed = {feedtopic, feedbody};
    if (feedtopic === '') {
      alert('Enter the Feed Topic');
    } else if (feedbody === '') {
      alert('Ente the Feed Body');
    } else {
      axios.post(`http://${IP}:8000/details/addfeed`, feed).then(res => {
        navigation.navigate('Admin_feed');
      });
    }
  };

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 8}}>
        <ScrollView>
          <TouchableOpacity onPress={back}>
            <Text
              style={{
                marginTop: 30,
                marginLeft: 20,
                fontSize: 20,
                color: '#5DB075',
              }}>
              Back
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                marginTop: -35,
                fontSize: 30,
                alignSelf: 'center',
                color: '#5DB075',
                fontWeight: 'bold',
              }}>
              Add Feed
            </Text>
          </TouchableOpacity>
          <TouchableOpacity on onPress={submit}>
            <Text
              style={{
                marginTop: -31,
                marginLeft: 310,
                fontSize: 20,
                color: '#5DB075',
              }}>
              Submit
            </Text>
          </TouchableOpacity>
          <Image
            source={require('../Assets/feedpic.png')}
            resizeMode="contain"
            style={{
              width: 300,
              height: 250,
              top: 10,
              alignSelf: 'center',
            }}
          />
          <View style={{marginTop: 15}}>
            <Text style={{marginLeft: 20, marginTop: 10}}>
              Enter the Feed Topic
            </Text>
            <View style={{paddingRight: 5, paddingLeft: 5}}>
              <TextInput
                style={{
                  top: 5,
                  backgroundColor: 'rgb(247, 247, 247)',
                  borderRadius: 30,
                  borderWidth: 1,
                  borderColor: 'rgb(224, 224, 224)',
                  paddingLeft: 20,
                  fontSize: 20,
                  marginBottom: 12,
                  height: 47,
                  color: 'rgb(119, 119, 119)',
                }}
                onChangeText={setfeedtopic}
                placeholder="Enter the Feed Topic"
                placeholderTextColor="rgb(119, 119, 119)"
                keyboardType="default"
              />
            </View>
            <Text style={{marginLeft: 20, marginTop: 10}}>
              Enter the Feed Body
            </Text>
            <View style={{paddingRight: 5, paddingLeft: 5}}>
              <TextInput
                style={{
                  top: 5,
                  backgroundColor: 'rgb(247, 247, 247)',
                  borderRadius: 30,
                  borderWidth: 1,
                  borderColor: 'rgb(224, 224, 224)',
                  paddingLeft: 20,
                  fontSize: 20,
                  marginBottom: 12,
                  // height: 47,
                  color: 'rgb(119, 119, 119)',
                }}
                onChangeText={setfeedbody}
                placeholder="Enter the Feed Body"
                placeholderTextColor="rgb(119, 119, 119)"
                keyboardType="default"
                multiline={true}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
