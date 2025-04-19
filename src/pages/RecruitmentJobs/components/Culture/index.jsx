import styles from "./Culture.module.scss";
function Culture() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.recruitment_culture}>
        <div className={styles.culture_content}>
          <div className={styles.culture_text}>
            <h2>VĂN HÓA COOLMATE</h2>
            <p>
              Ở Coolmate, văn hóa không chỉ là một bộ tài liệu, mà đó là "cẩm
              nang" và "quy tắc ứng xử" cho tất cả nhân viên của Coolmate bất kể
              ai, và bất kể vị trí gì. Coolmate coi việc xây dựng Văn Hóa là một
              phần quan trọng trong việc xây dựng doanh nghiệp phát triển mạnh
              và bền vững. 10 điều về Văn Hóa Coolmate được coi là "bộ luật
              Coolmate" định hướng cho mọi hành vi và tính cách của con người
              Coolmate.
            </p>
          </div>
          <div className= {styles.culture_img}>
            <img src="https://mcdn.coolmate.me/image/October2023/mceclip0_65.png" alt="Văn hoá Coolmate" /> 
          </div>
        </div>
        <div className={styles.recruitment_image}>
          <img src="https://media3.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/April2025/mceclip0_75.png" alt="Văn hoá Coolmate" /> 
        </div>
        <div className={styles.recruitment_cta}>
           <a href="">
            Gia nhập ngay
        <span><img src="https://mcdn.coolmate.me/image/September2023/mceclip0_76.png" alt="" /></span> 
           </a>
        </div>
      </div>
    </div>
  );
}

export default Culture;
