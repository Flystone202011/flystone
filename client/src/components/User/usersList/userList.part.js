import React from "react";
import Link from '@material-ui/core/Link';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const UserListPart=props=>(
    <TableRow>
        <TableCell>{props.user.userId}</TableCell>
        <TableCell>{props.user.username}</TableCell>
        <TableCell>
            <Link href={"user/edit/"+props.user._id}>edit</Link>|<Link href="#" onClick={()=>{props.deleteUser(props.user._id)}}>delete</Link>
        </TableCell>
    </TableRow>
)

export default UserListPart;