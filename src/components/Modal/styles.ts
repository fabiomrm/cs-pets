import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  height: 100%;
  top:0;
  left:0;
  right:0;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 30rem;
    height: 30rem;
  }

  svg {
    position: absolute;
    top: -3rem;
    right: -2rem;
    cursor: pointer;
  }

  svg:hover {
    color: ${({ theme }) => theme.colors["blue-500"]};
  }
`;
