import styles from "./Refund.module.scss";
function Refund() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.refund_text}>
        <h1>Dịch vụ 60 ngày đổi trả</h1>
      </div>
      <div className={styles.container_content}>
        <div className={styles.refund_controller}>
          <div className={styles.refund_img}>
            <img
              src="https://mcdn.coolmate.me/image/August2023/mceclip0_61.jpg"
              alt="banner"
            />
          </div>
          <div className={styles.refund_youtube}>
            <iframe
              src="https://www.youtube.com/embed/miNEeN7UvZU"
              title="COOLMATE | ĐỔI TRẢ ĐƠN GIẢN XÓA TAN NỖI LO MUA ĐỒ ONLINE"
            ></iframe>
          </div>
          <div className={styles.refund_content}>
            <div className={styles.content_text}>
              <h2>Đổi trả miễn phí</h2>
              <p>Trong vòng 60 ngày</p>
            </div>
            <div className={styles.refund_inFor}>
              <div className={styles.inFor_content}>
                <h3>Đối với những sản phẩm bạn đã mua tại Coolmate</h3>
                <p>
                  Với những sản phẩm bạn đã mua tại Coolmate, 60 ngày kể từ khi
                  bạn nhận sản phẩm, bạn sẽ được đổi hàng và trả hàng với bất kỳ
                  lý do gì, tối đa 3 lần/đơn đến khi ưng ý, bao gồm cả các sản
                  phẩm đã qua giặt và sử dụng.
                </p>
                <p>Một số lưu ý:</p>
                <ul>
                  <li>
                    Coolmate sẽ không áp dụng đổi trả với 1 số dòng sản phẩm
                    nhất định như: Outlet, Áo in theo yêu cầu, Sản phẩm Săn
                    Deal, Coolmate Basics và sản phẩm được đóng gói theo Pack cố
                    định.
                  </li>
                  <li>
                    Nếu các bạn mua sản phẩm ở các sàn TMĐT, thì Coolmate sẽ áp
                    dụng trước chính sách đổi/trả của sàn TMĐT, nếu quá hạn của
                    sàn TMĐT thì bạn có thể yêu cầu hỗ trợ từ CSKH của Coolmate
                    trực tiếp!
                  </li>
                </ul>
                <div>
                  <a
                    href="https://s.coolmate.me/returnnew"
                    className={styles.btn}
                  >
                    Đăng ký Đổi/Trả hàng
                  </a>
                </div>
              </div>
              <div className={styles.inFor_img}>
                <img
                  src="https://mcdn.coolmate.me/image/August2023/mceclip2_26.png"
                  alt=""
                />
              </div>
            </div>
            <div className={styles.refund_inFor}>
              <div className={styles.inFor_content}>
                <p>
                  <b>Coolmate Women:</b> Hy vọng bạn sẽ có trải nghiệm mua sắm
                  tuyệt vời với dòng sản phẩm mới này. Để bạn luôn an tâm, chúng
                  tôi vẫn áp dụng chính sách đổi trả trong 60 ngày chung của
                  Coolmate
                </p>{" "}
                <p>
                  <b>Lưu ý đổi hàng</b>
                </p>
                <ul>
                  <li>
                    <b>Điều kiện đổi hàng:</b> Sản phẩm chưa sử dụng, chưa giặt
                    là, còn nguyên tem mác, bao bì. Không bị dơ bẩn, hư hại
                    (rách, sờn…), không dính mỹ phẩm hay ám mùi như nước hoa,
                    khói thuốc...
                  </li>
                  <li>
                    <b>Không áp dụng đổi trả:</b> Đối với các sản phẩm Outlet,
                    in theo yêu cầu,... Mọi thắc mắc, vui lòng liên hệ chăm sóc
                    khách hàng để được tư vấn nhanh chóng!
                  </li>
                </ul>
                <p>
                  Quy trình đổi trả, xin vui lòng liên hệ CSKH hoặc điền thông
                  tin vào form bên dưới để được hỗ trợ.
                </p>
                <div>
                  <a
                    href="https://s.coolmate.me/returnnew"
                    className={styles.btn}
                  >
                    Đăng ký Đổi/Trả hàng
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.refund_policy}>
              <div className={styles.policy_content}>
                <h4>3 Bước nhanh chóng để đổi trả</h4>
                <div className={styles.grid_policy}>
                  <div className={styles.policy_column}>
                    <div className={styles.policy_item}>
                      <div className={styles.policy_img}>
                        <img
                          src="https://www.coolmate.me/images/landingpage/open-enrollment.svg"
                          alt="doitra-buoc-1"
                        ></img>
                      </div>
                      <h5>Bước 1</h5>
                      <p>
                        Điền thông tin Đổi/ Trả hàng, hoặc qua số hotline
                        <b>1900272737</b>.
                      </p>
                      <a
                        href="https://coolmate.typeform.com/yeucaudoitra?utm_source=website"
                        target="_blank"
                        className={styles.btn}
                      >
                        YÊU CẦU ĐỔI TRẢ
                      </a>{" "}
                    </div>
                  </div>
                  <div className={styles.policy_column}>
                    <div className={styles.policy_item}>
                      <div className={styles.policy_img}>
                        <img
                          src="https://www.coolmate.me/images/landingpage/customer-service.svg"
                          alt="doitra-buoc-2"
                        ></img>
                      </div>
                      <h5>Bước 2</h5>
                      <p>
                        Nhận cuộc gọi xác nhận từ Coolmate về sản phẩm và thời
                        gian nhận hàng
                      </p>
                    </div>
                  </div>
                  <div className={styles.policy_column}>
                    <div className={styles.policy_item}>
                      <div className={styles.policy_img}>
                        <img
                          src="https://www.coolmate.me/images/landingpage/deliver-package.svg"
                          alt="doitra-buoc-3"
                        ></img>
                      </div>
                      <h5>Bước 3</h5>
                      <p>
                        Ngay khi xác nhận chúng tôi sẽ gởi bạn đơn hàng mới
                        (hoặc lấy đơn hàng về), bạn chỉ cần gởi hàng cần đổi/trả
                        cho shipper là được.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.refund_inFor}>
              <div className={styles.inFor_content}>
                <h4>Đối với việc đổi trả hàng</h4>
                <p>
                  Chúng tôi sẽ hoàn lại số tiền hàng (sau khi đã trừ 25.000 VNĐ
                  phí ship hàng) vào tài khoản mà bạn cung cấp tối đa trong 24h
                  làm việc (không tính thứ 7 & Chủ Nhật) sau khi yêu cầu hoàn
                  tiền được CSKH xác nhận.
                </p>
                <h4>lưu ý</h4>
                <ul>
                  <li>
                    Coolmate có quyền quyết định dừng việc hỗ trợ đổi trả hàng
                    và trả lại tiền cho khách hàng nếu phát hiện khách hàng sử
                    dụng chính sách để trục lợi (như việc đổi quá nhiều lần).
                  </li>
                  <li>
                    Với các đơn sàn TMĐT thì sẽ áp dụng chính sách đổi trả hàng
                    của sàn TMĐT. Tuy nhiên, trường hợp quá thời gian đổi trả
                    hàng của sàn TMĐT sẽ được áp dụng chính sách đổi trả hàng
                    của Coolmate
                  </li>
                </ul>
                <h4>Chúng tôi làm gì với hàng đổi trả</h4>
                <ul>
                  <li>
                    Áo thun, quần short: thu gom và gởi cho các chương trình từ
                    thiện
                  </li>
                  <li>Bít tất, boxer: huỷ bỏ 100%</li>
                </ul>
              </div>
              <div className={styles.inFor_img}>
                <img
                  src="https://mcdn.coolmate.me/image/August2023/mceclip4_56.png"
                  alt=""
                ></img>
              </div>
            </div>
            <div className={styles.delivery_img}>
              <img
                src="https://mcdn.coolmate.me/image/August2023/mceclip10.gif"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Refund;
