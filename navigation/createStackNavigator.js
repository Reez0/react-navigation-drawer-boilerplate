import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import {Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NestedHome from '../screens/NestedHome';
import AboutScreen from '../screens/AboutScreen';
import ContactScreen from '../screens/ContactScreen';


function HeaderComponent(props) {
  return (
    <TouchableOpacity onPress={() => {props.navigation.toggleDrawer()}}>
      <Image style={{width: 40, height: 40}} source={{uri:"https://img.icons8.com/bubbles/50/000000/menu.png"}}/>
      </TouchableOpacity>
  );
}

const HomeStack = createStackNavigator();

export function HomeStackNavigator({ navigation }) {
  return (
    <HomeStack.Navigator screenOptions={{headerRight: () => <HeaderComponent navigation={navigation}/>}}>
      <HomeStack.Screen name="Home" options={{title:'Home Screen',headerTitleAlign:'center'}} component={HomeScreen} />
      <HomeStack.Screen name="NestedHome" options={{title:'Nested Home',headerTitleAlign:'center'}} component={NestedHome} />
    </HomeStack.Navigator>
  );
}

const AboutStack = createStackNavigator();

export function AboutStackNavigator({navigation}) {
  return (
    <AboutStack.Navigator screenOptions={{headerRight: () => <HeaderComponent navigation={navigation}/>}}>
    <AboutStack.Screen name="About" options={{title:'About Screen',headerTitleAlign:'center'}} component={AboutScreen} />
    {/* You can add more screens to your stack navigator and they will not appear in your drawer. */}
    </AboutStack.Navigator>
  )
}

const ContactStack = createStackNavigator();

export function ContactStackNavigator({navigation}) {
  return (
    <ContactStack.Navigator screenOptions={{headerRight: () => <HeaderComponent navigation={navigation}/>}}>
    <ContactStack.Screen name="Contact" options={{title:'Contact Screen',headerTitleAlign:'center'}} component={ContactScreen} />
    {/* You can add more screens to your stack navigator and they will not appear in your drawer. */}
  </ContactStack.Navigator>
  )
}