
const container = document.body;
const parentDiv = document.createElement("div");
const div1 = document.createElement("div");
const div2 = document.createElement("div");


const table = document.createElement("table");
const inputOne = document.createElement("input");
const inputTwo = document.createElement("input");
const inputThree = document.createElement("input");
const header = document.createElement("h2");
const button = document.createElement("button");
container.append(parentDiv);
parentDiv.append(div1, div2)
div1.append(header, inputOne, inputTwo, inputThree, button);
div2.append(table)

parentDiv.setAttribute("class", "parent")
div1.setAttribute("class", "container1", "id", "div1");
div2.setAttribute("class", "container2", "id", "div2");
table.setAttribute("id", "table");
inputOne.setAttribute('id', "input1")
inputTwo.setAttribute('id', "input2")
inputThree.setAttribute('id', "input3")
button.setAttribute('id', "button")
button.innerHTML = "Submit";
button.setAttribute("onclick", "timeTable()");
header.innerHTML = "Multiplication Table";
header.style.textAlign = "center";
inputOne.setAttribute("placeholder", "Enter Number Of Column");
inputTwo.setAttribute("placeholder", "Enter Number Of Row");
inputThree.setAttribute("placeholder", "Input where to Start From");




const timeTable = () => {
      let result = " ";
      let third = inputThree.value;
      ll = parseInt(inputOne.value)+parseInt(third.value);
       for (i = 1; i <= inputOne.value; i++)
      {
            result += "<tr>";
            for (j = 1; j <= inputTwo.value; j++)
            {
                   if (i === 1 && j === 1)
                  {
                        result += "<td>&times</td>";
                  }
                  else 
                  {
                        if (i === 1 || j === 1)
                        {
                              result += "<th>" + i * j +"</th>";
                        }
                        else
                        {
                              result += "<td>" + i * j + "</td>";
                        }
                  }
            }
            result += "</tr>";
  }
  table.innerHTML = result;
  inputOne.value = "";
  inputTwo.value = "";
 inputThree.value = "";

}




// for loops
// ll = parseInt(b.value)+parseInt(sf.value);




// i = 20;
// while(i>12){
//       alert("Good Morning");
//       i--;
// }
// console.log(i)



// i = 20;
// do
// {
//       alert("Greeting");
//       i--;
// }
// while(i>12)
// console.log(i)