import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUser } from "@/features/auth/authAsync";
function UserProvider() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  return null;
}

export default UserProvider;
