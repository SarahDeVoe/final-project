let audioOne = new Audio("sounds/short-call.mp3")
let audioTwo = new Audio("sounds/long-high-call.mp3")
let audioThree = new Audio("sounds/growl.mp3")
let audioFour = new Audio("sounds/long-growl.mp3")
let audioFive = new Audio("sounds/long-call.mp3")


let imageOne = document.getElementById("habitat")
let imageTwo = document.getElementById("drinking")
let imageThree = document.getElementById("charge")
let imageFour = document.getElementById("trunk")
let imageFive = document.getElementById("mouth")


let factOne = document.getElementById("factOne")
let factTwo = document.getElementById("factTwo")
let factThree = document.getElementById("factThree")
let factFour = document.getElementById("factFour")
let factFive = document.getElementById("factFive")


factOne.style.display = 'none';

imageOne.onclick = () => {
  if (factOne.style.display === 'none') {
    factOne.style.display = 'block';
    audioOne.play();
  } else {
    factOne.style.display = 'none';
  }
};


factTwo.style.display = 'none';

imageTwo.onclick = () => {
  if (factTwo.style.display === 'none') {
    factTwo.style.display = 'block';
    audioTwo.play();
  } else {
    factTwo.style.display = 'none';
  }
};


factThree.style.display = 'none';

imageThree.onclick = () => {
  if (factThree.style.display === 'none') {
    factThree.style.display = 'block';
    audioThree.play();
  } else {
    factThree.style.display = 'none';
  }
};


factFour.style.display = 'none';

imageFour.onclick = () => {
  if (factFour.style.display === 'none') {
    factFour.style.display = 'block';
    audioFour.play();
  } else {
    factFour.style.display = 'none';
  }
};


factFive.style.display = 'none';

imageFive.onclick = () => {
  if (factFive.style.display === 'none') {
    factFive.style.display = 'block';
    audioFive.play();
  } else {
    factFive.style.display = 'none';
  }
};
