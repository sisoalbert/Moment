import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getTeams = async () => {
    try {
      const response = await fetch(
        // 'https://v1.formula-1.api-sports.io/status'
        // 'https://api-formula-1.p.rapidapi.com/teams',
        'https://v1.formula-1.api-sports.io/teams',
        {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'api-formula-1.p.rapidapi.com',
            'x-rapidapi-key': 'API-KEY',
          },
        },
      );
      const json = await response.json();
      console.log('====================================');
      console.log(json.response);
      setData(json.response);

      console.log('====================================');
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      console.log('====================================');
      console.log('Everything went well!');
      console.log('====================================');
    }
  };

  useEffect(() => {
    getTeams();
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => (
            <Text>
              {item.name}, {item.base}
            </Text>
          )}
        />
      )}
    </View>
  );
};
