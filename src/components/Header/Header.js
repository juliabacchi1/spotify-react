import React from "react";
import "./Header.css";
import Search from "./Search";
import smallLeft from "../../assets/icons/small-left.png";
import smallRight from "../../assets/icons/small-right.png";
import search from "../../assets/icons/search.png";

const Header = () => {
  return (
    <nav className="header__navigation">
      <div className="navigation">
        <button className="arrow-left">
          <img src={smallLeft} alt="Arrow left" />
        </button>
        <button className="arrow-right">
          <img src={smallRight} alt="Arrow right" />
        </button>
      </div>
      <div className="header__search">
        <img src={search} alt="Icon search" />
        <Search />
      </div>
      <div className="header__login">
        <button className="subscribe">Inscrever-se</button>
        <button className="login">Entrar</button>
      </div>
    </nav>
  );
};

export default Header;
