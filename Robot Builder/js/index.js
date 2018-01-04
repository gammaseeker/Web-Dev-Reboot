function initialize(){
    speed = document.getElementById("speed");
    shield = document.getElementById("shield");
    attack = document.getElementById("attack");
    mode = document.getElementById("mode");
    ship = document.getElementById("ship");
    engine = document.getElementById("engine");
    ctr = document.getElementsByClassName("ctr");
    ctrArr = [0, 0, 0];
    modeString = mode.innerHTML;
    engString = engine.innerHTML;
}

function add(value, index){
    if(ctrArr[index] >= 0 && (ctrArr[index] + value) > 0){
        ctrArr[index] += value;
        ctr[index].innerHTML = ctrArr[index];
    }
}

function toggleMode(m){
    modeString = m;
    display();
}

function selectEngine(eng){
    engString = eng;
    display();
}

function display(){
    mode.innerHTML = modeString; 
    engine.innerHTML = engString;
}