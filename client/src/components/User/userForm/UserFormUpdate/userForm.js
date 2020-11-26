//入力するformのコンポネント
//更新するuser情報を取得して初期表示する。もしreduxFormに更新された情報があればそちらを表示する。

import React,{Component} from "react";
import {reduxForm,Field} from "redux-form";
import {Link} from "react-router-dom";
import userField from "./userField";
import formUpdateFields from "./formUpdateFields";

class UserForm extends Component{
    renderFields(){
        return formUpdateFields.map(formField=>{
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
})(UserForm);