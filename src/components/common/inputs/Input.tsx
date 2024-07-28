import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

interface InputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  borderColor?: string;
  outlineColor?: string;
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
}

const StyledInput = styled.input<InputProps>`
  background-color: transparent;
  border: 1.5px solid ${({ borderColor, error }) => error ? '#b61919' : (borderColor || '#8b8b8b80')};
  outline: none;
  padding: 5px;
  border-radius: var(--borderRadiusPrimary);
  font-size: 14px;
  color: inherit;
  width: 100%;

  &:hover {
    border: 1.5px solid ${({ borderColor, error }) => error ? '#b61919' : (borderColor || '#8b8b8baf')};
  }

  &:focus {
    border-color: ${({ outlineColor, error }) => error ? '#b61919' : (outlineColor || 'var(--primaryMainColor)')};
    box-shadow: 0 0 5px ${({ outlineColor, error }) => error ? '#b61919' : (outlineColor || 'var(--primaryMainColor)')};
  }
`;

const Input: React.FC<InputProps> = ({
  type = 'text',
  value,
  onChange,
  borderColor,
  outlineColor,
  placeholder,
  error,
  errorMessage
}) => {
  return (
    <div>
      <StyledInput
        type={type}
        value={value}
        onChange={onChange}
        borderColor={borderColor}
        outlineColor={outlineColor}
        placeholder={placeholder}
        error={error}
      />
      <p className='mt-1 text-[#b61919] text-xs font-medium'>{errorMessage}</p>
    </div>
  );
};

export default Input;
