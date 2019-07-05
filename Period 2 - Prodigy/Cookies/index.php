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
			//function setcookie(key, information, [expiration]);
				//If the expiration is omitted, 
				//the cookie will never expire.
				//Superglobal $_COOKIE
				//Never give username, password, sensitive info to cookie
				//setcookie("uname", "shindo21", time() + 3600);//time() is system time in seconds*/
				setcookie("test", "myname", time() + 300);
		?>
		<a href = "cookieTest.php"> Test</a>
	</body>
	
</html>