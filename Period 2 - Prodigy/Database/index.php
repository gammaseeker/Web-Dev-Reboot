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
			//PDO($hoststring, $uname, $pword)
			$conn = new PDO("mysql:hostname=localhost;dbname=prodigydatabase", "root", "");
			//TO DEBUG echo $cmd; die();
			$cmd = "SELECT * FROM `pizza table`";
			//$cmd = "SELECT * FROM `pizza table` WHERE `pizza` = 'Grandma'";
			$result = $conn->prepare($cmd);
			$result->execute();
			//$data = $result->fetch(PDO::FETCH_NUM);
			//$data = $result->fetch(PDO::FETCH_ASSOC);
			//$data = $result->fetch(); Returns a row
			$data = $result->fetchAll();//Returns 2-d array of all data. 1st row numeric index
			//foreach()
			print_r($data);
			
			//$numRows = $result->rowCount();
		?>
	</body>
	
</html>