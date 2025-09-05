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
