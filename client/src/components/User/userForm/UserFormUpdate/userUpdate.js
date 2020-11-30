//user更新フォームの組み立て

import React,{Component} from "react";
import {reduxForm} from "redux-form";
import UserForm from "./userForm";
import UserFormReview from "./userFormReview";

//いわゆるコンテナーとしてのコンポーネントであり、複数のコンポーネントを状態を切り替えることで表示するようにしたもの。
class UserUpdate extends Component{
    state={
        //このstateで表示するものを変える条件にする。
        showFormReview:false,
    };
    //renderするものを条件に合わせて変えるのを設定した処理
    renderContent(){
        //状態で表示されるコンポーネントが変わる
        if(this.state.showFormReview){
            return(
                <UserFormReview
                    //ボタンを押すことで条件を変えるようにする。
                    onCancel={()=>this.setState({showFormReview:false})}
                />
            );
        }
        return(
            //ボタンを押すことで条件を変えるようにする。
            <UserForm
                onUserSubmit={()=>this.setState({showFormReview:true})}
            />
        );
    }
    render(){
        return <div>{this.renderContent()}</div>;
    }
}
//もしreduxFormで全体を囲わなければ、入力内容が初期化されずに前回の記入した内容がまったく別のユーザーを選択したフォームでも残ってしまう。
//おそらくはここでもreduxFormを使っているが、全体で下記のようにuserFormUpdateなどフォーム名等も統一することによって選択ごとに初期化できる。
export default reduxForm({form:"userFormUpdate"})(UserUpdate);