function getButton(event) {
  let name = prompt("What is your name?");
  if (name) {
    alert(`Hey, ${name}!`);
  } else {
    alert("No value entered.");
  }
  let email = prompt("What is your email address?");
  if(email){
    alert("Thank you, exciting news is coming your way! 😊");
  } else{
    alert("No value entered.");
  }
}

let button = document.querySelector("#button-element button");
button.addEventListener("click", getButton);
