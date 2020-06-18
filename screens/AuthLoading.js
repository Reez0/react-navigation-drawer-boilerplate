import React, { Component } from 'react';
import {View,Text,AsyncStorage} from 'react-native';
class AuthLoading extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        //You can check if a user's token is stored in localstorage and is valid.
        this.retrieveData();
    }


    retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem('isLoggedIn');
          if (value !== null) {
            this.props.navigation.navigate('Main',{screen:'Home'})
          } else {
            this.props.navigation.navigate('Login')
          }
        } catch (error) {
          // Error retrieving data
        }
      };

    render() {
        return (
            // No need to return anything since this component does not render anything. 
            // It simply acts as a middleman between the main part of your app that only authenticated users
            // see, and the parts of the app required to authenticate those users.
            null
        );
    }
}

export default AuthLoading;