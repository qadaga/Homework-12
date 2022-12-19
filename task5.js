let num = [1, 21, 5, 9, 3, 81, 41, ]

let sum = 0


for (let i = 0; i < num.length;i++) {
    if(num[i] %2 === 0){
        sum += num[i]

    } 
}

 if(sum > 20){
    console.log ('jami ver moidzebna')
}

else {
    console.log (sum)
}
