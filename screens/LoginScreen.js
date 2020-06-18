import React, { Component } from 'react';
import { View,Text, Button, AsyncStorage } from 'react-native';

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    saveToLocalStorage = async () => {
        try {
            await AsyncStorage.setItem('isLoggedIn','true');
            this.props.navigation.navigate('Main', {screen:'Home'});
          } catch (error) {
            // Error saving data
          }
 
    }

    render() {
        return (
            <View style = {{flex:1,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                <Text style={{textAlign:'center',margin:10}}>
                    This would be a standard login page. 
                    A user provides a username and password, 
                    and the server returns a token which can then be saved to localstorage
                </Text>
                <Button
                title="Click to change your status to logged in"
                onPress={() => {this.saveToLocalStorage()}}
                />
            </View>
        );
    }
}

export default LoginScreen;