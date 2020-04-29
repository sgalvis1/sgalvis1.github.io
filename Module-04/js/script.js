// Variables 
var x = "Hello World";
console.log("Global Message = " + x);

// Objects : Object literal approch
var facebook = {
    name: "Facebook",
    ceo: {
        FirstName: "Mark",
        FavColor: "bleu"
    },
    $sotck: 110,
    "sotck of company": 110
};

// Objects : New Object approch
var company = new Object();
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

function TestNumbers(xx, yy) {
    var x = Number(document.getElementById("N3").value) || xx;
    var y = Number(document.getElementById("N4").value) || yy;
    if (typeof (x) == 'string' || typeof (y) == 'string' || !Boolean(x) || !Boolean(y)) {
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
function loop(xx, yy) {
    var x = Number(document.getElementById("N1").value) || xx;
    var y = Number(document.getElementById("N2").value) || yy;
    // console.log("Test Numbers: " + x + y);
    var sum = 0;
    for (var i = x; i < y + 1; i++) {
        sum = sum + i;
    }
    document.getElementById("demo").innerHTML = "Result : " + sum;
    // console.log(sum);
    return sum;
}
// console.log(loop(1,10));

// Handling Default Values 
function orderFood(Dish) {
    Dish = Dish || "whatever";
    console.log("Could I have a " + Dish + ", please ?");
    return "Could I have a " + Dish + ", please ?";
}
// orderFood("chicken");


// Function Factory 
function makeMultiplier(x) {
    var myFunc = function (y) {
        return x * y;
    };
    return myFunc;
}

makeMultiplier.version = "v.0.1";

function runOpe(x, op) {
    return op(x);
}

var doubleAll = makeMultiplier(2);
// console.log(doubleAll(20));
// console.log(runOpe(5,doubleAll));

function makeMultiplier2(x) {
    function speak() {
        console.log("Multiplier is: " + x);
    }
    return (
        function (y) {
            speak();
            // let x = 2; If we want to have a different value in this contexte
            return x * y;
        }
    );
}

var doubleNumber = makeMultiplier2(5);
console.log("The result of multiplier is: " + doubleNumber(10));

//Passing values by reference
function changeValue(Value) {
    console.log("Before: ");
    console.log(Value.x);

    Value.x = 10;

    console.log("After: ");
    console.log(Value.x);
}

var a = { x: 5 };
var b = a;
console.log("Before Function -> a: " + a.x + " - b: " + b.x);
changeValue(b);
console.log("After Function -> a: " + a.x + " - b: " + b.x);


// Function constructors 

function Circle(radius, name) {
    this.raduis = radius;
    // this.area = Circle.prototype.getArea(radius);
    this.info = {
        color: "bleu",
        name: name
    };
    this.ShowArea1 = function () {
        console.log("Inside The area is: " + this.getArea());
    };

}

Circle.prototype.getArea = function () {
    this.area = Math.PI * Math.pow(this.raduis, 2);
    return Math.PI * Math.pow(this.raduis, 2);
};

Circle.prototype.ShowArea = function () {
    console.log("The area is: " + this.getArea());
};



var circle1 = new Circle(10, "c1");
circle1.ShowArea1();

var circle2 = new Circle(20, "c2");
console.log(circle2);

// Class Constructor 
class Square {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

var square1 = new Square("s1");
square1.speak();

// Arrays 
var array = new Array();
array[0] = "Juan";
array[1] = 2;
array[2] = function (name) {
    console.log("Hello " + name);
};
array[3] = { course: "HTML+CSS+JS" };

console.log(array[2](array[0]));

// short hand creation 
var names = ["Juan", "Eva", "Paulo"];
console.log(names);

// Reading an array by element position
for (let i = 0; i < names.length; i++) {
    console.log("Hello " + names[i]);
}

// Reading an array and an object 2 by properties
for (var name in names) {
    console.log("Hello 2 " + names[name]);
}

for (var obj in facebook) {
    console.log(obj + " " + facebook[obj]);
}

// Inmmediately Invoked Function Expression (IIFEs)
// Passing a inside IIFEs object to global context
(function (window,name) {
    var f1Object = {};
    f1Object.name = "Juan";
    var message = "(This is the IIFEs 1) ";
    f1Object.Speak = function () {
        console.log("IIFEs Function : " + message + f1Object.name);
    };
    window.f1Object = f1Object;
})(window,"Hello");
// The elments inside this object are not visible in the global contexte
(function (name) {
    var f2Object = {};
    f2Object.name = "Sebas";
    var message = "(This is the IIFEs 1) ";
    f2Object.Speak = function () {
        console.log("IIFEs Function : " + message + f2Object.name);
    };
})("Hello");


f1Object.Speak();

// DOM Manipulation 
document.getElementById("demo").innerHTML = ("Result : ");
document.getElementById("TestNumberResult").innerHTML = ("Result : ");
