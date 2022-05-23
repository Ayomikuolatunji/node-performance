import  express  from "express";



const app=express()


const BlockOperation=(duration)=>{
    const start=Date.now()
    
   while(Date.now()-start<duration){

   }
}


app.get("/",(req,res)=>{
    res.send("performance")
})

app.get("/timer",(req,res)=>{
    
})

app.listen(8080,()=>{
     console.log("app running on localhost 8080");
})