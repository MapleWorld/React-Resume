import * as React from 'react';

export default function About() {
    return (
        <div>
            <div className="detail">
                <div className="icon"><i className="fa fa-lg fa-child"></i></div>
                <div className="info">
                    <h4 className="title text-uppercase">TECHNICAL PROFICIENCIES</h4>
                    <div className="content">
                        <ul className="list-unstyled">
                            <li className="card card-nested">
                                <ul>
                                    <li>Expertise in full-stack development with proficiency in Java, C#, and modern web technologies</li>
                                    <li>Extensive experience with cross-platform development across Windows, macOS, and Linux environments</li>
                                    <li>Advanced proficiency with industry-standard development tools including Visual Studio, IntelliJ IDEA, Eclipse, Android Studio, and Git workflow management</li>
                                    <li>Deep understanding of software architecture patterns including RESTful APIs, Test-Driven Development (TDD), Agile methodologies, and MVC architecture</li>
                                    <li>Comprehensive experience with cloud platforms including AWS, Azure, Google Cloud Platform, and various CI/CD tools</li>
                                    <li>Strong foundation in algorithms and data structures, with practical application in enterprise solutions</li>
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
                                        <strong>Bachelor of Science in Computer Science</strong>,&nbsp;
                                        University of Toronto
                                    </p>
                                </div>
                                <div className="sidebar text-muted text-center">
                                    <p><strong>Started:</strong>&nbsp; September, 2012</p>
                                    <p><strong>Completed:</strong>&nbsp; December, 2017</p>
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
                            Personal Interests
                        </h4>
                    <div className="content">
                        <ul className="list-unstyled">
                            <li className="card card-nested">
                                <div className="space-top labels">
                                    <span className="label label-keyword">AI Safety & Alignment Research</span>
                                    <span className="label label-keyword">Adversarial ML & Red-teaming</span>
                                    <span className="label label-keyword">Open-source Security Tooling</span>
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
                            Personal Statement
                        </h4>
                    <div className="content">
                        <ul className="list-unstyled">
                            <li className="card card-nested">
                                <div className="content">
                                    <p className="clear-margin">Passionate about global exploration and cultural experiences 🚅🏯🌌⛩️🛳️🚀🗺️🧳🚤</p>
                                    <p className="clear-margin">Active contributor to open source projects and technology communities</p>
                                    <p className="clear-margin">Classically trained musician with proficiency in piano, violin, and guitar 🎼🎹🎻🎸</p>
                                    <p className="clear-margin">Award-winning photographer specializing in landscape and portrait photography 📷</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
