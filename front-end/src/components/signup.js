import React, { Component } from 'react';

class Signup extends Component {
  render() {
    return (

        <div className="col-md-4 col-md-offset-4">
            <form action="" method="post">

            <h1> Sign Up </h1>

                <div className="form-group">
                    <h3>First Name:</h3>
                    <input className="form-control" type="text" for="fname" name="fname" required />
                </div>
                <div className="form-group">
                    <h3>Last Name:</h3>
                    <input className="form-control" type="text" for="lname" name="lname" required />
                </div>
                <div className="form-group">
                    <h3>Email:</h3>
                    <input className="form-control" type="email" for="email" name="email" required />
                </div>
                <div className="form-group">
                    <h3>Password:</h3>
                    <input className="form-control" type="password" for="password" name="password" />
                </div>
                
                <button className="btn btn-block btn-lg btn-success" type="submit">Sign Up</button>
            </form>            
        </div>

    );
  }
}

export default Signup;
