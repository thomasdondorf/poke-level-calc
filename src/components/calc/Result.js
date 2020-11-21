import React, { Component } from 'react'

import { totalXp } from './levels';

export default class Header extends Component {

    render() {

        var DAY = 1000*60*60*24;

        var today = new Date();
        var numberOfDays = Math.max(1, (Math.round((today - this.props.startDate)/DAY)-1));

        var xpPerDay = Math.floor(this.props.xp / numberOfDays);

        var xpTodo = totalXp[this.props.goal] - this.props.xp;

        var resultText = '';
        var secondLine = '';
        var firstLine = '';
        if (xpTodo > 0) {
            var daysUntil50 = Math.ceil(xpTodo / xpPerDay);

            if (xpPerDay !== 0) {
                secondLine = '(OR ' + daysUntil50 + ' DAYS)';
            }
            if (daysUntil50 >= 365*20) { // years
                secondLine = 'SORRY...';
                firstLine = `YOU <span className="bigOnly">WILL</span> NEVER REACH <strong> LEVEL ${this.props.goal}</strong> <br></br>`;
            } else if (daysUntil50 >= 340) { // years
                var years = Math.floor(daysUntil50 / 365);
                var restMonths = Math.floor((daysUntil50 % 365) / 31);
                if (restMonths >= 9) {
                    restMonths = 0;
                    years++;
                }
                if (years === 1) {
                    resultText = '1 YEAR';
                } else {
                    resultText = years + ' YEARS';
                }
                if (restMonths >= 3 && years <= 2) {
                    resultText += ', ' + restMonths + ' MONTHS';
                }
                firstLine = `YOU <span className="bigOnly">WILL</span> REACH <strong>LEVEL ${this.props.goal}</strong> IN <div className="timeNeeded"> ${resultText} </div>`
            } else if (daysUntil50 >= 30) { // months
                var months = Math.ceil(daysUntil50 / 30.5);
                if (months === 1) {
                    resultText = '1 MONTH';
                } else {
                    resultText = months + ' MONTHS';
                }
                firstLine = `YOU <span className="bigOnly">WILL</span> REACH <strong>LEVEL ${this.props.goal}</strong> IN <div className="timeNeeded"> ${resultText} </div>`
            } else {
                resultText = daysUntil50 + ' DAYS';
                secondLine = '(KEEP IT UP!)';
                firstLine = `YOU <span className="bigOnly">WILL</span> REACH <strong>LEVEL ${this.props.goal}</strong> IN <div className="timeNeeded"> ${resultText} </div>`
            }
        } else {
            firstLine = 'YOU DID IT!';
            secondLine = 'CONGRATULATIONS 🎉';
        }

        return (

            <div className="result"
                dangerouslySetInnerHTML={{__html: `<div className="result">
                            YOU ARE MAKING:<br />
                            <strong>${xpPerDay} XP / DAY</strong><br />
                            <br /> 
                            ${firstLine} 
                            ${secondLine}
                            </div>`}}
                            >
            </div>
        );
    }
}