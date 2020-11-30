const USERNAME = {
    username: "",
  };

const userReducer=(state = USERNAME,action)=>{
    switch(action.type){
        case "ADD_USERNAME":
            return {...state,username:action.payload}
        default:
            return state;
    }
}
export default userReducer;