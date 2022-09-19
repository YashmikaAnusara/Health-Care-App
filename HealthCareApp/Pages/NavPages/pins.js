import React, {useState, useEffect} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import IP from '../../ip_address';
import axios from 'axios';

export default function Pins({ navigation }) {
  
   const email = "test";

  const [r1, setR1] = useState(false);
  const [r2, setR2] = useState(false);
  const [r3, setR3] = useState(false);
  const [r4, setR4] = useState(false);
  const [r5, setR5] = useState(false);
  const [r6, setR6] = useState(false);
  const [r7, setR7] = useState(false);
  const [r8, setR8] = useState(false);

  useEffect(() => {
    function rimind() {
      return new Promise(resolve => {
        axios
          .get(`http://${IP}:8000/details/rimind/${email}`)
          .then(res => {
            resolve(res.data);
          })
          .catch(err => {
            alert(err.message);
          });
      });
    }

    const functions = () => {
      rimind()
        .then(data => {
          setR1(data.r1);
          setR2(data.r2);
          setR3(data.r3);
          setR4(data.r4);
          setR5(data.r5);
          setR6(data.r6);
          setR7(data.r7);
          setR8(data.r8);
        })
        .catch(err => {
          alert(err.message);
        });
    };

    functions();
  }, [email]);

  const saveInHandler = () => {
    const data = {r1, r2, r3, r4, r5, r6, r7, r8};

    axios
      .post(`http://${IP}:8000/details/user/remind/update/${email}`, data)
      .then(res => {
        if (res.data.status === true) {
          alert(res.data.message);
        } else {
          alert(res.data.message);
        }
      })
      .catch(err => {
        alert(err.message);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Body}>
        <ScrollView>
          <View style={styles.ItemHeader}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: 'green',
                fontFamily: 'Arial',
                marginTop: 20,
              }}>
              My Options
            </Text>
          </View>
          <View style={styles.ItemBody}>
            <View style={styles.RowWrapper}>
              <Text
                style={{
                  fontSize: 18,
                  marginTop: 2,
                  flex: 8,
                  color: 'rgb(119, 119, 119)',
                }}>
                Water Drinking Level Remainder
              </Text>
              <View style={{flex: 1}}>
                <CheckBox
                  disabled={false}
                  value={r1}
                  onValueChange={newValue => setR1(newValue)}
                  tintColor={'green'}
                  onCheckColor={'green'}
                />
              </View>
            </View>
            <View style={styles.RowWrapper}>
              <Text
                style={{
                  fontSize: 18,
                  marginTop: 2,
                  flex: 8,
                  color: 'rgb(119, 119, 119)',
                }}>
                Meal Time Remainder
              </Text>
              <View style={{flex: 1}}>
                <CheckBox
                  disabled={false}
                  value={r2}
                  onValueChange={newValue => setR2(newValue)}
                  tintColor={'green'}
                  onCheckColor={'green'}
                />
              </View>
            </View>
            <View style={styles.RowWrapper}>
              <Text
                style={{
                  fontSize: 18,
                  marginTop: 2,
                  flex: 8,
                  color: 'rgb(119, 119, 119)',
                }}>
                Change Postures Remainder
              </Text>
              <View style={{flex: 1}}>
                <CheckBox
                  disabled={false}
                  value={r3}
                  onValueChange={newValue => setR3(newValue)}
                  tintColor={'green'}
                  onCheckColor={'green'}
                />
              </View>
            </View>
            <View style={styles.RowWrapper}>
              <Text
                style={{
                  fontSize: 18,
                  marginTop: 2,
                  flex: 8,
                  color: 'rgb(119, 119, 119)',
                }}>
                Sleeping Time Remainder
              </Text>
              <View style={{flex: 1}}>
                <CheckBox
                  disabled={false}
                  value={r4}
                  onValueChange={newValue => setR4(newValue)}
                  tintColor={'green'}
                  onCheckColor={'green'}
                />
              </View>
            </View>
            <View style={styles.RowWrapper}>
              <Text
                style={{
                  fontSize: 18,
                  marginTop: 2,
                  flex: 8,
                  color: 'rgb(119, 119, 119)',
                }}>
                Exercise Remainder in your day
              </Text>
              <View style={{flex: 1}}>
                <CheckBox
                  disabled={false}
                  value={r5}
                  onValueChange={newValue => setR5(newValue)}
                  tintColor={'green'}
                  onCheckColor={'green'}
                />
              </View>
            </View>
            <View style={styles.RowWrapper}>
              <Text
                style={{
                  fontSize: 18,
                  marginTop: 2,
                  flex: 8,
                  color: 'rgb(119, 119, 119)',
                }}>
                Remainder to take medicine
              </Text>
              <View style={{flex: 1}}>
                <CheckBox
                  disabled={false}
                  value={r6}
                  onValueChange={newValue => setR6(newValue)}
                  tintColor={'green'}
                  onCheckColor={'green'}
                />
              </View>
            </View>
            <View style={styles.RowWrapper}>
              <Text
                style={{
                  fontSize: 18,
                  marginTop: 2,
                  flex: 8,
                  color: 'rgb(119, 119, 119)',
                }}>
                Remainder for Take breaks
              </Text>
              <View style={{flex: 1}}>
                <CheckBox
                  disabled={false}
                  value={r7}
                  onValueChange={newValue => setR7(newValue)}
                  tintColor={'green'}
                  onCheckColor={'green'}
                />
              </View>
            </View>
            <View style={styles.RowWrapper}>
              <Text
                style={{
                  fontSize: 18,
                  marginTop: 2,
                  flex: 8,
                  color: 'rgb(119, 119, 119)',
                }}>
                Remainder for smart snack choices
              </Text>
              <View style={{flex: 1}}>
                <CheckBox
                  disabled={false}
                  value={r8}
                  onValueChange={newValue => setR8(newValue)}
                  tintColor={'green'}
                  onCheckColor={'green'}
                />
              </View>
            </View>
            <Pressable
              style={({pressed}) => (pressed ? styles.button2 : styles.button)}
              onPress={saveInHandler}>
              <Text style={styles.btnText}>Save</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
      <View style={styles.Footter}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  Body: {
    flex: 8,
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  ItemHeader: {alignItems: 'center', justifyContent: 'center'},
  ItemBody: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },

  Footter: {
    flex: 1.7,
  },

  RowWrapper: {
    padding: 10,
    width: '100%',
    borderBottomWidth: 2,
    borderColor: 'rgb(224, 224, 224)',
    flexDirection: 'row',
     
  },
  button: {
    width: '80%',
    backgroundColor: '#5DB075',
    marginTop: 20,
    alignItems: 'center',
    borderRadius: 20,
    padding: 10,
  },

  button2: {
    width: '80%',
    backgroundColor: 'rgb(84, 145, 101)',
    marginTop: 20,
    alignItems: 'center',
    borderRadius: 20,
    padding: 10,
  },

  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
