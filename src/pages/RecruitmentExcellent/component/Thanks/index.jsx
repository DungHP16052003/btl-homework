import styles from "./Thanks.module.scss";
function Thanks() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.thanks}>
        <div className={styles.thanks_img}>
          <img
            src="https://mcdn.coolmate.me/image/October2023/mceclip0_1.png"
            alt="Thanks you"
          />
        </div>
        <div className={styles.thanks_content}>
          <h2>THANK YOU!</h2>
          <div className={styles.thanks_description}>
            <p>
              Trong cuộc sống có quá nhiều sự lựa chọn, cảm ơn bạn đã chọn
              Coolmate!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thanks;
