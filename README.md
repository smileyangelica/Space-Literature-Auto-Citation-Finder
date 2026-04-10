# Space Literature Auto-Citation Finder

A responsive, highly accessible web application designed to help researchers find relevant scientific citations based on a provided paragraph of text. Focuses on space research, microgravity, space health, and aerospace engineering.

## Features

- **Space-Biotech Design**: Implements a dark/light mode toggle with cyan/navy space vibes.
- **Accessibility First**: American Sign Language Interpreter Pop-up, WCAG 2.2 AA compliant, no color-only reliance, keyboard navigable, and robust ARIA labels.
- **Multilingual Support**: American Sign Language, Cantonese, English, French, Galician, German, Greek, Gujarati, Hakka, Hebrew, Hindi, Hungarian, Italian, Japanese, Malagasy, Mandarin, Marathi, Martinique Creole, Ndebele, Pidgin English, Portuguese, Punjabi, Serbian, Shona, Spanish, Tamil, Telugu, and Turkish so far. 
- **Web Speech API integration**: Read-aloud functionality for inputs and results.
- **Font Resizing**: Real-time scalable typography elements (`A-`, `A`, `A+`) without zooming the entire browser.
- **Firebase Integration**: 
  - Google Sign-In Authentication.
  - Save parsed citations grouped into "Projects" in Firestore.
- **Link Verification**: Displays active badges to show the user whether a URL returns 200 or was dynamically replaced with a fallback search.

## Setup Instructions

### Pre-requisites
- You will need a simple local server to run this locally due to ES Module imports from CDNs (e.g., using VSCode Live Server, `python -m http.server`, or `npm start` if configured).
- A Firebase Project.

### Modifying Firebase Config

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Create a new project and add a "Web" app to it.
3. Enable Authentication (Google Provider) and Firestore Database.
4. Copy your Firebase Config object.
5. Open `firebase.js` in this repository.
6. Replace the `firebaseConfig` object with your actual keys.

### Running Locally
You can use `npx serve` or any static file server:
```bash
npx serve .
```

### Deploying to GitHub Pages
Because the application is built using vanilla HTML/CSS/JS, there is no build step. Simply push all changes to your `main` branch, and enable GitHub Pages on the root directory.

## File Architecture

- `index.html`: Semantic layout and structural elements.
- `styles.css`: CSS Variables for theming, typography, spacing, and layout.
- `script.js`: Core DOM manipulation, "Mocked" AI generation handling, validation.
- `firebase.js`: Firebase initialization logic.
- `auth.js`: Logic for managing user state (Google login/logout).
- `projects.js`: Firestore database calls to manage user collections.

## AI Use Registry

### Tools Used
- **MS Copilot:** Antigravity Prompt Generation Optimization
- **Gemini 3.1 Pro (High) Code Assist in Antigravity:** Code generation (HTML/CSS/JS)
- **Gemini Nano Banana:** App Store Icon

### Human Contributions
- Project concept and design direction
- API selection and integration testing
- All content writing and fact-checking
- Final visual polish and responsive testing

### Verification Steps
1. Tested on mobile and desktop browsers
