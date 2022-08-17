import styled from "styled-components";

export const SignupContainer = styled.form`
  margin: 0 auto;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 6px;
  padding: 2.5rem;
  
  box-shadow: 3px 3px 4px 3px rgba(0, 0, 0, 0.2);

  h1 {
    margin-bottom: 1rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    margin-bottom: 2rem;
  }

  input {
    border: 1px solid ${({ theme }) => theme.colors["gray-500"]};
    border-radius: 6px;
    padding: 0.75rem 1rem;
    background-color: ${({ theme }) => theme.colors["gray-900"]};
    color: ${({ theme }) => theme.colors["gray-400"]};
  }
  
  button {
    margin: 0 auto;
    width: 12.5rem;
    background-color: ${({ theme }) => theme.colors["gray-100"]};
    height: 2.5rem;
    color: ${({ theme }) => theme.colors["gray-400"]};
  }
`;