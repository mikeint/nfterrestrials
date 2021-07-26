import React, { Component } from 'react';
import './Terrestrials.scss'
 
import masterList from '../../files/masterJSON/masterJSON.json';

const initialState = {
    filterArray: [
        { name: "accState", value: "ACCESSORIES" },
        { name: "backwearState", value: "BACK WEAR" },
        { name: "bodyState", value: "BODY" },
        { name: "chestState", value: "CHEST" },
        { name: "galaxyState", value: "GALAXY" },
        { name: "headwearState", value: "HEAD WEAR" },
    ]
};
 
class Terrestrials extends Component {
    constructor(props) {
        super(props);
        this.state = initialState 
    }
 
    change = (e) => {
        const { filterArray } = this.state;
        const target = e.target; 
        this.setState({
            filterArray: {
                ...filterArray,
                [target.name]: target.value 
            }
        }, () => {
            this.showAliens(filterArray);
        });
    }

    reset = () => {
        this.setState(initialState, () => {
            console.log(this.state.filterArray);
        }); 
    }

    showAliens = () => {
        return (
            masterList.map((item, index) => (
                <div key={index} className="terrestrialResultBox">
                    <div className="terrestrialResultBoxInner"> 
                        <img src={require('../../files/masterPNGS/' + item.image).default} alt={item.image} /> 
                    </div>
                </div>
            ))
        )
    }

	render() {
        const { filterArray } = this.state;

		return (
            <div className="filterContainer">
                
                <div className="filterSelections">
                    <select
                        className="filterBtn accFilter"
                        name={"accState"}
                        onClick={this.clickDropdown}
                        onChange={this.change}
                        value={filterArray.accState}
                        data-attr={filterArray.accState}
                    >
                        <option value={filterArray.accState} hidden>{filterArray.accState}</option>
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
                        value={filterArray.backwearState}
                        data-attr={filterArray.backwearState}
                    >
                        <option value={filterArray.backwearState} hidden>{filterArray.backwearState}</option>
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
                        value={filterArray.bodyState}
                        data-attr={filterArray.bodyState}
                    >
                        <option value={filterArray.bodyState} hidden>{filterArray.bodyState}</option>
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
                        value={filterArray.chestState}
                        data-attr={filterArray.chestState}
                    >
                        <option value={filterArray.chestState} hidden>{filterArray.chestState}</option>
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
                        value={filterArray.galaxyState}
                        data-attr={filterArray.galaxyState}
                    >
                        <option value={filterArray.galaxyState} hidden>{filterArray.galaxyState}</option>
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
                        value={filterArray.headwearState}
                        data-attr={filterArray.headwearState}
                    >
                        <option value={filterArray.headwearState} hidden>{filterArray.headwearState}</option>
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
                        {this.showAliens()}
                    </div> 
                </div>


            </div>
		)
	}
}

export default Terrestrials