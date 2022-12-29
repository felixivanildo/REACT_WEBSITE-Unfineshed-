import { useEffect, useState, React, useContext } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Box, Image, NativeBaseProvider, Flex, Spacer, Button } from 'native-base';
import { get, useForm } from 'react-hook-form';
import { createBrowserRouter,
  RouterProvider, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { connection } from './screens/user_verify';
import { HomeScreen } from './screens/Home';
import AsyncStorage from '@react-native-async-storage/async-storage';






export default function App (){


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Home",
    element: <HomeScreen/>
  }
]);

  


  return (  
    <RouterProvider router={router}></RouterProvider>
    );

}



function Home() { 
 
  
  const navigate = useNavigate () 
  const urlDefinitive = "http://localhost:3333/login"
  
  const [count, setCount] = useState(0)
  const [user, setText] = useState(0)
  const handelUser = text => setText(text)
  const [pwd, setPwd] = useState(0)
  const handelPwd = pass => setPwd (pass)
  
  useEffect(()=> {
    if (count >0){
      
      const obj = { "email": user, "password": pwd}
      // console.log(urlDefinitive, obj)
      async function setingSun(){
      connection(urlDefinitive, obj)
  
      }

      setingSun().finally(
        navigate("/home")
      )
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


