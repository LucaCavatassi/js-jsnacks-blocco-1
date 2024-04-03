let userNums = []

for (i = 0; i < 6; i++){
    let userNum = prompt("Dimmi un numero!")
    console.log(userNum);

    if (userNum % 2 !== 0) {
        userNums.push (userNum)
    }
}

console.log(userNums);

