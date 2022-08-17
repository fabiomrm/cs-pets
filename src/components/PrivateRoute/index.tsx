import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";


export function PrivateRoute({ children }: { children: JSX.Element }) {

  const { getUserData } = useAuth()


  return (getUserData().token && getUserData().token.length > 0)
    ? children :
    <Navigate to="/" replace />


}