import React from "react";
import '../styles/App.css';
import { NavLink } from "react-router-dom";
import home from './svgPacks/home.svg';
import heart from './svgPacks/heart.svg';
import cube from './svgPacks/cube.svg';
import chat from './svgPacks/chat.svg';
import ArrowGrid from './arrowGrid';

function NavbarMob(){

    const links = ['/','/Heart','/Chat','/Cube']
    const icons = [home,heart,chat,cube];
    return(
        <>
        <ArrowGrid />
        <div className="sidebar">
            <ul>
                <li>
                    {
                        icons.map((value,index)=>(
                            <NavLink to={links[index]}>
                                <img src={value} alt="" srcset="" />
                            </NavLink>
                        ))
                    }
                </li>
            </ul>
        </div>
        </>
    )
}

export default NavbarMob;