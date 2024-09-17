
let themeButton = document.getElementById("theme-button");

const toggleDarkMode = () => {
  // Write your code to manipulate the DOM here
  document.body.classList.toggle("dark-mode");

  
}
themeButton.addEventListener("click", toggleDarkMode);

let signNowButton = document.getElementById("sign-now-button");
let count = 3;

const addSignature = (person) => {
    // Write your code to manipulate the DOM here
    let newSignature = document.createElement("p");
    newSignature.textContent = `🖊️ ${person.name.value} from ${person.hometown.value} just signed and supports!`;
  
    let signaturesSection = document.getElementById("signatures");
    signaturesSection.appendChild(newSignature);

    let counter = document.getElementById("counter");
    counter.remove();
    count = count + 1;
    let newCounter = document.createElement("p");
    newCounter.id = "counter";
    newCounter.textContent = "🖊️ " + count + " people have signed this petition and support this cause.";
    signaturesSection.appendChild(newCounter);
    
}

// TODO: Remove the click event listener that calls addSignature()

// TODO: Complete validation form

const validateForm = () => {
  const person = {
    name: document.getElementById('name'),
    hometown: document.getElementById('hometown'),
    email: document.getElementById('email')
  }
  
  let containsErrors = false;

  var petitionInputs = document.getElementById("sign-petition").elements;

  // TODO: Loop through all inputs
  for(let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 2) {
      containsErrors = true;
      petitionInputs[i].classList.add("error");
      console.log(petitionInputs[i].classList);
    }
    else {
      petitionInputs[i].classList.remove("error");
    }
  }

  // check email input to see if it ends in .com

  if (!person.email.value.includes('.com')) {
      containsErrors = true;
      email.classList.add('error');
  }
  else {
      person.email.classList.remove('error');
  }
  
  if(containsErrors == false) {
    addSignature(person);
    toggleModal(person);
    for(let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
    }
    containsErrors = false;
  }

}

signNowButton.addEventListener('click', validateForm);

let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration:'2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
}

let revealableContainers = document.querySelectorAll(".revealable");

const reveal = () => {
  for (let i = 0; i < revealableContainers.length; i++)
  {
    let windowHeight = window.innerHeight;
    let  topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top
    if(topOfRevealableContainer < windowHeight - animation.revealDistance) {
      revealableContainers[i].classList.add("active");
    }
    else {
      revealableContainers[i].classList.remove("active");
    }
  }
}
window.addEventListener('scroll', reveal);

const toggleModal = (person) => {
    let modal = document.getElementById("thanks-modal")
    let modalContent = document.getElementById("thanks-modal-content");

    modal.style.display = 'flex';
    modalContent.textContent = `Thank you so much ${person.name.value}!`;
    let intervalID = setInterval(scaleImage, 500);

    setTimeout(() => {
      modal.style.display = 'none';
      clearInterval(intervalID);
    }, 4000);
}

let scaleFactor = 1;
modalImage = document.getElementById("modal-image");

const scaleImage = () => {
  if(scaleFactor == 1)
    scaleFactor = 0.8;
  else
    scaleFactor = 1;

  modalImage.style.transform = `scale(${scaleFactor})`;
}