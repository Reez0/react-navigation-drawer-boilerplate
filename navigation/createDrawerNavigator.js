import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {HomeStackNavigator, AboutStackNavigator, ContactStackNavigator} from './createStackNavigator';


const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator hideStatusBar={true} initialRouteName="Home">
            <Drawer.Screen  name="Home" component={HomeStackNavigator}/>
            <Drawer.Screen  name="About" component={AboutStackNavigator}/>
            <Drawer.Screen  name="Contact" component={ContactStackNavigator}/>
        </Drawer.Navigator>
    )

}