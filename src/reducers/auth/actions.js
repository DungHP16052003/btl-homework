import AuthService from "@/services/AuthService";
import { SET_CURRENT_USER } from "./constant";


export const getCurrentUser = () => {
    return async (dispatch) => {
         try {
                   const data = await AuthService.getCurrentUser();   
                    dispatch(setCurrentUser(data));      
                 } catch (error) {
                   console.log(error);
                 }finally{
                    // setIsLoading(false)
                 }
    }
 }
export const setCurrentUser = (payload) => ({
    type: SET_CURRENT_USER,
    payload
})