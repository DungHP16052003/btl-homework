import styles from "./Register.module.scss";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import config from "@/config";
import Button from "@/components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import AuthService from "@/services/AuthService";
import { useEffect } from "react";
import useDebounce from "@/hooks/useDebounce";
import registerSchema from "@/Shema/registerShema";
function Register() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
    resolver: yupResolver(registerSchema),
  });
  const emailValue = watch("email");
  const debounceValue = useDebounce(emailValue, 600)
  useEffect(() => {
     if(!debounceValue) return;
 const checkEmail =  async () => {
      const isValid = await trigger("email")
      if(isValid){
        const exists = await AuthService.checkEmail(debounceValue);
        if(exists){
          setError("email", {
            type: "manual",
            message: "Email đã được sử dụng"
          });
        }
      }
    }
    checkEmail();
  }, [debounceValue, trigger, setError])
  const onSubmit = async (data) => {
    try {
      console.log(data);
      const res = await AuthService.postRegister(data);
      localStorage.setItem("token", res.access_token);
      navigate(params.get("continue") || config.routes.home);
    } catch (error){
      console.log(error);
      
        setError("password", {
          type: "manual",
          message: "Tài khoản và mật khẩu không hợp lệ"
        })
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
      <form className={styles.register_form} onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="firstName"
          placeholder="firstName"
          {...register("firstName")}
        />
        {errors.firstName && <span>{errors.firstName.message}</span>}
        <input
          type="text"
          name="lastName"
          placeholder="lastName"
          {...register("lastName")}
        />
        {errors.lastName && <span>{errors.lastName.message}</span>}
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
        <input
          type="password"
          name="password_confirmation"
          placeholder="Nhập lại mật khẩu"
          {...register("password_confirmation")}
        />
        {errors.password_confirmation && <span>{errors.password_confirmation.message}</span>}

        <Button large>ĐĂNG KÝ TÀI KHOẢN</Button>
      </form>
      <div>
        <Link to={config.routes.login}>Đăng nhập</Link>
      </div>
    </div>
  );
}

export default Register;
