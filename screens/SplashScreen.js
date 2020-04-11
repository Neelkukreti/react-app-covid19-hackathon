import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, StatusBar,Image } from 'react-native';

const SplashScreen= (props) =>
{
    return(
        <View style={styles.header}>
            <Image
        style={styles.tinyLogo}
        source={require('../Images/splash.png')}/>
            <StatusBar style={styles.statusbar} />
            <Text style={styles.headerTitle}>
                {props.title} 
            </Text>
            </View>
    );
}

const styles = StyleSheet.create ({
    statusbar: {
        backgroundColor: '#00CED1',
        
    },
    header: {
        width:'100%',
        height: 900,
        paddingTop: 36,
        backgroundColor: '#00CED1',
        alignItems:'center',
        justifyContent: 'center'
    },

})

export default  SplashScreen ;
