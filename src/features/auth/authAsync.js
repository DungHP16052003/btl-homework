import AuthService from "@/services/AuthService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async () => {
    try {
      const data = await AuthService.getCurrentUser();
      return data
    } catch (error) {
      console.log(error);
    } finally {
      // setIsLoading(false)
    }
  }
);
