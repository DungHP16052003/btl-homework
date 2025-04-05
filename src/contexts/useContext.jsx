import AuthService from "@/services/AuthService";
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const[isLoading, setIsLoading] = useState(true);

   useEffect(() => {
       (async () => {
         try {
           const data = await AuthService.getCurrentUser();   
            setUser(data);      
         } catch (error) {
           console.log(error);
         }finally{
            setIsLoading(false)
         }
       })();
     }, []);

    const values = {
        user,
        isLoading,
    }
    return (
    <UserContext.Provider value ={values}>{children}</UserContext.Provider>
    )
}
UserProvider.propTypes = {
    children : PropTypes.node.isRequired
 }