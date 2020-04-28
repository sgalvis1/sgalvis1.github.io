// Variables 
var x = "Hello World";
console.log("Global Message = " + x);

// Objects : Object literal approch
var facebook = {
    name: "Facebook",
    ceo : {
        FirstName: "Mark",
        FavColor: "bleu"
    },
    $sotck: 110,
    "sotck of company":110
};

// Objects : New Object approch
var company= new Object();
company.name = "Facebook";
company.ceo = new Object();
company.ceo.fisrtName = "Mark";
company.ceo.FavColor = "bleu";

// console.log(facebook);
// console.log (company);

// Functions 
var a = function () {
    var x = "inside a";
    console.log("a Message = " + x);
    b();
};
function b() {
    console.log("b Message = " + x);
}

// Higher number Function 

function TestNumbers(xx,yy) {
    var x = Number(document.getElementById("N3").value) || xx;
    var y = Number(document.getElementById("N4").value) || yy;
    if (typeof(x) == 'string' || typeof(y) == 'string' || !Boolean(x) || !Boolean(y)) {
        console.log("One element isn't a number");
        document.getElementById("TestNumberResult").innerHTML = ("One element isn't a number");
    } else {
        if (x == y) {
            console.log("The numbers are equal");
            document.getElementById("TestNumberResult").innerHTML = ("The numbers are equal");

        } else {
            if (y > x) {
                console.log("The number : " + y + " is higher than : " + x);
                document.getElementById("TestNumberResult").innerHTML = ("The number : " + y + " is higher than : " + x);
            }
            else {
                console.log("The number : " + x + " is higher than : " + y);
                document.getElementById("TestNumberResult").innerHTML = ("The number : " + x + " is higher than : " + y);
            }
        }
    }
}
// TestNumbers("2",3);

// foor loop function 
function loop(xx,yy){
    var x = Number(document.getElementById("N1").value) || xx;
    var y = Number(document.getElementById("N2").value) || yy;
    // console.log("Test Numbers: " + x + y);
    var sum =0;
    for (var i=x; i<y+1; i++){
        sum= sum+i;
    }
    document.getElementById("demo").innerHTML = "Result : " + sum;
    // console.log(sum);
    return sum;
}
// console.log(loop(1,10));

// Handling Default Values 
function orderFood(Dish){
    Dish = Dish || "whatever";
    console.log("Could I have a " + Dish +  ", please ?");
    return "Could I have a " + Dish +  ", please ?";
}
// orderFood("chicken");


// Function Factory 
function makeMultiplier(x){
    var myFunc = function(y){
        return x*y;
    };
    return myFunc;
}

makeMultiplier.version = "v.0.1";

function runOpe(x,op){
    return op(x);
}

// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(20));
// console.log(runOpe(5,doubleAll));


//Passing values by reference
function changeValue(Value){
    console.log("Before: ");
    console.log(Value.x);

    Value.x = 10;

    console.log("After: ");
    console.log(Value.x);
}

var a = {x: 5};
var b = a;
console.log("Before Function -> a: " + a.x + " - b: " + b.x);
changeValue(b);
console.log("After Function -> a: " + a.x + " - b: " + b.x);


// Function constructors 

function Circle(radius,name){
    this.raduis = radius;
    // this.area = Circle.prototype.getArea(radius);
    this.info = {
        color: "bleu",
        name: name
    };
}

Circle.prototype.getArea = function(){
    this.area = Math.PI* Math.pow(this.raduis,2);
    return Math.PI* Math.pow(this.raduis,2);
};

var circle1 = new Circle(10,"c1");
console.log(circle1.getArea());

var circle2 = new Circle(20,"c2");
console.log(circle2);



// DOM Manipulation 
document.getElementById("demo").innerHTML = ("Result : ");
document.getElementById("TestNumberResult").innerHTML = ("Result : ");
