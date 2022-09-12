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

const Details = ({navigation}: NativeStackScreenProps<MainStackParamList>) => {
  const route = useRoute<DetailsScreenRouteProp>();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const windowWidth = Dimensions.get('window').width;

  // console.log('====================================');
  // console.log('this is data', data);
  // console.log('====================================');

  // console.log(data[0].birthdate);

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
    // console.log('====================================');
    // console.log(driverData);
    // console.log('====================================');
  }, []);

  const ListHeaderComponent = () => {
    return (
      <View style={styles.container}>
        <Button
          title="back to Home"
          onPress={() => {
            // Alert.alert("Welcome");
            navigation.navigate('MainTabs');
          }}
        />
        <Text
          style={{
            color: 'white',
            fontSize: 10,
          }}>
          {route.params.id}
        </Text>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{
              // uri: item.team.logo,
              // uri: driverData.image,
              uri: data[0].image,
            }}
            style={{
              width: windowWidth / 2,
              height: windowWidth / 2,
              //   resizeMode: 'stretch',
              resizeMode: 'contain',
            }}
          />
        </View>
        {/* "highest_grid_position": 1,
"career_points": "4311.5", */}
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
            {/* {driverData.name} */}
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

  // const keyExtractor = useCallback((item: ItemType) => {
  //   return 5;
  // }, []);

  const ListFooterComponent = () => {
    return <View style={{height: 200}} />;
  };

  const renderCard = () => {
    return (
      <View
        style={{
          backgroundColor: 'coral',
          width: '100%',
          height: '100%',
        }}
      />
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Header />
        {isLoading ? (
          <ActivityIndicator size="large" color="red" />
        ) : (
          <ListHeaderComponent />
        )}

        {/* <FlatList
          data={driverData.teams}
          showsVerticalScrollIndicator={false}
          numColumns={2} // set number of columns
          columnWrapperStyle={styles.row} // space them out evenly
          keyExtractor={keyExtractor}
          renderItem={renderCard}
          ListHeaderComponent={ListHeaderComponent}
          ListFooterComponent={ListFooterComponent}
        /> */}
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
