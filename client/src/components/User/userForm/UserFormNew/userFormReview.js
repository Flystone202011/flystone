//フォーム入力内容を確認する
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import React from "react";
import {connect} from "react-redux";
import formFields from "./formNewFields";
import {withRouter} from "react-router-dom";
import { submitNewUser } from "../userAction";

const UserFormNewReview = ({onCancel,formValues,history})=>{
    const reviewFields=formFields.map(formField=>{
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
            <Button variant="contained" color="primary" onClick={()=>submitNewUser(formValues,history)}>
                登録
            </Button>
        </div>
        </center>
        
    );
};
//reduxの値を取得
function mapStateToProps(state) {
    return { formValues: state.form.userFormNew.values };
}

export default connect(mapStateToProps,{submitNewUser})(withRouter(UserFormNewReview));
