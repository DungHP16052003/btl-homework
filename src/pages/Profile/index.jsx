import AuthService from "@/services/AuthService";
import { useEffect, useState } from "react";
import styles from "./Profile.module.scss";
import { Link } from "react-router-dom";
import config from "@/config";

function Profile() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const data = await AuthService.getCurrentUser();

        data && setUser(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  const getDisplay = (value) => (value ? value : "Chưa cập nhật");
  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.account}>
          <h1>Thông tin tài khoản</h1>
        </div>
        <div className={styles.displayAccount}>
          <p>
            <b>Họ và tên:</b> {user?.firstName} {user?.lastName}
          </p>
          <p>
            <b>age:</b> {getDisplay(user?.age)}
          </p>
          <p>
            <b>Email:</b> {user?.email}
          </p>
          <p>
            <b>Giới tính:</b> {getDisplay(user?.gender)}
          </p>
          <p>
            <b>Số điện thoại:</b> {getDisplay(user?.phone)}
          </p>
          <p>
            <b>Ngày sinh:</b> {getDisplay(user?.birthDate)}
          </p>
          <p>
            <b>Cập nhật tài khoản:</b>{" "}
            {user?.emailVerifiedAt
              ? "Tài khoản đã được xác minh"
              : "Tài khoản chưa xác minh"}
          </p>
        </div>
        <Link to={config.routes.editProfile}>
          <button>cập nhật</button>
        </Link>
      </div>
      <div className={styles.footer}>
        <div className={styles.user}>
          <h1>Thông tin đăng nhập</h1>
        </div>
        <div className={styles.displayUser}>
          <p>
            <b>Email:</b> {user?.email}
          </p>
        </div>
        <Link to={config.routes.editProfile}>
          <button>cập nhật</button>
        </Link>
      </div>
    </section>
  );
}

export default Profile;
