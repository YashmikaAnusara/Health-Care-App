import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const Feed = () => {
  const [active, setActive] = useState(true);

  const butttonOneHandler = () => {
    setActive(true);
  };
  const butttonTwoHandler = () => {
    setActive(false);
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
              My Health Info
            </Text>
          </View>
          <View style={styles.ItemBody}>
            <View style={styles.ButtonWrapper}>
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
            </View>
            {active ? (
              <View style={styles.ContentBody}>
                <View style={styles.QuestionContainer}>
                  <Text>Suggestion</Text>
                </View>
                <View style={styles.QuestionContainer}>
                  <Text>Suggestion</Text>
                </View>
                <View style={styles.QuestionContainer}>
                  <Text>Suggestion</Text>
                </View>
                <View style={styles.QuestionContainer}>
                  <Text>Suggestion</Text>
                </View>
                <View style={styles.QuestionContainer}>
                  <Text>Suggestion</Text>
                </View>
                <View style={styles.QuestionContainer}>
                  <Text>Suggestion</Text>
                </View>
                <View style={styles.QuestionContainer}>
                  <Text>Suggestion</Text>
                </View>
                <View style={styles.QuestionContainer}>
                  <Text>Suggestion</Text>
                </View>
                <View style={styles.QuestionContainer}>
                  <Text>Suggestion</Text>
                </View>
                <View style={styles.QuestionContainer}>
                  <Text>Suggestion</Text>
                </View>
                <View style={styles.QuestionContainer}>
                  <Text>Suggestion</Text>
                </View>
                <View style={styles.QuestionContainer}>
                  <Text>Suggestion</Text>
                </View>
              </View>
            ) : (
              <View style={styles.ContentBody}>
                <View style={styles.QuestionContainer}>
                  <Text>Question</Text>
                </View>
                <View style={styles.QuestionContainer}>
                  <Text>Question</Text>
                </View>
                <View style={styles.QuestionContainer}>
                  <Text>Question</Text>
                </View>
                <View style={styles.QuestionContainer}>
                  <Text>Question</Text>
                </View>
                <View style={styles.QuestionContainer}>
                  <Text>Question</Text>
                </View>
                <View style={styles.QuestionContainer}>
                  <Text>Question</Text>
                </View>

                <View style={styles.QuestionContainer}>
                  <Text>Question</Text>
                </View>
                <View style={styles.QuestionContainer}>
                  <Text>Question</Text>
                </View>
                <View style={styles.QuestionContainer}>
                  <Text>Question</Text>
                </View>
                <View style={styles.QuestionContainer}>
                  <Text>Question</Text>
                </View>
                <View style={styles.QuestionContainer}>
                  <Text>Question</Text>
                </View>
                <View style={styles.QuestionContainer}>
                  <Text>Question</Text>
                </View>
              </View>
            )}
          </View>
        </ScrollView>
      </View>
      <View style={styles.Footter}></View>
    </SafeAreaView>
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
  QuestionContainer: {
    backgroundColor: 'rgb(235, 235, 235)',
    width: '100%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginBottom: 10,
  },
});

export default Feed;
