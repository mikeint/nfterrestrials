import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import './NavBar.scss' 
import logo from '../../files/images/logoLW.png'

class NavBar extends Component {
    
	render() {
		return (  
            <div className="topNavContainer"> 
                <NavLink to="/" className="navItem"><img src={logo} alt={"icon"} /></NavLink> 
                <NavLink to="/landing/games" className="navItem">Terrestrials</NavLink>
            </div>
        )
  	}
}

export default withRouter((NavBar));