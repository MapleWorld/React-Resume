import * as React from 'react';

export default class Skills extends React.Component < null > {
    render() {
        return (
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
                                        <span className="label label-keyword">C# - Getting better day by day</span>
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
        );
    }
}
