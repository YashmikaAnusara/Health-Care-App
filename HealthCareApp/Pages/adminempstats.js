import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Adminempstats({route, navigation}) {
  const name = route.params.useremail;
  const email = route.params.username;

  const backHandler = () => {
    navigation.navigate('Admin_stats');
  };

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 8}}>
        <TouchableOpacity onPress={backHandler}>
          <Image
            source={require('../Assets/back.png')}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
              top: 27,
              left: 5,
              tintColor: '#5DB075',
            }}
          />
        </TouchableOpacity>
        <ScrollView>
          <View style={{paddingBottom: 25, height: 700}}>
            <Text
              style={{
                color: '#5DB075',
                fontSize: 25,
                alignSelf: 'center',
                top: -5,
              }}>
              {name} Stats
            </Text>
            <View style={{paddingTop: 60}}>
              <View
                style={{marginBottom: 20, paddingLeft: 10, paddingRight: 10}}>
                <Text style={{fontSize: 17}}>
                  01. How many liters of water will you think to drink?
                </Text>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: 15,
                    top: 10,
                  }}>
                  Answer
                </Text>
              </View>
              <View
                style={{marginBottom: 20, paddingLeft: 10, paddingRight: 10}}>
                <Text style={{fontSize: 17, top: 20}}>
                  02. How far will you wish to walk?
                </Text>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: 15,
                    top: 30,
                  }}>
                  Answer
                </Text>
              </View>
              <View
                style={{marginBottom: 20, paddingLeft: 10, paddingRight: 10}}>
                <Text style={{fontSize: 17, top: 30}}>
                  03. Do you suffer from diabetes?
                </Text>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: 15,
                    top: 40,
                  }}>
                  Answer
                </Text>
              </View>
              <View
                style={{marginBottom: 20, paddingLeft: 10, paddingRight: 10}}>
                <Text style={{fontSize: 17, top: 40}}>
                  04. How far will you wish to walk?
                </Text>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: 15,
                    top: 50,
                  }}>
                  Answer
                </Text>
              </View>
              <View
                style={{marginBottom: 20, paddingLeft: 10, paddingRight: 10}}>
                <Text style={{fontSize: 17, top: 50}}>
                  05. How many time do you hope to do workout today?
                </Text>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: 15,
                    top: 50,
                  }}>
                  Answer
                </Text>
              </View>
              <View
                style={{marginBottom: 20, paddingLeft: 10, paddingRight: 10}}>
                <Text style={{fontSize: 17, top: 60}}>
                  06. Range? (If you suffer from high/low blood pressure)
                </Text>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: 15,
                    top: 60,
                  }}>
                  Answer
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
