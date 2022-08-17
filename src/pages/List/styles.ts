import styled from "styled-components";

export const ListContainer = styled.section`
    width: 100%;
    max-width: 1120px;
    margin: 4rem auto 0 auto;
    padding: 0 1.5rem;

    h1 {
      text-align: center;
      margin-bottom: 2rem;
    }

    nav {
      height: 4rem;
      margin-bottom: 2rem;
    }

    nav > ul {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    nav > ul > li > button {
      background-color: ${({ theme }) => theme.colors["yellow-500"]};
      padding: 1rem 2rem;
      border-radius: 25px;
      font-weight: bold;
      width: 10rem;
    }

    nav > ul > li > button:hover {
      background-color: ${({ theme }) => theme.colors["blue-500"]};
      color: ${({ theme }) => theme.colors["gray-100"]};
    }

    @media (max-width: 568px) {
      nav > ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
      }

      nav > ul > li {
        border: 1px solid #00f;
        display: flex;
        justify-content: center;
        align-items: center;
      }

    }
`;

export const ListContent = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    
`;

export const PetsArea = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: .5rem;

  @media (max-width: 920px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 568px) {
    margin-top: 2rem;
    grid-template-columns: 1fr;

    img {
      width: 100%;
      object-fit: cover;
    }
  }
`;