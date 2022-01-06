import React from 'react'
import { StyleSheet, View, Text} from 'react-native';
import Colors from '../constants/colors';

const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headertitle}>{props.title}</Text>
        </View>
    )
}
  
  const styles = StyleSheet.create({
      header:{
          width:'100%',
          height:110,
          paddingTop:40,
          backgroundColor:Colors.primary,
          alignItems:'center',
          justifyContent:'center'
      },
      headertitle:{
          color:'black',
          fontSize:20,
          fontFamily:'open-sans-bold'
      }
    });
    export default Header