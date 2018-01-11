function initialize(){
       //["rgb(255, 0, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)", "rgb(0, 255, 255)", "rgb(0, 0, 255)", "rgb(255, 0, 255)"];//HARDCODED
      squares = document.getElementsByClassName("square");
      goal = document.getElementById("goal");
      msg = document.getElementById("message");

      hardMode = true;
      colors = generateColorArray();
      rndColor = colors[getRandomInt(colors.length)];
      msgDisplay = "";
      targetColor = "";
      targetColor = rndColor.substring(3, rndColor.length);//HARDCODED
      for(var i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
      }
      display();
}

function generateColorArray(){
      colorList = [];
      if(hardMode){
            for(var i = 0; i < 6; i++){
                  colorList.push(getRandomColor());
            }
      }
      else {
            for(var i = 0; i < 3; i++){
                  colorList.push(getRandomColor());
            }
      }

      return colorList;
}

function getRandomColor(){
      colorString = "rgb(" + getRandomInt(256) + ", " + getRandomInt(256) + ", " + getRandomInt(256) + ")";
      return colorString;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function pickColor(index){//compare color to targetColor
      if(squares[index].style.backgroundColor.substring(3, squares[index].style.backgroundColor.length) == targetColor){
            msgDisplay = "Correct!";
            changeColors(squares[index].style.backgroundColor);
      }
      else {
            squares[index].style.backgroundColor = "#232323";
            msgDisplay = "Try Again";
      }
      display();
}

function changeColors(color){//Loop through all squares and change colors
      for(var i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = color;
      }
}

function display(){
      goal.innerHTML = targetColor;
      msg.innerHTML = msgDisplay;
}
