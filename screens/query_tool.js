import pg from 'pg'


function query_tool(){
const {Pool, Client} = pg

const pool = new Pool (
    {
        user: 'postgres',
        host: 'localhost',
        database: 'App_agreste',
        password: 'senha',
        port: 5432
    }
)

pool.query("SELECT * FROM ocorrencias", (err,res)=>{
    // console.log(err,res)
    if (res){
        res.rows.forEach((Element) => {console.log(Element)
        return Element;
    })
    }
    
    pool.end()
}
)

}


query_tool()

export default query_tool