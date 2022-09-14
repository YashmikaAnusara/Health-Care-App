import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import axios from 'axios';
import IP from '../ip_address';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const signUpHandler = () => {
    navigation.navigate('Registration');
  };

  const signInHandler = () => {
    if (email.trim().length === 0) {
      alert('Please Enter Your Email...');
    } else if (password.trim().length === 0) {
      alert('Please Enter Your password...');
    } else {
      axios
        .get(`http://${IP}:8000/details/user/signin/${email}/${password}`)
        .then(async res => {
          if (res.data.status === true) {
            if (res.data.type === 'User') {
              // alert(res.data.type);
              navigation.navigate(
                'Nav',
                {position: res.data.type},
                {email: res.data.email},
              );
            } else if (res.data.type === 'Doctor') {
              // alert(res.data.type);
              navigation.navigate(
                'Nav',
                {position: res.data.type},
                {email: res.data.email},
              );
            } else {
              // alert(res.data.type);
              navigation.navigate(
                'Nav',
                {position: res.data.type},
                {email: res.data.email},
              );
            }
          } else {
            alert(res.data.message);
          }
        })
        .catch(err => {
          alert(err.message);
        });
    }

    // navigation.navigate('Nav');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.imageWrapper}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: 'green',
                fontFamily: 'Arial',
                marginTop: 25,
              }}>
              SIGN-IN
            </Text>
            <Image source={require('../Assets/login.png')} />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Emaill..."
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Password..."
              textContentType="password"
              onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.forgot}>
              <Text style={styles.forgotText}>Forgot password?</Text>
            </TouchableOpacity>

            <Pressable
              style={({pressed}) => (pressed ? styles.button2 : styles.button)}
              onPress={signInHandler}>
              <Text style={styles.btnText}>SIGN IN</Text>
            </Pressable>

            <TouchableOpacity style={styles.signup} onPress={signUpHandler}>
              <Text style={styles.signupText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
  },
  imageWrapper: {
    backgroundColor: 'white',
    alignItems: 'center',
    flex: 1,
  },
  inputWrapper: {
    padding: 20,
    flex: 1,
  },
  input: {
    backgroundColor: 'rgb(247, 247, 247)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgb(224, 224, 224)',
    paddingLeft: 20,
    fontSize: 20,
    marginTop: 12,
    marginBottom: 8,
    height: 47,
  },

  button: {
    backgroundColor: '#5DB075',
    marginTop: 20,
    alignItems: 'center',
    borderRadius: 20,
    padding: 14,
  },

  button2: {
    backgroundColor: 'rgb(84, 145, 101)',
    marginTop: 20,
    alignItems: 'center',
    borderRadius: 20,
    padding: 14,
  },

  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

  forgot: {
    marginTop: 10,
    alignItems: 'flex-end',
    borderRadius: 20,
    padding: 5,
  },
  forgotText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5DB075',
  },

  signup: {
    marginTop: 15,
    alignItems: 'center',
    borderRadius: 20,
    padding: 5,
  },
  signupText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5DB075',
  },
});

export default Login;
