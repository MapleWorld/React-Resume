import * as React from 'react';

export default function About() {
    return (
        <div className="detail">
            <div className="icon"><i className="fa fa-lg fa-user"></i></div>
            <div className="info">
                <h4 className="title text-uppercase">About</h4>
                <div className="content">
                    <p>Computer Science graduate from the University of Toronto with a passion for innovative technology solutions and continuous learning. 🖥️</p>
                    <p>
                        A technology enthusiast with a proven track record of rapidly adapting to new technologies and frameworks. 
                        Experienced in full-stack development across mobile, web, and hardware platforms, with a focus on creating scalable, 
                        high-performance applications.
                    </p>
                    <p>
                        Known for quick learning abilities and problem-solving skills, I thrive in challenging environments where 
                        innovation meets technical excellence. My approach combines technical expertise with a growth mindset, 
                        consistently delivering solutions that exceed expectations.
                    </p>
                </div>
                <div>
                    Specialized in open source development, big data analytics, and full-stack application development, 
                    with a particular focus on creating impactful solutions that drive business value.
                </div>
            </div>
        </div>
    );
}
