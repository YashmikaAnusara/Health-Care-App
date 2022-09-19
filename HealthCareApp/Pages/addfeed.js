import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function Addfeed({navigation}) {
  const back = () => {
    navigation.navigate('Admin_feed');
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
              }}>
              Add Feed
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              marginTop: -30,
              marginLeft: 310,
              fontSize: 20,
              color: '#5DB075',
            }}>
            Submit
          </Text>
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
              // onChangeText={onChangeNumber}
              // value={number}
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
              // onChangeText={onChangeNumber}
              // value={number}
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
