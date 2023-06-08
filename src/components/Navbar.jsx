import React from "react";
import heart from './svgPacks/heart.svg';
import home from './svgPacks/home.svg';
import cube from './svgPacks/cube.svg';
import chat from './svgPacks/chat.svg';
import '../styles/App.css';
import { NavLink } from "react-router-dom";

function Navbar(){
    const links = ["/","/Heart","/Chat","/Cube"];
    let icons = [home,heart,chat,cube];
    return(
        <>
        <nav className="Nav">
            <ul>
                <li>
                   {icons.map((value,index)=>(
                    <NavLink to={links[index]}>
                        <img src={value} alt="" srcset="" />
                    </NavLink>
                   ))}
                </li>
            </ul>
        </nav>
        </>
    );
    
}

export default Navbar;