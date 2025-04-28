import { Link } from "react-router-dom";
import styles from "./Delivery.module.scss";
import config from "@/config";

function Delivery() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.Delivery}>
        <div className={styles.Delivery_content}>
          <h1>Dịch vụ giao hàng Coolmate</h1>
          <div className={styles.Delivery_img}>
            <img
              src="https://mcdn.coolmate.me/image/August2023/mceclip0_103.jpg"
              width="1000"
            ></img>
          </div>
          <div className={styles.description}>
            <p>
              <strong>Giao hàng nhanh và đúng hẹn</strong> cho 95% đơn hàng là{" "}
              <strong>mục tiêu</strong> mà đội ngũ vận hành của{" "}
              <Link to={config.routes.home}>
                <strong>Coolmate</strong>
              </Link>{" "}
              hướng tới. Khách hàng hãy tin ở Coolmate, chúng tôi sẽ làm được!
            </p>
            <p>
              Hiện tại <strong>Coolmate</strong> đang là{" "}
              <strong>đối tác lớn</strong> với 2 đơn vị giao hàng nổi tiếng có
              uy tín như <strong>Ninjavan</strong> và <strong>Snappy</strong>
              &nbsp;
            </p>
            <p>
              <strong>COOLMATE CÓ 2 TRUNG TÂM VẬN HÀNH</strong>
            </p>
            <ul>
              <li>
                Các đơn hàng phát sinh từ Đà Nẵng trở ra khu vực phía Bắc sẽ
                được gửi đi từ trung tâm vận hành phía Bắc của Coolmate,
              </li>
              <li>
                Các đơn còn lại sẽ được đóng gói và vận chuyển từ trung tâm phía
                Nam.
              </li>
            </ul>
            <p>
              <strong>THỜI GIAN VẬN CHUYỂN TRUNG BÌNH</strong>
            </p>
            <p>
              <strong>• Đơn nội thành Hà Nội và Hồ Chí Minh</strong>: Khách hàng
              sẽ nhận được trong vòng 1 -2 ngày kể từ khi đơn hàng{" "}
              <strong>được xác nhận</strong>(trừ trường hợp đơn hàng dạng đặt
              trước hoặc chưa đủ tồn kho, Coolmate sẽ gửi đi từ kho vận hành
              khác tỉnh và CSKH của Coolmate sẽ thông báo cho khách hàng về vấn
              đề này). Thông thường có thể sớm hơn tuỳ thuộc vào thời gian khách
              hàng đặt <strong>(Không tính chủ nhật và ngày lễ)</strong>
            </p>
            <p className={styles.map}>
              <img
                src="https://mcdn.coolmate.me/image/February2024/mceclip1_92.jpg"
                width="1000"
              ></img>
            </p>
            <ul>
              <li>
                <strong>Các khu vực khác: 2-5 ngày</strong> (thường là 2-4
                ngày), nếu sau 3 ngày kể từ khi đặt hàng mà Anh/Chị chưa nhận
                được cuộc gọi giao hàng của bưu tá thì vui lòng xin liên hệ
                Coolmate để được hỗ trợ (không bao gồm chủ nhật và ngày lễ).
              </li>
            </ul>
            <p>
              <strong>LƯU Ý:</strong> Trong trường hợp khách hàng{" "}
              <strong>cần nhận hàng gấp</strong> thì có thể liên hệ{" "}
              <strong>Hotline Coolmate 1900272737</strong> để được hỗ trợ.{" "}
              <Link to={config.routes.home}>
                <strong>Coolmate</strong>
              </Link>{" "}
              không cam kết có thể hỗ trợ các trường hợp khẩn cấp 100%, tuy
              nhiên <strong>Coolmate</strong> chắc chắn sẽ làm mọi cách có thể
              để giúp khách hàng giải quyết công việc của mình.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
