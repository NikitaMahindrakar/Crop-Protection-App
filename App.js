import React, { Component } from 'react';
import {
  Platform, StyleSheet, View, Text,
  Image, TouchableOpacity, ImageBackground
} from 'react-native';
export default class Myapp extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: true,
    }
  }
  Hide_Splash_Screen = () => {
    this.setState({
      isVisible: false
    });
  }

  componentDidMount() {
    var that = this;
    setTimeout(function () {
      that.Hide_Splash_Screen();
    }, 5000);
  }

  render() {
    let Splash_Screen = (
      <View style={styles.SplashScreen_RootView}>
        <View style={styles.SplashScreen_ChildView}>
          <Image source={require('C:/Users/Morya/Project/android/app/src/screen/Splash.png')} resizeMode="cover" />
        </View>
      </View>)
    return (
      <ImageBackground source={require('C:/Users/Morya/Project/android/app/src/screen/logo.png')} style={styles.backgroundImage}>
        <Text style={styles.title}>Animal Intrusion Detection App</Text>
        <View style={styles.alertContainer}>
          <Text style={styles.alertText}>Recent Intrusion Alerts</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Start Monitoring</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>View Reports</Text>
          </TouchableOpacity>
        </View>
        
        <View>
          {
            (this.state.isVisible === true) ? Splash_Screen : null
          }
        </View>
      </ImageBackground>
    );

  }
}
const styles = StyleSheet.create(
  {

    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    MainContainer:
    {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: (Platform.OS === 'android') ? 20 : 0
    },

    SplashScreen_RootView:
    {
      justifyContent: 'center',
      flex: 1,
      margin: 10,
      position: 'absolute',
      width: '100%',
      height: '100%',
    },

    SplashScreen_ChildView:
    {
      justifyContent: 'center',
      alignItems: 'center',

      backgroundSize: 'cover',
      flex: 1,
    },
    container: {
      flex: 1,
      padding: 16,
      justifyContent: 'center',
      alignItems: 'center',

    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: 'green',
      textAlign: 'center',
    },
    alertContainer: {
      marginTop: 20,
    },
    alertText: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
      textAlign: 'center',

    },
    buttonContainer: {
      marginTop: 50,
      flexDirection: 'row',
      justifyContent: 'space-around',
      display: 'flex',
      gap: 20,

    },
    button: {
      backgroundColor: '#3498db',
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },

  });  
