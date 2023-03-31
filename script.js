// 1- function to handle button clicks
// 2- adding eventlistener to add svg to the li
// 3- game logic ( when user clicks button, a new function should run which runs computer's turn and at all times
// you should check whether you won or not) and then display above who won

const buttonNodes = document.querySelectorAll("li");

buttonNodes.forEach((buttonClicked, index) => {
  console.log(buttonClicked);
  buttonClicked.addEventListener("click", clickEvent);

  function clickEvent(event) {
    addSvg(event, index);
    event.target.removeEventListener("click", clickEvent);
  }
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
  // console.log("addSvg is running for", button, "for index", index); // button is the event

  // const indexFoundUser = indexes.find((i) => {
  //   return i === index;
  // });
  // indexes.splice(index, 1);
  indexes[index] = "x";

  button.target.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="92" height="92" id="cross"><path d="M70.7 64.3c1.8 1.8 1.8 4.6 0 6.4-.9.9-2 1.3-3.2 1.3-1.2 0-2.3-.4-3.2-1.3L46 52.4 27.7 70.7c-.9.9-2 1.3-3.2 1.3s-2.3-.4-3.2-1.3c-1.8-1.8-1.8-4.6 0-6.4L39.6 46 21.3 27.7c-1.8-1.8-1.8-4.6 0-6.4 1.8-1.8 4.6-1.8 6.4 0L46 39.6l18.3-18.3c1.8-1.8 4.6-1.8 6.4 0 1.8 1.8 1.8 4.6 0 6.4L52.4 46l18.3 18.3z"></path></svg>`;
  let checkedWinner = checkWinner(indexes);
  if (checkedWinner === "continue") {
    setTimeout(() => {
      computerTurn(button);
    }, 500);
  }
  // setTimeout(() => {
  //   //! if you need to pass a FUNCTION WITH ARGUMENTS in SetTimeout, you need to make a function and then call the function with args in it.
  //   computerTurn(button);
  // }, 500);
  console.log(button.target.innerHTML);
}

function computerTurn(event) {
  // Get array of available indexes after user's turn
  const newIndexes = Object.entries(indexes)
    .filter((key) => {
      return key[1] === null;
    })
    .map((i) => {
      return i[0];
    });
}
// Add an O in a random avaiable box

// const randomIndex = Math.floor(Math.random() * newIndexes.length);
const randomIndex = newIndexes[Math.floor(Math.random() * newIndexes.length)];
indexes[randomIndex] = "o";
console.log("newIndexes >", newIndexes);

if (newIndexes.length !== 0) {
  buttonNodes[
    randomIndex
  ].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="circle"><path d="M10 .4A9.6 9.6 0 0 0 .4 10a9.6 9.6 0 1 0 19.2-.001C19.6 4.698 15.301.4 10 .4zm0 17.199A7.6 7.6 0 1 1 10 2.4a7.6 7.6 0 1 1 0 15.199z"></path></svg>`;
} else {
  console.log("newIndexes exhausted");
}

console.log("indexes >", indexes);

// const newIndexes2 = Object.entries(indexes);
// console.log(newIndexes2);
// newIndexes2.every(checkWinner);

function checkWinner(object) {
  // user is winnerobject
  if (object["0"] === object["3"] && object["3"] === object["6"]) {
    if (object["0"] === "x") {
      window.alert("YOU WON :)");
      return "user";
    } else if (object["0"] === "o") {
      window.alert("YOU LOST :/");
      return "computer";
    }
  } else if (object["0"] === object["1"] && object["1"] === object["2"]) {
    if (object["0"] === "x") {
      window.alert("YOU WON :)");
      return "user";
    } else if (object["0"] === "o") {
      window.alert("YOU LOST :/");
      return "computer";
    }
  } else if (object["2"] === object["5"] && object["5"] === object["8"]) {
    if (object["2"] === "x") {
      window.alert("YOU WON :)");
      return "user";
    } else if (object["2"] === "o") {
      window.alert("YOU LOST :/");
      return "computer";
    }
  } else if (object["6"] === object["7"] && object["7"] === object["8"]) {
    if (object["6"] === "x") {
      window.alert("YOU WON :)");
      return "user";
    } else if (object["6"] === "o") {
      window.alert("YOU LOST :/");
      return "computer";
    }
  } else if (object["0"] === object["4"] && object["4"] === object["8"]) {
    if (object["0"] === "x") {
      window.alert("YOU WON :)");
      return "user";
    } else if (object["0"] === "o") {
      window.alert("YOU LOST :/");
      return "computer";
    }
  } else if (object["2"] === object["4"] && object["4"] === object["6"]) {
    if (object["2"] === "x") {
      window.alert("YOU WON :)");
      return "user";
    } else if (object["2"] === "o") {
      window.alert("YOU LOST :/");
      return "computer";
    }
  } else if (object["1"] === object["4"] && object["4"] === object["7"]) {
    if (object["1"] === "x") {
      window.alert("YOU WON :)");
      return "user";
    } else if (object["1"] === "o") {
      window.alert("YOU LOST :/");
      return "computer";
    }
  } else if (object["3"] === object["4"] && object["4"] === object["5"]) {
    if (object["3"] === "x") {
      window.alert("YOU WON :)");
      return "user";
    } else if (object["3"] === "o") {
      window.alert("YOU LOST :/");
      return "computer";
    }
  }
  return "continue";
}

// TODO 1: dont allow user to do input in filled boxes
// TODO 2: check the late thingy in boxes
// TODO 3: update UI function instead of window.alert
