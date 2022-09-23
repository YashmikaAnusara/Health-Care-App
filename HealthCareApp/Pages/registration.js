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
import CheckBox from '@react-native-community/checkbox';

import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/core';
// import SelectDropdown from 'react-native-select-dropdown';

const job = ['User', 'Doctor', 'Manager'];

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('User');
  const [password, setPassword] = useState('');
  const [permission, setPermission] = useState(false);

  const navigation = useNavigation();

  const signInHandler = () => {
    navigation.navigate('Login');
  };

  const signUpHandler = () => {
    if (name.trim().length === 0) {
      alert('Please Enter Your Name...');
    } else if (email.trim().length === 0) {
      alert('Please Enter Your Email...');
    } else if (password.trim().length === 0) {
      alert('Please Enter Your Password...');
    } else if (type.trim().length === 0) {
      alert('Please Select a User ...');
    } else {
      navigation.navigate('signupQuestion', {
        name: name,
        email: email,
        type: type,
        password: password,
        permission: permission,
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.imageWrapper}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  backgroundColor: 'white',
                  flex: 1,
                  alignItems: 'flex-start',
                }}>
                <TouchableOpacity onPress={signInHandler}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: '#5DB075',
                      marginTop: 25,
                      marginLeft: 20,
                      marginBottom: 15,
                    }}>
                    Back
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  backgroundColor: 'white',
                  flex: 1,
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 30,
                    color: '#5DB075',
                    fontWeight: 'bold',
                    marginTop: 20,
                    marginBottom: 15,
                  }}>
                  SIGN-UP
                </Text>
              </View>

              <View
                style={{
                  backgroundColor: 'white',
                  flex: 1,
                  alignItems: 'flex-end',
                }}></View>
            </View>
            <Image
              source={require('../Assets/signup.png')}
              style={{width: 250, height: 250}}
            />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Name..."
              placeholderTextColor="rgb(119, 119, 119)"
              onChangeText={setName}
            />
            <TextInput
              style={styles.input}
              placeholder="Email..."
              placeholderTextColor="rgb(119, 119, 119)"
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Password..."
              placeholderTextColor="rgb(119, 119, 119)"
              textContentType="password"
              onChangeText={setPassword}
            />
            {/* <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  marginTop: 13,
                  fontSize: 18,
                  marginRight: 20,
                  marginLeft: 10,
                  color: 'rgb(119, 119, 119)',
                }}>
                User Type:
              </Text>
              <SelectDropdown
                data={job}
                onSelect={(selectedItem, index) => {
                  setType(selectedItem);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
              />
            </View> */}
            <View style={styles.checkboxWrapper}>
              <CheckBox
                disabled={false}
                value={permission}
                onValueChange={newValue => {
                  setPermission(newValue)
                     
                }}
                tintColor={'green'}
                onCheckColor={'green'}
              />
              <Text style={{flex: 9, fontSize: 15}}>
                I would like to receive your newsletter and other promotional
                information.
              </Text>
            </View>
            <Pressable
              style={({pressed}) => (pressed ? styles.button2 : styles.button)}
              onPress={signUpHandler}>
              <Text style={styles.btnText}>CONTINUE</Text>
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
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 10,
    flex: 1,
  },

  input: {
    backgroundColor: 'rgb(247, 247, 247)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgb(224, 224, 224)',
    paddingLeft: 20,
    fontSize: 20,
    marginBottom: 12,
    height: 47,
    color: 'rgb(119, 119, 119)',
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

  checkboxWrapper: {
    flexDirection: 'row',
    paddingLeft: 5,
    marginTop: 18,
  },
});

export default Registration;
