import httpRequest from "../utils/httpRequest"


export const getCurrentUser = async () => {
    const res = await httpRequest.get("/auth/me");
    return res;
};

export const postLogin = async (formData) => {
    const response = await httpRequest.post("/auth/login", formData);
    return response;
}
export const postRegister = async (formValue) => {
    const response = await httpRequest.post("/auth/register", formValue);
    return response;
}
export default {
    getCurrentUser,
    postLogin,
    postRegister,
};