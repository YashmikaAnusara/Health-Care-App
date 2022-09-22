import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import IP from '../../ip_address';

export default function Admin_proflie({navigation, route}) {
  const user = route.params.position;
  const useremail = route.params.email;

  const [username, setusername] = useState('');

  const logoutHandler = () => {
    navigation.navigate('Login');
  };

  const doctorreg = () => {
    navigation.navigate('DoctorRegistration');
  };
  // const {position} = route.params;

  useEffect(() => {
    axios
      .get(`http://${IP}:8000/details/profile/${useremail}`)
      .then(res => {
        setusername(res.data.name);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={{flex: 8}}>
        <ScrollView>
          <View style={styles.box}>
            <Text style={styles.setting}></Text>
            <Text style={styles.logout} onPress={logoutHandler}>
              Logout
            </Text>
            <Text style={styles.topic}>Profile</Text>
            <Image
              source={require('../../Assets/pic.png')}
              resizeMode="contain"
              style={{
                width: 200,
                height: 200,
                top: 10,
                alignSelf: 'center',
              }}
            />
            <Text style={styles.name}>{username}</Text>
            <Text style={styles.subname}>{useremail}</Text>
            <Text style={styles.subname}>{user}</Text>

            <View
              style={{
                // backgroundColor: 'red',
                marginTop: 50,
                width: '100%',
                paddingLeft: 20,
                paddingRight: 20,
              }}>
              <TouchableOpacity onPress={doctorreg}>
                <View
                  style={{
                    borderRadius: 25,
                    borderWidth: 1,
                    borderColor: '#6b6b6b',
                    width: '100%',
                    height: 120,
                    backgroundColor: '#6b6b6b',
                  }}>
                  <Image
                    source={require('../../Assets/doctor.png')}
                    resizeMode="contain"
                    style={{
                      width: 180,
                      height: 120,
                      // top: 2,
                      left: 2,
                    }}
                  />
                  <Text
                    style={{
                      color: '#ffffff',
                      left: 180,
                      marginTop: -90,
                      fontSize: 25,
                    }}>
                    Doctor
                  </Text>
                  <Text
                    style={{
                      color: '#ffffff',
                      left: 180,
                      marginTop: -5,
                      fontSize: 25,
                    }}>
                    Registration
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={{flex: 1.7}}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  box: {
    width: '100%',
    height: '40%',
    backgroundColor: '#5DB075',
    display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  topic: {
    textAlign: 'center',
    top: 0,
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold',
    // alignContent: 'center',
    // justifyContent: 'center',
  },
  setting: {
    fontSize: 20,
    color: 'white',
    top: 20,
    left: 10,
  },
  logout: {
    left: 310,
    fontSize: 20,
    top: -4,
    color: 'white',
  },
  name: {
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  subname: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'black',
  },
  profilebox: {
    marginTop: 9,
    padding: 5,
    width: '100%',
    // height: '120%',
    // backgroundColor: 'red',
  },
  profileboxtopic: {
    width: '100%',
    // height: '20%',
    backgroundColor: '#E8E8E8',
    borderRadius: 100,
  },
  profileboxsub1: {
    paddingTop: 20,
    width: '100%',
    // height: '90%',
    // backgroundColor: 'blue',
  },
  profileboxtopicsub1: {
    fontSize: 20,
    top: 12,
    left: 70,
    color: 'black',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    // backgroundColor:"red"
  },
  profileboxtopicsub1press: {
    fontSize: 20,
    top: 12,
    left: 70,
    color: 'black',
  },
  profileboxtopicsub2: {
    fontSize: 20,
    left: 260,
    top: -15,
    color: 'black',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  profileboxtopicsub2press: {
    fontSize: 20,
    left: 260,
    top: -15,
    color: 'black',
  },
});
