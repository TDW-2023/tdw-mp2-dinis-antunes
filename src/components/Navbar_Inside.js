import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./components.css";

const NavbarInside = ()=> {

    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="Navbar">
            <span className="nav-logo">
            <strong><Link to={"/"}>ReadQuest</Link></strong>
            </span>
            <div className={`nav-items ${isOpen && "open"}`}>
                 <Link to={"/to-read-page"}>To Read</Link>
                 <Link to={""}>Have Read</Link>
                 <Link to={"/about"}>About</Link>
                <Link to={"/search-page"}>Search</Link>
                 <div className="space_search_bar">
        </div>
            </div>
            <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                <div className="bar"></div>
            </div>
        </div>
    )
}

export default NavbarInside