// ================= TAB SWITCH =================
function showSection(id) {
  document.querySelectorAll("section").forEach(sec => sec.style.display = "none");
  document.getElementById(id).style.display = "block";

  document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");
}

// ================= NOTES =================
window.addNote = function () {
  const title = document.getElementById("noteTitle").value;
  const content = document.getElementById("noteContent").value;

  if (!title || !content) return alert("Fill all fields");

  let notes = JSON.parse(localStorage.getItem("notes") || "[]");
  notes.push({ title, content });
  localStorage.setItem("notes", JSON.stringify(notes));

  document.getElementById("noteTitle").value = "";
  document.getElementById("noteContent").value = "";
  loadNotes();
};

function loadNotes() {
  const list = document.getElementById("notesList");
  const notes = JSON.parse(localStorage.getItem("notes") || "[]");

  list.innerHTML = "";
  notes.forEach((n, i) => {
    list.innerHTML += `
      <div class="note">
        <b>${n.title}</b>
        <p>${n.content}</p>
        <button onclick="deleteNote(${i})">Delete</button>
      </div>
    `;
  });
}

window.deleteNote = function (i) {
  let notes = JSON.parse(localStorage.getItem("notes"));
  notes.splice(i, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  loadNotes();
};

// ================= ASSIGNMENTS =================
window.addAssignment = function () {
  const title = document.getElementById("assignmentTitle").value;
  const date = document.getElementById("assignmentDate").value;

  if (!title || !date) return alert("Fill all fields");

  let data = JSON.parse(localStorage.getItem("assignments") || "[]");
  data.push({ title, date });
  localStorage.setItem("assignments", JSON.stringify(data));

  document.getElementById("assignmentTitle").value = "";
  document.getElementById("assignmentDate").value = "";

  loadAssignments();
};

function loadAssignments() {
  const box = document.getElementById("assignmentList");
  const data = JSON.parse(localStorage.getItem("assignments") || "[]");

  box.innerHTML = "";
  data.forEach((a, i) => {
    box.innerHTML += `
      <div class="assignment">
        <b>${a.title}</b> - ${a.date}
        <button onclick="deleteAssignment(${i})">Delete</button>
      </div>
    `;
  });
}

window.deleteAssignment = function (i) {
  let data = JSON.parse(localStorage.getItem("assignments"));
  data.splice(i, 1);
  localStorage.setItem("assignments", JSON.stringify(data));
  loadAssignments();
};

// ================= QUIZ =================
window.addQuiz = function () {
  const q = document.getElementById("quizQuestion").value;
  const a = document.getElementById("quizAnswer").value;

  if (!q || !a) return alert("Fill both fields");

  let quiz = JSON.parse(localStorage.getItem("quiz") || "[]");
  quiz.push({ q, a });
  localStorage.setItem("quiz", JSON.stringify(quiz));

  document.getElementById("quizQuestion").value = "";
  document.getElementById("quizAnswer").value = "";

  loadQuiz();
};

function loadQuiz() {
  const box = document.getElementById("quizList");
  const quiz = JSON.parse(localStorage.getItem("quiz") || "[]");

  box.innerHTML = "";
  quiz.forEach((q, i) => {
    box.innerHTML += `
      <div class="quiz-card">
        <b>Q:</b> ${q.q}<br>
        <b>A:</b> ${q.a}
        <button onclick="deleteQuiz(${i})">Delete</button>
      </div>
    `;
  });
}

window.deleteQuiz = function (i) {
  let quiz = JSON.parse(localStorage.getItem("quiz"));
  quiz.splice(i, 1);
  localStorage.setItem("quiz", JSON.stringify(quiz));
  loadQuiz();
};

// ================= PAGE LOAD =================
window.onload = function () {
  loadNotes();
  loadAssignments();
  loadQuiz();
};
