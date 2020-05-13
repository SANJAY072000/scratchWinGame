import React,{Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import {Button} from 'native-base';
import {FontAwesome} from '@expo/vector-icons';

const itemArray=new Array(25).fill('empty');


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      randomNumber:''
    };
  }

 UNSAFE_componentWillMount(){

 }

generateRandomNumber=()=>{

}

scratchItem=()=>{

}

scratchItemIcon=()=>{

}

scratchItemColor=()=>{

}

showAllItem=()=>{

}

resetGame=()=>{
  
}


  render(){
    return(
      <View style={styles.container}>
        <Text>Scratch Win Game</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
