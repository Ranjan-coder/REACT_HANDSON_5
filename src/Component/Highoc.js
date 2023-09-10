import { useState } from "react"

export function HigherOrderCompo(props){
    const [data] = useState("PrepBytes")
    return(
        <>
        <h1>College Nmae : {data}</h1>
        <div>{props.course}</div>
        </>
    )
}