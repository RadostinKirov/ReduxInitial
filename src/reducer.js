let lastID = 0;

export default function reducer(state = [], action) {

    if (action.type == "bookAdded") {
        return [
            ...state,
            {
                id: ++lastID,
                description: action.payload.description,
                isRead: false
            }
        ]
    } else if (action.type == "delete") {
        return state.filter(book => book.id !== action.payload.id);

    } else {
        return state;
    }
}

