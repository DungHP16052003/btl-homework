import styles from "./Discount.module.scss";
function Discount() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.banner_men}>
        <img
          src="https://media3.coolmate.me/cdn-cgi/image/width=1800,height=1200,quality=80,format=auto/uploads/March2025/Section_Banner_888x600.jpg"
          alt="banner"
        ></img>
     <div className = {styles.banner_content_men}>
    <h2>MEN WEAR COLLECTION</h2>
    <p>Nhập SNCNM50 Giảm 50k đơn từ 460k</p>
    <button>MUA NGAY</button>
  </div>
      </div>
      <div className={styles.banner_women}>
        <img
          src="https://media3.coolmate.me/cdn-cgi/image/width=1800,height=1200,quality=80,format=auto/uploads/March2025/Active_women_1.jpg"
          alt="banner"
        ></img>
          <div className = {styles.banner_content_women}>
    <h2>WOMEN ACTIVE
    COLLECTION</h2>
    <p>Tặng Áo Bra khi mua quần Legging</p>
    <button>MUA NGAY</button>
  </div>
      </div>
    </div>
  );
}

export default Discount;
