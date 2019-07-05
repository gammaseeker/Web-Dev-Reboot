function initialize()
{
	colorArray = [];
	actionArray = [];
	colorString = ["red","green","blue","yellow"];
	roundNum = 1;
	startButton = document.getElementById("startGame");
	buttonArray = document.getElementsByTagName("button");
	Rounds = document.getElementById("rndCtr");
	simon = document.getElementById("says");
}

function compareArrays(arrayOne,arrayTwo)
{
	if(arrayOne.length === arrayTwo.length)
	{
		for(var i = 0; i<arrayOne.length; i++)
		{
			if(arrayOne[i] != arrayTwo[i])
			{
				lose();
				return false;
			}
		}
		return true;
	}
	return false;
}

function toggleButtons(bool)
{
	for(var i = 1; i<buttonArray.length; i++)
	{
		buttonArray[i].disabled = bool;
	}
}

function showColors()
{	
	toggleButtons(true);
	current = 0;
	interval = setInterval(function(){
	simon.style.backgroundColor = colorArray[current];
	if(current < colorArray.length)
	{
		current++;
		setTimeout(function(){simon.style.backgroundColor = "transparent";}, 500);
	}
	else
	{
		clearInterval(interval);
		toggleButtons(false);
		return;
	}}, 600);
}

function selection(color)
{
	actionArray.push(color);
	if(compareArrays(actionArray,colorArray))
	{
		roundNum++;
		start();
		display();
	}
}

function start()
{
	display();
	colorArray.push(colorString[parseInt(Math.random()*4)]);
	showColors();
	actionArray = [];
}
function display()
{
	Rounds.innerHTML = roundNum;
}
function lose()
{
	simon.innerHTML = "You survived " + roundNum + " rounds. The correct pattern was " + colorArray;
	for(var i = 1; i<buttonArray.length; i++)
	{
		buttonArray[i].style.display = "none";
	}
	startButton.style.display = "none";
}