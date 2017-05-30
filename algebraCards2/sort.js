function sort(dropped)
{
	var spot = parseInt(parseInt(dropped.style.left)/100);
	dropped.style.left = spot*100;
	var fakeTree = [document.getElementById("leftContainerEnd"),document.getElementById("container"),document.getElementById("rightContainerEnd"),document.getElementById("theEmpty")];
	for(var i=0;i<fakeTree.length-1;i++)
		{
			var treeElementPosition = parseInt(fakeTree[i].style.left)/100;
			if(treeElementPosition>=spot)
				{
					fakeTree[i].style.left = treeElementPosition*100+100;
				}else{
					fakeTree[i].style.left = i*100;
				}
		}
}
