import{j as e}from"./index-BO0DeBpE.js";import{d as b}from"./styled-components.browser.esm-C1LfnyJe.js";const x=b.input`
  background-color: transparent;
  border: 1.5px solid ${({borderColor:r,error:o})=>o?"#b61919":r||"#8b8b8b80"};
  outline: none;
  padding: 5px;
  border-radius: var(--borderRadiusPrimary);
  font-size: 14px;
  color: inherit;
  width: 100%;

  &:hover {
    border: 1.5px solid ${({borderColor:r,error:o})=>o?"#b61919":r||"#8b8b8baf"};
  }

  &:focus {
    border-color: ${({outlineColor:r,error:o})=>o?"#b61919":r||"var(--primaryMainColor)"};
    box-shadow: 0 0 5px ${({outlineColor:r,error:o})=>o?"#b61919":r||"var(--primaryMainColor)"};
  }
`,m=({type:r="text",value:o,onChange:a,borderColor:i,outlineColor:s,placeholder:t,error:d,errorMessage:n})=>e.jsxs("div",{children:[e.jsx(x,{type:r,value:o,onChange:a,borderColor:i,outlineColor:s,placeholder:t,error:d}),e.jsx("p",{className:"mt-1 text-[#b61919] text-xs font-medium",children:n})]}),p=b.textarea`
  background-color: transparent;
  border: 1.5px solid ${({borderColor:r,error:o})=>o?"#b61919":r||"#8b8b8b80"};
  outline: none;
  padding: 5px;
  border-radius: var(--borderRadiusPrimary);
  font-size: 14px;
  color: inherit;
  width: 100%;
  height: ${({initialHeight:r})=>r||"100px"};
  resize: none;

  &:hover {
    border: 1.5px solid ${({borderColor:r,error:o})=>o?"#b61919":r||"#8b8b8baf"};
  }

  &:focus {
    border-color: ${({outlineColor:r,error:o})=>o?"#b61919":r||"var(--primaryMainColor)"};
    box-shadow: 0 0 5px ${({outlineColor:r,error:o})=>o?"#b61919":r||"var(--primaryMainColor)"};
  }
`,u=({value:r,onChange:o,borderColor:a,outlineColor:i,placeholder:s,error:t,errorMessage:d,initialHeight:n})=>e.jsxs("div",{children:[e.jsx(p,{value:r,onChange:o,borderColor:a,outlineColor:i,placeholder:s,error:t,initialHeight:n}),t&&e.jsx("p",{className:"mt-1 text-[#b61919] text-xs font-medium",children:d})]});export{m as I,u as T};
