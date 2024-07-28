import React from 'react';
import styled from 'styled-components';

// Define the styled components
const DropdownContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 70%;
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: transparent;
  font-size: 16px;
  color: #333;
  cursor: pointer;
  
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

// Define the props interface
interface EventDropdownProps {
  selectedEvent: string | null;
  setSelectedEvent: (eventId: string) => void;
  renderEventsOptions: () => JSX.Element;
}

// Define the functional component
const EventDropdown: React.FC<EventDropdownProps> = ({ selectedEvent, setSelectedEvent, renderEventsOptions }) => (
  <DropdownContainer>
    <StyledSelect value={selectedEvent || ''} onChange={e => setSelectedEvent(e.target.value)}>
      {renderEventsOptions()}
    </StyledSelect>
  </DropdownContainer>
);

export default EventDropdown;
