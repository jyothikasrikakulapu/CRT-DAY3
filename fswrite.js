const fs=require('fs')
fs.writeFile('demo.txt',"Every body rock your body",(err)=>{
    if(err)console.log(err);
    else console.log("updated")
})