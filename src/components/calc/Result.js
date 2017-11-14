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
        if (xpTodo > 0) {
            var daysUntil40 = Math.ceil(xpTodo / xpPerDay);

            if (xpPerDay !== 0) {
                secondLine = '(OR ' + daysUntil40 + ' DAYS)';
            }
            if (daysUntil40 >= 365*20) { // years
                resultText = 'NEVER ';
                secondLine = 'SORRY...';
            } else if (daysUntil40 >= 340) { // years
                var years = Math.floor(daysUntil40 / 365);
                var restMonths = Math.floor((daysUntil40 % 365) / 31);
                if (restMonths >= 9) {
                    restMonths = 0;
                    years++;
                }
                if (years === 1) {
                    resultText = '1 YEAR';
                } else {
                    resultText = years + ' YEARS';
                }

                if (restMonths === 1){
                    resultText = ', ' + restMonths + ' MONTH';
                } else if (restMonths >= 2 && years <= 2) {
                    resultText += ', ' + restMonths + ' MONTHS';
                }
            } else if (daysUntil40 >= 30) { // months
                var months = Math.ceil(daysUntil40 / 30.5);
                if (months === 1) {
                    resultText = '1 MONTH';
                } else {
                    resultText = months + ' MONTHS';
                }
            } else {
                resultText = daysUntil40 + ' DAYS';
                secondLine = '(KEEP IT UP!)';
            }
        } else {
            resultText = 'YOU DID IT!';
            secondLine = 'BLEEP, BLOOP...';
        }

        return (

            <div className="result">
                YOU ARE MAKING:<br />
                <strong>{xpPerDay} XP / DAY</strong><br />
                <br />
                YOU <span className="bigOnly">WILL</span> REACH <strong>LEVEL {this.props.goal}</strong> IN
                <div className="timeNeeded">{resultText}</div>
                {secondLine}
            </div>
        );
    }
}
