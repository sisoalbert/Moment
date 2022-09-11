import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Section2 = () => {
  return (
    <View>
      <Text>Section2</Text>
    </View>
  );
};

export default Section2;

const styles = StyleSheet.create({});

// import React, {useEffect, useState} from 'react';

// import {
//   ActivityIndicator,
//   FlatList,
//   SafeAreaView,
//   Text,
//   View,
// } from 'react-native';
// // import Data from './src/Assets/data.json';
// import {CLIENT_ID} from '@env';

// console.log('====================================');
// console.log(CLIENT_ID);
// console.log('====================================');

// export default App = () => {
//   const [isLoading, setLoading] = useState(false);
//   const [data, setData] = useState([]);

//   const getTeams = async () => {
//     try {
//       const response = await fetch(
//         // 'https://v1.formula-1.api-sports.io/status'
//         'https://v1.formula-1.api-sports.io/drivers',
//         {
//           method: 'GET',
//           headers: {
//             'x-rapidapi-host': 'api-formula-1.p.rapidapi.com',
//             'x-rapidapi-key': CLIENT_ID,
//           },
//         },
//       );
//       console.log('====================================');
//     //   console.log(response._bodyInit._data.__collector);
//       console.log('====================================');
//       const json = await response.json();
//       console.log('====================================');
//       console.log(response);
//       setData(json.response);

//       console.log('====================================');
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//       console.log('====================================');
//       console.log('Everything went well!');
//       console.log('====================================');
//     }
//   };

//   useEffect(() => {
//     getTeams();
//   }, []);

//   return (
//     <SafeAreaView>
//       <View style={{padding: 24}}>
//         <Text>ENV URL: {CLIENT_ID} </Text>
//         {/* {isLoading ? (
//           <ActivityIndicator />
//         ) : (
//           <FlatList
//             data={data}
//             keyExtractor={({id}, index) => id}
//             renderItem={({item}) => (
//               <Text>
//                 {item.name}, {item.base}
//               </Text>
//             )}
//           />
//         )} */}
//       </View>
//     </SafeAreaView>
//   );
// };
