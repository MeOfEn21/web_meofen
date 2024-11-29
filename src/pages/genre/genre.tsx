import React from "react";
import Content from "../components/content/content";
import Header from "../header/header";
import GenreTags from "../components/genreTags/genreTags";

function Genre () {
    return <div>
        <div>
            <Header/>
        </div>
        <div style={{position:'relative',top:'-40px'}}>
            <GenreTags/>
        </div>
        <div style={{width:'70%'}}>
            <div style={{position:'absolute',top:'53%',width:'80%',left:'10%'}}>
                <hr />
            </div>
            <div style={{position:'absolute',left:'12.5%'}}>
                <Content title={'HOROR MOVIES'}/>
            </div>
        </div>
    </div>
}

export default Genre