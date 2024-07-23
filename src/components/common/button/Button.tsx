import React from 'react';
import styled, { css } from 'styled-components';

// Define the possible props
interface ButtonProps {
  variant?: 'base' | 'outlined' | 'filled';
  loading?: boolean;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  width?: 'fit' | 'full';
  children: React.ReactNode;
  className?: string
}

// Define the base button styles
const buttonStyles = css<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-weight: bold;
  transition: background 0.2s, border 0.2s, color 0.2s;
  padding: ${({ size }) =>
    size === 'small' ? '4px 12px' :
      size === 'medium' ? '6px 14px' :
        '8px 16px'};
  width: ${({ width }) => (width === 'full' ? '100%' : 'auto')};
  border-radius: 10px;

  ${({ variant }) =>
    variant === 'base' && css`
      background-color: transparent;
      color: var(--primaryMainColor);
      border: 2px solid transparent;

      &:hover {
        background-color: var(--primaryAccentColor);
        border-color: var(--primaryAccentColor);
      }
    `}

  ${({ variant }) =>
    variant === 'outlined' && css`
      background-color: transparent;
      color: var(--primaryMainColor);
      border: 2px solid var(--primaryMainColor);

      &:hover {
        background-color: var(--primaryAccentColor);
      }
    `}

  ${({ variant }) =>
    variant === 'filled' && css`
      background-color: var(--primaryMainColor);
      color: white;
      border: 2px solid var(--primaryMainColor);

      &:hover {
        background-color: var(--primaryDarkColor);
        border-color: var(--primaryDarkColor);
      }
    `}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

// Define the styled button component
const StyledButton = styled.button<ButtonProps>`
  ${buttonStyles}
`;

// Define the Button component
const Button: React.FC<ButtonProps> = ({
  variant = 'base',
  loading = false,
  disabled = false,
  size = 'small',
  width = 'fit',
  children,
  className,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      disabled={disabled || loading}
      size={size}
      width={width}
      className={className}
      {...props}
    >
      {loading ? 'Loading...' : children}
    </StyledButton>
  );
};

export default Button;
