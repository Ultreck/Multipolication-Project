


const submitData =  () => {
const input1 = document.getElementById("pt1");
const input2 = document.getElementById("pt2");
const input3 = document.getElementById("pt3");
const display = document.getElementById("display");
  let result = "";
//   alert(input1.value)
//   alert(input2.value)
  result += "<table border='1'><tr>"
let ll = parseInt(input1.value)+parseInt(input3.value);
  for (i = input3.value; i < ll; i++)
  {
      result += "<td>" + i + "Times";
      result += "<table border=1>";
      for (j = 1; j <= input2.value; j++)
      {
            result += "<tr><td>" + i + " x " + j + " = " + i * j + "</td></tr>";
      }
      result += "</table>";
      result += "</td>";
  }
  result += "</tr></table>";
  display.innerHTML = result;
}

