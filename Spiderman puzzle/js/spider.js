function initialize()
{
	sp1 = document.getElementById("s1");
	sp2 = document.getElementById("s2");
	sp3 = document.getElementById("s3");
	sp4 = document.getElementById("s4");
	sp5 = document.getElementById("s5");
	sp6 = document.getElementById("s6");
	sp7 = document.getElementById("s7");
	sp8 = document.getElementById("s8");
	sp9 = document.getElementById("s9");
	sp10 = document.getElementById("s10");
	sp11 = document.getElementById("s11");
	sp12 = document.getElementById("s12");
	sp13 = document.getElementById("s13");
	sp14 = document.getElementById("s14"); 
	sp15 = document.getElementById("s15");
	sp16 = document.getElementById("s16"); 
	winImgElement = document.getElementById("winImg");
	victoryElement = document.getElementById("victory");
	
	sp1.style.border = "none"; //Initialize the highlight values
	sp2.style.border = "none";
	sp3.style.border = "none";
	sp4.style.border = "none";
	sp5.style.border = "none";
	sp6.style.border = "none";
	sp7.style.border = "none";
	sp8.style.border = "none";
	sp9.style.border = "none";
	sp10.style.border = "none";
	sp11.style.border = "none";
	sp12.style.border = "none";
	sp13.style.border = "none";
	sp14.style.border = "none";
	sp15.style.border = "none";
	sp16.style.border = "none";
	
	boolSource1 = true; //Makes sure a source is not used twice
	boolSource2 = true;
	boolSource3 = true;
	boolSource4 = true;
	boolSource5 = true;
	boolSource6 = true;
	boolSource7 = true;
	boolSource8 = true;
	boolSource9 = true;
	boolSource10 = true;
	boolSource11 = true;
	boolSource12 = true;
	boolSource13 = true;
	boolSource14 = true;
	boolSource15 = true;
	boolSource16 = true;
	
	boolsp1 = true; //Makes sure a tile does not change twice
	boolsp2 = true;
	boolsp3 = true;
	boolsp4 = true;
	boolsp5 = true;
	boolsp6 = true;
	boolsp7 = true;
	boolsp8 = true;
	boolsp9 = true;
	boolsp10 = true;
	boolsp11 = true;
	boolsp12 = true;
	boolsp13 = true;
	boolsp14 = true;
	boolsp15 = true;
	boolsp16 = true;
	
	
	imgIdArray = [];
	imgSourceArray = [];
}
function victoryConstants()
{
	ORIGINALSOURCE1 = sp1.src;
	ORIGINALSOURCE2 = sp2.src;
	ORIGINALSOURCE3 = sp3.src;
	ORIGINALSOURCE4 = sp4.src;
	ORIGINALSOURCE5 = sp5.src;
	ORIGINALSOURCE6 = sp6.src;
	ORIGINALSOURCE7 = sp7.src;
	ORIGINALSOURCE8 = sp8.src; 
	ORIGINALSOURCE9 = sp9.src;
	ORIGINALSOURCE10 = sp10.src;
	ORIGINALSOURCE11 = sp11.src;
	ORIGINALSOURCE12 = sp12.src;
	ORIGINALSOURCE13 = sp13.src;
	ORIGINALSOURCE14 = sp14.src;
	ORIGINALSOURCE15 = sp15.src; 
	ORIGINALSOURCE16 = sp16.src;

}
function verifyBoolSp()
{
	if(boolsp1 == true)//Tiles will be locked after they change
	{
		boolsp1 = false;
	}
	else
	{
		if(boolsp2 == true)
		{
			boolsp2 = false;
		}
		else
		{
			if(boolsp3 == true)
			{
				boolsp3 = false;
			}
			else
			{
				if(boolsp4 == true)
				{
					boolsp4 = false;
				}
				else
				{
					if(boolsp5 == true)
					{
						boolsp5 = false;
					}
					else
					{
						if(boolsp6 == true)
						{
							boolsp6 = false;
						}
						else
						{
							if(boolsp7 == true)
							{
								boolsp7 = false;
							}
							else
							{
								if (boolsp8 == true)
								{
									boolsp8 = false;
								}
								else
								{
									if(boolsp9 == true)
									{
										boolsp9= false;
									}
									else
									{
										if(boolsp10 == true)
										{
											boolsp10 = false;
										}
										else
										{
											if(boolsp11 == true)
											{
												boolsp11 = false;
											}
											else
											{
												if(boolsp12 == true)
												{
													boolsp12 = false;
												}
												else
												{
													if(boolsp13 == true)
													{
														boolsp13 = false;
													}
													else
													{
														if(boolsp14 == true)
														{
															boolsp14 = false;
														}
														else
														{
															if(boolsp15 == true)
															{
																boolsp15 = false;
															}
															else
															{
																boolsp16 = false;
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}
function shuffle()
{
	while (boolsp1 == true || boolsp2 == true || boolsp3 == true || boolsp4 == true || boolsp5 == true || boolsp6 == true|| boolsp7 == true || boolsp8 == true || 
	boolsp9 == true || boolsp10 == true || boolsp11 == true || boolsp12  == true || boolsp13 == true || boolsp14 == true || boolsp15 == true || boolsp16 == true)
	{
		
		rndNum = parseInt(Math.random() * 16) + 1;
		if(rndNum == 1 && boolSource1 == true) //Random sources locked after used
		{
			newSource = "images/sm1.png";
			boolSource1 = false;
			verifyBoolSp();
			return newSource;
		}
		else
		{
			if (rndNum == 2 && boolSource2 == true)
			{
				newSource = "images/sm2.png";
				boolSource2 = false;
				verifyBoolSp();
				return newSource;
			}
			else
			{
				if (rndNum == 3 && boolSource3 == true)
				{
					newSource = "images/sm3.png";
					boolSource3 = false;
					verifyBoolSp();
					return newSource;
				}
				else
				{
					if(rndNum == 4 && boolSource4 == true)
					{
						newSource = "images/sm4.png";
						boolSource4 = false;
						verifyBoolSp();
						return newSource;
					}
					else
					{
						if(rndNum == 5 && boolSource5 == true)
						{
							newSource = "images/sm5.png";
							boolSource5 = false;
							verifyBoolSp();
							return newSource;
						}
						else
						{
							if(rndNum == 6 && boolSource6 == true)
							{
								newSource = "images/sm6.png";
								boolSource6 = false;
								verifyBoolSp();
								return newSource;
							}
							else
							{
								if(rndNum == 7 && boolSource7 == true)
								{
									newSource = "images/sm7.png";
									boolSource7 = false;
									verifyBoolSp();
									return newSource;
								}
								else
								{
									if(rndNum == 8 && boolSource8 == true)
									{
										newSource = "images/sm8.png";
										boolSource8 = false;
										verifyBoolSp();
										return newSource;
									}
									else
									{
										if(rndNum == 9 && boolSource9 == true)
										{
											newSource = "images/sm9.png";
											boolSource9 = false;
											verifyBoolSp();
											return newSource;
										}
										else
										{
											if(rndNum == 10 && boolSource10 == true)
											{
												newSource = "images/sm10.png";
												boolSource10 = false;
												verifyBoolSp();
												return newSource;
											}
											else
											{
												if(rndNum == 11 && boolSource11 == true)
												{
													newSource = "images/sm11.png";
													boolSource11 = false;
													verifyBoolSp();
													return newSource;
												}
												else
												{
													if(rndNum == 12 && boolSource12 == true)
													{
														newSource = "images/sm12.png";
														boolSource12 = false;
														verifyBoolSp();
														return newSource;
													}
													else
													{
														if(rndNum == 13 && boolSource13 == true)
														{
															newSource = "images/sm13.png";
															boolSource13 = false;
															verifyBoolSp();
															return newSource;
														}
														else
														{
															if(rndNum == 14 && boolSource14 == true)
															{
																newSource = "images/sm14.png";
																boolSource14 = false;
																verifyBoolSp();
																return newSource;
															}
															else
															{
																if(rndNum == 15 && boolSource15 == true)
																{
																	newSource = "images/sm15.png";
																	boolSource15 = false;
																	verifyBoolSp();
																	return newSource;
																}
																else
																{
																	if(rndNum == 16 && boolSource16 == true)
																	{
																		newSource = "images/sm16.png";
																		boolSource16 = false;
																		verifyBoolSp();
																		return newSource;
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}	
}
function greenHighlight(spImg)
{
	var image = document.getElementById(spImg);
	if(image.style.border == "none")
	{
		image.style.border = " thick solid green";
		inputSource = image.src;
		getImages(spImg, inputSource);
	}
	else
	{
		image.style.border = "none";
	}
	
}
function getImages(imgId, imgSource)
{
	imgIdObject = { id: imgId};
	imgSourceObject = {source: imgSource};
	imgIdArray.push(imgId);
	imgSourceArray.push(imgSource);	 

	swapImages();
	//A click will push in an element's Id and Source into an array
}
function swapImages()
{
	if (imgIdArray.length == 2 && imgSourceArray.length == 2)
	{
		document.getElementById(imgIdArray[0]).src = imgSourceArray[1]; //Swapping
		document.getElementById(imgIdArray[1]).src = imgSourceArray [0];
		winCondition();
		initialize();// Resets to an empty array
	}
}
function winCondition()
{
	if(sp1.src == ORIGINALSOURCE1
	&& sp2.src == ORIGINALSOURCE2 
	&& sp3.src == ORIGINALSOURCE3
	&& sp4.src == ORIGINALSOURCE4 
	&& sp5.src == ORIGINALSOURCE5 
	&& sp6.src == ORIGINALSOURCE6 
	&& sp7.src == ORIGINALSOURCE7 
	&& sp8.src == ORIGINALSOURCE8
	&& sp9.src == ORIGINALSOURCE9 
	&& sp10.src == ORIGINALSOURCE10 
	&& sp11.src == ORIGINALSOURCE11 
	&& sp12.src == ORIGINALSOURCE12 
	&& sp13.src == ORIGINALSOURCE13
	&& sp14.src == ORIGINALSOURCE14
	&& sp15.src == ORIGINALSOURCE15
	&& sp16.src == ORIGINALSOURCE16)
	{
		victoryElement.innerHTML = "Congratulations you win!";
		winImgElement.style.display = "inline";
		sp1.style.display = "none";
		sp2.style.display = "none";
		sp3.style.display = "none";
		sp4.style.display = "none";
		sp5.style.display = "none";
		sp6.style.display = "none";
		sp7.style.display = "none";
		sp8.style.display = "none";
		sp9.style.display = "none";
		sp10.style.display = "none";
		sp11.style.display = "none";
		sp12.style.display = "none";
		sp13.style.display = "none";
		sp14.style.display = "none";
		sp15.style.display = "none";
		sp16.style.display = "none";
		
	}
}
function displayShuffle()
{
	sp1.src = shuffle();
	sp2.src = shuffle();
	sp3.src = shuffle();
	sp4.src = shuffle();
	sp5.src = shuffle();
	sp6.src = shuffle();
	sp7.src = shuffle();
	sp8.src = shuffle();
	sp9.src = shuffle();
	sp10.src = shuffle();
	sp11.src = shuffle();
	sp12.src = shuffle();
	sp13.src = shuffle();
	sp14.src = shuffle();
	sp15.src = shuffle();
	sp16.src = shuffle();
	initialize();
}