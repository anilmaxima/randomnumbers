import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, View, Text,  Button, Alert, ScrollView} from 'react-native';
import NumberContainer from '../components/numberContainer';
import Cards from '../components/Cards';
import BodyText from '../components/bodyText';

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

const renderListItem = (value,noofRounds) => (
    <View key={value} style={styles.listitems}>
        <BodyText>#{noofRounds}</BodyText>
        <BodyText>{value}</BodyText></View>
)

const GameScreen = props => {
    const initialGuess = GenerateRandomNumbers(1,100,props.userChoise)
    const [currentGuess,setCurrentGuess] = useState(initialGuess)

        const [pastGuesses,setPastGuesses] = useState([initialGuess])
        const currentLow = useRef(1)
        const currentHigh = useRef(100)

        const {userChoise, onGameOver} = props

        useEffect(() => {
           if (currentGuess == userChoise) {
               onGameOver(pastGuesses.length)
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
            currentLow.current = currentGuess + 1
        }
        const nextNumber = GenerateRandomNumbers(currentHigh.current,currentLow.current,currentGuess)
        setCurrentGuess(nextNumber)
        // setRounds(curRounds => curRounds+1)
        setPastGuesses(curPastGuesses => [nextNumber,...curPastGuesses])
    }

        return (
            <View style={styles.screen}>
                <Text>opp guess</Text>
                <NumberContainer>{currentGuess}</NumberContainer>
                <Cards style={styles.button}>
                    <Button title="higher" onPress={nextGuessHandler.bind(this,'higher')} />
                    <Button title="lower" onPress={nextGuessHandler.bind(this,'lower')}/>
                </Cards>
                <View style = {styles.list}>
                <ScrollView>
                    {pastGuesses.map((guess,index) => renderListItem(guess,pastGuesses.length - index))}
                </ScrollView>
                </View>
                
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
    },
    listitems:{
        padding:20,
        borderColor:'#ccc',
        borderWidth:1,
        flexDirection:'row',
        marginVertical:10,
        backgroundColor:'lightblue',
        justifyContent:'space-between'
    },
    list:{
        width:'80%',
        flex:1
    }
})

export default GameScreen