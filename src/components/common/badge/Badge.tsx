import React from 'react';
import styled, { css } from 'styled-components';

interface BadgeProps {
    name: string;
    type: 'error' | 'success' | 'warning' | 'info' | 'primary' | 'violet' | 'gold';
}

const badgeStyles = {
    error: css`
    background-color: red;
    color: white;
  `,
    success: css`
    background-color: green;
    color: white;
  `,
    warning: css`
    background-color: yellow;
    color: black;
  `,
    info: css`
    background-color: gray;
    color: white;
  `,
    primary: css`
    background-color: var(--primaryMainColor);
    color: white;
  `,
    violet: css`
    background-color: #9b27cd;
    color: white;
  `,
    gold: css`
    background-color: gold;
    color: black;
  `,
};

const BadgeWrapper = styled.div<{ type: BadgeProps['type'] }>`
  display: inline-block;
  padding: 0.25em 0.75em;
  border-radius: 12px;
  font-size: 0.75em;
  font-weight: bold;
  height: fit-content;
  ${({ type }) => badgeStyles[type]}
`;

const Badge: React.FC<BadgeProps> = ({ name, type = 'info' }) => {
    return <BadgeWrapper type={type}>
        <p>{name}</p>
    </BadgeWrapper>;
};

export default Badge;
