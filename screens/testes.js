// import axios from "axios"

// const urlDefinitive = "http://localhost:3333/users"
// const objectLogin = {
//     "email" : "ffadmin@casal.al.gov.br",
//     "password" : "senha"
// }



// const res = await axios.get(urlDefinitive, { headers:{
//  'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY4ODI3MWUxLTc5MWQtNGRkOS05NzE3LTM1MDBkYjFlZjU1MiIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTY3MTU0Mzg3NSwiZXhwIjoxNjcyMTQ4Njc1fQ.r8ORYxc-uZlt_jSdLxl2ZVdfc44wN5KTiB2wwBkuhbo'
// }})

// console.log(res)

// DB_HOST= 'localhost'
// DB_PORT= '5432'
// DB_USER= 'postgres'
// DB_NAME= 'App_agreste'
// DB_PASSWORD = 'senha'

// JWT_SECRET= *Segredo para a criação do JWT*

// ADMIN_INITIAL_PASSWORD = 'senha'
// var require = NodeRequire

// import pg from 'pg'

// const {Pool, Client} = pg

// const pool = new Pool (
//     {
//         user: 'postgres',
//         host: 'localhost',
//         database: 'App_agreste',
//         password: 'senha',
//         port: 5432
//     }
// )


// pool.query("SELECT * FROM ocorrencias", (err,res)=>{
//     // console.log(err,res)
//     if (res){
//         res.rows.forEach(Element => console.log(Element))
//     }
    
//     pool.end()
// }
// )

import axios from "axios";

async function sendGetRequest (){

    const resposta = await axios.get('http://localhost:5432/ocorrencias',
    {
        params:{}
    });
    console.log(resposta.data)
}

sendGetRequest()