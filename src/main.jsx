import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
<ass></ass>

const root = document.querySelector("#root");
// const toggleBtn = document.querySelector(".btn-toggle");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// console.log(root)
// toggleBtn.addEventListener("click", (e) => {
//   root.classList.toggle("darkmode")
// });