import React from 'react'
import { StyleSheet, View, Image, Button, Text} from 'react-native';
import BodyText from '../components/bodyText';
import  Colors  from '../constants/colors';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
           <BodyText>The Game is Over!</BodyText>
           <View style={styles.imagecontainer}>
            {/* <Image source={require('../assets/wolf.jpg')} */}
            <Image source={{uri:'https://media.istockphoto.com/photos/silhouette-of-a-man-holding-a-trophy-at-sunset-picture-id1202740292?k=20&m=1202740292&s=612x612&w=0&h=NEvKyErDCYIgK6-Ne9yxO-YvcCRaDqFtvpV7IE6TZig='}}
            style={styles.image}
            resizeMode="contain" />
            </View>
            <View style={styles.bodycontainer}>
           <BodyText>It take 
               <Text style={styles.input}> {props.roundsNumber} </Text>
               rounds to guess <Text style={styles.input}> {props.userNumber} </Text>
               </BodyText>
            </View>

           <Button title="NEW GAME" onPress={props.onRestart} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    imagecontainer:{
        width:300,
        height:300,
        borderRadius:150,
        borderWidth:3,
        borderColor:'black',
        overflow:'hidden',
        marginVertical:30
    },
    image:{
        width:'100%',
        height:'100%'
    },
    input:{
        color: Colors.accent,
        fontSize:20
    },
    bodycontainer:{
        marginHorizontal:20
    }
});

  export default GameOverScreen