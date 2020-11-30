//フォーム入力内容を確認する
import React from "react";
import {connect} from "react-redux";
import formUpdateFields from "./formUpdateFields";
import {withRouter} from "react-router-dom";
import { submitUpdateUser } from "../userAction";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//フォームで書いたものをこのコンポーネントで確認する。
//ここではonCancelなどいろいろと書いているがpropsのみでもよく、そこからprops.match等のようにコンポーネント内で取得してもいい。
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
            {/* submitUpdateUserは下のconnectでこのコンポーネントで利用できるように設定したため使うことができる */}
            <Button variant="contained" color="primary" onClick={()=>submitUpdateUser(match.params.id,formValues,history)}>
                登録
            </Button>
        </div>
        </center>
    );
};
//更新フォームで入力した値をreduxから取得する、名前は設定したuserFormUpdateで値を取り出したいのでvaluesから取得するようにした。
function mapStateToProps(state) {
    return { formValues: state.form.userFormUpdate.values };
}
//第一引数はmapStateToPropsと一般的だが、第二引数の部分では、webAPIの処理を設定したactionから取得して対象のcomponentで利用できるようにしている。
//対象のcomponentがpropsで全体を取得していないため、直接submitUpdateUserで利用することができる。
export default connect(mapStateToProps,{submitUpdateUser})(withRouter(UserFormReview));
