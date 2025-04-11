import * as yup from "yup";

const registerSchema = yup
  .object({
    firstName: yup.string().required("Trường này là bắt buộc"),
    lastName: yup.string().required("Trường này là bắt buộc"),
    email: yup
      .string()
      .email("Vui lòng nhập đúng định dạng email")
      .required("Trường này là bắt buộc"),
    password: yup
      .string()
      .min(8, "Mật khẩu cần ít nhất 8 kí tự")
      .required("Trường này là bắt buộc"),
    password_confirmation: yup
      .string()
      .oneOf([yup.ref("password")], "Mật khẩu không khớp")
      .required("Trường này là bắt buộc"),
  })
  .required();
  export default registerSchema;