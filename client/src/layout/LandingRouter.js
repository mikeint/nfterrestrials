import React from "react";
import { Switch, Route } from "react-router-dom"
import NavBar from './components/NavBar/NavBar'

import Terrestrials from './pages/Terrestrials/Terrestrials';


function LandingRouter({ match }) {
    return ( 
        <React.Fragment>
            <div className="lp2_container">
                <div className="lp2_menu"><NavBar /></div>
                <div className="lp2_body">
                    <Switch> 
                        <Route exact path="/landing/terrestrials" component={Terrestrials} />
                    </Switch>
                </div> 
            </div>
        </React.Fragment>
    );
}

export default LandingRouter;

