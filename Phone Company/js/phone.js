function initialize()
			{
				LOWERCUSTOMER = 50, UPPERCUSTOMER = 100;
				LOWERMB = 100, UPPERMB = 10000;
				LOWERPLAN = 0, UPPERPLAN = 2;
				
				ctr = 0;
			
				lastNameArray = ["Smith","Johnson","Williams","Brown","Jones", "Miller", "Rogers", "Tennant", "Coleman", "Jiemjitpolchai"];
				firstNameArray = ["Matt","Soren","Marcus","James", "Robert", "John", "Steve", "David", "Jenna", "Joey"];
				planArray = ["Basic", "Comprehensive", "Suckers"];
				
				
				theTable = document.getElementById("mytbl");
				theButton = document.getElementById("start");
			}
			function generateRandomPerson()
			{
				var customerData = getRandomInteger(LOWERCUSTOMER, UPPERCUSTOMER);
				for(var u = 0; u < customerData; u++)
				{
					var phoneNumberStr = "";
					var pickLastName = parseInt(Math.random() * 9) + 1;
					var pickFirstName = parseInt(Math.random() * 9) + 1;
					var pickplan= getRandomInteger(LOWERPLAN, UPPERPLAN);
					var pickMB = getRandomInteger(LOWERMB, UPPERMB);
					
					lastName = lastNameArray[pickLastName];
					firstName = firstNameArray[pickFirstName];
					planPhone = planArray[pickplan];
					
					for(var i = 1; i < 11; i++)
					{
						if(i == 1 || i == 2 || i == 3 && generatePhoneNumber() == 0)
						{
							generatePhoneNumber();
						}
						phoneNumberStr += generatePhoneNumber();
						
					}
					constructor(lastName, firstName, phoneNumberStr, pickMB, planPhone);
				}
			}
			function generatePhoneNumber()
			{
				digit = parseInt(Math.random() * 9) + 1;
				return digit;
			}
			function constructor(last, first, phone, MB, plan) // customerData rows, 7 cells
			{
				ctr++;
				
				var row = theTable.insertRow();
				var cell1 = row.insertCell(0);
				var cell2 = row.insertCell(1);
				var cell3 = row.insertCell(2);
				var cell4 = row.insertCell(3);
				var cell5 = row.insertCell(4);
				var cell6 = row.insertCell(5);
				var cell7 = row.insertCell(6);
				
				cell1.innerHTML = ctr;
				cell2.innerHTML = last;
				cell3.innerHTML = first;
				cell4.innerHTML = phone;
				cell5.innerHTML = MB;
				cell6.innerHTML = plan;
				cell7.innerHTML = "$" + calculateBill(MB, plan);
			}
			function calculateBill(mbCalc, planParameter)
			{
				if(planParameter == "Suckers")
				{
					var total = 4.99 + mbCalc * .02;
					return total.toFixed(2);
				}
				if(planParameter == "Basic")
				{
					if(mbCalc > 1000)
					{
						mbCalc = mbCalc - 1000;
						var total = 19.99 + mbCalc * .1;
						return total.toFixed(2);
					}
					else
					{
						var total = 19.99;
						return total.toFixed(2);
					}		 
				}
				if(planParameter == "Comprehensive")
				{
					if(mbCalc > 4000)
					{
						mbCalc = mbCalc - 4000;
						var total = 24.99 + mbCalc * .25;
						return total.toFixed(2);
					}
					else
					{
						var total = 24.99;
						return total.toFixed(2);
					}
				}
			}
			function disappear()
			{
				theButton.style.display = "none";
			}