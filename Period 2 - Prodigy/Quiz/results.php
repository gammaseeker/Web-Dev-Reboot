<!DOCTYPE HTML>
<!-- Joey Jiemjitpolchai -->
<html> 
	<head> 
		<title> </title>
		<style>
			div
			{
				font-weight: bold;
			}
		</style>
		<script> </script>
	</head>
	<body> 
		Hello <?php echo $_POST['first'].  " ".$_POST['last'] ?> 
		<div>
			<?php
				function getResult()
				{
					$ctr = 0;
					$result1 = (int)$_POST['radiogroupA'];
					$result2 = (int)$_POST['radiogroupB'];
					$result3 = (int)$_POST['radiogroupC'];
					$result4 = (int)$_POST['radiogroupD'];
					$result5 = (int)$_POST['radiogroupE'];
					$result6 = (int)$_POST['radiogroupF'];
					$result7 = (int)$_POST['radiogroupG'];
					$result8 = (int)$_POST['radiogroupH'];
					$result9 = (int)$_POST['radiogroupI'];
					$result10 = (int)$_POST['radiogroupJ'];
					$resultArray = array($result1, $result2, $result3, $result4, $result5, $result6, $result7, $result8, $result9, $result10);
					for($i = 0; $i < count($resultArray); $i++)
					{
						$ctr = $ctr + $resultArray[$i];
					}
					if($ctr < 20)
					{
						echo "You are Captain America";
					}
					if($ctr == 20)
					{
						echo "You are Vision";
					}
					if($ctr > 20)
					{
						echo "You are Iron Man";
					}
					//echo $ctr;
				}
				//print_r($_POST);
				getResult();
			?>
		</div>
	</body>
	
</html>