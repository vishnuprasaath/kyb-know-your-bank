export default function BankCard({bank}){

return(

<div className="bg-white shadow-lg rounded-xl p-5">

<h2 className="text-lg font-bold">
{bank.name}
</h2>

<p className="text-gray-500">
{bank.type} Bank
</p>

<p className="mt-2">
FD Rate: <b>{bank.fd_rate}%</b>
</p>

</div>

)

}