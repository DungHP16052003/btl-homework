import { useEffect, useState } from "react"
import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import config from "@/config";
function ProtectedRoute({children}) {
    const location = useLocation();
    const [currentUser, setCurrentUser] = useState(null);
    const [isloading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch("https://api01.f8team.dev/api/auth/me", {
            headers:{
                Authorization : `Bearer ${localStorage.getItem("token")}` 
            },
        })
        .then((res) => {
            if(!res.ok){
                throw res;
            }
            return res.json();
        })
        .then((data) => {
            setCurrentUser(data.user)
        })
        .catch({})
        .finally(() => {
            setIsLoading(false);
        })
    }, [])
    if(isloading){
        return <div>loading...</div>
    }
    if(!currentUser){
        const path = encodeURIComponent(location.pathname)
        return <Navigate to={`${config.routes.login}?continue=${path}`} />
    }
  return children;
}
ProtectedRoute.propTypes = {
    children: PropTypes.element.isRequired,
};

export default ProtectedRoute
