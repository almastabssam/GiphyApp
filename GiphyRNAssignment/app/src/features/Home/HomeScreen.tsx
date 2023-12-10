//import liraries
import React from 'react';
import {View, StyleSheet} from 'react-native';
import ButtonComponent from "../../components/ButtonComponent";

// create a component
const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <ButtonComponent
        name={'Trending Giphy'}
        onPress={() => navigation.navigate('TrendingGiphyScreen')}
      />
      <ButtonComponent
        name={'Search Gifhy'}
        onPress={() => navigation.navigate('SearchGiphyScreen')}
      />
      <ButtonComponent
        name={'Feedback'}
        onPress={() => navigation.navigate('FeedbackScreen')}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#303F9F',
  },
});

//make this component available to the app
export default HomeScreen;
