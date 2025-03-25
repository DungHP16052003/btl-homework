import React from 'react';
import styles from "./Navigation.module.scss"
function Navigation() {
  return (
      <nav className={styles.wrapper}>
        <ul>
            <li><a href="">NAM</a></li>
            <li><a href="">NỮ</a></li>
            <li><a href="">THỂ THAO</a></li>
            <li><a href="">CARE&SHARE</a></li>
        </ul>
      </nav>
  );
}

export default Navigation;
