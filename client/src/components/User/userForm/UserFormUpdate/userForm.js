//入力するformのコンポネント
//更新するuser情報を取得して初期表示する。もしreduxFormに更新された情報があればそちらを表示する。

import React,{Component} from "react";
import {reduxForm,Field} from "redux-form";
import userField from "../userField";
import formUpdateFields from "./formUpdateFields";
import * as Validator from "../../UserValidate"
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

class UserFormUpdate extends Component{

    renderFields(){
        //formUpdateFieldsで表示するものを設定したので、field部品にひとつづつ取り出してセットして表示する。
        return formUpdateFields.map(formField=>{
            if(formField.name==="password"){
                return(
                //redux-formを利用するためのField。importして利用。
                <Field
                    key={formField.name}
                    label={formField.label}
                    type={formField.type}
                    name={formField.name}
                    //扱う形式のコンポーネントを設定できる。
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
                        validate={[(value, values) => (Validator.confirmPass(value)(values.password)), Validator.required]}
                        />
                    )
            }else{
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
            }
        });
    }
    render(){
        return(
            <Grid container alignItems="center" justify="center">
                {/* ボタンのアクションを呼び出し先で表示できるように設定している */}
                <form onSubmit={this.props.handleSubmit(this.props.onUserSubmit)}>
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
//これはredux-formで初期値を設定する方法で、redux(ここではstate.user.username)から取得して設定している。
const mapStateToProps = (state) => ({
    initialValues: {username:state.user.username},
  })

//mapStateToPropsのconnectを行い、reduxFormで入力内容をreduxに入れる。formはstoreで登録したredux-formのもので、ここではuserFormUpdateで保存する。
//そしてUserFormUpdateにつなげる。
  export default connect(
    mapStateToProps
  )(reduxForm({
     form: "userFormUpdate", 
     destroyOnUnmount:false,
  })(UserFormUpdate));