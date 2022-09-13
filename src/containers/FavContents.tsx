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

const FavContents = () => {
  const dispatch = useAppDispatch();
  const windowWidth = Dimensions.get('window').width;

  const bookList = useAppSelector(state => state.book.bookList);
  //   console.log(bookList);

  const BookInfo = ({
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
          backgroundColor: 'coral',
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
        <View style={{flex: 0.6}}>
          <Text>{position}</Text>
          <Text>{name}</Text>
        </View>
        <View style={{flex: 0.2}}>
          <TouchableOpacity
            onPress={() => dispatch(deleteBook({id}))}
            style={{
              height: 50,
              width: 50,
              backgroundColor: 'red',
            }}></TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View>
      <Text>FavContents</Text>
      {bookList.map(book => (
        <BookInfo
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
