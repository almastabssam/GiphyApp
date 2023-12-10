import {createStackNavigator} from '@react-navigation/stack';
import FeedbackScreen from '../features/Feedback/FeedbackScreen.tsx';
import HomeScreen from "../features/Home/HomeScreen.tsx";
import TrendingGiphyScreen from "../features/TrendingGiphy/TrendingGiphyScreen.tsx";
import SearchGiphyScreen from "../features/SearchGiphy/SearchGiphyScreen.tsx";

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'HomeScreen'}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="TrendingGiphyScreen"
        component={TrendingGiphyScreen}
      />
      <Stack.Screen name="SearchGiphyScreen" component={SearchGiphyScreen} />
      <Stack.Screen name="FeedbackScreen" component={FeedbackScreen} />
    </Stack.Navigator>
  );
};
