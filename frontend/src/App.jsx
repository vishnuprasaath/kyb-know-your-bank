import {useEffect,useState} from "react"
import axios from "axios"

import Navbar from "./components/Navbar"
import BankCard from "./components/BankCard"
import BankChart from "./BankChart"

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

<div className="bg-gray-100 min-h-screen">

<Navbar/>

<div className="p-8">

<input
className="border p-2 mb-6 w-full"
placeholder="Search bank..."
onChange={(e)=>setSearch(e.target.value)}
/>

<div className="grid grid-cols-3 gap-6">

{filtered.map((bank,index)=>(
<BankCard bank={bank} key={index}/>
))}

</div>

<BankChart/>

</div>

</div>

)

}

export default App
