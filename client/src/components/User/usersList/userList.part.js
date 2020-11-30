import React from "react";
import {Link} from 'react-router-dom';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

//userListで利用するユーザーを表示する行
//material-uiを利用しているが、Linkはリダイレクトするので使うことができない
const UserListPart=(props)=>{
    
    return(
    <TableRow>
        <TableCell>{props.user.userId}</TableCell>
        <TableCell>{props.user.username}</TableCell>
        <TableCell>
            <Link to={"/user/edit/"+props.user._id}onClick={()=>props.setUsername(props.user.username)}>edit</Link>|<Link to="#" onClick={()=>{props.deleteUser(props.user._id)}}>delete</Link>
        </TableCell>
    </TableRow>
)
}

export default UserListPart;