// 1. array and object 

const daysOfWeek = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]

// for (let i =0 ; i<daysOfWeek.length; i++) {
//     console.log(daysOfWeek[i]);    
// }

// function weekend() {
// for (let Week of daysOfWeek) {
//     console.log(Week);
// }
// }

// console.log(document.querySelector(weekend()))

const meat = ["chicken", "pork", "beef"]
const Nerdvana = {
    name : "nakseong",
    age : 31, 
    isHandsome : true,
    dogs : [{name:"miko", species : "puddle", favFood : [ meat[0], "snack"]}, {name:"miki", species : "puddle"}],
    yeah : function () {
        if (this.isHandsome){
            let handsome = `잘생겼습니다.`;
            console.log(`안녕하세요 ${this.name} 입니다. 나이는 ${this.age}이고요, ${handsome} 
            ${this.dogs[0].name},${this.dogs[1].name}를 기릅니다.` );

        }   else  {
            let handsome = `죄송합니다.`;
            console.log(`안녕하세요 ${this.name} 입니다. 나이는 ${this.age}이고요, ${handsome} `);
        }
    }
}

// Nedvana.name = "CHOINAKSEONG" //객체 안에 있는 속성은 바꿀 수 있음.

// console.log(Nedvana.yeah())
// console.log(Nedvana.dogs[0].favFood[0])

// function doggyDogs() {
// for (let doggys of Nedvana.dogs){
//     let doggysname = document.querySelectorAll('doggys name');
//     console.log(doggysname)
// }
// }


// console.log(Nerdvana, console);

// console.log 모두 built-in funciton




// 2.0 , 2.1
// 1)
function sayHello(name, age) {
    // console.log('Hello!', name , 'you have ', age , 'years of age') 
    // console.log('Hello!, ' + name + ',  you have ' + age + ' years of age');
    // console.log(`Hello!, ${name},  you have ${age} years of age`); //백틱
        return `Hello!, ${name},  you have ${age} years of age`
}

sayHello("nakseong", 30); //argument (인자)
// sayHello 만으로는 리턴값만 가지지 보여주지는 않음.ㅣ

const greetNakseong = sayHello("nakseong",14)
// greetNakseong = sayHello함수의 리턴값(실행된 결과값)
console.log(greetNakseong)

// 2)
const calculator = {
    plus : function(a,b) {
        return a**b;
    }
}

const plus = calculator.plus(5,5)
console.log(plus)


// 2.2 JS  DOM Functions