import React, { useState } from 'react';
import styled from 'styled-components';

interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps {
  options: Option[];
  placeholder?: string;
  onChange: (value: string) => void;
}

const SelectContainer = styled.div`
  position: relative;
  width: auto;
`;

const SelectButton = styled.button`
  width: 100%;
  padding: 5px 10px;
  background: var(--paperColor);
  border: 1px solid #8b8b8b50;
  border-radius: var(--borderRadiusPrimary);
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OptionsList = styled.ul<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: ${(props) => (props.isOpen ? '200px' : '0')};
  overflow: hidden;
  background: var(--paperColor);
  border: 1px  solid  ${(props) => (props.isOpen ? '#8b8b8b50' : 'transparent')};
  border-radius: var(--borderRadiusPrimary);
  margin-top: 2px;
  transition: max-height 0.2s ease-out;
  z-index: 1;
`;

const OptionItem = styled.li`
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background: #8b8b8b50;
  }
`;

const Select: React.FC<CustomSelectProps> = ({ options, placeholder, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (value: string) => {
    setSelectedOption(value);
    onChange(value);
    setIsOpen(false);
  };

  return (
    <SelectContainer>
      <SelectButton onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? options.find((option) => option.value === selectedOption)?.label : placeholder}
        {/* <span>{isOpen ? '▲' : '▼'}</span> */}
        <img 
        className={`${isOpen? '':'rotate-180'} w-3 transition invert-[var(--invertValue)]`}
        src='https://www.svgrepo.com/show/393854/up-2.svg'/>
      </SelectButton>
      <OptionsList isOpen={isOpen}>
        {options.map((option) => (
          <OptionItem key={option.value} onClick={() => handleOptionClick(option.value)}>
            {option.label}
          </OptionItem>
        ))}
      </OptionsList>
    </SelectContainer>
  );
};

export default Select;
