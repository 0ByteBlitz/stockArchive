import React, { Component } from 'react'; 
import "../App.css";
import Stocktable from './stocktable';

class Highest extends Component {
    render(){
        return(
            <div>
            <div className = "What_s_trending_" >Highest Gainers
            </div>
            <div className ="note">
                <ul>
                    <li>Find specific stock by providing name in box below symbol.</li>
                    <li>Apply more filters to get specific data</li>
                </ul>
            </div>
            <Stocktable />
            </div>
        );
    }
}

export default Highest;