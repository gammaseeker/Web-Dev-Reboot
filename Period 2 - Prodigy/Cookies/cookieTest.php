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
			echo $_COOKIE['test'] . "</br>";
			session_start();
			if(isset($_SESSION["views"]))//isset() checks to see if a variable has a value
				$_SESSION["views"]++;
			else
				$_SESSION["views"] = 1;
			echo $_SESSION["views"];
		?>
	</body>
	
</html>