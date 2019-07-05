<!DOCTYPE HTML>
<!-- Joey Jiemjitpolchai -->
<html> 
	<head> 
		<title> Arm Yourself</title>
		<link type = "text/css" rel = "stylesheet" href = "css/droneCSS.css" />
		<style> </style>
		<script>
		function initialize()
		{
			icon = document.getElementById("logo");
			droneIn = document.getElementById("droneSelection");
			testDiv = document.getElementById("test");
			
			phantom = document.getElementById("phBackground");
			inspire = document.getElementById("inBackground");
			matrice6 = document.getElementById("ma6Background");
			matrice1 = document.getElementById("ma1Background");
			reaper = document.getElementById("reBackground");
			predator = document.getElementById("prBackground");
			
			theTable = document.getElementById("info");
			slide = document.getElementById("slideshowP1");
			droneTitle = document.getElementById("title");
			droneCost = document.getElementById("cost");
			droneSpeed = document.getElementById("speed");
			droneWeight = document.getElementById("weight");
			droneClass = document.getElementById("classification");
			droneIn.value = "";
			selection = "";
			titleString = "";
			costString = "";
			speedString = "";
			weightString = "";
			classString = "";
			ctr = 0;
	
		}
		function hoverIcon()
			{
				icon.src = "images/logoHover.png";
			}
		function undoHover()
		{
			icon.src = "images/logo.png";
		}
		function changeValue(value)
		{
			droneIn.value = value;
			selectDrone(value);
			sendRequest();
		}
		function selectDrone(choice)
		{
			theTable.style.opacity= 1;
			if(choice == "phantom")
			{
				phantom.style.opacity = 1;
				inspire.style.opacity = 0;
				matrice6.style.opacity = 0;
				matrice1.style.opacity = 0;
				reaper.style.opacity = 0;
				predator.style.opacity = 0;
				slide.src = "phantomImages/4.jpg";
			}	
			if(choice == "inspire")
			{
				phantom.style.opacity = 0;
				inspire.style.opacity = 1;
				matrice6.style.opacity = 0;
				matrice1.style.opacity = 0;
				reaper.style.opacity = 0;
				predator.style.opacity = 0;
				slide.src = "inspireImages/2.jpg";
			}
			if(choice == "indus")
			{
				phantom.style.opacity = 0;
				inspire.style.opacity = 0;
				matrice6.style.opacity = 1;
				matrice1.style.opacity = 0;
				reaper.style.opacity = 0;
				predator.style.opacity = 0;
				slide.src = "matrice6Images/4.png";
			}
			if(choice == "matrice")
			{
				phantom.style.opacity = 0;
				inspire.style.opacity = 0;
				matrice6.style.opacity = 0;
				matrice1.style.opacity = 1;
				reaper.style.opacity = 0;
				predator.style.opacity = 0;
				slide.src = "matrice1Images/1.jpeg";
			}
			if(choice == "reaper")
			{
				phantom.style.opacity = 0;
				inspire.style.opacity = 0;
				matrice6.style.opacity = 0;
				matrice1.style.opacity = 0;
				reaper.style.opacity = 1;
				predator.style.opacity = 0;
				slide.src = "reaperImages/1.jpg";
			}
			if(choice == "predator")
			{
				phantom.style.opacity = 0;
				inspire.style.opacity = 0;
				matrice6.style.opacity = 0;
				matrice1.style.opacity = 0;
				reaper.style.opacity = 0;
				predator.style.opacity = 1;
				slide.src = "predatorImages/1.jpg";
			}
		}
		function changeSlide()
		{
			ctr++;
			if(ctr > 5)
			{
				ctr = 1;
			}
			if(ctr == 1)
			{
				slide.src = "phantomImages/1.png"
			}
			else
			{
				sourceString = "phantomImages/" + ctr + ".jpg";
				slide.src = sourceString;
			}
		}
		function sendRequest()
		{
			var req = new XMLHttpRequest();
			req.onreadystatechange = function()
				{
					if (req.readyState == 4)
					{
						output = JSON.parse(req.responseText);
						titleString = output[0];
						costString = output[1];
						speedString = output[2];
						weightString = output[3];
						classString = output[4];
						update();
					}
				}
				
			var url = "dronePicked.php?drone=" + droneIn.value;
			req.open("GET", url, true);
			req.send(null);
		}
		function update()
		{
			droneTitle.innerHTML =  titleString;
			droneCost.innerHTML = "Price: $" + costString;
			droneSpeed.innerHTML = "Maximum Speed: " + speedString + " mph";
			droneWeight.innerHTML = "Weight: " + weightString + "g";
			droneClass.innerHTML = "Classification: " + classString;
		}
		</script>
	</head>
	<body onload = "initialize();">
		<img class = "mainBackground"src = "images/droneBackground.png">
		<h1 class= "nameTop"> Aerial Nexus</h1>
		<hr>
		<div class = "containerMenu">		
			<a href = "index.php" class = "btn">
			<img onmouseover = "hoverIcon();" onmouseout = "undoHover();" id = "logo" src = "images/logo.png">
			</a>
			<span class = "dropdown"> <a href = "about.html"> About Us </a></span> 
			<span class = "dropdown"> <a href = "drone.php">Drones </a></span> 
			<span class = "dropdown"> <a href = "maps.php"> Map </a></span>
			<span class = "dropdown"> <a href = "sponser.html">Sponsors </a></span>			
		</div>
		<input type = "text" id = "droneSelection" />
		<div id = "test"> </div>
		<table id = "info">
			<tr>
				<td>
					<div class = "slideshowContainer">
						<img id = "slideshowP1" class = "slideImg"src = "" width = "1000" height = "500">
					</div>
				</td>
				<td> <h1 id = "title"> </h1> </td>
			</tr>
			<tr>
				<td id = "cost">Price:</td>
				<td id = "speed">Maximum Speed:</td>
			</tr>
			<tr>
				<td id = "weight">Weight: </td>
				<td id = "classification">Classification:</td>
			</tr>
		</table>
		<div class = "botMenu">
			<ul>
				<li>
					<span id = "title1" class = "name"> Phantom 4</span> </br>
					<img class = "thumbnail" onclick = "changeValue('phantom');" src = "images/phantom4.jpg">
				</li>
				<li>
					<span class = "name">Inspire 1</span></br>
					<img class = "thumbnail" onclick = "changeValue('inspire');" src = "images/inspire1.jpg">	
				</li>
				<li>
					<span class = "name">Matrice 600</span></br>
					<img class = "thumbnail" onclick = "changeValue('indus');" src = "images/industrial.jpg">
				</li>
				<li>
					<span class = "name">Matrice 100</span></br>
					<img class = "thumbnail" onclick = "changeValue('matrice');" src = "images/matrice100.jpg">		
				</li>
				<li>
					<span class = "name"> MQ-9 Reaper</span></br>
					<img class = "thumbnail" onclick = "changeValue('reaper');" src = "images/reaper.jpg">
				</li>
				<li>
					<span class = "name"> MQ-1 Predator</span></br>
					<img class = "thumbnail" onclick = "changeValue('predator');" src = "images/predator.jpg">
				</li>
			</ul>
		</div>		
		<img id = "phBackground" class = "background"src = "phantomImages/phantomBackground.jpg">
		<img id = "inBackground" class = "background"src = "inspireImages/4.jpg">
		<img id = "ma6Background" class = "background"src = "matrice6Images/3.jpg">
		<img id = "ma1Background" class = "background"src = "images/sky.jpg">
		<img id = "reBackground" class = "background"src = "images/reaper.jpg">
		<img id = "prBackground" class = "background"src = "images/predator.jpg">
	</body>
	
</html>