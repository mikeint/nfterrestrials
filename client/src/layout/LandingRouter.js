import React from "react"
import { Switch, Route } from "react-router-dom"
import NavBar from './components/NavBar/NavBar'

import Terrestrials from './pages/Terrestrials/Terrestrials'

function LandingRouter({ match }) {
    return ( 
        <> 
            <NavBar />
            <Switch> 
                <Route exact path="/terrestrials" component={Terrestrials} />
            </Switch> 
        </>
    );
}

export default LandingRouter;

