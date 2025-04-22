import styles from "./Login.module.scss";
import config from "@/config";
import Button from "@/components/Button";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "@/services/AuthService";
import httpRequest from "@/utils/httpRequest";
import useQuery from "@/hooks/useQuery";
import Form ,{ TextInput } from "@/components/Forms";
import loginSchema from "@/Shema/loginSchema";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function Login() {
  const query = useQuery();
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    const res = await AuthService.postLogin(data);
    httpRequest.setToken(res.access_token);
    navigate(query.get("continue") || config.routes.home);
  };
  const err = useSelector((state) => state.auth.error);

  useEffect(() => {
    if (err) {
        if (err === "Unauthenticated") {
            localStorage.removeItem("token");
            window.top.location.href = "http://localhost:5173/";
        }
    }
}, [err]);
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
      <Form 
        className={styles.login_form}
        schema={loginSchema}
        onSubmit={handleSubmit}
      >
        <TextInput inputClassName={styles.email} type="email" name="email" />
        <TextInput inputClassName = {styles.password} type="password" name="password" />
        <Button large>ĐĂNG NHẬP</Button>
      </Form>
      <div>
        <Link to={config.routes.register}>Đăng ký</Link>
        <a href="">Quên mật khẩu</a>
      </div>
    </div>
  );
}

export default Login;
