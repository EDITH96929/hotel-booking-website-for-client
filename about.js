// function juice(apple,orange){
//     alert(`total apple is ${apple} , and total orange is ${orange}  `);
// };
// juice(2,4);

// function subject (math , biology ,physics , chemestry){
//     console.log(math,biology,physics,chemestry);
//     const result = `${math} marks in mathmetics , ${biology}marks in bio , ${physics}marks in physics , ${chemestry}marks in chemestry`
//     return result;
// }
// const marks = subject(67,74,78,72);
// alert(marks);

// const results = subject(23,34,67,78)
// alert(results);

// function greeting(name){
//     return "hello"+" "+ name+"!";
// };
// alert(greeting(friends));

// function addition ( a , b){
//     return a+b;
// }
// alert(addition(3,4));

//  <====== function without parametre ======>

// function functionname (){
//     return "hello world "
// }
// alert(functionname());

// <======= function with default parameters ======>

// function greet ( name = "sunil"){
//     return "hello" + name;

// };
//   alert(greet());
//   alert(greet("chandan"));
function showLoginSuccessToast() {
    var loginSuccessToast = document.getElementById("loginSuccessToast");
    loginSuccessToast.classList.remove("hidden");
  
    setTimeout(function() {
      loginSuccessToast.classList.add("hidden");
    }, 3000); // Hide the toaster after 3 seconds
  }
  