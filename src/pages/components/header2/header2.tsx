import React from 'react';

import styles from  './header2.module.css'
import { route_name } from '../../../constants';
import { useLocation,useNavigate } from 'react-router-dom';
import ReSearch from '../search/search';
function Header2(){
  const navigate = useNavigate()
  const location = useLocation()
  const pathName = location.pathname.replace('/','')
  function onClickHeaderOption( clickPathName){
    console.log('?? pathname :::', clickPathName)
    // navigate(clickPathName)
  }
    return ( <div className={styles.container}>
        <div className={styles.subContainer}>
          <ul>
          {
            route_name.map((item, index) => 
              <li><a href={`/${item.route}`} id={item.route == 'country'? styles.hover:undefined} 
             >{item.name}</a></li>
            )
          }
          <li style={{
            marginTop:'-6px',
            display:'flex',
            float:'right',
            borderRadius:'20px',
            backgroundColor: 'white',
            paddingBottom:'6px',
            paddingTop:'6px',
            padding:'6px 8px'

            }}>
            <span className="material-symbols-outlined">search</span>
            <input  placeholder="Search..." style={{outline:'none',border:'none'}}></input>
          </li>
          </ul>
      </div>
    </div>
    )
}
    
export default Header2;