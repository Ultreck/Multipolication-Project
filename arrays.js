const  planet = ["Mercury", "Vernus", [[["Oyo", "Lagos", "Ogun", "Osun", "Anambra", "Abia"], "Somalia", "Rewanda", "South Afirca", "Ghana", "Togo", "Benin"], "Asia", "Europe", "Australia", "South America", "North America"], "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"];
let con = "";

  for (i = 0; i < planet.length; i++)
  {
      alert(planet[i])
      if (i == 2)
      {
            for (j = 0; j <=5; j++)
            {
                  alert(planet[i][j])
                  if (j == 0)
                  {
                        for (k = 0; k < 5; k++)
                        {
                              alert(planet[i][j][k])
                        }
                  }
            }
      }
  }
