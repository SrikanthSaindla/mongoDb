const express=require("express")
const app=express()
const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://srikanth:srikanth@cluster0.shmmzpo.mongodb.net/?retryWrites=true&w=majority").then(
    ()=>console.log("db connected..")
)
 const BrandName=require("./model")
 app.use(express.json())
 
app.post("/addbrands",async(req,res)=>{
    const{brandname}=req.body;
try{
    const newData=new BrandName({brandname})
    await newData.save()
    return res.json(await BrandName.find())
}
catch(err){
console.log(err.message)
}
})
app.get("/getbrands",async(req,res)=>{
try{
    const allData=await BrandName.find()
    return res.json(allData)

}catch(err){
console.log(err.message)
}
})


app.get("/getbrand/:id",async(req,res)=>{
    try{
      const Data=await BrandName.findById(req.params.id)
      return res.json(Data)
    }
    catch(err){
console.log(err.message)
    }
})


app.delete("/deletebrand/:id",async(req,res)=>{
    try{
 await BrandName.findByIdAndDelete(req.params.id)
return res.json(await BrandName.find())
    }
    catch(err){
       console.log(err.message)
    }
})
app.listen(3000,()=>console.log("sever is running"))