function initialize()//TO DO: REPRESENT EMPLOYEES IN ROOMS||| CREATE A DIV TO SECTION OFF THE BUILDING 
{
	NONE = -1;
	PRODUCTIVE = 1, STRONG = 2, TECHNICAL = 3, NORMAL = 4;
	RESTAURANT = 1, ELEVATOR = 2, MAINTENANCE = 3, LIVING = 4;

	employeeArray = [];	
	roomArray = [];//Check vacancy, move emp. object to room, vacancy++, limit vacancy to 5
	firstNameArray = ["Matt","Soren","Marcus","James", "Robert", "John", "Steve", "David", "Jenna", "Joey"];
	lastNameArray = ["Nguyen","Johnson","Williams","Brown","Jones", "Miller", "Rogers", "Tennant", "Coleman", "Jiemjitpolchai"];

	theTable = document.getElementById("mytbl");
	roomElement = document.getElementById("rooms");
	theBuilding = document.getElementById("building");
	moneySpan = document.getElementById("moneyDisplay");
	materialSpan = document.getElementById("materialDisplay");
	foodSpan = document.getElementById("foodDisplay");
	electricitySpan =document.getElementById("electricityDisplay");
	
	htmlString="";
	//beginning resources
	/*
	moneyctr = 1000000000;
	electricityctr = 1000000000;
	materialctr = 1000000000;
	foodctr = 1000000000;
	*/
	
	moneyctr = 1000;
	electricityctr = 200;
	materialctr = 500;
	foodctr = 100;
	
	timerStart= false;
	gameOver = false;
	
	fdProduction = 0;
	mlProduction = 0;
	eProduction = 0;
	myProduction = 0;
	fdUsage = 0;
	eUsage = 0;
	/*
	Recreation Room: user chooses to use money
	Employee Amount      1   2   3   4
	Produce	Money        10  20  30  40
	
	Mainteniance Room: rooms use 8 electricity per sec
	Employee Amount      1   2   3   4
	Produce Electricity  150 300 350 600
	
	Elevator Room: user chooses to use material
	Employee Amount      1   2   3   4
	Produce Material     5   10  15  20
	
	Restuarant: One person uses 2 food per sec
	Employee Amount      1   2   3   4
	Produce Food         5   10  15  20
	
	Increase in Production
	1 skilled person: 10%
	2 skilled people: 20%
	3 skilled people: 30%
	4 skilled people: 40%
	*/
}
function start()//Start function is used to initialize the entire simulation. This should be coded last
{
	initialize();
	display();
	for(var i = theTable.rows.length; i > 1; i--)
	{
		if(i-1 == 1)
		{
			i = 1;
		}
		else
		{
			theTable.deleteRow(i-1);
		}
	}
	for(var i = 0; i < 100; i++)
	{
		employeeConstructor();
	}
	
}
function placeRoom(imgSrc)
{
	/*
	var elevatorLevel = false;
	if(roomArray.length < 1)
	{
		elevatorLevel = true;	
	}
	else
	{
		//alert(roomArray[roomArray.length-1].roomType);
		for(var k = roomArray.length % 4; k = 0;k--)
		{
			//alert(roomArray[roomArray.length-k].roomType);
			if(roomArray[k].roomType = 2)
			{
				elevatorLevel = true;
			}
		}
	}
	*/
	if(materialctr < 0|| moneyctr < 0 || roomArray.length == 50)
	{
		return;
	}
	else
	{
		var newRoom = new createRoom(imgSrc);
		newImg = document.createElement("img");
		newImg.src = imgSrc;
		newImg.roomObj = newRoom;
		newImg.setAttribute("onclick", "deleteRoom(this);");
		roomArray.push(newRoom);
		theBuilding.appendChild(newImg);
		moneyctr = moneyctr - 100;//Creating rooms consume resources
		materialctr = materialctr - 50;
		setResourceProduction();
	}
}
function createRoom(source) 
{
	this.roomVacancy = [];
	this.roomImg = source;
	this.roomType = source[source.length-5]//Matthew: sets the type of room
}
function deleteRoom(imgObject)//Delete room function
{
		moneyctr+= 50;//Creating rooms consume resources
		materialctr+= 25;
		theBuilding.removeChild(imgObject);
		imgObject.parentElement.removeChild(imgObject);
		roomArray.splice(theBuilding.indexOf(imgObject.roomObj), 1);
}
function employeeConstructor()//Construct employee
{
	var rng = parseInt(Math.random() * 2) + 1;
	if(rng == 1)
	{
		var newEmployee = new createEmployee(NORMAL);
	}
	else
	{
		var newEmployee = new createEmployee(parseInt(Math.random() * 3) + 1);
	}
	employeeArray.push(newEmployee);
	
}
function createEmployee(attribute)//Creates employee and indexes them, and adds their info to a table. The .effect property will act as a multiplier to their respective resource generation
{
	if(attribute == NORMAL)//Normal employees have no bonus effects on resources
	{
		this.att = NORMAL;
		this.attStr = "Normal";
		this.effect = 1;
	}
	else
	{
		if(attribute == PRODUCTIVE)//Productive employees produce extra money
		{
			this.att = PRODUCTIVE;
			this.attStr = "Productive";
			this.effect = 1.1;
		}
		else
		{
			if(attribute == STRONG)//Generate extra material
			{
				this.att = STRONG;
				this.attStr = "Strong";
				this.effect = 1.3;
			}
			else//Technical generate extra electricty
			{
				this.att = TECHNICAL;
				this.attStr = "Technical";
				this.effect = 1.5;
			}
		}
	}
	var pickLastName = parseInt(Math.random() * 9);
	var pickFirstName = parseInt(Math.random() * 9);
	this.firstname = firstNameArray[pickFirstName];
	this.lastname = lastNameArray[pickLastName];
	this.location = NONE;
	this.locationStr = "HR";
	this.ID = employeeArray.length+1;
		var row = theTable.insertRow();
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		var cell5 = row.insertCell(4);
		cell1.innerHTML = this.firstname;
		cell2.innerHTML = this.lastname;
		cell3.innerHTML = this.attStr;
		cell4.innerHTML = this.locationStr;
		cell5.innerHTML = this.ID;
}
function hireEmployeeTextBox()
{
	var room = document.getElementById("hireEmployee").value;
	hireEmployee(room);
}
function hireEmployee(whatRoom)//can only hire the employee from top to bottom of the list
{//whatRoom is the room employee will be placed
//alert(roomArray[whatRoom-1].roomVacancy.length);
	if(roomArray[whatRoom-1].roomVacancy.length == 4 || whatRoom > roomArray.length || whatRoom-1 < 0)
	{
		return;
	}
	else
	{
		var whichEmployee = NONE;
		for(var i = employeeArray.length-1; i > -1; i--)//i did from bottom to top becuase I only wanted the top most person with hr
		{
			if(employeeArray[i].location == NONE)
				whichEmployee = i;
		}
		employeeArray[whichEmployee].location = whatRoom-1;//Sets where the employee's room will be
		roomArray[whatRoom-1].roomVacancy.push(employeeArray[whichEmployee].att);//pushing the employee's characteristic so that if it matches with the job it would result in more production
		employeeArray[whichEmployee].locationStr = "Room: "+ whatRoom;
		theTable.rows[whichEmployee+2].cells[3].innerHTML = employeeArray[whichEmployee].locationStr;
		setResourceProduction();
	}
}

