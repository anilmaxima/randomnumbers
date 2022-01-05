import React, { useState } from 'react'
import { StyleSheet, View, Text,  Button} from 'react-native';
import NumberContainer from '../components/numberContainer';
import Cards from '../components/Cards';

const GenerateRandomNumbers = (min,max,exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const random = Math.floor(Math.random()*(max-min)) + min
    if(random == exclude) {
        return GenerateRandomNumbers(min,max,exclude)
    } else {
        return random
    }
}

const GameScreen = props => {
    const [currentGuess,setCurrentGuess] = useState(
        GenerateRandomNumbers(1,100,props.userChoise))
        return (
            <View style={styles.screen}>
                <Text>opp guess</Text>
                <NumberContainer>{currentGuess}</NumberContainer>
                <Cards style={styles.button}>
                    <Button title="higher" onPress={() => {}} />
                    <Button title="lower" onPress={() => {}}/>
                </Cards>
            </View>
        )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center'
    },
    button:{
        flexDirection:'row',
        justifyContent:'space-around',
        padding:20,
        width:300,
        maxWidth:'80%'
    }
})

export default GameScreen