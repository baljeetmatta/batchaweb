const http=require("http");
const fs=require("fs");
const server=http.createServer((req,res)=>{
    console.log(req.url);
if(req.url=="/" || req.url=="/index.html")
{
    // fs.readFile("index.html","utf-8",(err,data)=>{

    //     //res.write(data);
    //     //res.end();
    //     res.end(data);
    // })
    res.end(readFile("index.html"));

}
else if(req.url=="/style.css")
{
    res.end(readFile("style.css"));
    // fs.readFile("style.css","utf-8",(err,data)=>{

    //     //res.write(data);
    //     //res.end();
    //     res.end(data);
    // })
}
else if(req.url=="/jscript.js")
{
    res.end(readFile("jscript.js"));
    // fs.readFile("jscript.js","utf-8",(err,data)=>{

    //     //res.write(data);
    //     //res.end();
    //     res.end(data);
    // })
}
else if(req.url=="/about.html")
{
    res.end(readFile("about.html"));
    // fs.readFile("about.html","utf-8",(err,data)=>{

    //     //res.write(data);
    //     //res.end();
    //     res.end(data);
    // })
}
else if(req.url=="/contact.html")
{
    res.end(readFile("contact.html"));

    // fs.readFile("contact.html","utf-8",(err,data)=>{

    //     //res.write(data);
    //     //res.end();
    //     res.end(data);
    // })
}
})
server.listen(3000,(err)=>{

    if(err)
    console.log("unable to start server");
else
console.log("Server  Started...")
});
function readFile(filename)
{
    return fs.readFileSync(filename,"utf-8");
//  fs.readFileSync(filename,"utf-8");,(err,data)=>{

//         //res.write(data);
//         //res.end();
//        return data;
//     })
}