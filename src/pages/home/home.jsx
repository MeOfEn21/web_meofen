import Content from "../components/content/content";
import ReSearch from "../components/search/search";
import Header from "../header/header";
import styles from './home.module.css'

function Home (){
    return (
       <div>
       <div className={styles.top}>
            <div><Header/></div>
            <div className={styles.childTop}>
                <div>
                    <ReSearch/>
                </div>
            </div>
       </div>
       <div style={{width:'80%',left:'10%',position:'absolute'}}>
            <div style={{textAlign:'center',paddingBottom:'2rem'}}>
                <p style={{fontSize:'14px'}}>
                Dive into a world of movies with <strong>MeOfen</strong>, your one-stop destination 
                for all things cinema! From the latest blockbusters to timeless classics, 
                we've got you covered. Explore in-depth reviews, exclusive trailers, 
                and the hottest news from Hollywood and beyond. Whether you're a casual 
                viewer or a die-hard film buff, our curated lists and expert recommendations 
                will help you find your next favorite movie. With user-friendly navigation, personalized watchlists, 
                and the latest updates at your fingertips, <strong>MeOfen</strong> is designed to elevate your 
                movie-watching experience. Join our community today and stay in the loop with everything happening 
                in the world of film!
                </p>
            </div>
            <div>
                <hr />
            </div>
            <div>
                <Content title={'TRENDING MOVIES'}/>
            </div>
       </div>
       </div>
    )
}

export default Home;