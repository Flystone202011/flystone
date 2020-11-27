//入力するformのコンポネント
//更新するuser情報を取得して初期表示する。もしreduxFormに更新された情報があればそちらを表示する。

import React,{Component} from "react";
import {reduxForm,Field} from "redux-form";
import {Link} from "react-router-dom";
import userField from "../userField";
import formUpdateFields from "./formUpdateFields";
import { searchUser } from "../userAction";
import * as Validator from "../../UserValidate"

const id = this.props.match.params.id;
const user=searchUser(id);

class UserFormUpdate extends Component{
    
    renderFields(){
        return formUpdateFields.map(formField=>{
            if(formField.name==="password"){
                return(
                <Field
                    key={formField.name}
                    label={formField.label}
                    type="password"
                    name={formField.name}
                    component={userField}
                    validate={[Validator.password, Validator.required]}
                    />
                )
            }else if(formField.name==="passwordConfirm"){
                return(
                    <Field
                        key={formField.name}
                        label={formField.label}
                        type="password"
                        name={formField.name}
                        component={userField}
                        validate={[(value, values) => (
                            Validator.confirmPass(value)(values.password)
                          ), Validator.required]}
                        />
                    )
            }else{
            return(
                <Field
                    key={formField.name}
                    label={formField.label}
                    type="text"
                    name={formField.name}
                    component={userField}
                    validate={[Validator.userId, Validator.required]}
                    />
            );
            }
        });
    }
    render(){
        return(
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onUserSubmit)}>
                    {this.renderFields()}
                    <Link to="/users">
                        一覧に戻る
                    </Link>
                    <button type="submit">
                        確認
                    </button>
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form:"userFormUpdate",
    destroyOnUnmount:false,
    initialValues: { userName: user.username } 
})(UserFormUpdate);