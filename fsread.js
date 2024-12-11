const fs=require('fs')
fs.readFile('def.txt',(err,data)=>{
    if(err)console.log(err);
    else console.log(data.toString())
})