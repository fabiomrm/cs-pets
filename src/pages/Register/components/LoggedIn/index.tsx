import { PawPrint } from "phosphor-react";
import { Link } from "react-router-dom";
import { LoggedInContainer } from "./styles";

interface LoggedInProps {
  email: string;
}
export function LoggedIn({ email }: LoggedInProps) {
  return (
    <LoggedInContainer>
      <div className="text">
        <h1>
          Você está logado como &nbsp;
          <span>
            {email.split("@")[0]}
          </span>
          .
        </h1>
        <br />
        <Link to="/list">
          Seguir para lista
        </Link>
      </div>
      <div className="image">
        <PawPrint size={256} />
      </div>
    </LoggedInContainer>
  )
}