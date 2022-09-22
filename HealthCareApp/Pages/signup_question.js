import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import IP from '../ip_address';
import axios from 'axios';
import {useNavigation} from '@react-navigation/core';
import {StackActions} from '@react-navigation/native';

const SignupQuestion = ({route}) => {
  const navigation = useNavigation();
  const {name, email, type, password, permission} = route.params;

  const [q1a1, setQ1A1] = useState(false);
  const [q1a2, setQ1A2] = useState(false);
  const [q1a3, setQ1A3] = useState(false);
  const [answer1, setQuestion1] = useState();

  const [q2a1, setQ2A1] = useState(false);
  const [q2a2, setQ2A2] = useState(false);
  const [answer2, setQuestion2] = useState();

  const [q3a1, setQ3A1] = useState(false);
  const [q3a2, setQ3A2] = useState(false);
  const [answer3, setQuestion3] = useState();

  const [q4a1, setQ4A1] = useState(false);
  const [q4a2, setQ4A2] = useState(false);
  const [q4a3, setQ4A3] = useState(false);
  const [answer4, setQuestion4] = useState('Normal');

  const [q5a1, setQ5A1] = useState(false);
  const [q5a2, setQ5A2] = useState(false);
  const [answer5, setQuestion5] = useState();

  const [q6a1, setQ6A1] = useState(false);
  const [q6a2, setQ6A2] = useState(false);
  const [answer6, setQuestion6] = useState('Normal');

  const [q7a1, setQ7A1] = useState(false);
  const [q7a2, setQ7A2] = useState(false);
  const [answer7, setQuestion7] = useState();

  const continueHandler = () => {
    const data = {
      name,
      email,
      type,
      password,
      permission,
    };
    const data1 = {
      question1: answer1,
      question2: answer2,
      question3: answer3,
      question4: answer4,
      question5: answer5,
      question6: answer6,
      question7: answer7,
    };

    axios
      .post(`http://${IP}:8000/details/user/save`, data)
      .then(res => {
        if (res.data.status === true) {
          axios
            .post(
              `http://${IP}:8000/details/user/helth/info/save/${email}`,
              data1,
            )
            .then(res => {
              if (res.data.status === true) {
                alert(res.data.message);
                setTimeout(() => {
                  navigation.dispatch(StackActions.replace('Login'));
                }, 2000);
              } else {
                alert(res.data.message);
                setTimeout(() => {
                  navigation.dispatch(StackActions.replace('Login'));
                }, 2000);
              }
            })
            .catch(err => {
              alert(err.message);
            });
        } else {
          alert(res.data.message);
        }
      })
      .catch(err => {
        alert(err.message);
      });
  };
  // let email = route.params.email

  // useEffect(() => {
  //   console.log(email);
  // },[])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
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
              HEALTH INFO
            </Text>
          </View>
          <View style={styles.ContentBody}>
            <View style={styles.QuestionContainer}>
              <Text style={{color: 'rgb(119, 119, 119)'}}>
                01. How old are you?
              </Text>
              <View style={styles.AnswerWrapper}>
                <Text
                  style={{marginTop: 4, flex: 4, color: 'rgb(119, 119, 119)'}}>
                  20 - 30
                </Text>
                <View style={{flex: 1}}>
                  <CheckBox
                    disabled={false}
                    value={q1a1}
                    onValueChange={newValue => {
                      setQ1A1(newValue),
                        setQ1A2(!newValue),
                        setQ1A3(!newValue),
                        setQuestion1('20 - 30');
                    }}
                    tintColor={'green'}
                    onCheckColor={'green'}
                  />
                </View>
              </View>
              <View style={styles.AnswerWrapper}>
                <Text
                  style={{marginTop: 4, flex: 4, color: 'rgb(119, 119, 119)'}}>
                  31 - 40
                </Text>
                <View style={{flex: 1}}>
                  <CheckBox
                    disabled={false}
                    value={q1a2}
                    onValueChange={newValue => {
                      setQ1A1(!newValue),
                        setQ1A2(newValue),
                        setQ1A3(!newValue),
                        setQuestion1('31-40');
                    }}
                    tintColor={'green'}
                    onCheckColor={'green'}
                  />
                </View>
              </View>
              <View style={styles.AnswerWrapper}>
                <Text
                  style={{marginTop: 4, flex: 4, color: 'rgb(119, 119, 119)'}}>
                  Above 40
                </Text>
                <View style={{flex: 1}}>
                  <CheckBox
                    disabled={false}
                    value={q1a3}
                    onValueChange={newValue => {
                      setQ1A1(!newValue),
                        setQ1A2(!newValue),
                        setQ1A3(newValue),
                        setQuestion1('Above 40');
                    }}
                    tintColor={'green'}
                    onCheckColor={'green'}
                  />
                </View>
              </View>
            </View>

            <View style={styles.QuestionContainer}>
              <Text style={{color: 'rgb(119, 119, 119)'}}>
                02. Do you suffer from chronic pain? (2 months or more of
                continuous pain)?
              </Text>
              <View style={styles.AnswerWrapper}>
                <Text
                  style={{marginTop: 4, flex: 4, color: 'rgb(119, 119, 119)'}}>
                  Yes
                </Text>
                <View style={{flex: 1}}>
                  <CheckBox
                    disabled={false}
                    value={q2a1}
                    onValueChange={newValue => {
                      setQ2A1(newValue),
                        setQ2A2(!newValue),
                        setQuestion2('Yes');
                    }}
                    tintColor={'green'}
                    onCheckColor={'green'}
                  />
                </View>
              </View>
              <View style={styles.AnswerWrapper}>
                <Text
                  style={{marginTop: 4, flex: 4, color: 'rgb(119, 119, 119)'}}>
                  No
                </Text>
                <View style={{flex: 1}}>
                  <CheckBox
                    disabled={false}
                    value={q2a2}
                    onValueChange={newValue => {
                      setQ2A1(!newValue), setQ2A2(newValue), setQuestion2('No');
                    }}
                    tintColor={'green'}
                    onCheckColor={'green'}
                  />
                </View>
              </View>
            </View>

            <View style={styles.QuestionContainer}>
              <Text style={{color: 'rgb(119, 119, 119)'}}>
                03. Do you suffer from diabetes?
              </Text>
              <View style={styles.AnswerWrapper}>
                <Text
                  style={{marginTop: 4, flex: 4, color: 'rgb(119, 119, 119)'}}>
                  Yes
                </Text>
                <View style={{flex: 1}}>
                  <CheckBox
                    disabled={false}
                    value={q3a1}
                    onValueChange={newValue => {
                      setQ3A1(newValue),
                        setQ3A2(!newValue),
                        setQuestion3('Yes');
                    }}
                    tintColor={'green'}
                    onCheckColor={'green'}
                  />
                </View>
              </View>
              <View style={styles.AnswerWrapper}>
                <Text
                  style={{marginTop: 4, flex: 4, color: 'rgb(119, 119, 119)'}}>
                  No
                </Text>
                <View style={{flex: 1}}>
                  <CheckBox
                    disabled={false}
                    value={q3a2}
                    onValueChange={newValue => {
                      setQ3A1(!newValue), setQ3A2(newValue), setQuestion3('No');
                    }}
                    tintColor={'green'}
                    onCheckColor={'green'}
                  />
                </View>
              </View>
            </View>

            <View style={styles.QuestionContainer}>
              <Text style={{color: 'rgb(119, 119, 119)'}}>
                04. Range? (If you suffer from diabetes)
              </Text>
              <View style={styles.AnswerWrapper}>
                <Text
                  style={{marginTop: 4, flex: 4, color: 'rgb(119, 119, 119)'}}>
                  100 - 125 mg/dL
                </Text>
                <View style={{flex: 1}}>
                  <CheckBox
                    disabled={false}
                    value={q4a1}
                    onValueChange={newValue => {
                      setQ4A1(newValue),
                        setQ4A2(!newValue),
                        setQ4A3(!newValue),
                        setQuestion4('100-125 mg/dL');
                    }}
                    tintColor={'green'}
                    onCheckColor={'green'}
                  />
                </View>
              </View>
              <View style={styles.AnswerWrapper}>
                <Text
                  style={{marginTop: 4, flex: 4, color: 'rgb(119, 119, 119)'}}>
                  126 - 151 mg/dL
                </Text>
                <View style={{flex: 1}}>
                  <CheckBox
                    disabled={false}
                    value={q4a2}
                    onValueChange={newValue => {
                      setQ4A1(!newValue),
                        setQ4A2(newValue),
                        setQ4A3(!newValue),
                        setQuestion4('126-151 mg/dL');
                    }}
                    tintColor={'green'}
                    onCheckColor={'green'}
                  />
                </View>
              </View>
              <View style={styles.AnswerWrapper}>
                <Text
                  style={{marginTop: 4, flex: 4, color: 'rgb(119, 119, 119)'}}>
                  151 mg/dL or higher
                </Text>
                <View style={{flex: 1}}>
                  <CheckBox
                    disabled={false}
                    value={q4a3}
                    onValueChange={newValue => {
                      setQ4A1(!newValue),
                        setQ4A2(!newValue),
                        setQ4A3(newValue),
                        setQuestion4('151 mg/dL or higher');
                    }}
                    tintColor={'green'}
                    onCheckColor={'green'}
                  />
                </View>
              </View>
            </View>

            <View style={styles.QuestionContainer}>
              <Text style={{color: 'rgb(119, 119, 119)'}}>
                05. Do you suffer from high/low blood pressure?
              </Text>
              <View style={styles.AnswerWrapper}>
                <Text
                  style={{marginTop: 4, flex: 4, color: 'rgb(119, 119, 119)'}}>
                  Yes
                </Text>
                <View style={{flex: 1}}>
                  <CheckBox
                    disabled={false}
                    value={q5a1}
                    onValueChange={newValue => {
                      setQ5A1(newValue),
                        setQ5A2(!newValue),
                        setQuestion5('Yes');
                    }}
                    tintColor={'green'}
                    onCheckColor={'green'}
                  />
                </View>
              </View>
              <View style={styles.AnswerWrapper}>
                <Text
                  style={{marginTop: 4, flex: 4, color: 'rgb(119, 119, 119)'}}>
                  No
                </Text>
                <View style={{flex: 1}}>
                  <CheckBox
                    disabled={false}
                    value={q5a2}
                    onValueChange={newValue => {
                      setQ5A1(!newValue), setQ5A2(newValue), setQuestion5('No');
                    }}
                    tintColor={'green'}
                    onCheckColor={'green'}
                  />
                </View>
              </View>
            </View>

            <View style={styles.QuestionContainer}>
              <Text style={{color: 'rgb(119, 119, 119)'}}>
                06. Range? (If you suffer from high/low blood pressure)
              </Text>
              <View style={styles.AnswerWrapper}>
                <Text
                  style={{marginTop: 4, flex: 4, color: 'rgb(119, 119, 119)'}}>
                  140/90mmHg or higher
                </Text>
                <View style={{flex: 1}}>
                  <CheckBox
                    disabled={false}
                    value={q6a1}
                    onValueChange={newValue => {
                      setQ6A1(newValue),
                        setQ6A2(!newValue),
                        setQuestion6('140/90mmHg or higher');
                    }}
                    tintColor={'green'}
                    onCheckColor={'green'}
                  />
                </View>
              </View>
              <View style={styles.AnswerWrapper}>
                <Text
                  style={{marginTop: 4, flex: 4, color: 'rgb(119, 119, 119)'}}>
                  90/60mmHg or lower
                </Text>
                <View style={{flex: 1}}>
                  <CheckBox
                    disabled={false}
                    value={q6a2}
                    onValueChange={newValue => {
                      setQ6A1(!newValue),
                        setQ6A2(newValue),
                        setQuestion6('90/60mmHg or lower');
                    }}
                    tintColor={'green'}
                    onCheckColor={'green'}
                  />
                </View>
              </View>
            </View>

            <View style={styles.QuestionContainer}>
              <Text style={{color: 'rgb(119, 119, 119)'}}>
                07. Do you smoke??
              </Text>
              <View style={styles.AnswerWrapper}>
                <Text
                  style={{marginTop: 4, flex: 4, color: 'rgb(119, 119, 119)'}}>
                  Yes
                </Text>
                <View style={{flex: 1}}>
                  <CheckBox
                    disabled={false}
                    value={q7a1}
                    onValueChange={newValue => {
                      setQ7A1(newValue),
                        setQ7A2(!newValue),
                        setQuestion7('Yes');
                    }}
                    tintColor={'green'}
                    onCheckColor={'green'}
                  />
                </View>
              </View>
              <View style={styles.AnswerWrapper}>
                <Text
                  style={{marginTop: 4, flex: 4, color: 'rgb(119, 119, 119)'}}>
                  No
                </Text>
                <View style={{flex: 1}}>
                  <CheckBox
                    disabled={false}
                    value={q7a2}
                    onValueChange={newValue => {
                      setQ7A1(!newValue), setQ7A2(newValue), setQuestion7('No');
                    }}
                    tintColor={'green'}
                    onCheckColor={'green'}
                  />
                </View>
              </View>
            </View>

            <Pressable
              style={({pressed}) => (pressed ? styles.button2 : styles.button)}
              onPress={continueHandler}>
              <Text style={styles.btnText}>SIGN UP</Text>
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

  button: {
    backgroundColor: '#5DB075',
    marginTop: 10,
    alignItems: 'center',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
  },
  button2: {
    backgroundColor: 'rgb(84, 145, 101)',
    marginTop: 10,
    alignItems: 'center',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  selector: {
    width: 800,
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
  ContentBody: {
    width: '100%',
    padding: 10,
  },
});

export default SignupQuestion;
