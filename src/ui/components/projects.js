import * as React from 'react';

export default function Projects() {
    return (
        <div className="detail">
            <div className="icon"><i className="fa fa-lg fa-building"></i></div>
            <div className="info">
                <h4 className="title text-uppercase">RELEVANT EXPERIENCES AND PROJECT</h4>
                <strong>All source code are available on Github (Some are private though)</strong>
                <ul className="list-unstyled">
                    <li className="card card-nested clearfix">
                        <div className="content">
                            <p><strong>Lens <a href="http://devpost.com/software/lens">[Devpost]</a></strong> University of Yale Hackathon</p>
                            <ul>
                                <li> A website build on Nodejs that collects and analysis tweets from twitter, news articles to produce gender, population, country graph</li>
                                <li> Login functionality and data aggregation is provided by MongoDB</li>
                                <li> The enriched Twitter data comes from IBM Insights API for Twitter</li>
                                <li> The blog and news article reading comes from AlchemyAPI</li>
                                <li> Super close on winning, bad judges</li>
                            </ul>
                            <br />
                            <p><strong>Donation App <a href="http://devpost.com/software/kado-fm3dkp">[Devpost]</a></strong> University of Waterloo Hackathon</p>
                            <ul>
                                <li> An Android application that was developed during Hack The North</li>
                                <li> Uses Google Cloud and API to list nearby charities and food banks based on current location, and simplify finding the data and steps for donation</li>
                                <li> Didn't win anything though</li>
                            </ul>
                            <br />
                            <p><strong>Community Fund</strong> &nbsp;</p>
                            <ul>
                                <li> A crowd funding platform for raising fund and awareness on community project</li>
                                <li> Implemented using Nodejs and MySQL, and hosted on amazon web server</li>
                                <li> Incorporated responsive web design, MVC, database and dynamic web page </li>
                            </ul>
                            <br />
                            <p><strong>TIFF Movie</strong></p>
                            <ul>
                                <li> A website built on Nodejs and MySql, that will scrape a list of youtube video info and display them nicely to help the user to chose what movie to watch</li>
                                <li> Allows people to search for movies display on that day</li>
                            </ul>
                            <br />
                            <p><strong>Personal Website</strong></p>
                            <ul>
                                <li> 
                                    <a href="https://www.ouye.ca">
                                        www.ouye.ca
                                    </a> &nbsp;
                                    <ul>
                                        <li>Built on React and React & Redux</li>
                                        
                                        <li>
                                            Leveraged Microsoft $150 monthly employee credit, server hosted on Azure, 
                                            with CI/CD enabled through 
                                            <a href="https://azure.microsoft.com/en-us/services/devops/">
                                                &nbsp;Azure DevOps
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li> <a href="http://www.ouye.photography"> www.ouye.photography</a> <strong> Photography Site (No money had to take it down)</strong></li>
                            </ul>
                            <br />
                            <p><strong>VR Tap App</strong> &nbsp;</p>
                            <ul>
                                <li> A simple tap to create virtual reality developed just for fun over the weekend</li>
                                <li> https://photos.app.goo.gl/bED7WrYdBjP4GqVK9 </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
