import React, { Component } from 'react';


class organizer-app extends Component {
    render() {
        return (
            /* Author: Kevin McGuinness */
            <h1>Event Organizer Contact Information</h1>
            <div className="contact-organizer">
                <h3>Organizer's Name: Jason Rokes</h3>
                /* Code to get and display database fields of organizer_first_name and organizer_last_name */
            </div>
            <div className="contact-organizer">
                <h3>Phone Number: 528-233-3043</h3>
                /* Code to get and display database field */
            </div>
            <div className="contact-organizer">
                <h3>Email Address: jason.rokes@ddc.com</h3>
                /* Code to get and display database field */
            </div>
        );
    }
}

export default organizer-app;
