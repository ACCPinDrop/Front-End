import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';




class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      color: "hotpink"
    }
  }

  toggleColor() {
    if(this.state.color === "hotpink"){
      this.setState({
        color: "yellow"
      });
    } else {
      this.setState({
        color: "hotpink"
      });
    }    
  }

  changeColor(event) {
    this.setState({
      color: event.target.value
    });
  }

  render() {
    const styleObj = {
      background: this.state.color
    }
    console.log(this)
    return (

        <div className="col-md-12">
            <h1> Submit an Event </h1>
            <form action="" method="post">
                <div className="form-group">                        
                    <h3>Title:</h3>

                    <input className="form-control" type="text" for="title" name="title" required />
                </div>
                <div className="form-group"> 
                    <h3 >Description:</h3>

                    <textarea className="form-control"  name="description"></textarea>
                </div>
                <div className="form-group"> 
                    <h3 >Category:</h3>
                    <select className="form-control" name="category">
                        <option value="meetup">Meetup</option>
                        <option value="conference">Conference</option>
                        <option value="lecture">Lecture</option>
                    </select>
                </div>      
                <button className="btn btn-block btn-primary" type="submit">Post Event</button>
            </form>            
        </div>


    );
  }
}

export default App;
