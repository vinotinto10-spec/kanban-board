function removeLast(){

	return document.getElementById("list").removeChild(document.getElementById("list").lastElementChild);
}

function addNew(){
	const item = prompt("New item: ");
	if(item){
		const li = document.createElement("li");
		li.textContent = item;
		document.getElementById("list").appendChild(li);
	}
}

document.getElementById("remove").addEventListener("click",() => {removeLast()});
document.getElementById("add").addEventListener("click",() => {addNew()});
