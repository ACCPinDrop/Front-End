import React from 'react';

import AppNavbar from './navbar';
import MainPage from './main';
import Carousel from './carousel';

export default function app() {
    return (
    	<div>
            <AppNavbar />    	
            <MainPage />
            <Carousel />		    
    	</div>
    );
}
