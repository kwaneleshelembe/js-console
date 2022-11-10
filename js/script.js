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

const themeContainer=document.querySelector("#theme");

let light=true;

function darkMode(){
    document.body.className="bg-dark text-light";
    consoleBtn.className="btn btn-primary col-4 col-lg-3 offset-1 offset-lg-2";
    runBtn.className="btn btn-success col-4 col-lg-3 offset-2";
    themeContainer.innerHTML="<i class='fa fa-sun fa-lg' title='light mode'></i>"
}

function lightMode(){
    document.body.className="bg-light text-dark";
    consoleBtn.className="btn btn-outline-primary col-4 col-lg-3 offset-1 offset-lg-2";
    runBtn.className="btn btn-outline-success col-4 col-lg-3 offset-2";
    themeContainer.innerHTML="<i class='fa fa-moon fa-lg' title='dark mode'></i>"
}

themeContainer.addEventListener("click",(e)=>{
    if(light){
        darkMode();
        light=false;
    }else{
        lightMode();
        light=true;
    }
});
