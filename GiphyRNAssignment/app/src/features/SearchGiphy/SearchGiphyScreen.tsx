import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';
import {searchGifs} from '../../api';
import {Images} from '../../../config/Images.tsx';

const SearchGiphyScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [offset, setOffset] = useState(0);
  const [refreshing, setRefresing] = useState(false);
  const searchGifsHandler = async (offset) => {
    try {
      const newResults = await searchGifs(searchQuery, offset);
      if(newResults && newResults.length) {
        setSearchResults(newResults);
        setOffset(offset + 15);
      }
    } catch (error) {
      // Handle error
    }
  };

  const upDateQuery = async query => {
    setSearchQuery(query);
    await searchGifsHandler(15);
  };

  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row', padding: 10}}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={Images.backImage}
            style={{marginLeft: 10, marginRight: 60,width: 40, height: 40}}
          />
        </TouchableOpacity>
        <Text style={styles.heading}>Search Giphy</Text>
      </View>

      <TextInput
        style={styles.textInputStyle}
        value={searchQuery}
        onChangeText={text => upDateQuery(text)}
        placeholder="Search Here"
      />
      <FlatList
        data={searchResults}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={{marginHorizontal: moderateScale(20)}}>
            <View style={styles.imageViewStyle}>
              <Image
                source={{uri: item.images.original.url}}
                style={styles.imageStyle}
              />
            </View>
            <Text style={styles.titleStyle}>{item.title}</Text>
          </View>
        )}
        onEndReached={() => {
          searchGifsHandler(offset);
        }}
      />
    </View>
  );
};
// define your styles
const styles = StyleSheet.create({
  textInputStyle: {
    borderWidth: 2,
    borderColor: '#D9D9D9',
    borderRadius: moderateScale(10),
    marginVertical: moderateScale(10),
    marginHorizontal: moderateScale(20),
    fontSize: scale(14),
  },
  imageViewStyle: {
    marginVertical: moderateScale(10),
    height: moderateScale(180),
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    borderWidth: moderateScale(0.01),
    borderColor: '#00000026',
    borderRadius: moderateScale(12),
    resizeMode: 'contain',
  },
  titleStyle: {
    textAlign: 'center',
    fontSize: scale(14),
    fontWeight: '600',
    color: 'darkgreen',
  },
  heading: {
    textAlign: 'center',
    fontSize: scale(20),
    fontWeight: 'bold',
    color: 'darkred',
    paddingVertical: moderateScale(4),
  },
});

export default SearchGiphyScreen;
