let myNumbers = (a,b) =>{
    if (a > b)
        return "A is greater";
    else
        return "B is greater";
}
console.log(myNumbers (6,5));


const numArray =[35,83,92,52,19]

let txt= "";
numArray.forEach(myFunction);

function myFunction (value, index,){
    txt += value;
    console.log(index,txt,)
};


var addThree = function(number){
    console.log(number + 3);
    };