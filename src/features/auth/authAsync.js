import AuthService from "@/services/AuthService";
import httpRequest from "@/utils/httpRequest";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk("auth/getUser", async () => {
  try {
    const data = await AuthService.getCurrentUser();
    return data;
  } catch (error) {
    console.log(error);
  } finally {
    // setIsLoading(false)
  }
});
export const postLogin = createAsyncThunk(
  "auth/postLogin",
  async (data, rejectWithValue) => {
    try {
      const res = await AuthService.postLogin(data);
      httpRequest.setToken(res.access_token);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);
export const postRegister = createAsyncThunk(
  "auth/postRegister",
  async (data, rejectWithValue) => {
    try {
      const res = await AuthService.postRegister(data);
      localStorage.setItem("token", res.access_token);
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Register failed"
      );
    }
  }
);
