
const userInput = document.getElementById("user-input");
const result = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

const phoneValidator = () => {
const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
if(userInput.value === "") {
  alert("Please provide a phone number");
  userInput.value = "";
}
else if(regex.test(userInput.value)) {
result.innerHTML += `<p>Valid US number: ${userInput.value}</p>`;
userInput.value = "";
}
else if(!regex.test(userInput.value)&&userInput.value !== "") {
  result.innerHTML += `<p>Invalid US number: ${userInput.value}</p>`;
  userInput.value = "";
}

}

const clearResult = () => {
    userInput.value = "";
    result.innerHTML = "";
}

checkBtn.addEventListener("click", phoneValidator);
clearBtn.addEventListener("click", clearResult);