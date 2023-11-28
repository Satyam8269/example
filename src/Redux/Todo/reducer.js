import { ADD_TODO } from "./action"

const initState = {
    todos:[]
}

export const todoReducer = (state=initState, action)=>{
    switch(action.type){
        case ADD_TODO:{
            return{
                ...state,
                todos: [...state.todos,action.payload]
            }
        }
        default:{
            return state;
        }
    }
}