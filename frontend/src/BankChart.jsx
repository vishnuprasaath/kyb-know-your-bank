import {Bar} from "react-chartjs-2"
import {useEffect,useState} from "react"
import axios from "axios"

export default function BankChart(){

const [banks,setBanks]=useState([])

useEffect(()=>{
axios.get("http://127.0.0.1:8000/banks")
.then(res=>setBanks(res.data))
},[])

const data = {

labels: banks.map(b => b.name),

datasets: [
{
label: "FD Interest Rate",
data: banks.map(b => b.fd_rate)
}
]

}

return(

<div>

<h2>Bank FD Rate Comparison</h2>

<Bar data={data}/>

</div>

)

}
