// 1- function to handle button clicks
// 2- adding eventlistener to add svg to the li
// 3- game logic ( when user clicks button, a new function should run which runs computer's turn and at all times
// you should check whether you won or not) and then display above who won

const buttonNodes = document.querySelectorAll("li");

buttonNodes.forEach((buttonClicked, index) => {
  // buttonClicked.addEventListener("click", (event) => addSvg(event, index));
  // buttonClicked.addEventListener("click", addSvg(buttonClicked));

  buttonClicked.addEventListener("click", (event) => {
    // we cant directly pass index in addeventlistener
    addSvg(event, index);
  });

  // buttonClicked; //asign index to them
});

let indexes = {
  0: null,
  1: null,
  2: null,
  3: null,
  4: null,
  5: null,
  6: null,
  7: null,
  8: null,
};

function addSvg(button, index) {
  // console.log("addSvg is running for", button, "for index", index);

  // const indexFoundUser = indexes.find((i) => {
  //   return i === index;
  // });
  // indexes.splice(index, 1);

  indexes[index] = "x";

  button.target.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="92" height="92" id="cross"><path d="M70.7 64.3c1.8 1.8 1.8 4.6 0 6.4-.9.9-2 1.3-3.2 1.3-1.2 0-2.3-.4-3.2-1.3L46 52.4 27.7 70.7c-.9.9-2 1.3-3.2 1.3s-2.3-.4-3.2-1.3c-1.8-1.8-1.8-4.6 0-6.4L39.6 46 21.3 27.7c-1.8-1.8-1.8-4.6 0-6.4 1.8-1.8 4.6-1.8 6.4 0L46 39.6l18.3-18.3c1.8-1.8 4.6-1.8 6.4 0 1.8 1.8 1.8 4.6 0 6.4L52.4 46l18.3 18.3z"></path></svg>`;
  setTimeout(computerTurn, 500);
}

function computerTurn() {
  // indexes.splice(randomIndex, 1);

  // Get array of available indexes after user's turn
  const newIndexes = Object.entries(indexes)
    .filter((key) => {
      return key[1] === null;
    })
    .map((i) => {
      return i[0];
    });

  // Add an O in a random avaiable box

  // const randomIndex = Math.floor(Math.random() * newIndexes.length);
  const randomIndex = newIndexes[Math.floor(Math.random() * newIndexes.length)];
  indexes[randomIndex] = "o";
  console.log("newIndexes >", newIndexes.length);

  if (newIndexes.length !== 0) {
    buttonNodes[
      randomIndex
    ].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="circle"><path d="M10 .4A9.6 9.6 0 0 0 .4 10a9.6 9.6 0 1 0 19.2-.001C19.6 4.698 15.301.4 10 .4zm0 17.199A7.6 7.6 0 1 1 10 2.4a7.6 7.6 0 1 1 0 15.199z"></path></svg>`;
  } else {
    console.log("newIndexes exhausted");
  }

  console.log("indexes >", indexes);
  //update newIndexes
}
