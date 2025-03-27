import { useState } from "react";
import styles from "./Login.module.scss";
import { Link, useNavigate } from "react-router-dom";
import config from "@/config";
import useQuery from "@/hooks/useQuery";
import AuthService from "@/services/AuthService";
import httpRequest from "@/utils/httpRequest";
function Login() {
  const query = useQuery();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasError, setHasError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      email,
      password,
    };
    console.log(formData);

   try {
     const data = await AuthService.postLogin(formData);
     httpRequest.setToken(data.access_token)
     navigate(query.get("continue") || config.routes.home)
   } catch (error) {
       console.log(error);
       setHasError(true);
   }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <img
          src="https://mcdn.coolmate.me/image/March2024/mceclip4_81.jpg"
          alt=""
        />
      </div>
      <h2>Rất nhiều đặc quyền và quyền lợi mua sắm đang chờ bạn</h2>
      <div className={styles.benefits}>
        <div className={styles.benefit_item}>
          <img
            src="https://mcdn.coolmate.me/image/March2024/mceclip3_52.jpg"
            alt=""
          />{" "}
        </div>
        <div className={styles.benefit_item}>
          <img
            src="https://mcdn.coolmate.me/image/March2024/mceclip1_36.jpg"
            alt=""
          />
        </div>
        <div className={styles.benefit_item}>
          <img
            src="https://mcdn.coolmate.me/image/March2024/mceclip2_55.jpg"
            alt=""
          />
        </div>
      </div>
      <div className={styles.social_login}>
        <p>Đăng nhập bằng:</p>
        <div className={styles.button_img}>
          <button className={styles.google}>
            <img
              data-v-7a4da43e=""
              src="https://mcdn.coolmate.me/image/September2023/mceclip1_21.png"
              alt=""
            />
          </button>
          <button className={styles.facebook}>
            <img
              data-v-7a4da43e=""
              src="https://mcdn.coolmate.me/image/September2023/mceclip0_86.png"
              alt=""
            />
          </button>
        </div>
      </div>
      <form className={styles.login_form} onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email/SĐT của bạn"
          onChange={(e) => {
            setEmail(e.target.value);
            setHasError(false);
          }}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Mật khẩu"
          onChange={(e) => {
            setPassword(e.target.value);
            setHasError(false);
          }}
        />
        <button className={styles.Login_button}>ĐĂNG NHẬP</button>
        {hasError && <p>Email va mat khau khong hop le</p>}
      </form>
      <div>
        <Link to={config.routes.register}>Đăng ký</Link>
        <a href="">Quên mật khẩu</a>
      </div>
    </div>
  );
}

export default Login;
