//フォーム入力内容を確認する
import React from "react";
import {connect} from "react-redux";
import formUpdateFields from "./formUpdateFields";
import {withRouter} from "react-router-dom";
import { submitUpdateUser } from "../userAction";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const UserFormReview = ({onCancel,formValues,history,match})=>{
    const reviewFields=formUpdateFields.map(formField=>{
        return(
            <div key={formField.name}>
                <label>{formField.label}</label>
                <div>{formValues[formField.name]}</div>
            </div>
        );
    });
    return(
        <center>
        <div>
            <Typography variant="h3" gutterBottom>入力内容確認</Typography>
            {reviewFields}
            <Button variant="contained" color="secondary" onClick={onCancel}>
                戻る
            </Button>
            <Button variant="contained" color="primary" onClick={()=>submitUpdateUser(match.params.id,formValues,history)}>
                登録
            </Button>
        </div>
        </center>
    );
};
//reduxの値を取得
function mapStateToProps(state) {
    return { formValues: state.form.userFormUpdate.values };
}

export default connect(mapStateToProps,{submitUpdateUser})(withRouter(UserFormReview));
