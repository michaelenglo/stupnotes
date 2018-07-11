const initialState = {
    id1: {
        label: 'work item 1',
        timeStart: 1531296059620,
        timeFinish: 1531296366853,
    },
};

const logs = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_LOG': {
            const newState = {...state};

            newState[action.timeStart] = {
                timeStart: action.timeStart,
                timeFinish: action.timeFinish,
            }

            return newState;
        }

        default: return state;
    }
}

export default logs;