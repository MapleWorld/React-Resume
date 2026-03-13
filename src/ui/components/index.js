import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from '../components/header';
import About from '../components/about';
import Ads from '../components/ads';
import Skills from '../components/skills';
import Projects from '../components/projects';
import ProfileCard from '../components/profileCard';
import WorkExperience from '../components/workExperience';
import Others from '../components/others';
import MachineLearning from '../components/machineLearning';
import Footer from '../components/footer';


export default function Home() {
    return (
        <Router>
            <div className="fullPage">
                <Header/>
                <div className="container-fluid">
                    <div className="row main clearfix">
                        <Routes>
                            <Route path="/" element={<HomePage/>}/>
                            <Route path="/machineLearning" element={<MachineLearningPage/>}/>
                            <Route path="/Ads" element={<Ads/>}/>
                        </Routes>
                    </div>
                </div>
                <Footer/>
            </div>
        </Router>
    );
}

function HomePage() {
    return (
        <div className="row">
            <section className="col-md-3 col-lg-2 card-wrapper">
                <ProfileCard/>
            </section>
            <section className="col-md-9 col-lg-10 card-wrapper">
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
