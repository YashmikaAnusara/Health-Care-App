import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import IP from '../../ip_address';

export default function Admin_feed({navigation}) {
  const [feed, setfeed] = useState([]);
  const [search, setsearch] = useState('');

  const addfeed = () => {
    navigation.navigate('AddFeed');
  };

  const deletehandler = id =>
    Alert.alert(
      '',
      'Do you want to delete this feed ?',
      [
        {
          text: 'Cancel',
          // onPress: () => console.log(''),
        },

        {
          text: 'Delete',
          onPress: () => {
            axios
              .delete(`http://${IP}:8000/details/feed/${id}`)
              .then(res => {
                console.log(`This ${id} deleted`);
              })
              .catch(err => {
                alert(err);
              });
          },
        },
      ],
      {cancelable: false},
    );

  useEffect(() => {
    axios.get(`http://${IP}:8000/details/feed`).then(res => {
      setfeed(res.data);
    });
  }, [feed]);

  const feeds = feed.filter(data => {
    return data.feedtopic.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <View style={styles.container}>
      <View style={{flex: 8}}>
        <ScrollView>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 30,
              marginTop: 20,
              color: '#5DB075',
              fontWeight: 'bold',
            }}>
            Feed
          </Text>
          <TouchableOpacity onPress={addfeed}>
            <Text
              style={{
                marginTop: -32,
                marginLeft: 325,
                fontSize: 20,
                color: '#5DB075',
              }}>
              Add
            </Text>
          </TouchableOpacity>
          <TextInput
            style={{
              marginTop: 20,
              height: 50,
              margin: 12,
              borderWidth: 0.8,
              padding: 10,
              borderRadius: 20,
            }}
            onChangeText={setsearch}
            placeholder="Search"
            keyboardType="default"
          />
          {feeds.map((data, index) => (
            <View style={{flex: 2, marginTop: 10}} key={index}>
              <TouchableOpacity onPress={() => deletehandler(data._id)}>
                <View style={{paddingRight: 10, paddingLeft: 10}}>
                  <Image
                    source={require('../../Assets/feed_i.png')}
                    resizeMode="contain"
                    style={{
                      marginTop: 10,
                      marginLeft: 0,
                      width: 100,
                      height: 100,
                      top: 22,
                      // alignSelf: 'center',
                    }}
                  />
                  <Text
                    style={{
                      marginLeft: 100,
                      fontWeight: 'bold',
                      marginTop: -57,
                      fontSize: 18,
                    }}>
                    {data.feedtopic}
                  </Text>
                  <Text
                    style={{
                      marginLeft: 100,
                      marginTop: 0,
                      fontSize: 18,
                    }}>
                    {data.feedbody}
                  </Text>
                </View>
              </TouchableOpacity>
              {/* ============================================= */}
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={{flex: 1.4}}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: '#5DB075',
  },
});
