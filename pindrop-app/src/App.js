import React, { Component } from 'react';

import NavTop from './pages/Nav';
import Main from './pages/Main';



class App extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {

    return (
    	<div>
            <NavTop />    		
            <Main />		    
    	</div>
    );
  }
}

export default App;

