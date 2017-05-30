function containerGraphic(leftGraphic,aGraphic,rightGraphic)
{
	//setup
	dragableGraphic(leftGraphic,movement);
	
	//variables
	leftGraphic.contained =[leftGraphic,aGraphic,rightGraphic];
	
	leftGraphic.leftChildGraphic;
	leftGraphic.rightChildGraphic;
	
	//dropAccepting
	addEventListener("graphicDropped",acceptDrop);
	function acceptDrop(e)
	{
		var align = new CustomEvent("alignGraphics");
		//for readability
		var leftGraphicX = parseInt(leftGraphic.style.left);
		var aGraphicX = parseInt(aGraphic.style.left);
		var rightGraphicX = parseInt(rightGraphic.style.left);
		var leftGraphicY = parseInt(leftGraphic.style.top);
		
		if(leftGraphic.leftChildGraphic == null && leftGraphic.parentGraphic == null && e.clientX>leftGraphicX && e.clientX<aGraphicX && e.clientY>leftGraphicY && e.clientY<leftGraphicY+100)
			{
				var holdSplice = leftGraphic.contained.splice(leftGraphic.contained.indexOf(aGraphic));
				leftGraphic.contained.push(e.eventGraphics);
				leftGraphic.contained = leftGraphic.contained.concat(holdSplice);
				leftGraphic.leftChildGraphic = e.eventGraphics[0];
				e.eventGraphics[0].parentGraphic = leftGraphic;
			}else if(leftGraphic.rightChildGraphic == null && leftGraphic.parentGraphic == null && e.clientX>aGraphicX && e.clientX<rightGraphicX && e.clientY>leftGraphicY && e.clientY<leftGraphicY+100)
			{
				var holdSplice = leftGraphic.contained.splice(leftGraphic.contained.indexOf(aGraphic)+1);
				leftGraphic.contained.push(e.eventGraphics);
				leftGraphic.contained = leftGraphic.contained.concat(holdSplice);
				leftGraphic.rightChildGraphic = e.eventGraphics[0];
				e.eventGraphics[0].parentGraphic = leftGraphic;
			}
		dispatchEvent(align);
		ghostUnghost(e.eventGraphics,false);
	}
	
	//picked up cleaning
	addEventListener("graphicPickedUp",removePickedUp);
	function removePickedUp(e)
	{
		var align = new CustomEvent("alignGraphics");
		if(leftGraphic == e.targetGraphic.parentGraphic)
			{
				leftGraphic.contained.splice(leftGraphic.contained.indexOf(e.targetGraphic.contained),1);
				if(e.targetGraphic == leftGraphic.leftChildGraphic)
					{
						leftGraphic.leftChildGraphic = null;
					}else{
						leftGraphic.rightChildGraphic = null;
					}
				e.targetGraphic.parentGraphic = null;
			}
		dispatchEvent(align);
		ghostUnghost(e.targetGraphic.contained,true);
	}
	
	//transparency
	function ghostUnghost(inputArray=[],boolGhost=false)
	{
		function makeGhost(item,index)
		{
			if(Array.isArray(item)==true)
				{
					ghostUnghost(item,true);
				}else{
					item.style.opacity = 0.5;
					item.style.backgroundColor = "bbbbff";
				}
		}
		function unghost(item,index)
		{
			if(Array.isArray(item)==true)
				{
					ghostUnghost(item,false);
				}else{
					item.style.opacity = 1;
					item.style.backgroundColor = null;
				}
		}
		if(boolGhost==true)
			{
				inputArray.forEach(makeGhost);
			}else{
				inputArray.forEach(unghost);
			}
	}
	
	//aligning graphics
	addEventListener("alignGraphics",alignGraphics);
	function alignGraphics(e)
	{
		var sortIndexWithArray=[];
		followArrayTrees(leftGraphic.contained);
		function followArrayTrees(anArray)
		{
		anArray.forEach(followTree);
		function followTree(item,index)
		{
			if(Array.isArray(item)==true)
				{
					followArrayTrees(item);
				}else{
					sortIndexWithArray.push(item);
				}
		}
		}
		sortIndexWithArray.forEach(function(eachGraphic,graphicIndex){eachGraphic.style.left = parseInt(leftGraphic.style.left)+100*graphicIndex; eachGraphic.style.top=leftGraphic.style.top;});
	}
	
	//drag extensions
	function movement()
	{
		var sortIndexWithArray=[];
		followArrayTrees(leftGraphic.contained);
		function followArrayTrees(anArray)
		{
		anArray.forEach(followTree);
		function followTree(item,index)
		{
			if(Array.isArray(item)==true)
				{
					followArrayTrees(item);
				}else{
					sortIndexWithArray.push(item);
				}
		}
		}
		sortIndexWithArray.forEach(function(eachGraphic,graphicIndex){eachGraphic.style.left = parseInt(leftGraphic.style.left)+100*graphicIndex; eachGraphic.style.top=leftGraphic.style.top;});
	}
}