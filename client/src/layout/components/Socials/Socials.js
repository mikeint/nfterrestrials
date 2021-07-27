import React from "react"
import './Socials.scss' 

import discord from '../../files/images/socialImages/discord.png'
import twitter from '../../files/images/socialImages/twitter.png'

const Socials = () => 
    <div className="socialsContainer">
        <a href="https://www.instagram.com/nfterrestrials" target="_blank" rel="noreferrer"><img src={discord} alt="discord" /></a>
        <a href="https://twitter.com/nfterrestrials" target="_blank" rel="noreferrer"><img src={twitter} alt="twitter" /></a>
    </div> 

export default Socials;



