import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  ListRenderItemInfo,
  Image,
  Dimensions,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {useRoute} from '@react-navigation/native';

import Header from '../components/Header';
//types
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList, DetailsScreenRouteProp} from '../types/navigation';
import driverData from '../assets/driver.json';
import {CLIENT_ID} from '@env';
import {useAppDispatch, useAppSelector} from '../hooks';
import {addNewBook} from '../redux/favSlice';

const Details = ({navigation}: NativeStackScreenProps<MainStackParamList>) => {
  const route = useRoute<DetailsScreenRouteProp>();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const windowWidth = Dimensions.get('window').width;
  const dispatch = useAppDispatch();

  const URL =
    'https://v1.formula-1.api-sports.io/drivers?id=' + route.params.id;

  const getDriver = async () => {
    try {
      const response = await fetch(URL, {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'v1.formula-1.api-sports.io',
          'x-rapidapi-key': CLIENT_ID,
        },
        redirect: 'follow',
      });
      console.log(response);
      const json = await response.json();
      setData(json.response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDriver();
  }, []);

  const ListHeaderComponent = () => {
    return (
      <View style={styles.container}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: data[0].image,
            }}
            style={{
              width: windowWidth / 2,
              height: windowWidth / 2,
              resizeMode: 'contain',
            }}
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 40,
              fontWeight: 'bold',
              color: 'white',
              paddingTop: 10,
            }}>
            {data[0].name}
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'grey',
            }}>
            {driverData.nationality}
          </Text>

          <Text
            style={{
              fontSize: 40,
              fontWeight: 'bold',
              color: 'white',
            }}>
            {data[0].highest_grid_position}
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'grey',
            }}>
            Highest grid position
          </Text>
          <Text
            style={{
              fontSize: 40,
              fontWeight: 'bold',
              color: 'white',
            }}>
            {data[0].career_points}
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'grey',
            }}>
            Career points
          </Text>
        </View>
      </View>
    );
  };

  console.log('====================================');
  console.log(data[0]);
  console.log('====================================');

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Header
          onPress={() => {
            // Alert.alert("Welcome");
            navigation.navigate('MainTabs');
          }}
          heartPress={() => {
            dispatch(
              addNewBook({
                id: data[0].id,
                image: data[0].image,
                name: data[0].name,
                position: data[0].position,
              }),
            );
          }}
        />
        {isLoading ? (
          <ActivityIndicator size="large" color="red" />
        ) : (
          <ListHeaderComponent />
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#011526',
    height: '100%',
  },
});
