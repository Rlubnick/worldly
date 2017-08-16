



	class toDoEntry{
	constructor(toDoEntryy){
		this.toDoEntryy = toDoEntryy;
	}
}

function addEntryToList(){
	var goalEntry = document.getElementById("myGoal").value;

	createListElement(goalEntry);
	document.getElementById("myGoal").value = "";


}


var id = 0;

function createListElement(listEntry){
	var entryDiv= document.createElement("span");
	var actualDiv= document.createElement("div");

	actualDiv.id = id;
	actualDiv.className = "container";

	entryDiv.innerText = listEntry;

	var activity= document.getElementById("entry");
	
	actualDiv.appendChild(checkFunction());
	actualDiv.appendChild(entryDiv);
	activity.appendChild(actualDiv);
	id++;
}

function checkFunction(){
var checkbox = document.createElement('input');
checkbox.type = "checkbox";
checkbox.className = "check";
return checkbox;
}

function deleteEntry(){
	var toKill = [];

	var list = document.getElementsByClassName("container");

	for (var i = 0; i < list.length; i++){
		var cur = list[i];
		var check = cur.getElementsByClassName("check")[0];

		if (check.checked){
			toKill.push(cur);
		}
	}

	while (toKill.length > 0){
		var div = toKill.pop();
		console.log(div)
		div.remove();

	}
}