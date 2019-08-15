import * as React from 'react';

export interface Props {
    name: string;
    enthusiasmLevel: number;
    onIncrement ? : () => void;
    onDecrement ? : () => void;
}

export default class Home extends React.Component < Props > {

    getExclamationMarks(numChars: number) {
        return Array(numChars + 1).join('!');
    }

    render() {
        if (this.props.enthusiasmLevel <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }
        return (
            <body>
                <div className="hello">
                    <div className="greeting">
                        Hello {this.props.name + this.getExclamationMarks(this.props.enthusiasmLevel)}
                    </div>
                    <div>
                        <button onClick={this.props.onDecrement}>-</button>
                        <button onClick={this.props.onIncrement}>+</button>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row main clearfix">
                        <section className="col-md-2 card-wrapper affix">
                            <div className="card profile-card">  
                                <div className="profile-pic">
                                    <img className="media-object img-circle center-block"  data-src="holder.js/64x64"
                                            alt="64x64" src="./img/head.jpg" style={{width: 150, height: 150}}/>
                                    <h3 className="text-center text-bolder"> Ou Ye</h3>
                                    <h5 className="text-muted text-center">Software Engineer</h5>
                                    <hr/>
                                    <div className="contact-details clearfix">
                                        <div className="detail">
                                            <span className="icon">
                                                <i className="fa fa-lg fa-location-arrow"></i>
                                            </span>
                                            <span className="info">
                                                Toronto, Ontario,
                                                Canada
                                            </span>
                                        </div>
                                        <div className="detail">
                                            <span className="icon">
                                                <i className="fa fa-lg fa-phone"></i>
                                            </span>
                                            <span className="info">
                                                (416) 829-6098
                                            </span>
                                        </div>
                                        <div className="detail">
                                            <span className="icon">
                                                <i className="fa fa-lg fa-envelope"></i>
                                            </span>
                                            <span className="info">
                                                ou.ye.canada@hotmail.com
                                            </span>
                                        </div>
                                        <div className="detail">
                                            <span className="icon" title="Languages I speak">
                                                <i className="fa fa-lg fa-language"></i>
                                            </span>
                                            <span className="info">
                                                English & Mandarin & Basic Japanese
                                            </span>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="social-links text-center">
                                        <a className="fa fa-linkedin fa-2x social-link link-linkedin"
                                            href="http://ca.linkedin.com/pub/ou-ye/52/55a/619" target="_blank"></a>
                                        <a href="http://stackoverflow.com/users/2375908/ou-ye" target="_blank">
                                            <img className="stackoverflow-icon" src={"./img/stackoverflow.png"} alt="stackoverflow"/></a>
                                        <a href="https://www.hackerrank.com/LonelyMaple" target="_blank">
                                            <img className="hacker-icon" src={"./img/hacker.ico"} alt="stackoverflow"/></a>
                                        <a href="https://github.com/mapleworld" target="_blank">
                                            <img className="github-icon" src={"./img/github.gif"} alt="stackoverflow"/></a>
                                        <a href="https://500px.com/MapleBoy" target="_blank">
                                            <img className="five-hundred-px-icon" src={"./img/500px.png"} alt="stackoverflow"/></a>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="col-md-10 card-wrapper pull-right">
                            <div className="card background-card">
                                <h4 className="text-uppercase text-bolder"><a href="resume_ou_ye_software_engineer.pdf">PDF Resume for Ou Ye (Click Here)</a></h4>
                                <hr/>
                                <div className="background-details">
                                    <div className="detail">
                                        <div className="icon"><i className="fa fa-lg fa-user"></i></div>
                                        <div className="info">
                                            <h4 className="title text-uppercase">About</h4>
                                            <div className="content">
                                                <p>I graduated from University of Toronto in 2017, with a bachelor degree in Computer Science.</p>
                                                <p>
                                                    I'm excited about new technologies, I like spending my time looking up new stuff, learning new things and creating apps, whether it's mobile, web or hardware, I enjoy it all :D </p>
                                                <p>If I don't know something, I'll learn it, and fast.
                                                    I am not be an expert at everything, and I often make mistakes, but with time, I can't get worse!
                                                </p>
                                            </div>
                                            <div>
                                                I particularly enjoys tackling the impossible and working with open source, analytic, game, app, and web development. Life is short, hand me any challenges you got.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="detail">
                                        <div className="icon"><i className="fa fa-lg fa-building"></i></div>
                                        <div className="info">
                                            <h4 className="title text-uppercase">Work Experience</h4>
                                            <ul className="list-unstyled">
                                                <li className="card card-nested clearfix">
                                                    <div className="content has-sidebar">
                                                        <p><strong>Software Engineer</strong>,&nbsp;Thomson Reuters </p>
                                                        <ul>
                                                            <li> Full stack development on various Java, react, C#, .Net and node.js based web applications with e2e testing using docker, selenium and cucumber </li>
                                                            <li> Integration of various tools, like Swagger to help consume RESTful Web services, automated documentation, code generation, and test-case generation </li>
                                                            <li> Integration of MongoDB for NoSQL data to enable user search history feature </li>
                                                            <li> Development of high volume search intensive web applications using elastic search  </li>
                                                            <li> Development of high volume transaction cross-platform scalable RESTful API </li>
                                                        </ul>
                                                    </div>
                                                    <div className="sidebar text-muted text-center">
                                                        <p><strong>Joined:</strong>&nbsp;Current</p>
                                                        <p><strong>Left:</strong>&nbsp;January, 2018 </p>
                                                    </div>
                                                </li>
                                            </ul>
                                            <ul className="list-unstyled">
                                                <li className="card card-nested clearfix">
                                                    <div className="content has-sidebar">
                                                        <p><strong>Software Engineer Intern</strong>,&nbsp;Rakuten </p>
                                                        <ul>
                                                            <li> Design and implemented of an auto data generation server & website, to facilitate and streamline the process of data generation </li>
                                                            <li> Engineered the current testing system to join with the data generation, and automated the testing forthe internal credit card system </li>
                                                            <li> Continuous design and development of features and tools on internal products to improve the development process. </li>
                                                        </ul>
                                                    </div>
                                                    <div className="sidebar text-muted text-center">
                                                        <p><strong>Joined:</strong>&nbsp;May, 2017</p>
                                                        <p><strong>Left:</strong>&nbsp;August, 2017 </p>
                                                    </div>
                                                </li>
                                            </ul>
                                            <ul className="list-unstyled">
                                                <li className="card card-nested clearfix">
                                                    <div className="content has-sidebar">
                                                        <p><strong>Software Engineer Intern</strong>,&nbsp;Amazon </p>
                                                        <ul>
                                                            <li> Created a REST API and an interactivity web tool that can visualize the internal supply chain pipeline using Ruby, Angular, Java, JavaScript, and Hibernate </li>
                                                            <li> Implementation of data analysis logic to identify the performance of the pipeline, provide early detection, and insight of the pipeline processes in real time </li>
                                                            <li> Implementation of auto notification with the data analysis to inform the team about the status and health of the jobs and provide an overview of the pipeline system </li>
                                                        </ul>
                                                    </div>
                                                    <div className="sidebar text-muted text-center">
                                                        <p><strong>Joined:</strong>&nbsp;June, 2016</p>
                                                        <p><strong>Left:</strong>&nbsp;September, 2016 </p>
                                                    </div>
                                                </li>
                                            </ul>
                                            <ul className="list-unstyled">
                                                <li className="card card-nested clearfix">
                                                    <div className="content has-sidebar">
                                                        <p><strong>Software Engineer Intern</strong>,&nbsp;IBM </p>
                                                        <ul>
                                                            <li> Improved Auto SQL Generation Engine Scalability <b>(Now supports 750x more processes with clusters)</b></li>
                                                            <li> Design and re-developed web servers using
                                                                <ul>
                                                                    <li><b> Node.js (Sockets, Async, ES6)</b></li>
                                                                    <li><b> DB2, MongoDB</b></li>
                                                                    <li><b> Java, Javascript, jQuery</b></li>
                                                                    <li><b> C for SQG Engine itself</b></li>
                                                                </ul>
                                                            </li>
                                                            <li> Development of a cross platform web server using Java, Node.js, Cluster, DB2 & MongoDB for userto interact with SQL Query Generator </li>
                                                            <li> Design and developed Database Tutorial Android Application to ease the difficulty of learning and getting DB2 certification</li>
                                                            <li> Developed <b>Performance Analysis Tool</b> and <b>Client Software Analytics Platform </b> to collect and analysis data</li>
                                                            <li>
                                                                Produced educational <b>Youtube and internal video</b> on new IBM products to promote and increase adoption of IBM products
                                                                <a href="https://www.youtube.com/watch?v=Q862P1ZA_Iw&index=7&list=PLdCTCL7DbgsnnYl9YLINarptciOxgF6r1">Youtube Video Playlist</a>
                                                            </li>
                                                        </ul>
                                                        <br />
                                                        <a href="https://github.com/IBM-DTeam"> D-Team Open Source Github Repository</a>
                                                        <br />
                                                    </div>
                                                    <div className="sidebar text-muted text-center">
                                                        <p><strong>Joined:</strong>&nbsp;May, 2015</p>
                                                        <p><strong>Left:</strong>&nbsp;April, 2016 </p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="detail">
                                        <div className="icon"><i className="fa fa-lg fa-code"></i></div>
                                        <div className="info">
                                            <h4 className="title text-uppercase">Skills</h4>
                                            <div className="content">
                                                <ul className="list-unstyled">
                                                    <li className="card card-nested card-skills">
                                                        <div className="skill-level js-tooltip" title="Master" data-placement="left">
                                                            <div className="skill-progress master"></div>
                                                        </div>
                                                        <div className="skill-info">
                                                            <strong>Languages</strong>
                                                            <div className="space-top labels">
                                                                <span className="label label-keyword">Java - Proficient</span>
                                                                <span className="label label-keyword">Python - Good</span>
                                                                <span className="label label-keyword">C - Fluent</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="card card-nested card-skills">
                                                        <div className="skill-level js-tooltip" title="Master" data-placement="left">
                                                            <div className="skill-progress master"></div>
                                                        </div>
                                                        <div className="skill-info">
                                                            <strong>Web Development</strong>
                                                            <div className="space-top labels">
                                                                <span className="label label-keyword">Nodejs - Proficient</span>
                                                                <span className="label label-keyword">Typscript/Javascript - Proficient</span>
                                                                <span className="label label-keyword">jQuery - Proficient</span>
                                                                <span className="label label-keyword">HTML/Jade/Ejs/CSS - Proficient</span>
                                                                <span className="label label-keyword">React/Redux - Proficient</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="card card-nested card-skills">
                                                        <div className="skill-level js-tooltip" title="Master" data-placement="left">
                                                            <div className="skill-progress master"></div>
                                                        </div>
                                                        <div className="skill-info">
                                                            <strong>Database</strong>
                                                            <div className="space-top labels">
                                                                <span className="label label-keyword">SQL - Proficient</span>
                                                                <span className="label label-keyword">DB2 - Proficient</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="card card-nested card-skills">
                                                        <div className="skill-level js-tooltip" title="Master" data-placement="left">
                                                            <div className="skill-progress master"></div>
                                                        </div>
                                                        <div className="skill-info">
                                                            <strong>Other</strong>
                                                            <div className="space-top labels">
                                                                <span className="label label-keyword">Procrastination - Proficient</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
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
                                                            <li> <a href="http://www.ouye.photography"> www.ouye.photography</a> <strong> Photography Site (Broke had to take it down)</strong></li>
                                                            <li> Incorporated responsive web design and dynamic web page </li>
                                                            <li> No back-end though, hosted on GoDaddy since I can't afford virtual machine </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="detail">
                                        <div className="icon"><i className="fa fa-lg fa-child"></i></div>
                                        <div className="info">
                                            <h4 className="title text-uppercase"> OTHER PROFICIENCY</h4>
                                            <div className="content">
                                                <ul className="list-unstyled">
                                                    <li className="card card-nested">
                                                        <ul>
                                                            <li> Experience with <b>Full-Stack for Web, Mobile, and Java Development</b></li>
                                                            <li> Proficient in working with all Windows OS, some UNIX and Linux(Ubuntu)</li>
                                                            <li> Proficient working with Eclipse, Android Studio, Visual Studio, and Git</li>
                                                            <li> Knowledge of many software design and architecture, such as RESTful, TDD, Agile, Responsive Web Design, and MVC</li>
                                                            <li> Experience with using many hosting platform, such as AWS, Google, Bluemix, and Heroku</li>
                                                            <li> Knowledge of various algorithm, such as "you name it" (Kidding, please don't pick any hard one for the interview)</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="detail">
                                        <div className="icon"><i className="fa fa-lg fa-mortar-board"></i></div>
                                        <div className="info">
                                            <h4 className="title text-uppercase">Education</h4>
                                            <div className="content">
                                                <ul className="list-unstyled">
                                                    <li className="card card-nested">
                                                        <div className="content has-sidebar">
                                                            <p>
                                                                <strong>Computer Science Specialist, Bachelor</strong>,&nbsp;
                                                                University of Toronto
                                                            </p>
                                                        </div>
                                                        <div className="sidebar text-muted text-center">
                                                            <p><strong>Started:</strong>&nbsp; September, 2012</p>
                                                            <p><strong>Completion:</strong>&nbsp; December, 2017</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="detail">
                                        <div className="icon">
                                            <i className="fa fa-lg fa-heart"></i>
                                        </div>
                                        <div className="info">
                                            <h4 className="title text-uppercase">
                                                    Interests
                                                </h4>
                                            <div className="content">
                                                <ul className="list-unstyled">
                                                    <li className="card card-nested">
                                                        <div className="space-top labels">
                                                            <span className="label label-keyword">Piano</span>
                                                            <span className="label label-keyword">Guitar</span>
                                                            <span className="label label-keyword">Violin</span>
                                                            <span className="label label-keyword">Traveling</span>
                                                            <span className="label label-keyword">Wild Life</span>
                                                            <span className="label label-keyword">Photography</span>
                                                            <span className="label label-keyword">Star Gazing</span>
                                                            <span className="label label-keyword">Cycling</span>
                                                            <span className="label label-keyword">Camping</span>
                                                            <span className="label label-keyword">Skydiving</span>
                                                            <span className="label label-keyword">Scuba Diving</span>
                                                            <span className="label label-keyword">Dogs</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="detail">
                                        <div className="icon">
                                            <i className="fa fa-lg fa-book"></i>
                                        </div>
                                        <div className="info">
                                            <h4 className="title text-uppercase">
                                                    Other Random Stuff About Me!
                                                </h4>
                                            <div className="content">
                                                <ul className="list-unstyled">
                                                    <li className="card card-nested">
                                                        <div className="content">
                                                            <p className="clear-margin">Love challenges and adventures! Life is too short to waste</p>
                                                            <p className="clear-margin">Love open source, who doesn't like free stuff</p>
                                                            <p className="clear-margin">Love animal, want to adopt one when I can afford it</p>
                                                            <p className="clear-margin">Love music, took 6-7 years of violin classes</p>
                                                            <p className="clear-margin">Self taught piano, guitar, photography, and life in general (When you love it, you gotta do it)</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </body>
        );
    }
}

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}