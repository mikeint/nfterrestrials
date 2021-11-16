import React from "react"
import './Team.scss'

import t1 from '../../files/images/team/t1.png'
import t2 from '../../files/images/team/t2.png'

const Team = () => 
    <div className="TeamContainer"> 
        <div className="imageContainer">
            <img src={t1} alt="t1" />
            <div className="teamDesc">
                <div className="teamName">Sean Dick</div>
                <div className="teamPosition">Overlord</div>
            </div>
        </div>
        <div className="imageContainer">
            <img src={t2} alt="t2" />
            <div className="teamDesc">
                <div className="teamName">Michael Sansone</div>
                <div className="teamPosition">Dreamer</div>
            </div>
        </div>
    </div> 

export default Team;



