import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useAppDispatch, useAppSelector} from '../hooks';
import {deleteBook} from '../redux/favSlice';
import {MaterialIcon} from '../components/Icon';

const FavContents = () => {
  const dispatch = useAppDispatch();
  const windowWidth = Dimensions.get('window').width;

  const bookList = useAppSelector(state => state.book.bookList);
  //   console.log(bookList);

  const FavCard = ({
    position,
    author,
    name,
    driverImage,
    id,
    ...rest
  }: {
    position: number | string;
    author: string | undefined;
    name: string | undefined;
    driverImage: string | undefined;

    id: number;
  }) => {
    return (
      <View
        style={{
          height: 100,
          backgroundColor: '#011526',
          borderRadius: 10,
          margin: 10,
          flexDirection: 'row',
          //   justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 0.2,
            height: 50,
            width: 50,
            borderRadius: 25,
            backgroundColor: 'black',
          }}>
          <Image
            source={{
              uri: driverImage,
            }}
            style={{
              width: windowWidth / 5,
              height: windowWidth / 5,
              resizeMode: 'contain',
            }}
          />
        </View>
        <View style={{flex: 0.6, paddingLeft: 20}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
            }}>
            {name}
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'grey',
            }}>
            Position
          </Text>

          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
            }}>
            {position}
          </Text>
        </View>
        <View style={{flex: 0.2}}>
          <TouchableOpacity
            onPress={() => dispatch(deleteBook({id}))}
            style={{
              height: 50,
              width: 50,
              borderRadius: 25,
              backgroundColor: 'red',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialIcon size="large" color="black" name="delete" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View>
      {bookList.map(book => (
        <FavCard
          key={book.position}
          position={book.position}
          author={undefined}
          name={book.name}
          driverImage={book.image}
          id={book.id}
          //   id={book.id}
        />
      ))}
    </View>
  );
};

export default FavContents;

const styles = StyleSheet.create({});
