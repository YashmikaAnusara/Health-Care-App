import {View, Text, ScrollView, Image, TextInput} from 'react-native';
import React from 'react';

export default function DoctorRegistration() {
  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <ScrollView>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 30,
            marginTop: 20,
            color: '#5DB075',
            fontWeight: 'bold',
          }}>
          Doctor Registration
        </Text>
        <Image
          source={require('../Assets/doc.png')}
          resizeMode="contain"
          style={{
            width: 300,
            height: 250,
            top: 10,
            alignSelf: 'center',
          }}
        />
        <View style={{paddingLeft: 10, paddingRight: 10}}>
          <TextInput
            style={{
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
            placeholder="Enter the Name"
            placeholderTextColor="rgb(119, 119, 119)"
            //   onChangeText={setName}
          />
          <TextInput
            style={{
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
            placeholder="Enter the Email"
            placeholderTextColor="rgb(119, 119, 119)"
            //   onChangeText={setName}
          />
          <TextInput
            style={{
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
            placeholder="Enter the Password"
            placeholderTextColor="rgb(119, 119, 119)"
            //   onChangeText={setName}
          />
        </View>
      </ScrollView>
    </View>
  );
}
