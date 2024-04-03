let sum = 0;
let isError = false;
for (let i = 0; i < 10; i++){
    // RICHIESTA NUMERO
    const num = parseInt(prompt("Dimmi un numero!"))
    console.log(num);
    if (!isNaN(num)) {
        sum = sum + num; 
    } else {
        isError = true;
        break;
    }
}
if (isError === true) {
    alert("Hai sbagliato questo non è un numero")
}else {
console.log(sum);
}