import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/core';

const Login = () => {
  const navigation=useNavigation()

  const signUpHandler = () => {
    navigation.navigate('Registration');
}

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.imageWrapper}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: 'black',
                marginTop: 25,
              }}>
              SIGN-IN
            </Text>
            <Image source={require('../Assets/login.png')} />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput style={styles.input} placeholder="Emaill..." />
            <TextInput
              style={styles.input}
              placeholder="Password..."
              textContentType="password"
            />
            <Pressable style={styles.forgot}>
              <Text style={styles.forgotText}>Forgot password?</Text>
            </Pressable>

            <Pressable
              style={({pressed}) => (pressed ? styles.button2 : styles.button)}>
              <Text style={styles.btnText}>SIGN IN</Text>
            </Pressable>

            <Pressable style={styles.signup} onPress={signUpHandler}>
              <Text style={styles.signupText}>Sign Up</Text>
            </Pressable>
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
    padding: 30,
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
    marginTop: 20,
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