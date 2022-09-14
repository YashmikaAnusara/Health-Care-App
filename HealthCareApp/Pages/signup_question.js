import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React,{useEffect} from 'react';
import SelectDropdown from 'react-native-select-dropdown';

const job = ['Managment', 'Development'];

const SignupQuestion = () => {

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
                fontWeight: 'bold',
                color: 'green',
                marginTop: 20,
                marginBottom: 15,
              }}>
              HEALTH INFO
            </Text>
          </View>

          <View style={styles.inputWrapper}>
            <View style={{marginBottom: 10}}>
              <Text style={{marginBottom: 8, fontSize: 18, fontWeight: '700'}}>
                Sample Question
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Do you have Sugar..."
              />
            </View>
            <View style={{marginBottom: 10}}>
              <Text style={{marginBottom: 8, fontSize: 18, fontWeight: '700'}}>
                Sample Question
              </Text>
              <SelectDropdown
                data={job}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
              />
            </View>
            <View style={{marginBottom: 10}}>
              <Text style={{marginBottom: 8, fontSize: 18, fontWeight: '700'}}>
                Sample Question
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Do you have Sugar..."
              />
            </View>
            <View style={{marginBottom: 10}}>
              <Text style={{marginBottom: 8, fontSize: 18, fontWeight: '700'}}>
                Sample Question
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Do you have Sugar..."
              />
            </View>
            <View style={{marginBottom: 10}}>
              <Text style={{marginBottom: 8, fontSize: 18, fontWeight: '700'}}>
                Sample Question
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Do you have Sugar..."
              />
            </View>
            <View style={{marginBottom: 10}}>
              <Text style={{marginBottom: 8, fontSize: 18, fontWeight: '700'}}>
                Sample Question
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Do you have Sugar..."
              />
            </View>

            <Pressable
              style={({pressed}) => (pressed ? styles.button2 : styles.button)}>
              <Text style={styles.btnText}>CONTINUE</Text>
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
  inputWrapper: {
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 10,
  },
  input: {
    backgroundColor: 'rgb(247, 247, 247)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgb(224, 224, 224)',
    paddingLeft: 20,
    fontSize: 20,
    marginBottom: 5,
    height: 47,
  },
  button: {
    backgroundColor: '#5DB075',
    marginTop: 10,
    alignItems: 'center',
    borderRadius: 20,
    padding: 14,
    marginBottom: 20,
  },
  button2: {
    backgroundColor: 'rgb(84, 145, 101)',
    marginTop: 10,
    alignItems: 'center',
    borderRadius: 20,
    padding: 14,
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
});

export default SignupQuestion;
