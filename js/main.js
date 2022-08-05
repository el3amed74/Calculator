const buttons = document.querySelectorAll(".btns button"),
    display = document.querySelector(".display"),
    operation = document.querySelector(".operation");
const vars = new Array(),
    ids = new Array();
let answer = 0;
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.id !== "del" && btn.id !== "reset" && btn.id !== "equal" && btn.id !== "plus"
            && btn.id !== "min" && btn.id !== "mult" && btn.id !== "divide") {
            display.innerText += btn.innerText;
        }
        if (btn.id === "del") {
            display.innerText = display.innerText.slice(0, -1);
        }
        if (btn.id === "reset") {
            operation.innerHTML = "";
            display.innerHTML = "";
            vars.length = 0;
            ids.length = 0;
            console.log(vars.toString());
        }
        if (btn.id === "plus" || btn.id === "min" || btn.id === "divide" || btn.id === "mult" || btn.id === "equal") {

            vars.push(display.innerText);
            console.log(vars.toString());
            ids.push(btn.id);
            console.log(btn.id,ids);
            operation.innerText += display.innerText + " " + btn.innerText;
            display.innerText = "";
            if (vars.length === 2) {

                if (ids[0] === "plus" ) {
                    answer = Number(vars[0]) + Number(vars[1]);
                    operation.innerText = answer + "" + btn.innerText;
                    vars.length = 0;
                    vars.push(answer);
                    if (ids[1] === "equal" || ids[0] === "equal") {
                        display.innerText = answer + "";
                        operation.innerText = "";
                        vars.length = 0;
                        ids.shift();
                    }
                    if (ids[1] === "plus"||ids[0]==="plus") {
                        vars.length = 0;
                        vars.push(answer);
                    }
                    console.log(vars.toString());
                    ids.shift();
                    

                } else if (ids[0] === "min" ) {
                    answer = Number(vars[0]) - Number(vars[1]);
                    operation.innerText = answer + "" + btn.innerText;
                    vars.length = 0;
                    vars.push(answer);
                    if (ids[1] === "equal" || ids[0] === "equal") {
                        display.innerText = answer + "";
                        operation.innerText = "";
                        vars.length = 0;
                        ids.shift();
                    }
                    if (ids[1] === "min"||ids[0]==="min") {
                        vars.length = 0;
                        vars.push(answer);
                    }
                    console.log(vars.toString());
                    ids.shift();
                    

                }else if (ids[0] === "mult" ) {
                    answer = Number(vars[0]) * Number(vars[1]);
                    operation.innerText = answer + "" + btn.innerText;
                    if (ids[1] === "equal" || ids[0] === "equal") {
                        display.innerText = answer + "";
                        operation.innerText = "";
                        vars.length = 0;
                        ids.shift();
                    }
                    if (ids[1] === "mult"||ids[0]==="mult") {
                        vars.length = 0;
                        vars.push(answer);
                    }
                    console.log(vars.toString());
                    ids.shift();
                    

                }else if (ids[0] === "divide" ) {
                    answer = Number(vars[0]) / Number(vars[1]);
                    operation.innerText = answer + "" + btn.innerText;
                    if (ids[1] === "equal" || ids[0] === "equal") {
                        display.innerText = answer + "";
                        operation.innerText = "";
                        vars.length = 0;
                        ids.shift();
                    }
                    if (ids[1] === "divide" ||ids[0]==="divide") {
                        vars.length = 0;
                        vars.push(answer);
                    }
                    console.log(vars.toString());
                    ids.shift();
                    
                }                
            }
        }
    });
});
