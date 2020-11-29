const userReducer=(state = { username: 'default' },action)=>{
    switch(action.type){
        case "ADD_USERNAME":
            return Object.assign({}, state, { username: action.payload })
        default:
            return state;
    }
}
export default userReducer;