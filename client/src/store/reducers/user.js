//初期値
const USERNAME = {
    username: "",
  };
//対応するtypeの設定とその時の処理
const userReducer=(state = USERNAME,action)=>{
    switch(action.type){
        case "ADD_USERNAME":
            return {...state,username:action.payload}
        default:
            return state;
    }
}
export default userReducer;