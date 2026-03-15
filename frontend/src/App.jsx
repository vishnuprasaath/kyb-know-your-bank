import {useEffect,useState} from "react"
import axios from "axios"

function App(){

const [banks,setBanks]=useState([])
const [search,setSearch]=useState("")

useEffect(()=>{
axios.get("http://127.0.0.1:8000/banks")
.then(res=>setBanks(res.data))
},[])

const filtered = banks.filter(bank =>
bank.name.toLowerCase().includes(search.toLowerCase())
)

return(

<div>

<h1>Know Your Bank</h1>

<input
placeholder="Search bank"
onChange={(e)=>setSearch(e.target.value)}
/>

{filtered.map((bank,index)=>(
<div key={index}>
<h2>{bank.name}</h2>
<p>{bank.type} Bank</p>
<p>FD Rate: {bank.fd_rate}%</p>
</div>
))}

</div>

)

}

export default App
