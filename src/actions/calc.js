
export const SET_XP = 'SET_XP';
export const SET_START_DATE = 'SET_START_DATE';

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