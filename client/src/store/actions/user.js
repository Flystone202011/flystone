//reducerを呼び出すためのアクション、引数あるなら設定する必要ある。
export const adduser=(username)=>{
    return{
        type:"ADD_USERNAME",
        payload:username
    }
}