
export const SET_XP = 'SET_XP';
export const SET_START_DATE = 'SET_START_DATE';
export const SET_GOAL = 'SET_GOAL';

export function setXp(xp) {
    return {
        type: SET_XP,
        xp
    };
}

export function setStartDate(dateStr) {
    return {
        type: SET_START_DATE,
        dateStr
    };
}

export function setGoal(level) {
    return {
        type: SET_GOAL,
        level
    };
}