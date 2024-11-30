import styles from  './header.module.css'
import { route_name } from '../../constants';
import { useLocation,useNavigate } from 'react-router-dom';
function Header(){
  const navigate = useNavigate()
  const location = useLocation()
  const pathName = location.pathname.replace('/','')
  function onClickHeaderOption( clickPathName){
    const newPath = `/${clickPathName}`;
    if (location.pathname !== newPath) {
      navigate(newPath);
    }
  }
    return (
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <ul>
          {
            route_name.map((item, index) => 
              <li key={index}><a href={item.route} id={item.route == pathName? styles.hover:undefined} 
              onClick={() =>onClickHeaderOption(item.route)}>{item.name}</a></li>
            )
          }
          </ul>
      </div>
    </div>
    )
}
    
export default Header;