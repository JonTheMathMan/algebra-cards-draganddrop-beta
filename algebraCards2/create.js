//containers
function newProduct()
{
	var newOperator = document.createElement("img");
	var newOpenParentheses = document.createElement("img");
	var newCloseParentheses = document.createElement("img");
	
	newOperator.src = "timesCard.png";
	newOpenParentheses.src = "openParenthesesRed.png";
	newCloseParentheses.src = "endParenthesesRed.png";
	
	newOperator.style.position = "absolute";
	newOpenParentheses.style.position = "absolute";
	newCloseParentheses.style.position = "absolute";
	
	newOperator.style.left = 900;
	newOpenParentheses.style.left=800;
	newCloseParentheses.style.left=1000;
	
	newOperator.style.top = 500;
	newOpenParentheses.style.top = 500;
	newCloseParentheses.style.top = 500;
	
	containerGraphic(newOpenParentheses,newOperator,newCloseParentheses);
	
	document.body.appendChild(newOperator);
	document.body.appendChild(newOpenParentheses);
	document.body.appendChild(newCloseParentheses);
}

function newQuotient()
{
	var newOperator = document.createElement("img");
	var newOpenParentheses = document.createElement("img");
	var newCloseParentheses = document.createElement("img");
	
	newOperator.src = "divisionCard.png";
	newOpenParentheses.src = "openParenthesesBlue.png";
	newCloseParentheses.src = "endParenthesesBlue.png";
	
	newOperator.style.position = "absolute";
	newOpenParentheses.style.position = "absolute";
	newCloseParentheses.style.position = "absolute";
	
	newOperator.style.left = 900;
	newOpenParentheses.style.left=800;
	newCloseParentheses.style.left=1000;
	
	newOperator.style.top = 500;
	newOpenParentheses.style.top = 500;
	newCloseParentheses.style.top = 500;
	
	newOpenParentheses.fractionGraphic = true;
	
	containerGraphic(newOpenParentheses,newOperator,newCloseParentheses);
	
	document.body.appendChild(newOperator);
	document.body.appendChild(newOpenParentheses);
	document.body.appendChild(newCloseParentheses);
}

function newSum()
{
	var newOperator = document.createElement("img");
	var newOpenParentheses = document.createElement("img");
	var newCloseParentheses = document.createElement("img");
	
	newOperator.src = "additionCard.png";
	newOpenParentheses.src = "openParenthesesGreen.png";
	newCloseParentheses.src = "endParenthesesGreen.png";
	
	newOperator.style.position = "absolute";
	newOpenParentheses.style.position = "absolute";
	newCloseParentheses.style.position = "absolute";
	
	newOperator.style.left = 900;
	newOpenParentheses.style.left=800;
	newCloseParentheses.style.left=1000;
	
	newOperator.style.top = 500;
	newOpenParentheses.style.top = 500;
	newCloseParentheses.style.top = 500;
	
	containerGraphic(newOpenParentheses,newOperator,newCloseParentheses);
	
	document.body.appendChild(newOperator);
	document.body.appendChild(newOpenParentheses);
	document.body.appendChild(newCloseParentheses);
}


function newRoot()
{
	var newOperator = document.createElement("img");
	var newOpenParentheses = document.createElement("img");
	var newCloseParentheses = document.createElement("img");
	
	newOperator.src = "rootCard.png";
	newOpenParentheses.src = "openParenthesesOrange.png";
	newCloseParentheses.src = "endParenthesesOrange.png";
	
	newOperator.style.position = "absolute";
	newOpenParentheses.style.position = "absolute";
	newCloseParentheses.style.position = "absolute";
	
	newOperator.style.left = 900;
	newOpenParentheses.style.left=800;
	newCloseParentheses.style.left=1000;
	
	newOperator.style.top = 500;
	newOpenParentheses.style.top = 500;
	newCloseParentheses.style.top = 500;
	
	containerGraphic(newOpenParentheses,newOperator,newCloseParentheses);
	
	document.body.appendChild(newOperator);
	document.body.appendChild(newOpenParentheses);
	document.body.appendChild(newCloseParentheses);
}
function newPower()
{
	var newOperator = document.createElement("img");
	var newOpenParentheses = document.createElement("img");
	var newCloseParentheses = document.createElement("img");
	
	newOperator.src = "powerCard.png";
	newOpenParentheses.src = "openParenthesesPurple.png";
	newCloseParentheses.src = "endParenthesesPurple.png";
	
	newOperator.style.position = "absolute";
	newOpenParentheses.style.position = "absolute";
	newCloseParentheses.style.position = "absolute";
	
	newOperator.style.left = 900;
	newOpenParentheses.style.left=800;
	newCloseParentheses.style.left=1000;
	
	newOperator.style.top = 500;
	newOpenParentheses.style.top = 500;
	newCloseParentheses.style.top = 500;
	
	containerGraphic(newOpenParentheses,newOperator,newCloseParentheses);
	
	document.body.appendChild(newOperator);
	document.body.appendChild(newOpenParentheses);
	document.body.appendChild(newCloseParentheses);
}

function newEquation()
{
	var newOperator = document.createElement("img");
	var newOpenParentheses = document.createElement("img");
	var newCloseParentheses = document.createElement("img");
	
	newOperator.src = "equalsCard.png";
	newOpenParentheses.src = "openParenthesesBlack.png";
	newCloseParentheses.src = "endParenthesesBlack.png";
	
	newOperator.style.position = "absolute";
	newOpenParentheses.style.position = "absolute";
	newCloseParentheses.style.position = "absolute";
	
	newOperator.style.left = 900;
	newOpenParentheses.style.left=800;
	newCloseParentheses.style.left=1000;
	
	newOperator.style.top = 500;
	newOpenParentheses.style.top = 500;
	newCloseParentheses.style.top = 500;
	
	containerGraphic(newOpenParentheses,newOperator,newCloseParentheses);
	
	document.body.appendChild(newOperator);
	document.body.appendChild(newOpenParentheses);
	document.body.appendChild(newCloseParentheses);
}

//singles
function createSingles(theClicked)
{
	var newCard = document.createElement("img");
	newCard.src = theClicked.src;
	newCard.style.position = "absolute";
	newCard.style.left = 700;
	newCard.style.top = 500;
	dragableGraphic(newCard);
	document.body.appendChild(newCard);
}