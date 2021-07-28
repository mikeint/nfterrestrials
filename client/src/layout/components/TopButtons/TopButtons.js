import React from "react"
import './TopButtons.scss'
import { Link } from "react-router-dom" 

const TopButtons = () => 
    <div className="topButtonsContainer">
        <div className="seeCollectionBtnContainer">
            <span><Link to="/terrestrials" className="seeCollectionBtn">SEE COLLECTION</Link></span> 
        </div>
    </div> 

export default TopButtons;



