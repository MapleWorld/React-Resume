import * as React from 'react';

export default function Skills() {
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
                                    <span className="label label-keyword">Python - Proficient</span>
                                    <span className="label label-keyword">C - Fluent</span>
                                    <span className="label label-keyword">C# - Good</span>
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
                                    <span className="label label-keyword">MySql - Proficient</span>
                                    <span className="label label-keyword">Hive - Proficient</span>
                                    <span className="label label-keyword">Presto - Proficient</span>
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
                                    <span className="label label-keyword">Protobuf </span>
                                    <span className="label label-keyword">gRPC </span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
