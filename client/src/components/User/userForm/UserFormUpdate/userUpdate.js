//user更新フォームの組み立て

import React,{Component} from "react";
import {reduxForm} from "redux-form";
import UserForm from "./userForm";
import UserFormReview from "./userFormReview";
class UserUpdate extends Component{
    state={
        showFormReview:false,
    };
    
    renderContent(){
        if(this.state.showFormReview){
            return(
                <UserFormReview
                    onCancel={()=>this.setState({showFormReview:false})}
                />
            );
        }
        return(
            <UserForm
                onUserSubmit={()=>this.setState({showFormReview:true})}
            />
        );
    }
    render(){
        return <div>{this.renderContent()}</div>;
    }
}
export default reduxForm({form:"userFormUpdate"})(UserUpdate);