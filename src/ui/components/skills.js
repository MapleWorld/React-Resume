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
                                <strong>Programming</strong>
                                <div className="space-top labels">
                                    <span className="label label-keyword">Python</span>
                                    <span className="label label-keyword">TypeScript</span>
                                    <span className="label label-keyword">JavaScript</span>
                                    <span className="label label-keyword">Node.js</span>
                                    <span className="label label-keyword">React</span>
                                    <span className="label label-keyword">Redux</span>
                                    <span className="label label-keyword">SQL</span>
                                    <span className="label label-keyword">gRPC</span>
                                    <span className="label label-keyword">Protobuf</span>
                                    <span className="label label-keyword">AWS EC2</span>
                                    <span className="label label-keyword">S3</span>
                                    <span className="label label-keyword">Elasticsearch</span>
                                    <span className="label label-keyword">Docker</span>
                                    <span className="label label-keyword">Kafka</span>
                                    <span className="label label-keyword">ECS</span>
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
                                <strong>Safety & Detection</strong>
                                <div className="space-top labels">
                                    <span className="label label-keyword">Adversarial Pattern Detection</span>
                                    <span className="label label-keyword">Content Moderation Pipelines</span>
                                    <span className="label label-keyword">API Abuse Prevention</span>
                                    <span className="label label-keyword">Real-time Enforcement Systems</span>
                                    <span className="label label-keyword">Automated Remediation</span>
                                    <span className="label label-keyword">On-call & Incident Response</span>
                                </div>
                            </div>
                        </li>
                        <li className="card card-nested card-skills">
                            <div className="skill-level js-tooltip" title="Master" data-placement="left">
                                <div className="skill-progress master"></div>
                            </div>
                            <div className="skill-info">
                                <strong>Domain</strong>
                                <div className="space-top labels">
                                    <span className="label label-keyword">Trust & Safety Systems</span>
                                    <span className="label label-keyword">ML-driven Threat Detection</span>
                                    <span className="label label-keyword">Privacy & Compliance Infra</span>
                                    <span className="label label-keyword">Data Residency</span>
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
                                    <span className="label label-keyword">MongoDB</span>
                                    <span className="label label-keyword">MySQL</span>
                                    <span className="label label-keyword">Presto</span>
                                    <span className="label label-keyword">Hive</span>
                                    <span className="label label-keyword">AirFlow</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
