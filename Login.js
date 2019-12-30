
import * as React from 'react';
import { Button, View, Text, StyleSheet,TextInput,TouchableOpacity, KeyboardAvoidingView } from 'react-native';


export default class Home extends React.Component 
{
  
  render() {
    return (
        <View style={styles.container}>
        <Text onPress={console.log(this.props)} style={styles.judul}>
          JoinShop
        </Text>
        <View style={styles.form}>
        
          <TextInput 
            placeholder="Username" 
            style={styles.input}  />
          <TextInput 
            placeholder="Password" 
            style={styles.input} />
          <View style={styles.grButton}>
            <TouchableOpacity 
              style={styles.btn} 
              onPress={() => this.props.navigation.navigate('Dashboard')}
              >
              <Text style={{fontSize: 12,color:'#fff',borderRadius: 25}}>Login !</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.register}
              onPress={() => this.props.navigation.navigate('Register')}>
              <Text style={{fontSize: 12,color:'#000'}}>belum terdaftar?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#FFA500',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft:40,
    paddingRight:40,
  },

  judul: {
    fontSize: 35,
    color: '##00a8ff',
    
  },

  form: {
    paddingTop: 50,
    marginTop: 20,
    marginBottom: 20,
    padding: 20,
    alignSelf: 'stretch',
    
  },

  input: {
    alignSelf:'strecth',
    padding:10,
    borderColor:'#44bd32',
    marginBottom:20,
    backgroundColor: '#fff'
      },

  grButton: {
    flex : 1,
    alignContent : 'space-between'
    // flexBasis: 100,
  },
  btn: {
    alignSelf:'strecth',
    padding:10,
    marginBottom:20,
    backgroundColor: '#44bd32',
    alignItems: 'center',
  },
  register: {
    alignItems: 'center',
    padding:'40',
    color:'#fff'  }
});