import { useState } from "react";
import styles from "./Register.module.scss";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import config from "@/config";
import AuthService from "@/services/AuthService";
function Register() {
    const [params] = useSearchParams();
    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPassWordConFirmation] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [hasError, setHasError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formValue = {
        firstName,
        lastName,
        email,
        password,
        password_confirmation: passwordConfirmation,
    };
      console.log(formValue);
    
        try {
          const data = await AuthService.postRegister(formValue);
          localStorage.setItem("token", data.access_token);
          navigate(params.get("continue") || config.routes.home);
        } catch (error) {
          console.log(error)
          setHasError(true)
        }
       
      
    // fetch("https://api01.f8team.dev/api/auth/register", {
    //     method: "POST",
    //     headers: {
    //         "Content-type": "application/json",
    //       },
    //     body: JSON.stringify(formValue)
    // })
    // .then((res) => {
    //     if(!res.ok){
    //         throw res;
    //     }
    //     return res.json();
    // })
    // .then((data) => {
    //     localStorage.setItem("token", data.access_token);
    //     navigate(params.get("continue") || config.routes.home);
    // })
    // .catch(() => {
    //     setHasError(true);
    // })
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
      <div className={styles.social_register}>
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
      <form className={styles.register_form} onSubmit={handleSubmit}>
      <input
          type="text"
          name="firstName"
          value={firstName}
          placeholder="firstName"
          onChange={(e) => {
            setFirstName(e.target.value);
            setHasError(false);
          }}
        /><input
        type="text"
        name="lastName"
        value={lastName}
        placeholder="lastName"
        onChange={(e) => {
          setLastName(e.target.value);
          setHasError(false);
        }}
      />
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
         <input
          type="password"
          name="password_confirmation"
          value={passwordConfirmation}
          placeholder="Nhập lại mật khẩu"
          onChange={(e) => {
            setPassWordConFirmation(e.target.value);
            setHasError(false);
          }}
        />
        <button className={styles.register_button}>ĐĂNG KÝ TÀI KHOẢN</button>
        {hasError && <p>Email này đã được sử dụng. Vui lòng sử dụng email khác </p>}
      </form>
      <div>
        <Link to={config.routes.login}>Đăng nhập</Link>
      </div>
    </div>
  );
}

export default Register;
