import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import {BarChart} from 'react-native-chart-kit';
import IP from '../../ip_address';
import axios from 'axios';

export default function Admin_stats({navigation}) {
  const [emp, setemp] = useState([]);

  useEffect(() => {
    axios.get(`http://${IP}:8000/details/emp`).then(res => {
      setemp(res.data);
    });
  }, [emp]);
  return (
    <View style={styles.container}>
      <View style={{flex: 8}}>
        <ScrollView>
          <Text style={styles.topic}>Employee Stats</Text>
          <View style={styles.chartcontainer}>
            <BarChart
              data={{
                labels: ['Jan-Mar', 'Apr-Jun', 'Jul-Sep', 'Oct-Dec'],
                datasets: [
                  {
                    data: [40, 45, 50, 60],
                  },
                ],
              }}
              width={Dimensions.get('window').width}
              height={250}
              chartConfig={{
                backgroundColor: '#efefef',
                backgroundGradientFrom: '#0BAB64',
                backgroundGradientTo: '#3BB78F',
                decimalPlaces: 0,
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
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 25,
              marginTop: 10,
              fontWeight: 'bold',
            }}>
            This Month Stats
          </Text>
          <View style={styles.contentbody}>
            {emp.map((data, index) => (
              <View
                key={index}
                style={{
                  marginTop: 10,
                  paddingBottom: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: 'rgba(38, 38, 38, .2)',
                }}>
                <Image
                  source={require('../../Assets/dot.png')}
                  resizeMode="contain"
                  style={{
                    marginLeft: 10,
                    width: 12,
                    height: 12,
                    top: 10,
                    // alignSelf: 'center',
                  }}
                />
                <Text style={{fontSize: 20, marginTop: -11, marginLeft: 35}}>
                  {data.name}
                </Text>
                <Text style={{marginLeft: 300, marginTop: -24, fontSize: 17}}>
                  Statistic
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={{flex: 1.4}}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: '#5DB075',
  },
  chartcontainer: {
    flex: 2,
    marginTop: 10,
  },
  topic: {
    marginTop: 20,
    fontSize: 30,
    alignSelf: 'center',
    color: '#5DB075',
    fontWeight: 'bold',
  },
  back: {
    marginTop: 30,
    marginLeft: 10,
    fontSize: 20,
    color: '#5DB075',
  },
  contentbody: {
    width: '100%',
    padding: 13,
  },
});
