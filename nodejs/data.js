var a=100;
var b=50
// module.exports=a;
// module.exports=b;
// module.exports=a+b;
// module.exports={a,b};
// at a time only one value export either a or either b
// what if i have a function so here we always use  callback function
var add=()=> {
    console.log(a+b);
}
module.exports={a,b,add};