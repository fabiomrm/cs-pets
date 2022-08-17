import { PawPrint } from "phosphor-react";
import { LogoContainer, LogoText } from "./styles";

export function Logo() {
  return (
    <LogoContainer>
      <PawPrint size="2.5rem" color="#EBA417" />
      <LogoText>
        CS
        <div></div>
        PETS
      </LogoText>
    </LogoContainer>
  )
}