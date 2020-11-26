import axios from "axios";

export const submitUser=(values)=>{
    axios.post("http://localhost:5000/users",values)
            .then(res=>{
                this.setState({users:res.data});
            })
            .catch((err)=>{
                console.log(err);
            })
}