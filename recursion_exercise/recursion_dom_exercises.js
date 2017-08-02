function getElementById(id){
	var element = null;
	function helper(e){
		for(var i = 0; i < e.length; i++){
			if(e[i].id === id){
				element = e[i];
			}
			helper(e[i].children);	 
		}
	}
	helper(document.body.children);
	return element;
}


function getElementsByTagName(tag){
	var newArr = [];
	function helper(e){
		for(var i = 0; i < e.length; i++){
			if(e[i].tagName === tag.toUpperCase()){
				newArr.push(e[i]);
			}
			helper(e[i].children);	 
		}
	}
	helper(document.body.children);
	return newArr;
}

function getElementsByClassName(className){
	var newArr = [];
	function helper(e){
		for(var i = 0; i < e.length; i++){
			if(e[i].className.split(" ").includes(className)){
				newArr.push(e[i]);
			}
			helper(e[i].children);	 
		}
	}
	helper(document.body.children);
	return newArr;
}







