import React, { useState, useEffect } from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
const Navbar = () => {
  const [isMobile, setisMobile] = useState(false);

  useEffect(() => {}, [isMobile]);

  return (
    <>
      <nav className={style.navbar}>
        {/* <h3 className={style.logo}><img src={logo} style={{width:"300px",height:"300px"}} alt='logo'></img></h3> */}
        <h3 className={style.logo}>AbnewsAPP</h3>
        <ul
          className={isMobile ? style.mobilelinks : style.navlinks}
          onClick={() => setisMobile(false)}
        >
          <li>
            <Link to="/News_App" className={style.home}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className={style.about} to="/entertainment">
              Entertainment{" "}
            </Link>
          </li>

          <li className="nav-item">
            <Link className={style.about} to="/business">
              {" "}
              Business
            </Link>
          </li>

          <li className="nav-item">
            <Link className={style.about} to="/health">
              {" "}
              Health
            </Link>
          </li>
          <li className="nav-item">
            <Link className={style.about} to="/sports">
              {" "}
              Sports
            </Link>
          </li>

          <li className="nav-item">
            <Link className={style.about} to="/technology">
              {" "}
              technology
            </Link>
          </li>
        </ul>
        <button
          style={{ marginRight: "20px" }}
          onClick={() => setisMobile(!isMobile)}
          className={style.mobileMenuIcon}
        >
          {isMobile ? (
            <i>
              <CloseIcon />
            </i>
          ) : (
            <i>
              <MenuIcon />
            </i>
          )}
        </button>
      </nav>
    </>
  );
};

export default Navbar;
