import styles from "./Caption.module.scss";
function Caption() {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.recruitment_caption}>
          <div className={styles.recruitment_content}>
            <div className={styles.recruitment_text}>
              <h2 >
                <span>“</span> Coolmate sẽ trở thành điển hình về mô hình DOANH
                NGHIỆP TRÁCH NHIỆM bằng cách kinh doanh tử tế, có lợi nhuận và
                mang lại những giá trị thiết thực và lâu dài cho khách hàng, cho
                nhân viên, cho đối tác, cho cộng đồng , cho môi trường và cho cổ
                đông <span>“</span>
              </h2>
              <span className={styles.Caption_author}>Nhu Phạm, CEO & Founder Coolmate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Caption;
