import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './screens/SplashScreen';
import Quiz from './screens/Quiz'
import Geo from './screens/Geo'
import ApiKeys from './constants/ApiKeys'
import * as firebase from 'firebase'

export default class App extends React.Component {
  constructor(){
      super();
      this.state = {
          ready: false,
          where: {lat:null, lng:null},
          error: null
      }

     if(!firebase.apps.length){ firebase.initializeApp(ApiKeys.FirebaseConfig);}
  }
  
  componentDidMount(){
      let geoOptions = {
          enableHighAccuracy: true,
          timeOut: 20000,
          maximumAge: 60 * 60 * 24
      };
      this.setState({ready:false, error: null });
     // navigator.geolocation.getCurrentPosition( this.geoSuccess, 
      //                                        this.geoFailure,
      //                                        geoOptions);
    //  navigator.geolocation.watchPosition(this.geoSuccess,this.geoFailure,geoOptions);
  }
  geoSuccess = (position) => {
      console.log(position.coords.latitude);
      
      this.setState({
          ready:true,
          where: {lat: position.coords.latitude,lng:position.coords.longitude }
      })
  }
  geoFailure = (err) => {
      this.setState({error: err.message});
  }
  
  render() {
      return (
        
        <Quiz/>
        
    
      );
  }
}

const styles = StyleSheet.create({
  container: {
     
  },
  big: {
      fontSize: 10
  }
});


/*

          <View style={styles.container}>
              { !this.state.ready && (
              <Text style={styles.big}>Using Geolocation in React Native.</Text>
              )}
              { this.state.error && (
              <Text style={styles.big}>{this.state.error}</Text>
              )}
              { this.state.ready && (
                  <Text style={styles.big}>{
                  `Latitude: ${this.state.where.lat}
                  Longitude: ${this.state.where.lng}`
                  }</Text>
              )}
          </View>
          */