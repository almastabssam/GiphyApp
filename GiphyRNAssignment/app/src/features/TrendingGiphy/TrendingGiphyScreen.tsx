// GifList.js
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';
import {getTrendingGifs} from '../../api';
import {Images} from '../../../config/Images.tsx';

const TrendingGiphyScreen = ({navigation}) => {
  const [trendingGifs, setTrendingGifs] = useState([]);
  const [limit, setLimit] = useState(15);
  const [refreshing, setRefresing] = useState(false);

  const loadTrendingGifs = async (limit) => {
    try {
      const newGifs = await getTrendingGifs(limit);
      setRefresing(false);
      if (newGifs && newGifs.length) {
        setTrendingGifs(newGifs);
        setLimit(limit + 15);
      }
    } catch (error) {
      // Handle error
    }
  };
  useEffect(() => {
    loadTrendingGifs(15);
  }, []);

  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row', padding: 10}}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={Images.backImage}
            style={{marginLeft: 10, width: 40, height: 40}}
          />
        </TouchableOpacity>
        <Text style={styles.heading}>Top Trending Giphy</Text>
      </View>

      <FlatList
        data={trendingGifs}
        keyExtractor={item => item.id}
        refreshing={refreshing}
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
          loadTrendingGifs(limit);
        }}
        onRefresh={()=>{
          setLimit(15);
          loadTrendingGifs(15);
        }}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
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
    marginLeft: 70,
    paddingVertical: moderateScale(4),
  },
});

export default TrendingGiphyScreen;
