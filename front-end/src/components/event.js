import React, { Component } from 'react';


class event extends Component {

    render() {
        let info = this.props.match.params.info.split(':$')
        let event_name = info[0]
        let event_location = info[1]
        let event_date = info[2]
        let event_start_time = info[3]
        return (
            <div className="jumbotron col-md-4 col-md-offset-4">
                <h1>{ event_name }</h1>
                <div className="event-basics">
                    <h3>Event Date: { event_date }</h3>
                </div>
                <div className="event-basics">
                    <h3>Start Time: { event_start_time }</h3>
                </div>
                <div className="event-basics">
                    <h3>Group Holding Event: Data Defenders Consortium</h3>
                </div>
                <div className="event-basics">
                    <h3>Event Location: { event_location }</h3>
                </div>
            </div>
        );
    }
}

export default event;
