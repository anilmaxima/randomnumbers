import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, View, Text,  Button, Alert} from 'react-native';
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

        const [rounds,setRounds] = useState(0)
        const currentLow = useRef(1)
        const currentHigh = useRef(100)

        const {userChoise, onGameOver} = props

        useEffect(() => {
           if (currentGuess == userChoise) {
               onGameOver(rounds)
           }
        },[currentGuess,userChoise,onGameOver])

        const nextGuessHandler = direction => {
            if((direction == 'lower' & currentGuess < props.userChoise) ||
            (direction == 'higher' & currentGuess > props.userChoise)){
            Alert.alert('wrong', ' this is wrong number',[{text:'oops', style:"cancel"}
        ])
        return
    }   

        if(direction == 'lower') {
            currentHigh.current = currentGuess
        } else {
            currentLow.current = currentGuess
        }
        const nextNumber = GenerateRandomNumbers(currentHigh.current,currentLow.current,currentGuess)
        setCurrentGuess(nextNumber)
        setRounds(curRounds => curRounds+1)
    }

        return (
            <View style={styles.screen}>
                <Text>opp guess</Text>
                <NumberContainer>{currentGuess}</NumberContainer>
                <Cards style={styles.button}>
                    <Button title="higher" onPress={nextGuessHandler.bind(this,'higher')} />
                    <Button title="lower" onPress={nextGuessHandler.bind(this,'lower')}/>
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