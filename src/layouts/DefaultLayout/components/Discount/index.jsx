import React from "react";
import styles from "./Discount.module.scss";
function Discount() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.banner}>
        <img
          src="https://media3.coolmate.me/cdn-cgi/image/width=1800,height=1200,quality=80,format=auto/uploads/March2025/Section_Banner_888x600.jpg"
          alt="banner"
        ></img>
      </div>
      <div className={styles.banner}>
        <img
          src="https://media3.coolmate.me/cdn-cgi/image/width=1800,height=1200,quality=80,format=auto/uploads/March2025/Active_women_1.jpg"
          alt="banner"
        ></img>
      </div>
    </div>
  );
}

export default Discount;
