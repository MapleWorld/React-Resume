import * as React from 'react';

export default function Projects() {
    return (
        <div className="detail">
            <div className="icon"><i className="fa fa-lg fa-building"></i></div>
            <div className="info">
                <h4 className="title text-uppercase">RELEVANT EXPERIENCES AND PROJECTS</h4>
                <strong>All source code available on GitHub (Some repositories are private)</strong>
                <ul className="list-unstyled">
                    <li className="card card-nested clearfix">
                        <div className="content">
                            <p><strong>Lens - Social Media Analytics Platform <a href="http://devpost.com/software/lens">[Devpost]</a></strong> - Yale University Hackathon</p>
                            <ul>
                                <li>Engineered a real-time social media analytics platform using Node.js that aggregates and analyzes Twitter data and news articles</li>
                                <li>Implemented advanced data visualization for gender, population, and geographical distribution analysis</li>
                                <li>Integrated IBM Insights API for Twitter and AlchemyAPI for news article processing</li>
                                <li>Developed secure user authentication and MongoDB-based data aggregation system</li>
                            </ul>
                            <br />
                            <p><strong>Kado - Smart Donation Platform <a href="http://devpost.com/software/kado-fm3dkp">[Devpost]</a></strong> - University of Waterloo Hackathon</p>
                            <ul>
                                <li>Architected an Android application that streamlines charitable giving through location-based services</li>
                                <li>Integrated Google Cloud Platform APIs to provide real-time location-based charity and food bank discovery</li>
                                <li>Implemented intuitive user interface for simplified donation process and information access</li>
                            </ul>
                            <br />
                            <p><strong>Community Fund - Crowdfunding Platform</strong></p>
                            <ul>
                                <li>Developed a full-stack crowdfunding platform for community projects using Node.js and MySQL</li>
                                <li>Implemented responsive web design with MVC architecture and dynamic content management</li>
                                <li>Deployed on AWS with optimized database performance and security measures</li>
                            </ul>
                            <br />
                            <p><strong>TIFF Movie - Entertainment Discovery Platform</strong></p>
                            <ul>
                                <li>Built a movie discovery platform using Node.js and MySQL with automated YouTube content aggregation</li>
                                <li>Implemented advanced search functionality for real-time movie schedule information</li>
                                <li>Developed user-friendly interface for enhanced movie selection experience</li>
                            </ul>
                            <br />
                            <p><strong>Personal Portfolio Platform</strong></p>
                            <ul>
                                <li> 
                                    <a href="https://www.ouye.ca">
                                        www.ouye.ca
                                    </a> &nbsp;
                                    <ul>
                                        <li>Architected a modern portfolio website using React and Redux for state management</li>
                                        <li>Implemented CI/CD pipeline using Azure DevOps for automated deployment</li>
                                        <li>Optimized performance and SEO for enhanced user experience</li>
                                    </ul>
                                </li>
                                <li> <a href="http://www.ouye.photography"> www.ouye.photography</a> <strong> Photography Portfolio (Archived)</strong></li>
                            </ul>
                            <br />
                            <p><strong>VR Tap - Virtual Reality Creation Tool</strong></p>
                            <ul>
                                <li>Developed an innovative VR content creation tool for rapid prototyping</li>
                                <li>Implemented intuitive tap-based interface for VR environment generation</li>
                                <li>Showcase: <a href="https://photos.app.goo.gl/bED7WrYdBjP4GqVK9">VR Tap Demo</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
