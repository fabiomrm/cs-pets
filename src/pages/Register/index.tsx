import { useAuth } from "../../context/AuthContext";
import { LoggedIn } from "./components/LoggedIn";
import { Signup } from "./components/Signup";
import { RegisterContainer } from "./styles";

export function Register() {

  const { getUserData } = useAuth()


  return (
    <RegisterContainer>
      {
        getUserData().token ?
          <LoggedIn email={getUserData().email} />
          :
          <Signup />
      }
    </RegisterContainer>
  )
}