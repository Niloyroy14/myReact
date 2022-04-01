import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import classes from "../styles/Header.module.css";

export default function Header() {
    
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/home" className={(navInfo) => (navInfo.isActive?classes.active: "")} >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={(navInfo) => (navInfo.isActive ? classes.active : "")}>About</NavLink>
                    </li>
                    <li>
                    <NavLink to="/posts" className={(navInfo) => (navInfo.isActive ? classes.active : "")}>Posts</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )


}