<!DOCTYPE HTML>
<!-- Joey Jiemjitpolchai -->
<html> 
	<head> 
		<title> Aerial Nexus</title>
		<link type = "text/css" rel = "stylesheet" href = "css/indexCSS.css" />
		<style></style>
		<script>
			function initialize()
			{
				icon = document.getElementById("logo");
				img1 = document.getElementById("b1");
				img2 = document.getElementById("b2");
				img3 = document.getElementById("b3");
				img4 = document.getElementById("b4");
				imgArray = [img1, img2, img3, img4];
				ctr = 0;
				interval = setInterval(changeBackground,3000);
			}
			function hoverIcon()
			{
				icon.src = "images/logoHover.png";
			}
			function undoHover()
			{
				icon.src = "images/logo.png";
			}
			function changeBackground()
			{
				if(ctr > imgArray.length - 1)
				{
					ctr = 0;
				}
				for(var i = 0; i < imgArray.length; i++)
				{
					if(ctr == i)
					{
						imgArray[ctr].style.opacity = "1";
					}
					else
					{
						imgArray[i].style.opacity = "0"
					}
				}
				ctr++;
			}
		</script>
	</head>
	<body onload = "initialize();changeBackground();"> 
		<h1> Aerial Nexus</h1>
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
		<div class = "farLeft"> 
			THE
		</div>
		<div class = "farRight">
			FUTURE
		</div>
		<div class = "botCenter">
			TAKES FLIGHT
		</div>
		<img id = "b1" class = "backgroundMain" src = "images/indexBackground1.jpg"> 
		<img id = "b2" class = "background" src = "images/indexBackground2.jpg">
		<img id = "b3" class = "background" src = "images/indexBackground3.jpg">
		<img id = "b4" class = "background" src = "images/indexBackground4.jpg">
	</body>
	
</html>