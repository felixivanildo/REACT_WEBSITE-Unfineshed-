import axios from "axios"
async function howller ()
{ const registros = await axios.get("http://localhost:3000/api/v1")
    const filterReg = registros.data
    
        console.log(filterReg, "1")
   
}

howller()