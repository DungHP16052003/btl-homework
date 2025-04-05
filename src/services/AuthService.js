import httpRequest from "../utils/httpRequest";

export const getCurrentUser = async () => {
    const res = await httpRequest.get("/auth/me");
    return res.data;
};

export const postLogin = async (data) => {
    const response = await httpRequest.post("/auth/login", data);
    return response.data;
};

export const checkEmail = async (email, excludeId) => {
    const response = await httpRequest.get("/auth/check-email", {
        params: {
            email,
            exclude_id: excludeId,
        },
    });
    return response.data?.exists;
};

export const checkPhone = async (phone, excludeId) => {
    const response = await httpRequest.get("/auth/check-phone", {
        params: {
            phone,
            exclude_id: excludeId,
        },
    });
    return response.data?.exists;
};

export const checkUsername = async (username, excludeId) => {
    const response = await httpRequest.get("/auth/check-username", {
        params: {
            username,
            exclude_id: excludeId,
        },
    });
    return response.data?.exists;
};

export const editProfile = async (id, data) => {
    const response = await httpRequest.put(`/users/${id}`, data);
    return response.data;
};

export const postRegister = async (data) => {
    const response = await httpRequest.post("/auth/register", data);
    return response.data;
};

export default {
    getCurrentUser,
    postLogin,
    postRegister,
    checkEmail,
    checkPhone,
    checkUsername,
    editProfile,
};