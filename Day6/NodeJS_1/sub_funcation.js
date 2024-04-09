function sum(a,b){
    console.log(a+b);
}
function multiply(a,b){
    console.log(a*b);
}
console.log("This will also run in the module.js file");
const name='shivam';

module.exports={
    sum,
    multiply,
    name
};
