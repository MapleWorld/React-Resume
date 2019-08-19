import * as React from 'react';

export default class WorkExperience extends React.Component < null > {
    render() {
        return (
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
        );
    }
}