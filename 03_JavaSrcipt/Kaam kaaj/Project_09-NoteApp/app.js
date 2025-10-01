let notes = [];

let editingNoteId = null;

function loadNotes() {
  const savedNotes = localStorage.getItem("quickNotes");
  return savedNotes ? JSON.parse(savedNotes) : [];
}

function saveNote(event) {
  event.preventDefault();
  const title = document.getElementById("noteTitle").value.trim();
  const content = document.getElementById("noteContent").value.trim();

  if (editingNoteId) {
    const noteIndex = notes.findIndex((note) => note.id === editingNoteId);
    notes[noteIndex] = {
      ...notes[noteIndex],
      title: title,
      content: content,
    };
  } else {
    notes.unshift({
      id: generateId(),
      title: title,
      content: content,
    });
  }

  closeNoteDialog();
  saveNotes();
  renderNotes();
}

function generateId() {
  return Date.now().toString();
}

function saveNotes() {
  localStorage.setItem("quickNotes", JSON.stringify(notes));
}

function deleteNote(noteId) {
  notes = notes.filter((note) => note.id != noteId);
  saveNotes();
  renderNotes();
}

function renderNotes() {
  const notesContainer = document.getElementById("notesContainer");

  if (notes.length === 0) {
    // show some fall back elements
    notesContainer.innerHTML = `
      <div class="empty-state">
        <h2>No notes yet</h2>
        <p>Create your first note to get started!</p>
        <button class="add-note-btn" onclick="openNoteDialog()">
          + Add Your First Note
        </button>
      </div>
      `;
    return;
  }

  notesContainer.innerHTML = notes
    .map(
      (note) => `<div class="note-card">
    <h3 class="note-title">${note.title}</h3>
    <p class="note-content">${note.content}</p>
    <div class="note-actions">
         <button class="edit-btn" onclick="openNoteDialog('${note.id}')" title="Edit Note">
            <!-- ✏️ Edit SVG -->
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" viewBox="0 0 24 24">
                <path d="M3 21v-3.75L14.81 5.44l3.75 3.75L6.75 21H3z"/>
                <path d="M20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
            </svg>

          </button>

          <button class="delete-btn" onclick="deleteNote('${note.id}')" title="Delete Note">
            <!-- ❌ Delete SVG -->
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" viewBox="0 0 24 24">
                <path d="M18 6 6 18M18 18 6 6" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
            </svg>


          </button>
    </div>
    </div>`
    )
    .join("");

  closeNoteDialog();
}

function openNoteDialog(noteId = null) {
  const dialog = document.getElementById("noteDialog");
  const titleInput = document.getElementById("noteTitle");
  const contentInput = document.getElementById("noteContent");

  if (noteId) {
    //edit note
    const noteToEdit = notes.find((note) => note.id === noteId);
    editingNoteId = noteId;
    document.getElementById("dialogTitle").textContent = "Edit Note";
    titleInput.value = noteToEdit.title;
    contentInput.value = noteToEdit.content;
  } else {
    editingNoteId = null;
    document.getElementById("dialogTitle").textContent = "Add New Note";
    titleInput.value = "";
    contentInput.value = "";
  }

  dialog.showModal();
  titleInput.focus();
}

function closeNoteDialog() {
  document.getElementById("noteDialog").close();
}

function toggleTheme() {
  const isDark = document.body.classList.toggle("dark-theme");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  document.getElementById("themeToggleBtn").textContent = isDark ? "☀️" : "🌙";
}

function applyStoredTheme() {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
    document.getElementById("themeToggleBtn").textContent = "☀️";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  applyStoredTheme();
  notes = loadNotes();
  renderNotes();

  document.getElementById("noteForm").addEventListener("submit", saveNote);

  document
    .getElementById("themeToggleBtn")
    .addEventListener("click", toggleTheme);

  document
    .getElementById("noteDialog")
    .addEventListener("click", function (event) {
      if (event.target === this) {
        closeNoteDialog();
      }
    });
});
