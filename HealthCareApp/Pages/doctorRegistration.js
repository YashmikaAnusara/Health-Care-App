import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import IP from '../ip_address';
import axios from 'axios';

export default function DoctorRegistration({navigation}) {
  const [docname, setdocname] = useState('');
  const [docemail, setdocemail] = useState('');
  const [docpassword, setdocpassword] = useState('');

  const back = () => {
    navigation.navigate('Admin_proflie');
  };

  const submit = () => {
    const doc = {docname, docemail, docpassword};
    if (docname === '') {
      alert('Enter the Doctor Name');
    } else if (docemail === '') {
      alert('Ente the Doctor Email');
    } else if (docpassword === '') {
      alert('Enter the Doctor Password');
    } else {
      axios.post(`http://${IP}:8000/details/adddoctor`, doc).then(res => {
        navigation.navigate('Admin_proflie');
      });
    }
  };

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
            onChangeText={setdocname}
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
            onChangeText={setdocemail}
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
            onChangeText={setdocpassword}
          />
          <View style={{height: 250}}>
            <TouchableOpacity onPress={submit}>
              <View
                style={{
                  top: 10,
                  backgroundColor: '#5DB075',
                  height: 50,
                  borderRadius: 25,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    alignSelf: 'center',
                    top: 10,
                    color: '#ffffff',
                  }}>
                  Register
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={back}>
              <View
                style={{
                  top: 20,
                  backgroundColor: '#5DB075',
                  height: 50,
                  borderRadius: 25,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    alignSelf: 'center',
                    top: 10,
                    color: '#ffffff',
                  }}>
                  Back
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
