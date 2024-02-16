const contOfNotes = document.querySelector('.containerOfNotes');
const createBtn = document.querySelector('.btn');
const inputBox = document.querySelectorAll('.inputBox');


window.addEventListener('load', ()=> {
	const storedNotes = localStorage.getItem("notes");
	if(storedNotes) {
		contOfNotes.innerHTML = storedNotes;
	}
});

function saveNotesToLocalStorage() {
    // Save the content of the notes container to localStorage
    localStorage.setItem('notes', contOfNotes.innerHTML);
}

// Adding Notes

createBtn.addEventListener('click', ()=> {
	let newNote = document.createElement("p");
	let newImg = document.createElement("img");
	newNote.classList.add("inputBox");
	newImg.classList.add("delImg");
	newImg.setAttribute("src", "images/delete.png");
	newNote.setAttribute("contenteditable", "true");
	contOfNotes.appendChild(newNote).appendChild(newImg);
    newNote.style.fontSize = "30px";
    newNote.style.color = "#333333";
    newNote.style.padding = "30px";
    newNote.style.fontFamily = "Jokerman";
    saveNotesToLocalStorage();
});




// Remove Notes
contOfNotes.addEventListener("click", (e)=> {
	console.log(e.target.tagName);
	if(e.target.className === "delImg") 
		e.target.parentElement.remove();
	saveNotesToLocalStorage();
});

contOfNotes.addEventListener("input", ()=> {
	saveNotesToLocalStorage();
});
