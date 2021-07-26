import React, { Component } from "react" 
import './Landing.scss'
import TerrestrialExamples from "../../components/TerrestrialExamples/TerrestrialExamples" 
import RoadMap from "../../components/RoadMap/RoadMap" 
import AnimatedHero from "../../components/AnimatedHero/AnimatedHero" 
import Footer from "../../components/Footer/Footer" 

class Landing extends Component {
    render() {
        return (
            <> 
                <AnimatedHero />
                <div className="homeBodyContainer">
                    <TerrestrialExamples />
                    <RoadMap />
                    <Footer />
                </div>
            </> 
        );
    }
}

export default Landing;