import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
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
          <View style={{marginTop: 15}}>
            <Text style={{marginLeft: 20, marginTop: 10}}>
              Enter the Feed Topic
            </Text>
            <TextInput
              style={{
                marginTop: 5,
                height: 50,
                margin: 12,
                borderWidth: 0.8,
                padding: 10,
                borderRadius: 20,
              }}
              onChangeText={setfeedtopic}
              placeholder="Enter the Feed Topic"
              keyboardType="default"
            />
            <Text style={{marginLeft: 20, marginTop: 10}}>
              Enter the Feed Body
            </Text>
            <TextInput
              style={{
                marginTop: 5,
                height: 'auto',
                margin: 12,
                borderWidth: 0.8,
                padding: 10,
                borderRadius: 20,
              }}
              onChangeText={setfeedbody}
              placeholder="Enter the Feed Body"
              keyboardType="default"
              multiline={true}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
