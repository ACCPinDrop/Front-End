import React, { Component } from 'react';

class Post extends Component {
  render() {
    return (

        <div className="col-md-8 col-md-offset-2">
            <form action="" method="post">

            <h1> Submit an Event </h1>


                <div className="form-group">                        
                    <h3>Title:</h3>
                    <input className="form-control" type="text" for="title" name="title" required />
                </div>
                <div className="form-group"> 
                    <h3 >Description:</h3>
                    <textarea className="form-control" name="description"></textarea>
                </div>
                <div className="form-group"> 
                    <h3 >Category:</h3>
                    <select className="form-control" name="category">
                        <option value="meetup">Meetup</option>
                        <option value="conference">Conference</option>
                        <option value="lecture">Lecture</option>
                    </select>
                </div> 


                <div className="form-group"> 
                    <h3>Date:</h3>
                    <input className="form-control" type="date" for="date" name="date" required />
                </div> 
                <div className="form-group"> 
                    <h3>Start Time:</h3>
                    <input className="form-control" type="time" for="start" name="start-time" required />
                </div> 
                <div className="form-group"> 
                    <h3>End Time:</h3>
                    <input className="form-control" type="time" for="end" name="end-time" />
                </div> 

                <div className="form-group">
                    <h3>Venue:</h3>
                    <input className="form-control" type="text" for="venue" name="venue" />
                </div>
                <div className="form-group">
                    <h3>Street Address:</h3>
                    <input className="form-control" type="text" for="street" name="street" required />
                </div>
                <div className="form-group">
                    <h3>City:</h3>
                    <input className="form-control" type="text" for="city" name="city" required />
                </div>
                <div className="form-group">
                    <h3>State:</h3>
                    <input className="form-control" type="text" for="state" name="state" required />
                </div>
                <div className="form-group">
                    <h3>Zip Code:</h3>
                    <input className="form-control" type="text" for="zip" name="zip" required />
                </div>


                <div className="form-group">
                    <h3>Name:</h3>
                    <input className="form-control" type="text" for="name" name="name" required />
                </div>
                <div className="form-group">
                    <h3>Email:</h3>
                    <input className="form-control" type="email" for="email" name="email" required />
                </div>
                <div className="form-group">
                    <h3>Telephone:</h3>
                    <input className="form-control" type="tel" for="telephone" name="telephone" />
                </div>


                <div className="form-group">
                    <h3>Event Website:</h3>
                    <input className="form-control" type="url" for="website" name="website" />
                </div>
                <div className="form-group">
                    <h3>Upload Image:</h3>
                    <input className="form-control" type="file" for="image" name="image" />
                </div>
                
                <button className="btn btn-block btn-lg btn-success" type="submit">Post Event</button>
            </form>            
        </div>

    );
  }
}

export default Post;
