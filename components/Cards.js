import React from 'react'
import { StyleSheet, View, Text} from 'react-native';

const Cards = props => {
    return (
        <View style={{...styles.card, ...props.style}}>{props.children}</View>
    )
}

const styles = StyleSheet.create({
    card:{
        width:300,
        borderColor:'green',
        justifyContent:'space-between',
        alignItems:'center',
        shadowColor:'black',
        shadowOffset:{width:0 , height:2},
        shadowRadius:6,
        shadowOpacity:0.5,
        elevation:5,
        padding:25
    }
})
export default Cards