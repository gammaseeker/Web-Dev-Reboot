function reset(){
      colors = generateColorArray();
      rndColor = colors[getRandomInt(colors.length)];
      msgDisplay = "";
      targetColor = "";
      targetColor = rndColor.substring(3, rndColor.length);
      banner.style.backgroundColor = "#4682b4";
      for(var i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
      }
      resetBtn.innerHTML = "New Colors"
      display();
}

function initialize(){
      squares = document.getElementsByClassName("square");
      goal = document.getElementById("goal");
      msg = document.getElementById("message");
      banner = document.getElementById("banner");
      resetBtn = document.getElementById("resetBtn");
      easyBtn = document.getElementById("easyBtn");
      hardBtn = document.getElementById("hardBtn");

      hardMode = true;
      colors = generateColorArray();
      rndColor = colors[getRandomInt(colors.length)];
      msgDisplay = "";
      targetColor = "";
      targetColor = rndColor.substring(3, rndColor.length);

      for(var i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
      }

      easyBtn.addEventListener("click", function(){
                  hardBtn.classList.remove("selected");
                  easyBtn.classList.add("selected");
                  colors = generateColorArray();
                  rndColor = colors[getRandomInt(colors.length)];
                  msgDisplay = "";
                  targetColor = "";
                  targetColor = rndColor.substring(3, rndColor.length);

                  for(var i = 0; i < 3; i++){
                        squares[i].style.backgroundColor = colors[i];
                  }
                  for(var i = 3; i < squares.length; i++){
                        squares[i].style.display = "none";
                  }
                  banner.style.backgroundColor = "#4682b4";
                  display();
      });

      hardBtn.addEventListener("click", function(){
                  hardBtn.classList.add("selected");
                  easyBtn.classList.remove("selected");
                  colors = generateColorArray();
                  rndColor = colors[getRandomInt(colors.length)];
                  msgDisplay = "";
                  targetColor = "";
                  targetColor = rndColor.substring(3, rndColor.length);

                  for(var i = 0; i < squares.length; i++){
                        squares[i].style.backgroundColor = colors[i];
                  }

                  for(var i = 3; i < squares.length; i++){
                        squares[i].style.display = "inline";
                  }
                  banner.style.backgroundColor = "#4682b4";
                  display();
      });
      display();
}

function toggleDifficulty(diff){
      hardMode = diff;
}

function pickColor(index){//compare color to targetColor
      if(squares[index].style.backgroundColor.substring(3, squares[index].style.backgroundColor.length) == targetColor){
            msgDisplay = "Correct!";
            changeColors(squares[index].style.backgroundColor);
            banner.style.backgroundColor = squares[index].style.backgroundColor;
            resetBtn.innerHTML = "Play Again?";
      }
      else {
            squares[index].style.backgroundColor = "#232323";
            msgDisplay = "Try Again";
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

function changeColors(color){//Loop through all squares and change colors
      for(var i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = color;
      }
}

function display(){
      goal.innerHTML = targetColor;
      msg.innerHTML = msgDisplay;
}
