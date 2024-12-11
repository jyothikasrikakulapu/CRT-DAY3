const fs=require('fs')
fs.appendFile('demo.txt',"hello everyone",(err)=>{
    if(err)console.log(err);
    else console.log("updated")
})