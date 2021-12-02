import * as React from 'react';

export default function About() {
    return (
        <div>
            <div className="detail">
                <div className="icon"><i className="fa fa-lg fa-child"></i></div>
                <div className="info">
                    <h4 className="title text-uppercase"> OTHER PROFICIENCY</h4>
                    <div className="content">
                        <ul className="list-unstyled">
                            <li className="card card-nested">
                                <ul>
                                    <li> Experience with Full-Stack development for Web apps, as well as backend development using Java and C#</li>
                                    <li> Proficient in working with all Windows OS, Mac, some UNIX and Linux (Ubuntu)</li>
                                    <li> Proficient working with tools like Visual Studio, IntelliJ IDEA, Eclipse, Android Studio, Visual Studio, and Git & workflow</li>
                                    <li> Knowledge of many software design and architecture, such as RESTful, TDD, Agile, and MVC</li>
                                    <li> Experience with using many hosting platform, such as AWS, Azure, Azure Devops, Google, Bluemix, GoDaddy, and Heroku</li>
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
                                    <span className="label label-keyword">Guitar </span>
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
                                    <p className="clear-margin">Love challenges and 🚅🏯🌌⛩️🛳️🚀🗺️🧳🚤 !</p>
                                    <p className="clear-margin">Love open source, who doesn't like free stuff</p>
                                    <p className="clear-margin">Love 🎼, and can play 🎹🎻🎸 </p>
                                    <p className="clear-margin">Love 📷, enjoy taking photo of both landscape and portrait</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
