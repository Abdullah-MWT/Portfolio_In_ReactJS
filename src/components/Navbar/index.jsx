import React, { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import {HiX} from "react-icons/hi"
import { Link } from "react-router-dom";
import './style.css'

const data = [
  {
    label: "HOME",
    to: "/",
  },
  {
    label: "ABOUT ME",
    to: "/about",
  },
  {
    label: "SKILLS",
    to: "/skills",
  },
  {
    label: "RESUME",
    to: "/resume",
  },
  {
    label: "PORTFOLIO",
    to: "/portfolio",
  },
  {
    label: "CONTACT",
    to: "/contact",
  },
];

const Navbar = () => {
  const [toggler, setToggler] = useState(false);

const handleToggler = ()=> {
  setToggler(!toggler)
}
  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to="/" className="navbar__container__logo">
            <FaReact size={30} />
          </Link>
        </div>
        <ul className= {`navbar__container__menu ${toggler? 'active' : ''}`}>
        {data.map((item,key) => (
          <li key={key} className="navbar__container__menu__item">
            <Link to={item.to} className="navbar__container__menu__item__links">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="nav__icon" onClick={handleToggler}>
       {
        toggler ? <HiX  size={30}/> : <FaBars size={30}/> 
       }
      </div>
      </nav>
    </div>
  );
};

export default Navbar;
