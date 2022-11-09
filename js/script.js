const editor = document.querySelector("textarea");

const userConsole = document.querySelector("#console");

let consoleOpen = false;

function openConsole() {
    userConsole.style.animation = "showConsole 2s forwards";
    consoleOpen = true;
}

function closeConsole() {
    userConsole.style.animation = "hideConsole 2s forwards";
    consoleOpen = false;
}
editor.addEventListener("click", (e) => {
    if (consoleOpen) {
        closeConsole();
    }
});

editor.addEventListener("keydown", (e) => {
    if (e.key == " " && editor.value[editor.value.length - 1] == "\n") {
        editor.value += "  ";
    }
});

const runBtn = document.querySelector("#run-btn");

runBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (consoleOpen == false) {
        openConsole();
    }
    userConsole.innerText = "";
    const console = {
        log(value) {
            userConsole.innerHTML += value + "\n";
        }
    }
    const document = userConsole;

    try {
        eval(editor.value);
    } catch (e) {
        console.log(e);
    }
});

const consoleBtn = document.querySelector("#console-btn");

consoleBtn.addEventListener("click", (e) => {
    openConsole();
})