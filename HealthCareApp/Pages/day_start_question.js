import {
  View,
  Text,
  Modal,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import axios from 'axios'
import IP from '../ip_address';

const DayStartQuestion = props => {
  const [q1a1, setQ1A1] = useState(false);
  const [q1a2, setQ1A2] = useState(false);
  const [q1a3, setQ1A3] = useState(false);
  const [answer1, setQuestion1] = useState("");

  const [q2a1, setQ2A1] = useState(false);
  const [q2a2, setQ2A2] = useState(false);
  const [answer2, setQuestion2] = useState("");

  const [q3a1, setQ3A1] = useState(false);
  const [q3a2, setQ3A2] = useState(false);
  const [answer3, setQuestion3] = useState("");

  const [q4a1, setQ4A1] = useState(false);
  const [q4a2, setQ4A2] = useState(false);
  const [q4a3, setQ4A3] = useState(false);
  const [answer4, setQuestion4] = useState("");

  const [q5a1, setQ5A1] = useState(false);
  const [q5a2, setQ5A2] = useState(false);
  const [q5a3, setQ5A3] = useState(false);
  const [answer5, setQuestion5] = useState("");

  const [q6a1, setQ6A1] = useState(false);
  const [q6a2, setQ6A2] = useState(false);
  const [answer6, setQuestion6] = useState("");

  const continueHandler = () => {
    if (answer1.trim().length === 0) {
      alert("All the questions are required!")
    } else if (answer2.trim().length === 0) {
        alert('All the questions are required!');
    } else if (answer3.trim().length === 0) {
       alert('All the questions are required!');
    } else if (answer4.trim().length === 0) {
       alert('All the questions are required!');
    } else if (answer5.trim().length === 0) {
       alert('All the questions are required!');
    } else if (answer6.trim().length === 0) {
       alert('All the questions are required!');
    }
    else {
      const data = {
        email: props.email,
        question1: answer1,
        question2: answer2,
        question3: answer3,
        question4: answer4,
        question5: answer5,
        question6: answer6,
      };
      axios
        .post(`http://${IP}:8000/details/day-start/targert/save`, data)
        .then(res => {
          if (res.data.status === true) {
             props.setVisible(false)
          } else {
            alert(res.data.message);
          }
        })
        .catch(err => {
          alert(err.message);
        });
    }
    };

  };


  return (
    <Modal visible={props.visible}>
      <View style={{flex: 1, backgroundColor: 'gray'}}>
        <ScrollView style={styles.Container}>
          <View style={styles.Topic}>
            <Text style={styles.TopicText}>Today Target</Text>
          </View>
          <View style={styles.Body}>
            <View style={styles.QuestionContainer}>
              <Text style={{color: 'rgb(119, 119, 119)'}}>
                01. How many liters of water will you think to drink?
              </Text>
              <View style={styles.AnswerWrapper}>
                <Text
                  style={{marginTop: 4, flex: 4, color: 'rgb(119, 119, 119)'}}>
                  2 Liters
                </Text>
                <View style={{flex: 1}}>
                  <CheckBox
                    disabled={false}
                    value={q1a1}
                    onValueChange={newValue => {
                      setQ1A1(newValue),
                        setQ1A2(!newValue),
                        setQ1A3(!newValue),
                        setQuestion1('1');
                    }}
                    tintColor={'green'}
                    onCheckColor={'green'}
                  />
                </View>
              </View>
              <View style={styles.AnswerWrapper}>
                <Text
                  style={{marginTop: 4, flex: 4, color: 'rgb(119, 119, 119)'}}>
                  3 Liters
                </Text>
                <View style={{flex: 1}}>
                  <CheckBox
                    disabled={false}
                    value={q1a2}
                    onValueChange={newValue => {
                      setQ1A1(!newValue),
                        setQ1A2(newValue),
                        setQ1A3(!newValue),
                        setQuestion1('2');
                    }}
                    tintColor={'green'}
                    onCheckColor={'green'}
                  />
                </View>
              </View>
              <View style={styles.AnswerWrapper}>
                <Text
                  style={{marginTop: 4, flex: 4, color: 'rgb(119, 119, 119)'}}>
                  4 Liters
                </Text>
                <View style={{flex: 1}}>
                  <CheckBox
                    disabled={false}
                    value={q1a3}
                    onValueChange={newValue => {
                      setQ1A1(!newValue),
                        setQ1A2(!newValue),
                        setQ1A3(newValue),
                        setQuestion1('3');
                    }}
                    tintColor={'green'}
                    onCheckColor={'green'}
                  />
                </View>
              </View>
            </View>

            <View style={styles.QuestionContainer}>
              <Text style={{color: 'rgb(119, 119, 119)'}}>
                02. How far will you wish to walk?
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
                        setQuestion2('1');
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
                      setQ2A1(!newValue), setQ2A2(newValue), setQuestion2('2');
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
                        setQuestion3('1');
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
                      setQ3A1(!newValue), setQ3A2(newValue), setQuestion3('2');
                    }}
                    tintColor={'green'}
                    onCheckColor={'green'}
                  />
                </View>
              </View>
            </View>

            <View style={styles.QuestionContainer}>
              <Text style={{color: 'rgb(119, 119, 119)'}}>
                04. How far will you wish to walk?
              </Text>
              <View style={styles.AnswerWrapper}>
                <Text
                  style={{marginTop: 4, flex: 4, color: 'rgb(119, 119, 119)'}}>
                  1 Km
                </Text>
                <View style={{flex: 1}}>
                  <CheckBox
                    disabled={false}
                    value={q4a1}
                    onValueChange={newValue => {
                      setQ4A1(newValue),
                        setQ4A2(!newValue),
                        setQ4A3(!newValue),
                        setQuestion4('1');
                    }}
                    tintColor={'green'}
                    onCheckColor={'green'}
                  />
                </View>
              </View>
              <View style={styles.AnswerWrapper}>
                <Text
                  style={{marginTop: 4, flex: 4, color: 'rgb(119, 119, 119)'}}>
                  2 Km
                </Text>
                <View style={{flex: 1}}>
                  <CheckBox
                    disabled={false}
                    value={q4a2}
                    onValueChange={newValue => {
                      setQ4A1(!newValue),
                        setQ4A2(newValue),
                        setQ4A3(!newValue),
                        setQuestion4('2');
                    }}
                    tintColor={'green'}
                    onCheckColor={'green'}
                  />
                </View>
              </View>
              <View style={styles.AnswerWrapper}>
                <Text
                  style={{marginTop: 4, flex: 4, color: 'rgb(119, 119, 119)'}}>
                  3 Km
                </Text>
                <View style={{flex: 1}}>
                  <CheckBox
                    disabled={false}
                    value={q4a3}
                    onValueChange={newValue => {
                      setQ4A1(!newValue),
                        setQ4A2(!newValue),
                        setQ4A3(newValue),
                        setQuestion4('3');
                    }}
                    tintColor={'green'}
                    onCheckColor={'green'}
                  />
                </View>
              </View>
            </View>

            <View style={styles.QuestionContainer}>
              <Text style={{color: 'rgb(119, 119, 119)'}}>
                05. How many time do you hope to do workout today?
              </Text>
              <View style={styles.AnswerWrapper}>
                <Text
                  style={{marginTop: 4, flex: 4, color: 'rgb(119, 119, 119)'}}>
                  1.5 hours
                </Text>
                <View style={{flex: 1}}>
                  <CheckBox
                    disabled={false}
                    value={q5a1}
                    onValueChange={newValue => {
                      setQ5A1(newValue),
                        setQ5A2(!newValue),
                        setQ5A3(!newValue),
                        setQuestion5('1');
                    }}
                    tintColor={'green'}
                    onCheckColor={'green'}
                  />
                </View>
              </View>
              <View style={styles.AnswerWrapper}>
                <Text
                  style={{marginTop: 4, flex: 4, color: 'rgb(119, 119, 119)'}}>
                  2 hours
                </Text>
                <View style={{flex: 1}}>
                  <CheckBox
                    disabled={false}
                    value={q5a2}
                    onValueChange={newValue => {
                      setQ5A1(!newValue),
                        setQ5A2(newValue),
                        setQ5A3(!newValue),
                        setQuestion5('2');
                    }}
                    tintColor={'green'}
                    onCheckColor={'green'}
                  />
                </View>
              </View>
              <View style={styles.AnswerWrapper}>
                <Text
                  style={{marginTop: 4, flex: 4, color: 'rgb(119, 119, 119)'}}>
                  2.5 hours
                </Text>
                <View style={{flex: 1}}>
                  <CheckBox
                    disabled={false}
                    value={q5a3}
                    onValueChange={newValue => {
                      setQ5A1(!newValue), setQ5A2(!newValue),setQ5A3(newValue), setQuestion5('3');
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
                        setQuestion6('1');
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
                        setQuestion6('2');
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
              <Text style={styles.btnText}>Save</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  Topic: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 10,
  },
  TopicText: {
    fontSize: 30,
    color: '#5DB075',
    fontWeight: 'bold',
    marginTop: 20,
  },
  Body: {
    flex: 1,
    padding: 10,
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
    backgroundColor: '#5DB075',
    marginTop: 10,
    alignItems: 'center',
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
  },
  button2: {
    backgroundColor: 'rgb(84, 145, 101)',
    marginTop: 10,
    alignItems: 'center',
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default DayStartQuestion;
