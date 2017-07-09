import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
        <div className="col-md-4 col-md-offset-4">
            <form action="" method="post">

            <h1> Contact the PinDrop Team </h1>

                <div className="form-group">
                    <h3>Name:</h3>
                    <input className="form-control" type="text" for="name" name="name" required />
                </div>
                <div className="form-group">
                    <h3>Email:</h3>
                    <input className="form-control" type="email" for="email" name="email" required />
                </div>
                <div className="form-group">                        
                    <h3>Subject:</h3>
                    <input className="form-control" type="text" for="subject" name="subject" required />
                </div>
                <div className="form-group"> 
                    <h3 >Message:</h3>
                    <textarea className="form-control"  name="message"></textarea>
                </div>
                
                <button className="btn btn-block btn-lg btn-success" type="submit">Submit</button>
            </form>            
        </div>

    );
  }
}

export default Contact;
