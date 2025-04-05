import styles from "./Login.module.scss";
import config from "@/config";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@/components/Button";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "@/services/AuthService";
import loginSchema from "@/Shema/loginSchema";
import httpRequest from "@/utils/httpRequest";
import useQuery from "@/hooks/useQuery";

function Login() {
  const query = useQuery();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });
  const onSubmit = async (data) => {
    const res = await AuthService.postLogin(data);
     httpRequest.setToken(res.access_token);
    navigate(query.get("continue") || config.routes.home)
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
      <form className={styles.login_form} onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          name="email"
          placeholder="Email/SĐT của bạn"
          {...register("email")}
        />
        {errors.email && <span>{errors.email.message}</span>}

        <input
          type="password"
          name="password"
          placeholder="Mật khẩu"
          {...register("password")}
        />
        {errors.password && <span>{errors.password.message}</span>}

        <Button large>ĐĂNG NHẬP</Button>
      </form>
      <div>
        <Link to={config.routes.register}>Đăng ký</Link>
        <a href="">Quên mật khẩu</a>
      </div>
    </div>
  );
}

export default Login;
