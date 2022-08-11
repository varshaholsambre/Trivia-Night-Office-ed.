let score = 0; 

// First Question
const myOneAnswer = document.getElementById("oneAnswer");
const myCardOne = document.getElementById("cardOne");
const myTwo = document.getElementById("two");
myOneAnswer.addEventListener("change", (e) => {
  if(myOneAnswer.value === "Michael" || myOneAnswer.value === "michael")
  {
    myCardOne.innerHTML = '<h1 class = "title is-4 has-text-primary is-size-1 has-text-centered">Correct</h1>';
    score++;
  }
  else
  {
    myCardOne.innerHTML = '<h1 class = "title is-4 has-text-danger is-size-4 has-text-centered">Incorrect. The correct answer was Michael</h1>';
  }
  myTwo.classList.remove("hidden");
});

//Second 
const myTwoAnswer = document.getElementById("twoAnswer");
const myCardTwo = document.getElementById("cardTwo");
const myThree = document.getElementById("three");
myTwoAnswer.addEventListener("change", (e) => {
  if(myTwoAnswer.value === "Meredith" || myTwoAnswer.value === "meredith")
  {
    myCardTwo.innerHTML = '<h1 class = "title is-4 has-text-primary is-size-1 has-text-centered">Correct</h1>';
    score++;
  }
  else
  {
    myCardTwo.innerHTML = '<h1 class = "title is-4 has-text-danger is-size-4 has-text-centered">Incorrect. The correct answer was Meredith</h1>';
  }
  myThree.classList.remove("hidden");
});

//Third
const myThreeAnswer = document.getElementById("threeAnswer");
const myCardThree = document.getElementById("cardThree");
const myFour = document.getElementById("four");
myThreeAnswer.addEventListener("change", (e) => {
  if(myThreeAnswer.value === "Beet" || myThreeAnswer.value === "beet" || myThreeAnswer.value === "Beets" || myThreeAnswer.value === "beets")
  {
    myCardThree.innerHTML = '<h1 class = "title is-4 has-text-primary is-size-1 has-text-centered">Correct</h1>';
    score++;
  }
  else
  {
    myCardThree.innerHTML = '<h1 class = "title is-4 has-text-danger is-size-4 has-text-centered">Incorrect. The correct answer was Beets</h1>';
  }
  myFour.classList.remove("hidden");
});

//Fourth
const myFourAnswer = document.getElementById("fourAnswer");
const myCardFour = document.getElementById("cardFour");
const myFive = document.getElementById("five");
myFourAnswer.addEventListener("change", (e) => {
  if(myFourAnswer.value === "Rabies" || myFourAnswer.value === "rabies")
  {
    myCardFour.innerHTML = '<h1 class = "title is-4 has-text-primary is-size-1 has-text-centered">Correct</h1>';
    score++;
  }
  else
  {
    myCardFour.innerHTML = '<h1 class = "title is-4 has-text-danger is-size-4 has-text-centered">Incorrect. The correct answer was Rabies</h1>';
  }
  myFive.classList.remove("hidden");
});

//Fifth
const myFiveAnswer = document.getElementById("fiveAnswer");
const myCardFive = document.getElementById("cardFive");
const mySix = document.getElementById("six");
myFiveAnswer.addEventListener("change", (e) => {
  if(myFiveAnswer.value === "Sprinkles" || myFiveAnswer.value === "sprinkles")
  {
    myCardFive.innerHTML = '<h1 class = "title is-4 has-text-primary is-size-1 has-text-centered">Correct</h1>';
    score++;
  }
  else
  {
    myCardFive.innerHTML = '<h1 class = "title is-4 has-text-danger is-size-4 has-text-centered">Incorrect. The correct answer was Sprinkles</h1>';
  }
  mySix.classList.remove("hidden");
});

//Sixth
const mySixAnswer = document.getElementById("sixAnswer");
const myCardSix = document.getElementById("cardSix");
const mySeven = document.getElementById("seven");
mySixAnswer.addEventListener("change", (e) => {
  if(mySixAnswer.value === "Oscar" || mySixAnswer.value === "oscar")
  {
    myCardSix.innerHTML = '<h1 class = "title is-4 has-text-primary is-size-1 has-text-centered">Correct</h1>';
    score++;
  }
  else
  {
    myCardSix.innerHTML = '<h1 class = "title is-4 has-text-danger is-size-4 has-text-centered">Incorrect. The correct answer was Oscar</h1>';
  }
  mySeven.classList.remove("hidden");
});

//Seventh
const mySevenAnswer = document.getElementById("sevenAnswer");
const myCardSeven = document.getElementById("cardSeven");
const myEight = document.getElementById("eight");
mySevenAnswer.addEventListener("change", (e) => {
  if(mySevenAnswer.value === "Sabre" || mySevenAnswer.value === "sabre")
  {
    myCardSeven.innerHTML = '<h1 class = "title is-4 has-text-primary is-size-1 has-text-centered">Correct</h1>';
    score++;
  }
  else
  {
    myCardSeven.innerHTML = '<h1 class = "title is-4 has-text-danger is-size-4 has-text-centered">Incorrect. The correct answer was Sabre</h1>';
  }
  myEight.classList.remove("hidden");
});

//Eighth
const myEightAnswer = document.getElementById("eightAnswer");
const myCardEight = document.getElementById("cardEight");
const myNine = document.getElementById("nine");
myEightAnswer.addEventListener("change", (e) => {
  if(myEightAnswer.value === "Big Tuna" || myEightAnswer.value === "Big tuna" || myEightAnswer.value === "big Tuna" || myEightAnswer.value === "big tuna" || myEightAnswer.value === "Tuna" || myEightAnswer.value === "tuna")
  {
    myCardEight.innerHTML = '<h1 class = "title is-4 has-text-primary is-size-1 has-text-centered">Correct</h1>';
    score++;
  }
  else
  {
    myCardEight.innerHTML = '<h1 class = "title is-4 has-text-danger is-size-4 has-text-centered">Incorrect. The correct answer was Big Tuna/Tuna</h1>';
  }
  myNine.classList.remove("hidden");
});

//Ninth
const myNineAnswer = document.getElementById("nineAnswer");
const myCardNine = document.getElementById("cardNine");
myNineAnswer.addEventListener("change", (e) => {
  if(myNineAnswer.value === "Cornell" || myEightAnswer.value === "cornell")
  {
    myCardNine.innerHTML = '<h1 class = "title is-4 has-text-primary is-size-1 has-text-centered">Correct</h1>';
    score++;
  }
  else
  {
    myCardNine.innerHTML = '<h1 class = "title is-4 has-text-danger is-size-4 has-text-centered">Incorrect. The correct answer was Cornell</h1>';
  }

if(score<4)
{
  endOne.classList.remove("hidden");
}
else if(score<7 && score>3)
{
  endTwo.classList.remove("hidden");
}
else{
  endThree.classList.remove("hidden");
}
});



