// // // const title = document.getElementById('title');
// // const title = document.querySelector('#title');
// // // title.innerHTML="hi! from JS";
// // title.style.color ="red";
// // console.log(title);
// console.dir(document);
// document.title = 'I own you now';


// // function handleResize(event){
// //     console.log(event)
// // }

// function handleResize(){
//     console.log()
// }

// window.addEventListener("resize", handleResize);
// // window.addEventListener("resize", handleResize()); //handleReisize를 즉시실행

// // function handleClick() {
// //     title.style.color = "blue";
// // }

// // title.addEventListener("click", handleClick);


// if (20 > 5 || "nakseong" ==="nakseong") {
//     console.log("yes");
// }   else {
//     console.log("no");
// }
// // && and / || or

// // const age = prompt("How old are you?");
// // console.log(age);

// // if (age>=18 && age<=21 ) {
// //     console.log('you can drink');
// // }   else if(age>21){
// //     console.log(`go ahead`);
// // }   else
// //     console.log(`too young`);



// const title = document.querySelector("#title");
// const BASE_COLOR ="rgb(52, 73, 94)";
// const OTHER_COLOR ="#7f8c8d";

// function handleClick(){
//     const currentColor = title.style.color;
//     // console.log(currentColor);
//     // console.log(title.style.color);
//     if (currentColor ===BASE_COLOR) {
//         title.style.color = OTHER_COLOR;
//     }   else {
//         title.style.color = BASE_COLOR;
//     }
// }

// function init() {
//     title.style.color =BASE_COLOR;
//     // title.addEventListener("click",handleClick);
//     // title.addEventListener("click",handleClick);


// }

// init();


// function handleOffline() {
//     console.log("lalalal");
// }
// window.addEventListener("click", handleOffline)



const title = document.querySelector('#title');
const CLICKED_CLASS ="clicked";

function handleClick(){
    // const currentClass = title.className;
    title.classList.toggle(CLICKED_CLASS) //toggle이 제일 간단하네
    // const hasClass =title.classList.contains(CLICKED_CLASS); //classList.contaiun : 해당 클래스를 갖는지 확인
    // if (!hasClass) { //!: anti
    //     title.classList.add(CLICKED_CLASS);
    // }   else {
    //     title.classList.remove(CLICKED_CLASS);
    // }
}

function init(){
    title.addEventListener("click", handleClick);
}
init();