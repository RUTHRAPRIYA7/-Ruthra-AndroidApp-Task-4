import React from 'react';
import { StyleSheet,View,Text,ScrollView,Modal} from 'react-native';
import ActInd from './ActivityIndicator';


export default function App() {
    return (

      <View style={styles.container}>

        <View style={styles.top}>
          <Text style={[styles.text,{color:'black',fontWeight:'500',marginLeft:10}]}>💹</Text>
          <Text style={[styles.text,{color:'black',fontWeight:'bold',marginLeft:120,fontStyle:'italic'}]}>DASHBOARD</Text>
          <Text style={[styles.text,{marginLeft:100,color:'black',fontSize:16,fontWeight:'500'}]}>🔔</Text>
        </View>

          <View style={styles.TopBox}>
              <View style={styles.midBox}><Text style={[styles.text,{fontweight:'bold',fontstyle:'italic',color:'white'}]}>search</Text></View>
              <Text style={[styles.BoxText,{marginLeft:110,marginTop:10,color:'white',fontWeight:'bold'}]}>
                LIST OF ACCOUNT</Text>
          </View>
    
        <View >
          <ScrollView horizontal>

            <View style={[styles.box,{backgroundColor:'#B57EDC',marginLeft:6}]}>
             <Text style={[styles.BoxText,{marginLeft:18,fontWeight:'600'}]}> BANK ACCOUNT {'\n'}{'\n'}1144 5432 ****</Text></View>

            <View style={[styles.box,{backgroundColor:'#00FF7F'}]}>
              <Text style={[styles.BoxText,{marginLeft:18,fontWeight:'600'}]}> CASH {'\n'}{'\n'}$20000.00</Text></View>

            <View style={[styles.box,{backgroundColor:'#FF6600'}]}>
              <Text style={[styles.BoxText,{marginLeft:18,fontWeight:'600'}]}> CREDIT CARD {'\n'}{'\n'}$1500.00</Text></View>

            <View style={[styles.box,{backgroundColor:'#89CFF0'}]}>
             <Text style={[styles.BoxText,{marginLeft:18,fontWeight:'600'}]}>  DEBIT CARD{'\n'}{'\n'}$5000.00</Text></View>

            <View style={[styles.box,{backgroundColor:'#FD6C9E'}]}>
             <Text style={[styles.BoxText,{marginLeft:18,fontWeight:'600'}]}> INSURANCE {'\n'}{'\n'}$10,000.00</Text></View>
            
          </ScrollView>

          <View style ={[styles.bottom,{height:3,backgroundColor:'black'}]}></View>
          
          <View style ={[styles.bottom,{backgroundColor:'#FF6600',borderRadius:2}]}>

                <Text style={[styles.text,{color:'black',fontStyle:'normal',marginTop:13,fontWeight:'bold'}]}>Last Records Overview</Text>

                <View style={[styles.bottomBox,{marginTop:10,marginleft:10}]}>
                <Text style={[styles.BoxText,{marginLeft:12,fontweight:'bold'}]}>Groceries🍎🥯                       $250.00</Text>
                </View>
                <View style={styles.bottomBox}><Text style={[styles.BoxText,{marginLeft:12,fontweight:'bold'}]}>Clothes👕👖                          $100.00</Text></View>
                <View style={styles.bottomBox}><Text style={[styles.BoxText,{marginLeft:12,fontweight:'bold'}]}>Rental🏡                                  $500.00</Text></View>
            
          </View>
          <ActInd/>

</View>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'#F7E7CE',
    },
    text:{
      color:'#444',
      fontSize:16,
      marginLeft:22,
      marginTop:5,
      fontStyle:'italic',
    },
    BoxText:{
      color:'black',
      fontSize:18,
      marginLeft:100,
      marginTop:18,
    },
  
    TopBox:{
      width: 360,
      height: 120,
      backgroundColor:"#E0115F",
      marginLeft:12,
      marginTop: 15,
      borderRadius:5,
    },
    midBox:{
      width: 330,
      height: 40,
      backgroundColor:"#708090",
      marginTop: 10,
      marginLeft:15,
      borderRadius:5,
    },
    bottomBox:{
      width: 335,
      height: 63,
      backgroundColor:"#7FFF00",
      marginTop: 20,
      marginLeft:11,
      borderRadius:10,
    },
    modalBox:{
      width: 370,
      backgroundColor:'#FFFFFF',
      marginTop:470,
      height:60,
      marginLeft:11,
      position:'absolute',
      borderRadius:20,
    },
    box: {
      width: 180,
      height: 120,
      backgroundColor:"#FFFFFF",
      marginLeft:15,
      marginTop: 25,
      borderRadius:10,
      flexDirection: 'row',
    },
    top: {
      backgroundColor:"#CCCCFF",
      borderRadius:20,
      height:40,
      width: 400,       
      flexDirection:'row'
      },
    bottom: {
        width: 360,
        height: 290,
        backgroundColor:"#FFFFFF",
        marginTop: 15,
        borderRadius:30,
        marginLeft:13,
      },
  });