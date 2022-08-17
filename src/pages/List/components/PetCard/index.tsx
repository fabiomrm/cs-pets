import { PetCardContainer } from "./styles";

interface PetCardProps {
  petImage: string;
  handleClick: (imgUrl: string) => void;
}
export function PetCard({ petImage, handleClick }: PetCardProps) {


  return (
    <PetCardContainer onClick={() => handleClick(petImage)}>
      <img src={petImage} alt="Imagem de pet" />
    </PetCardContainer>
  )
}