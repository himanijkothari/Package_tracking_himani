// NPM Package
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header(){

    //state for checking the hamburger menu
    const [state, setState] = useState("false");

    return (
    <nav className="NavbarItems"> 
        <h1 className="Navbar-logo"><i className="fas fa-shipping-fast"></i>InstaBox</h1>
        <div className="menu-icon" onClick={()=> setState(!state)}>
                <i class={state?"fas fa-times" :"fas fa-bars"}></i>
        </div>
        <ul className={state?"nav-menu active":"nav-menu"}>
            <li><Link className="nav-links" to="/"> Home </Link></li>
            <li><Link className="nav-links" to="/trackPackage"> Track Package </Link></li>
        </ul>
    </nav>
    );
   
}