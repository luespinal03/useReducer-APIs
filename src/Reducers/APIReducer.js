

export default function APIReducer(APIState, action) {
    switch (action.type) {
        case "ADD_PAYLOAD_POSTS":
            const payload = action.payload.map((e, i) => {
                return {
                    id: e.id,
                    userId: e.userId,
                    title: e.title,
                    body: e.body,
                };
            });
            return payload;
        case "ADD_PAYLOAD_USERS":
            const payloadUsers = action.payload.map((e, i) => {
                return {
                    id: e.id,
                    name: e.name,
                    username: e.username,
                    email: e.email,
                    phone: e.phone,
                    //   address: e.address,
                };
            });
            return payloadUsers;
        case "ADD_PAYLOAD_TODOS":
            const payloadTodos = action.payload.map((e, i) => {
                return {
                    userId: e.userId,
                    id: e.id,
                    title: e.title,
                    completed: e.completed,
                };
            });
            return payloadTodos;
        default:
            return APIState;
    }
}