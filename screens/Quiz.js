import React, {useState} from 'react';
import { StyleSheet, CheckBox, Text, View , FlatList , ScrollView,TouchableOpacity} from 'react-native';
import Qtext from '../component/Qtext'
import QuestionDisplay from './QuestionDisplay'
import RadioButton from '../component/RadioButton'
const Quiz =(props) =>
{
//
  const [gender, setGender] = useState('male');
  const [femaleCheck, setFemaleCheck] = useState(false);
  const [maleCheck, setMaleCheck] = useState(true);

  const maleRadioHandler = () => {
    if(femaleCheck){
      setFemaleCheck(false);
      setMaleCheck(true);
      setGender('male');
    } else {
      setMaleCheck(true);
      setGender('male');
    }
  }


  const femaleRadioHandler = () => {
    if(maleCheck){
      setMaleCheck(false);
      setFemaleCheck(true);
      setGender('female');
    } else {
      setFemaleCheck(true);
      setGender('female');
    }
  }
  const onPressHandler = async() => {
    console.log(gender);
  }
//
    const [st,setst]= useState("Qtext");
   return( 
    <View style={styles.header}>
        <Text>Please Answer the Following Questions</Text>
        <View style={styles.qus}>
    <ScrollView>
    <Text style={styles.qt}>Q1:Have you travelled internationally in feb/ march 2020?
</Text>

    <View justifyContent="space-between">
    <View style={styles.Q1}>
    <Text> Yes  </Text>
    <RadioButton  onPress={maleRadioHandler} checked={maleCheck} />
    </View>
    
    <View style={styles.Q1} >
    <Text style={styles.radioText}>No</Text>
    <RadioButton checked={femaleCheck} onPress={femaleRadioHandler} />
    </View>
    </View>
     
<Text>Q2:Are you experiencing any of the following symptoms?</Text>

<Text>Dry Cough</Text>

<Text>Sore Throat</Text>

<Text>Difficulty in breathing</Text>

<Text>None of the above</Text>

    </ScrollView>
    </View>
  </View>
   );
};

const styles=StyleSheet.create({
    radioText: {
        marginHorizontal: 5,
        fontSize: 15
      },  
    Q1: {
        flexDirection: "row",
        
        alignItems: "center",
      },
    qt:{
        width: 300,
        alignContent: 'center'
    },
    qus: {
       paddingTop: 100
    },
    header: {
        flex: 1,
        width:'100%',
        height: 900,
        paddingTop: 80,
        backgroundColor: '#7CFC00',
        alignItems:'center',
        justifyContent: 'center'
    },
});

export default Quiz;