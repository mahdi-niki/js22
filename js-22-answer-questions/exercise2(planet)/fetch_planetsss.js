//1. The URL where our planet data is located is: "https://handlers.education.launchcode.org/static/planets.json".
//2. Add the code to fetch this URL
//   -The data you receive as a response should be an array containing 6 objects
//3. show the first planet name and distance(first index of the array data)
//4. let's dynamically change which planet's info we're displaying each time the element with id "destination" is clicked. To do this:
//      a) Declare a counter variable, index that changes each time a click event takes place.
//      b) Use the value of index as the position in the planets array to use in the template literal.
//      c) Lastly, to ensure that the value of the index does not surpass the length of the planets array, implement a mechanism to control the maximum allowed value for the index

////////Answer///////////

let indexPlanet = 0;
let planets = [];
const destination = document.querySelector("#destination");
destination.style.cursor = "pointer";
const h3 = document.querySelector("h3");

fetch("https://handlers.education.launchcode.org/static/planets.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    planets = data;
    h3.innerHTML = `name: ${planets[0].name} </br></br> distance: ${planets[0].distance}`;
    destination.addEventListener("click", disPlanet);
  })
  .catch((error) => {
    console.log("Error fetching data:", error);
  });

function disPlanet() {
  indexPlanet = (indexPlanet + 1) % planets.length;
  h3.innerHTML = `name: ${planets[indexPlanet].name} </br></br>
       distance: ${planets[indexPlanet].distance}`;
}
