const guestList = ["federico", "francesco", "alessandro"];

const userName = prompt ("Qual'è il suo nome?");
// console.log(userName);

let flag = false; 
for (let i = 0; i < guestList.length; i++) {
    if (userName === guestList[i]) {
        flag = true
    }
    // console.log(guestList [i]);
}

if (flag === true) {
    console.log(`Puoi entrare ${userName}`);
} else {
    console.log("Non puoi entare, non penso proprio.");
}