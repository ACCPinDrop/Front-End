import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom'

import home from './home';
import contact from './contact';
import event from './event';
import group from './group';
import organizer from './organizer';
import post from './post';
import signin from './signin';
import signup from './signup';

class MainPage extends Component {
    render() {
        return (
        	<Switch>
                <Route exact path='/' component={home}/>
                <Route path='/contact' component={contact}/>
                <Route path='/event' component={event}/>
                <Route path='/group' component={group}/>
                <Route path='/organizer' component={organizer}/>
                <Route path='/post' component={post}/>
                <Route path='/signin' component={signin}/>
                <Route path='/signup' component={signup}/>
            </Switch>
        );
    }
}

export default MainPage;













// class NavTop extends Component {
  
//   constructor(props) {
//     super(props);
//   }

//   render() {
       
//     return (
//             <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
//                 <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <a className="navbar-brand" href="#">Navbar</a>
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav mr-auto">
//                     <li className="nav-item active">
//                         <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link" href="#">Link</a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link disabled" href="#">Disabled</a>
//                     </li>
//                     </ul>
//                     <form className="form-inline my-2 my-lg-0">
//                     <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
//                     <button className="btn btn-outline-success my-2 my-sm-0" type="submit" >Search</button>
//                     </form>
//                 </div>
//             </nav>
//     );
//   }
// }

// export default NavTop;