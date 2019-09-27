import * as React from 'react';
import Header from '../containers/header';
import About from '../containers/about';
import Skills from '../containers/skills';
import Projects from '../containers/projects';
import ProfileCard from '../containers/profileCard';
import WorkExperience from '../containers/workExperience';
import Others from '../containers/others';
import Footer from '../containers/footer';

export interface Props {
    name: string;
    enthusiasmLevel: number;
    onIncrement ? : () => void;
    onDecrement ? : () => void;
}

export default class Home extends React.Component < Props > {

    getExclamationMarks(numChars: number) {
        return Array(numChars + 1).join('!');
    }

    render() {
        if (this.props.enthusiasmLevel <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }
        return (
            <div>
                {/*
                <div className="hello">
                    <div className="greeting">
                        Hello {this.props.name + this.getExclamationMarks(this.props.enthusiasmLevel)}
                    </div>
                    <div>
                        <button onClick={this.props.onDecrement}>-</button>
                        <button onClick={this.props.onIncrement}>+</button>
                    </div>
                </div>
                */}
                <Header/>
                <div className="container-fluid">
                    <div className="row main clearfix">
                        <section className="col-md-2 card-wrapper affix">
                            <ProfileCard/>
                        </section>
                        <section className="col-md-10 card-wrapper pull-right">
                            <div className="card background-card">
                                <h4 className="text-uppercase text-bolder"><a href="./resume_ou_ye_software_engineer.pdf">PDF Resume for Ou Ye (Click Here)</a></h4>
                                <hr/>
                                <div className="background-details">
                                    <About/>
                                    <WorkExperience/>
                                    <Skills/>
                                    <Projects/>
                                    <Others/>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}