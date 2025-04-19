import styles from "./More.module.scss";
function More() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.recruitment_more}>
        <div className={styles.recruitment_img}>
          <a href="">
            <img
              src="https://mcdn.coolmate.me/image/October2023/mceclip1_45.png"
              alt="Tim hiểu thêm Coolmate"
            />
          </a>
        </div>
        <div className={styles.recruitment_img}>
        <a href="">
            <img src="https://mcdn.coolmate.me/image/October2023/mceclip2_96.png" alt="Khám phá ngay"></img>
          </a>
        </div>
        <div className={styles.recruitment_img}>
          <a href="">
            <img src="https://mcdn.coolmate.me/image/October2023/mceclip0_36.png" alt="Gia nhập ngay"></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default More;
