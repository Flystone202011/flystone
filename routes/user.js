const express=require("express");
const router=express.Router();
const users=require("../models/User");

//dotenvを利用して.envで環境変数を利用、ここではlimitを使用するために利用
require('dotenv').config();

//userのページング取得、条件設定なし＝全取得
router.route("/all/:page").get(function(req, res) {
  var aggregateQuery = users.aggregate();
    //値を調整できるように改良する必要あり
  users.aggregatePaginate(aggregateQuery, { page: req.params.page, limit: process.env.LIMIT }, function(err,result) {
    if (err) {
      console.err(err);
    } else {
      res.json(result);
    }
  });
});

//userのページング取得、検索実施(username)
router.route("/search/:page/:user").get(function(req, res) {
//「/.*対象文字.*/」or「/対象文字/」これで検索対象の値を書くことによってlike検索を行うことが出来る。
    const value=req.params.user;
    // new RegExp(".*" + 検索文字or変数 + ".*" , "i")
    var aggregateQuery = users.aggregate([{$match:{username:new RegExp(".*" + value + ".*" , "i")}}]);
      //値を調整できるように改良する必要あり0
    users.aggregatePaginate(aggregateQuery, { page: req.params.page, limit: process.env.LIMIT }, function(err,result) {
      if (err) {
        console.err(err);
      } else {
        res.json(result);
      }
    });
  });

//全userの検索
router.get("/",async(req,res)=>{
    try{
        const user=await users.find();
        res.json(user);
    }catch(err){
        res.json({message:err});
    }
})
//特定userの検索
router.get('/:userId',async(req,res)=>{
    try{
        const user=await users.find({userId:req.params.userId})
        res.json(user);
    }catch(err){
        res.json({message:err});
    }
})

//user新規登録
router.post("/",async(req,res)=>{
    const user=new users({
        userId:req.body.userId,
        username:req.body.username,
        password:req.body.password
    });
    try{
        const savedUser=await user.save();
        res.json(savedUser);
    }catch(err){
        res.json({message:err});
    }
});
//user更新して変更したものを取得する。
router.patch("/:userId",async(req,res)=>{
    try{
        const updatedUser=await users.findOneAndUpdate({userId:req.params.userId},{$set:{username:req.body.username,password:req.body.password}})
        res.json(updatedUser)
    }catch(err){
        res.json({message:err});
    }
});

//user削除
router.delete("/:userId",async(req,res)=>{
    try{
        const removedUser=await users.remove({userId:req.params.postId})
        res.json(removedUser);
    }catch(err){
        res.json({message:err});
    }
});

//user全削除
router.delete("/",async(req,res)=>{
    try{
        const removedUser=await users.remove()
        res.json(removedUser);
    }catch(err){
        res.json({message:err});
    }
});

module.exports=router;
