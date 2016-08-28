import React, { Component } from 'react'

import levels, {totalXp} from './levels';

var levelsToShow = [1,25,30,33,35,36,37,38,39,40];
var levelMajor = [1,25,30,35,40];
var levelStats = [];

var xpSoFar = 0;
levels.forEach((xp, index) => {
    var level = index+1;
    xpSoFar += xp;
    if (levelsToShow.indexOf(level) !== -1) {
        levelStats.push({
            level : level,
            totalXp : xpSoFar,
            perc : xpSoFar / totalXp,
            minor : levelMajor.indexOf(level) === -1
        });
    }
});

export default class Header extends Component {

    render() {

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