function switchEmployees(employee1, employee2)
{
	intE1 = parseInt(employee1);
	intE2 = parseInt(employee2);
	if(intE1 < 1 || intE1 > employeeArray.length || intE2 < 1 || intE2 > employeeArray.length || intE1 == intE2 || employeeArray[intE1-1].location == employeeArray[intE2-1].location)
	{
		return;
	}
	else 
	{
		var firstEmployeeLocation = employeeArray[intE1-1].location;
		var secondEmployeeLocation = employeeArray[intE2-1].location;
		//takes location of the employees
		if(firstEmployeeLocation != NONE)
		{
			var removeEmployee1 = false;
			//deletes employee's attribute from roomVacancy
			for(var i = 0; i < roomArray[firstEmployeeLocation].roomVacancy.length;i++)
			{
				if(removeEmployee1 != true)
				{
					if(roomArray[firstEmployeeLocation].roomVacancy[i]==employeeArray[intE1-1].att)
					{
						removeEmployee1 = true;
						roomArray[firstEmployeeLocation].roomVacancy.splice(i,1);
					}
				}
			}
		}
		if(secondEmployeeLocation != NONE)
		{
			var removeEmployee2 = false;
			//deletes employee's attribute from roomVacancy
			for(var k = 0; k < roomArray[secondEmployeeLocation].roomVacancy.length;k++)
			{
				if(removeEmployee2 != true)
				{
					if(roomArray[secondEmployeeLocation].roomVacancy[k]==employeeArray[intE2-1].att)
					{
						removeEmployee2 = true;
						roomArray[secondEmployeeLocation].roomVacancy.splice(k,1);
					}
				}
			}
		}
		//remove the employees out of the room
	}
	
	
	employeeArray[intE1-1].location = secondEmployeeLocation;//Sets where the employee's room will be
	roomArray[secondEmployeeLocation].roomVacancy.push(employeeArray[intE1-1].att);//pushing the employee's characteristic so that if it matches with the job it would result in more production
	employeeArray[intE2-1].location = firstEmployeeLocation;//Sets where the employee's room will be
	roomArray[firstEmployeeLocation].roomVacancy.push(employeeArray[intE2-1].att);//pushing the employee's characteristic so that if it matches with the job it would result in more production
	//puts the employees in the right room
	firstEmployeeLocation++;
	secondEmployeeLocation++;
	employeeArray[intE1-1].locationStr = "Room: "+ secondEmployeeLocation;
	theTable.rows[intE1+1].cells[3].innerHTML = employeeArray[intE1-1].locationStr;
	employeeArray[intE2-1].locationStr = "Room: "+ firstEmployeeLocation;
	theTable.rows[intE2+1].cells[3].innerHTML = employeeArray[intE2-1].locationStr;
	//updates location on screen
	setResourceProduction();
}
function switchEmployeesTextBox()
{
	//put each employees ID into a var using the 
	var employeeID1 = document.getElementById("switch1").value;//this is where you put the text box stuff
	var employeeID2 = document.getElementById("switch2").value;
	//put vars into the parameter of switch employee
	switchEmployees(employeeID1, employeeID2);//switches employee
}
/*
	Recreation Room: user chooses to use money
	Employee Amount      1   2   3   4
	Produce	Money        5   10  15  20
	
	Mainteniance Room: rooms use 5 electricity per sec
	Employee Amount      1   2   3   4
	Produce Electricity  200 400 600 800			150 300 350 600
	
	Elevator Room: user chooses to use material
	Employee Amount      1   2   3   4
	Produce Material     5   10  15  20
	
	Restuarant: One person uses 2 food per sec
	Employee Amount      1   2   3   4
	Produce Food         10	 20  30  40				5   10  15  20
	
	Increase in Production
	1 skilled person: 10%
	2 skilled people: 20%
	3 skilled people: 30%
	4 skilled people: 40%
*/
function generateMoney()// Prototype functions
{
	var base = 5;
	moneyctr+= base * myProduction;
	display();
}
function generateElectricity()
{
	var base = 200;
	
	electricityctr+= base *eProduction;
	display();
}
function generateMaterial()
{
	var base = 5;
	materialctr+= base * mlProduction;
	display();
}
function generateFood()
{
	var base = 10;
	foodctr+= base * fdProduction;	
	//alert("Food: "+ base * fdProduction);
	display();
}
function usageFood()
{
	foodctr-= fdUsage*2
}
function usageElectricity()
{
	electricityctr-= eUsage*5;
}
function setResourceProduction()
{
	//generate resources
	fdProduction = 0;
	mlProduction = 0;
	eProduction = 0;
	myProduction = 0;
	
	//uses up resources
	fdUsage = 0;
	eUsage = 0;
	if (timerStart==true)
	{
		clearInterval(fdInterval);
		clearInterval(mlInterval);
		clearInterval(eInterval);
		clearInterval(myInterval);
		clearInterval(myIntervalUsage);
		clearInterval(fdIntervalUsage);
		timerStart=false;
	}
	for(var i  = 0; i < roomArray.length;i++)
	{
		if(roomArray[i].roomType==1)
		{
			fdProduction+=roomArray[i].roomVacancy.length;
			for(var f  = 0; f < roomArray[i].roomVacancy.length;f++)
			{
				if(roomArray[i].roomType==roomArray[i].roomVacancy[f])
				{
					fdProduction+= .1;
				}
			}
		}
		if(roomArray[i].roomType==2)
		{
			mlProduction+=roomArray[i].roomVacancy.length;
			for(var l = 0; l < roomArray[i].roomVacancy.length;l++)
			{
				if(roomArray[i].roomType==roomArray[i].roomVacancy[l])
				{
					mlProduction+= .1;
				}
			}
		}
		if(roomArray[i].roomType==3)
		{
			eProduction+=roomArray[i].roomVacancy.length;
			for(var e = 0; e < roomArray[i].roomVacancy.length;e++)
			{
				if(roomArray[i].roomType==roomArray[i].roomVacancy[e])
				{
					eProduction+= .1;
				}
			}
		}
		if(roomArray[i].roomType==4)
		{
			myProduction+=roomArray[i].roomVacancy.length;
			for(var y = 0; y < roomArray[i].roomVacancy.length;y++)
			{
				if(roomArray[i].roomType==roomArray[i].roomVacancy[y])
				{
					myProduction+= .1;
				}
			}
		}
	}
	
	for(var x  = 0; x < roomArray.length;x++)
	{
		fdUsage+= roomArray[x].roomVacancy.length;
	}
	eUsage = roomArray.length;
	
	if (timerStart==false)
	{
		fdInterval = setInterval(generateMoney,1500);
		mlInterval = setInterval(generateElectricity,1500);
		eInterval = setInterval(generateMaterial,1500);
		myInterval = setInterval(generateFood,1500);
		
		myIntervalUsage = setInterval(usageElectricity,1500);
		fdIntervalUsage = setInterval(usageFood,1500);
		timerStart=true;
	}
}
function display()
{//if debt is more than -200, gameover
	if(moneyctr < -200 || electricityctr < -200 || materialctr < -200 || foodctr < -200)
	{
		gameOver = true;
	}
	if(gameOver == true)
	{
		moneySpan.innerHTML = "Game Over";
		materialSpan.innerHTML = "Game Over";
		foodSpan.innerHTML = "Game Over";		
		electricitySpan.innerHTML = "Game Over";
	}
	else
	{
		moneySpan.innerHTML = "Money: $" + moneyctr.toFixed(2);
		materialSpan.innerHTML = "Material: " + materialctr.toFixed(0);
		foodSpan.innerHTML = "Food and Water: " + foodctr.toFixed(2);		
		electricitySpan.innerHTML = "Electricity: " + electricityctr.toFixed(0);
	}
}