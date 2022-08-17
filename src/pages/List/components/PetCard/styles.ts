import styled from "styled-components";

export const PetCardContainer = styled.div`
  display: flex;
  transition: all .2s;
  img {
    width: 10rem;
    height: 10rem;
  }

  &:hover{
    cursor: pointer;
    transform: scale(1.08);
  }
`;