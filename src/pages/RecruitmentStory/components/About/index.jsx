import styles from "./About1.module.scss";
function About() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.recruitment_about}>
        <div className={styles.recruitment_content}>
          <div className={styles.recruitment_inFor}>
            <h2 style={{ whiteSpace: "pre-line" }}>
              {"COOLMATE SINH\nRA ĐỂ LÀM GÌ?"}
            </h2>

            <div className={styles.recruitment_img}>
              <img
                src="https://mcdn.coolmate.me/image/October2023/mceclip0_56.png"
                alt=""
              />
            </div>
          </div>
          <div className={styles.recruitment_text}>
            <p>
              Phải chia sẻ thật là rất nhiều người đặt câu hỏi này cho đội ngũ
              Coolmate, nhưng gần đây, khi Coolmate bước sang 4 tuổi thì chúng
              tôi mới có được câu trả lời một cách rõ ràng và tự tin cho câu hỏi
              này. “Coolmate sinh ra với mong muốn trở thành điển hình về mô
              hình DOANH NGHIỆP TRÁCH NHIỆM bằng cách vừa làm kinh doanh bài
              bản, có lợi nhuận và đồng thời mang lại những giá trị thiết thực
              và lâu dài cho khách hàng, cho nhân viên, cho đối tác, cho cộng
              đồng, xã hội và cho cổ đông" Coolmate thành lập vào tháng 3/2019,
              Nhu (CEO), Hiệp (CTO) và Lan (CMO) khởi đầu với một nhà kho 20m2,
              và một Website bán hàng sơ khai, với các sản phẩm rất cơ bản dành
              cho nam giới như áo thun, bít tất và đồ lót. Sau 3 năm, thì ngày
              hôm nay Coolmate đã có sự trưởng thành đáng kể. Coolmate vẫn bán
              áo thun, đồ lót và bít tất, và cũng có thêm khá nhiều các sản phẩm
              khác trong tủ đồ nam giới như các đồ mặc đi chơi, mặc đi làm, hay
              chơi thể thao. Chúng tôi cũng bán cả mũ, cả khẩu trang, khăn mặt
              và 1 số áo in để dành tiền quyên góp cho một số quỹ từ thiện (danh
              mục Care & Share). Coolmate còn có thêm dịch vụ làm các sản phẩm
              in ấn theo yêu cầu (dịch vụ CoolxPrint), và là đơn vị tiên phong
              với mô hình giao đồ lót định kỳ đầu tiên tại Việt Nam (dịch vụ
              CoolSub). Và chắc chắn là chúng tôi sẽ không dừng lại ở những thứ
              đó. Coolmate sẽ mở rộng hơn các sản phẩm, dịch vụ xoay quanh nhu
              cầu của nam giới. Nên một ngày đẹp trời, nếu như mà bạn tìm thấy
              một đôi giày, bộ dao cạo râu, hay một lọ lăn khử mùi hay thậm chí
              là những chiếc bao cao su chất lượng ở Website thì cũng đừng ngạc
              nhiên nhé. Sau 3 năm chúng tôi cũng có gần 2000m2 văn phòng và kho
              vận hành ở tại Hà Nội và Hồ Chí Minh. Gia đình Coolmate cũng lên
              tới gần 100 thành viên. Số lượng đơn hàng mà Coolmate đã xử lý tới
              thời điểm hiện tại đã lên tới con số gần 1 triệu. Coolmate cũng có
              sự tăng trưởng nhanh về doanh số và cũng có một chút lợi nhuận, và
              có nhiều hơn các quỹ đầu tư đã rót vốn vào Coolmate (tham khảo
              thêm hành trình của Coolmate)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
