import {React, useState, useEffect, useRef } from 'react'
import { TextInput, StyleSheet, TouchableHighlight, View, Text } from 'react-native';
import { Input, Row, VStack } from 'native-base';
import { NativeBaseProvider, Heading , Center, Box, Image, Button} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-web';
import home from '../src/images/home.png'
import history from '../src/images/history.png'
import logout from '../src/images/logout.png'
import menu from '../src/images/menu.png'
import { useNavigate, createBrowserRouter } from 'react-router-dom';
import App from '../App';
import axios from 'axios';
import JsonDataDisplay from './helpers/table';





export function HomeScreen (){

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <App/>,
  //   },
    
  // ]);

// const [registros, setRegistros] = useState("0")



  const navigate = useNavigate () 
  
  const [movimentation, setMovimentation] = useState(1)
  var response = null
  var statusq = null
  
 


  // const offsetValue = useRef(new Animated.Value(0)).current
  // const scaleValue = useRef(new Animated.Value(1)).current
  // const closeButtonOffset = useRef (new Animated.Value(0)).current admin@casal.al.gov.br

  async function getData(){
      response = await AsyncStorage.getItem("@Token")
      statusq = await AsyncStorage.getItem("@Logged")
      console.log(statusq, response)

   
    
  }

//  async function requirement (){ 
//     const registros = await axios.get("http://localhost:3000/api/v1")
//       const filterReg = registros.data
//       setRegistros(filterReg)
      
//   }
  
getData()
   


   useEffect(()=> {
    if (response == null && statusq == null && movimentation<=1){
      navigate("/")
      
    }} , [movimentation]);
  

  

 

  return(
    
    <NativeBaseProvider> 
      <View style={{ justifyContent:'flex-start', backgroundColor:"#E8F7FD", height: '100vh'}} >
          
            <Image source={require('../src/images/LOGO VERTICAL COLORIDA.png')} alt="React Logo" size={100}  resizeMode='contain' marginLeft={20} marginTop={10} borderRadius={10}/>
          <View >
                
          <TouchableOpacity style={{margin:10}}>
              <View style={{flexDirection: "row", alignItems: "center", paddingVertical: 8, paddingLeft: 20  ,backgroundColor: "white", width: '25vH', borderRadius: 10, borderWidth:1,
               shadowColor: '#000', shadowOffset: {
                                                    width: 0,
                                                    height: 7,
                                                  },
                                                  shadowOpacity: 0.41,
                                                  shadowRadius: 9.11,

                                                    elevation: 14 }} >
                <Image source={home} style={{width:20, height: 20 , justifyContent: 'center', alignItems:'center'}}></Image>
                <Text style={{fontSize: 15, fontWeight: 'bold', paddingLeft: '20%'}}>Home</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={{margin:10}}>
                      <View style={{flexDirection: "row", alignItems: "center", paddingVertical: 8, paddingLeft: 20  ,backgroundColor: "white", width: '25vH', borderRadius: 10, borderWidth: 1, 
                      shadowColor: '#000', shadowOffset: {
                        width: 0,
                        height: 7,
                      },
                      shadowOpacity: 0.41,
                      shadowRadius: 9.11,}} >
                        <Image source={history} style={{width:20, height: 20 , justifyContent: 'center', alignItems:'center'}}></Image>
                        <Text style={{fontSize: 15, fontWeight: 'bold', paddingLeft: '20%'}}>Histórico</Text>
                      </View>
              </TouchableOpacity>
               


         </View>
         <View style={{paddingTop:"65vh"}}>
           <TouchableOpacity style={{margin:10 }} onPress={()=>{
              AsyncStorage.clear()
              
              setMovimentation(0)
           }}>
              <View style={{flexDirection: "row", alignItems: "center", paddingVertical: 8, paddingLeft: 20  ,backgroundColor: "#4444FF", width: '25vH', borderRadius: 10}} >
                <Image source={logout} style={{width:20, height: 20 , justifyContent: 'center', alignItems:'center'}}></Image>
                <Text style={{fontSize: 15, fontWeight: 'bold', paddingLeft: '20%'}}>Logout</Text>
              </View>
            </TouchableOpacity>
          </View>
      </View>
          
      <View style={{flexGrow:1, backgroundColor:'white', position: 'absolute', top: 0, bottom: 0, left:300 , right:0, borderColor:"black",
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 12,
                    },
                    shadowOpacity: 0.58,
                    shadowRadius: 16.00,
                    
                    elevation: 24, }}>
           <Text style={{justifyContent: 'center', alignItems:'center', margin:10, fontSize:35, fontWeight: 'bold'}}>Home</Text>
           <View style={{marginLeft:10, marginRight: 10}}>
            <JsonDataDisplay />
          </View>


      </View>
    </NativeBaseProvider>
  )

};


// const botoes = (currentButton, setCurrentButton, title, image) => {
//   return(
//     <TouchableOpacity style={{margin:10}} onPress={()=>{
//       setCurrentButton(title)
//       if(currentButton='Logout'){
//         console.log('teste')
//         AsyncStorage.clear()          
//      }
//     }}>
//     <View style={{flexDirection: "row", alignItems: "center", paddingVertical: 8, paddingLeft: 20  ,backgroundColor: "#4444FF", width: '25vH', borderRadius: 10}} >
//       <Image source={image} style={{width:20, height: 20 , justifyContent: 'center', alignItems:'center'}}></Image>
//       <Text style={{fontSize: 15, fontWeight: 'bold', paddingLeft: '20%'}}>{title}</Text>
//     </View>
//   </TouchableOpacity>
//   )
// }
 
 

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    backgroundColor: '#5359D1',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    


  }});