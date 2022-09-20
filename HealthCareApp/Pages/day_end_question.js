import {
  View,
  Text,
  Modal,
  StyleSheet,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';

const DayEndQuestion = props => {
  const [q1a1, setQ1A1] = useState(false);
  const [q1a2, setQ1A2] = useState(false);
  const [q1a3, setQ1A3] = useState(false);
  const [q1a4, setQ1A4] = useState(false);
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
  const [q4a4, setQ4A4] = useState(false);
  const [answer4, setQuestion4] = useState();

  const [q5a1, setQ5A1] = useState(false);
  const [q5a2, setQ5A2] = useState(false);
  const [q5a3, setQ5A3] = useState(false);
  const [q5a4, setQ5A4] = useState(false);
  const [answer5, setQuestion5] = useState();

  const [q6a1, setQ6A1] = useState(false);
  const [q6a2, setQ6A2] = useState(false);
  const [answer6, setQuestion6] = useState();

  const continueHandler = () => {
    alert('Done');
  };

  const skipHandler = () => {
    props.setVisible(false);
  };

  return (
    <Modal visible={props.visible}>
      <View style={{flex: 1, backgroundColor: 'gray'}}>
        <ScrollView style={styles.Container}>
          <View style={styles.Topic}>
            <Text style={styles.TopicText}>End Of the Day</Text>
          </View>
          <View style={styles.Body}>
            <View style={styles.QuestionContainer}>
              <Text style={{color: 'rgb(119, 119, 119)'}}>
                01. How many liters of water have you drunk ?
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
                        setQ1A4(!newValue),
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
                        setQ1A4(!newValue),
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
                        setQ1A4(!newValue),
                        setQ1A3(newValue),
                        setQuestion1('3');
                    }}
                    tintColor={'green'}
                    onCheckColor={'green'}
                  />
                </View>
              </View>
              <View style={styles.AnswerWrapper}>
                <Text
                  style={{marginTop: 4, flex: 4, color: 'rgb(119, 119, 119)'}}>
                  Less than 2 liters
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
                        setQuestion1('4');
                    }}
                    tintColor={'green'}
                    onCheckColor={'green'}
                  />
                </View>
              </View>
            </View>

            <View style={styles.QuestionContainer}>
              <Text style={{color: 'rgb(119, 119, 119)'}}>
                02. Have you had your meals on time?
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
                      setQ2A1(newValue), setQ2A2(!newValue), setQuestion2('1');
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
                03. Did you rest today?
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
                      setQ3A1(newValue), setQ3A2(!newValue), setQuestion3('1');
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
                04. how far did you walk today?
              </Text>
              <View style={styles.AnswerWrapper}>
                <Text
                  style={{marginTop: 4, flex: 4, color: 'rgb(119, 119, 119)'}}>
                  1 KM
                </Text>
                <View style={{flex: 1}}>
                  <CheckBox
                    disabled={false}
                    value={q4a1}
                    onValueChange={newValue => {
                      setQ4A1(newValue),
                        setQ4A2(!newValue),
                        setQ4A3(!newValue),
                        setQ4A4(!newValue),
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
                  2 KM
                </Text>
                <View style={{flex: 1}}>
                  <CheckBox
                    disabled={false}
                    value={q4a2}
                    onValueChange={newValue => {
                      setQ4A1(!newValue),
                        setQ4A2(newValue),
                        setQ4A3(!newValue),
                        setQ4A4(!newValue),
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
                        setQ4A4(!newValue),
                        setQuestion4('3');
                    }}
                    tintColor={'green'}
                    onCheckColor={'green'}
                  />
                </View>
              </View>
              <View style={styles.AnswerWrapper}>
                <Text
                  style={{marginTop: 4, flex: 4, color: 'rgb(119, 119, 119)'}}>
                  Less than 1 KM
                </Text>
                <View style={{flex: 1}}>
                  <CheckBox
                    disabled={false}
                    value={q4a4}
                    onValueChange={newValue => {
                      setQ4A1(!newValue),
                        setQ4A2(!newValue),
                        setQ4A3(!newValue),
                        setQ4A4(newValue),
                        setQuestion4('4');
                    }}
                    tintColor={'green'}
                    onCheckColor={'green'}
                  />
                </View>
              </View>
            </View>

            <View style={styles.QuestionContainer}>
              <Text style={{color: 'rgb(119, 119, 119)'}}>
                05. How many times did you do workout today?
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
                        setQ5A4(!newValue),
                        setQ5A3(!newValue);
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
                        setQ5A4(!newValue),
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
                      setQ5A1(!newValue),
                        setQ5A2(!newValue),
                        setQ5A3(newValue),
                        setQ5A4(!newValue),
                        setQuestion5('3');
                    }}
                    tintColor={'green'}
                    onCheckColor={'green'}
                  />
                </View>
              </View>
              <View style={styles.AnswerWrapper}>
                <Text
                  style={{marginTop: 4, flex: 4, color: 'rgb(119, 119, 119)'}}>
                  none
                </Text>
                <View style={{flex: 1}}>
                  <CheckBox
                    disabled={false}
                    value={q5a4}
                    onValueChange={newValue => {
                      setQ5A1(!newValue),
                        setQ5A2(!newValue),
                        setQ5A3(!newValue),
                        setQ5A4(newValue),
                        setQuestion5('4');
                    }}
                    tintColor={'green'}
                    onCheckColor={'green'}
                  />
                </View>
              </View>
            </View>

            <View style={styles.QuestionContainer}>
              <Text style={{color: 'rgb(119, 119, 119)'}}>
                06. How about today?
              </Text>
              <View style={styles.AnswerWrapper}>
                <Text
                  style={{marginTop: 4, flex: 4, color: 'rgb(119, 119, 119)'}}>
                  Happy
                </Text>
                <View style={{flex: 1}}>
                  <CheckBox
                    disabled={false}
                    value={q6a1}
                    onValueChange={newValue => {
                      setQ6A1(newValue), setQ6A2(!newValue), setQuestion6('1');
                    }}
                    tintColor={'green'}
                    onCheckColor={'green'}
                  />
                </View>
              </View>
              <View style={styles.AnswerWrapper}>
                <Text
                  style={{marginTop: 4, flex: 4, color: 'rgb(119, 119, 119)'}}>
                  Sad
                </Text>
                <View style={{flex: 1}}>
                  <CheckBox
                    disabled={false}
                    value={q6a2}
                    onValueChange={newValue => {
                      setQ6A1(!newValue), setQ6A2(newValue), setQuestion6('2');
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
              <Text style={styles.btnText}>Check</Text>
            </Pressable>
            <TouchableOpacity style={styles.skip} onPress={skipHandler}>
              <Text style={styles.skipText}>Skip for now</Text>
            </TouchableOpacity>
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
    fontWeight: 'bold',
    color: 'green',
    fontFamily: 'Arial',
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
  skip: {
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    borderRadius: 20,
    padding: 5,
  },
  skipText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5DB075',
  },
});

export default DayEndQuestion;
