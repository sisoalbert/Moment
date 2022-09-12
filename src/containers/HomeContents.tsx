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
import React, {useState, useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  HomeScreenNavigationProp,
  MainStackParamList,
} from '../types/navigation';
import {useNavigation} from '@react-navigation/native';

import Data from '../assets/data.json';
import {CLIENT_ID} from '@env';

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

  const getTeams = async () => {
    try {
      const response = await fetch(
        // 'https://v1.formula-1.api-sports.io/status'
        'https://v1.formula-1.api-sports.io/rankings/drivers?season=2021',
        {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'api-formula-1.p.rapidapi.com',
            'x-rapidapi-key': CLIENT_ID,
          },
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
  }, []);

  const renderCard = ({item}: ListRenderItemInfo<ItemType & driver>) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    return (
      <TouchableOpacity style={styles.cardContainer}>
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
              //   backgroundColor: 'coral',
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
                //   resizeMode: 'stretch',
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
                //   resizeMode: 'stretch',
                resizeMode: 'contain',
              }}
            />
          </View>
          <Button
            title="hello"
            onPress={() => {
              // Alert.alert("Welcome");
              navigation.navigate('Details', {name: item.driver.name});
            }}
          />
          <TouchableOpacity
            style={{
              //   backgroundColor: 'coral',
              position: 'absolute',
              bottom: 10,
              left: 10,
            }}>
            <Text style={{fontSize: 30, color: 'red'}}>O</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  const ListFooterComponent = () => {
    return <View style={{height: 200}} />;
  };

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size="large" color="red" />
      ) : (
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          numColumns={2} // set number of columns
          columnWrapperStyle={styles.row} // space them out evenly
          keyExtractor={(item: ItemType) => item.driver.name}
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
