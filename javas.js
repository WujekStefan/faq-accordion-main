const plusIcon = document.getElementsByClassName('faq__plus_icon');
const paragraph = document.getElementsByClassName('faq__description');

const plusIconOne = document.getElementById('faq__plus_icon1');

const textActiveOne = document.getElementById('faq__text_1');

const minusIconOne = document.getElementById('faq__minus_icon1');

const plusIconTwo = document.getElementById('faq__plus_icon2');

const textActiveTwo = document.getElementById('faq__text_2');

const minusIconTwo = document.getElementById('faq__minus_icon2');

const plusIconThree = document.getElementById('faq__plus_icon3');

const textActiveThree = document.getElementById('faq__text_3');

const minusIconThree = document.getElementById('faq__minus_icon3');

const plusIconFour = document.getElementById('faq__plus_icon4');

const textActiveFour = document.getElementById('faq__text_4');

const minusIconFour = document.getElementById('faq__minus_icon4');

const paragraphOne = document.getElementById('faq__description_one');

const paragraphTwo = document.getElementById('faq__description_two');

const paragraphThree = document.getElementById('faq__description_three');

const paragraphFour = document.getElementById('faq__description_four');

plusIconOne.addEventListener('click', myFunction1);
textActiveOne.addEventListener('click', myFunction1);
plusIconTwo.addEventListener('click', myFunction2);
textActiveTwo.addEventListener('click', myFunction2);
plusIconThree.addEventListener('click', myFunction3);
textActiveThree.addEventListener('click', myFunction3);
plusIconFour.addEventListener('click', myFunction4);
textActiveFour.addEventListener('click', myFunction4);

function myFunction1() {
  if ((plusIconOne.clicked = true) || (textActiveOne.clicked = true)) {
    paragraphOne.style.display = 'block';
    plusIconOne.style.display = 'none';
    minusIconOne.style.display = 'block';
  }
}

function myFunction2() {
  if ((plusIconTwo.clicked = true) || (textActiveTwo.clicked = true)) {
    paragraphTwo.style.display = 'block';
    plusIconTwo.style.display = 'none';
    minusIconTwo.style.display = 'block';
  }
}
function myFunction3() {
  if ((plusIconThree.clicked = true) || (textActiveThree.clicked = true)) {
    paragraphThree.style.display = 'block';
    plusIconThree.style.display = 'none';
    minusIconThree.style.display = 'block';
  }
}
function myFunction4() {
  if ((plusIconFour.clicked = true) || (textActiveFour.clicked = true)) {
    paragraphFour.style.display = 'block';
    plusIconFour.style.display = 'none';
    minusIconFour.style.display = 'block';
  }
}

minusIconOne.addEventListener('click', myFunction11);
minusIconTwo.addEventListener('click', myFunction22);
minusIconThree.addEventListener('click', myFunction33);
minusIconFour.addEventListener('click', myFunction44);

function myFunction11() {
  if ((minusIconOne.clicked = true)) {
    paragraphOne.style.display = 'none';
    plusIconOne.style.display = 'block';
    minusIconOne.style.display = 'none';
  }
}

function myFunction22() {
  if ((minusIconTwo.clicked = true)) {
    paragraphTwo.style.display = 'none';
    plusIconTwo.style.display = 'block';
    minusIconTwo.style.display = 'none';
  }
}

function myFunction33() {
  if ((minusIconThree.clicked = true)) {
    paragraphThree.style.display = 'none';
    plusIconThree.style.display = 'block';
    minusIconThree.style.display = 'none';
  }
}

function myFunction44() {
  if ((minusIconFour.clicked = true)) {
    paragraphFour.style.display = 'none';
    plusIconFour.style.display = 'block';
    minusIconFour.style.display = 'none';
  }
}
// function onClick() {
//   if ((plusIconOne.clicked = true)) {
//     paragraphOne.style.display = 'block';
//   } else if ((plusIconTwo.clicked = true)) {
//     paragraphTwo.style.display = 'block';
//   } else if ((plusIconThree.clicked = true)) {
//     paragraphThree.style.display = 'block';
//   } else if ((plusIconFour.clicked = true)) {
//     paragraphFour.style.display = 'block';
//   }
// }

// for (var i = 0; i < plusIcon.length; i++) {
//   plusIcon[i].addEventListener('click', onClick, false);
