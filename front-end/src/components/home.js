import React, { Component } from 'react';

import AppMap from './map'
import Carousel from './carousel'


class Home extends Component {
    render() {
        return (
        	<div className="home-page">
                <AppMap />
                <Carousel />
            </div>
        );
    }
}

export default Home;













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