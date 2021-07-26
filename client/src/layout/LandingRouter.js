import React from "react"
import { Switch, Route } from "react-router-dom"
import NavBar from './components/NavBar/NavBar'

import Terrestrials from './pages/Terrestrials/Terrestrials'

function LandingRouter({ match }) {
    return ( 
        <> 
            <div className="lp2_menu"><NavBar /></div> 
            <Switch> 
                <Route exact path="/landing/terrestrials" component={Terrestrials} />
            </Switch> 
        </>
    );
}

export default LandingRouter;

