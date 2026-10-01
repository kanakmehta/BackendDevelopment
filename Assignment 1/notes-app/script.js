// Get notes from LocalStorage
let notes = JSON.parse(localStorage.getItem("notes")) || [];


// Display notes when page loads
displayNotes();


// Add a new note
function addNote() {

    const title = document.getElementById("noteTitle").value.trim();
    const content = document.getElementById("noteContent").value.trim();

    if (title === "" || content === "") {
        alert("Please enter both title and content.");
        return;
    }

    const note = {
        id: Date.now(),
        title: title,
        content: content,
        date: new Date().toLocaleString()
    };

    notes.push(note);

    saveNotes();

    document.getElementById("noteTitle").value = "";
    document.getElementById("noteContent").value = "";

    displayNotes();
}


// Save notes to LocalStorage
function saveNotes() {

    localStorage.setItem(
        "notes",
        JSON.stringify(notes)
    );
}


// Display notes
function displayNotes(notesToDisplay = notes) {

    const container =
        document.getElementById("notesContainer");

    container.innerHTML = "";

    if (notesToDisplay.length === 0) {

        container.innerHTML =
            "<p>No notes found.</p>";

        return;
    }

    notesToDisplay.forEach(note => {

        const noteElement =
            document.createElement("div");

        noteElement.className = "note";

        noteElement.innerHTML = `
            <h3>${note.title}</h3>

            <p>${note.content}</p>

            <small>
                Created: ${note.date}
            </small>

            <div class="note-buttons">

                <button
                    class="edit-btn"
                    onclick="editNote(${note.id})">
                    Edit
                </button>

                <button
                    class="delete-btn"
                    onclick="deleteNote(${note.id})">
                    Delete
                </button>

            </div>
        `;

        container.appendChild(noteElement);
    });
}


// Delete note
function deleteNote(id) {

    notes = notes.filter(note => note.id !== id);

    saveNotes();

    displayNotes();
}


// Edit note
function editNote(id) {

    const note = notes.find(note => note.id === id);

    if (!note) {
        return;
    }

    const newTitle =
        prompt("Enter new title:", note.title);

    const newContent =
        prompt("Enter new content:", note.content);

    if (
        newTitle !== null &&
        newContent !== null &&
        newTitle.trim() !== "" &&
        newContent.trim() !== ""
    ) {

        note.title = newTitle;
        note.content = newContent;

        saveNotes();

        displayNotes();
    }
}


// Search notes
function searchNotes() {

    const searchText =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const filteredNotes =
        notes.filter(note =>
            note.title.toLowerCase().includes(searchText) ||
            note.content.toLowerCase().includes(searchText)
        );

    displayNotes(filteredNotes);
}