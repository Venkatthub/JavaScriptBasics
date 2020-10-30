// Finding Odd number

var x=[30,15,2,18,35,45,83,97,14];
var y=[];

for(let i=0;i<x.length;i=i+1){
if(x[i]%2!==0){
  y.push(x[i]);
}
}

console.log("Prime numbers in the given array " + y);
