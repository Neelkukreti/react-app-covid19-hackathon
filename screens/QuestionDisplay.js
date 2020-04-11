import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, StatusBar,Image } from 'react-native';


const QuestionDisplay = (props) =>
{
    return (
        <View style={styles.header}>

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
        backgroundColor: '#7CFC00',
        alignItems:'center',
        justifyContent: 'center'
    },

})

export default QuestionDisplay;