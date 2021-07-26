import React, { Component } from "react"
import './Landing.scss'
import { Link } from "react-router-dom"
import TerrestrialExamples from "../../components/TerrestrialExamples/TerrestrialExamples" 

class Landing extends Component {
    render() {

        return (
            <div className="lp2_HomePage">
            
                <div className="HomePage">
                    <div className="heroAnimation">
                        <div id="heroLayer1" className="heroLayer"></div>
                        <div id="heroLayer2" className="heroLayer"></div>
                        <div className="marquee"><span id="heroLayer0" className="heroLayer heroLayerStatic"></span></div>
                        <div id="heroLayer3" className="heroLayer"></div> 
                    </div>

                    <div className="seeCollectionBtn">
                        <span><Link to="/landing/terrestrials">SEE COLLECTION</Link></span>
                    </div>
                    <TerrestrialExamples />

                </div> 
            </div>
        );
    }
}

export default Landing;