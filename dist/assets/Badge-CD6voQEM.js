import{j as c}from"./index-BO0DeBpE.js";import{l as o,d as l}from"./styled-components.browser.esm-C1LfnyJe.js";const i={error:o`
    background-color: red;
    color: white;
  `,success:o`
    background-color: green;
    color: white;
  `,warning:o`
    background-color: yellow;
    color: black;
  `,info:o`
    background-color: gray;
    color: white;
  `,primary:o`
    background-color: var(--primaryMainColor);
    color: white;
  `,violet:o`
    background-color: #9b27cd;
    color: white;
  `,gold:o`
    background-color: gold;
    color: black;
  `},n=l.div`
  display: inline-block;
  padding: 0.25em 0.75em;
  border-radius: 12px;
  font-size: 0.75em;
  font-weight: bold;
  height: fit-content;
  ${({type:r})=>i[r]}
`,t=({name:r,type:e="info"})=>c.jsx(n,{type:e,children:c.jsx("p",{children:r})});export{t as B};
