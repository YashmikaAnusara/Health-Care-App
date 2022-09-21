import React,{useEffect,useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import axios from 'axios';
import IP from '../../ip_address';

export default function Stats() {
  let email="test2"

  const [details,setDetails]=useState([])

  useEffect(() => {
    axios
      .get(`http://${IP}:8000/details/employee/daily/stat/${email}`, data)
      .then(res => {
        setDetails(res.data);
        console.log(res.data);
      })
      .catch(err => {
        alert(err.message);
      });
  },[])

  
  
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [50, 45, 28, 80, 70, 10, 20],
      },
    ],
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
              My Stats
            </Text>
          </View>
          <View style={styles.ItemBody}>
            <View style={{padding: 20}}>
              <Text style={{fontSize: 25, fontWeight: '600', color: 'black'}}>
                Daily Measures
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '500',
                  marginTop: 8,
                  color: 'rgb(119, 119, 119)',
                }}>
                The value each share was expected to gain vs. the value that
                each share actually gained.
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              }}>
              <BarChart
                data={data}
                width={Dimensions.get('window').width}
                height={250}
                chartConfig={{
                  backgroundColor: '#efefef',
                  backgroundGradientFrom: '#0BAB64',
                  backgroundGradientTo: '#3BB78F',
                  decimalPlaces: 2,
                  color: (opacity = 100) => `rgba(239, 239, 239, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                }}
                style={{
                  marginVertical: 8,
                  borderRadius: 30,
                }}
              />
            </View>

            <View style={{padding: 20}}>
              <Text style={{fontSize: 25, fontWeight: '600', color: 'black'}}>
                Stats
              </Text>
            </View>
            <View
              style={{
                paddingLeft: 20,
                paddingRight: 20,
              }}>
              <Text>Graph 02</Text>
            </View>
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
  ItemBody: {},

  Footter: {
    flex: 1.7,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
