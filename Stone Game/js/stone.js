function initialize()
{ //computer will take a stone from pile with most stone
	pile1Element=document.getElementById("pile1");
	pile2Element=document.getElementById("pile2");
	pile3Element=document.getElementById("pile3");
	unkElement=document.getElementById("comments");
	startElement=document.getElementById("start");
	pile1Value = 3;
	pile2Value = 3;
	pile3Value = 3;
	pileNumber = 0;
	playerTurn = false; //computer goes first
}
function modifyPile1(modifier)
{
	if (modifier <= pile1Value)
	{
		pile1Value = pile1Value - modifier;
		playerTurn = false;
	}
	else
	{	
			playerTurn = true;
	}
	if (pile1Value == 0 && pile2Value == 0 && pile3Value == 0)//win condition
	{
		unkString = "Get rekt. Cavemen better than Housemen. We win";
		playerTurn = true;
	}
	
	limit();
	computer();
	
	
}
function modifyPile2(modifier)
{
	if (modifier <= pile2Value)
	{
		pile2Value = pile2Value - modifier;
		playerTurn = false;
	}
	else
	{
			playerTurn = true;
	}
	if (pile1Value == 0 && pile2Value == 0 && pile3Value == 0)//win condition
	{
		unkString = "Get rekt. Cavemen better than Housemen. We win";
		playerTurn = true;
	}
	
	limit();
	computer();
	
	
}
function modifypile3(modifier)
{
	if (modifier <= pile3Value)
	{
		pile3Value = pile3Value - modifier;
		playerTurn = false;
	}
	else
	{	
			playerTurn = true;
	}
	if (pile1Value == 0 && pile2Value == 0 && pile3Value == 0)//win condition
	{
		unkString = "Get rekt. Cavemen better than Housemen. We win. ";
		playerTurn = true;
	}
	limit();
	computer();
	
	
}
function limit()
{
	if(pile1Value<0)
	{
		pile1Value = 0;
	}
	if(pile2Value<0)
	{
		pile2Value = 0;
	}
	if(pile3Value<0)
	{
		pile3Value = 0;
	}

}
function computer()
{
	if(playerTurn == false)
	{
		if(Math.max(pile1Value, pile2Value, pile3Value) == pile1Value)
		{
			pile1Value = pile1Value - 1;
			pileNumber = 1;
			pile1Value > 0;
			unkString = "Hmmm.....We took 1 from pile " + pileNumber;
		}
		else if(Math.max(pile1Value, pile2Value, pile3Value) == pile2Value)
		{
			pile2Value = pile2Value - 1;
			pileNumber = 2;
			pile2Value > 0;
			unkString = "Gloob wanna take 1 from pile " + pileNumber;
		}
		else //pile 3
		{
			pile3Value = pile3Value - 1;
			pileNumber = 3;
			pile2Value > 0;
			unkString = "Me says take 1 from pile " + pileNumber;
		}
		if (pile1Value == 0 && pile2Value == 0 && pile3Value == 0)//win condition
		{
			unkString = "Filthy cheater....You win.";
		}
	}
	if(pile1Value<0)
	{
		pile1Value = 0;
	}
	if(pile2Value<0)
	{
		pile2Value = 0;
	}
	if(pile3Value<0)
	{
		pile3Value = 0;
	}
	
	playerTurn = true;
	
}

function display()
{
	
	pile1Element.innerHTML = pile1Value;
	pile2Element.innerHTML = pile2Value;
	pile3Element.innerHTML = pile3Value;
	unkElement.innerHTML = unkString;
}
function hide()
{
		startElement.style.visibility = "hidden";
}
