// projects.js
import { collection, addDoc, getDocs, query, where } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { db } from "./firebase.js";

const projectSelect = document.getElementById('project-select');
const btnCreateProject = document.getElementById('btn-create-project');
const btnAddToProject = document.getElementById('btn-add-to-project');

let currentUserId = null;

// Listen for Auth changes
window.addEventListener('user-login', (e) => {
  currentUserId = e.detail.uid;
  loadProjects(currentUserId);
});

window.addEventListener('user-logout', () => {
  currentUserId = null;
  projectSelect.innerHTML = '<option value="">Select Project...</option>';
});

// Load Projects from Firestore
async function loadProjects(uid) {
  if (!db) return; // If config isn't set
  
  projectSelect.innerHTML = '<option value="">Loading...</option>';
  try {
    const q = query(collection(db, "projects"), where("userId", "==", uid));
    const querySnapshot = await getDocs(q);
    
    projectSelect.innerHTML = '<option value="">Select Project...</option>';
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const option = document.createElement('option');
      option.value = doc.id;
      option.textContent = data.name;
      projectSelect.appendChild(option);
    });
  } catch (error) {
    console.error("Error loading projects: ", error);
    projectSelect.innerHTML = '<option value="">Error loading</option>';
  }
}

// Create New Project
btnCreateProject.addEventListener('click', async () => {
  if (!db) {
    alert("Firebase not configured.");
    return;
  }
  const projectName = prompt("Enter new project name:");
  if (projectName && projectName.trim() !== '') {
    try {
      const docRef = await addDoc(collection(db, "projects"), {
        name: projectName.trim(),
        userId: currentUserId,
        createdAt: new Date()
      });
      // Add immediately to select
      const option = document.createElement('option');
      option.value = docRef.id;
      option.textContent = projectName.trim();
      projectSelect.appendChild(option);
      // Select the new project
      projectSelect.value = docRef.id;
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Failed to create project.");
    }
  }
});

// Add Citations to Project
btnAddToProject.addEventListener('click', async () => {
  if (!db) {
    alert("Firebase not configured.");
    return;
  }
  const selectedProjectId = projectSelect.value;
  if (!selectedProjectId) {
    alert("Please select a project first.");
    return;
  }

  // Get current citations from the window scope (passed by script.js)
  const currentCitations = window.currentCitations || [];
  if (currentCitations.length === 0) {
    alert("No citations to add. Generate some first.");
    return;
  }

  try {
    // Add each citation to the subcollection "citations"
    const citPromises = currentCitations.map(cit => {
      // In a real app we might put citations in a subcollection or array. We'll use a top-level collection.
      return addDoc(collection(db, "citations"), {
        ...cit,
        projectId: selectedProjectId,
        userId: currentUserId,
        addedAt: new Date()
      });
    });

    await Promise.all(citPromises);
    alert(`Successfully added ${currentCitations.length} citations to project!`);
  } catch (error) {
    console.error("Error saving citations: ", error);
    alert("Failed to save citations.");
  }
});
