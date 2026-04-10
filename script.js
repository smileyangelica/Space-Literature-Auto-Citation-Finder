// script.js
import { translations } from './translations.js';

// Global state
window.currentCitationsRaw = []; // Raw mock data
window.currentLanguage = 'english';
window.currentFormat = 'APA';
window.stagedCitations = [];

// DOM Elements
const languageSelect = document.getElementById('language-select');
const paragraphInput = document.getElementById('paragraph-input');
const btnGenerate = document.getElementById('btn-generate');
const btnClear = document.getElementById('btn-clear');
const btnCopyAll = document.getElementById('btn-copy-all');
const resultsControls = document.getElementById('results-controls');
const resultsSection = document.getElementById('results-section');
const citationsContainer = document.getElementById('citations-container');
const annotatedParagraph = document.getElementById('annotated-paragraph');
const notificationArea = document.getElementById('notification-area');
const btnReadInput = document.getElementById('btn-read-input');
const btnMic = document.getElementById('btn-mic');
const formatSelect = document.getElementById('format-select');
const filterBiotech = document.getElementById('filter-biotech');
const btnExportPdf = document.getElementById('btn-export-pdf');

// Accessibility: Themes and Fonts
const btnThemeToggle = document.getElementById('btn-theme-toggle');
const btnFontSmall = document.getElementById('btn-font-small');
const btnFontMedium = document.getElementById('btn-font-medium');
const btnFontLarge = document.getElementById('btn-font-large');

// --- I18N Engine ---
function updateLanguage(lang) {
    window.currentLanguage = lang;
    const dict = translations[lang];
    if (!dict) return;

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) el.textContent = dict[key];
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict[key]) el.placeholder = dict[key];
    });

    // If we have rendered citations, re-render them in new language
    if (window.currentCitationsRaw.length > 0) {
        window.currentCitationsRaw = dict.mockData;
        renderResults();
    }
}
languageSelect.addEventListener('change', (e) => updateLanguage(e.target.value));
// Initialize Default
updateLanguage('english');

// --- Speech Recognition (Dictation) ---
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if (SpeechRecognition) {
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    
    // Attempt to set language based on dropdown (approximations)
    const langMap = {
        'english': 'en-US', 'espanol': 'es-ES', 'french': 'fr-FR', 'german': 'de-DE',
        'hindi': 'hi-IN', 'japanese': 'ja-JP', 'mandarin': 'zh-CN', 'cantonese': 'zh-HK',
        'portuguese': 'pt-PT', 'serbian': 'sr-RS'
    };

    let isRecording = false;

    btnMic.addEventListener('click', () => {
        if (isRecording) {
            recognition.stop();
        } else {
            recognition.lang = langMap[window.currentLanguage] || 'en-US';
            try { recognition.start(); } catch(e){}
        }
    });

    recognition.onstart = () => {
        isRecording = true;
        btnMic.classList.add('pulse-active');
        showNotification("Listening...", "info");
    };

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        const currentText = paragraphInput.value;
        paragraphInput.value = currentText ? currentText + " " + transcript : transcript;
        showNotification("Dictation successful.", "success");
    };

    recognition.onend = () => {
        isRecording = false;
        btnMic.classList.remove('pulse-active');
    };
    
    recognition.onerror = (e) => {
        isRecording = false;
        btnMic.classList.remove('pulse-active');
        showNotification("Speech recognition error: " + e.error, "error");
    };
} else {
    btnMic.style.display = 'none'; // hide if unsupported
}

// --- Text-to-Speech ---
function speakText(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        const langMap = {
            'english': 'en-US', 'espanol': 'es-ES', 'french': 'fr-FR', 'german': 'de-DE',
            'japanese': 'ja-JP', 'mandarin': 'zh-CN'
        };
        utterance.lang = langMap[window.currentLanguage] || 'en-US';
        window.speechSynthesis.speak(utterance);
    }
}
btnReadInput.addEventListener('click', () => speakText(paragraphInput.value.trim()));

