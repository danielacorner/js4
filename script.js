// difficult to learn online:
// events

// LOOPING over an array with .forEach

// grab the bar chart div
const barChartDiv = document.querySelector(".barChart");

// build a bar chart out of data
const myCatsArr = [
  {
    name: "snuffles",
    age: 10,
    weight: 50,
    // method: fn in an object
    doMeow: () => {
      console.log("meow!");
    }
  },
  { name: "snuffleufpugp", age: 7, weight: 40 },
  { name: "bozo", age: 20, weight: 50 }
];

// usually you would fetch some data
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(resp => resp.json())
  .then(data => {
    console.log("⚡🚨: data", data);
  });

// append bars to the bar chart for each cat
// store the data on the elements

// function
// method = function inside an object

// forEach is a method on the Array class
myCatsArr.forEach((cat, idx) => {
  // append one bar
  const oneBarHTML =
    // template string
    // with data stored ON THE ELEMENT
    `<div data-cat-age=${cat.age}
  data-cat-weight=${cat.weight}
  class="bar bar${idx}" style="width: 10px; height: ${cat.age}px; background: red;"></div>`;

  // take the innerHTML of the bar chart,
  barChartDiv.innerHTML =
    // assign to itself, PLUS another bar of html
    barChartDiv.innerHTML + oneBarHTML;
});

// EVENTS - interacting with the page
// 💰💰💰💰💰💰

const tooltip = document.querySelector(".tooltip");

document.body.addEventListener("mouseover", event => {
  const bar = event.target;
  // when we mouseover a bar,
  // show the tooltip
  // IS IT A BAR we're mousing over?

  const thisCat = bar.dataset;
  const catWeight = thisCat.catWeight;
  const catAge = thisCat.catAge;
  console.log("⚡🚨: catWeight", catWeight);
  // put some data in it
  document.querySelector(".tooltip .age .value").innerHTML = catAge;
  document.querySelector(".tooltip .weight .value").innerHTML = catWeight;

  const isABar = Array.from(event.target.classList).includes("bar");
  if (isABar) {
    // display the tooltip
    tooltip.classList.remove("disabled");
  } else {
    // otherwise, hide the tooltip
    tooltip.classList.add("disabled");
  }
});

// do something 10 times
for (let index = 0; index < 10; index++) {}

// do something 10 times
new Array(10).forEach((empty, idx) => {});

const array1To10 = [...new Array(10)].map((empty, idx) => {
  return idx + 1;
});
console.log("⚡🚨: array1To10", array1To10);
