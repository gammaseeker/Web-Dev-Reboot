function initialize()
{
	commentElement = document.getElementById("comments");
	counterElement = document.getElementById("counter");	
	bugSplat = 0;
	newSource = "";
	commentString = "";
}
function bugParameters(bug)//parameter for img id's
{
	bugElement = document.getElementById(bug); 
}
function runBugSplat()
{
	splatNumber();
	normalComments();
	bugElement.style.pointerEvents = "none"; //Will prevent clicks on the image
	display();
	
}
function splat(source) //parameter for splat
{
	newSource = source;
}
function splatNumber()
{
	bugSplat = bugSplat + 1;
}
function normalComments()
{
	if(bugSplat == 15)
	{
		commentString = "You've killed us all.";
	}
	if(bugSplat % 2 == 1 && bugSplat !== 15)//Every other splat will show "ouch"
	{
		commentString = "Ouch";
	}
	else
	{
		if(bugSplat == 2)
		{
			var randomValue = parseInt(Math.random() * 3) + 1; //Random value is generated from 1 - 3 and based on that value a comment is picked
			if (randomValue == 1)
			{
				commentString = "Your Earth is ours";
			}
			else
			{
				if (randomValue == 2)
				{
					commentString = "Destruction will rain upon you";
				}
				else
				{
					commentString = "Filthy human";
				}
			}
			
		}
		else
		{
			if(bugSplat == 4)
			{
				var randomValue = parseInt(Math.random() * 3) + 1;
				if (randomValue == 1)
				{
					commentString = "Our ferocity will strike fear in you!";
				}
				else
				{
					if (randomValue == 2)
					{
						commentString = "Do not underestimate our wrath";
					}
					else
					{
						commentString = "Prepare for your funeral";
					}
				}
			}
			else
			{
				if(bugSplat == 6)
				{
					var randomValue = parseInt(Math.random() * 3) + 1;
					if (randomValue == 1)
					{
						commentString = "We will retaliate!";
					}
					else
					{
						if (randomValue == 2)
						{
							commentString = "Your children will know what true fear is";
						}
						else
						{
							commentString = "I bet your corpse would go well with some salt";
						}
					}
				}
				else
				{
					if(bugSplat == 8)
					{
						var randomValue = parseInt(Math.random() * 3) + 1;
						if (randomValue == 1)
						{
							commentString = "Your corpse would look nice on our wall";
						}
						else
						{
							if (randomValue == 2)
							{
								commentString = "I can't wait to see the light leave your eyes";
							}
							else
							{
								commentString = "Worthless form of life";
							}
						}
					}
					else
					{
						direComments();
					}
				}
			}
		}
	}
}
function direComments()
{
		
		if(bugSplat % 2 == 1 && bugSplat !== 15)
		{
			commentString = "Ouch";
		}
		else
		{
			if(bugSplat == 10)
			{
				var randomValue = parseInt(Math.random() * 3) + 1;
				if (randomValue == 1)
				{
					commentString = "Alright alright. You've proved your point!";
				}
				else
				{
					if (randomValue == 2)
					{
						commentString = "Please let's negotiate";
					}
					else
					{
						commentString = "Please zerg god save us!";
					}
				}
			}
			else
			{
				if(bugSplat == 12)
				{
					var randomValue = parseInt(Math.random() * 3) + 1;
					if (randomValue == 1)
					{
						commentString = "Soldiers begin the retreat!";
					}
					else
					{
						if (randomValue == 2)
						{
							commentString = "We surrender to you our treasures";
						}
						else
						{
							commentString = "Think about our families please let us go";
						}
					}
				}
				else
				{
					if(bugSplat == 14)
					{
						var randomValue = parseInt(Math.random() * 3) + 1;
						if (randomValue == 1)
						{
							commentString = "No! No! Please mercy! You've already killed so many you monster!";
						}
						else
						{
							if (randomValue == 2)
							{
								commentString = "We are low in numbers please spare us";
							}
							else
							{
								commentString = "Wait! Wait! We'll be your servants if you spare us";
							}
						}
					}						
				}
			}
		}
	
}
function display()
{
	counterString = "Splat counter: " + bugSplat;
	bugElement.src = newSource;
	commentElement.innerHTML = commentString;
	counterElement.innerHTML = counterString;
}