// --- Theme & Font Adjustments ---
btnThemeToggle.addEventListener('click', () => {
    const html = document.documentElement;
    html.setAttribute('data-theme', html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    btnThemeToggle.textContent = html.getAttribute('data-theme') === 'dark' ? '🌓' : '☀️';
});
function setFontSize(size) {
    document.body.classList.remove('text-size-small', 'text-size-medium', 'text-size-large');
    document.body.classList.add(`text-size-${size}`);
    [btnFontSmall, btnFontMedium, btnFontLarge].forEach(b => b.classList.remove('active'));
    document.getElementById(`btn-font-${size}`).classList.add('active');
}
btnFontSmall.addEventListener('click', () => setFontSize('small'));
btnFontMedium.addEventListener('click', () => setFontSize('medium'));
btnFontLarge.addEventListener('click', () => setFontSize('large'));

// --- App Logic ---
btnClear.addEventListener('click', () => {
    paragraphInput.value = '';
    resultsSection.classList.add('hidden');
    resultsControls.classList.add('hidden');
    btnCopyAll.classList.add('hidden');
    window.currentCitationsRaw = [];
});

btnGenerate.addEventListener('click', async () => {
    const text = paragraphInput.value.trim();
    if (!text) {
        showNotification("Please enter a paragraph to analyze.", "error");
        return;
    }
    btnGenerate.disabled = true;
    showNotification("Contacting AI model...", "info");

    try {
        await new Promise(r => setTimeout(r, 1500));
        // Fetch mock data mapped to current language
        window.currentCitationsRaw = translations[window.currentLanguage].mockData;
        
        showNotification("Citations generated. Verifying links...", "info");
        await verifyLinks(window.currentCitationsRaw);
        
        renderResults();
        showNotification("Analysis complete. Links verified.", "success");
        
        btnCopyAll.classList.remove('hidden');
        resultsControls.classList.remove('hidden');
        resultsSection.classList.remove('hidden');
    } catch (error) {
        console.error(error);
        showNotification("An error occurred.", "error");
    } finally {
        btnGenerate.disabled = false;
    }
});

async function verifyLinks(citations) {
    for (let c of citations) {
        await new Promise(r => setTimeout(r, 400));
        const isVerified = Math.random() > 0.15;
        c.verifiedStatus = isVerified ? 'verified' : 'failed';
        if (!isVerified) {
            c.url = "https://scholar.google.com/scholar?q=" + encodeURIComponent(c.title);
            c.verifiedStatus = 'verified'; 
        }
    }
}

// --- Citation Formatting (APA, MLA, Chicago) ---
function formatCitation(c, formatStyle) {
    switch (formatStyle) {
        case 'MLA':
            // MLA 9th roughly: Author. "Title." Journal, vol, year, pages.
            return `${c.authors}. "${c.title}" <em>${c.journal}</em>, vol. ${c.volume}, ${c.year}, pp. ${c.pages}.`;
        case 'Chicago':
            // Chicago roughly: Author. "Title." Journal vol, (Year): pages.
            return `${c.authors}. "${c.title}" <em>${c.journal}</em> ${c.volume} (${c.year}): ${c.pages}.`;
        case 'APA':
        default:
            // APA 7th roughly: Author. (Year). Title. Journal, vol, pages.
            return `${c.authors} (${c.year}). ${c.title} <em>${c.journal}</em>, ${c.volume}, ${c.pages}.`;
    }
}

formatSelect.addEventListener('change', (e) => {
    window.currentFormat = e.target.value;
    if (window.currentCitationsRaw.length > 0) renderResults();
});

filterBiotech.addEventListener('change', () => {
    if (window.currentCitationsRaw.length > 0) applyFilter();
});

function applyFilter() {
    const onlyBiotech = filterBiotech.checked;
    document.querySelectorAll('.citation-card').forEach(card => {
        const isBiotech = card.getAttribute('data-biotech') === 'true';
        if (onlyBiotech && !isBiotech) {
            card.classList.add('hidden-filter');
        } else {
            card.classList.remove('hidden-filter');
        }
    });
}

function renderResults() {
    citationsContainer.innerHTML = '';
    let annotatedText = paragraphInput.value.trim();
    
    // Inject footnotes
    window.currentCitationsRaw.forEach((c, index) => {
        annotatedText += ` <a href="#${c.id}" class="footnote-ref">[${index + 1}]</a>`;
    });
    annotatedParagraph.innerHTML = `<p>${annotatedText}</p>`;
    
    // Render Cards
    window.currentCitationsRaw.forEach((c, index) => {
        const card = document.createElement('article');
        card.className = 'citation-card';
        card.id = c.id;
        card.setAttribute('data-biotech', c.isBiotech);
        
        let linkClass = c.verifiedStatus === 'verified' ? 'verified' : '';
        const formattedCit = formatCitation(c, window.currentFormat);
        const viewSourceText = translations[window.currentLanguage].viewSource || "View Source ⭧";
        
        card.innerHTML = `
            <div class="cit-actions">
                <button class="btn-icon circle save-cit" aria-label="Save Citation" title="Save to List">💾</button>
                <button class="btn-icon circle read-cit" aria-label="Read excerpt" title="Read Aloud">🔊</button>
            </div>
            <div class="cit-header">
                <h3 class="cit-title">[${index + 1}] ${c.authors.split(',')[0]} et al.</h3>
            </div>
            <div class="cit-meta">${formattedCit}</div>
            <div class="cit-summary">${c.summary}</div>
            <ul class="cit-bullets">
                ${c.bullets.map(b => `<li><strong>${b.category}:</strong> ${b.explanation}</li>`).join('')}
            </ul>
            <a href="${c.url}" target="_blank" class="cit-link ${linkClass}">
                ${viewSourceText}
            </a>
        `;
        citationsContainer.appendChild(card);
        
        card.querySelector('.read-cit').addEventListener('click', () => speakText(c.summary));
        card.querySelector('.save-cit').addEventListener('click', (e) => {
            window.stagedCitations.push(formattedCit);
            e.target.textContent = "✅";
            showNotification("Citation saved to your internal list!", "success");
        });
    });
    // apply filter if it was already checked
    applyFilter();
    
    // Export raw citations to window for projects.js
    window.currentCitations = window.currentCitationsRaw.map(c => ({
        ...c,
        citationText: formatCitation(c, window.currentFormat)
    }));
}

// --- PDF Export ---
btnExportPdf.addEventListener('click', () => {
    // Hide buttons visually for PDF
    const actions = document.querySelectorAll('.cit-actions');
    actions.forEach(el => el.style.display = 'none');
    
    const elementToPrint = document.createElement('div');
    elementToPrint.innerHTML = `
        <div style="padding: 20px; font-family: sans-serif;">
            <h1 style="color: #00E5FF; text-align: center;">Space Literature Research Brief</h1>
            <p style="text-align: center; color: #555;">Generated via Antigravity Simulator</p>
            <hr>
            ${citationsContainer.innerHTML}
        </div>
    `;
    
    html2pdf().from(elementToPrint).set({
        margin: 10,
        filename: 'space_research_bibliography.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    }).save().then(() => {
        // Restore buttons
        actions.forEach(el => el.style.display = 'flex');
        showNotification("PDF Exported Successfully", "success");
    });
});

function showNotification(message, type) {
    notificationArea.textContent = message;
    notificationArea.className = `notification-area ${type}`;
    if (type !== 'info') {
        setTimeout(() => {
            notificationArea.textContent = '';
            notificationArea.className = 'notification-area';
        }, 4000);
    }
}

btnCopyAll.addEventListener('click', () => {
    if (window.currentCitationsRaw.length === 0) return;
    const textToCopy = window.currentCitationsRaw.map(c => formatCitation(c, window.currentFormat)).join('\n\n');
    navigator.clipboard.writeText(textToCopy).then(() => {
        showNotification("Citations copied to clipboard!", "success");
    });
});
