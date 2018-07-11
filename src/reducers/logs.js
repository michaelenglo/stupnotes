const logs = (state = {}, action) => {
    switch(action.type) {
        case 'ADD_LOG': {
            const newState = {...state};

            newState[action.timeFinish] = {
                label: action.label,
                timeStart: action.timeStart,
                timeFinish: action.timeFinish,
            }

            return newState;
        }

        default: return state;
    }
}

export default logs;