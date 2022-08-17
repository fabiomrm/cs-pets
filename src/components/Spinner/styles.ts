import styled from 'styled-components'

export const SpinnerContainer = styled.div`
  border: 10px solid ${({ theme }) => theme.colors['gray-300']};
  border-top: 10px solid ${({ theme }) => theme.colors['yellow-500']};
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  animation: spin 1s linear infinite;

  @keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} 
`;