import  express  from "express";



const app=express()


const blockOperation=<T extends number>(duration:T)=>{
    const start=Date.now()
    
   while(Date.now()-start < duration){

   }
}


app.get("/",(req,res)=>{
    res.send(`performance ${process.pid}`)
})

app.get("/goods",(req,res)=>{
    res.send(`performance ${process.pid}`)
})

app.get("/timer",(req,res)=>{
     blockOperation(9000)
    res.send(`it would be delay ${process.pid}`)
})


app.listen(8080,()=>{
    console.log("app running on localhost 8080");
})
