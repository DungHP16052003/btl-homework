import { UserContext } from "@/contexts/useContext";
import { useContext } from "react";

     
     function useUser() {
        const data = useContext(UserContext);   
        return data.user;        
     }
     export default useUser