import * as yup from "yup";

const loginSchema = yup
.object({
    email: yup.string().email("vui lòng nhập đúng định dạng").required("trường này là bắt buộc"),
    password: yup.string().min(8, "Mật khẩu cần ít nhất 8 kí tự").required("trường này là bắt buộc"),
})
.required();
export default loginSchema;