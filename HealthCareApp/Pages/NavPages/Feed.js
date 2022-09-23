import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  // Pressable,
  RefreshControl,
  Image,
} from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
import DayStartQuestion from '../day_start_question';
import IP from '../../ip_address';
import axios from 'axios';
import DayEndQuestion from '../day_end_question';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {FAB} from 'react-native-paper';
import ClientChat from '../clientChat';

const Feed = () => {
  // const [q1a1, setQ1A1] = useState(false);
  // const [q1a2, setQ1A2] = useState(false);
  // const [q1a3, setQ1A3] = useState(false);
  // const [q1a4, setQ1A4] = useState(false);
  // const [q2a1, setQ2A1] = useState(false);
  // const [q2a2, setQ2A2] = useState(false);
  // const [q2a3, setQ2A3] = useState(false);
  // const [question1, setQuestion1] = useState('');
  // const [question2, setQuestion2] = useState('');
  // const [active, setActive] = useState(true);
  // var todayTime = new Date();
  // var time = todayTime.getHours() + ':' + todayTime.getMinutes();
  // const butttonOneHandler = () => {
  //   setActive(true);
  // };
  // const butttonTwoHandler = () => {
  //   setActive(false);
  // };
  // const saveInHandler = () => {
  //   alert('done');
  // };
  const [feeds, setFeeds] = useState([]);
  const [isVisible, setVisible] = useState(false);
  const [isVisible2, setVisible2] = useState(false);
  const [email, setEmail] = useState('');
  const [chatActive, setChatActive] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('email');
      if (value !== null) {
        setEmail(value);
        axios
          .get(`http://${IP}:8000/details/day-start/targert/find/${value}`)
          .then(res => {
            if (res.data.status === true) {
              setTimeout(() => {
                setVisible(true);
              }, 3000);
            } else {
              if (res.data.state === 'ongoing') {
                setTimeout(() => {
                  setVisible2(true);
                }, 3000);
              }
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
    retrieveData();

    axios
      .get(`http://${IP}:8000/details/my/feed`)
      .then(res => {
        if (res.data.status === false) {
          alert(res.data.message);
        } else {
          setFeeds(res.data);
        }
      })
      .catch(err => {
        alert(err.message);
      });
  }, []);

  const refreshHandler = () => {
    setRefresh(true);
    axios
      .get(`http://${IP}:8000/details/my/feed`)
      .then(res => {
        if (res.data.status === false) {
          alert(res.data.message);
        } else {
          setFeeds(res.data);
          setTimeout(() => {
            setRefresh(false);
          }, 2000);
        }
      })
      .catch(err => {
        alert(err.message);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Body}>
        {chatActive && <ClientChat setChatActive={setChatActive} />}
        <DayStartQuestion
          visible={isVisible}
          setVisible={setVisible}
          email={email}
        />
        <DayEndQuestion
          visible={isVisible2}
          setVisible={setVisible2}
          email={email}
        />
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refresh} onRefresh={refreshHandler} />
          }>
          <View style={styles.ItemHeader}>
            <Text
              style={{
                fontSize: 30,
                color: '#5DB075',
                fontWeight: 'bold',
                // fontFamily: 'Arial',
                marginTop: 20,
              }}>
              My Health Info
            </Text>
          </View>
          <View style={styles.ItemBody}>
            {/* <View style={styles.ButtonWrapper}>
              <Pressable
                style={active ? styles.ButtonOne : styles.ButtonTwo}
                onPress={butttonOneHandler}>
                <Text
                  style={
                    active
                      ? {color: '#5DB075', fontSize: 15, fontWeight: '700'}
                      : {color: 'gray', fontSize: 15, fontWeight: '700'}
                  }>
                  Suggestion
                </Text>
              </Pressable>
              <Pressable
                style={!active ? styles.ButtonOne : styles.ButtonTwo}
                onPress={butttonTwoHandler}>
                <Text
                  style={
                    active
                      ? {color: 'gray', fontSize: 15, fontWeight: '700'}
                      : {color: '#5DB075', fontSize: 15, fontWeight: '700'}
                  }>
                  Question
                </Text>
              </Pressable>
            </View> */}
            {/* {active ? ( */}
            <View style={styles.ContentBody}>
              {feeds.map((data, index) => (
                <Suggestion
                  topic={data.feedtopic}
                  body={data.feedbody}
                  key={index}
                />
              ))}
              {feeds.map((data, index) => (
                <Suggestion
                  topic={data.feedtopic}
                  body={data.feedbody}
                  key={index}
                />
              ))}
            </View>
            {/*) : (
              <View style={styles.ContentBody}>
                
                <View style={styles.QuestionContainer}>
                  <Text style={{color: 'rgb(119, 119, 119)'}}>
                    01. How many times a day do you drink water?
                  </Text>
                  <View style={styles.AnswerWrapper}>
                    <Text
                      style={{
                        marginTop: 4,
                        flex: 4,
                        color: 'rgb(119, 119, 119)',
                      }}>
                      Two times only
                    </Text>
                    <View style={{flex: 1}}>
                      <CheckBox
                        disabled={false}
                        value={q1a1}
                        onValueChange={newValue => {
                          setQ1A1(newValue),
                            setQ1A2(!newValue),
                            setQ1A3(!newValue),
                            setQ1A4(!newValue),
                            setQuestion1(1);
                        }}
                        tintColor={'green'}
                        onCheckColor={'green'}
                      />
                    </View>
                  </View>
                  <View style={styles.AnswerWrapper}>
                    <Text
                      style={{
                        marginTop: 4,
                        flex: 4,
                        color: 'rgb(119, 119, 119)',
                      }}>
                      Three times only
                    </Text>
                    <View style={{flex: 1}}>
                      <CheckBox
                        disabled={false}
                        value={q1a2}
                        onValueChange={newValue => {
                          setQ1A2(newValue),
                            setQ1A1(!newValue),
                            setQ1A3(!newValue),
                            setQ1A4(!newValue),
                            setQuestion1(2);
                        }}
                        tintColor={'green'}
                        onCheckColor={'green'}
                      />
                    </View>
                  </View>
                  <View style={styles.AnswerWrapper}>
                    <Text
                      style={{
                        marginTop: 4,
                        flex: 4,
                        color: 'rgb(119, 119, 119)',
                      }}>
                      Four times only
                    </Text>
                    <View style={{flex: 1}}>
                      <CheckBox
                        disabled={false}
                        value={q1a3}
                        onValueChange={newValue => {
                          setQ1A1(!newValue),
                            setQ1A2(!newValue),
                            setQ1A3(newValue),
                            setQ1A4(!newValue),
                            setQuestion1(3);
                        }}
                        tintColor={'green'}
                        onCheckColor={'green'}
                      />
                    </View>
                  </View>
                  <View style={styles.AnswerWrapper}>
                    <Text
                      style={{
                        marginTop: 4,
                        flex: 4,
                        color: 'rgb(119, 119, 119)',
                      }}>
                      More than four times
                    </Text>
                    <View style={{flex: 1}}>
                      <CheckBox
                        disabled={false}
                        value={q1a4}
                        onValueChange={newValue => {
                          setQ1A1(!newValue),
                            setQ1A2(!newValue),
                            setQ1A3(!newValue),
                            setQ1A4(newValue),
                            setQuestion1(4);
                        }}
                        tintColor={'green'}
                        onCheckColor={'green'}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.QuestionContainer}>
                  <Text style={{color: 'rgb(119, 119, 119)'}}>
                    02. Do you eat regularly?
                  </Text>
                  <View style={styles.AnswerWrapper}>
                    <Text
                      style={{
                        marginTop: 4,
                        flex: 4,
                        color: 'rgb(119, 119, 119)',
                      }}>
                      Yes
                    </Text>
                    <View style={{flex: 1}}>
                      <CheckBox
                        disabled={false}
                        value={q2a1}
                        onValueChange={newValue => {
                          setQ2A1(newValue),
                            setQ2A2(!newValue),
                            setQ2A3(!newValue),
                            setQuestion2(1);
                        }}
                        tintColor={'green'}
                        onCheckColor={'green'}
                      />
                    </View>
                  </View>
                  <View style={styles.AnswerWrapper}>
                    <Text
                      style={{
                        marginTop: 4,
                        flex: 4,
                        color: 'rgb(119, 119, 119)',
                      }}>
                      No
                    </Text>
                    <View style={{flex: 1}}>
                      <CheckBox
                        disabled={false}
                        value={q2a2}
                        onValueChange={newValue => {
                          setQ2A1(!newValue),
                            setQ2A2(newValue),
                            setQ2A3(!newValue),
                            setQuestion2(2);
                        }}
                        tintColor={'green'}
                        onCheckColor={'green'}
                      />
                    </View>
                  </View>
                  <View style={styles.AnswerWrapper}>
                    <Text
                      style={{
                        marginTop: 4,
                        flex: 4,
                        color: 'rgb(119, 119, 119)',
                      }}>
                      Some days only
                    </Text>
                    <View style={{flex: 1}}>
                      <CheckBox
                        disabled={false}
                        value={q2a3}
                        onValueChange={newValue => {
                          setQ2A1(!newValue),
                            setQ2A2(!newValue),
                            setQ2A3(newValue),
                            setQuestion2(3);
                        }}
                        tintColor={'green'}
                        onCheckColor={'green'}
                      />
                    </View>
                  </View>
                </View>

                 
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Pressable
                    style={({pressed}) =>
                      pressed ? styles.button2 : styles.button
                    }
                    onPress={saveInHandler}>
                    <Text style={styles.btnText}>Save</Text>
                  </Pressable>
                </View>
              </View>
            )}*/}
          </View>
        </ScrollView>
        <FAB
          style={styles.fab}
          onPress={() => setChatActive(true)}
          icon={{
            uri: 'https://avatars0.githubusercontent.com/u/17571969?v=3&s=400',
          }}
        />
      </View>
      <View style={styles.Footter}></View>
    </SafeAreaView>
  );
};

const Suggestion = props => {
  return (
    <View style={styles.SuggestionContainer}>
      <View style={{flex: 1, padding: 8}}>
        <Image
          style={{width: 70, height: 70}}
          source={require('../../Assets/login.png')}
        />
      </View>
      <View style={{flex: 5}}>
        <Text
          style={{
            margin: 8,
            fontSize: 16,
            fontWeight: 'bold',
            color: 'black',
          }}>
          {props.topic}
        </Text>
        <Text
          style={{
            marginLeft: 8,
            marginBottom: 8,
            marginRight: 8,
            color: 'rgb(119, 119, 119)',
          }}>
          {props.body}
        </Text>
      </View>
    </View>
  );
};

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
  },
  Footter: {
    flex: 1.7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonWrapper: {
    flexDirection: 'row',
    width: '90%',
    height: 50,
    borderRadius: 50,
    marginTop: 20,
    borderWidth: 2,
    borderColor: 'rgb(224, 224, 224)',
    backgroundColor: 'rgb(248, 248, 248)',
  },
  ButtonOne: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'rgb(224, 224, 224)',
    backgroundColor: 'white',
  },
  ButtonTwo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ContentBody: {
    width: '100%',
    padding: 10,
  },
  SuggestionContainer: {
    backgroundColor: 'rgb(235, 235, 235)',
    width: '100%',
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    flex: 1,
  },
  AnswerWrapper: {
    flexDirection: 'row',
    flex: 1,
    paddingLeft: 21,
  },
  QuestionContainer: {
    backgroundColor: 'rgb(235, 235, 235)',
    width: '100%',
    borderRadius: 8,
    paddingLeft: 20,
    padding: 10,
    marginBottom: 5,
  },
  button: {
    width: '80%',
    backgroundColor: '#5DB075',
    marginTop: 10,
    alignItems: 'center',
    borderRadius: 20,
    padding: 10,
  },

  button2: {
    width: '80%',
    backgroundColor: 'rgb(84, 145, 101)',
    marginTop: 10,
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
  fab: {
    backgroundColor: 'green',
    position: 'absolute',
    marginRight: 20,
    right: 0,
    bottom: 0,
  },
});

export default Feed;
