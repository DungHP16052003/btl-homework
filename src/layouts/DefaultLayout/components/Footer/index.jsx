import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import config from "@/config";

function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.footer_top}>
        <div className={styles.footer_item}>
          <h2>COOLMATE lắng nghe bạn!</h2>
          <p>
            Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng góp
            từ khách hàng để có thể nâng cấp trải nghiệm dịch vụ và sản phẩm tốt
            hơn nữa.
          </p>
          <a href="">
            <button>ĐÓNG GÓP Ý KIẾN</button>
          </a>
        </div>
        <div className={styles.footer_item}>
          <div className={styles.footer_hotline}>
            <img
              src="https://www.coolmate.me/images/footer/icon-hotline.svg"
              alt="Footer Icon Phone"
            />
            <p>
              Hotline
              <b>1900.272737 - 028.7777.2737 (8:30 - 22:00)</b>
            </p>
          </div>

          <div className={styles.footer_email}>
            <img
              src="https://www.coolmate.me/images/footer/icon-email.svg"
              alt="Footer Icon Email"
            />
            <a href="">
              <p>Email Cool@coolmate.me</p>
            </a>
          </div>
        </div>
        <div className={styles.footer_social}>
          <a href="">
            <img
              src="https://mcdn.coolmate.me/image/June2023/mceclip1_43.png"
              alt="Footer Icon facebook"
            />
          </a>
          <a href="">
            <img
              src="https://mcdn.coolmate.me/image/June2023/mceclip2_68.png"
              alt="Footer Icon Zalo"
            />
          </a>
          <a href="">
            <img
              src="https://mcdn.coolmate.me/image/June2023/mceclip0_62.png"
              alt="Footer Icon tiktok"
            />
          </a>
          <a href="">
            <img
              src="https://www.coolmate.me/images/footer/icon-instar.svg"
              alt="Footer Icon instar"
            />
          </a>
          <a href="">
            <img
              src="https://www.coolmate.me/images/footer/icon-youtube.svg"
              alt="Footer Icon youtube"
            />
          </a>
        </div>
      </div>
      <p>
        <hr />
      </p>
      <div className={styles.footer_between}>
        <div className={styles.footer_content}>
          <h5>COOLCLUB</h5>
          <ul>
            <li>
              <a href="#">Đăng kí thành viên</a>
            </li>
            <li>
              <a href="#">Ưu đãi & Đặc quyền</a>
            </li>
          </ul>
          <h5>TÀI LIỆU TUYỂN DỤNG</h5>
          <ul>
            <li>
              <Link to={config.routes.recruitment}><a href="">Tuyển dụng</a></Link>
            </li>
            <li>
              <a href="#">Đăng ký bản quyền</a>
            </li>
          </ul>
        </div>
        <div className={styles.footer_content}>
          <h5>Chính sách</h5>
          <ul>
            <li>
              <a href="#">Chính sách đổi trả 60 ngày</a>
            </li>
            <li>
              <a href="#">Chính sách khuyến mãi</a>
            </li>
            <li>
              <a href="#">Chính sách bảo mật</a>
            </li>
            <li>
              <a href="#">Chính sách giao hàng</a>
            </li>
          </ul>
          <h5>Coolmate.me</h5>
          <ul>
            <li>
              <a href="">Lịch sử thay đôi website</a>
            </li>
          </ul>
        </div>
        <div className={styles.footer_content}>
          <h5>Chăm sóc khách hàng</h5>
          <ul>
            <li>
              <a href="#">Trải nghiệm mua sắm 100% hài lòng</a>
            </li>
            <li>
              <a href="#">Hỏi đáp - FAQs</a>
            </li>
          </ul>
          <h5>KIẾN THỨC MẶC ĐẸP</h5>
          <ul>
            <li>
              <a href="#">Hướng dẫn chọn size</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div className={styles.footer_content}>
          <h5>Về COOLMATE</h5>
          <ul>
            <li>
              <a href="#">Quy tắc ứng xử của Coolmate</a>
            </li>
            <li>
              <a href="#">Coolmate 101</a>
            </li>
            <li>
              <a href="#">DVKH xuất sắc</a>
            </li>
            <li>
              <a href="#">Câu chuyện về Coolmate</a>
            </li>
            <li>
              <a href="#">Nhà máy</a>
            </li>
            <li>
              <a href="#">Care & Share</a>
            </li>
            <li>
              <a href="#">Cam kết bền vững</a>
            </li>
          </ul>
        </div>
        <div className={styles.footer_content}>
          <h5>Địa chỉ liên hệ</h5>
          <ul>
            <li>
              <a href="#">
                Văn phòng Hà Nội: Tầng 3 Tòa nhà BMM, KM2, Đường Phùng Hưng,
                Phường Phúc La, Quận Hà Đông, TP Hà Nội
              </a>
            </li>
            <li>
              <a href="#">
                Trung tâm vận hành Hà Nội: Lô C8, KCN Lại Yên, Xã Lại Yên, Huyện
                Hoài Đức, Thành phố Hà Nội
              </a>
            </li>
            <li>
              <a href="#">
                Văn phòng và Trung tâm vận hành TP. HCM: Lô C3, đường D2, KCN
                Cát Lái, Thạnh Mỹ Lợi, TP. Thủ Đức, TP. Hồ Chí Minh.
              </a>
            </li>
            <li>
              <a href="#">
                Trung tâm R&D: T6-01, The Manhattan Vinhomes Grand Park, Long
                Bình, TP. Thủ Đức
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p>
        <hr />
      </p>
      <div className={styles.footer_bottom}>
        <div className={styles.footer_bottom_content}>
          <p>@ CÔNG TY TNHH FASTECH ASIA</p>
          <p>
            Mã số doanh nghiệp: 0108617038. Giấy chứng nhận đăng ký doanh nghiệp
            do Sở Kế hoạch và Đầu tư TP Hà Nội cấp lần đầu ngày 20/02/2019.
          </p>
        </div>
        <div className={styles.footer_img}>
          <a href="">
           <img src="https://media3.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/March2022/handle_cert.png" alt="Chung nhan Tin Nhiem Mang" className= {styles.footer_one} />
          </a>
          <a href="" >
            <img src="https://media3.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/March2022/dmca_protected_15_120.png" alt="DMCA.com Protection Status" className= {styles.footer_two} />
          </a>
          <a href="" >
            <img src="https://www.coolmate.me/images/footer/Coolmate-info.png" alt="Coolmate info"  className= {styles.footer_three}/> 
          </a>
          <a href="" >
            <img src="https://www.coolmate.me/images/footer/logoSaleNoti.png" alt="Coolmate info" className= {styles.footer_four} />  
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
