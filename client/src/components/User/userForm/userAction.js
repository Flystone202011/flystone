import axios from "axios";
//コンポーネントでwebAPIとの処理を書くのではなく、
//action部分を分割して呼び出す形にしている。

//登録処理
export const submitNewUser=(values,history)=>{
    axios.post("http://localhost:5000/users",values)
            .then(res=>{
                console.log(res.data);
                history.push("/userList");
            })
            .catch((err)=>{
                console.log(err);
            })
}

//更新処理
export const submitUpdateUser=(id,values,history)=>{
    axios.put("http://localhost:5000/users/"+id,values)
            .then(res=>{
                console.log(res.data);
                history.push("/userList");
            })
            .catch((err)=>{
                console.log(err);
            })
}

//user検索処理
export const searchUser=(id)=>{
    axios.get("http://localhost:5000/users/"+id)
            .then(res=>{
                return res.data;
            })
            .catch((err)=>{
                console.log(err);
            })
}