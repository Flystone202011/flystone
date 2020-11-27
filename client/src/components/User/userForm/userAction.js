import axios from "axios";

export const submitNewUser=(values,history)=>{
    axios.post("http://localhost:5000/users",values)
            .then(res=>{
                console.log(res.data);
                history.push("/users");
            })
            .catch((err)=>{
                console.log(err);
            })
}

export const submitUpdateUser=(id,values,history)=>{
    axios.patch("http://localhost:5000/users"+id,values)
            .then(res=>{
                console.log(res.data);
                history.push("/users");
            })
            .catch((err)=>{
                console.log(err);
            })
}
export const searchUser=(id)=>{
    axios.get("http://localhost:5000/users"+id)
            .then(res=>{
                return res.date;
            })
            .catch((err)=>{
                console.log(err);
            })
}