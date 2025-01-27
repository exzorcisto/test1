num = 5 + 5
console.log(num)

if (num === 10) {
    console.log(true)
} else {
    console.log(false)
}

function summa(num) {
    summ = num + num
    return console.log(summ)
}

summa(5)

function multiplication(num, num2) {
    sum = num*num2
    return console.log(sum)
}
multiplication(2,4)

class Person {

    constructor(name) {
      this.name = name;
    }
    
    sayHi() {
      console.log(this.name + ' says hi!');
    }
    sayBye() {
        console.log(this.name + ' says bye!')
    } 
    
  
  }
  
  // Использование:
  let user1 = new Person("Vadik Brutal");
  user1.sayHi();
  user1.sayBye();

  let user2 = new Person("Denis Brutal");
  user2.sayHi();
  user2.sayBye();
  
  console.log(user1);
  console.log(user2);