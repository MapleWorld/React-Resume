import * as React from 'react';

export default function ProfileCard() {
    return (
        <div className="card profile-card">  
            <div className="profile-pic">
                <img className="media-object img-circle center-block"  data-src="holder.js/64x64"
                        alt="64x64" src="./img/head.jpg" style={{width: 150, height: 150}}/>
            </div>

            <h3 className="text-center text-bolder"> Ou Ye</h3>
            <h5 className="text-muted text-center">Software Engineer</h5>
            <hr/>
            <div className="contact-details clearfix">
                <div className="detail">
                    <span className="icon">
                        <i className="fa fa-lg fa-location-arrow"></i>
                    </span>
                    <span className="info">
                        Toronto, Ontario,
                        Canada
                    </span>
                </div>
                <div className="detail">
                    <span className="icon">
                        <i className="fa fa-lg fa-phone"></i>
                    </span>
                    <span className="info">
                        (425) 410-9532
                    </span>
                </div>
                <div className="detail">
                    <span className="icon">
                        <i className="fa fa-lg fa-envelope"></i>
                    </span>
                    <span className="info">
                        ou.ye.canada@hotmail.com
                    </span>
                </div>
                <div className="detail">
                    <span className="icon" title="Languages I speak">
                        <i className="fa fa-lg fa-language"></i>
                    </span>
                    <span className="info">
                        English & Chinese & Basic Japanese
                    </span>
                </div>
            </div>
            <hr/>
            <div className="social-links text-center">
                <a className="fa fa-linkedin fa-2x social-link link-linkedin"
                    href="http://ca.linkedin.com/pub/ou-ye/52/55a/619" target="_blank" rel="noopener noreferrer"></a>
                <a href="http://stackoverflow.com/users/2375908/ou-ye" target="_blank" rel="noopener noreferrer">
                    <img className="stackoverflow-icon" src={"./img/stackoverflow.png"} alt="stackoverflow"/></a>
                <a href="https://www.hackerrank.com/LonelyMaple" target="_blank" rel="noopener noreferrer">
                    <img className="hacker-icon" src={"./img/hacker.ico"} alt="stackoverflow"/></a>
                <a href="https://github.com/mapleworld" target="_blank" rel="noopener noreferrer">
                    <img className="github-icon" src={"./img/github.gif"} alt="stackoverflow"/></a>
                <a href="https://500px.com/MapleBoy" target="_blank" rel="noopener noreferrer">
                    <img className="five-hundred-px-icon" src={"./img/500px.png"} alt="stackoverflow"/></a>
            </div>
        </div>
    );
}