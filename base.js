//2) протипізувати функції:
// const user = {
//     name:"Max",
//     age:18,
//     gender:'male'
// }
var user = { name: 'Max', age: 18, gender: 'male' };
console.log(user.name);
// function sum(a,b){
//     return a+b
// }
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 4));
// function showSum(a,b){
//     console.log(a + b);
// }
function showSum(a, b) {
    console.log(a + b);
}
showSum(2, 3);
// function incAge(someUser, inc){
//     someUser.age+=inc
//     return someUser
// }
// interface ISomeUser {
//     name:string
//     age:number
//
// }
// function incAge(someUser:string, inc:number):string|number{
//     someUser.age+=inc
//     return someUser
// }
// incAge(user, 2)
