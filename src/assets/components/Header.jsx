import React from "react";
import ContactButtons from "./ContactButtons.jsx";

export default function Header() {
  return (
    <header className="header">
        <img className="header__img" height="317px;" width="317px;" src="/images/20230605_111039.jpg" alt="A photo of me at my desk" />
        <h1 className="header__name">Dallas Viars</h1>
        <p className="header__title">Frontend Developer</p>
        <a className="header__website" href="#">thefuturedallasviars.com</a>
        <ContactButtons />
      </header>
  )
}

/*
<button className="btn btn-toggle">Dark Mode</button>
*/