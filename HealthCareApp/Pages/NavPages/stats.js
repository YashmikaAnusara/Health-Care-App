import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import {
 
  BarChart,
  
} from 'react-native-chart-kit';

export default function Stats() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: 'gray',
    backgroundGradientTo: 'gray',
    color: (opacity = 255) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 3, // optional, default 3
    useShadowColorFromDataset: false, // optional
    decimalPlaces:0
    
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
                height={220}
                yAxisLabel="$"
                chartConfig={chartConfig}
                verticalLabelRotation={0}
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
