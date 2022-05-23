import  express  from "express";
import clauster from "cluster";
import os from "os"


const app=express()


const blockOperation=<T extends number>(duration:T)=>{
    const start=Date.now()
    
   while(Date.now()-start < duration){

   }
}


app.get("/",(req,res)=>{
    res.send(`performance ${process.pid}`)
})

app.get("/timer",(req,res)=>{
     blockOperation(9000)
    res.send(`it would be delay ${process.pid}`)
})


if(clauster.isPrimary){
    console.log("master process started");
    const NUMBER_WORKERS=os.cpus().length
    for(let i =0; i<NUMBER_WORKERS; i++){
        clauster.fork()
    }
}else{
    console.log("worker process started");
    app.listen(8080,()=>{
        console.log("app running on localhost 8080");
    })
}
