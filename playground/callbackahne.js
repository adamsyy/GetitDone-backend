const doworkcalback=(callback)=>{
setTimeout(()=>{
callback(undefined,"hehe")
},2000)
}

doworkcalback((error,result)=>{
if(error){
    return console.log(error);
}
console.log(result)
})