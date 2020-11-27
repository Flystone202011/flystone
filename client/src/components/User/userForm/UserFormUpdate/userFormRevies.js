//フォーム入力内容を確認する
import React from "react";
import {connect} from "react-redux";
import formUpdateFields from "./formUpdateFields";
import {withRouter} from "react-router-dom";
import { submitUpdateUser } from "./userAction";
import {searchUser} from "../userAction"

const UserFormReview = ({onCancel,formValues,history})=>{
    const reviewFields=formUpdateFields.map(formField=>{
        return(
            <div key={formField.name}>
                <label>{formField.label}</label>
                <div>{formValues[formField.name]}</div>
            </div>
        );
    });
    const id = this.props.match.params.id;
    return(
        <div>
            <h5>入力内容確認</h5>
            {reviewFields}
            <butto onClick={onCancel}>
                戻る
            </butto>
            <button onClick={()=>submitUpdateUser(id,formValues,history)}>
                登録
            </button>
        </div>
    );
};
//reduxの値を取得
function mapStateToProps(state) {
    return { formValues: state.form.userForm.values };
}

export default connect(mapStateToProps,submitUser)(withRouter(UserFormReview));
