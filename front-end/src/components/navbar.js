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
                    <Link to="/" className="navbar-brand" >ACC Pindrop</Link>
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
                            <li><Link to="contact">Contact <span className="sr-only">(current)</span></Link></li>
                            <li><Link to="post">Post</Link></li>
                            <li><Link to="event">Event</Link></li>                        
                            <li><Link to="group">Group</Link></li>
                            <li><Link to="organizer">Organizer</Link></li>
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">User <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><Link to="signin">Signin</Link></li>
                                    <li><Link to="signup">Signup</Link></li>
                                    <li role="separator" className="divider"></li>
                                    <li><Link to="home">Logout</Link></li>
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