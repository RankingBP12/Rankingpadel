import{r,j as e,A as g}from"./index-BDcw6WbW.js";import{P as n}from"./index-B05dcSbW.js";const x=({jugadores:t,onClose:m,genero:l})=>{const[a,i]=r.useState("conPuntos"),u=t.filter(s=>s.points>0).sort((s,o)=>o.points-s.points),c=t.filter(s=>s.points===0).sort((s,o)=>s.name.localeCompare(o.name)),p=s=>{s.target.className.includes("modal-gnr")&&m()};return e.jsx("div",{className:"modal-gnr",onClick:p,children:e.jsxs("div",{className:"modal-gnr-content",onClick:s=>s.stopPropagation(),children:[e.jsx("h2",{className:"modal-gnr-title",children:l==="masculino"?"Jugadores Masculinos":"Jugadoras Femeninas"}),e.jsxs("div",{className:"modal-gnr-player-list",children:[a==="conPuntos"&&u.map(s=>e.jsxs("div",{className:"modal-gnr-player-card",children:[e.jsx("img",{src:s.photoURL,alt:s.name,className:"modal-gnr-player-photo"}),e.jsxs("div",{className:"modal-gnr-player-info",children:[e.jsx("h4",{children:s.name}),e.jsxs("p",{children:[s.points," puntos"]})]})]},s.id)),a==="sinPuntos"&&c.map(s=>e.jsxs("div",{className:"modal-gnr-player-card",children:[e.jsx("img",{src:s.photoURL,alt:s.name,className:"modal-gnr-player-photo"}),e.jsxs("div",{className:"modal-gnr-player-info",children:[e.jsx("h4",{children:s.name}),e.jsx("p",{children:"Sin puntos"})]})]},s.id))]}),e.jsxs("div",{className:"modal-gnr-tabs-container",children:[e.jsx("button",{className:`modal-gnr-tab ${a==="conPuntos"?"active":""}`,onClick:()=>i("conPuntos"),children:"Con Puntos"}),e.jsx("button",{className:`modal-gnr-tab ${a==="sinPuntos"?"active":""}`,onClick:()=>i("sinPuntos"),children:"Sin Puntos"})]})]})})};x.propTypes={jugadores:n.arrayOf(n.shape({id:n.string.isRequired,name:n.string.isRequired,points:n.number.isRequired,photoURL:n.string.isRequired})).isRequired,onClose:n.func.isRequired,genero:n.string.isRequired};const f=()=>{const{jugadores:t}=r.useContext(g),[m,l]=r.useState(!1),[a,i]=r.useState([]),[u,c]=r.useState(""),p=d=>t.filter(h=>h.gender===d),s=d=>{const h=p(d);i(h),c(d),l(!0)},o=()=>{l(!1),c("")};return e.jsxs("div",{className:"container-jugadores",children:[e.jsx("div",{className:"player-box male",onClick:()=>s("masculino"),children:e.jsx("h2",{children:"Jugadores Masculinos"})}),e.jsx("div",{className:"player-box female",onClick:()=>s("femenino"),children:e.jsx("h2",{children:"Jugadoras Femeninas"})}),m&&e.jsx(x,{jugadores:a,onClose:o,genero:u})]})};export{f as default};