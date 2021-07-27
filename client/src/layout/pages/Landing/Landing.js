import React, { Component } from "react" 
import './Landing.scss'
import TerrestrialExamples from "../../components/TerrestrialExamples/TerrestrialExamples" 
import RoadMap from "../../components/RoadMap/RoadMap" 
import AnimatedHero from "../../components/AnimatedHero/AnimatedHero" 
import Bio from "../../components/Bio/Bio" 
import Footer from "../../components/Footer/Footer" 
import Socials from "../../components/Socials/Socials" 

class Landing extends Component {
    render() {
        return (
            <> 
                <AnimatedHero />
                <div className="homeBodyContainer">
                    <Socials />
                    <TerrestrialExamples />
                    <Bio />
                    <RoadMap />
                    <Footer />
                </div>
            </> 
        );
    }
}

export default Landing;