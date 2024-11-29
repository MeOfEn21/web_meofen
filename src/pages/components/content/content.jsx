const movies = [
    {
        "title": "Inside Out 2",
        "description": "2024 - 94m",
        "image":"images/images.png",
        "hd": true
    },
    {
        "title": "Crash Landing On You",
        "description": "2024 - 94m",
        "image": "images/crash landing on you .png",
        "hd": true
    },
    {
        "title": "Descendent of the Sun",
        "description": "2024 - 94m",
        "image": "images/descendent of the sun.png",
        "hd": true
    },
    {
        "title": "Hotel Del Luna",
        "description": "2024 - 94m",
        "image": "images/hotel del luna.png",
        "hd": true
    },
    {
        "title": "Love Next Door",
        "description": "2024 - 94m",
        "image": "images/love next door.png",
        "hd": true
    },
    {
        "title": "Mr Queen",
        "description": "2024 - 94m",
        "image": "images/mr queen.png",
        "hd": true
    },
    {
        "title": "No Gain No Love",
        "description": "2024 - 94m",
        "image": "images/no gain, no love.png",
        "hd": true
    },
    {
        "title": "Squid Game",
        "description": "2024 - 94m",
        "image": "images/squid game.png",
        "hd": true

    },
    {
        "title": "Sweet Home",
        "description": "2024 - 94m",
        "image": "images/sweet home.png",
        "hd": true
    },
    {
        "title": "Vincenzo",
        "description": "2024 - 94m",
        "image": "images/vincenzo.png",
        "hd": true
    },
    {
        "title": "18 Again",
        "description": "2024 - 94m",
        "image": "images/18 again.png",
        "hd": true
    },
    {
        "title": "A Shop for Killers",
        "description": "2024 - 94m",
        "image": "images/a shop for killers.png",
        "hd": true
    },
    {
        "title": "Café Minamdang",
        "description": "2024 - 94m",
        "image": "images/cafe minamdang.png",
        "hd": true
    },
    {
        "title": "Death Game",
        "description": "2024 - 94m",
        "image": "images/death game.png",
        "hd": true
    },
    {
        "title": "Gyeongseong Creature",
        "description": "2024 - 94m",
        "image": "images/Gyeongsoeng Creature.png",
        "hd": true
    },
    {
        "title": "Heartbeat",
        "description": "2024 - 94m",
        "image": "images/heartbeat.png",
        "hd": true
    },
    {
        "title": "Run On",
        "description": "2024 - 94m",
        "image": "images/run on.png",
        "hd": true
    },
    {
        "title": "Shooting Star",
        "description": "2024 - 94m",
        "image": "images/shooting star.png",
        "hd": true
    },
    {
        "title": "Uncanny Counter",
        "description": "2024 - 94m",
        "image": "images/Uncanny Counter.jpg",
        "hd": true
    },
    {
        "title": "Uncanny Counter 2",
        "description": "2024 - 94m",
        "image": "images/Un.jpg",
        "hd": true
    },
];
import Card from '../card/card';
import styles from './content.module.css'
import {  useNavigate } from 'react-router-dom';
function Content(
    {title}
){
    const navigate = useNavigate()
    function handleClick(){
        
        navigate('/video/preview')
    }
   return <div className={styles.container}>
    {
        movies.map((item,index)=> {
            return  <div onClick={handleClick}>
            <Card title={title}/>
            </div>
        })
    }
   </div>
}

export default Content;