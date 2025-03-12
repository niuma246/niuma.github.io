const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/photo1.png") {
    myImage.setAttribute("src", "images/photo2.jpg");
  } else {
    myImage.setAttribute("src", "images/photo1.png");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter yout name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool,${myName}`;
  }
}
myButton.onclick = function () {
  setUserName();
};
