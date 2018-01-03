function initialize(){
    speed = document.getElementById("speed");
    shield = document.getElementById("shield");
    attack = document.getElementById("attack");
    mode = document.getElementById("mode");
    engine = document.getElementById("engine");
    ctr = document.getElementsByClassName("ctr");
    ctrArr = [0, 0, 0];

}

function add(value, index){
    if(ctrArr[index] >= 0){
        ctrArr[index] += value;
        ctr[index].innerHTML = ctrArr[index];
    }
}

function toggleMode(m){
    modeString = m;
}

function selectEngine(eng){
    engString = eng;
}

function display(){
    mode.innerHTML = modeString; 
    engine.innerHTML = engString;
}