console.log("working");

//Q1.Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using     parents prototype

const prototypeOfStu = {
    calcAge(){
        console.log(2022 - this.birthYear);
    },
    initialise(fullName,lastName,birthYear){
        this.fullName = fullName;
        this.lastName = lastName;
        this.birthYear = birthYear;
    },
}

const stu1 = Object.create(prototypeOfStu);
const stu2 = Object.create(prototypeOfStu);

stu1.initialise("Pushpendr","Singh",1999);
stu1.calcAge();
console.log(stu1);

stu2.initialise("Atul","Pandey",1997);
stu2.calcAge();
console.log(stu2);
//---------------------------------------------------------------

//Q2.Write code to explain prototype chaining

function Person() {
    this.name = 'raj'
}

//we are adding property 
Person.prototype.name = 'Raj';
Person.prototype.age =23

const person1 = new Person();

console.log("name",person1.name); // raj
console.log("age",person1.age,); // 23

//Q3.Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays

Array.prototype.sum = function(){
    return this.reduce((num1,num2) => num1+num2);
}


const arr1 = [1,2,3,4,5];
console.log(arr1.sum()); 

const arr2 = [12,13,45,34,23,56,78];
console.log(arr2.sum()); 

const arr3 = [20,34,67,45,32,70];
console.log(arr3.sum()); 

const arr4 = [2,90,34,4,56,78];
console.log(arr4.sum()); 

const arr5 = [2,4,5,6,7];
console.log(arr5.sum()); 


//Q4.Write a JavaScript function to retrieve all the names of object's own and inherited properties.


function Details(){
    const keys = Object.keys(rahul);
    console.log(keys);
  }
  Details();