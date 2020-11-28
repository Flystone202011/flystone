//入力するformのコンポネント

import React,{Component} from "react";
import {reduxForm,Field} from "redux-form";
import userField from "../userField";
import formNewFields from "./formNewFields";
import * as Validator from "../../UserValidate";
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';


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
            <Grid container alignItems="center" justify="center">
                <form  onSubmit={this.props.handleSubmit(this.props.onUserSubmit)}>
                    {this.renderFields()}
                    <Link href="/userList">
                        一覧に戻る
                    </Link>
                    <Button variant="contained" type="submit" color="primary">
                        確認
                    </Button>
                </form>
            </Grid>
        )
    }
}

export default reduxForm({
    form:"userFormNew",
    destroyOnUnmount:false,
})(UserFormNew);