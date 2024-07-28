import{f as E,j as e,H as N,r as a,g as P,h as k,i as O,k as H,l as I}from"./index-BO0DeBpE.js";import{H as V,L as B}from"./HLSPlayer-DTbneLRN.js";import{L as M}from"./LoadingView-CM9m6E7b.js";import{B as b}from"./ToggleButton-BojE4Rkp.js";import"./Textarea-BY6rh0iC.js";import{B as $}from"./Badge-CD6voQEM.js";import{u as G}from"./use-router-DVooktSv.js";import{d as v}from"./styled-components.browser.esm-C1LfnyJe.js";import"./CircularLoading-2PuJ8enf.js";const Q=({setStarted:t})=>{const{data:r}=E();function l(){return e.jsx("div",{className:"relative flex items-center bg-[black] aspect-[16/9]",children:e.jsx(V,{url:`${N}/${r==null?void 0:r.data[0].streamKey}/index.m3u8`,onError:n=>console.error(n),onStateChanged:n=>t(n)})})}return e.jsx("div",{children:l()})},C=a.createContext(void 0),U=({children:t})=>{var g;const[r,l]=a.useState(!1),[n,d]=a.useState(!1),[i,o]=a.useState(null),[p,u]=a.useState(null),{data:s,isLoading:h}=P(),{data:c,isLoading:f}=k({eventId:((g=s==null?void 0:s.data[0])==null?void 0:g.liveId)||""}),[m]=O(),[x]=H();a.useEffect(()=>{c!=null&&c.data[0]&&(d(c.data[0].status==="live"),o(c.data[0]._id),u(c.data[0].name))},[c]);const S=a.useCallback(async w=>{await m({eventId:w}).unwrap(),d(!0),o(w)},[m]),j=a.useCallback(async()=>{i&&(await x({eventId:i}).unwrap(),d(!1),o(null))},[i,x]),y=a.useMemo(()=>({isLive:n,hlsConnected:r,startStream:S,endStream:j,setHlsConnected:l,currentEventId:i,eventName:p}),[n,r,S,j,i,p]);return f||h?e.jsx(M,{}):e.jsx(C.Provider,{value:y,children:t})},L=()=>{const t=a.useContext(C);if(!t)throw new Error("useStream must be used within a StreamProvider");return t},_=v.div`
  position: relative;
  width: auto;
`,R=v.button`
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
`,z=v.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: ${t=>t.isOpen?"200px":"0"};
  overflow: hidden;
  background: var(--paperColor);
  border: 1px  solid  ${t=>t.isOpen?"#8b8b8b50":"transparent"};
  border-radius: var(--borderRadiusPrimary);
  margin-top: 2px;
  transition: max-height 0.2s ease-out;
  z-index: 1;
`,K=v.li`
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background: #8b8b8b50;
  }
`,T=({options:t,placeholder:r,onChange:l})=>{var u;const[n,d]=a.useState(!1),[i,o]=a.useState(null),p=s=>{o(s),l(s),d(!1)};return e.jsxs(_,{children:[e.jsxs(R,{onClick:()=>d(!n),children:[i?(u=t.find(s=>s.value===i))==null?void 0:u.label:r,e.jsx("img",{className:`${n?"":"rotate-180"} w-3 transition invert-[var(--invertValue)]`,src:"https://www.svgrepo.com/show/393854/up-2.svg"})]}),e.jsx(z,{isOpen:n,children:t.map(s=>e.jsx(K,{onClick:()=>p(s.value),children:s.label},s.value))})]})},W=()=>{const{isLive:t,startStream:r,endStream:l,hlsConnected:n,eventName:d,currentEventId:i}=L(),{data:o,isLoading:p}=I(),[u,s]=a.useState(null),h=G(),c=a.useMemo(()=>{var m;return((m=o==null?void 0:o.data)==null?void 0:m.map(x=>({label:x.name,value:x._id})))||[]},[o]),f=()=>{u&&r(u)};return e.jsxs("div",{className:"flex w-full",children:[e.jsxs("div",{className:"flex gap-2 items-center flex-1 px-4",children:[e.jsx($,{type:t?"error":"info",name:t?"Live":"Offline"}),e.jsx("p",{className:"font-medium",children:d})]}),t?e.jsxs("div",{className:"flex w-[70%] gap-2 items-center",children:[e.jsx("span",{className:"flex-1"}),e.jsx(b,{onClick:()=>{h.push("/live/"+i)},variant:"outlined",customColor:"#8b8b8b",children:"Preview stream"}),e.jsx(b,{onClick:l,variant:"outlined",type:"error",children:"End stream"})]}):e.jsxs("div",{className:"flex w-[70%] gap-2 items-center",children:[e.jsx("div",{className:"flex-1",children:e.jsx(T,{placeholder:p?"Loading events...":"Select an event",options:c,onChange:m=>s(m)})}),e.jsxs(b,{onClick:f,disabled:!n||!u,variant:"filled",type:"primary",children:[e.jsx("img",{className:"invert-[100] w-6",src:"/icons/play.svg",alt:"Start"}),"Start stream"]})]})]})},q=()=>{const{setHlsConnected:t}=L(),r=l=>{t(l)};return e.jsxs("div",{className:"flex h-full",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"flex items-center bg-[var(--paperColor)] h-[70px]",children:e.jsx(W,{})}),e.jsx(Q,{setStarted:r})]}),e.jsx("div",{className:"w-[30%]",children:e.jsx("div",{className:"bg-[var(--paperColor)] h-full",children:e.jsx(B,{})})})]})},se=()=>e.jsx(U,{children:e.jsx(q,{})});export{se as default};
