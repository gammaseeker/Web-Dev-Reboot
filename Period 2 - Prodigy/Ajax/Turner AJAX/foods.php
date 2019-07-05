<?php

/*
	STEP 3
	The information sent through XHR goes into the $_GET super global.  For this example, we sent in a single piece of information, the food.  I have stored it in a temporary variable.
	
	STEP 4
	This is a very basic program that can really only respond to 4 foods, classifying all others as "Unknown".  Lay out the conditional structure so that students can see the response.
	
	STEP 5
	Echo out the $group variable.
	
	Remember that echo writes code to the page.  In this case, there is no "page" that is being downloaded.  The request has been made by the XHR object.  Whenever echo is called, it writes, instead, to the XHR object's property "responseText".
	
	Echo is most effective for returning strings, which can be put into Javascript variables or printed to the screen using Javascript and HTML, however often times, you will need to receive more than a single piece of data from the request.
	
	If your data is locked into strings, you can put it together into a delimited string or, if you have an array, you can use json_encode to convert it to a Javascript encodable array.  The responseText, then, will be a string that can be stored as an array into a Javascript variable.
	
	STEP 6
	Let's try something else...
	
	Create a database that has 2 columns.  The first column is food and the second column is foodgroup.  Use Excel to type up some preliminary data.  Remember that a food may appear in more than one food group.  For example, pizza contains food from the dairy, grain, and fruits & vegetables groups so pizza should appear 3 times in your database.
	
	food		foodgroup
	apple		fruits & vegetables
	pizza		fruits & vegetables
	pizza		grain
	pizza		dairy
	cake		dairy
	cake		grain
	steak		meat
	...			...
	
	On your HTML page, you should have a way for a user to select a food group (a dropdown list or radio buttons, etc...).  Whenever the user changes the selection, the foods from the database that match the group should automatically appear on the page.  You should accomplish this through AJAX
	
	On the change of the selection, call a function that will create an XHR object.  Build a URL with your PHP page that will read from the database and return the required data.  In your query string, you will need the value of the selection.  Your PHP will use the food group to get all of the foods that match that group and echo them back to the client.  Since you will likely receive more than 1 food from the food group, you should probably echo out a json_encode execution on the data.
*/


$food = $_GET["food"];

if ($food == "hamburger")
	$group = "Meat";
else
	if ($food == "strawberry")
		$group = "Fruits & Vegetables";
	else
		if ($food == "ice cream")
			$group = "Dairy";
		else
			if ($food == "bread")
				$group = "Grain";
			else
				$group = "Unknown";
				
echo $group;
?>