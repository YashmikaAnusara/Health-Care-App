import React, {useState,useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { StackActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Proflie({ navigation }) {
  const [email,setEmail]=useState()
  // const [photo, setphoto] = useState(false);
  // const [posts, setposts] = useState(true);
  const logoutHandler = () => {
    remove()
    navigation.dispatch(StackActions.replace('Login'));
  };  
  // const photohandler = () => {
  //   setphoto(true);
  //   setposts(false);
  // };
  // const postshandler = () => {
  //   setposts(true);
  //   setphoto(false);
  // };

  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('email');
      if (value !== null) {
        // We have data!!
        // console.log(value);
        setEmail(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  
  const remove = async () => {
    try {
      await AsyncStorage.removeItem('email');
       
    } catch (error) {
      alert(error)
    }
  };

  useEffect(() => {
   retrieveData() 
  },[])

  return (
    <View style={styles.container}>
      <View style={{flex: 8}}>
        <ScrollView>
          <View style={styles.box}>
            <TouchableOpacity>
              <Text style={styles.setting}></Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={logoutHandler}>
              <Text style={styles.logout}>Logout</Text>
            </TouchableOpacity>
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
            <Text style={styles.name}>{email}</Text>
            <Text style={styles.subname}>A mantra goes here</Text>
            <View style={styles.profilebox}>
              {/* <View style={styles.profileboxtopic}>
                <Text
                  style={
                    photo
                      ? styles.profileboxtopicsub1press
                      : styles.profileboxtopicsub1
                  }
                  onPress={postshandler}>
                  Posts
                </Text>
                <Text
                  style={
                    posts
                      ? styles.profileboxtopicsub2press
                      : styles.profileboxtopicsub2
                  }
                  onPress={photohandler}>
                  Photos
                </Text>
              </View> */}
              {/* {photo && ( */}
              <View style={styles.profileboxsub1}>
                {/* <Text>
                   .
                </Text>
                <Text>
                  Test One Two Three Four Five photo djfnsjdbfnjkds fdnfjsdnf
                  jsdn fjsdfjsdfjsdn fnjfnsdjfnsdjfbsdjfbsdjfbj
                </Text>
                <Text>
                  Test One Two Three Four Five photo djfnsjdbfnjkds fdnfjsdnf
                  jsdn fjsdfjsdfjsdn fnjfnsdjfnsdjfbsdjfbsdjfbj
                </Text>
                <Text>
                  Test One Two Three Four Five photo djfnsjdbfnjkds fdnfjsdnf
                  jsdn fjsdfjsdfjsdn fnjfnsdjfnsdjfbsdjfbsdjfbj
                </Text>
                <Text>
                  Test One Two Three Four Five photo djfnsjdbfnjkds fdnfjsdnf
                  jsdn fjsdfjsdfjsdn fnjfnsdjfnsdjfbsdjfbsdjfbj
                </Text>
                <Text>
                  Test One Two Three Four Five photo djfnsjdbfnjkds fdnfjsdnf
                  jsdn fjsdfjsdfjsdn fnjfnsdjfnsdjfbsdjfbsdjfbj
                </Text>
                <Text>
                  Test One Two Three Four Five photo djfnsjdbfnjkds fdnfjsdnf
                  jsdn fjsdfjsdfjsdn fnjfnsdjfnsdjfbsdjfbsdjfbj
                </Text> */}
              </View>
              {/* )} */}
              {/* {posts && (
                <View style={styles.profileboxsub1}>
                  <Text>Sample Text</Text>
                </View>
              )} */}
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={{flex: 1.7}}></View>
    </View>
    // </SafeAreaView>
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
    height: '52%',
    backgroundColor: '#5DB075',
    display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  topic: {
    textAlign: 'center',
    top: 0,
    fontSize: 30,

    fontWeight: 'bold',
    color: 'white',
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
