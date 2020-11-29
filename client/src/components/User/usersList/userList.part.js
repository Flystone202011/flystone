import React from "react";
import Link from '@material-ui/core/Link';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { useDispatch } from 'react-redux';
import { adduser } from "../../../store/actions";

const UserListPart=(props)=>{
    
    const dispatch =useDispatch();
    return(
    <TableRow>
        <TableCell>{props.user.userId}</TableCell>
        <TableCell>{props.user.username}</TableCell>
        <TableCell>
            <Link href={"user/edit/"+props.user._id}onClick={()=>dispatch(adduser(props.user.username))}>edit</Link>|<Link href="#" onClick={()=>{props.deleteUser(props.user._id)}}>delete</Link>
        </TableCell>
    </TableRow>
)
}

export default UserListPart;