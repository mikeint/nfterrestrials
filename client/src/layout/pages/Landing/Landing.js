import React, { Component } from "react"
import './Landing.css'
import { Link } from "react-router-dom"
 
class Landing extends Component {
    render() {

        return (
            <div className="lp2_HomePage">
            
                <div className="HomePage">
                    <div className="heroAnimation">
                        <div id="heroLayer0" className="heroLayer"></div>
                        <div id="heroLayer1" className="heroLayer"></div>
                        <div id="heroLayer2" className="heroLayer"></div>
                        <div id="heroLayer3" className="heroLayer"></div> 
                    </div>
   
                    <Link to="/landing/terrestrials"><div className="selectBtnContainer">SEE COLLECTION...</div></Link> 
                    
                </div> 
            </div>
        );
    }
}

export default Landing;