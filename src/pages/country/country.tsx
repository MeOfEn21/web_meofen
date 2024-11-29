import React from "react";
import Header from "../header/header";
import CountryTags from "../components/countryTags/countryTags";
import Content from "../components/content/content";

export default function Country(){
    return <div>
        <div>
            <Header/>
        </div>
        <div style={{position:'relative', top:'-40px'}}>
            <CountryTags/>
        </div>
        <div style={{width:'70%'}}>
            <div style={{position:'absolute',top:'53%',width:'80%',left:'10%'}}>
                <hr />
            </div>
            <div style={{position:'absolute',left:'12.5%'}}>
                <Content title={'TRENDING MOVIE'}/>
            </div>
        </div>
    </div>
}