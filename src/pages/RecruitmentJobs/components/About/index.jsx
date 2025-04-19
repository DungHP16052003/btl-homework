import styles from "./About.module.scss";
function About() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.recruitment_about}>
        <div className={styles.recruitment_content}>
          <div className={styles.recruitment_inFor}>
            <h2>COOLMATE LÀ AI?</h2>
            <div className={styles.recruitment_img}>
              <img
                src="https://media3.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/July2024/mceclip0_7.png"
                alt="Coolmate là ai?"
              />
            </div>
          </div>
          <div className={styles.recruitment_text}>
          <p>
            Một Website bán đồ thời trang Online cho nam giới nhưng toàn bị chê
            chưa có tính thời trang trong thiết kế? Một Startup ứng dụng công
            nghệ để thay đổi ngành thời trang truyền thống theo hướng D2C
            Online, mang lại sự tiện lợi và tiết kiệm hơn cho các đấng mày râu?
            Một Thương Hiệu đồ thời trang cho nam giới hướng tới các sản phẩm
            tối giản, tập trung vào chất liệu và sự bền vững: Substainable
            Fashion? Một Startup lên SharkTank gọi được 500k USD trong thời gian
            nhanh nhất, nhưng cũng có màn ‘kỳ kèo’ gay cấn nhất? Một công ty đã
            vượt qua giai đoạn đại dịch Covid, và đạt tốc độ tăng trưởng 3.5 lần
            so với năm 2020? Một doanh nghiệp bán hàng Online đầu tiên tại Việt
            Nam có chính sách kỳ quặc: cho phép khách hàng đổi trả sản phẩm tới
            60 ngày kể cả đã qua sử dụng? Một "Zappos" của Việt Nam khi đứng ra
            cam kết hài lòng 100% cho khách hàng mua sắm Online bằng 11 điều cụ
            thể? Một Startup nguồn lực hạn chế đã có chương trình Care&Share
            đóng góp cho hoạt động từ thiện ý nghĩa? Một Startup mới 3 năm tuổi
            còn gặp nhiều khó khăn mà đi xây dựng Văn Hóa Doanh Nghiệp?
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default About;
