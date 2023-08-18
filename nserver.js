const http=require("http");
const fs=require("fs");
const server=http.createServer((req,res)=>{

    const data=req.url;
    let filename="";
    if(req.url=="/")
    filename="index.html";
else if (req.url=="/about")
filename="about.html";
else
    filename=data.substr(1);

    res.end(readFile(filename));

});
server.listen(3000,(err)=>{
    if(err)
    console.log("Error in starting server...");
    else
        console.log("Server Started...")
})
function readFile(filename)
{
    try{
    return fs.readFileSync(filename,"utf-8");

    }catch(e)
    {
        return "";


    }

}
