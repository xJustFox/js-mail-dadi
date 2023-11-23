console.log("Il computer sta tirando i dadi:")
let pc_num =  Math.floor(Math.random() * 6) + 1;
console.log(pc_num)

console.log("Tu stai tirando i dadi:")
user_num = Math.floor(Math.random() * 6) + 1;
console.log(user_num)

if(pc_num == user_num){
    console.log("Pareggio")
}
else if(pc_num > user_num){
    console.log("Ha vinto il computer")
}
else{
    console.log("hai vinto")
}
