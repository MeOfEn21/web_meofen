import React from "react";
import VideoPreview from "../components/videoPreview/videoPreview";
import Header2 from "../components/header2/header2";
import Content from "../components/content/content";

export default function PreviewVideo(){
    return <div>
        <div>
        <Header2 pathname={'country'}/>
        </div>
       <div style={{position:'relative',top:'-20px'}}>
       <VideoPreview/>
       </div>
       <div style={{position:'relative',left:'10%',top:'-20px'}}>
        <Content title={'You may also like'}/>
       </div>
    </div>
}