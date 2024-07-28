import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

interface TextareaProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  borderColor?: string;
  outlineColor?: string;
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
  initialHeight?: string;
}

const StyledTextarea = styled.textarea<TextareaProps>`
  background-color: transparent;
  border: 1.5px solid ${({ borderColor, error }) => error ? '#b61919' : (borderColor || '#8b8b8b80')};
  outline: none;
  padding: 5px;
  border-radius: var(--borderRadiusPrimary);
  font-size: 14px;
  color: inherit;
  width: 100%;
  height: ${({ initialHeight }) => initialHeight || '100px'};
  resize: none;

  &:hover {
    border: 1.5px solid ${({ borderColor, error }) => error ? '#b61919' : (borderColor || '#8b8b8baf')};
  }

  &:focus {
    border-color: ${({ outlineColor, error }) => error ? '#b61919' : (outlineColor || 'var(--primaryMainColor)')};
    box-shadow: 0 0 5px ${({ outlineColor, error }) => error ? '#b61919' : (outlineColor || 'var(--primaryMainColor)')};
  }
`;

const Textarea: React.FC<TextareaProps> = ({
  value,
  onChange,
  borderColor,
  outlineColor,
  placeholder,
  error,
  errorMessage,
  initialHeight
}) => {
  return (
    <div>
      <StyledTextarea
        value={value}
        onChange={onChange}
        borderColor={borderColor}
        outlineColor={outlineColor}
        placeholder={placeholder}
        error={error}
        initialHeight={initialHeight}
        
      />
      {error && <p className='mt-1 text-[#b61919] text-xs font-medium'>{errorMessage}</p>}
    </div>
  );
};

export default Textarea;
