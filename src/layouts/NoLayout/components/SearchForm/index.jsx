import React from 'react';
import styles from "./SearchForm.module.scss"
import 'boxicons/css/boxicons.min.css';

function SearchForm() {
  return (
    <div className={styles.wrapper}>
    <div className={styles.icon}>
    <div className={styles.icon_search}>
          <i className='bx bx-search-alt-2'></i>
          <input type="text" id="search" placeholder="Tìm kiếm..." />
        </div>
        <div className={styles.icon_user}>
          <a href="#"><i className='bx bxs-user'></i></a>
        </div>
        <div className={styles.icon_shopping}>
          <a href="#"><i className='bx bxs-shopping-bag'></i></a>
        </div>
      </div>
   </div>
  );
}

export default SearchForm;


