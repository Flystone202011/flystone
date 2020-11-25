import React,{Component} from "react";
import axios from "axios";
import UserListPart from "../parts/userList.part";

//user一覧
export default class UserList extends Component{
    constructor(props){
        super(props);

        this.deleteUser=this.deleteUser.bind(this);
        this.state={users:[]};
    }
    //component生成時にユーザー情報取得
    componentDidMount(){
        axios.get("http://localhost:5000/users")
            .then(res=>{
                this.setState({users:res.data});
            })
            .catch((err)=>{
                console.log(err);
            })
    }
    //user削除
    deleteUser(id){
        axios.delete("http://localhost:5000/users/"+id)
            .then(res=>console.log(res.data));

        this.setState({
            users:this.state.users.filter(ul=>ul._Id !== id)
        })
    }
    //user一覧のリスト
    userList(){
        return this.state.users.map(currentUser=>{
            return<UserListPart user={currentUser} deleteUser={this.deleteUser} key={currentUser._id}/>;
        })
    }

    render(){
        return(
        <div>
            <h3>ユーザー一覧</h3>
            <table>
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>userName</th>
                    </tr>
                </thead>
                <tbody>
                    {this.userList()}
                </tbody>
            </table>
        </div>
        )
    }
}