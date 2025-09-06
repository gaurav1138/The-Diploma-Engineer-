import { db } from "./firebase-config.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

// Page ke data-section attribute se collection ka naam lena
const section = document.currentScript.getAttribute("data-section");

async function loadData() {
  const querySnapshot = await getDocs(collection(db, section));
  let container = document.getElementById("data-list");
  container.innerHTML = "";

  querySnapshot.forEach((doc) => {
    let data = doc.data();
    container.innerHTML += `
      <div class="card">
        <h3>${data.subjectName} (${data.subjectCode})</h3>
        <p><b>Branch:</b> ${data.branch} | <b>Year:</b> ${data.year} | <b>Sem:</b> ${data.semester}</p>
        <a href="${data.pdfLink}" target="_blank">📥 Download</a>
      </div>
    `;
  });
}

loadData(); in



// Function to create PDF boxes dynamically
function renderPDFBoxes() {
  const container = document.getElementById('box-container');
  const pdfDataDiv = document.getElementById('pdf-data');
  const pdfLines = Array.from(pdfDataDiv.children).map(div => div.textContent.trim());

  pdfLines.forEach(line => {
    const [branch, subject, semester, code, pdfLink] = line.split("|").map(item => item.trim());

    const box = document.createElement('div');
    box.classList.add('info-box');

    box.innerHTML = `
      <p><strong>${subject}</strong></p>
      <p>${branch} | ${semester} | ${code}</p>
      <a href="${pdfLink}" target="_blank">Open PDF</a>
    `;

    container.appendChild(box);
  });
}

// Call the function
renderPDFBoxes();
