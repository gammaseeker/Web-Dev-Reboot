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
			$myVar = 10;
			$x = 5;
			echo "My value is \$ $myVar </br>";
			echo 'Concatenate ' . $myVar . ' with a period </br>'; 
			function f()
			{
				global $x; //without global $x, the echo $x will be local to function
				echo $x;
			}
			//$_POST; Superglobals all caps
			//$_GET;
			print_r($_POST);
		?>
	</body>
	
</html>