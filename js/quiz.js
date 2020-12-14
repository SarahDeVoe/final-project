let imageSix = document.getElementById("picture-six")
let imageSeven = document.getElementById("picture-seven")
let imageEight = document.getElementById("picture-eight")
let imageNine = document.getElementById("picture-nine")
let imageTen = document.getElementById("picture-ten")


let buttonOne = document.getElementById("button-one")
let buttonTwo = document.getElementById("button-two")
let buttonThree = document.getElementById("button-three")
let buttonFour = document.getElementById("button-four")
let buttonFive = document.getElementById("button-five")


imageSix.style.display = 'none';

buttonOne.onclick = () => {
  if (imageSix.style.display === 'none') {
    imageSix.style.display = 'block';
  } else {
    imageSix.style.display = 'none';
  }
};


imageSeven.style.display = 'none';

buttonTwo.onclick = () => {
  if (imageSeven.style.display === 'none') {
    imageSeven.style.display = 'block';
  } else {
    imageSeven.style.display = 'none';
  }
};


imageEight.style.display = 'none';

buttonThree.onclick = () => {
  if (imageEight.style.display === 'none') {
    imageEight.style.display = 'block';
  } else {
    imageEight.style.display = 'none';
  }
};


imageNine.style.display = 'none';

buttonFour.onclick = () => {
  if (imageNine.style.display === 'none') {
    imageNine.style.display = 'block';
  } else {
    imageNine.style.display = 'none';
  }
};


imageTen.style.display = 'none';

buttonFive.onclick = () => {
  if (imageTen.style.display === 'none') {
    imageTen.style.display = 'block';
  } else {
    imageTen.style.display = 'none';
  }
};
