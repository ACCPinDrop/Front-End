import React, { Component } from 'react';

import { Navbar, Nav } from 'react-bootstrap/lib';

import { Link } from 'react-router-dom'

class AppNavbar extends Component {
    render()  {
        return (        
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to='/'>ACC-Pindrop</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/test2'>Test 2</Link></li>
                        <li><Link to='/test3'>Test 3</Link></li>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default AppNavbar;
