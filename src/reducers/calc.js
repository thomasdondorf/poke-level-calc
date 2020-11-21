
import { SET_XP, SET_START_DATE, SET_GOAL } from '../actions/calc';
import querystring from 'querystring';

var query = {};
if (location.hash && location.hash.length > 0) {
    query = querystring.parse(location.hash.substr(1));
}

let defaultState = parseDate(query.date || 'mm/dd/2016');
defaultState.xp = parseXp(query.xp || '?');
defaultState.goal = parseInt(query.level, 10);
if (defaultState.goal !== 30 && defaultState.goal !== 50) {
    defaultState.goal = 40;
}else if (defaultState.goal !== 40 && defaultState.goal !== 50) {
    defaultState.goal = 30;
}else if (defaultState.goal !== 30 && defaultState.goal !== 40) {
    defaultState.goal = 50;
}

function newState(state) {
    var hash = [];
    if (state.xp !== '?') {
        hash.push('xp='+state.xp);
    }
    if (state.date !== null) {
        hash.push('date='+state.dateStr);
    }
    if (state.goal !== 40) {
        hash.push('level=' + state.goal);
    }
    var fullHash = hash.length === 0 ? '/' : '#' + hash.join('&');
    history.replaceState({}, "Pokemon Go Trainer Level", fullHash);
    return state;
}

function parseXp(xp) {
    var newXp = Math.min(1760000000, parseInt(xp.replace(/[^0-9]/g, ''), 10)) || 0;
    if (xp === '?') {
        newXp = '?';
    }
    return newXp;
}

function parseDate(dateStr) {

    var correctDate = /\d{1,2}\/\d{1,2}\/(201\d|1\d)/;
    var date = new Date(dateStr);
    var newDate = null;
    if (!isNaN(date.getTime()) && correctDate.test(dateStr)) {
        newDate = date;
    }
    return {
        dateStr: dateStr,
        date : newDate
    };
}

export default function calc(state = defaultState, action) {
    switch (action.type) {
        case SET_XP:
            return newState(Object.assign({}, state, {
                xp: parseXp(action.xp)
            }));
        case SET_START_DATE:
            return newState(Object.assign({}, state, parseDate(action.dateStr)));
        case SET_GOAL:
            return newState(Object.assign({}, state, {
                goal : action.level
            }));
        default:
            return state;
    }
}
