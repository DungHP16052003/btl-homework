import useUser from "@/hooks/useUser";
import { useState } from "react";
import styles from "./UserIcon.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

function UserIcon() {
  const user = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const toggleLogin = (e) => {
    e.preventDefault();
    if (user) {
      setIsOpen((prev) => !prev);
    } else {
      handleLogin();
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.icon_user}>
        <div onClick={toggleLogin}>
          <i className="bx bxs-user"></i>
        </div>
      </div>

      {user && isOpen && (
        <div className={`${styles.user_info} ${styles.show}`}>
          <div className={styles.user_admin}>
            <div className={styles.user_information}>
              <h1>Hi, {user.firstName + ' ' + user.lastName} </h1>
            </div>

            <div className={styles.user_level}>
              <img
                src="https://mcdn.coolmate.me/image/October2023/mceclip0_92.png"
                alt=""
              />
            </div>

            <div className={styles.promo_button}>
              <a href="https://example.com">
                <img
                  src="https://media3.coolmate.me/cdn-cgi/image/width=1000,quality=80/uploads/March2025/mceclip5_91.png"
                  alt="Promo"
                />
              </a>
            </div>

            <div className={styles.account_line}>
              <p>Chi tiêu thêm</p>
              <b>500.000đ</b>
              <div className={styles.promote}>
                <p>để lên hạng</p>
                <img
                  src="https://mcdn.coolmate.me/image/September2023/mceclip0_56.png"
                  alt="lên hạng"
                />
              </div>

              <div className={styles.time_line}>
                <div className={styles.icon}>
                  <div className={styles.active}>
                    <img
                      src="https://mcdn.coolmate.me/image/September2023/mceclip0_80.png"
                      alt=""
                    />
                  </div>
                  <div className={styles.completed}>
                    <img
                      src="https://mcdn.coolmate.me/image/September2023/mceclip2_55.png"
                      alt=""
                    />
                  </div>
                  <div className={styles.special}>
                    <img
                      src="https://mcdn.coolmate.me/image/September2023/mceclip3_94.png"
                      alt=""
                    />
                  </div>
                  <div className={styles.display}>
                    <img
                      src="https://mcdn.coolmate.me/image/September2023/mceclip1_100.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className={styles.membership}>
                <p>
                  Hạng thành viên được vừa được xét lại vào ngày 31/03/2025,
                  ngày xét hạng tiếp theo: 30/06/2025
                </p>
              </div>
            </div>
            <div className={styles.account_content}>
              <div className={styles.coolcash_box}>
                <p>Bạn đang có</p>
                <p className={styles.balance}>
                  <span>💲</span> 0 Coolcash
                </p>
                <p>Chờ: 0 Coolcash</p>
              </div>
              <div className={styles.coolclub_box}>
                <p>Về</p>
                <p>CoolClub</p>
                <FontAwesomeIcon icon={faArrowAltCircleRight} />
              </div>
            </div>
            <div>
              <Link to={`/p/${user.username}`}>
                <button>
                  <p>Đi đến tài khoản</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserIcon;
