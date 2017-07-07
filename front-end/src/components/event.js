import React, { Component } from 'react';


class event extends Component {
    render() {
        return (
            <div>
                <h1>Basic Event Information</h1>
                <div className="event-basics">
                    <h3>Event Name: Defending Against PHP Pirates</h3>
                </div>
                <div className="event-basics">
                    <h3>Event Date: August 10, 2017</h3>
                </div>
                <div className="event-basics">
                    <h3>Start Time: 6:00 p.m.</h3>
                </div>
                <div className="event-basics">
                    <h3>End Time: 8:00 p.m.</h3>
                </div>
                <div className="event-basics">
                    <h3>Group Holding Event: Data Defenders Consortium</h3>
                </div>
                <div className="event-basics">
                    <h3>Location: 226 South Pearl Street, Albany, NY 12203</h3>
                </div>
            </div>
        );
    }
}

export default event;
