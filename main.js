// //exercise 1 from lecture 9 using claud
function Student(id, name, grades) {
    this.studentId = id;
    this.studentName = name;
    this.studentGrades = grades;
}

Student.prototype.getStudentName = function () {
    return this.studentName;
};


Student.prototype.setStudentName = function (name) {
    this.studentName = name;
};

Student.prototype.addGrade = function (grade) {
    this.studentGrades.push(grade);
};

Student.prototype.getAverageGrade = function () {
    let sum = 0;
    for (let i = 0; i < this.studentGrades.length; i++) {
        sum += this.studentGrades[i];
    }
    return sum / this.studentGrades.length;
};


let student = new Student(1, 'Alice', [85, 90, 78]);
console.log(student.getAverageGrade().toFixed(2)); // Output: 84.33

student.addGrade(100);
console.log(student.getAverageGrade().toFixed(2)); // Output: 88.60

student.setStudentName('Mina Park');
console.log(student.getStudentName()); // Output: Mina Park



// exercise 2 from claud
function Pet (id, name, age) {
  this.petID = id;
  this.petName = name;
  this.petAge = age;
}

Pet.prototype.getPetID = function() {
  return this.petID;
};

Pet.prototype.getPetName = function() {
  return this.petName;
};

Pet.prototype.getPetAge = function() {
  return this.petAge;
};

Pet.prototype.setPetName = function(name) {
    this.petName = name;
};

Pet.prototype.setPetAge = function(age) {
    this.petAge = age;
};

//test
let pet = new Pet(1, 'Mochi', 2);
console.log(pet.getPetID());
console.log(pet.getPetName());
console.log(pet.getPetAge());

pet.setPetName('Mochi Jr.');
pet.setPetAge(3);
console.log(pet.getPetName());
console.log(pet.getPetAge());

//exercise 3 in page31 in lecture 9
const followers = [
    {
    userId: 12345,
    userName: "cathy123"
    },

    {
    userId: 55555, 
    userName: "fred23"
    },

    {
        userId: 34235,
        userName: "coolcathy"
    }
];

const search = followers.filter (follower =>
follower.userName.includes ("cathy")
).map (follower => follower.userId);

console.log(search); // Output: [12345, 34235]

//exercise
const num1 = 15
const num2 = 4

const sum = num1 + num2;
const difference = num1 - num2;
const multiplication = num1 * num2
const reminder = num1 % num2

console.log(sum)
console.log(difference)
console.log(multiplication)
console.log(`${num1} divided by ${num2} has a remainder of ${reminder}`)