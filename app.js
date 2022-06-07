const express=require("express")
const app=express();


app.get('/',(req,res)=>{
res.send("express Here")
})
app.listen(3001,()=>{
console.log("express Server Run 3001")
})

