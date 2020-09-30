export const addTodoAction = todo => ({
    type : "ADD_TODO",  //대문자 = 상수라는뜻
    payload : todo
})
export const toggleTodoAction = todoId => ({ // () 는 json return
    type : "TOGGLE_TODO",
    payload : todoId
})
export const deleteTodoAction = todoId => ({
    type : "DELETE_TODO",
    payload : todoId
})

const initialState = {todos : []}

const todoReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_TODO" :
            return {...state, todos: [...state.todos, action.payload ]}  //상태 state.todos 에 있는 todos 를 담아라   ... : 나머진 냅두고 내가 바꾼거만
        case "TOGGLE_TODO":
            return {...state, todos:
                                state.todos.map(todo => todo.todoId === action.payload ? //map 외부에서 뻉뻉이 for처럼
                                    {...todo,complete: !todo.complete}: todo)
            }
        case "DELETE_TODO":
            return {...state, todos: state.todos.filter(todo => todo.todoId !== action.payload)}
        default:
            return state
    }
}

export default todoReducer
