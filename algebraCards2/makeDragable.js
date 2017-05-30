function dragableGraphic(aGraphic,addMore=function(){},addMoreDrop=function(eventArgument=""){})
{
	
	aGraphic.addEventListener("click",moveStartAndStop);
	aGraphic.contained = [aGraphic];
	
	var moving = false;
	function moveStartAndStop(e)
	{
		moving = !moving;
		if(moving == true)
		{
			aGraphic.style.zIndex = 2;
			addEventListener("mousemove",move);
			var graphicPickedUp = new CustomEvent("graphicPickedUp");
			graphicPickedUp.targetGraphic = aGraphic;
			dispatchEvent(graphicPickedUp);
		}else{
			aGraphic.style.zIndex = 1;
			removeEventListener("mousemove",move);
			var graphicDropped = new CustomEvent("graphicDropped");
			graphicDropped.clientX = parseInt(aGraphic.style.left);
			graphicDropped.clientY = parseInt(aGraphic.style.top);
			graphicDropped.eventGraphics = aGraphic.contained;
			addMoreDrop(e);
			dispatchEvent(graphicDropped);
		}
	}

	function move(e)
	{
		aGraphic.style.left = e.clientX-50;
		aGraphic.style.top = e.clientY-50;
		addMore();
	}
}