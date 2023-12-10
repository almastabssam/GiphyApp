//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';

// create a component
const TextInputComponent = ({
  labelName,
  placeholder,
  container = {},
  textInputStyle = {},
  labelText = {},
  setValue,
  checkInputValue,
  keyboardType,
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputValue = text => {
    setInputValue(text);
    setValue(text);
  };

  return (
    <View style={{...styles.container, ...container}}>
      <Text style={{...styles.labelText, ...labelText}}>{labelName}</Text>
      <TextInput
        style={{...styles.textInputStyle, ...textInputStyle}}
        placeholder={placeholder}
        onChangeText={handleInputValue}
        value={inputValue}
        keyboardType={keyboardType}
      />
      {checkInputValue && (
        <Text style={styles.errorText}>This field is required.</Text>
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginVertical: moderateScale(10),
  },
  labelText: {
    fontSize: scale(16),
    fontWeight: '600',
  },
  textInputStyle: {
    borderWidth: 1,
    borderRadius: moderateScale(10),
    marginVertical: moderateScale(10),
    fontSize: scale(14),
    color: 'black',
  },
  errorText: {
    color: '#B80000',
  },
});

//make this component available to the app
export default TextInputComponent;
