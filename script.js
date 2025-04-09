const inputValue = document.getElementById("userinput");

document.querySelectorAll(".operations").forEach(function (item) {
    item.addEventListener("click", function (e) {
        const operator = e.target.innerText;
        let current = inputValue.innerText;
        let lastChar = current.slice(-1);

        if (operator === "=") {
            if (!isNaN(lastChar)) {
                try {
                    inputValue.innerText = eval(current).toString();
                } catch (err) {
                    inputValue.innerText = "Error";
                }
            }
        } else if (operator === "AC") {
            inputValue.innerText = "0";
        } else if (operator === "DEL") {
            inputValue.innerText = current.slice(0, -1);
            if (inputValue.innerText.length === 0) {
                inputValue.innerText = "0";
            }
        } else {
            // Prevent two operators in a row
            if ("+-*/".includes(lastChar) && "+-*/".includes(operator)) {
                inputValue.innerText = current.slice(0, -1) + operator;
            } else if (!isNaN(lastChar) || lastChar === ".") {
                inputValue.innerText += operator;
            }
        }
    });
});

document.querySelectorAll(".numbers").forEach(function (item) {
    item.addEventListener("click", function (e) {
        const char = e.target.innerText.trim();
        let current = inputValue.innerText;

        // Reset from 0
        if (current === "0" || current === "Error") {
            current = "";
        }

        // Only allow one decimal per number (split by operator)
        if (char === ".") {
            const parts = current.split(/[\+\-\*\/]/); // split by operators
            const lastPart = parts[parts.length - 1];

            if (!lastPart.includes(".")) {
                inputValue.innerText = current + ".";
            }
        } else {
            inputValue.innerText = current + char;
        }
    });
});
