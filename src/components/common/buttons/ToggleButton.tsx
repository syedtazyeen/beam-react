import React from 'react';
import styled from 'styled-components';


interface ToggleSwitchProps {
    toggled: boolean
    onToggle: () => void;
}


const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 21px;
  
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

const Slider = styled.span<{ $toggled: boolean }>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 34px;
  border: 1.5px solid  ${({ $toggled }) => ($toggled ? 'var(--primaryMainColor)' : 'var(--textColor)')};
  transition: .4s;

  &:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 1px;
    bottom: 1px;
    background-color: ${({ $toggled }) => ($toggled ? 'var(--primaryMainColor)' : 'var(--textColor)')};
    transition: .4s;
    transform: ${({ $toggled }) => ($toggled ? 'translateX(19px)' : 'translateX(0)')};
  }
`;


const ToggleButton: React.FC<ToggleSwitchProps> = ({ toggled, onToggle }) => {

    return (
        <SwitchContainer>
            <Switch>
                <input type="checkbox" checked={toggled} onChange={onToggle} />
                <Slider $toggled={toggled} />
            </Switch>
        </SwitchContainer>
    );
};

export default ToggleButton;
