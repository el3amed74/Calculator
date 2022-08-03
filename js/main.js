const buttons = document.querySelectorAll(".btns button"),
    display = document.querySelector(".display"),
    operation = document.querySelector(".operation");
const vars = new Array(),
    ids = new Array();
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.id !== "del" && btn.id !== "reset" && btn.id !== "equal" && btn.id !== "plus"
            && btn.id !== "min" && btn.id !== "mult" && btn.id !== "divide") {

            display.innerText += btn.innerText;

        }
        if(btn.id==="del"){
            display.innerText=display.innerText.slice(0,-1);
        }
        if (btn.id === "plus" || btn.id === "min" || btn.id === "divide" || btn.id === "mult") {
            vars.push(display.innerText);
            console.log(vars.toString());
            ids.push(btn.id);
            console.log(btn.id);
            operation.innerText += display.innerText + btn.innerText;
            display.innerText = "";
            if (vars.length === 2) {
                if (ids[0] === "plus") {
                    let answer = Number(vars[0]) + Number(vars[1]);
                    operation.innerText = answer + "" + btn.innerText;
                    //display.innerText = "";
                    vars.length = 0;
                    vars.push(answer);
                    console.log(vars.toString());
                    ids.shift();
                }else if (ids[0] === "min") {
                    let answer = Number(vars[0]) - Number(vars[1]);
                    operation.innerText = answer + "" + btn.innerText;
                    //display.innerText = "";
                    vars.length = 0;
                    vars.push(answer);
                    console.log(vars.toString());
                    ids.shift();
                }else if (ids[0] === "mult") {
                    let answer = Number(vars[0]) * Number(vars[1]);
                    operation.innerText = answer + "" + btn.innerText;
                    //display.innerText = "";
                    vars.length = 0;
                    vars.push(answer);
                    console.log(vars.toString());
                    ids.shift();
                }else if (ids[0] === "divide") {
                    let answer = Number(vars[0]) / Number(vars[1]);
                    operation.innerText = answer + "" + btn.innerText;
                    //display.innerText = "";
                    vars.length = 0;
                    vars.push(answer);
                    console.log(vars.toString());
                    ids.shift();
                }
            }
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
