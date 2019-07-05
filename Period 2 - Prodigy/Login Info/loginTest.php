<!DOCTYPE HTML>
<!-- Joey Jiemjitpolchai -->
<html> 
	<head> 
		<title> </title>
		<style> </style>
		<script> </script>
	</head>
	<body> 
		<?php 
			$conn = new PDO("mysql:hostname=localhost;dbname=prodigydatabase", "root", "");
			$cmd = "SELECT * FROM `logininfo`";
			$result = $conn->prepare($cmd);
			$result->execute();
			$data = $result->fetchAll;
			print_r($data);
			foreach($data as $item)
			{
				if($item[0] == )
			}
			if($_POST[radiogroup] == "register")
			{
				echo "You are not in the database";
			}
			if($_POST[radiogroup] == "login")
			{
				echo "You are in the database";
			}
		?>
	</body>
	
</html>