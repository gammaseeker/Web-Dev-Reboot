function initialize()
{
	HOME = 0;
	ABOUT = 1;
	EARTH = 2;
	WILDLIFE = 3;
	STATISTICS = 4;
	INVOLVED = 5;

	
	homeElement = document.getElementById("home");
	aboutElement = document.getElementById("about");
	earthElement = document.getElementById("earth");
	wildlifeElement = document.getElementById("wildlife");
	statsElement = document.getElementById("statistics");
	involvedElement = document.getElementById("getInvolved");
	
	currentPage = homeElement;
	
	homeSlideElement = document.getElementById("homeSlide");
}
function transition(type)
{
	var trans = getRandomTransition();
	var oldSlide = trans[1] + " 1s ease forwards";
	var newSlide = trans[0] + " 1s ease";
	if(type == HOME && currentPage != homeElement)
	{
		homeElement.style.display = "block";
		homeElement.style.animation = newSlide;
		currentPage.style.animation = oldSlide;
		currentPage = homeElement;
	}
	if(type == ABOUT && currentPage != aboutElement)
	{
		aboutElement.style.display = "block";
		aboutElement.style.animation = newSlide;
		currentPage.style.animation = oldSlide;
		currentPage = aboutElement;
	}
	if(type == EARTH && currentPage != earthElement)
	{
		earthElement.style.display = "block";
		earthElement.style.animation = newSlide;
		currentPage.style.animation = oldSlide;
		currentPage = earthElement;
	}
	if(type == WILDLIFE && currentPage != wildlifeElement)
	{
		wildlifeElement.style.display = "block";
		wildlifeElement.style.animation = newSlide;
		currentPage.style.animation = oldSlide;
		currentPage = wildlifeElement;
	}
	if(type == STATISTICS  && currentPage != statsElement)
	{
		statsElement.style.display = "block";
		statsElement.style.animation = newSlide;
		currentPage.style.animation = oldSlide;
		currentPage = statsElement;
	}
	if(type == INVOLVED  && currentPage != involvedElement)
	{
		involvedElement.style.display = "block";
		involvedElement.style.animation = newSlide;
		currentPage.style.animation = oldSlide;
		currentPage = involvedElement;
	}

}
function getRandomTransition()
{
	var rnd = getRandomInteger(1, 2);
	if(rnd == 1)
		return ["moveFromLeft", "moveToRight"];
	if(rnd == 2)
		return ["moveFromRight", "moveToLeft"];
}
function getRandomInteger(lower, upper)
{
	multiplier = upper - (lower - 1);
	rnd = parseInt(Math.random() * multiplier) + lower;
	return rnd;
}