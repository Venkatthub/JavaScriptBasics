// Function Declaration

function square(number){
return number*number;
}

console.log(square(5));


// named Function Expression

var checkEven= function eve(num){
  if(num%2==0){
    return "Given number is even !";
  }
};

console.log(checkEven(8));

// Inline functions

var catSays=function (times){
  const buzzWord="Meow..";
  let catSays="";
for(var j=0;j<=times;j+=1){
  catSays+=buzzWord;
}
return catSays;
};

function cat(say){
  console.log("Cat says "+ say(5));
}

cat(catSays);
