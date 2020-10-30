// Finding Square of all numbers in a given array

var x=[30,15,2,18,35,45,83,97,14];
var y=[];

x.forEach((item, i) => {
  item=item*item;
    y.push(item);
});




console.log("Square of all the numbers in the array " + y);
