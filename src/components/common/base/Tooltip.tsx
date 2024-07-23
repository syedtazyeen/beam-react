// src/components/Tooltip.tsx
import React, { useState, ReactNode } from 'react';
import styled from 'styled-components';

// Define the types for props
interface TooltipProps {
    children: ReactNode;
    content: ReactNode;
}

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const TooltipText = styled.div<{ visible: boolean }>`
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%; /* Position the tooltip above the text */
  left: 50%;
  margin-left: -60px;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.3s;

  &::after {
    content: '';
    position: absolute;
    top: 100%; /* Arrow at the bottom */
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
`;

// Tooltip Component
const Tooltip: React.FC<TooltipProps> = ({ children, content }) => {
    const [visible, setVisible] = useState(false);

    const showTooltip = () => setVisible(true);
    const hideTooltip = () => setVisible(false);

    return (
        <TooltipContainer
            onMouseEnter={showTooltip}
            onMouseLeave={hideTooltip}
        >
            {children}
            <TooltipText visible={visible}>{content}</TooltipText>
        </TooltipContainer>
    );
};

export default Tooltip;
