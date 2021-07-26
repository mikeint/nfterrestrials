import React, { Component } from 'react';
import './Terrestrials.scss'

import s1 from '../../files/images/species/s1.png'
import s2 from '../../files/images/species/s2.png'
import s3 from '../../files/images/species/s3.png'
import s4 from '../../files/images/species/s4.png'
import s5 from '../../files/images/species/s5.png'
import s6 from '../../files/images/species/s6.png'
import s7 from '../../files/images/species/s7.png'
import s8 from '../../files/images/species/s8.png'

 
class Terrestrials extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accState:  "ACCESSORIES",
            backwearState: "BACK WEAR",
            bodyState: "BODY",
            chestState: "CHEST",
            galaxyState: "GALAXY",
            headwearState: "HEAD WEAR"
        };
    }

    change = (e) => {
        this.setState({galaxyState: e.target.value});
    }
    change = (e) => {
        const target = e.target;
        this.setState({
            [target.name]: target.value
        });
    }
    reset = () => {
        this.setState({accState: "ACCESSORIES"}); 
        this.setState({backwearState: "BACK WEAR"}); 
        this.setState({bodyState: "BODY"}); 
        this.setState({chestState: "CHEST"}); 
        this.setState({galaxyState: "GALAXY"}); 
        this.setState({headwearState: "HEAD WEAR"}); 
    }

	render() {
		return (
            <div className="filterContainer">
                
                <div className="filterSelections">
                    <select
                        className="filterBtn accFilter"
                        name={"accState"}
                        onClick={this.clickDropdown}
                        onChange={this.change}
                        value={this.state.accState}
                        data-attr={this.state.accState}
                    >
                        <option value={this.state.accState} hidden>{this.state.accState}</option>
                        <option value="Crypto Cannon">Crypto Cannon</option>
                        <option value="Gold Lazer Gun">Gold Lazer Gun</option>
                        <option value="Dagger">Dagger</option>
                        <option value="Lazer Gun">Lazer Gun</option>
                        <option value="Galactic Cannon">Galactic Cannon</option>
                        <option value="Shotgun">Shotgun</option> 
                    </select>

                    <select
                        className="filterBtn backwearFilter"
                        name={"backwearState"}
                        onClick={this.clickDropdown}
                        onChange={this.change}
                        value={this.state.backwearState}
                        data-attr={this.state.backwearState}
                    >
                        <option value={this.state.backwearState} hidden>{this.state.backwearState}</option>
                        <option value="Gold Sword">Gold Sword</option>
                        <option value="Gold Wings">Gold Wings</option>
                        <option value="White Wings">White Wings</option>
                        <option value="Gold Jetpack">Gold Jetpack</option>
                        <option value="Wings">Wings</option>
                        <option value="Jetpack">Jetpack</option>
                        <option value="White Jetpack">White Jetpack</option>
                        <option value="Axe">Axe</option>
                        <option value="Double Sword">Double Sword</option>
                        <option value="Sword">Sword</option>
                        <option value="Gold Double Sword">Gold Double Sword</option>
                    </select>

                    <select
                        className="filterBtn bodyFilter"
                        name={"bodyState"}
                        onClick={this.clickDropdown}
                        onChange={this.change}
                        value={this.state.bodyState}
                        data-attr={this.state.bodyState}
                    >
                        <option value={this.state.bodyState} hidden>{this.state.bodyState}</option>
                        <option value="Aqua">Aqua</option>
                        <option value="Blue">Blue</option>
                        <option value="Green">Green</option>
                        <option value="Grey">Grey</option>
                        <option value="Orange">Orange</option>
                        <option value="Pink">Pink</option>
                        <option value="Purple">Purple</option>
                        <option value="Red">Red</option>
                        <option value="White">White</option>
                        <option value="Yellow">Yellow</option>
                    </select>

                    <select
                        className="filterBtn chestFilter"
                        name={"chestState"}
                        onClick={this.clickDropdown}
                        onChange={this.change}
                        value={this.state.chestState}
                        data-attr={this.state.chestState}
                    >
                        <option value={this.state.chestState} hidden>{this.state.chestState}</option>
                        <option value="Black Armor">Black Armor</option>
                        <option value="Gold Armor">Gold Armor</option>
                        <option value="White Armor">White Armor</option>
                        <option value="Red Vest">Red Vest</option>
                        <option value="Purple Vest">Purple Vest</option>
                        <option value="Blue Vest">Blue Vest</option>
                        <option value="Green Vest">Green Vest</option>
                    </select>

                    <select
                        className="filterBtn galaxyFilter"
                        name={"galaxyState"}
                        onClick={this.clickDropdown}
                        onChange={this.change}
                        value={this.state.galaxyState}
                        data-attr={this.state.galaxyState}
                    >
                        <option value={this.state.galaxyState} hidden>{this.state.galaxyState}</option>
                        <option value="Andromeda">Andromeda</option>
                        <option value="Blackhole">Blackhole</option>
                        <option value="Cartwheel">Cartwheel</option>
                        <option value="Cigar">Cigar</option>
                        <option value="Elliptical">Elliptical</option>
                        <option value="Leo">Leo</option>
                        <option value="Sombrero">Sombrero</option>
                        <option value="Spiral">Spiral</option>
                        <option value="Milky Way">Milky Way</option>
                        <option value="Sunflower">Sunflower</option>
                    </select>

                    <select
                        className="filterBtn headwearFilter"
                        name={"headwearState"}
                        onClick={this.clickDropdown}
                        onChange={this.change}
                        value={this.state.headwearState}
                        data-attr={this.state.headwearState}
                    >
                        <option value={this.state.headwearState} hidden>{this.state.headwearState}</option>
                        <option value="Enemy Tracker">Enemy Tracker</option>
                        <option value="Gold Green Lazer Optics">Gold Green Lazer Optics</option>
                        <option value="Gold Red Lazer Optics - Red">Gold Red Lazer Optics - Red</option>
                        <option value="Gold Green Mono Optic">Gold Green Mono Optic</option>
                        <option value="Gold Red Mono Optic">Gold Red Mono Optic</option>
                        <option value="Blue Mono Optic">Blue Mono Optic</option>
                        <option value="Green Mono Optic">Green Mono Optic</option>
                        <option value="Red Mono Optic">Red Mono Optic</option>
                        <option value="Green Lazer Optics">Green Lazer Optics</option>
                        <option value="Red Lazer Optics">Red Lazer Optics</option>
                        <option value="Blue Lazer Optics">Blue Lazer Optics</option>
                    </select>
                    <button className="resetFilterBtn" onClick={this.reset}>reset</button>
                </div>

                <div className="filterResultsContainer"> 
                    <div className="resultWrap"> 
                        <div className="terrestrialResultBox">
                            <div className="terrestrialResultBoxInner">
                                <img src={s4} alt={"s4"}/> 
                            </div>
                        </div>
                        <div className="terrestrialResultBox">
                            <div className="terrestrialResultBoxInner">
                                <img src={s2} alt={"s2"}/> 
                            </div>
                        </div>
                        <div className="terrestrialResultBox">
                            <div className="terrestrialResultBoxInner">
                                <img src={s3} alt={"s3"}/> 
                            </div>
                        </div>
                        <div className="terrestrialResultBox">
                            <div className="terrestrialResultBoxInner">
                                <img src={s5} alt={"s5"}/> 
                            </div>
                        </div>
                        <div className="terrestrialResultBox">
                            <div className="terrestrialResultBoxInner">
                                <img src={s8} alt={"s8"}/> 
                            </div>
                        </div>
                        <div className="terrestrialResultBox">
                            <div className="terrestrialResultBoxInner">
                                <img src={s6} alt={"s6"}/> 
                            </div>
                        </div>
                        <div className="terrestrialResultBox">
                            <div className="terrestrialResultBoxInner">
                                <img src={s7} alt={"s7"}/> 
                            </div>
                        </div>
                        <div className="terrestrialResultBox">
                            <div className="terrestrialResultBoxInner">
                                <img src={s1} alt={"s1"}/> 
                            </div>
                        </div>  
                    </div> 
                </div>


            </div>
		)
	}
}

export default Terrestrials