import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';

export default function Admin_feed({navigation}) {
  const addfeed = () => {
    navigation.navigate('AddFeed');
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 8}}>
        <ScrollView>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 30,
              marginTop: 20,
              color: '#5DB075',
            }}>
            Feed
          </Text>
          <TouchableOpacity onPress={addfeed}>
            <Text
              style={{
                marginTop: -32,
                marginLeft: 325,
                fontSize: 20,
                color: '#5DB075',
              }}>
              Add
            </Text>
          </TouchableOpacity>
          <TextInput
            style={{
              marginTop: 20,
              height: 50,
              margin: 12,
              borderWidth: 0.8,
              padding: 10,
              borderRadius: 20,
            }}
            // onChangeText={onChangeNumber}
            // value={number}
            placeholder="Search"
            keyboardType="default"
          />
          <View style={{flex: 2, marginTop: 10}}>
            <View style={{paddingRight: 10, paddingLeft: 10}}>
              <Image
                source={require('../../Assets/feed_i.png')}
                resizeMode="contain"
                style={{
                  marginLeft: 10,
                  width: 25,
                  height: 25,
                  top: 12,
                  // alignSelf: 'center',
                }}
              />
              <Text
                style={{
                  marginLeft: 50,
                  fontWeight: 'bold',
                  marginTop: -15,
                  fontSize: 18,
                }}>
                Test
              </Text>
              <Text
                style={{
                  marginLeft: 50,
                  marginTop: 0,
                  fontSize: 18,
                }}>
                dsfsdfdsfdsfdsfsdfdsfsd df sd fsdfsd fhsd fsd fsd f
              </Text>
            </View>
            {/* ============================================= */}
            <View style={{paddingRight: 10, paddingLeft: 10}}>
              <Image
                source={require('../../Assets/feed_i.png')}
                resizeMode="contain"
                style={{
                  marginLeft: 10,
                  width: 25,
                  height: 25,
                  top: 12,
                  // alignSelf: 'center',
                }}
              />
              <Text
                style={{
                  marginLeft: 50,
                  fontWeight: 'bold',
                  marginTop: -15,
                  fontSize: 18,
                }}>
                Test
              </Text>
              <Text
                style={{
                  marginLeft: 50,
                  marginTop: 0,
                  fontSize: 18,
                }}>
                dsfsdfdsfdsfdsfsdfdsfsd df sd fsdfsd fhsd fsd fsd f
              </Text>
            </View>
            <View style={{paddingRight: 10, paddingLeft: 10}}>
              <Image
                source={require('../../Assets/feed_i.png')}
                resizeMode="contain"
                style={{
                  marginLeft: 10,
                  width: 25,
                  height: 25,
                  top: 12,
                  // alignSelf: 'center',
                }}
              />
              <Text
                style={{
                  marginLeft: 50,
                  fontWeight: 'bold',
                  marginTop: -15,
                  fontSize: 18,
                }}>
                Test
              </Text>
              <Text
                style={{
                  marginLeft: 50,
                  marginTop: 0,
                  fontSize: 18,
                }}>
                dsfsdfdsfdsfdsfsdfdsfsd df sd fsdfsd fhsd fsd fsd f
              </Text>
            </View>
            <View style={{paddingRight: 10, paddingLeft: 10}}>
              <Image
                source={require('../../Assets/feed_i.png')}
                resizeMode="contain"
                style={{
                  marginLeft: 10,
                  width: 25,
                  height: 25,
                  top: 12,
                  // alignSelf: 'center',
                }}
              />
              <Text
                style={{
                  marginLeft: 50,
                  fontWeight: 'bold',
                  marginTop: -15,
                  fontSize: 18,
                }}>
                Test
              </Text>
              <Text
                style={{
                  marginLeft: 50,
                  marginTop: 0,
                  fontSize: 18,
                }}>
                dsfsdfdsfdsfdsfsdfdsfsd df sd fsdfsd fhsd fsd fsd f
              </Text>
            </View>
            <View style={{paddingRight: 10, paddingLeft: 10}}>
              <Image
                source={require('../../Assets/feed_i.png')}
                resizeMode="contain"
                style={{
                  marginLeft: 10,
                  width: 25,
                  height: 25,
                  top: 12,
                  // alignSelf: 'center',
                }}
              />
              <Text
                style={{
                  marginLeft: 50,
                  fontWeight: 'bold',
                  marginTop: -15,
                  fontSize: 18,
                }}>
                Test
              </Text>
              <Text
                style={{
                  marginLeft: 50,
                  marginTop: 0,
                  fontSize: 18,
                }}>
                dsfsdfdsfdsfdsfsdfdsfsd df sd fsdfsd fhsd fsd fsd f
              </Text>
            </View>
            <View style={{paddingRight: 10, paddingLeft: 10}}>
              <Image
                source={require('../../Assets/feed_i.png')}
                resizeMode="contain"
                style={{
                  marginLeft: 10,
                  width: 25,
                  height: 25,
                  top: 12,
                  // alignSelf: 'center',
                }}
              />
              <Text
                style={{
                  marginLeft: 50,
                  fontWeight: 'bold',
                  marginTop: -15,
                  fontSize: 18,
                }}>
                Test
              </Text>
              <Text
                style={{
                  marginLeft: 50,
                  marginTop: 0,
                  fontSize: 18,
                }}>
                dsfsdfdsfdsfdsfsdfdsfsd df sd fsdfsd fhsd fsd fsd f
              </Text>
            </View>
            <View style={{paddingRight: 10, paddingLeft: 10}}>
              <Image
                source={require('../../Assets/feed_i.png')}
                resizeMode="contain"
                style={{
                  marginLeft: 10,
                  width: 25,
                  height: 25,
                  top: 12,
                  // alignSelf: 'center',
                }}
              />
              <Text
                style={{
                  marginLeft: 50,
                  fontWeight: 'bold',
                  marginTop: -15,
                  fontSize: 18,
                }}>
                Test
              </Text>
              <Text
                style={{
                  marginLeft: 50,
                  marginTop: 0,
                  fontSize: 18,
                }}>
                dsfsdfdsfdsfdsfsdfdsfsd df sd fsdfsd fhsd fsd fsd f
              </Text>
            </View>

            <View style={{paddingRight: 10, paddingLeft: 10}}>
              <Image
                source={require('../../Assets/feed_i.png')}
                resizeMode="contain"
                style={{
                  marginLeft: 10,
                  width: 25,
                  height: 25,
                  top: 12,
                  // alignSelf: 'center',
                }}
              />
              <Text
                style={{
                  marginLeft: 50,
                  fontWeight: 'bold',
                  marginTop: -15,
                  fontSize: 18,
                }}>
                Test
              </Text>
              <Text
                style={{
                  marginLeft: 50,
                  marginTop: 0,
                  fontSize: 18,
                }}>
                dsfsdfdsfdsfdsfsdfdsfsd df sd fsdfsd fhsd fsd fsd f
              </Text>
            </View>
            <View style={{paddingRight: 10, paddingLeft: 10}}>
              <Image
                source={require('../../Assets/feed_i.png')}
                resizeMode="contain"
                style={{
                  marginLeft: 10,
                  width: 25,
                  height: 25,
                  top: 12,
                  // alignSelf: 'center',
                }}
              />
              <Text
                style={{
                  marginLeft: 50,
                  fontWeight: 'bold',
                  marginTop: -15,
                  fontSize: 18,
                }}>
                Test
              </Text>
              <Text
                style={{
                  marginLeft: 50,
                  marginTop: 0,
                  fontSize: 18,
                }}>
                dsfsdfdsfdsfdsfsdfdsfsd df sd fsdfsd fhsd fsd fsd f
              </Text>
            </View>
            <View style={{paddingRight: 10, paddingLeft: 10}}>
              <Image
                source={require('../../Assets/feed_i.png')}
                resizeMode="contain"
                style={{
                  marginLeft: 10,
                  width: 25,
                  height: 25,
                  top: 12,
                  // alignSelf: 'center',
                }}
              />
              <Text
                style={{
                  marginLeft: 50,
                  fontWeight: 'bold',
                  marginTop: -15,
                  fontSize: 18,
                }}>
                Test
              </Text>
              <Text
                style={{
                  marginLeft: 50,
                  marginTop: 0,
                  fontSize: 18,
                }}>
                dsfsdfdsfdsfdsfsdfdsfsd df sd fsdfsd fhsd fsd fsd f
              </Text>
            </View>

            <View style={{paddingRight: 10, paddingLeft: 10}}>
              <Image
                source={require('../../Assets/feed_i.png')}
                resizeMode="contain"
                style={{
                  marginLeft: 10,
                  width: 25,
                  height: 25,
                  top: 12,
                  // alignSelf: 'center',
                }}
              />
              <Text
                style={{
                  marginLeft: 50,
                  fontWeight: 'bold',
                  marginTop: -15,
                  fontSize: 18,
                }}>
                Test
              </Text>
              <Text
                style={{
                  marginLeft: 50,
                  marginTop: 0,
                  fontSize: 18,
                }}>
                dsfsdfdsfdsfdsfsdfdsfsd df sd fsdfsd fhsd fsd fsd f
              </Text>
            </View>
            <View style={{paddingRight: 10, paddingLeft: 10}}>
              <Image
                source={require('../../Assets/feed_i.png')}
                resizeMode="contain"
                style={{
                  marginLeft: 10,
                  width: 25,
                  height: 25,
                  top: 12,
                  // alignSelf: 'center',
                }}
              />
              <Text
                style={{
                  marginLeft: 50,
                  fontWeight: 'bold',
                  marginTop: -15,
                  fontSize: 18,
                }}>
                Test
              </Text>
              <Text
                style={{
                  marginLeft: 50,
                  marginTop: 0,
                  fontSize: 18,
                }}>
                dsfsdfdsfdsfdsfsdfdsfsd df sd fsdfsd fhsd fsd fsd f
              </Text>
            </View>
            <View style={{paddingRight: 10, paddingLeft: 10}}>
              <Image
                source={require('../../Assets/feed_i.png')}
                resizeMode="contain"
                style={{
                  marginLeft: 10,
                  width: 25,
                  height: 25,
                  top: 12,
                  // alignSelf: 'center',
                }}
              />
              <Text
                style={{
                  marginLeft: 50,
                  fontWeight: 'bold',
                  marginTop: -15,
                  fontSize: 18,
                }}>
                Test
              </Text>
              <Text
                style={{
                  marginLeft: 50,
                  marginTop: 0,
                  fontSize: 18,
                }}>
                dsfsdfdsfdsfdsfsdfdsfsd df sd fsdfsd fhsd fsd fsd f
              </Text>
            </View>
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
});
