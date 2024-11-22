import { useEffect, useState } from "react"

function Card(){
    const [details, setDetails] = useState([])

    useEffect(()=>{
        fetch("https://reqres.in/api/users")
        .then(res=>res.json().then((res)=> setDetails(res.data)))
    }, [])

    console.log(details)
    return(
        <div className="w-screen, flex flex-col justify-between items-center gap-y-10 p-5">
            {details.map((items, index)=>(
                <div key={index} className="bg-blue-900 rounded-lg flex flex-row items-center gap-x-2 border border-gray-600 p-4 shadow-2xl shadow-blue-300 hover:bg-blue-950 hover:scale-95 hover:transition-all">

                    <div className="bg-red-700 border-8 border-solid border-red-50 rounded-full"><img className="w-9rem border-4 border-black rounded-full" src={items.avatar}/></div>

                   <div className="flex flex-col">
                    <p className="font-bold text-white">{items.first_name}</p>
                    <p className="font-bold text-white">{items.last_name}</p>
                    <p className="font-bold text-white">{items.email}</p>
                   </div>
                </div>
            ))}
        </div>
    )
}

export default Card