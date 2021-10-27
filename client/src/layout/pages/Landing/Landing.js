import React, { Component } from "react" 
import './Landing.scss'
import TerrestrialExamples from "../../components/TerrestrialExamples/TerrestrialExamples" 
import RoadMap from "../../components/RoadMap/RoadMap" 
import AnimatedHero from "../../components/AnimatedHero/AnimatedHero" 
import Bio from "../../components/Bio/Bio" 
import Footer from "../../components/Footer/Footer"
import TopButtons from "../../components/TopButtons/TopButtons"
import Socials from "../../components/Socials/Socials" 
import VideoSequence from "../../components/VideoSequence/VideoSequence" 
import Team from "../../components/Team/Team" 

class Landing extends Component {
    render() {
        return (
            <> 
                <Socials />
                <AnimatedHero />
                <TopButtons />
                <div className="homeBodyContainer">
                    <TerrestrialExamples />
                    <Bio />
                    <VideoSequence />
                    <RoadMap />
                    <Team />
                    <Footer />
                </div>
            </> 
        );
    }
}

export default Landing;