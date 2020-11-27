//入力するformのコンポネント

import React,{Component} from "react";
import {reduxForm,Field} from "redux-form";
import {Link} from "react-router-dom";
import userField from "../userField";
import formNewFields from "./UserFormNew/formNewFields";

class UserFormNew extends Component{
    renderFields(){
        return formNewFields.map(formField=>{
            return(
                <Field
                    key={formField.name}
                    label={formField.label}
                    type="text"
                    name={formField.name}
                    component={userField}/>
            );
        });
    }
    render(){
        return(
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onUserSubmit)}>
                    {this.renderFields()}
                    <button type="submit">
                        確認
                    </button>
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form:"userForm",
    destroyOnUnmount:false,
})(UserFormNew);