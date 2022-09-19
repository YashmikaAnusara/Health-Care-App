import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Alert = () => {
  return (
    <View style={styles.container}>
      <Text>alert</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: "50%",
        marginTop:80,

        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
       
  }
});

export default Alert