import * as React from 'react';

export default function About() {
    return (
        <div className="detail">
            <div className="icon"><i className="fa fa-lg fa-user"></i></div>
            <div className="info">
                <h4 className="title text-uppercase">About</h4>
                <div className="content">
                    <p>I have 9 years of experience designing, leading and developing scalable system.</p>
                    <p>
                        Our team at Meta is at the forefront of developing robust integrity and privacy infrastructure, 
                        where I lead initiatives to integrate MetaGen AI, building the next generation of infra for account protection 
                        and recovery flow for Reality Lab, and expanding the coverage to web, mobile, and VR.
                    </p>
                    <p>
                        My journey in computer science began at the University of Toronto, cultivating a foundation that now empowers me to innovate within Meta's Reality Lab Integrity & Security team.
                    </p>
                </div>
            </div>
        </div>
    );
}
