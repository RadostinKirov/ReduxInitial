export default function reducer(state = [], action) {
let lastID = 1;

    if (action.type == "bookAdded") {
        return [
            ...state,
            {
                if: ++lastID,
                description: action.playload.description
            }
        ]
    } else {
        return [state]
    }
}

