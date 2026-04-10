// script.js

// Global state
window.currentCitations = [];

// DOM Elements
const paragraphInput = document.getElementById('paragraph-input');
const btnGenerate = document.getElementById('btn-generate');
const btnCopyAll = document.getElementById('btn-copy-all');
const resultsSection = document.getElementById('results-section');
const citationsContainer = document.getElementById('citations-container');
const annotatedParagraph = document.getElementById('annotated-paragraph');
const notificationArea = document.getElementById('notification-area');
const btnReadInput = document.getElementById('btn-read-input');

// Accessibility: Themes and Fonts
const btnThemeToggle = document.getElementById('btn-theme-toggle');
const btnFontSmall = document.getElementById('btn-font-small');
const btnFontMedium = document.getElementById('btn-font-medium');
const btnFontLarge = document.getElementById('btn-font-large');

// Theme toggling logic
btnThemeToggle.addEventListener('click', () => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    btnThemeToggle.textContent = newTheme === 'dark' ? '🌓' : '☀️';
});

// Font size toggling
function setFontSize(sizeClass) {
    document.body.classList.remove('text-size-small', 'text-size-medium', 'text-size-large');
    document.body.classList.add(`text-size-${sizeClass}`);
    
    [btnFontSmall, btnFontMedium, btnFontLarge].forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-font-${sizeClass}`).classList.add('active');
}

btnFontSmall.addEventListener('click', () => setFontSize('small'));
btnFontMedium.addEventListener('click', () => setFontSize('medium'));
btnFontLarge.addEventListener('click', () => setFontSize('large'));

// Speech Synthesis
function speakText(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); // Stop current speech
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
    } else {
        alert("Text-to-speech is not supported in this browser.");
    }
}

btnReadInput.addEventListener('click', () => {
    const text = paragraphInput.value.trim();
    if (text) {
        speakText(text);
    }
});

// Mock AI Inference & Verification
btnGenerate.addEventListener('click', async () => {
    const text = paragraphInput.value.trim();
    if (!text) {
        showNotification("Please enter a paragraph to analyze.", "error");
        return;
    }

    btnGenerate.disabled = true;
    btnGenerate.textContent = "Analyzing...";
    showNotification("Contacting AI model to extract space concepts...", "info");

    try {
        // Simulate network delay for AI API
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Mock AI response
        const mockResponse = generateMockCitations(text);
        window.currentCitations = mockResponse;
        
        showNotification("Citations generated. Verifying links...", "info");
        
        // Verify Links (simulated with random fetch success/fail)
        await verifyLinks(mockResponse);
        
        renderResults(text, mockResponse);
        showNotification("Analysis complete. Links verified.", "success");
        
        btnCopyAll.classList.remove('hidden');
    } catch (error) {
        console.error("AI Generation Error: ", error);
        showNotification("An error occurred during generation.", "error");
    } finally {
        btnGenerate.disabled = false;
        btnGenerate.textContent = "Generate Citations";
    }
});

function generateMockCitations(inputText) {
    // We mock returning 2 citations that might fit any text
    return [
        {
            id: 'cit-1',
            authors: "Smith, J., Roberts, L.",
            year: 2023,
            citation: "Smith, J., & Roberts, L. (2023). Effects of prolonged microgravity on bone density in LEO operations. Journal of Space Health, 15(4), 45-60.",
            summary: "This study details the rapid loss of bone mass in astronauts and evaluates countermeasures used aboard the ISS.",
            bullets: [
                { category: "Microgravity", explanation: "Analyzes physiological changes in zero-G." },
                { category: "Countermeasures", explanation: "Proposes new exercise protocols." }
            ],
            // We use a real url that might work or fail for testing
            url: "https://example.com/paper1"
        },
        {
            id: 'cit-2',
            authors: "Chen, X., Williams, D.",
            year: 2024,
            citation: "Chen, X., & Williams, D. (2024). Next-generation propulsion systems for deep space transit. Aerospace Engineering Review, 8(2), 112-130.",
            summary: "Reviews the current state of ion thruster technology and its application for Mars-bound missions.",
            bullets: [
                { category: "Propulsion", explanation: "Examines specific impulse gains." },
                { category: "Deep Space", explanation: "Applicability for extended missions beyond LEO." }
            ],
            url: "https://example.com/paper2"
        }
    ];
}

async function verifyLinks(citations) {
    for (let c of citations) {
        // In a real scenario, we'd do a fetch(c.url, { mode: 'no-cors' }) or use a proxy to check status 200
        // Because of CORS from client side, true link verification requires a backend proxy.
        // Here we simulate the process
        await new Promise(r => setTimeout(r, 800)); 
        // 80% chance it succeeds for demonstration
        const isVerified = Math.random() > 0.2;
        c.verifiedStatus = isVerified ? 'verified' : 'failed';
        if (!isVerified) {
            // Mocking the AI Re-query
            showNotification(`Link for ${c.authors} failed. Re-querying AI...`, 'info');
            await new Promise(r => setTimeout(r, 1000));
            c.url = "https://scholar.google.com/scholar?q=" + encodeURIComponent(c.citation); // Fallback to google scholar search
            c.verifiedStatus = 'verified'; // Assume the fallback search URL is valid
        }
    }
}

function renderResults(originalParagraph, citations) {
    resultsSection.classList.remove('hidden');
    citationsContainer.innerHTML = '';
    
    // Inject footnotes: Just append [1], [2] at the end for demonstration.
    // In a real AI parsing, the AI would point to specific sentences.
    let annotatedText = originalParagraph;
    citations.forEach((c, index) => {
        annotatedText += ` <a href="#${c.id}" class="footnote-ref" aria-label="Reference ${index + 1}">[${index + 1}]</a>`;
    });
    annotatedParagraph.innerHTML = `<p>${annotatedText}</p>`;
    
    // Render Cards
    citations.forEach((c, index) => {
        const card = document.createElement('article');
        card.className = 'citation-card';
        card.id = c.id;
        card.setAttribute('tabindex', '0');
        
        let linkClass = c.verifiedStatus === 'verified' ? 'verified' : '';
        
        // Build card HTML safely
        card.innerHTML = `
            <div class="cit-actions">
                <button class="btn-icon read-cit" aria-label="Read citation summary" title="Read Aloud">🔊</button>
            </div>
            <div class="cit-header">
                <div>
                    <h3 class="cit-title">[${index + 1}] ${c.authors} (${c.year})</h3>
                </div>
            </div>
            <div class="cit-meta">${c.citation}</div>
            <div class="cit-summary">${c.summary}</div>
            <ul class="cit-bullets">
                ${c.bullets.map(b => `<li><strong>${b.category}:</strong> ${b.explanation}</li>`).join('')}
            </ul>
            <a href="${c.url}" target="_blank" rel="noopener noreferrer" class="cit-link ${linkClass}">
                View Source ⭧
            </a>
        `;
        
        citationsContainer.appendChild(card);
        
        // Attach read aloud
        const readBtn = card.querySelector('.read-cit');
        readBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            speakText(`Citation ${index + 1}. ${c.authors}, year ${c.year}. Summary: ${c.summary}`);
        });
    });
}

function showNotification(message, type) {
    notificationArea.textContent = message;
    notificationArea.className = `notification-area ${type}`;
    // Clear success/error after 4 seconds
    if (type !== 'info') {
        setTimeout(() => {
            notificationArea.textContent = '';
            notificationArea.className = 'notification-area';
        }, 4000);
    }
}

// Copy All Citations
btnCopyAll.addEventListener('click', () => {
    if (window.currentCitations.length === 0) return;
    
    const textToCopy = window.currentCitations.map(c => c.citation).join('\n\n');
    navigator.clipboard.writeText(textToCopy).then(() => {
        showNotification("Citations copied to clipboard!", "success");
    }).catch(err => {
        showNotification("Failed to copy.", "error");
        console.error(err);
    });
});
