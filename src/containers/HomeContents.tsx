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
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  HomeScreenNavigationProp,
  MainStackParamList,
} from '../types/navigation';
import {driverData} from '../types/driverData';
import {useNavigation} from '@react-navigation/native';

import Data from '../assets/data.json';
import teamsData from '../assets/rankings';
import {CLIENT_ID} from '@env';
import {useAppDispatch, useAppSelector} from '../hooks';
import {addNewBook} from '../redux/favSlice';
import {MaterialIcon} from '../components/Icon';

interface HomeContentsProps {
  name: string;
}

type driver = {
  image: string;
  name: string;
  abbr: string;
  id: number;
};

type team = {
  id: number;
  name: string;
  logo: string;
};

interface ItemType {
  position: string;
  id: string;
  driver: driver;
  team: team;
  image: string;
}

const HomeContents = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const dispatch = useAppDispatch();

  const getTeams = async () => {
    try {
      const response = await fetch(
        'https://v1.formula-1.api-sports.io/rankings/drivers?season=2021',
        {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'v1.formula-1.api-sports.io',
            'x-rapidapi-key': CLIENT_ID,
          },
          redirect: 'follow',
        },
      );
      const json = await response.json();
      setData(json.response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTeams();
    // setData(teamsData);
  }, []);

  // const handleOnSubmit = item => {
  //   dispatch(addNewBook({item}));
  // };

  const renderCard = useCallback(
    ({item}: ListRenderItemInfo<ItemType & driver>) => {
      const windowWidth = Dimensions.get('window').width;

      return (
        <TouchableOpacity
          onPress={() => {
            // Alert.alert("Welcome");
            navigation.navigate('Details', {id: item.driver.id});
          }}
          style={styles.cardContainer}>
          <View
            style={{
              width: windowWidth / 2.2,
              height: windowWidth / 2,
            }}>
            <View style={styles.driverNameContainer}>
              <Text style={styles.driverName}>{item.driver.name}</Text>
            </View>

            <View
              style={{
                position: 'absolute',
                bottom: 10,
                right: 0,
              }}>
              <Image
                source={{
                  uri: item.driver.image,
                }}
                style={{
                  width: windowWidth / 3,
                  height: windowWidth / 3,
                  resizeMode: 'contain',
                }}
              />
            </View>
            <View style={{paddingLeft: 10}}>
              <Image
                source={{
                  uri: item.team.logo,
                }}
                style={{
                  width: windowWidth / 10,
                  height: windowWidth / 10,
                  resizeMode: 'contain',
                }}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                //add the players to the players array
                dispatch(
                  addNewBook({
                    id: item.driver.id,
                    image: item.driver.image,
                    name: item.driver.name,
                    position: item.position,
                  }),
                );
              }}
              style={{
                position: 'absolute',
                bottom: 10,
                left: 10,
              }}>
              <MaterialIcon
                size="large"
                color="red"
                name="cards-heart-outline"
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      );
    },
    [],
  );

  const keyExtractor = useCallback((item: ItemType) => {
    return item.driver.name;
  }, []);

  const ListFooterComponent = () => {
    return <View style={{height: 200}} />;
  };

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size="large" color="red" />
      ) : (
        <FlatList
          // data={teamsData}
          data={data}
          showsVerticalScrollIndicator={false}
          numColumns={2} // set number of columns
          columnWrapperStyle={styles.row} // space them out evenly
          keyExtractor={keyExtractor}
          renderItem={renderCard}
          ListFooterComponent={ListFooterComponent}
        />
      )}
    </View>
  );
};

export default HomeContents;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#011526',
    margin: 10,
    borderRadius: 10,
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
  },
  driverNameContainer: {
    width: '80%',
    padding: 10,
  },
  driverName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
