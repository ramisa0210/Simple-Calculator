const inputValue = document.getElementById("userinput");

document.querySelectorAll(".operations").forEach(function (item) {
    item.addEventListener("click", function (e) {
        let lastValue = inputValue.innerText.slice(-1);
        console.log(lastValue);
        if (!isNaN(lastValue) && e.target.innerText === "=") {
            inputValue.innerText = eval(inputValue.innerText);
        } else if (e.target.innerText === "AC") {
            inputValue.innerText = "0";
        } else if (e.target.innerText === "DEL") {
            inputValue.innerText = inputValue.innerText.slice(0, -1);

            if (inputValue.innerText.length === 0) {
                inputValue.innerText = "0";
            }
        } else {
            if (!isNaN(lastValue)) {
                inputValue.innerText += e.target.innerText;
            }
        }
    });
});



document.querySelectorAll(".numbers").forEach(function (item) {
    item.addEventListener("click", function (e) {
        if (inputValue.innerText === "0") {
            inputValue.innerText = "";
        }

        // Check if the clicked button is a decimal point and if there's not already one in the input
        if (e.target.innerText === "." && !inputValue.innerText.includes(".")) {
            inputValue.innerText += e.target.innerText;
        } else if (e.target.innerText !== ".") {
            inputValue.innerText += e.target.innerText;
        }
    });
});
