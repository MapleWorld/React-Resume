import * as React from 'react';
import { BrowserRouter as Switch , Route, Link, NavLink } from "react-router-dom";
import Header from '../containers/header';
import About from '../containers/about';
import Ads from '../containers/ads';
import Skills from '../containers/skills';
import Projects from '../containers/projects';
import ProfileCard from '../containers/profileCard';
import WorkExperience from '../containers/workExperience';
import Others from '../containers/others';
import MachineLearning from '../containers/machineLearning';
import Footer from '../containers/footer';

export default class Home extends React.Component < any > {
    render() {
        return (
            <div className="fullPage">
                <Header/>
                <div className="container-fluid">
                    <div className="row main clearfix">
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/machineLearning" component={MachineLearningPage} />
                        <Route exact path="/Ads" component={Ads} />
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

function HomePage() {
    return (
        <div>
            <section className="col-md-2 card-wrapper affix">
                <ProfileCard/>
            </section>
            <section className="col-md-10 card-wrapper pull-right">
                <div className="card background-card">
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
    );
}

function MachineLearningPage() {
    return (
        <div>
            <section className="col-6">
                <MachineLearning/>
            </section>
        </div>
    );
}
