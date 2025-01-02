import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
} from "./navbarelements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>
                    <NavLink to="/about" >
                        About
                    </NavLink>
                    <NavLink to="/blog" activeStyle>
                        Blog
                    </NavLink>
                    <NavLink to="/portfolio" activeStyle>
                        Portfolio
                    </NavLink>
                   
                </NavMenu>
              
            </Nav>
        </>
    );
};

export default Navbar;