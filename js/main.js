const buttons = document.querySelectorAll(".btns button"),
    display = document.querySelector(".display"),
    operation = document.querySelector(".operation");
const vars = new Array();
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.id !== "del" && btn.id !== "reset" && btn.id !== "equal" && btn.id !== "plus"
            && btn.id !== "min" && btn.id !== "mult" && btn.id !== "divide") {
            
            display.innerText += btn.innerText;

        }
        if (btn.id === "plus" || btn.id === "min" || btn.id === "divide" || btn.id === "mult") {
            vars.push(display.innerText);
            console.log(vars.toString());
            operation.innerText += display.innerText + btn.innerText;
            display.innerText = "";
        }
        if (btn.id === "equal") {

            // console.log(vars.toString());
        }
        // if (btn.id === "plus" || btn.id === "min" || btn.id === "divide" || btn.id === "mult") {
        //         operation.innerText = 0 + " " + btn.innerText ;
        //         display.innerText = 0;
        // }

        if (btn.id === "reset") {
            operation.innerText = "";
            display.innerText = "";
            vars.length = 0;
        }
    });
});
