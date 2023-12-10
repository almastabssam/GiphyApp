//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';

// create a component
const ButtonComponent = ({
  name,
  onPress = {},
  buttonStyle = {},
  btnTextStyle = {},
}) => {
  return (
    <View style={{width: '100%'}}>
      <TouchableOpacity onPress={onPress}>
        <View style={{...styles.buttonStyle, ...buttonStyle}}>
          <Text style={{...styles.btnTextStyle, ...btnTextStyle}}>{name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  buttonStyle: {
    marginHorizontal: moderateScale(24),
    height: moderateScale(48),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(10),
    borderColor: '#00000026',
    backgroundColor: '#808900',
    marginVertical: moderateScale(8),
  },
  btnTextStyle: {
    fontWeight: 'bold',
    fontSize: scale(18),
    justifyContent: 'center',
    textAlign: 'center',
  },
});

//make this component available to the app
export default ButtonComponent;
