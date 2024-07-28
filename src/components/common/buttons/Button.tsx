import React from 'react';
import styled, { css } from 'styled-components';

// Define the possible props
interface ButtonProps {
  onClick?: (() => void) | (() => Promise<void>);
  variant?: 'base' | 'outlined' | 'filled';
  loading?: boolean;
  loadingPlaceHolder?: string;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  width?: 'fit' | 'full' | string;
  children: React.ReactNode;
  className?: string;
  type?: 'primary' | 'error';
  customColor?: string;  // New prop for custom color
  customHoverColor?: string;  // New prop for custom hover color
}

// Define the default colors
const defaultColors = {
  primary: {
    main: 'var(--primaryMainColor)',
    accent: 'var(--primaryAccentColor)',
    dark: 'var(--primaryDarkColor)',
  },
  error: {
    main: '#d11414',
    accent: '#d1141410',
    dark: '#c01313',
  }
};

// Define the base button styles
const buttonStyles = css<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-weight: bold;
  font-size: ${({ size }) =>
    size === 'small' ? '13px' :
      size === 'medium' ? '15px' :
        '16px'};
  transition: background 0.2s, border 0.2s, color 0.2s;
  padding: ${({ size }) =>
    size === 'small' ? '4px 12px' :
      size === 'medium' ? '6px 14px' :
        '8px 16px'};
  width: ${({ width }) => (width === 'full' ? '100%' : width === 'fit' ? 'auto' : width)};
  border-radius: var(--borderRadiusPrimary);

  ${({ variant, type, customColor, customHoverColor }) => {
    const isError = type === 'error';
    const colors = {
      main: customColor || (isError ? defaultColors.error.main : defaultColors.primary.main),
      accent: customHoverColor || (isError ? defaultColors.error.accent : defaultColors.primary.accent),
      dark: customHoverColor || (isError ? defaultColors.error.dark : defaultColors.primary.dark),
    };

    switch (variant) {
      case 'base':
        return css`
          background-color: transparent;
          color: ${colors.main};
          border: 2px solid transparent;

          &:hover {
            background-color: ${colors.accent};
            border-color: ${colors.main};
          }
        `;
      case 'outlined':
        return css`
          background-color: transparent;
          color: ${colors.main};
          border: 2px solid ${colors.main};

          &:hover {
            background-color: ${colors.accent};
          }
        `;
      case 'filled':
        return css`
          background-color: ${colors.main};
          color: white;
          border: 2px solid ${colors.main};

          &:hover {
            background-color: ${colors.dark};
            border-color: ${colors.dark};
          }
        `;
      default:
        return css``;
    }
  }}

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
  onClick,
  variant = 'base',
  loading = false,
  disabled = false,
  size = 'small',
  width = 'fit',
  loadingPlaceHolder = "loading",
  children,
  className,
  type = 'primary',
  customColor,
  customHoverColor,
  ...props
}) => {
  return (
    <StyledButton
      onClick={onClick}
      variant={variant}
      disabled={disabled || loading}
      size={size}
      width={width}
      className={className}
      type={type}
      customColor={customColor}
      customHoverColor={customHoverColor}
      {...props}
    >
      {loading ? loadingPlaceHolder : children}
    </StyledButton>
  );
};

export default Button;
