<!DOCTYPE HTML>
<!-- Joey Jiemjitpolchai -->
<html> 
	<head> 
		<title> </title>
		<style> </style>
		<script> 
			<?php 
				$conn = new PDO("mysql:hostname=localhost;dbname=prodigydatabase", "root", "");
				srand();
				$currentRoom = getRandomRoom();
				function getDBResults($cmd, $arrayType = PDO::FETCH_BOTH)
				{
					global $conn;
					$result = $conn->prepare($cmd);
					$result->execute();
					return $result->fetchAll($arrayType);
				}
				function getRandomRoom()
				{
					$cmd = "SELECT DISTINCT `Room` FROM `rooms`";
					$roomList = getDBResults($cmd);
					$numRooms = count($roomList);
					$idx = mt_rand(0, $numRooms-1);
					return $roomList[$idx][0];
				}
				function getRoomConnections()
				{
					$cmd = "SELECT 'connection' FROM `rooms` WHERE `room` = '$currentRoom'";
				}
			?>			
		</script>
	</head>
	<body> 
		<form method = "post" action = "index.php">
			<div id = "roomname"> </div>
			<select id = "connections" name = "connections">
			</select>
			<select id = "items" name = "items">
			</select>
			<input type = "radio" name = "actiongrp"value = "take" checked/>
			<input type = "radio" name = "actiongrp" value = "leave"/>
			<input type = "submit" id = "subbtn" value = "TakeItem"/>
		</form>
	</body>
	
</html>