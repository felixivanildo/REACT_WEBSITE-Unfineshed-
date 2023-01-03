import React from "react";
import { useState, useEffect } from "react";
import { Text, View } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { NativeBaseProvider,  Image } from "native-base";
import { TouchableOpacity } from 'react-native-web';
import { createBrowserRouter,
    RouterProvider, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import s1 from '../src/images/home.png'
import history from '../src/images/history.png'
import logout from '../src/images/logout.png'

function Management () {

    const navigate = useNavigate () 
    const [page, setPage] = useState ("")

   

    const [selected, setSelected] = useState("")


    async function getData (){
    const response = await AsyncStorage.getItem("@Selected")
    setSelected(response)
    console.log (response)

}

    
    getData()

    // function settingUrl (direction) {
    //     setPage(direction)
    // }

    // useEffect(()=>{
    //     if(page=="Home"){
    //         useNavigate("/Home")
    //     }
    // }, [page]
    // )
    
    return(
    
    <NativeBaseProvider>
    <View style={{ justifyContent:'flex-start', backgroundColor:"#E8F7FD", height: '100vh'}}>
         <Image source={require('../src/images/LOGO VERTICAL COLORIDA.png')} alt="React Logo" size={100}  resizeMode='contain' marginLeft={20} marginTop={10} borderRadius={10}/>
         <View>
          <a href="/Home" style={{textDecoration: 'none'}}>       
          <TouchableOpacity style={{margin:10}} onPress= {()=> {setPage("Home"); console.log(page)}}>
              <View style={{flexDirection: "row", alignItems: "center", paddingVertical: 8, paddingLeft: 20  ,backgroundColor: "white", width: '25vH', borderRadius: 10, borderWidth:1,
               shadowColor: '#000', shadowOffset: {
                                                    width: 0,
                                                    height: 7,
                                                  },
                                                  shadowOpacity: 0.41,
                                                  shadowRadius: 9.11,

                                                    elevation: 14 }} >
                <Image source={s1} style={{width:20, height: 20 , justifyContent: 'center', alignItems:'center'}} ></Image>
                <Text style={{fontSize: 15, fontWeight: 'bold', paddingLeft: '20%'}}>Home</Text>
              </View>
            </TouchableOpacity>
           </a>                                        
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
           <Text style={{justifyContent: 'center', alignItems:'center', margin:10, fontSize:35, fontWeight: 'bold'}}>Imovél: {selected} </Text>
           <View style={{marginLeft:10, marginRight: 10}}>
           
          </View>

    </View>
    </NativeBaseProvider>
    
    )
}

export default Management;