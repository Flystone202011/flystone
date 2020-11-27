//入力するformのコンポネント

import React,{Component} from "react";
import {reduxForm,Field} from "redux-form";
import {Link} from "react-router-dom";
import userField from "../userField";
import formNewFields from "./formNewFields";
import * as Validator from "../../UserValidate"

class UserFormNew extends Component{
    renderFields(){
        return formNewFields.map(formField=>{
            if(formField.name==="password"){
                return(
                <Field
                    key={formField.name}
                    label={formField.label}
                    type={formField.type}
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
                        type={formField.type}
                        name={formField.name}
                        component={userField}
                        validate={[(value, values) => (
                            Validator.confirmPass(value)(values.password)
                          ), Validator.required]}
                        />
                    )
            }else if(formField.name==="userId"){
            return(
                <Field
                    key={formField.name}
                    label={formField.label}
                    type={formField.type}
                    name={formField.name}
                    component={userField}
                    validate={[Validator.userId, Validator.required]}
                    />
            );
            }else{
                return(
                    <Field
                        key={formField.name}
                        label={formField.label}
                        type={formField.type}
                        name={formField.name}
                        component={userField}
                        validate={Validator.required}
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
    form:"userFormNew",
    destroyOnUnmount:false,
})(UserFormNew);