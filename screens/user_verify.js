import axios from "axios";
import { useContext } from "react";
import context from "react-bootstrap/esm/AccordionContext";
import { Route, Redirect, Navigate, redirect } from "react-router-dom";
import AsyncStorage from '@react-native-async-storage/async-storage'


// const urlDefinitive = "http://localhost:3333/login"
// const objectLogin = {
//     "email" : "ffadmin@casal.al.gov.br",
//     "password" : "senha"
// }



// const res = await axios.get(testo, { headers:{
//  'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY4ODI3MWUxLTc5MWQtNGRkOS05NzE3LTM1MDBkYjFlZjU1MiIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTY3MTU0Mzg3NSwiZXhwIjoxNjcyMTQ4Njc1fQ.r8ORYxc-uZlt_jSdLxl2ZVdfc44wN5KTiB2wwBkuhbo'
// }})

// console.log(res.data)


 async function comunicate(url, body) {
   
    try {     
    const response = await axios.put(url, body);    
     return response.data;     
    } catch (err) {(err)=> {        
        return err;        
    };
    }
   }


  
export function connection(url, body){    
    comunicate(url, body).then((resposta)=> {     
   
    const storeData = async (parameter) => {
        
        try {
            const value = JSON.stringify(parameter.token);
            await AsyncStorage.setItem ('@Token', value);
            await AsyncStorage.setItem ('@Logged', true);
            console.log(1);
            
           
        }
        catch(e){
            console.log(e)
            
            alert("Dados incorretos")
           
        }
        
        }
         storeData (resposta)
}).catch((answer) => {
        console.log(answer)
    })
}
