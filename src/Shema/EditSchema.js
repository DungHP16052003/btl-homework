import * as yup from "yup";

const EditSchema = yup.object({
    firstName : yup.string().required("Trường này là bắt buộc"),
    lastName: yup.string().required("Trường này là bắt buộc"),
    age: yup.string().min(1, "Tuổi không hợp lệ").required("Tuổi là bắt buộc"),
    email: yup.string().email("Vui lòng nhập đúng định dạng email").required("Trường này là bắt buộc"),
    username: yup.string().required("Trường này là bắt buộc"),
    birthDate: yup.string().required("Ngày sinh là bắt buộc"),
})
export default EditSchema;