import React, { Component } from "react" 
import './Landing.scss'
import TerrestrialExamples from "../../components/TerrestrialExamples/TerrestrialExamples" 
import RoadMap from "../../components/RoadMap/RoadMap" 
import AnimatedHero from "../../components/AnimatedHero/AnimatedHero" 

class Landing extends Component {
    render() {
        return (
            <> 
                <AnimatedHero />
                <div className="homeBodyContainer">
                    <TerrestrialExamples />
                    <RoadMap />
                </div>
            </> 
        );
    }
}

export default Landing;