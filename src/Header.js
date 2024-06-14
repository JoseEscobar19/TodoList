import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { 
    Navbar, 
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav, 
    NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
// import NucampLogo from '../app/assets/img/logo.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <NavbarBrand className='ms-5' href='/'>
                <h1 className='mt-1'>WebPage</h1>
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink>
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            Directory
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink >
                            About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            Contact
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;

// import './Header.css'
// import React from 'react';
// import { useState } from 'react';
// import {Navbar, Nav, NavbarToggler, NavItem, Collapse, NavLink, NavbarBrand } from 'reactstrap';

// const Header =() =>{
//     const[ menuOpen, setMenuOpen] = useState(false);

//     return(
//             <Navbar sticky-top expand-md>
//                 <NavbarBrand className='title'>Welcome Page</NavbarBrand>
//                 <NavbarToggler onClick={()=>setMenuOpen(!menuOpen)} >Button</NavbarToggler>
//                 <Collapse isOpen={!menuOpen} navbar>
//                     <Nav navbar>
//                         <NavItem>
//                             <NavLink>About</NavLink>
//                         </NavItem>
//                         <NavItem>
//                             <NavLink>Contact</NavLink>
//                         </NavItem>
//                         <NavItem>
//                             <NavLink>Services</NavLink>
//                         </NavItem>
//                     </Nav>
//                 </Collapse>
//             </Navbar>
//     );
// };

// export default Header;