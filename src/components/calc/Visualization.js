import React, { Component } from 'react'

import levels, {totalXp} from './levels';

var levelsToShow = {
    30 : [1,15,20,23,25,26,27,28,29,30],
    40 : [1,25,30,33,35,36,37,38,39,40],
    50 : [1,40,42,43,44,45,46,47,48,49,50]
}
var levelMajor = {
    30 : [1,15,20,25,30],
    40 : [1,25,30,35,40],
    50 : [1,30,40,45,50]
};

export default class Header extends Component {

    render() {

        var levelStats = [];

        var xpSoFar = 0;
        levels.forEach((xp, index) => {
            var level = index+1;
            xpSoFar += xp;
            if (levelsToShow[this.props.goal].indexOf(level) !== -1) {
                levelStats.push({
                    level : level,
                    totalXp : xpSoFar,
                    perc : xpSoFar / totalXp[this.props.goal],
                    minor : levelMajor[this.props.goal].indexOf(level) === -1
                });
            }
        });
        var elems = [];
        levelStats.forEach((level) => {
            var levelStyle = {
                left : (100 * level.perc) + '%'
            };
            elems.push(<div className={"xpLabel" + (level.minor?' minor':'')} style={levelStyle} key={level.level}>
                <span className="text">{level.level}</span>
            </div>);
        });
        var youStyle = {
            left : (100 * this.props.perc) + '%'
        };
        return (
            <div className="visualization">
                <div className="xpProg">
                    <div className="xpProgBg"></div>
                    {elems}
                    <div className="xpLabel you" style={youStyle}></div>
                    <div className="youBox" style={youStyle}>
                        <div className="innerBox">YOU</div>
                    </div>
                </div>
            </div>
        );
    }
}