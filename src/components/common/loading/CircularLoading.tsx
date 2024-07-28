// CircularLoader.tsx
import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define the keyframes for the spinner animation
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Styled component for the spinner container
const Spinner = styled.div`
  border: 4px solid #00000019; /* Light grey border */
  border-radius: 50%;
  border-top: 4px solid var(--primaryMainColor); /* Blue color for the spinner */
  width: 32px;
  height:32px;
  animation: ${spin} 1s linear infinite;
`;

// Functional component
const CircularLoader: React.FC = () => {
  return <Spinner />;
};

export default CircularLoader;
