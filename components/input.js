import React from 'react'
import { StyleSheet, TextInput } from 'react-native';

const Inputs = props => {
    return (
        <TextInput {...props} style={{...styles.input, ...props.style}}  />
    )
}

const styles = StyleSheet.create({
    input:{
        height:30,
        borderBottomWidth:1,
        borderBottomColor:'black',
        marginVertical:5
    }
})
export default Inputs