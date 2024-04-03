const userNum = parseInt(prompt("Dimmi un numero."))

if (userNum < 1000 || userNum > 9999){
    alert("Ci vogliono 4 cifre.")
} else {
    numberString = `${userNum}`
    console.log(numberString, typeof numberString);
    let sum = parseInt(numberString[0]) + parseInt(numberString[1]) + parseInt(numberString[2]) + parseInt(numberString[3]);
    console.log("La somma è "  + sum);
}
