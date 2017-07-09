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
                                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                            <a href="/" className="thumbnail"><img src="http://placehold.it/250x250" alt=""/></a>
                                            <h2>Lorem Ipsum</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...<a href="/">more</a></p>
                                        </div>
                                        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                            <a href="/" className="thumbnail"><img src="http://placehold.it/250x250" alt="" /></a>
                                            <h2>Lorem Ipsum</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...<a href="/">more</a></p>
                                        </div>

                                        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                            <a href="/" className="thumbnail"><img src="http://placehold.it/250x250" alt="" /></a>
                                            <h2>Lorem Ipsum</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...<a href="/">more</a></p>
                                        </div>

                                        <div className="col-sm-6 col-md-3 col-lg-3">
                                            <a href="/" className="thumbnail"><img src="http://placehold.it/250x250" alt="" /></a>
                                            <h2>Lorem Ipsum</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...<a href="/">more</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="row">
                                        <div className="col-sm-6 col-md-3 col-lg-3">
                                            <a href="/" className="thumbnail"><img src="http://placehold.it/250x250" alt=""  /></a>
                                            <h2>Lorem Ipsum</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...<a href="/">more</a></p>
                                        </div>

                                        <div className="col-sm-6 col-md-3 col-lg-3">
                                            <a href="/" className="thumbnail"><img src="http://placehold.it/250x250" alt="" /></a>
                                            <h2>Lorem Ipsum</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...<a href="/">more</a></p>
                                        </div>

                                        <div className="col-sm-6 col-md-3 col-lg-3">
                                            <a href="/" className="thumbnail"><img src="http://placehold.it/250x250" alt=""/></a>
                                            <h2>Lorem Ipsum</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...<a href="/">more</a></p>
                                        </div>

                                        <div className="col-sm-6 col-md-3 col-lg-3">
                                            <a href="/" className="thumbnail"><img src="http://placehold.it/250x250" alt="" /></a>
                                            <h2>Lorem Ipsum</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...<a href="/">more</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="row">
                                        <div className="col-sm-6 col-md-3 col-lg-3">
                                            <a href="/" className="thumbnail"><img src="http://placehold.it/250x250" alt=""  /></a>
                                            <h2>Lorem Ipsum</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...<a href="/">more</a></p>
                                        </div>

                                        <div className="col-sm-6 col-md-3 col-lg-3">
                                            <a href="/" className="thumbnail"><img src="http://placehold.it/250x250" alt=""  /></a>
                                            <h2>Lorem Ipsum</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...<a href="/">more</a></p>
                                        </div>

                                        <div className="col-sm-6 col-md-3 col-lg-3">
                                            <a href="/" className="thumbnail"><img src="http://placehold.it/250x250" alt=""  /></a>
                                            <h2>Lorem Ipsum</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...<a href="/">more</a></p>
                                        </div>

                                        <div className="col-sm-6 col-md-3 col-lg-3">
                                            <a href="/" className="thumbnail"><img src="http://placehold.it/250x250" alt=""  /></a>
                                            <h2>Lorem Ipsum</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...<a href="/">more</a></p>
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
