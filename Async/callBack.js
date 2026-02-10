// console.log("First");
// console.log("Second");
//     //  Sscyn......
// console.log("Third");


// function aa(){
//     console.log("First");
// }
// setTimeout(aa, 2000)


// setTimeout(() => {
//     console.log("First");
// }, 4000);


// setInterval(() => {
    // console.log("First");     // to stop it press ctrl+C to stop code which is running continously
// }, 2000);


function roll(num, next){
    setTimeout(() => {
        console.log("Roll. no. is " + num);
        if(next) next();
    }, 2000)
}
roll(12212, () => {
    console.log("Wait its getting downloaded");
    roll(12312, () => {
        console.log("Wait its getting downloaded");
        roll(12412, () => {
            console.log("Wait its almost over");
            roll(12512);
        });
    });
});