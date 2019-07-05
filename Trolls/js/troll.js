function initialize()
{
	textContainer = document.getElementById("maintext");
	//textList = textContainer.getElementByClassName("text");
	nameElement = document.getElementById("nameText");
	elderElement = document.getElementById("elderText");
	schoolElement = document.getElementById("schoolText");
	goodevilElement = document.getElementById("goodevilText");
	startElement = document.getElementById("startup");
}
function toggleText(textPar)
{
	if(textPar == "name")
	{
			nameElement.style.display = "inline";
			startElement.style.display = "none";
			elderElement.style.display = "none";
			schoolElement.style.display = "none";
			goodevilElement.style.display = "none";
		

	}
	if(textPar == "elder")
	{

			elderElement.style.display = "inline";
			nameElement.style.display = "none";
			startElement.style.display = "none";
			schoolElement.style.display = "none";
			goodevilElement.style.display = "none";
					
	}
	if(textPar == "school")
	{
		
			schoolElement.style.display = "inline";
			elderElement.style.display = "none";
			nameElement.style.display = "none";
			startElement.style.display = "none";
			goodevilElement.style.display = "none";
					
	}
	if(textPar == "goodevil")
	{
		
		
			goodevilElement.style.display = "inline";
			schoolElement.style.display = "none";
			elderElement.style.display = "none";
			nameElement.style.display = "none";
			startElement.style.display = "none";
	
						
	}
}
function reset()
{
			startElement.style.display = "inline";
			schoolElement.style.display = "none";
			elderElement.style.display = "none";
			nameElement.style.display = "none";
			goodevilElement.style.display = "none";
}