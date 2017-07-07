import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Signin extends Component {
  render() {
    return (

<div className="col-md-4 col-md-offset-4">
            <form action="" method="post">

            <h1> Sign In </h1>

                <div className="form-group">
                    <h3>Email:</h3>
                    <input className="form-control" type="email" for="email" name="email" required />
                </div>
                <div className="form-group">
                    <h3>Password:</h3>
                    <input className="form-control" type="password" for="password" name="password" />
                </div>

                <button className="btn btn-block btn-success" type="submit">Sign In</button>
            </form>            
        </div>

    );
  }
}

export default Signin;
