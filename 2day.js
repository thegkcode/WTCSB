const user={
    name: "aj", age: 22,
    welcome:function(){
        console.log("hello ${this.name}");
        console.log(this);
    }
};
console.log(user["name"]);

user.welcome();
user.name="Gaurav Kumar";
user.welcome();

const f=user.welcome();
console.log(f);