const express=require("express");
const router=express.Router();
const users=require("../models/User");

//userのページング取得,未完成
router.get('/:page-:limit',async(req,res)=>{
    try{
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit); 
        const offset = page ? page * limit : 0;
        const user=await users.find({}).skip(offset).limit(limit);
        res.json(user);
    }catch(err){
        res.json({message:err});
    }
})

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
