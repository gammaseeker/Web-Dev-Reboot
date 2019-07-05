<!DOCTYPE HTML>
<!-- Joey Jiemjitpolchai -->
<html> 
	<head> 
		<title> To the Skies</title>
		<link type = "text/css" rel = "stylesheet" href = "css/mapCSS.css" />
		<style> </style>
		<script src="http://maps.googleapis.com/maps/api/js"></script>
		<script> 
			function initialize()
			{
				icon = document.getElementById("logo");
				img1 = document.getElementById("b1");
				img2 = document.getElementById("b2");
				img3 = document.getElementById("b3");
				img4 = document.getElementById("b4");
				img5 = document.getElementById("b5");
				img6 = document.getElementById("b6");
				imgArray = [img1, img2, img3, img4, img5, img6];
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
			function toNYC()
			{
				
				nyc = new google.maps.LatLng(40.7518796,-73.9815121);
				LaGuardia = new google.maps.LatLng(40.7769,-73.874);
				JFK = new google.maps.LatLng(40.6413,-73.7781);
				teterboro = new google.maps.LatLng(40.849, -74.063);
				cpCorner1 = new google.maps.LatLng(40.7679013, -73.9821213);
				cpCorner2 = new google.maps.LatLng(40.7640761, -73.9725197);
 				cpCorner3 = new google.maps.LatLng(40.7948672, -73.9499122);
				cpCorner4 =  new google.maps.LatLng(40.800613,-73.9602977);
				centralPark = [cpCorner1, cpCorner2, cpCorner3, cpCorner4];
				downtown = new google.maps.LatLng(40.708623, -74.006753);
				empireStateBuild = new google.maps.LatLng(40.7484, -73.9857); 
				var mapProp = 
				{
					center:nyc,
					zoom:11,
					mapTypeId:google.maps.MapTypeId.ROADMAP
				};
				map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
				var myCity = new google.maps.Circle(
				  {
					  center:nyc,
					  radius:20000,
					  strokeColor:"blue",
					  strokeOpacity:0.8,
					  strokeWeight:2,
					  fillColor:"blue",
					  fillOpacity:0.2
				  }	);
				var JFKAirport = new google.maps.Circle(
				{
					center: JFK,
					radius:5000,
					strokeColor:"red",
					strokeOpacity:0.8,
					strokeWeight:2,
					fillColor:"red",
					fillOpacity:0.2				
				});
				var LaGuardiaAirport = new google.maps.Circle({
					center: LaGuardia,
					radius:2000,
					strokeColor:"red",
					strokeOpacity:0.8,
					strokeWeight:2,
					fillColor:"red",
					fillOpacity:0.2	
					});
				var teterboroAirport = new google.maps.Circle({
					center: teterboro,
					radius:2000,
					strokeColor:"red",
					strokeOpacity:0.8,
					strokeWeight:2,
					fillColor:"red",
					fillOpacity:0.2	
				});
				var centralParkOverlay = new google.maps.Polygon({
					path: centralPark,
					radius:1000,
					strokeColor:"green",
					strokeOpacity:0.8,
					strokeWeight:2,
					fillColor:"green",
					fillOpacity:0.2	
				});
				var downtownManhattan = new google.maps.Circle({
					center: downtown,
					radius:1000,
					strokeColor:"orange",
					strokeOpacity:0.8,
					strokeWeight:2,
					fillColor:"orange",
					fillOpacity:0.2	
				});
				var ESB = new google.maps.Circle({
					center: empireStateBuild,
					radius:1000,
					strokeColor:"orange",
					strokeOpacity:0.8,
					strokeWeight:2,
					fillColor:"orange",
					fillOpacity:0.2	
				});
				myCity.setMap(map);	
				JFKAirport.setMap(map);	
				LaGuardiaAirport.setMap(map);
				teterboroAirport.setMap(map);
				centralParkOverlay.setMap(map);
				downtownManhattan.setMap(map);
				ESB.setMap(map);
			}
			google.maps.event.addDomListener(window, 'load', initialize, toNYC);
			function toBoston()
			{
				boston = new google.maps.LatLng(42.3601,-71.0589);
				logan = new google.maps.LatLng(42.3656,-71.0096);
				harvard = new google.maps.LatLng(42.3770,-71.1167);
				MIT = new google.maps.LatLng(42.3601245,-71.0938602);
				downtownB = new google.maps.LatLng(42.361288,-71.0590969);
				var mapProp = 
				{
					center:boston,
					zoom:12,
					mapTypeId:google.maps.MapTypeId.ROADMAP
				};
				map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
				var myCity = new google.maps.Circle({
					center: boston,
					radius:9000,
					strokeColor:"blue",
					strokeOpacity:0.8,
					strokeWeight:2,
					fillColor:"blue",
					fillOpacity:0.2
				});
				var LoganAirport = new google.maps.Circle({
					center: logan,
					radius:2000,
					strokeColor:"red",
					strokeOpacity:0.8,
					strokeWeight:2,
					fillColor:"red",
					fillOpacity:0.2
				});
				var harvardU = new google.maps.Circle({
					center: harvard,
					radius:2000,
					strokeColor:"green",
					strokeOpacity:0.8,
					strokeWeight:2,
					fillColor:"green",
					fillOpacity:0.2
				});
				var mit = new google.maps.Circle({
					center: MIT,
					radius:2000,
					strokeColor:"green",
					strokeOpacity:0.8,
					strokeWeight:2,
					fillColor:"green",
					fillOpacity:0.2
				});
				var downtownBoston = new google.maps.Circle({
					center: downtownB,
					radius:1000,
					strokeColor:"orange",
					strokeOpacity:0.8,
					strokeWeight:2,
					fillColor:"orange",
					fillOpacity:0.2
				});
				var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
				myCity.setMap(map);	
				LoganAirport.setMap(map);
				harvardU.setMap(map);
				mit.setMap(map);
				downtownBoston.setMap(map);
			}
			function toDC()
			{
				DC = new google.maps.LatLng(38.9072,-77.0369);
				RRWN = new google.maps.LatLng(38.8512,-77.0402);
				var mapProp = 
				{
					center:DC,
					zoom:12,
					mapTypeId:google.maps.MapTypeId.ROADMAP
				};
				var myCity = new google.maps.Circle({
					center: DC,
					radius:9000,
					strokeColor:"red",
					strokeOpacity:0.8,
					strokeWeight:2,
					fillColor:"red",
					fillOpacity:0.2
				});
				var RRWNAirport = new google.maps.Circle({
					center: RRWN,
					radius:2000,
					strokeColor:"red",
					strokeOpacity:0.8,
					strokeWeight:2,
					fillColor:"red",
					fillOpacity:0.2
				});
				var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
				myCity.setMap(map);	
				RRWNAirport.setMap(map);
			}
			function toLA()
			{
				LA = new google.maps.LatLng(34.0522,-118.2437);
				LAX = new google.maps.LatLng(33.9416,-118.409);
				LAO = new google.maps.LatLng(34.056,-117.598);
				bHill = new google.maps.LatLng(34.0825439,-118.4345534);
				longB = new google.maps.LatLng(33.7701,-118.1937);
				var mapProp = 
				{
					center:LA,
					zoom:10,
					mapTypeId:google.maps.MapTypeId.ROADMAP
				};
				var myCity =  new google.maps.Circle({
					center: LA,
					radius:60000,
					strokeColor:"blue",
					strokeOpacity:0.8,
					strokeWeight:2,
					fillColor:"blue",
					fillOpacity:0.2
				});
				var LAILL = new google.maps.Circle({
					center: LA,
					radius:6000,
					strokeColor:"orange",
					strokeOpacity:0.8,
					strokeWeight:2,
					fillColor:"orange",
					fillOpacity:0.2
				});
				var LAIA = new google.maps.Circle({
					center: LAX,
					radius:2000,
					strokeColor:"red",
					strokeOpacity:0.8,
					strokeWeight:2,
					fillColor:"red",
					fillOpacity:0.2
				});
				var LAOIA = new google.maps.Circle({
					center: LAO,
					radius:2000,
					strokeColor:"red",
					strokeOpacity:0.8,
					strokeWeight:2,
					fillColor:"red",
					fillOpacity:0.2
				});
				var beverlyHills = new google.maps.Circle({
					center: bHill,
					radius:3000,
					strokeColor:"green",
					strokeOpacity:0.8,
					strokeWeight:2,
					fillColor:"green",
					fillOpacity:0.2
				});
				var longBeach = new google.maps.Circle({
					center: longB,
					radius:4000,
					strokeColor:"green",
					strokeOpacity:0.8,
					strokeWeight:2,
					fillColor:"green",
					fillOpacity:0.2
				});
				var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
				myCity.setMap(map);	
				LAIA.setMap(map);
				LAOIA.setMap(map);
				beverlyHills.setMap(map);
				longBeach.setMap(map);
				LAILL.setMap(map);
			}
		</script>
	</head>
	<body onload = "initialize(); toNYC();changeBackground();"> 
		<h1> Aerial Nexus</h1>
		<hr>
		<div class = "containerMenu">
			<a href = "index.php" class = "btn">
			<img onmouseover = "hoverIcon();" onmouseout = "undoHover();" id = "logo" src = "images/logo.png">
			</a>
			<span class = "dropdown"> <a href = "about.html">About Us </a></span> 
			<span class = "dropdown"> <a href = "drone.php">Drones </a></span> 
			<span class = "dropdown"> <a href = "maps.php"> Map </a></span>
			<span class = "dropdown"> <a href = "sponser.html">Sponsors </a></span>			
		</div>
		<table>
			<colgroup>
				<col>
				<col>
				<col>
			</colgroup>
			<tr>
				<th>
					<h1> Map</h1>
				</th>
				<th>
					<h1> Cities</h1>
				</th>
				<th>
					<h1> Air Zone Legend</h1>
				</th>
			</tr>
			<tr>
				<td id = "map"rowspan = "1000"><div id= "googleMap" style="width:900px;height:500px;"></div> </td>
				<td> <button onclick = "toNYC();"> New York City </button></td>
				<td><img class = "zone"src = "images/red.png" width = "70" height = "70"></br> <span> Illegal zone</span> </td>
			</tr>
			<tr>
				<td> <button onclick = "toBoston();"> Boston </button></td>
				<td> <img class = "zone" src = "images/orange.png" width = "70" height = "70"></br> <span>Semi-Legal zone (100ft)</span></td>
			</tr>
			<tr>
				<td><button onclick = "toDC();"> Washington D.C. </button> </td>
				<td> <img class = "zone" src = "images/blue.jpg" width = "70" height = "70"></br> <span>Legal zone (300ft)</span></td>
			</tr>
			<tr>
				<td> <button onclick = "toLA();"> Los Angeles </button> </td>
				<td> <img class = "zone" src = "images/green.png" width = "70" height = "70"> </br><span>Recommended zone (400ft)</span></td>
			</tr>
		</table>	
		<img id = "b1"class = "background" src = "images/mapBackground1.jpg">
		<img id = "b2"class = "background" src = "images/mapBackground2.jpg">
		<img id = "b3"class = "background" src = "images/mapBackground3.jpg">
		<img id = "b4"class = "background" src = "images/mapBackground4.jpg">
		<img id = "b5"class = "background" src = "images/mapBackground5.jpg">
		<img id = "b6"class = "background" src = "images/mapBackground6.jpg">
	</body>
	
</html>