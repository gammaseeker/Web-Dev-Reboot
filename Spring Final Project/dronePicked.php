<?php 
	$conn = new PDO("mysql:hostname=localhost;dbname=prodigydatabase", "root", "");
	$cmd = "SELECT * FROM `droneinfo`";
	$result = $conn->prepare($cmd);
	$result->execute();
	$data = $result->fetchAll(PDO::FETCH_NUM);
	
	$drone = $_GET["drone"];
	if($drone == "phantom")
	{
			$title = $data[0][0];
			$cost =	$data[0][1];
			$speed = $data[0][2];
			$weight = $data[0][3];
			$class = $data[0][4];
			$outputArray = array($title, $cost, $speed, $weight, $class);
			echo json_encode($outputArray);
	}
	else
	{
		if($drone == "inspire")
		{
			$title = $data[1][0];
			$cost =	$data[1][1];
			$speed = $data[1][2];
			$weight = $data[1][3];
			$class = $data[1][4];
			$outputArray = array($title, $cost, $speed, $weight, $class);
			echo json_encode($outputArray);
		}
		else
		{
			if($drone == "indus")
			{
				$title = $data[2][0];
				$cost =	$data[2][1];
				$speed = $data[2][2];
				$weight = $data[2][3];
				$class = $data[2][4];
				$outputArray = array($title, $cost, $speed, $weight, $class);
				echo json_encode($outputArray);
			}
			else
			{
				if($drone == "matrice")
				{
					$title = $data[3][0];
					$cost =	$data[3][1];
					$speed = $data[3][2];
					$weight = $data[3][3];
					$class = $data[3][4];
					$outputArray = array($title, $cost, $speed, $weight, $class);
					echo json_encode($outputArray);	
				}
				else
				{
					if($drone == "reaper")
					{
						$title = $data[4][0];
						$cost =	$data[4][1];
						$speed = $data[4][2];
						$weight = $data[4][3];
						$class = $data[4][4];
						$outputArray = array($title, $cost, $speed, $weight, $class);
						echo json_encode($outputArray);
					}
					else
					{
						if($drone == "predator")
						{
							$title = $data[5][0];
							$cost =	$data[5][1];
							$speed = $data[5][2];
							$weight = $data[5][3];
							$class = $data[5][4];
							$outputArray = array($title, $cost, $speed, $weight, $class);
							echo json_encode($outputArray);
						}
					}
				}
			}
		}
	}
	
?>