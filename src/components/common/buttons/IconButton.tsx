import React from 'react';
import styled from 'styled-components';

interface IconButtonProps {
  onClick: () => void;
  iconPath?: string;
  label?: string;
  border?: boolean,
  width?: 'fit' | 'full';
  children? : React.ReactNode;
}

const StyledButton = styled.button<{ width: 'fit' | 'full', border: boolean }>`
  display: flex;
  align-items: center;
  gap: .5rem;
  padding: 7px;
  font-weight: 600;
  font-size: 0.875rem;
  border: ${({border})=>(border ? '2px solid var(--textColor)' : 'none')};
  border-radius: var(--borderRadiusPrimary);
  &:hover {
    background-color: #8b8b8b50;
  }
  width: ${({ width }) => (width === 'full' ? '100%' : 'auto')};
`;

const StyledIcon = styled.img`
  width: 20px;
  filter: invert(var(--invertValue));
`;

const IconButton: React.FC<IconButtonProps> = ({ onClick, iconPath, label, width = 'fit', border = false,children }) => {
  return (
    <StyledButton border={border} width={width} onClick={onClick}>
      {iconPath && <StyledIcon src={iconPath} />}
      {label && <p>{label}</p>}
      {children}
    </StyledButton>
  );
};

export default IconButton;
