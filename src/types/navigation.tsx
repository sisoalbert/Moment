import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {RouteProp} from '@react-navigation/native';

export type MainStackParamList = {
  MainTabs: undefined;
  Details: {
    id: number;
  };
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  'Details'
>;

export type DetailsScreenRouteProp = RouteProp<MainStackParamList, 'Details'>;

export type MainTabsParamList = {
  Home: MainStackParamList;
  Favourites: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgetPassword: undefined;
};
