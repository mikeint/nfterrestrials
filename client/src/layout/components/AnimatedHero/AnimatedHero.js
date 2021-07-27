import React, { Component } from "react"
import './AnimatedHero.scss'
import { Link } from "react-router-dom" 

class Landing extends Component {
    render() {
        return (
            <div className="heroHider"> 
                <div className="heroContainer">
                    <div className="heroAnimation">
                        <div id="heroLayer1" className="heroLayer"></div>
                        <div id="heroLayer2" className="heroLayer"></div>
                        <div className="marquee"><span id="heroLayer0" className="heroLayer heroLayerStatic"></span></div>
                        <div id="heroLayer3" className="heroLayer"></div> 
                    </div>  

                    <div className="seeCollectionBtnContainer">
                        <span><Link to="/terrestrials" className="seeCollectionBtn">SEE COLLECTION</Link></span> 
                    </div>

                </div>
            </div> 
        );
    }
}

export default Landing;