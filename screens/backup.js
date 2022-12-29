import { StatusBar } from 'expo-status-bar';
import { useEffect, useState, React } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Box, Image, NativeBaseProvider, Flex, Spacer, Button } from 'native-base';
import { useForm } from 'react-hook-form';
import { BrowserRouter } from 'react-router-dom';



import { connection } from './screens/user_verify';


export default function Home() {

  
  const urlDefinitive = "http://localhost:3333/login"
  

  const [count, setCount] = useState(0)
  const [user, setText] = useState(0)
  const handelUser = text => setText(text)
  const [pwd, setPwd] = useState(0)
  const handelPwd = pass => setPwd (pass)


  useEffect(()=> {
    if (count >0){
      
      const obj = { "email": user, "password": pwd}
      console.log(urlDefinitive, obj)
      connection(urlDefinitive, obj )
    }} , [count]);





  return (
    
    <NativeBaseProvider> 
    <View style={styles.container}>
      <Image source= {require ('./src/images/LOGO VERTICAL COLORIDA.png')} alt="React Logo" size={400}  resizeMode='contain' marginTop={40} marginBottom={10}/>
      <Box flex={1}>
        <Flex direction='row'>
        <TextInput 
                onChangeText={handelUser}
                style={styles.input}
                placeholder="Usuário"
                
              />
        <TextInput 

          onChangeText={handelPwd}
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          
        />
        </Flex>
      </Box>
      
      <Button style={styles.button} onPress={() => setCount(count + 1)}>Entrar</Button>
    </View>
    </NativeBaseProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    height: 40,
    margin: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    width:  400,
    
  },

  button: {
    width: 150,
    height: 50,
    margin: 10,
    borderRadius: 20,
    
    
   
  },
});
