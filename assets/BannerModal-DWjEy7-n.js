import{r as s,j as e,d as f,s as x,u as b,g as j,e as v,f as y,p as k}from"./index-BDcw6WbW.js";import{P as C}from"./index-B05dcSbW.js";const N=({onClose:r})=>{const[l,i]=s.useState(""),[n,c]=s.useState(null),[o,d]=s.useState(""),u=a=>{a.target.files.length>0&&c(a.target.files[0])},h=async a=>{if(a.preventDefault(),!n){alert("Por favor, seleccione una imagen.");return}try{const t=f(x,`banners/${n.name}`);await b(t,n);const m=await j(t),g=v(y,"banners/");await k(g,{title:l,photoURL:m,link:o}),alert("Banner guardado con éxito"),r()}catch(t){console.error("Error al guardar el banner:",t),alert("Hubo un error al guardar el banner.")}},p=a=>{a.target.classList.contains("banner-modal-overlay")&&r()};return e.jsx("div",{className:"banner-modal-overlay",onClick:p,children:e.jsxs("div",{className:"banner-modal-content",children:[e.jsx("h2",{children:"Cargar Banner"}),e.jsxs("form",{className:"banner-form",onSubmit:h,children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"title",children:"Título"}),e.jsx("input",{id:"title",type:"text",value:l,onChange:a=>i(a.target.value),placeholder:"Ingrese el título"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"photo",children:"Banner"}),e.jsx("input",{id:"photo",type:"file",accept:"image/*",onChange:u})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"link",children:"Link"}),e.jsx("input",{id:"link",type:"text",value:o,onChange:a=>d(a.target.value),placeholder:"Ingrese el enlace"})]}),e.jsxs("div",{className:"form-actions",children:[e.jsx("button",{type:"submit",children:"Guardar"}),e.jsx("button",{type:"button",onClick:r,children:"Cancelar"})]})]})]})})};N.propTypes={onClose:C.func.isRequired};export{N as default};