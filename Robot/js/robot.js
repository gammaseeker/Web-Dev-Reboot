function initialize()
{
	speedElement=document.getElementById("speed");
	shieldElement=document.getElementById("shield");
	attackDamageElement=document.getElementById("attackDamage");
	siegeElement=document.getElementById("siege");
	engineElement=document.getElementById("engine");
	purifyElement=document.getElementById("purify");
	imgElement=document.getElementById("bigImage");
	speedValue= 0;
	shieldValue= 0;
	attackDamageValue= 0;
	isSiege = true;		
	isPurify = true;
	
}
function modifySpeed(modifier)
{
	speedValue = speedValue + modifier;
}
function modifyShield(modifier)
{
	shieldValue = shieldValue + modifier;
}
function modifyAttackDamage(modifier)
{
	attackDamageValue = attackDamageValue + modifier
}
function toggleSiege()
{
	isSiege = !isSiege
		if(isSiege)
		{
			siegeElement.innerHTML = "Off";
		}
		else
		{
			siegeElement.innerHTML = "On";
		
		}

}
function togglePurify()
{
	isPurify = !isPurify
		if(isPurify)
		{
			purifyElement.innerHTML="Off";
		}
		else
		{
			purifyElement.innerHTML = "On";
		}
}
function display()
{
		speedString = "Speed " + speedValue;
		shieldString = "Shield " + shieldValue;
		attackDamageString = "Attack Damage " + attackDamageValue;
		speedElement.innerHTML = speedString;
		shieldElement.innerHTML = shieldString;
		attackDamageElement.innerHTML = attackDamageString;
		
}
function limit()
{
	if(speedValue < 0)
	{
		speedValue = 0;
	}
	if(shieldValue < 0)
	{
		shieldValue = 0;
	}
	if(attackDamageValue < 0)
	{
		attackDamageValue = 0;
	}

}
function hyperDriveString()
{
	hyperString = "Engine Type: " + "Hyperdrive";
	engineElement.innerHTML = hyperString;
}
function cloakerString()
{
	cloackString = "Engine Type: " + "Cloackerdrive";
	engineElement.innerHTML = cloackString;
}
function dimenstionString()
{
	dimensionString = "Engine Type: " + "Dimensiondrive";
	engineElement.innerHTML = dimensionString;
}
function arkship()
{
	imgElement.src = "images/SpearOfAdun_LotV_Art1.jpg";
}
function carrier()
{
	imgElement.src = "images/Carrier_SC2_Cncpt1.jpg";
}
function motherShip()
{
	imgElement.src = "images/Mothership_SC2_Art1.jpg";
}
