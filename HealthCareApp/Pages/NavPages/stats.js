import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  RefreshControl,
} from 'react-native';
import {BarChart} from 'react-native-chart-kit';
import axios from 'axios';
import IP from '../../ip_address';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Stats() {
  const [details, setDetails] = useState({});
  const [dailyAvg, setDailyAvg] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const [a, setA] = useState([]);
   

  function avgHandler(arr) {
    setA(arr);
  }

  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('email');
      if (value !== null) {
        // We have data!!
        axios
          .get(`http://${IP}:8000/details/employee/daily/stat/${value}`)
          .then(res => {
            setDetails(res.data);
            avgHandler(res.data.avg);
          })
          .catch(err => {
            alert(err.message);
          });

        axios
          .get(`http://${IP}:8000/details/employee/daily/avg/${value}`)
          .then(res => {
            setDailyAvg(res.data);
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
  }, []);

  const data = {
    labels: details.day,
    datasets: [
      {
        data: a,
      },
    ],
  };

  const refreshHandler = () => {
    setRefresh(true);
    retrieveData();
    setTimeout(() => {
      setRefresh(false);
    }, 3000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Body}>
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
                marginTop: 20,
              }}>
              My Stats
            </Text>
          </View>
          <View style={styles.ItemBody}>
            <View style={{padding: 20}}>
              <Text style={{fontSize: 25, fontWeight: '600', color: 'black'}}>
                Stat
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
                    borderRadius: 5,
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
                paddingLeft: 20,
                paddingRight: 20,
              }}>
              {dailyAvg.map((detail, index) => (
                <DailyTaks
                  date={detail.date}
                  avg={detail.avg}
                  key={index}
                />
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.Footter}></View>
    </SafeAreaView>
  );
}
const DailyTaks = props => {
  let avg = parseFloat(props.avg);



  return (
    <View style={styles.DailyTaskBody}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 17, color: 'green'}}>{props.date}</Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 25, color: 'green', fontWeight: '500'}}>
          {avg.toFixed(1)}
        </Text>
        <Text style={{fontSize: 13, color: 'green'}}>Daily Avg out of 4.0</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  DailyTaskBody: {
    flex: 1,
    backgroundColor: 'rgb(235, 235, 235)',
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
    borderRadius: 10,
  },
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
