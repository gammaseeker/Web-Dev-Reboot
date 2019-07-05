function initialize()
{
	groundElement = document.getElementById("theGround");
	ctr = 0;
}
function addTree()
{
	ctr = ctr + 1;
	if(ctr >= 10)
	{
		return;
	}
	if(ctr <= 0)
	{
		ctr = 1;
	}
	sourceString = ctr + ".png"; 
	groundElement.src = "images/" + sourceString;
	
}
function nuke()
{
	groundElement.src = "images/nuke.png";
	ctr = 0;
}
function foodTrash()
{
	if(ctr >= 10)
	{
		ctr = 9;
	}
	ctr = ctr - 1;
	if(ctr < 0)
	{
		return;
	}
	if( ctr == 0)
	{
		groundElement.src = "ground.png";
		return;
	}
	sourceString = ctr + ".png"; 
	groundElement.src = "images/" + sourceString;
	
}
function oilSpill()
{
	if(ctr >= 10)
	{
		ctr = 9;
	}
	ctr = ctr - 2;
	if(ctr <= 0)
	{
		groundElement.src = "images/ground.png";
		return;
	}
	sourceString = ctr + ".png"; 
	groundElement.src = "images/" + sourceString;
					
}