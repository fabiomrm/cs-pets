import styled from "styled-components";

export const LoggedInContainer = styled.div`

  display: flex;
  border: 1px solid #f00;

  div.text {
    flex: 1;
    border: 1px solid #f00;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }


  span {
    color: ${({ theme }) => theme.colors["yellow-500"]};
    text-transform: capitalize;
  }
  a {
    text-align: center;
  }

  a:hover {
    color: ${({ theme }) => theme.colors["blue-500"]};
    transform: scale(1.1);
  }

  svg {
    color: ${({ theme }) => theme.colors["yellow-500"]};
  }
`;