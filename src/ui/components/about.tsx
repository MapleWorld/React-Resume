import * as React from 'react';

export default class About extends React.Component < null > {
    render() {
        return (
            <div className="detail">
                <div className="icon"><i className="fa fa-lg fa-user"></i></div>
                <div className="info">
                    <h4 className="title text-uppercase">About</h4>
                    <div className="content">
                        <p>I graduated from University of Toronto in 2017, with a bachelor degree in Computer Science. 🖥️ </p>
                        <p>
                            I'm excited about new technologies, I like spending my time looking up new stuff, 
                            learning new things and creating apps, whether it's mobile, web or hardware, I enjoy it all 😁 </p>
                        <p>If I don't know something, I'll learn it FAST!
                            I am not be an expert at everything, and I often make mistakes, but with time, I can't get worse! 😉
                        </p>
                    </div>
                    <div>
                        I particularly enjoys tackling the impossible and working with open source, big data, analytic, mobile app, and web development. 
                    </div>
                </div>
            </div>
        );
    }
}
