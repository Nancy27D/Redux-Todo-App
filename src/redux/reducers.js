import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from './actions';
// import { todos } from './states';

let todos = [
    {
        id:1,
        name: "Go on Walk",
    },
]
export let reducer = (state = todos, action) => {
    let newTodos;
    switch (action.type) {
        case ADD_TODO:
            newTodos = [...state];
            newTodos.push(action.payload);
            return newTodos;
        case DELETE_TODO:
            newTodos = [...state];
            console.log(newTodos,"newTodos 1")
            newTodos = newTodos.filter(todo => todo.id != action.payload);
            console.log(newTodos,"newTodos 2")

            console.log(newTodos.filter(todo => todo.id != action.payload))
            return newTodos;
        case UPDATE_TODO:
            newTodos = [...state];
            let index = -1;
            for (let i = 0; i < newTodos.length; i++) {
                index++;
                if (newTodos[i].id == action.payload.id) {
                    break;
                }

            }
            if (index != -1) {
                newTodos[index] = action.payload;
                return newTodos;
            }

    }
    return state;
}