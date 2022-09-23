import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import IP from '../ip_address';

export default function AdminChat({route, navigation}) {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const type = 'Admin';

  const value = route.params.useremail;
  const name = route.params.username;

  const sendData = async () => {
    const data = {message, type, name};
    axios
      .post(`http://${IP}:8000/details/user/chat/${value}`, data)
      .then(res => {})
      .catch(err => {
        alert(err.message);
      });
  };

  const retriveData = async () => {
    axios
      .get(`http://${IP}:8000/details/user/chat/get/${value}`)
      .then(res => {
        if (res.data.status === true) {
          setChat(res.data.messages);
        } else {
          // alert(res.data.message);
        }
      })
      .catch(err => {
        alert(err.message);
      });
  };

  useEffect(() => {
    retriveData();
  }, [chat]);

  const sendHandler = () => {
    if (message.trim().length !== 0) {
      sendData();
    }
    setMessage('');
    setTimeout(() => {
      retriveData();
    }, 1000);
  };

  const backHandler = () => {
    navigation.navigate('Admin_message');
  };

  return (
    <View style={styles.Container}>
      <View style={{flex: 0.8}}>
        <View style={{flex: 1, marginLeft: 20}}>
          <TouchableOpacity onPress={backHandler}>
            <Image
              source={require('../Assets/back.png')}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                top: 18,
                right: 10,
                tintColor: '#5DB075',
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, alignSelf: 'center'}}>
          <TouchableOpacity onPress={backHandler}>
            <Text
              style={{
                fontSize: 25,
                top: -13,
                // color: '#5DB075',
                fontWeight: 'bold',
                fontStyle: 'italic',
              }}>
              {name}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.ChatBody}>
        <ScrollView>
          {chat.map((detail, index) => (
            <MessageBox type={detail.sender} message={detail.mes} key={index} />
          ))}
        </ScrollView>
      </View>
      <View style={styles.ChatInput}>
        <TextInput
          style={styles.Input}
          placeholder="Type a message..."
          placeholderTextColor="rgb(119, 119, 119)"
          onChangeText={setMessage}
          value={message}
        />
        <TouchableOpacity style={styles.Send} onPress={sendHandler}>
          <Text style={styles.SendText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const MessageBox = props => {
  return (
    <View
      style={
        props.type === 'User'
          ? {
              flex: 1,
              padding: 5,
              flexDirection: 'row',
            }
          : {
              flex: 1,
              padding: 5,
              flexDirection: 'row-reverse',
            }
      }>
      <View
        style={
          props.type === 'Admin'
            ? {
                width: '70%',
                backgroundColor: 'rgb(235, 235, 235)',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderBottomLeftRadius: 10,
                padding: 10,
              }
            : {
                width: '70%',
                backgroundColor: '#5DB075',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                padding: 10,
              }
        }>
        <Text style={props.type === 'Admin' ? styles.Text1 : styles.Text2}>
          {props.message}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  ChatBody: {
    flex: 8,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 10,
  },
  ChatInput: {
    flex: 1,
    // backgroundColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  Text1: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
  },
  Text2: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
    fontWeight: 'bold',
  },
  Input: {
    backgroundColor: 'rgb(247, 247, 247)',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderWidth: 1,
    borderColor: 'rgb(224, 224, 224)',
    paddingLeft: 20,
    fontSize: 17,
    height: 47,
    color: 'rgb(119, 119, 119)',
    flex: 3,
  },
  Send: {
    backgroundColor: '#5DB075',
    height: 47,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',

    flex: 1,
  },
  SendText: {fontSize: 18, fontWeight: 'bold', color: 'white'},
  MessageBox: {},
});
