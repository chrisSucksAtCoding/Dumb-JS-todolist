const button = document.getElementById("buton");
const textInput = document.getElementById("inputGet");
const insiderOfTasks = document.getElementById("tasks");
const deleteOfDeath = document.getElementById("delete");
let counterVariable = 1;

button.addEventListener('click', function(){
	if (textInput.value.length != 0) {
		var paragraph = document.createElement('p');
		paragraph.innerText = counterVariable + ". " +textInput.value;
		insiderOfTasks.appendChild(paragraph);
		counterVariable++;
		paragraph.addEventListener('click', function() {
			paragraph.style.textDecoration = "line-through";
		})
		deleteOfDeath.addEventListener('click', function() {
			insiderOfTasks.removeChild(paragraph);
			counterVariable = 1;
		})
	} else {
		alert("You need to add a task.");
	}
});

