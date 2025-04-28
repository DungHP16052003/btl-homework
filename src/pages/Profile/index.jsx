import { useSelector } from "react-redux"; // THÊM
import styles from "./Profile.module.scss";
import { Link } from "react-router-dom";
import config from "@/config";
import { useGetUserQuery } from "@/services/profile";

function Profile() {
  const currentUser = useSelector((state) => state.auth.currentUser); // LẤY currentUser từ Redux

  const username = currentUser?.username; // LẤY username

  const { data, isLoading } = useGetUserQuery(username);
  if (isLoading) return <p>Loading...</p>;

  const getDisplay = (value) => (value ? value : "Chưa cập nhật");

  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.account}>
          <h1>Thông tin tài khoản</h1>
        </div>
        <div className={styles.displayAccount}>
          <p>
            <b>Họ và tên:</b> {data?.data?.firstName} {data?.data?.lastName}
          </p>
          <p>
            <b>age:</b> {getDisplay(data?.data?.age)}
          </p>
          <p>
            <b>Email:</b> {data?.data?.email}
          </p>
          <p>
            <b>Giới tính:</b> {getDisplay(data?.data?.gender)}
          </p>
          <p>
            <b>Số điện thoại:</b> {getDisplay(data?.data?.phone)}
          </p>
          <p>
            <b>Ngày sinh:</b> {getDisplay(data?.data?.birthDate)}
          </p>
          <p>
            <b>Cập nhật tài khoản:</b>
            {data?.data?.emailVerifiedAt
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
            <b>Email:</b> {data?.data?.email}
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
