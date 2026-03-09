import {useEffect,useState} from "react"
import axios from "axios"

function App(){

const [banks,setBanks]=useState([])

useEffect(()=>{

axios.get("http://127.0.0.1:8000/banks")
.then(res=>setBanks(res.data))

},[])

return(

<div>

<h1>Know Your Bank</h1>

{banks.map((bank,index)=>(
<div key={index}>

<h2>{bank.name}</h2>
<p>FD Rate: {bank.fd_rate}%</p>

</div>
))}

</div>

)

}

export default App