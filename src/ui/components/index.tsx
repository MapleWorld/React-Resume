import * as React from 'react';
import Header from '../containers/header';
import About from '../containers/about';
import Skills from '../containers/skills';
import Projects from '../containers/projects';
import ProfileCard from '../containers/profileCard';
import WorkExperience from '../containers/workExperience';
import Others from '../containers/others';
import Sidebar from '../containers/sidebar';
import Footer from '../containers/footer';

export default class Home extends React.Component < any > {

    render() {
        return (
            <div>
                <Header/>
                <div className="container-fluid">
                    <div className="row main clearfix">
                        <section className="col-md-2 card-wrapper affix">
                            <ProfileCard/>
                        </section>
                        <section className="col-md-10 card-wrapper pull-right">
                            <div className="card background-card">
                                <h4 className="text-uppercase text-bolder">
                                    <a href="./resume_ou_ye_software_engineer.pdf">
                                        PDF Resume for Ou Ye (Click Here)
                                    </a>
                                </h4>
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
                <Sidebar/>
                <Footer/>
            </div>
        );
    }
}
