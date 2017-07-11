import React, { Component } from 'react';

import { Link } from 'react-router-dom'

class AppNavbar extends Component {
    render()  {
        return (        
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link to="/" className="logo"><img src="http://localhost:3000/PindropLogo.png"></img></Link>
                        <Link to="/" className="brand">INDROP</Link>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">                    
                    <ul className="nav navbar-nav navbar-right">
                        <form className="navbar-form navbar-left">
                            <div className="form-group">
                            <input type="text" className="form-control" placeholder="Search" />
                            </div>
                            <button type="submit" className="btn btn-default">Search</button>
                        </form>
                        <ul className="nav navbar-nav">
                            <li><Link to="post" className="navPin">Post an Event</Link></li>
                            <li><Link to="contact" className="navPin">Contact <span className="sr-only">(current)</span></Link></li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle navPin" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">User <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><Link to="signin" className="navPin">Sign In</Link></li>
                                    <li><Link to="signup" className="navPin">Sign Up</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default AppNavbar;



 // <Navbar default collapseOnSelect>
 //                <Navbar.Header>
 //                    <Navbar.Brand>
 //                        <Link to='/'>ACC-Pindrop</Link>
 //                    </Navbar.Brand>
 //                    <Navbar.Toggle />
 //                </Navbar.Header>
 //                <Navbar.Collapse>
 //                    <Nav>
 //                        <li><Link to='/'>Home</Link></li>
 //                        <li><Link to='/test2'>Test 2</Link></li>
 //                        <li><Link to='/test3'>Test 3</Link></li>
 //                    </Nav>
 //                </Navbar.Collapse>
 //            </Navbar>