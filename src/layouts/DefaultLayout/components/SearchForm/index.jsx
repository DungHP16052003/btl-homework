
import { Link, useNavigate } from "react-router-dom";
import styles from "./SearchForm.module.scss"
import 'boxicons/css/boxicons.min.css';
import config from "@/config";

function SearchForm() {
  const navigate = useNavigate();
  const handleLogout = () =>{
       fetch(' https://api01.f8team.dev/api/auth/logout', {
        method:"POST",
        headers: {
          Authorization : `Bearer ${localStorage.getItem("token")}` 
        },
       })
       .then((res) => {
        if(!res.ok){
          throw res;
        }
        return res.json()
       })
       .then(() => {
       localStorage.removeItem("token");
       navigate(config.routes.home)
       })
       .catch((error) => {
        console.log(error)
        
       })
       
  }
  return (
    <div className={styles.wrapper}>
    <div className={styles.icon}>
    <div className={styles.icon_search}>
          <i className='bx bx-search-alt-2'></i>
          <input type="text" id="search" placeholder="Tìm kiếm..." />
        </div>
        <div className={styles.icon_user}>
          <Link to={config.routes.login}><a href="#"><i className='bx bxs-user'></i></a></Link>
        </div>
        <div className={styles.icon_shopping}>
          <a href="#"><i className='bx bxs-shopping-bag'></i></a>
        </div>
        <div className={styles.logout}>
          <a href="" onClick={handleLogout}><i className='bx bx-log-out'></i></a>
        </div>
      </div>
   </div>
  );
}

export default SearchForm;


