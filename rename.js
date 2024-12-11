const fs=require('fs')
fs.rename('def.txt','demo.txt',(err)=>{
    if(err)console.log(err);
    else console.log("renamed")
})