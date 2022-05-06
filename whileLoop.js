


const submitData2 =  () => {
      const input1 = document.getElementById("pt1");
      const input2 = document.getElementById("pt2");
      const input3 = document.getElementById("pt3");
      const display = document.getElementById("display");
        let result = "";
      //   alert(input1.value)
      //   alert(input2.value)
        result += "<table border='1'><tr>"
      let ll = parseInt(input1.value)+parseInt(input3.value);
        i = input3.value;
        while( i < ll)
        {
            result += "<td>" + i + "Times";
            result += "<table border=1>";
            j = 1;
            while( j <= input2.value)
            {
                  result += "<tr><td>" + i + " x " + j + " = " + i * j + "</td></tr>";
                  j++;
            }
            result += "</table>";
            result += "</td>";
            i++;
        }
        result += "</tr></table>";
        display.innerHTML = result;
      }
      
      