import {
  View,
  Text,
  Modal,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  RefreshControl,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import IP from '../ip_address';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ClientChat = props => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const type = 'User';
  const [refresh, setRefresh] = useState(false);

  const sendData = async () => {
    try {
      const value = await AsyncStorage.getItem('email');
      const name = await AsyncStorage.getItem('name');
      if (value !== null) {
        const data = {message, type, name};
        axios
          .post(`http://${IP}:8000/details/user/chat/${value}`, data)
          .then(res => {})
          .catch(err => {
            alert(err.message);
          });
      }
    } catch (error) {
      alert(error);
    }
  };

  const retriveData = async () => {
    try {
      const value = await AsyncStorage.getItem('email');
      if (value !== null) {
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
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    retriveData();
  }, []);

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
    props.setChatActive(false);
  };

  const refreshHandler = () => {
    setRefresh(true);
     retriveData();
    setTimeout(() => {
      setRefresh(false);
    }, 3000);
  };

  return (
    <Modal>
      <View style={styles.Container}>
        <View style={styles.ChatHeader}>
          <View style={{flex: 1, marginLeft: 20}}>
            <TouchableOpacity onPress={backHandler}>
              <Image
                source={require('../Assets/back.png')}
                resizeMode="contain"
                style={{
                  width: 40,
                  height: 30,
                  right: 10,
                  tintColor: '#ffffff',
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{flex: 0.2, marginRight: 20}}>
            <TouchableOpacity onPress={refreshHandler}>
              <Image
                source={require('../Assets/back.png')}
                resizeMode="contain"
                style={{
                  width: 40,
                  height: 30,
                  left: 20,
                  tintColor: '#ffffff',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.ChatBody}>
          <ScrollView
            refreshControl={
              <RefreshControl refreshing={refresh} onRefresh={refreshHandler} />
            }>
            {chat.map((detail, index) => (
              <MessageBox
                type={detail.sender}
                message={detail.mes}
                key={index}
              />
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
    </Modal>
  );
};
const MessageBox = props => {
  return (
    <View
      style={
        props.type === 'User'
          ? {
              flex: 1,
              padding: 5,
              flexDirection: 'row-reverse',
            }
          : {
              flex: 1,
              padding: 5,
              flexDirection: 'row',
            }
      }>
      <View
        style={
          props.type === 'User'
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
                backgroundColor: 'green',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                padding: 10,
              }
        }>
        <Text style={props.type === 'User' ? styles.Text1 : styles.Text2}>
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
  ChatHeader: {
    flex: 0.8,
    flexDirection: 'row',
    backgroundColor: 'green',
    alignItems: 'center',
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
    backgroundColor: 'green',
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

export default ClientChat;
