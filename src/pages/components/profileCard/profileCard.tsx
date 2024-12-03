import React from "react"
import { CSSProperties } from "react"

export default function ProfileCard({imgUrl,name,social}){
    const containerStyle:CSSProperties = {
        backgroundImage:`url(${imgUrl})`,
        width:'200px',
        height:'286px',
        backgroundSize:'cover',
        position:'relative'
    }
    const subContainer:CSSProperties = {
        position:'absolute',
        height:'37px',
        textAlign:'center',
        backgroundColor:'#164096',
        width:'100%',
        alignContent:'center',
        color:'white',
        bottom:0,
    }
    return <a href={social} target="_blank">
        <div style={containerStyle}>
       <div style={subContainer}>
       <p>{name}</p>
       </div>
    </div>
    </a>
}