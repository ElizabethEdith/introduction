let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/myphoto2.jpg') {
      myImage.setAttribute('src','images/myphoto3.jpg');
    } else {
      myImage.setAttribute('src','images/myphoto2.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');

function setUserName() {
    let myName = prompt('Hello, hello, what\'s your name?');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Today is a great day, ' + myName + '! Rise up and shine!';
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Today is a great day, ' + storedName + '! Rise up and shine!';
  }

  myButton.onclick = function() {
    setUserName();
  }