import React from "react"
import ProfileCard from "../components/profileCard/profileCard"
import phirun from '../../assets/images/phirun.jpg'
import daneath from '../../assets/images/daneath.jpg'
import vuner_vy from '../../assets/images/vuner_vy.jpg'
import rathana from '../../assets/images/rathana.jpg'
import chay from '../../assets/images/chay.png'
import vengkhem from '../../assets/images/vengkhem.jpg'
import veasna from '../../assets/images/long.jpg'
import sovanara from '../../assets/images/sovanara.jpg'
import Header2 from "../components/header2/header2"
export default function Profile (){
    return <div style={{width:'98.9vw'}}>
        <div>
            <Header2 pathname={'profile'}/>
        </div>
        <div style={{ textAlign:'center',marginTop:'10px',width:'100%',position:'relative',marginBottom:'20px'}}>
            <h2 style={{fontSize:40, fontWeight:'bold',margin:0}}>Our Team Members</h2>
            <span>We worked together , we learnt together. Our main purpose is learning.<br/> We are still not perfect, but we are going to be.</span>
        </div>
       
        <div style={{
            position:'relative',
            height:'100vh'
            }}>
            <div style={{position:'absolute',left:'20%'}}>
                <ProfileCard imgUrl={phirun} name={'Phirun'} social={'https://t.me/phirunDev'}/>
            </div>
            <div style={{position:'absolute',left:'35%'}}>
                <ProfileCard imgUrl={daneath} name={'Sodaneath'} social={'https://t.me/daneath32'}/>
            </div>
            <div style={{position:'absolute',left:'50%'}}>
                <ProfileCard imgUrl={vuner_vy} name={'Venerable Vy'} social={'https://t.me/YIVYRUPP'}/>
            </div>
            <div style={{position:'absolute',left:'65%'}}>
                <ProfileCard imgUrl={rathana} name={'Rothana'} social={'https://t.me/sokh_Rothana'}/>
            </div>
            <div style={{position:'absolute',top:'40%',left:'20%'}}>
                <ProfileCard imgUrl={chay} name={'Chay'} social={'https://t.me/Chhay_Graphic'}/>
            </div>
            <div style={{position:'absolute',top:'40%',left:'35%'}}>
                <ProfileCard imgUrl={vengkhem} name={'Vengkhem'} social={'https://t.me/KingKhim'}/>
            </div>
            <div style={{position:'absolute',top:'40%',left:'50%'}}>
                <ProfileCard imgUrl={veasna} name={'Veasna'} social={'https://t.me/lowwinn'}/>
            </div>
            <div style={{position:'absolute',top:'40%',left:'65%'}}>
                <ProfileCard imgUrl={sovanara} name={'Sovannara'} social={'https://t.me/Vannara_Cassano'}/>
            </div>
        </div> 
    </div>
}