// const  planet = ["Mercury", "Vernus", [[["Oyo", "Lagos", "Ogun", "Osun", "Anambra", "Abia"], "Somalia", "Rewanda", "South Afirca", "Ghana", "Togo", "Benin"], "Asia", "Europe", "Australia", "South America", "North America"], "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"];

// let all = "";
//   for(let x of planet)
//   {
//         all += x + "<br>";
//         if (x === 2)
//         {
              
//         }
//       document.getElementById("display").innerHTML = all;
//   }


// const display = document.getElementById("screen");
// const allButtons = Array.from(document.getElementsByClassName("btn"));

// let a;
// let b;
// let calculate;

// allButtons.map(button => {
//   button.addEventListener("click", (e) => {
//       switch(e.target.innerText)
//       {
//             case "Ac":
//                   display.innerText  = "";
//                   break;
//             case "Del":
//                   display.innerText = display.innerText.slice(0, -1);
//                   break;
//             case "=":
//                 display.innerText = () => {
//                   switch(e.target.innerText)
//                   {
//                         case "+":
//                               calculate = a + b;
//                              break;
//                         case "*":
//                               calculate = a * b;
//                               break;
//                         case "÷":
//                               calculate = a / b;
//                               break;
//                         case "-":
//                               calculate = a - b;
//                               break;
//                         default:
//                               display.innerText = "Syntax Error!"
//                   }
//                   console.log(calculate)
//                 }
            // case "=":
            //      if (display.innerText)
            //      {
            //       display.innerText = eval(display.innerText);
            //      }
            //       break;
//             default:
//                   display.innerText += e.target.innerText;
//       }
//   })
// })

let a = 5;
const b = 10;
let result = a + b;
alert(result)
console.log(result)
document.getElementById("three").innerHTML = result;
