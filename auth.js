// auth.js
import { signInWithPopup, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { auth, provider } from "./firebase.js";

// DOM Elements
const btnGoogleSignin = document.getElementById('btn-google-signin');
const userInfo = document.getElementById('user-info');
const userName = document.getElementById('user-name');
const btnLogout = document.getElementById('btn-logout');
const projectActions = document.getElementById('project-actions');
const btnCopyAll = document.getElementById('btn-copy-all'); // we want to unhide this later

let currentUser = null;

// Auth State Observer
if (auth) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      currentUser = user;
      // User is signed in
      btnGoogleSignin.classList.add('hidden');
      userInfo.classList.remove('hidden');
      projectActions.classList.remove('hidden');
      userName.textContent = user.displayName;
      
      // Dispatch event to let projects.js know to load projects
      const event = new CustomEvent('user-login', { detail: { uid: user.uid } });
      window.dispatchEvent(event);
    } else {
      currentUser = null;
      // User is signed out
      btnGoogleSignin.classList.remove('hidden');
      userInfo.classList.add('hidden');
      projectActions.classList.add('hidden');
      userName.textContent = '';
      
      // Dispatch event to clear projects
      const event = new CustomEvent('user-logout');
      window.dispatchEvent(event);
    }
  });
}

// Event Listeners
btnGoogleSignin.addEventListener('click', () => {
  if (!auth) {
    alert("Firebase Auth is not configured. Please add your config in firebase.js.");
    return;
  }
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log("Logged in successfully:", result.user.displayName);
    })
    .catch((error) => {
      console.error("Login failed:", error);
      alert("Login failed: " + error.message);
    });
});

btnLogout.addEventListener('click', () => {
  signOut(auth).then(() => {
    console.log("Logged out successfully");
  }).catch((error) => {
    console.error("Logout error", error);
  });
});

export { currentUser };
