import {  useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styles from "./EditProfile.module.scss";
import {
  editProfile,
  checkEmail,
  checkPhone,
  checkUsername,
} from "@/services/AuthService";
import { useNavigate } from "react-router-dom";
import useUser from "@/hooks/useUser";
import useDebounce from "@/hooks/useDebounce";
import EditSchema from "@/Shema/EditSchema";


function EditProfile() {
   const user = useUser();
   const navigate = useNavigate();
   const[isSubmitting, setIsSubmitTing] = useState(false);
   
   const {
      register,
      handleSubmit,
      watch,
      trigger,
      setError,
      reset,
      formState : {errors},
   } = useForm({
      resolver : yupResolver(EditSchema),
      defaultValues : user || {},
   })

   useEffect(() => {
     if(user){
      reset({
        firstName : user.firstName || "",
        lastName : user.lastName || "",
        age : user.age || "",
        email : user.email || "",
        username : user.username || "",
        gender : user.gender || "male",
        phone : user.phone || "",
        birthDate : user.birthDate || "",
      })
     }
   }, [user, reset])

   const onSubmit = async (data) => {
       setIsSubmitTing(true);
       try {
         await editProfile(user?.id, data);
         toast.success("Cập nhật thành công");
         navigate(`/p/${user.username}`)
       } catch (error) {
          console.log(error);
          toast.error("Cập nhật thất bại");
       }finally{
        setIsSubmitTing(false);
       }
   }
   const EmailValue = watch("email");
   const PhoneValue = watch("phone");
   const UserNameValue = watch("username");

   const debounceEmail = useDebounce(EmailValue, 600)
   const debouncePhone = useDebounce(PhoneValue, 600)
   const debounceUser = useDebounce(UserNameValue, 600)

  useEffect(() => {
    if(!debounceEmail || debounceEmail === user?.email) return;
      const check = async () => {
        const isValid = await trigger("email");
        if(isValid){
          const exists = await checkEmail(debounceEmail, user?.id);
          if(exists){
            setError("email", {
              type:"manual",
              message: "Email đã được sử dụng"
            })
          }
        }
      }
    
    check();
  },[debounceEmail, trigger,setError, user])
  
  useEffect(() => {
    if(!debouncePhone || debouncePhone === user?.phone) return;
      const check = async () => {
        const isValid = await trigger("phone") 
        if(isValid){
          const exists = await checkPhone(debouncePhone, user?.id);
          if(exists){
            setError("phone", {
              type: "manual",
              message: "Số điện thoại đã tồn tại"
            })
          }
        }
      }
    
    check();
  },[debouncePhone, trigger, setError, user]);
  useEffect(() => {
    if(!debounceUser || debounceUser === user?.username) return;
      const check = async () => {
        const isValid = await trigger("username") 
        if(isValid){
          const exists = await checkUsername(debounceUser, user?.id);
          if(exists){
            setError("username", {
              type: "manual",
              message: "tên này đã được sử dụng"
            })
          }
        }
      }
    
    check();
  },[debounceUser, trigger, setError, user]);
  return (
    <div className={styles.wrapper}>
      <h1>Cập nhật tài khoản</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Họ:</label>
        <input {...register("firstName")}/>
       {errors.firstName && <span>{errors.firstName.message}</span>}
        <label>Tên:</label>
        <input {...register("lastName")} />
        {errors.lastName && <span>{errors.lastName.message}</span>}
        <label>Tuổi:</label>
        <input type="number" {...register("age")} />
        {errors.age && <span>{errors.age.message}</span>}

        <label>Email:</label>
        <input type="email" {...register("email")} />
        {errors.email && <span>{errors.email.message}</span>}

        <label>Username:</label>
        <input type="text"{...register("username")} />
        {errors.username && <span>{errors.username.message}</span>}

        <label>Giới tính:</label>
        <select {...register("gender")}>
          <option value="male">Nam</option>
          <option value="female">Nữ</option>
        </select>
        {errors.gender && <span>{errors.gender.message}</span>}

        <label>Số điện thoại:</label>
        <input type="text" {...register("phone")}/>
        {errors.phone && <span>{errors.phone.message}</span>}

        <label>Ngày sinh:</label>
        <input type="date" {...register("birthDate")} />
        {errors.birthDate && <span>{errors.birthDate.message}</span>}

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Đang cập nhật..." : "Cập nhật"}
        </button>
      </form>
    </div>
  );
}

export default EditProfile;
