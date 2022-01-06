import React, {useState}from 'react'
import { StyleSheet, View, Text,Button, Keyboard,TouchableWithoutFeedback, Alert} from 'react-native';
import Cards from '../components/Cards';
import Inputs from '../components/input';
import Colors from '../constants/colors';
import NumberContainer from '../components/numberContainer';
import BodyText from '../components/bodyText';

const StartGameScreen = props => {
    const [enteredValue,setEnteredValue] = useState('')
    const [conformed,setConformed] = useState(false)
    const [selectedNumber,setSelectedNumber] = useState()

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g , ''))
    }

    const resetInputHandler = () => {
        setEnteredValue('')
        setConformed(false)
    }

    const conformInputHandler = () => {
        const chooseNumber  = parseInt(enteredValue)
        if(isNaN(chooseNumber) || chooseNumber <= 0) {
            Alert.alert(
                'invalid number',//title
                'enter a valid number',//message
                [{text:'ok',style:'default',onpress:resetInputHandler}]//button
                )
            return
        }
        setConformed(true)
        setSelectedNumber(chooseNumber)
        setEnteredValue('')
        Keyboard.dismiss()
    }

    let conformedOutput
    if(conformed){
        conformedOutput =(
            <Cards style={styles.summaryContainer}>
                <Text>choose Number</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button title='start game' onPress ={() => props.onStartGame(selectedNumber)}/>
            </Cards>
        )
    }
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
    <View style={styles.screen}>
        <Text style={styles.title}>start a new game</Text>
        <Cards style={styles.input}>
            <BodyText>enter number</BodyText>
            <Inputs style={styles.inputs} 
            blurOnSubmit 
            autoCapitalize='none' 
            autoCorrect={false} 
            keyboardType='number-pad'
            maxLength={2} 
            onChangeText={numberInputHandler}
            value={enteredValue}/>
        <View style={styles.bothbutton}>
            <View style={styles.button}>
                <Button title="conform" onPress={conformInputHandler} color={Colors.accent}/>
            </View>
            <View style={styles.button}>
                <Button title="reset" onPress={resetInputHandler} color={Colors.butt}/>
            </View>
        </View>
        </Cards>
        {conformedOutput}
    </View>
    </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center'
    },
    title:{
        fontSize:20,
        marginVertical:10,
        fontFamily:'open-sans-bold'
    },
    input:{
        width:300,
        borderColor:'green',
        justifyContent:'space-between',
        alignItems:'center'
    },
    bothbutton:{
        flexDirection:'row',
        paddingTop:10,
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal:15,
    },
    button:{
        width:100,
    },
    inputs:{
        width:50,
        textAlign:'center',
        fontFamily:'open-sans-bold'
    },
    summaryContainer:{
        marginTop:20,
        alignItems:'center'
    }
})

export default StartGameScreen