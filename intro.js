// console.log("first");
// document.write("From JS");

// a=10;
// console.log(a);

// var a=10;
// var b=20;
// console.log(a);

function hello(){
    if(true){
        var x=10;
        console.log("Inner", x);
    }
    console.log("Inner", x);
}
hello();
