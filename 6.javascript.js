// var name = "Jack";
// var age = 23;
// var cgpa=6.92;
// var message = "Hi, my name is "+ name +" and I am "+ age +" years old";



// var firstName ="John";
// var lastName = "Mclane";
// var dateOfBirth = "1-10-1990";
// var age = 31;
// var profileImageUrl="http://coolpicks.com/johnmclane.jpg";

// var loginWelcomeMessage = "Welcome, " + firstName+ ". Happy "+ age + "rd birthday";
// cosole.log(loginWelcomeMessage);
// console.log(message);

// var sum = 10 + 15;
// console.log(sum);
// var sub = 15 - 10;
// console.log(sub);
// var div = 9 /3;
// console.log(div);
// var mod = 10 % 3;
// console.log(mod);

// var myAccountBalance = 300;
// var nikeSBShoes =500;
// var coupon = 400;

// if(nikeSBShoes <=myAccountBalance)
// {
//     console.log("We just bought some dope shoes")
//     myAccountBalance = myAccountBalance - nikeSBShoes;
//     console.log("Current Account Balance:"+ myAccountBalance);
// }
// else if(nikeSBShoes-coupon <= myAccountBalance)
// {
//     console.log("We just bought some coupons using a coupon");
//     myAccountBalance = myAccountBalance-(nikeSBShoes - coupon);
//     console.log("Current Account Balance:"+ myAccountBalance);
// }
// else
// {
//     console.log("Insufficient Balance")
// }






// var age = 23;
// var joseage = "23";

// if(age === joseage)
// {
//     console.log("Im the same age as Joe");
// }
// else
// {
//     console.log("Im not the same age as Joe");
// }

// if(1==1 && 2==2 || "joe"=="joe")
// {
//     console.log("These are both true");
// }


// if(1==3 || "joe"=="joe")
// {
//     console.log("One of these are true");
// }


// var cat1 = 5;
// var cat2 = 10;
// var cat3 = 1;
// var cat3DisabledHandicap = false;

// if((cat1>cat2 && cat1> cat3) &&!cat3DisabledHandicap)
// {
//     console.log("Cat 1 is the cutest")
// }
// else if((cat2>cat1 && cat2>cat3) &&!cat3DisabledHandicap)
// {
//     console.log("Cat 2 is the cutest");
// }
// else if((cat3>cat1 && cat3>cat2) || cat3DisabledHandicap)
// {
//     console.log("Cat 3 is the cutest");
// }


// var students = ["Michael", "Dwight","Jim","Stanley","Pam","Kevin"];
// console.log(students);


// var naughtyList=[];
// naughtyList.push(students[0],students[4]);

// var index = naughtyList.indexOf("Michael");
// console.log("Index of Michal:"+index);
// console.log("List before splice");
// console.log(naughtyList);
// if(index>-1)
// {
//     naughtyList.splice(index,1);
// }
// console.log("List after splice");
// console.log(naughtyList);

// var someVal= 10;
// for( var x=0; x<someVal; x++)
// {
//     console.log(x);
// }

// var students = ["Michael", "Dwight","Jim","Stanley","Pam","Kevin"];
// for(var index = 0; index < students.length; index++)
// {
//     console.log(students[index]);
// }



// var length1 = 15;
// var width1 = 10;
// var area1 = length1 * width1;
// console.log(area1);
// var length2 = 12;
// var width2 = 14;
// var area2= length2 * width2;
// console.log(area2);

/*
function areaFunction(length, width)
{       
    return length * width;
    
}
var rectangleArea = []
rectangleArea.push(areaFunction(10, 20))
rectangleArea.push(areaFunction(17, 2))
rectangleArea.push(areaFunction(32, 25))
rectangleArea.push(areaFunction(12, 50))

console.log(rectangleArea);


for(var index = 0; index < rectangleArea.length; index++)
{
     console.log(rectangleArea[index]);
}

*/
var bankBalance = 500;
// function makeTransaction(productPrice)
// {
//     if(productPrice <= bankBalance)
//     {
//         bankBalance -= productPrice;
//         console.log("Purchase Successful")
//     }
//     else{
//         console.log("Insufficient Fund");
//     }
// }
// console.log(bankBalance)
// makeTransaction(79.00);
// console.log(bankBalance)
// makeTransaction(2.32);
// console.log(bankBalance)
// makeTransaction(10.45);
// console.log(bankBalance)
// makeTransaction(450.00);



/*
var transaction = function makeTransaction(productPrice)
{
    if(productPrice <= bankBalance)
    {
        bankBalance -= productPrice;
        console.log("Purchase Successful")
    }
    else{
        console.log("Insufficient Fund");
    }
};


var printCustomerName = function(first,last)
{
    console.log("First Name: "+ first + "Last Name: " + last);
}
var applyForCreditCard = function(vreditScore, soul)
{
    //call some functions to process application
}


var bankOperations =[];
bankOperations.push(transaction);
bankOperations.push(printCustomerName);
bankOperations.push(applyForCreditCard);

*/


/*
var studentNames = ["Michael", "Dwight","Jim","Stanley","Pam","Kevin"];
var studentAges = 
*/







// var student1 =
// {
//     firstName: "Michael",
//     lastName: "Scott",
//     age:40,
    
// };

// console.log(student1.greeting());



// // Creates a new empty object
// var student2 = new Object();
// student2.firstName = "Dwight";
// student2.lastName = "Schrute";
// student2.age = 38;

// var student3 = {}
// student3.firstName = "Jim";
// student3.lastName = "Halpert";
// student3.age = 35;

// var students = [];
// function Student(first, last, age)
// {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.greeting = function()
//     {
//         return "Hi, I'm " + this.firstName + " and I'm " + this.age + " years old.";
//     };
// }

// students.push(new Student("Michael", "Scott", 40));
// students.push(new Student("Dwight", "Schrute", 38));
// students.push(new Student("Jim", "Halpert", 35));



// var student = students[0];
// for(var key in student){
//     console.log(student[key]);
// }
// Alternate way

// var s1 = new Student("Michael", "Scott", 40);
// console.log(s1);
// console.log(s1.greeting());

// students.push(student1);
// students.push(student2);
// students.push(student3);


// for (var index = 0; index<students.length; index++)
// {
//     var student = students[index];
//     console.log(student.greeting());
// }


// console.log(student.firstName);
// console.log(student.lastName);

// console.log(student["firstName"]);
// console.log(student["lastName"]);




// Alex Brown

this.car = "Honda Civic with ugly Spoiler"

var marksGarage ={
    car:"Aston Martin",
    getCar:function()
    {
        return this.car;
    }
};

console.log(marksGarage.getCar());

var storeGetCarForLater = marksGarage.getCar;

// Now work is over and Mark wants his car

console.log(storeGetCarForLater());

var theRealGetCarFunction = marksGarage.getCar.bind(marksGarage);
console.log(theRealGetCarFunction());