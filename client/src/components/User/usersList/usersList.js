import React,{Component} from "react";
import axios from "axios";
import UserListPart from "./userList.part";
import {Link} from 'react-router-dom';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { connect } from "react-redux";
import * as actions from '../../../store/actions';
import { withRouter } from 'react-router-dom';

//user一覧
class UserList extends Component{
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
            users:this.state.users.filter(ul=>ul._id !== id)
        })
    }
    //user一覧のリスト
    //userListを表示するためにUserListPartを利用する。
    userList(){
        return this.state.users.map(currentUser=>{
            return<UserListPart user={currentUser} deleteUser={this.deleteUser} key={currentUser._id} setUsername={this.props.setUsername}/>;
        })
    }
    render(){
        return(
        //グリッドで一つの塊としているbootstrapの縦分割の考えと同じ
        <Grid container alignItems="center" justify="center">
            <Typography variant="h5" gutterBottom>ユーザー一覧</Typography>
            {/* react-router-domのLinkはtoでurlを変える */}
            <Link to="/user/create">
                新規登録
            </Link>
            <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>userId</TableCell>
                        <TableCell>userName</TableCell>
                        <TableCell>action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.userList()}
                </TableBody>
            </Table>
            </TableContainer>
        </Grid>
        )
    }
}

//mapDispatchToPtops=reduxを対象のコンポーネントでpropsで扱えるようにまとめる
//英語の意味からpropsとしてdispatchを使うということ
function mapDispatchToProps(dispatch) {
    return {
      setUsername(username){
        dispatch(actions.adduser(username));
      }
    };
  }
//connectで設定したmapStateToPropsとmapDispatchToPropsを対象のコンポーネントにつなげることができる。
//connectの第一引数にmapStateToProps、第二引数にmapDispatchToProps。設定されていなければnullでよく、
//mapStateToPropsのみの利用であれば第一引数のみでいい。
  export default connect(null,mapDispatchToProps )(withRouter(UserList));