// FeedbackForm.js
import React, {useState} from 'react';
import {
  View,
  Text,
  ToastAndroid,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';
import TextInputComponent from '../../components/TextInputComponent';
import {Images} from '../../../config/Images.tsx';

const FeedbackScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState('');
  const [feedback, setFeedback] = useState('');

  const [nameFlag, setNameFlag] = useState(false);
  const [emailFlag, setEmailFlag] = useState(false);
  const [ratingFlag, setRatingFlag] = useState(false);

  let updateEmail = true;
  let updateName = true;
  let updateRating = true;

  const checkNameValue = value => {
    setName(value);
    setNameFlag(false);
  };
  const checkEmailValue = value => {
    setEmail(value);
    setEmailFlag(false);
  };
  const checkRatingValue = value => {
    setRating(value);
    setRatingFlag(false);
  };
  const checkFeedbackValue = value => {
    setFeedback(value);
  };

  const handleSubmit = () => {
    // Perform validation
    // if (!name || !email || !rating) {
    //     // Display error message
    //     ToastAndroid.show('Name, Email, and Rating are required.', ToastAndroid.SHORT);
    //     return;
    // }

    if (!name) {
      setNameFlag(true);
      updateName = true;
    } else {
      setNameFlag(false);
      updateName = false;
    }
    if (!email) {
      setEmailFlag(true);
      updateEmail = true;
    } else {
      setEmailFlag(false);
      updateEmail = false;
    }
    if (!rating) {
      setRatingFlag(true);
      updateRating = true;
    } else {
      setRatingFlag(false);
      updateRating = false;
    }

    if (!updateEmail && !updateName && !updateRating) {
      // Save to local storage
      // Your local storage implementation goes here

      // Toast success message
      ToastAndroid.show('Feedback submitted successfully!', ToastAndroid.SHORT);

      // Clear form fields
      setName('');
      setEmail('');
      setRating('');
      setFeedback('');

      // Trigger parent onSubmit function
      navigation.goBack();
    }
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
            style={{marginLeft: 10, marginRight: 60, width: 40, height: 40}}
          />
        </TouchableOpacity>
        <Text style={styles.heading}>Feedback</Text>
      </View>

      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading}>Enter Your Feedback</Text>

          <TextInputComponent
            labelName={'NAME'}
            placeholder={'Enter Your Name'}
            setValue={checkNameValue}
            checkInputValue={nameFlag}
            textInputStyle={{color: 'black'}}
          />
          <TextInputComponent
            labelName={'EMAIL'}
            placeholder={'Enter Your Email'}
            setValue={checkEmailValue}
            checkInputValue={emailFlag}
            textInputStyle={{color: 'black'}}
          />
          <TextInputComponent
            labelName={'Rating'}
            placeholder={'Rate The App'}
            setValue={checkRatingValue}
            checkInputValue={ratingFlag}
            keyboardType={'numeric'}
            textInputStyle={{color: 'black'}}
          />
          <TextInputComponent
            labelName={'Feedback'}
            placeholder={'Enter Your Feedback'}
            setValue={checkFeedbackValue}
            textInputStyle={{color: 'black'}}
          />
        </View>

        <TouchableOpacity onPress={handleSubmit}>
          <View style={styles.buttonStyle}>
            <Text style={styles.btnTextStyle}>Submit</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: moderateScale(20),
    padding: moderateScale(20),
    borderWidth: moderateScale(1),
    borderColor: '#00000026',
    borderRadius: moderateScale(20),
  },
  heading: {
    textAlign: 'center',
    fontSize: scale(20),
    fontWeight: 'bold',
    color: 'darkred',
    paddingVertical: moderateScale(4),
  },
  buttonStyle: {
    marginHorizontal: moderateScale(24),
    height: moderateScale(48),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(10),
    backgroundColor: '#06905B',
    marginVertical: moderateScale(8),
  },
  btnTextStyle: {
    fontWeight: 'bold',
    fontSize: scale(18),
    justifyContent: 'center',
    textAlign: 'center',
    color: '#fff',
  },
});
export default FeedbackScreen;
