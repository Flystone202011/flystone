import React from "react";
import {Link} from "react-router-dom";

const UserListPart=props=>(
    <tr>
        <td>{props.user.userId}</td>
        <td>{props.user.username}</td>
        <td>
            <Link to={"user/edit/"+props.user._id}>edit</Link>|<a href="#" onClick={()=>{props.deleteUser(props.user._id)}}>delete</a>
        </td>
    </tr>
)

export default UserListPart;