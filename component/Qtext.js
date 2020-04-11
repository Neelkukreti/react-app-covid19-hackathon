import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Qtext =(props) =>
{
    return(
        <View>
            <Text>{props.question}</Text>
        </View>
    );
};

const styles=StyleSheet.create({});

export default Qtext;