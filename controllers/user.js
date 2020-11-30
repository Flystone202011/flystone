const express=require("express");
const router=express.Router();
const users=require("../models/User");

//dotenvを利用して.envで環境変数を利用、ここではlimitを使用するために利用
require('dotenv').config();

//userのページング取得、条件設定なし＝全取得
exports.all_pagenation=function(req, res) {
  var aggregateQuery = users.aggregate();
  users.aggregatePaginate(aggregateQuery, { page: req.params.page, limit: process.env.LIMIT }, function(err,result) {
    if (err) {
      console.err(err);
    } else {
      res.json(result);
    }
  });
};

//userのページング取得、検索実施(username)
exports.search_pagenation=function(req, res) {
//「/.*対象文字.*/」or「/対象文字/」これで検索対象の値を書くことによってlike検索を行うことが出来る。
    const value=req.params.username;
    // new RegExp(".*" + 検索文字or変数 + ".*" , "i")
    var aggregateQuery = users.aggregate([{$match:{username:new RegExp(".*" + value + ".*" , "i")}}]);
    users.aggregatePaginate(aggregateQuery, { page: req.params.page, limit: process.env.LIMIT }, function(err,result) {
      if (err) {
        console.err(err);
      } else {
        res.json(result);
      }
    });
  };

//全userの検索
exports.all_users=function(req,res){
    users.find(function(err,user){
        if(err)res.send(err);
        res.json(user);
    })
}
//特定userの検索
exports.search_users=function(req,res){
    users.findById(req.params.id,function(err,user){
        if(err)res.send(err);
        res.json(user);
    })
}
//user新規登録
exports.create_users=function(req,res){
    let new_user=new users(req.body);
    new_user.save(function(err,user){
        if(err)res.semd(err);
        res.json(user);
    });
};
//user更新して変更したものを取得する。
exports.update_user=function(req,res){
    users.findByIdAndUpdate(
        {_id:req.params.id},
        req.body,
        {new:true},
        function(err,user){
            if(err)res.send(err);
            res.json(user);
        }
    );
};

//user削除
exports.delete_user=function(req,res){
    users.remove(
        {
            _id:req.params.id
        },
        function(err,user){
            if(err)res.send(err);
            res.json({message:"User success deleted"});
        }
    );
};
//user全削除
exports.all_delete_user=function(req,res){
    users.remove(
        function(err,user){
            if(err)res.send(err);
            res.json({message:"User success deleted"});
        }
    );
};