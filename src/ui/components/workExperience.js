import * as React from 'react';

export default function WorkExperience() {
    return (
        <div className="detail">
            <div className="icon"><i className="fa fa-lg fa-building"></i></div>
            <div className="info">
                <h4 className="title text-uppercase">Work Experience</h4>

                <ul className="list-unstyled">
                    <li className="card card-nested clearfix">
                        <div className="content has-sidebar-date">
                            <p><strong>Senior Software Engineer - Reality Lab Integrity & Privacy</strong>,&nbsp;Meta </p>
                            <ul>
                                <li>Led the Oculus Privacy Center migration into the unified Meta Accounts Center</li>
                                <li>Led a team and architected next-generation privacy infrastructure for data portability, account deletion, and deactivation to ensure legal compliance</li>
                                <li>Led and designed end-to-end account recovery and authentication flows across the Meta family of apps</li>
                                <li>Guided a team in developing infrastructure for advanced threat detection to mitigate account abuse and compromise</li>
                                <li>Expanded ML-driven protection coverage across platform, including SMS verification and mobile rate limiting for Meta AI and Horizon</li>
                                <li>Mentored and cultivated engineering talent, successfully guiding multiple team members through career progressions from Intern, SDE I, and SDE II up to Senior Software Engineer</li>
                            </ul>
                        </div>
                        <div className="sidebar-date text-muted text-center">
                            <p><strong>Joined:</strong>&nbsp;Jul 2022</p>
                            <p><strong>Present</strong></p>
                            <p><strong>Location:</strong>&nbsp;US, Bellevue 🌲</p>
                        </div>
                    </li>
                </ul>
                
                <ul className="list-unstyled">
                    <li className="card card-nested clearfix">
                        <div className="content has-sidebar-date">
                            <p><strong>Software Engineer II - Anti-Abuse Team </strong>,&nbsp;Dropbox </p>
                            <ul>
                                <li>Architected and implemented advanced systems to detect and prevent abusive content sharing and account takeover activities across Dropbox products</li>
                                <li>Engineered high-performance services including an administration portal, restricted content service (50k QPS), abuse email processor, and JUDO (Just-in-time User compromise Detection) system using Python and React</li>
                                <li>Developed sophisticated detection systems for abnormal user activity, including bandwidth monitoring (50k QPS) and intelligent CAPTCHA implementation</li>
                            </ul>
                        </div>
                        <div className="sidebar-date text-muted text-center">
                            <p><strong>Joined:</strong>&nbsp;Feb 2021</p>
                            <p><strong>Location:</strong>&nbsp;US, Seattle 🌧️ </p>
                        </div>
                    </li>
                </ul>

                <ul className="list-unstyled">
                    <li className="card card-nested clearfix">
                        <div className="content has-sidebar-date">
                            <p><strong>Software Engineer II - Web Protection</strong>,&nbsp;Microsoft </p>
                            <ul>
                                <li>Contributed to Windows Defender's global security ecosystem, protecting billions of users worldwide</li>
                                <li>Architected and implemented scalable, cloud-based machine learning reputation systems using Microsoft's proprietary Cosmos language for enhanced security</li>
                                <li>Developed and optimized advanced detection algorithms for URLs, phishing, malware, and network protection data feed pipelines</li>
                            </ul>
                        </div>
                        <div className="sidebar-date text-muted text-center">
                            <p><strong>Joined:</strong>&nbsp;August 2019</p>
                            <p><strong>Left:</strong>&nbsp;Feb, 2021 </p>
                            <p><strong>Location:</strong>&nbsp;US, Seattle 🌧️ </p>
                        </div>
                    </li>
                </ul>

                <ul className="list-unstyled">
                    <li className="card card-nested clearfix">
                        <div className="content has-sidebar-date">
                            <p><strong>Software Engineer</strong>,&nbsp;Thomson Reuters </p>
                            <ul>
                                <li>Led full-stack development of enterprise web applications using Java, React, C#, .NET, and Node.js, implementing comprehensive e2e testing with Docker, Selenium, and Cucumber</li>
                                <li>Architected and integrated RESTful Web services using Swagger, implementing automated documentation, code generation, and test-case generation</li>
                                <li>Designed and implemented high-performance search applications using Elasticsearch and MongoDB for enhanced user experience</li>
                                <li>Developed scalable, cross-platform RESTful APIs handling high-volume transactions</li>
                            </ul>
                        </div>
                        <div className="sidebar-date text-muted text-center">
                            <p><strong>Joined:</strong>&nbsp;January, 2018</p>
                            <p><strong>Left:</strong>&nbsp;August, 2019 </p>
                            <p><strong>Location:</strong>&nbsp;Canada, Toronto ☃️ </p>
                        </div>
                    </li>
                </ul>
                <ul className="list-unstyled">
                    <li className="card card-nested clearfix">
                        <div className="content has-sidebar-date">
                            <p><strong>Software Engineer Intern</strong>,&nbsp;Rakuten </p>
                            <ul>
                                <li>Designed and implemented an automated data generation server and web interface, significantly streamlining the data generation process</li>
                                <li>Engineered an integrated testing system with data generation capabilities, automating testing for the internal credit card system</li>
                                <li>Developed innovative features and tools for internal products, enhancing development efficiency and workflow</li>
                            </ul>
                        </div>
                        <div className="sidebar-date text-muted text-center">
                            <p><strong>Joined:</strong>&nbsp;May, 2017</p>
                            <p><strong>Left:</strong>&nbsp;August, 2017 </p>
                            <p><strong>Location:</strong>&nbsp;Japan, Fukuoka 🗻 </p>
                        </div>
                    </li>
                </ul>
                <ul className="list-unstyled">
                    <li className="card card-nested clearfix">
                        <div className="content has-sidebar-date">
                            <p><strong>Software Engineer Intern</strong>,&nbsp;Amazon </p>
                            <ul>
                                <li>Developed a REST API and interactive web tool for visualizing internal supply chain pipelines using Ruby, Angular, Java, JavaScript, and Hibernate</li>
                                <li>Implemented real-time data analysis logic for pipeline performance monitoring, enabling early detection and insights</li>
                                <li>Created an automated notification system with data analysis capabilities, providing comprehensive pipeline health monitoring and system overview</li>
                            </ul>
                        </div>
                        <div className="sidebar-date text-muted text-center">
                            <p><strong>Joined:</strong>&nbsp;June, 2016</p>
                            <p><strong>Left:</strong>&nbsp;September, 2016 </p>
                            <p><strong>Location:</strong>&nbsp;Canada, Toronto 🌳  </p>
                        </div>
                    </li>
                </ul>
                <ul className="list-unstyled">
                    <li className="card card-nested clearfix">
                        <div className="content has-sidebar-date">
                            <p><strong>Software Engineer</strong>,&nbsp;IBM </p>
                            <ul>
                                <li>Architected and re-engineered web servers using advanced technologies:
                                    <ul>
                                        <li><b>Node.js (Sockets, Async, ES6)</b></li>
                                        <li><b>DB2, MongoDB</b></li>
                                        <li><b>Java, JavaScript, jQuery</b></li>
                                        <li><b>C for SQG Engine core</b></li>
                                    </ul>
                                </li>
                                <li>Enhanced Auto SQL Generation Engine scalability by 750x through cluster implementation</li>
                                <li>Developed a cross-platform web server integrating Java, Node.js, Cluster, DB2 & MongoDB for SQL Query Generator interaction</li>
                                <li>Created an educational Android application for DB2 certification training</li>
                                <li>Engineered <b>Performance Analysis Tool</b> and <b>Client Software Analytics Platform</b> for comprehensive data collection and analysis</li>
                                <li>
                                    Produced educational content for IBM products, including <b>YouTube tutorials</b> and internal training videos &nbsp; 
                                    <a href="https://www.youtube.com/watch?v=Q862P1ZA_Iw&index=7&list=PLdCTCL7DbgsnnYl9YLINarptciOxgF6r1">
                                        YouTube Playlist &nbsp; 
                                        <i className="menu-item-icon fa fa-fw fa-youtube-play"/>
                                    </a>
                                </li>
                            </ul>
                            <br />
                            <a href="https://github.com/IBM-DTeam">D-Team Open Source GitHub Repository</a>
                            <br />
                        </div>
                        <div className="sidebar-date text-muted text-center">
                            <p><strong>Joined:</strong>&nbsp;May, 2015</p>
                            <p><strong>Left:</strong>&nbsp;April, 2016 </p>
                            <p><strong>Location:</strong>&nbsp;Canada, Toronto 🍁 </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
