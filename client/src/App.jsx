import { useEffect, useState } from "react"
import { getAllDestinations } from "./api/destinations.api";


export default function App() {
    
    useEffect(() => {
        console.log('page load')
        async function getDestinations() {
            const res = await getAllDestinations()
            console.log(res)
        }
        getDestinations()
    }, [])
    
    return (
        <div>hELLO WORLD</div>
    )
}


 