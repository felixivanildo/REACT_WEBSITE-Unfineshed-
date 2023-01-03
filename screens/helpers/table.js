import React from 'react'
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import "./table.css"
import { useNavigate } from 'react-router-dom'




function JsonDataDisplay(){
    const [registros, setRegistros] = useState([{}])
    const [movimentation, setMovimentation] = useState (0)
    const input = useRef (null)


    async function PullData ()
    { if(movimentation<=0){const registros = await axios.get("http://localhost:3000/api/v1")
        const filterReg = registros.data
        
        setRegistros(filterReg)
        }
    }

    PullData()

   async function search () {
        var obtido = input.current.value
        const registros = await axios.get(`http://localhost:3000/api/v1/${obtido}`)
        console.log(registros.data)
        setRegistros(registros.data)        
    }

    useEffect(()=> {
        if(movimentation>=1){
            search()
        }
        } , [movimentation]);





	const DisplayData=registros.map(
		(info)=>{
			return(
				<tr>
                    
					<td><a href="/Resolve" onClick={async ()=> {
                        try {
                            await AsyncStorage.setItem('@Selected', info.isncrição)
                          } catch (e) {
                            // saving error
                          }
                    }}>{info.isncrição}</a></td>
                    
					<td>{info.situação}</td>
					<td>{info.descrição}</td>
				</tr>
			)
		}
	)

	return(
		<div>
            <div id='divSearch'>
            <text id='text'>Pesquisar Imovél</text>
            <input id='input' ref={input} placeholder='Matricula'></input>
            <button id='button' onClick={()=>setMovimentation(movimentation + 1)}>Pesquisar</button>
            </div>
			<table id="customers">
				<thead>
					<tr>
					<th>Sr.NO</th>
					<th>Name</th>
					<th>City</th>
					</tr>
				</thead>
				<tbody>
				
					
					{DisplayData}
					
				</tbody>
			</table>
			
		</div>
	)
}



export default JsonDataDisplay;
