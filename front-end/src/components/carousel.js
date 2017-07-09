import React, { Component } from 'react';

class carousel extends Component {
  render() {
    return (
        <div className="container">

            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="well">
                        <div id="myCarousel" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                <li data-target="#myCarousel" data-slide-to="1"></li>
                                <li data-target="#myCarousel" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="item active">
                                    <div className="row">
                                        <div className="col-sm-6 col-md-3 col-lg-3">
                                            <a href="/" className="thumbnail"><img src="../cyber1.jpeg" alt=""  /></a>
                                            <h2>Cyber Security Summit NYC</h2>
                                            <p>“The Cyber Security Summit” which is an exclusive C-Suite conference series that has the objective of connecting senior level executives responsible for protecting their companies’ critical infrastructures.<a href="/">more</a></p>
                                        </div>

                                        <div className="col-sm-6 col-md-3 col-lg-3">
                                            <a href="/" className="thumbnail"><img src="../cyber2.jpeg" alt=""  /></a>
                                            <h2>Rochester Security Summit</h2>
                                            <p>The Rochester Security Summit takes place each year in Rochester, NY, USA. These events feature great locally sourced speakers and panels who aim to educate delegates in cyber security and IT.<a href="/">more</a></p>
                                        </div>

                                        <div className="col-sm-6 col-md-3 col-lg-3">
                                            <a href="/" className="thumbnail"><img src="../cyber3.jpeg" alt=""  /></a>
                                            <h2>The Annual JLCW Conference</h2>
                                            <p>The Journal of Law and Cyber Warfare symposium brings speakers that are experts with cyber security and cyber warfare from the military, government, private industry, and the public sector.<a href="/">more</a></p>
                                        </div>

                                        <div className="col-sm-6 col-md-3 col-lg-3">
                                            <a href="/" className="thumbnail"><img src="../cyber4.jpeg" alt=""  /></a>
                                            <h2>Security BSides Connecticut</h2>
                                            <p>BSides Connecticut is an exciting day long information security conference hosted at Webster Bank Resource Center.<a href="/">more</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                            <a href="/" className="thumbnail"><img src="../cyber5.jpeg" alt=""/></a>
                                            <h2>CyBeer Security Hacking/InfoSec Meetup</h2>
                                            <p>An informal and approachable meeting for anyone involved in CyberSecurity to get together, meet interesting people and discuss interesting projects.<a href="/">more</a></p>
                                        </div>
                                        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                            <a href="/" className="thumbnail"><img src="../cyber6.jpeg" alt="" /></a>
                                            <h2>Data Protection: 13 Ransomware Statistics</h2>
                                            <p>We will talk about how to protect your business from current IT threats. We’ll provide examples and current statistics, so you’ll know the "red flags".<a href="/">more</a></p>
                                        </div>

                                        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                            <a href="/" className="thumbnail"><img src="../cyber7.jpeg" alt="" /></a>
                                            <h2>ANYCon Albany Hacker Conference</h2>
                                            <p>The conference will have four tracks: Offense, Defensive, Education and Grab Bag. There will also be a hackathon and a ping-pong tournament.<a href="/">more</a></p>
                                        </div>

                                        <div className="col-sm-6 col-md-3 col-lg-3">
                                            <a href="/" className="thumbnail"><img src="../cyber8.jpeg" alt="" /></a>
                                            <h2>New York State Cyber Security Conference</h2>
                                            <p>2017 marks the 20th Annual New York State Cyber Security Conference and 12th Annual Symposium on Information Assurance (ASIA). <a href="/">more</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="row">
                                        <div className="col-sm-6 col-md-3 col-lg-3">
                                            <a href="/" className="thumbnail"><img src="../cyber9.jpeg" alt=""  /></a>
                                            <h2>Black Hat Conference Series</h2>
                                            <p>The Black Hat conference series is a favorite among infosec professionals for its emphasis on the more technical themes of the industry.<a href="/">more</a></p>
                                        </div>

                                        <div className="col-sm-6 col-md-3 col-lg-3">
                                            <a href="/" className="thumbnail"><img src="../cyber10.jpeg" alt="" /></a>
                                            <h2>Overview of Emerging Cybersecurity</h2>
                                            <p>In this talk, we will present the high-level strategic concerns and challenges in the cybersecurity industry, how those challenges interact with emerging policy and law.<a href="/">more</a></p>
                                        </div>

                                        <div className="col-sm-6 col-md-3 col-lg-3">
                                            <a href="/" className="thumbnail"><img src="../cyber11.jpeg" alt=""/></a>
                                            <h2>First Friday Meetup: Bits, Bytes and Brew</h2>
                                            <p>Look forward to seeing everyone out for some unstructured networking and group building! Bring you brains and your ideas! <a href="/">more</a></p>
                                        </div>

                                        <div className="col-sm-6 col-md-3 col-lg-3">
                                            <a href="/" className="thumbnail"><img src="../cyber12.jpeg" alt="" /></a>
                                            <h2>Breaking into Information Security: Panel</h2>
                                            <p>Join our conversation as we discuss at length the skills, background, and experience needed to help you break into the Information Security industry.<a href="/">more</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a className="left carousel-control" href="#myCarousel" data-slide="prev"><i className="fa fa-chevron-circle-left" aria-hidden="true"></i></a>
                            <a className="right carousel-control" href="#myCarousel" data-slide="next"><i className="fa fa-chevron-circle-right" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
  }
}

export default carousel;
