function initialize()
{
	buttonHolder=document.getElementById("buttonContainer");
	gallowsCtr = 1;
	booleanArray = [];
	puzzle = "WORKING";
	puzzleOut = document.getElementById("puzzleDisplay");
	gallowsElement = document.getElementById("gallows");
	A = "A".charCodeAt(0);
	Z = "Z".charCodeAt(0);
	
	PLAYING=1; WON=2; LOST=3; autoWin =4;
	gameState= PLAYING;
	
	guessEntire=document.getElementById("submitAnswer");
	
	capPuzzle = puzzle.toUpperCase();
	for(var i = 0; i < puzzle.length; i++)
	{
		var capCode = capPuzzle.charCodeAt(i);
		if(capCode >= A && capCode <= Z)
		{
			booleanArray.push(false);
		}
		else
		{
			booleanArray.push(true);
		}
	}
	display();
}
function checkGuess(guessedLetter)
{
	var isCorrect = false;
	var capPuzzle = puzzle.toUpperCase();
	for(var i = 0; i < capPuzzle.length; i++)
	{
		if(guessedLetter == capPuzzle.charAt(i))
		{
			booleanArray[i] = true;
			isCorrect = true;
		}
	}
	if(!isCorrect)
	{
		gallowsCtr ++;
	}
	checkCondition();
	display();
}

function updateGallows()
{
	gallowsElement.src = "images/gallows" + gallowsCtr + ".png";
}

function updateString()
{
	for(var i = 0; i < booleanArray.length; i++)
	{
		if(booleanArray[i])
		{
			puzzleOut.innerHTML += puzzle.charAt(i);
		}
		else
		{
			puzzleOut.innerHTML += "-";
		}
	}
}

function guessTheEntirePuzzle()
{
	if (guessEntire.value.toUpperCase() == puzzle.toUpperCase())
	{
		gameState=autoWin;
		display();
		puzzleOut.innerHTML= "Wow. You saved him quickly...";
	}
	else
	{
		if (gallowsCtr<7)
		{
			gallowsCtr++;
			checkCondition();
			display();
		}
	}
}

function checkCondition()
{
	if (checkBooleanString())
	{
		gameState=WON;
	}
	if (gallowsCtr==7)
	{
		gameState=LOST;
	}
}

function checkBooleanString()
{
	var tempChecker=0;
	
		for (i=0; i < puzzle.length; i++)
		{
			if (booleanArray[i])
			{
				tempChecker++;
			}
		}
	//alert(tempChecker);	
	
	if (tempChecker==booleanArray.length)
	{
		return true;
	}
	else
	{
		return false;
	}
}

function display()
{
	puzzleOut.innerHTML = "";
	updateGallows();
	updateString();
	
	if (gameState != PLAYING)
	{
		buttonHolder.style.display="none";
		
		puzzleOut.innerHTML = puzzle.toUpperCase();
	}	
}

function reset()
{
	gameState= PLAYING;
	gallowsCtr=1;
	booleanArray=[];
	buttonHolder.style.display="block";
	
	for(var i = 0; i < puzzle.length; i++)
	{
		var capCode = capPuzzle.charCodeAt(i);
		if(capCode >= A && capCode <= Z)
		{
			booleanArray.push(false);
		}
		else
		{
			booleanArray.push(true);
		}
	}
	
	display();
	
	var buttonArray=document.getElementsByTagName("button");
	for(var i = 0; i < buttonArray.length; i++)
	{
		buttonArray[i].disabled=false;
	}
	
}