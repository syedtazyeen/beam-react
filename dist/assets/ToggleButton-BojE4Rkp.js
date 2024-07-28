import{j as e}from"./index-BO0DeBpE.js";import{l as c,d as l}from"./styled-components.browser.esm-C1LfnyJe.js";const s={primary:{main:"var(--primaryMainColor)",accent:"var(--primaryAccentColor)",dark:"var(--primaryDarkColor)"},error:{main:"#d11414",accent:"#d1141410",dark:"#c01313"}},h=c`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-weight: bold;
  font-size: ${({size:r})=>r==="small"?"13px":r==="medium"?"15px":"16px"};
  transition: background 0.2s, border 0.2s, color 0.2s;
  padding: ${({size:r})=>r==="small"?"4px 12px":r==="medium"?"6px 14px":"8px 16px"};
  width: ${({width:r})=>r==="full"?"100%":r==="fit"?"auto":r};
  border-radius: var(--borderRadiusPrimary);

  ${({variant:r,type:t,customColor:n,customHoverColor:i})=>{const a=t==="error",o={main:n||(a?s.error.main:s.primary.main),accent:i||(a?s.error.accent:s.primary.accent),dark:i||(a?s.error.dark:s.primary.dark)};switch(r){case"base":return c`
          background-color: transparent;
          color: ${o.main};
          border: 2px solid transparent;

          &:hover {
            background-color: ${o.accent};
            border-color: ${o.main};
          }
        `;case"outlined":return c`
          background-color: transparent;
          color: ${o.main};
          border: 2px solid ${o.main};

          &:hover {
            background-color: ${o.accent};
          }
        `;case"filled":return c`
          background-color: ${o.main};
          color: white;
          border: 2px solid ${o.main};

          &:hover {
            background-color: ${o.dark};
            border-color: ${o.dark};
          }
        `;default:return c``}}}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`,y=l.button`
  ${h}
`,S=({onClick:r,variant:t="base",loading:n=!1,disabled:i=!1,size:a="small",width:o="fit",loadingPlaceHolder:d="loading",children:p,className:u,type:m="primary",customColor:b,customHoverColor:x,...f})=>e.jsx(y,{onClick:r,variant:t,disabled:i||n,size:a,width:o,className:u,type:m,customColor:b,customHoverColor:x,...f,children:n?d:p}),g=l.button`
  display: flex;
  align-items: center;
  gap: .5rem;
  padding: 7px;
  font-weight: 600;
  font-size: 0.875rem;
  border: ${({border:r})=>r?"2px solid var(--textColor)":"none"};
  border-radius: var(--borderRadiusPrimary);
  &:hover {
    background-color: #8b8b8b50;
  }
  width: ${({width:r})=>r==="full"?"100%":"auto"};
`,$=l.img`
  width: 20px;
  filter: invert(var(--invertValue));
`,B=({onClick:r,iconPath:t,label:n,width:i="fit",border:a=!1,children:o})=>e.jsxs(g,{border:a,width:i,onClick:r,children:[t&&e.jsx($,{src:t}),n&&e.jsx("p",{children:n}),o]}),k=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`,v=l.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 21px;
  
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`,j=l.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 34px;
  border: 1.5px solid  ${({$toggled:r})=>r?"var(--primaryMainColor)":"var(--textColor)"};
  transition: .4s;

  &:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 1px;
    bottom: 1px;
    background-color: ${({$toggled:r})=>r?"var(--primaryMainColor)":"var(--textColor)"};
    transition: .4s;
    transform: ${({$toggled:r})=>r?"translateX(19px)":"translateX(0)"};
  }
`,I=({toggled:r,onToggle:t})=>e.jsx(k,{children:e.jsxs(v,{children:[e.jsx("input",{type:"checkbox",checked:r,onChange:t}),e.jsx(j,{$toggled:r})]})});export{S as B,B as I,I as T};
