import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import App from './components/app';

import './styles/index.css';
import './styles/app.css';
import './styles/map.css';
import './styles/home.css';
import './styles/carousel.css';
import './styles/post.css';
import './styles/signin.css';
import './styles/signup.css';
import './styles/contact.css';
import './styles/event.css';
import './styles/group.css';
import './styles/organizer.css';

const container = document.getElementById('container');

ReactDOM.render(
	(
		<BrowserRouter>
	        <App />
	    </BrowserRouter>),
container);
