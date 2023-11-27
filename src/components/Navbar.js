import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./components.css";

const Navbar = ()=> {

    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="Navbar">
            <span className="nav-logo">
            <strong><Link to={"/"}>ReadQuest</Link></strong>
            </span>
            <div className={`nav-items ${isOpen && "open"}`}>
                <Link to={"search-page"}>Search</Link>
                 <div className="space_search_bar">
        </div>
            </div>
            <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                <div className="bar"></div>
            </div>
        </div>
    )
}

export default Navbar