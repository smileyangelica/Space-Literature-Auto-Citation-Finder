// translations.js

export const translations = {
    english: {
        appTitle: "Space Literature Citation Finder",
        appSubtitle: "Paste a paragraph and get verified citations instantly.",
        textareaPlaceholder: "Enter your space research, microgravity, or aerospace engineering paragraph here...",
        btnGenerate: "Generate Citations",
        btnClear: "Clear",
        btnCopyAll: "Copy All",
        btnExportPdf: "Export PDF Bibliography",
        btnAddToProject: "Add to Project",
        selectProject: "Select Project...",
        btnNewProject: "+ New",
        resultsHeading: "Citations",
        annotatedHeading: "Annotated Paragraph",
        footerText1: "Built with Antigravity 🚀",
        footerText2: "Space-Accessible Design • WCAG 2.2 AA",
        filterBiotech: "Space-Biotech Only",
        formatLabel: "Format:",
        signIn: "Sign In with Google",
        viewSource: "View Source ⭧",
        mockData: [
            {
                id: 'cit-1',
                authors: "Smith, J., Roberts, L.",
                year: 2023,
                title: "Effects of prolonged microgravity on bone density in LEO operations.",
                journal: "Journal of Space Health",
                volume: "15(4)",
                pages: "45-60",
                summary: "This study details the rapid loss of bone mass in astronauts and evaluates countermeasures used aboard the ISS.",
                bullets: [
                    { category: "Microgravity", explanation: "Analyzes physiological changes in zero-G." },
                    { category: "Countermeasures", explanation: "Proposes new exercise protocols." }
                ],
                url: "https://example.com/paper1",
                isBiotech: true
            },
            {
                id: 'cit-2',
                authors: "Chen, X., Williams, D.",
                year: 2024,
                title: "Next-generation propulsion systems for deep space transit.",
                journal: "Aerospace Engineering Review",
                volume: "8(2)",
                pages: "112-130",
                summary: "Reviews the current state of ion thruster technology and its application for Mars-bound missions.",
                bullets: [
                    { category: "Propulsion", explanation: "Examines specific impulse gains." },
                    { category: "Deep Space", explanation: "Applicability for extended missions beyond LEO." }
                ],
                url: "https://example.com/paper2",
                isBiotech: false
            }
        ]
    },
    cantonese: {
        appTitle: "太空文獻引文尋找器",
        appSubtitle: "貼上段落，立即獲得已驗證的引文。",
        textareaPlaceholder: "在此輸入您的太空研究、微重力或航太工程段落...",
        btnGenerate: "生成引文",
        btnClear: "清除",
        btnCopyAll: "全部複製",
        btnExportPdf: "匯出 PDF 參考書目",
        btnAddToProject: "新增至專案",
        selectProject: "選擇專案...",
        btnNewProject: "+ 新增",
        resultsHeading: "引文",
        annotatedHeading: "帶註解的段落",
        footerText1: "Antigravity 製作 🚀",
        footerText2: "太空無障礙設計 • WCAG 2.2 AA",
        filterBiotech: "僅太空生物科技",
        formatLabel: "格式:",
        signIn: "使用 Google 登入",
        viewSource: "查看來源 ⭧",
        mockData: [
            {
                id: 'cit-1',
                authors: "Smith, J., Roberts, L.",
                year: 2023,
                title: "長期微重力對低地軌道操作中骨密度的影響。",
                journal: "太空健康期刊",
                volume: "15(4)",
                pages: "45-60",
                summary: "本研究詳細說明了太空人骨質流失的速度，並評估了國際太空站使用的對策。",
                bullets: [
                    { category: "微重力", explanation: "分析零重力下的生理變化。" },
                    { category: "對策", explanation: "提出新的運動方案。" }
                ],
                url: "https://example.com/paper1",
                isBiotech: true
            },
            {
                id: 'cit-2',
                authors: "Chen, X., Williams, D.",
                year: 2024,
                title: "用於深空運輸的下一代推進系統。",
                journal: "航太工程評論",
                volume: "8(2)",
                pages: "112-130",
                summary: "回顧了目前的離子推力器技術及其在火星任務中的應用。",
                bullets: [
                    { category: "推進", explanation: "檢查比沖增益。" },
                    { category: "深空", explanation: "超越低地軌道的長期任務的適用性。" }
                ],
                url: "https://example.com/paper2",
                isBiotech: false
            }
        ]
    },
    french: {
        appTitle: "Chercheur de Citations de Littérature Spatiale",
        appSubtitle: "Collez un paragraphe et obtenez des citations vérifiées instantanément.",
        textareaPlaceholder: "Entrez votre paragraphe sur la recherche spatiale, la microgravité ou l'ingénierie aérospatiale ici...",
        btnGenerate: "Générer des Citations",
        btnClear: "Effacer",
        btnCopyAll: "Tout Copier",
        btnExportPdf: "Exporter la Bibliographie PDF",
        btnAddToProject: "Ajouter au Projet",
        selectProject: "Sélectionner un Projet...",
        btnNewProject: "+ Nouveau",
        resultsHeading: "Citations",
        annotatedHeading: "Paragraphe Annoté",
        footerText1: "Construit avec Antigravity 🚀",
        footerText2: "Design Accessible Spatial • WCAG 2.2 AA",
        filterBiotech: "Seulement Biotechnologie Spatiale",
        formatLabel: "Format:",
        signIn: "Se connecter avec Google",
        viewSource: "Voir la source ⭧",
        mockData: [
            {
                id: 'cit-1',
                authors: "Smith, J., Roberts, L.",
                year: 2023,
                title: "Effets de la microgravité prolongée sur la densité osseuse lors des opérations LEO.",
                journal: "Journal de la Santé Spatiale",
                volume: "15(4)",
                pages: "45-60",
                summary: "Cette étude détaille la perte rapide de masse osseuse chez les astronautes et évalue les contre-mesures utilisées à bord de l'ISS.",
                bullets: [
                    { category: "Microgravité", explanation: "Analyse les changements physiologiques en apesanteur." },
                    { category: "Contre-mesures", explanation: "Propose de nouveaux protocoles d'exercice." }
                ],
                url: "https://example.com/paper1",
                isBiotech: true
            },
            {
                id: 'cit-2',
                authors: "Chen, X., Williams, D.",
                year: 2024,
                title: "Systèmes de propulsion de la prochaine génération pour le transit dans l'espace lointain.",
                journal: "Revue d'Ingénierie Aérospatiale",
                volume: "8(2)",
                pages: "112-130",
                summary: "Passe en revue l'état actuel de la technologie des propulseurs ioniques et son application pour les missions vers Mars.",
                bullets: [
                    { category: "Propulsion", explanation: "Examine les gains d'impulsion spécifique." },
                    { category: "Espace Lointain", explanation: "Applicabilité pour des missions prolongées au-delà de l'orbite terrestre basse." }
                ],
                url: "https://example.com/paper2",
                isBiotech: false
            }
        ]
    },
    german: {
        appTitle: "Sucher für Weltraumliteratur-Zitate",
        appSubtitle: "Fügen Sie einen Absatz ein und erhalten Sie sofort verifizierte Zitate.",
        textareaPlaceholder: "Geben Sie hier Ihren Absatz zu Weltraumforschung, Mikrogravitation oder Luft- und Raumfahrttechnik ein...",
        btnGenerate: "Zitate generieren",
        btnClear: "Löschen",
        btnCopyAll: "Alle kopieren",
        btnExportPdf: "PDF-Bibliographie exportieren",
        btnAddToProject: "Zum Projekt hinzufügen",
        selectProject: "Projekt auswählen...",
        btnNewProject: "+ Neu",
        resultsHeading: "Zitate",
        annotatedHeading: "Kommentierter Absatz",
        footerText1: "Erstellt mit Antigravity 🚀",
        footerText2: "Weltraum-Zugängliches Design • WCAG 2.2 AA",
        filterBiotech: "Nur Weltraum-Biotech",
        formatLabel: "Format:",
        signIn: "Mit Google anmelden",
        viewSource: "Quelle anzeigen ⭧",
        mockData: [
            {
                id: 'cit-1',
                authors: "Smith, J., Roberts, L.",
                year: 2023,
                title: "Auswirkungen langanhaltender Mikrogravitation auf die Knochendichte bei LEO-Operationen.",
                journal: "Zeitschrift für Weltraumgesundheit",
                volume: "15(4)",
                pages: "45-60",
                summary: "Diese Studie beschreibt den schnellen Knochenschwund bei Astronauten und bewertet Gegenmaßnahmen an Bord der ISS.",
                bullets: [
                    { category: "Mikrogravitation", explanation: "Analysiert physiologische Veränderungen in der Schwerelosigkeit." },
                    { category: "Gegenmaßnahmen", explanation: "Schlägt neue Übungsprotokolle vor." }
                ],
                url: "https://example.com/paper1",
                isBiotech: true
            },
            {
                id: 'cit-2',
                authors: "Chen, X., Williams, D.",
                year: 2024,
                title: "Antriebssysteme der nächsten Generation für den Transit im tiefen Weltraum.",
                journal: "Revue für Luft- und Raumfahrttechnik",
                volume: "8(2)",
                pages: "112-130",
                summary: "Überprüft den aktuellen Stand der Ionenantriebstechnologie und ihre Anwendung für Marsmissionen.",
                bullets: [
                    { category: "Antrieb", explanation: "Untersucht spezifische Impulsgewinne." },
                    { category: "Tiefer Weltraum", explanation: "Anwendbarkeit für längere Missionen jenseits des LEO." }
                ],
                url: "https://example.com/paper2",
                isBiotech: false
            }
        ]
    },
    greek: {
        appTitle: "Εύρεση Παραπομπών Διαστημικής Λογοτεχνίας",
        appSubtitle: "Επικολλήστε μια παράγραφο και λάβετε επαληθευμένες παραπομπές άμεσα.",
        textareaPlaceholder: "Εισαγάγετε την παράγραφό σας για τη διαστημική έρευνα, τη μικροβαρύτητα ή την αεροδιαστημική μηχανική εδώ...",
        btnGenerate: "Δημιουργία Παραπομπών",
        btnClear: "Εκκαθάριση",
        btnCopyAll: "Αντιγραφή Όλων",
        btnExportPdf: "Εξαγωγή Βιβλιογραφίας PDF",
        btnAddToProject: "Προσθήκη στο έργο",
        selectProject: "Επιλογή Έργου...",
        btnNewProject: "+ Νέο",
        resultsHeading: "Παραπομπές",
        annotatedHeading: "Σχολιασμένη Παράγραφος",
        footerText1: "Κατασκευάστηκε με Antigravity 🚀",
        footerText2: "Προσβάσιμος Σχεδιασμός για το Διάστημα • WCAG 2.2 AA",
        filterBiotech: "Μόνο Διαστημική Βιοτεχνολογία",
        formatLabel: "Μορφή:",
        signIn: "Σύνδεση με Google",
        viewSource: "Προβολή Πηγής ⭧",
        mockData: [
            {
                id: 'cit-1',
                authors: "Smith, J., Roberts, L.",
                year: 2023,
                title: "Επιδράσεις της παρατεταμένης μικροβαρύτητας στην οστική πυκνότητα σε λειτουργίες LEO.",
                journal: "Περιοδικό Διαστημικής Υγείας",
                volume: "15(4)",
                pages: "45-60",
                summary: "Αυτή η μελέτη περιγράφει λεπτομερώς την ταχεία απώλεια οστικής μάζας στους αστροναύτες και αξιολογεί τα αντίμετρα που χρησιμοποιούνται στο ISS.",
                bullets: [
                    { category: "Μικροβαρύτητα", explanation: "Αναλύει τις φυσιολογικές αλλαγές σε μηδενική βαρύτητα." },
                    { category: "Αντίμετρα", explanation: "Προτείνει νέα πρωτόκολλα άσκησης." }
                ],
                url: "https://example.com/paper1",
                isBiotech: true
            },
            {
                id: 'cit-2',
                authors: "Chen, X., Williams, D.",
                year: 2024,
                title: "Συστήματα πρόωσης επόμενης γενιάς για διέλευση σε βαθύ διάστημα.",
                journal: "Ανασκόπηση Αεροδιαστημικής Μηχανικής",
                volume: "8(2)",
                pages: "112-130",
                summary: "Ανασκοπεί την τρέχουσα κατάσταση της τεχνολογίας προωθητήρων ιόντων και την εφαρμογή της σε αποστολές στον Άρη.",
                bullets: [
                    { category: "Πρόωση", explanation: "Εξετάζει τα κέρδη ειδικής ώθησης." },
                    { category: "Βαθύ Διάστημα", explanation: "Εφαρμοσιμότητα για παρατεταμένες αποστολές πέρα από το LEO." }
                ],
                url: "https://example.com/paper2",
                isBiotech: false
            }
        ]
    },
    gujarati: {
         appTitle: "સ્પેસ લિટરેચર સાઈટેશન ફાઈન્ડર",
        appSubtitle: "ફકરો પેસ્ટ કરો અને તરત જ ચકાસાયેલ અવતરણો મેળવો.",
        textareaPlaceholder: "તમારો અવકાશ સંશોધન, માઇક્રોગ્રેવિટી અથવા એરોસ્પેસ એન્જીનિયરીંગ ફકરો અહીં દાખલ કરો...",
        btnGenerate: "અવતરણો બનાવો",
        btnClear: "સાફ કરો",
        btnCopyAll: "બધાની કૉપિ કરો",
        btnExportPdf: "PDF ગ્રંથસૂચિ નિકાસ કરો",
        btnAddToProject: "પ્રોજેક્ટમાં ઉમેરો",
        selectProject: "પ્રોજેક્ટ પસંદ કરો...",
        btnNewProject: "+ નવો",
        resultsHeading: "અવતરણો",
        annotatedHeading: "એનોટેટેડ ફકરો",
        footerText1: "Antigravity સાથે બનાવેલ 🚀",
        footerText2: "અવકાશ-સુલભ ડિઝાઇન • WCAG 2.2 AA",
        filterBiotech: "માત્ર સ્પેસ બાયોટેક",
        formatLabel: "ફોર્મેટ:",
        signIn: "Google સાથે સાઇન ઇન કરો",
        viewSource: "સ્ત્રોત જુઓ ⭧",
        mockData: [
            {
                id: 'cit-1',
                authors: "Smith, J., Roberts, L.",
                year: 2023,
                title: "LEO કામગીરીમાં અસ્થિ ઘનતા પર લાંબા સમય સુધી માઇક્રોગ્રેવિટીની અસરો.",
                journal: "જર્નલ ઓફ સ્પેસ હેલ્થ",
                volume: "15(4)",
                pages: "45-60",
                summary: "આ અધ્યયન અવકાશયાત્રીઓમાં હાડકાના સમૂહના ઝડપી નુકસાનની વિગતો આપે છે અને ડSS પર ઉપયોગમાં લેવાતા પ્રતિકારક પગલાંનું મૂલ્યાંકન કરે છે.",
                bullets: [
                    { category: "માઇક્રોગ્રેવિટી", explanation: "શૂન્ય-જીમાં શારીરિક ફેરફારોનું વિશ્લેષણ કરે છે." },
                    { category: "પ્રતિકારક પગલાં", explanation: "નવા વ્યાયામ પ્રોટોકોલની દરખાસ્ત કરે છે." }
                ],
                url: "https://example.com/paper1",
                isBiotech: true
            },
            {
                id: 'cit-2',
                authors: "Chen, X., Williams, D.",
                year: 2024,
                title: "ડીપ સ્પેસ ટ્રાન્ઝિટ માટે નેક્સ્ટ જનરેશન પ્રોપલ્શન સિસ્ટમ્સ.",
                journal: "એરોસ્પેસ એન્જિનિયરિંગ સમીક્ષા",
                volume: "8(2)",
                pages: "112-130",
                summary: "આયન થ્રસ્ટર તકનીકની વર્તમાન સ્થિતિ અને મંગળ માટેના મિશન માટે તેના ઉપયોગની સમીક્ષા કરે છે.",
                bullets: [
                    { category: "પ્રોપલ્શન", explanation: "ચોક્કસ આવેગના લાભોની તપાસ કરે છે." },
                    { category: "ડીપ સ્પેસ", explanation: "LEO ની બહાર વિસ્તૃત મિશન માટે લાગુ પડવાની ક્ષમતા." }
                ],
                url: "https://example.com/paper2",
                isBiotech: false
            }
        ]
    },
    hakka: {
        appTitle: "太空文獻引文尋找器",
        appSubtitle: "貼上段落，立即獲得已驗證的引文。",
        textareaPlaceholder: "在此輸入您的太空研究、微重力或航太工程段落...",
        btnGenerate: "生成引文",
        btnClear: "清除",
        btnCopyAll: "全部複製",
        btnExportPdf: "匯出 PDF 參考書目",
        btnAddToProject: "新增至專案",
        selectProject: "選擇專案...",
        btnNewProject: "+ 新增",
        resultsHeading: "引文",
        annotatedHeading: "帶註解的段落",
        footerText1: "由 Antigravity 構建 🚀",
        footerText2: "太空無障礙設計 • WCAG 2.2 AA",
        filterBiotech: "僅太空生物科技",
        formatLabel: "格式:",
        signIn: "使用 Google 登入",
        viewSource: "查看來源 ⭧",
        mockData: [
            {
                id: 'cit-1',
                authors: "Smith, J., Roberts, L.",
                year: 2023,
                title: "長期微重力對低地軌道操作中骨密度的影響。",
                journal: "太空健康期刊",
                volume: "15(4)",
                pages: "45-60",
                summary: "本研究詳細說明了太空人骨質流失的速度，並評估了國際太空站使用的對策。",
                bullets: [
                    { category: "微重力", explanation: "分析零重力下的生理變化。" },
                    { category: "對策", explanation: "提出新的運動方案。" }
                ],
                url: "https://example.com/paper1",
                isBiotech: true
            },
            {
                id: 'cit-2',
                authors: "Chen, X., Williams, D.",
                year: 2024,
                title: "用於深空運輸的下一代推進系統。",
                journal: "航太工程評論",
                volume: "8(2)",
                pages: "112-130",
                summary: "回顧了目前的離子推力器技術及其在火星任務中的應用。",
                bullets: [
                    { category: "推進", explanation: "檢查比沖增益。" },
                    { category: "深空", explanation: "超越低地軌道的長期任務的適用性。" }
                ],
                url: "https://example.com/paper2",
                isBiotech: false
            }
        ]
    },
    hebrew: {
        appTitle: "מאתר ציטוטים לספרות חלל",
        appSubtitle: "הדבק פסקה וקבל ציטוטים מאומתים באופן מיידי.",
        textareaPlaceholder: "הזן כאן את פסקת חקר החלל, המיקרו-כבידה או הנדסת האווירונאוטיקה שלך...",
        btnGenerate: "צור ציטוטים",
        btnClear: "נקה",
        btnCopyAll: "העתק הכל",
        btnExportPdf: "ייצא ביבליוגרפיה ב-PDF",
        btnAddToProject: "הוסף לפרויקט",
        selectProject: "בחר פרויקט...",
        btnNewProject: "+ חדש",
        resultsHeading: "ציטוטים",
        annotatedHeading: "פסקה מוערת",
        footerText1: "נבנה עם Antigravity 🚀",
        footerText2: "עיצוב נגיש לחלל • WCAG 2.2 AA",
        filterBiotech: "רק ביוטכנולוגיה חללית",
        formatLabel: "פורמט:",
        signIn: "היכנס עם גוגל",
        viewSource: "צפה במקור ⭧",
        mockData: [
            {
                id: 'cit-1',
                authors: "Smith, J., Roberts, L.",
                year: 2023,
                title: "ההשפעות של מיקרו-כבידה ממושכת על צפיפות העצם בפעולות LEO.",
                journal: "כתב עת לבריאות החלל",
                volume: "15(4)",
                pages: "45-60",
                summary: "מחקר זה מפרט את אובדן מסת העצם המהיר אצל אסטרונאוטים ומעריך צעדי נגד המשמשים ב-ISS.",
                bullets: [
                    { category: "מיקרו-כבידה", explanation: "מנתח שינויים פיזיולוגיים באפס כבידה." },
                    { category: "צעדי נגד", explanation: "מציע פרוטוקולי התעמלות חדשים." }
                ],
                url: "https://example.com/paper1",
                isBiotech: true
            },
            {
                id: 'cit-2',
                authors: "Chen, X., Williams, D.",
                year: 2024,
                title: "מערכות הנעה של הדור הבא למעבר בחלל העמוק.",
                journal: "סקירת הנדסת אווירונאוטיקה",
                volume: "8(2)",
                pages: "112-130",
                summary: "סוקר את המצב הנוכחי של טכנולוגיית מנועי היונים ויישומה למשימות למאדים.",
                bullets: [
                    { category: "הנעה", explanation: "בוחן רווחי דחף ספציפיים." },
                    { category: "חלל עמוק", explanation: "ישימות למשימות מורחבות מעבר ל-LEO." }
                ],
                url: "https://example.com/paper2",
                isBiotech: false
            }
        ]
    },
    hindi: {
        appTitle: "अंतरिक्ष साहित्य उद्धरण खोजकर्ता",
        appSubtitle: "एक पैराग्राफ पेस्ट करें और तुरंत सत्यापित उद्धरण प्राप्त करें।",
        textareaPlaceholder: "अपना अंतरिक्ष अनुसंधान, माइक्रोग्रैविटी, या एयरोस्पेस इंजीनियरिंग पैराग्राफ यहाँ दर्ज करें...",
        btnGenerate: "उद्धरण उत्पन्न करें",
        btnClear: "साफ़ करें",
        btnCopyAll: "सभी कॉपी करें",
        btnExportPdf: "पीडीएफ ग्रंथ सूची निर्यात करें",
        btnAddToProject: "प्रोजेक्ट में जोड़ें",
        selectProject: "प्रोजेक्ट चुनें...",
        btnNewProject: "+ नया",
        resultsHeading: "उद्धरण",
        annotatedHeading: "टिप्पणीकृत पैराग्राफ",
        footerText1: "Antigravity के साथ निर्मित 🚀",
        footerText2: "अंतरिक्ष-सुलभ डिज़ाइन • WCAG 2.2 AA",
        filterBiotech: "केवल अंतरिक्ष बायोटेक",
        formatLabel: "प्रारूप:",
        signIn: "Google से साइन इन करें",
        viewSource: "स्रोत देखें ⭧",
        mockData: [
            {
                id: 'cit-1',
                authors: "Smith, J., Roberts, L.",
                year: 2023,
                title: "LEO संचालन में अस्थि घनत्व पर लंबे समय तक माइक्रोग्रैविटी के प्रभाव।",
                journal: "अंतरिक्ष स्वास्थ्य जर्नल",
                volume: "15(4)",
                pages: "45-60",
                summary: "यह अध्ययन अंतरिक्ष यात्रियों में हड्डियों के तेजी से नुकसान का विवरण देता है और ISS पर इस्तेमाल किए गए उपायों का मूल्यांकन करता है।",
                bullets: [
                    { category: "माइक्रोग्रैविटी", explanation: "शून्य-G में शारीरिक परिवर्तनों का विश्लेषण करता है।" },
                    { category: "प्रतिबंध", explanation: "नए व्यायाम प्रोटोकॉल का प्रस्ताव करता है।" }
                ],
                url: "https://example.com/paper1",
                isBiotech: true
            },
            {
                id: 'cit-2',
                authors: "Chen, X., Williams, D.",
                year: 2024,
                title: "गहरे अंतरिक्ष पारगमन के लिए अगली पीढ़ी की प्रणोदन प्रणाली।",
                journal: "एयरोस्पेस इंजीनियरिंग समीक्षा",
                volume: "8(2)",
                pages: "112-130",
                summary: "आयन थ्रस्टर तकनीक की वर्तमान स्थिति और मंगल ग्रह के मिशनों के लिए इसके आवेदन की समीक्षा करता है।",
                bullets: [
                    { category: "प्रणोदन", explanation: "विशिष्ट आवेग लाभ की जांच करता है।" },
                    { category: "गहरा अंतरिक्ष", explanation: "LEO से आगे विस्तारित मिशनों के लिए प्रयोज्यता।" }
                ],
                url: "https://example.com/paper2",
                isBiotech: false
            }
        ]
    },
    hungarian: {
        appTitle: "Űrirodalom Idézet Kereső",
        appSubtitle: "Illesszen be egy bekezdést, és azonnal kapjon ellenőrzött idézeteket.",
        textareaPlaceholder: "Írja be ide az űrkutatással, mikrogravitációval vagy űrkutatással kapcsolatos bekezdését...",
        btnGenerate: "Idézetek Generálása",
        btnClear: "Törlés",
        btnCopyAll: "Mind Másolása",
        btnExportPdf: "PDF Bibliográfia Exportálása",
        btnAddToProject: "Hozzáadás a Projekthez",
        selectProject: "Projekt Kiválasztása...",
        btnNewProject: "+ Új",
        resultsHeading: "Idézetek",
        annotatedHeading: "Jegyzetekkel Ellátott Bekezdés",
        footerText1: "Antigravity rendszerrel építve 🚀",
        footerText2: "Űr-Hozzáféthető Kialakítás • WCAG 2.2 AA",
        filterBiotech: "Csak Űr-Biotech",
        formatLabel: "Formátum:",
        signIn: "Bejelentkezés Google-fiókkal",
        viewSource: "Forrás megtekintése ⭧",
        mockData: [
            {
                id: 'cit-1',
                authors: "Smith, J., Roberts, L.",
                year: 2023,
                title: "Az elhúzódó mikrogravitáció hatásai a csontsűrűségre LEO műveletek során.",
                journal: "Űregészségügyi Folyóirat",
                volume: "15(4)",
                pages: "45-60",
                summary: "Ez a tanulmány részletezi az űrhajósok gyors csonttömeg-vesztését, és értékeli az ISS fedélzetén alkalmazott ellenintézkedéseket.",
                bullets: [
                    { category: "Mikrogravitáció", explanation: "A zéró gravitációs fiziológiai változásokat elemzi." },
                    { category: "Ellenintézkedések", explanation: "Új gyakorlatkönyveket javasol." }
                ],
                url: "https://example.com/paper1",
                isBiotech: true
            },
            {
                id: 'cit-2',
                authors: "Chen, X., Williams, D.",
                year: 2024,
                title: "Következő generációs meghajtórendszerek a mélyűri tranzithoz.",
                journal: "Repülőgép-mérnöki Szemle",
                volume: "8(2)",
                pages: "112-130",
                summary: "Áttekinti az ionhajtómű technológia jelenlegi állapotát és alkalmazását a Mars-missziókhoz.",
                bullets: [
                    { category: "Meghajtás", explanation: "Vizsgálja a specifikus impulzus nyereséget." },
                    { category: "Mélyűr", explanation: "Alkalmazhatóság a LEO-n túli kiterjesztett missziókhoz." }
                ],
                url: "https://example.com/paper2",
                isBiotech: false
            }
        ]
    },
    italian: {
        appTitle: "Ricerca Citazioni Letteratura Spaziale",
        appSubtitle: "Incolla un paragrafo e ottieni citazioni verificate all'istante.",
        textareaPlaceholder: "Inserisci qui il tuo paragrafo su ricerca spaziale, microgravità o ingegneria aerospaziale...",
        btnGenerate: "Genera Citazioni",
        btnClear: "Cancella",
        btnCopyAll: "Copia Tutto",
        btnExportPdf: "Esporta Bibliografia PDF",
        btnAddToProject: "Aggiungi al Progetto",
        selectProject: "Seleziona Progetto...",
        btnNewProject: "+ Nuovo",
        resultsHeading: "Citazioni",
        annotatedHeading: "Paragrafo Annotato",
        footerText1: "Realizzato con Antigravity 🚀",
        footerText2: "Design Accessibile per lo Spazio • WCAG 2.2 AA",
        filterBiotech: "Solo Biotecnologia Spaziale",
        formatLabel: "Formato:",
        signIn: "Accedi con Google",
        viewSource: "Visualizza fonte ⭧",
        mockData: [
            {
                id: 'cit-1',
                authors: "Smith, J., Roberts, L.",
                year: 2023,
                title: "Effetti della microgravità prolungata sulla densità ossea nelle operazioni LEO.",
                journal: "Giornale di Salute Spaziale",
                volume: "15(4)",
                pages: "45-60",
                summary: "Questo studio illustra in dettaglio la rapida perdita di massa ossea negli astronauti e valuta le contromisure utilizzate a bordo della ISS.",
                bullets: [
                    { category: "Microgravità", explanation: "Analizza i cambiamenti fisiologici a gravità zero." },
                    { category: "Contromisure", explanation: "Propone nuovi protocolli di esercizio." }
                ],
                url: "https://example.com/paper1",
                isBiotech: true
            },
            {
                id: 'cit-2',
                authors: "Chen, X., Williams, D.",
                year: 2024,
                title: "Sistemi di propulsione di nuova generazione per il transito nello spazio profondo.",
                journal: "Revisione di Ingegneria Aerospaziale",
                volume: "8(2)",
                pages: "112-130",
                summary: "Esamina lo stato attuale della tecnologia dei propulsori ionici e la sua applicazione per le missioni su Marte.",
                bullets: [
                    { category: "Propulsione", explanation: "Esamina i guadagni di impulso specifico." },
                    { category: "Spazio Profondo", explanation: "Applicabilità per missioni estese oltre la LEO." }
                ],
                url: "https://example.com/paper2",
                isBiotech: false
            }
        ]
    },
    japanese: {
        appTitle: "宇宙文献引用検索ツール",
        appSubtitle: "段落を貼り付けると、確認済みの引用がすぐに得られます。",
        textareaPlaceholder: "ここに宇宙研究、微小重力、または航空宇宙工学の段落を入力してください...",
        btnGenerate: "引用を生成",
        btnClear: "クリア",
        btnCopyAll: "すべてコピー",
        btnExportPdf: "PDF参考文献をエクスポート",
        btnAddToProject: "プロジェクトに追加",
        selectProject: "プロジェクトを選択...",
        btnNewProject: "+ 新規",
        resultsHeading: "引用",
        annotatedHeading: "注釈付き段落",
        footerText1: "Antigravity で構築 🚀",
        footerText2: "宇宙アクセシブルデザイン • WCAG 2.2 AA",
        filterBiotech: "宇宙バイオテクのみ",
        formatLabel: "フォーマット:",
        signIn: "Google でログイン",
        viewSource: "ソースを表示 ⭧",
        mockData: [
           {
                id: 'cit-1',
                authors: "Smith, J., Roberts, L.",
                year: 2023,
                title: "LEO作戦における長期間の微小重力が骨密度に及ぼす影響。",
                journal: "宇宙健康ジャーナル",
                volume: "15(4)",
                pages: "45-60",
                summary: "この研究では、宇宙飛行士の急速な骨量減少を詳述し、ISSに搭載された対策を評価しています。",
                bullets: [
                    { category: "微小重力", explanation: "無重力下での生理学的変化を分析します。" },
                    { category: "対策", explanation: "新しい運動プロトコルを提案します。" }
                ],
                url: "https://example.com/paper1",
                isBiotech: true
            },
            {
                id: 'cit-2',
                authors: "Chen, X., Williams, D.",
                year: 2024,
                title: "深宇宙トランジットのための次世代推進システム。",
                journal: "航空宇宙工学レビュー",
                volume: "8(2)",
                pages: "112-130",
                summary: "イオン推進スラスター技術の現状と火星ミッションへの応用についてレビューします。",
                bullets: [
                    { category: "推進", explanation: "比推力の向上を調べます。" },
                    { category: "深宇宙", explanation: "地球低軌道を超える長期ミッションへの適用性。" }
                ],
                url: "https://example.com/paper2",
                isBiotech: false
            }
        ]
    },
    malagasy: {
        appTitle: "Mpitady Citation amin'ny Kanto An-kabakabaka",
        appSubtitle: "Asio fehintsoratra ary mahazoa citations voamarina avy hatrany.",
        textareaPlaceholder: "Ampidiro eto ny fehintsoratra momba ny fikarohana an-kabakabaka, microgravity, na ny injeniera aerospace...",
        btnGenerate: "Jeneraly Citations",
        btnClear: "Fafao",
        btnCopyAll: "Adikao Daholo",
        btnExportPdf: "Eksporta Bibliografia PDF",
        btnAddToProject: "Ampio amin'ny Tetikasa",
        selectProject: "Hifantina Tetikasa...",
        btnNewProject: "+ Vaovao",
        resultsHeading: "Citations",
        annotatedHeading: "Fehintsoratra Nasiana Hevitra",
        footerText1: "Namboarina tamin'ny Antigravity 🚀",
        footerText2: "Azon'ny Espace Ampiasaina • WCAG 2.2 AA",
        filterBiotech: "Biotech An-kabakabaka Ihany",
        formatLabel: "Filamatra:",
        signIn: "Midira amin'ny Google",
        viewSource: "Jereo ny loharano ⭧",
        mockData: [
            {
                id: 'cit-1',
                authors: "Smith, J., Roberts, L.",
                year: 2023,
                title: "Ny soa ateraky ny microgravity maharitra eo amin'ny hakitroky ny taolana amin'ny fandidiana LEO.",
                journal: "Disika momba ny Fahasalamana An-kabakabaka",
                volume: "15(4)",
                pages: "45-60",
                summary: "Ity fanadihadiana ity dia manome fa tsy fahampian'ny taolana haingana eo amin'ny mpanamory sambon-danitra ary manombana ny vahaolana nampiasaina tao amin'ny ISS.",
                bullets: [
                    { category: "Microgravity", explanation: "Manadihady ny fiovan'ny vatan'olombelona amin'ny aotra-G." },
                    { category: "Vahaolana", explanation: "Manolotra torolàlana fanatanjahan-tena vaovao." }
                ],
                url: "https://example.com/paper1",
                isBiotech: true
            },
            {
                id: 'cit-2',
                authors: "Chen, X., Williams, D.",
                year: 2024,
                title: "Rafaelin'ny fandrosoana ho avy amin'ny fitaterana an-kabakabaka lalina.",
                journal: "Fitsikerana ny Injeniera Aerospace",
                volume: "8(2)",
                pages: "112-130",
                summary: "Manadihady ny zava-misy ankehitriny momba ny teknolojian'ny ion thruster sy ny fampiasana izany amin'ny iraka mankany Mars.",
                bullets: [
                    { category: "Fandrosoana", explanation: "Nandinika ny tombontsoa avy amin'ny vahana manokana." },
                    { category: "Habakabaka Lalina", explanation: "Fampiasana ho an'ny iraka maharitra any ivelan'ny LEO." }
                ],
                url: "https://example.com/paper2",
                isBiotech: false
            }
        ]
    },
    mandarin: {
        appTitle: "太空文献引文查找器",
        appSubtitle: "粘贴段落，立即获得已验证的引文。",
        textareaPlaceholder: "在此输入您的太空研究、微重力或航天工程段落...",
        btnGenerate: "生成引文",
        btnClear: "清除",
        btnCopyAll: "全部复制",
        btnExportPdf: "导出 PDF 参考文献",
        btnAddToProject: "添加到项目",
        selectProject: "选择项目...",
        btnNewProject: "+ 新建",
        resultsHeading: "引文",
        annotatedHeading: "带注释的段落",
        footerText1: "由 Antigravity 构建 🚀",
        footerText2: "太空无障碍设计 • WCAG 2.2 AA",
        filterBiotech: "仅太空生物技术",
        formatLabel: "格式:",
        signIn: "使用 Google 登录",
        viewSource: "查看来源 ⭧",
        mockData: [
            {
                id: 'cit-1',
                authors: "Smith, J., Roberts, L.",
                year: 2023,
                title: "长期微重力对低地轨道操作中骨密度的影响。",
                journal: "太空健康杂志",
                volume: "15(4)",
                pages: "45-60",
                summary: "这项研究详细说明了宇航员骨量快速流失的情况，并评估了国际空间站上使用的对策。",
                bullets: [
                    { category: "微重力", explanation: "分析零重力下的生理变化。" },
                    { category: "对策", explanation: "提出新的运动方案。" }
                ],
                url: "https://example.com/paper1",
                isBiotech: true
            },
            {
                id: 'cit-2',
                authors: "Chen, X., Williams, D.",
                year: 2024,
                title: "用于深空运输的下一代推进系统。",
                journal: "航天工程评论",
                volume: "8(2)",
                pages: "112-130",
                summary: "回顾了目前离子推进器技术的现状及其在火星任务中的应用。",
                bullets: [
                    { category: "推进", explanation: "检查比冲增益。" },
                    { category: "深空", explanation: "适用于超越低地轨道的长期任务。" }
                ],
                url: "https://example.com/paper2",
                isBiotech: false
            }
        ]
    },
    marathi: {
        appTitle: "अंतराळ साहित्य संदर्भ शोधक",
        appSubtitle: "एक परिच्छेद पेस्ट करा आणि त्वरित सत्यापित संदर्भ मिळवा.",
        textareaPlaceholder: "येथे तुमचा अंतराळ संशोधन, सूक्ष्म-गुरुत्वाकर्षण किंवा एरोस्पेस अभियांत्रिकी परिच्छेद प्रविष्ट करा...",
        btnGenerate: "संदर्भ तयार करा",
        btnClear: "साफ करा",
        btnCopyAll: "सर्व कॉपी करा",
        btnExportPdf: "PDF संदर्भसूची निर्यात करा",
        btnAddToProject: "प्रकल्पात जोडा",
        selectProject: "प्रकल्प निवडा...",
        btnNewProject: "+ नवीन",
        resultsHeading: "संदर्भ",
        annotatedHeading: "टीपा असलेला परिच्छेद",
        footerText1: "Antigravity ने तयार केले 🚀",
        footerText2: "अंतराळ-सुलभ डिझाइन • WCAG 2.2 AA",
        filterBiotech: "केवळ अंतराळ बायोटेक",
        formatLabel: "स्वरूप:",
        signIn: "Google वर साइन इन करा",
        viewSource: "स्त्रोत पहा ⭧",
        mockData: [
            {
                id: 'cit-1',
                authors: "Smith, J., Roberts, L.",
                year: 2023,
                title: "LEO ऑपरेशन्समध्ये हाडांच्या घनतेवर दीर्घकाळ सूक्ष्म-गुरुत्वाकर्षणाचे परिणाम.",
                journal: "स्पेस हेल्थ जर्नल",
                volume: "15(4)",
                pages: "45-60",
                summary: "हा अभ्यास अंतराळवीरांमध्ये हाडांच्या वस्तुमानाच्या वेगाने होणाऱ्या नुकसानीचा तपशील देतो आणि ISS वर वापरल्या जाणार्‍या उपायांचे मूल्यमापन करतो.",
                bullets: [
                    { category: "सूक्ष्म-गुरुत्वाकर्षण", explanation: "शून्य-जी मधील शारीरिक बदलांचे विश्लेषण करते." },
                    { category: "उपाय", explanation: "नवीन व्यायाम प्रोटोकॉल प्रस्तावित करते." }
                ],
                url: "https://example.com/paper1",
                isBiotech: true
            },
            {
                id: 'cit-2',
                authors: "Chen, X., Williams, D.",
                year: 2024,
                title: "खोल अंतराळ संक्रमणासाठी नेक्स्ट-जनरेशन प्रोपल्शन प्रणाली.",
                journal: "एरोस्पेस अभियांत्रिकी पुनरावलोकन",
                volume: "8(2)",
                pages: "112-130",
                summary: "आयन थ्रस्टर तंत्रज्ञानाच्या सद्यस्थितीचे आणि मंगळ मोहिमांसाठी त्याच्या अनुप्रयोगाचे पुनरावलोकन करते.",
                bullets: [
                    { category: "प्रोपल्शन", explanation: "विशिष्ट प्रेरणा लाभांचे परीक्षण करते." },
                    { category: "खोल अंतराळ", explanation: "LEO च्या पलीकडे विस्तारित मोहिमांसाठी लागू होणे." }
                ],
                url: "https://example.com/paper2",
                isBiotech: false
            }
        ]
    },
    ndebele: {
        appTitle: "Umseshi Wezingcaphuno Zemibhalo Yasemkhathini",
        appSubtitle: "Namathisela isigaba bese uthola izingcaphuno eziqinisekisiwe masinyane.",
        textareaPlaceholder: "Faka lapha isigaba sakho socwaningo lwasemkhathini, i-microgravity, noma onjiniyela be-aerospace...",
        btnGenerate: "Qamba Izingcaphuno",
        btnClear: "Cisha",
        btnCopyAll: "Kopisha Konke",
        btnExportPdf: "Khipha I-Bibliography ye-PDF",
        btnAddToProject: "Ngeza Kuphrojekthi",
        selectProject: "Khetha Iphrojekthi...",
        btnNewProject: "+ Entsha",
        resultsHeading: "Izingcaphuno",
        annotatedHeading: "Isigaba Esichazwe",
        footerText1: "Iyakhiwe NGE-Antigravity 🚀",
        footerText2: "Umklamo Otholakala Emkhathini • WCAG 2.2 AA",
        filterBiotech: "I-Space-Biotech Kuphela",
        formatLabel: "Ukwakheka:",
        signIn: "Ngena Nge-Google",
        viewSource: "Buka umthombo ⭧",
        mockData: [
            {
                id: 'cit-1',
                authors: "Smith, J., Roberts, L.",
                year: 2023,
                title: "Imiphumela ye-microgravity ende ku-density yamathambo emsebenzini we-LEO.",
                journal: "I-Journal of Space Health",
                volume: "15(4)",
                pages: "45-60",
                summary: "Lolu cwaningo lukhombisa ngokugcwele ukulahleka okusheshayo kobunzima bamathambo kubaosomkhathi kanye nokuhlola izindlela ezingasetjenziswa e-ISS.",
                bullets: [
                    { category: "I-Microgravity", explanation: "Ihlaziya ushintsho emzimbeni ngo-zero-G." },
                    { category: "Izinyathelo Eziphikisayo", explanation: "Iphakamisa izinhlelo zokuzivivinya ezintsha." }
                ],
                url: "https://example.com/paper1",
                isBiotech: true
            },
            {
                id: 'cit-2',
                authors: "Chen, X., Williams, D.",
                year: 2024,
                title: "Izinhlelo zokuqhutshwa zesizukulwane esilandelayo zomkhathi ojulile.",
                journal: "Uhlolo lwe-Aerospace Engineering",
                volume: "8(2)",
                pages: "112-130",
                summary: "Ibukeza isimo samanje sobuchwepheshe bamandla we-ion nokusetshenziswa kwaso kuminjini aya ku-Mars.",
                bullets: [
                    { category: "Ukuqhuba", explanation: "Ihlola izinzuzo zengcindezi ethize." },
                    { category: "Umkhathi Ojulile", explanation: "Ukusetshenziswa kuzinhlelo ezinde ngaphezu kwe-LEO." }
                ],
                url: "https://example.com/paper2",
                isBiotech: false
            }
        ]
    },
    pidgin_english: {
        appTitle: "Space Book Finda",
        appSubtitle: "Put paragraph here make we find beta verification for you sharp-sharp.",
        textareaPlaceholder: "Put your matter about space, microgravity, or aerospace engineering here...",
        btnGenerate: "Find Citations",
        btnClear: "Comot am",
        btnCopyAll: "Copy Everytin",
        btnExportPdf: "Download AS PDF",
        btnAddToProject: "Put For Project",
        selectProject: "Choose Project...",
        btnNewProject: "+ Make New One",
        resultsHeading: "Wetin we Find",
        annotatedHeading: "Paragraph With Numbers",
        footerText1: "Antigravity build am 🚀",
        footerText2: "Space Easy Design • WCAG 2.2 AA",
        filterBiotech: "Only Space-Biotech",
        formatLabel: "Make am look like:",
        signIn: "Use Google Enter",
        viewSource: "See Source ⭧",
        mockData: [
            {
                id: 'cit-1',
                authors: "Smith, J., Roberts, L.",
                year: 2023,
                title: "Wetin long microgravity dey do to bone strongness inside LEO work.",
                journal: "Journal of Space Health",
                volume: "15(4)",
                pages: "45-60",
                summary: "Dis study talk how bone dey melt quick-quick for astronauts and check di exercise dem dey do inside ISS.",
                bullets: [
                    { category: "Microgravity", explanation: "E check wetin zero-G dey do body." },
                    { category: "Exercise plan", explanation: "E bring new way make we exercise." }
                ],
                url: "https://example.com/paper1",
                isBiotech: true
            },
            {
                id: 'cit-2',
                authors: "Chen, X., Williams, D.",
                year: 2024,
                title: "Next-gen engine wey dey push machine for deep space.",
                journal: "Aerospace Engineering Review",
                volume: "8(2)",
                pages: "112-130",
                summary: "E review how ion thruster dey function now and how dem go use am go Mars.",
                bullets: [
                    { category: "Propulsion", explanation: "E check di extra speed wey e get." },
                    { category: "Deep Space", explanation: "How we fit use am for long journey pass LEO." }
                ],
                url: "https://example.com/paper2",
                isBiotech: false
            }
        ]
    },
    portuguese: {
         appTitle: "Buscador de Citações de Literatura Espacial",
        appSubtitle: "Cole um parágrafo e obtenha citações verificadas instantaneamente.",
        textareaPlaceholder: "Insira seu parágrafo sobre pesquisa espacial, microgravidade ou engenharia aeroespacial aqui...",
        btnGenerate: "Gerar Citações",
        btnClear: "Limpar",
        btnCopyAll: "Copiar Tudo",
        btnExportPdf: "Exportar Bibliografia PDF",
        btnAddToProject: "Adicionar ao Projeto",
        selectProject: "Selecionar Projeto...",
        btnNewProject: "+ Novo",
        resultsHeading: "Citações",
        annotatedHeading: "Parágrafo Anotado",
        footerText1: "Construído com Antigravity 🚀",
        footerText2: "Design Acessível Espacial • WCAG 2.2 AA",
        filterBiotech: "Apenas Biotecnologia Espacial",
        formatLabel: "Formato:",
        signIn: "Entrar com o Google",
        viewSource: "Ver fonte ⭧",
        mockData: [
            {
                 id: 'cit-1',
                authors: "Smith, J., Roberts, L.",
                year: 2023,
                title: "Efeitos da microgravidade prolongada na densidade óssea em operações LEO.",
                journal: "Revista de Saúde Espacial",
                volume: "15(4)",
                pages: "45-60",
                summary: "Este estudo detalha a rápida perda de massa óssea em astronautas e avalia as contramedidas utilizadas a bordo da ISS.",
                bullets: [
                    { category: "Microgravidade", explanation: "Analisa mudanças fisiológicas na gravidade zero." },
                    { category: "Contramedidas", explanation: "Propõe novos protocolos de exercícios." }
                ],
                url: "https://example.com/paper1",
                isBiotech: true
            },
            {
                id: 'cit-2',
                authors: "Chen, X., Williams, D.",
                year: 2024,
                title: "Sistemas de propulsão de próxima geração para trânsito no espaço profundo.",
                journal: "Revisão de Engenharia Aeroespacial",
                volume: "8(2)",
                pages: "112-130",
                summary: "Revisa o estado atual da tecnologia de propulsores iônicos e sua aplicação para missões a Marte.",
                bullets: [
                    { category: "Propulsão", explanation: "Examina os ganhos de impulso específico." },
                    { category: "Espaço Profundo", explanation: "Aplicabilidade para missões estendidas além da LEO." }
                ],
                url: "https://example.com/paper2",
                 isBiotech: false
            }
        ]
    },
    punjabi: {
        appTitle: "ਸਪੇਸ ਸਾਹਿਤ ਹਵਾਲਾ ਖੋਜਕ",
        appSubtitle: "ਇੱਕ ਪੈਰਾ ਪੇਸਟ ਕਰੋ ਅਤੇ ਤੁਰੰਤ ਪ੍ਰਮਾਣਿਤ ਹਵਾਲੇ ਪ੍ਰਾਪਤ ਕਰੋ।",
        textareaPlaceholder: "ਆਪਣੀ ਸਪੇਸ ਰਿਸਰਚ, ਮਾਈਕ੍ਰੋਗ੍ਰੈਵਿਟੀ, ਜਾਂ ਏਰੋਸਪੇਸ ਇੰਜੀਨੀਅਰਿੰਗ ਦਾ ਪੈਰਾ ਇੱਥੇ ਦਰਜ ਕਰੋ...",
        btnGenerate: "ਹਵਾਲੇ ਬਣਾਓ",
        btnClear: "ਸਾਫ਼ ਕਰੋ",
        btnCopyAll: "ਸਭ ਕਾਪੀ ਕਰੋ",
        btnExportPdf: "PDF ਗ੍ਰੰਥ ਸੂਚੀ ਨਿਰਯਾਤ ਕਰੋ",
        btnAddToProject: "ਪ੍ਰੋਜੈਕਟ ਵਿੱਚ ਸ਼ਾਮਲ ਕਰੋ",
        selectProject: "ਪ੍ਰੋਜੈਕਟ ਚੁਣੋ...",
        btnNewProject: "+ ਨਵਾਂ",
        resultsHeading: "ਹਵਾਲੇ",
        annotatedHeading: "ਐਨੋਟੇਟਿਡ ਪੈਰਾਗ੍ਰਾਫ",
        footerText1: "Antigravity ਨਾਲ ਬਣਾਇਆ ਗਿਆ 🚀",
        footerText2: "ਪੁਲਾੜ-ਪਹੁੰਚਯੋਗ ਡਿਜ਼ਾਈਨ • WCAG 2.2 AA",
        filterBiotech: "ਸਿਰਫ਼ ਸਪੇਸ-ਬਾਇਓਟੈਕ",
        formatLabel: "ਫਾਰਮੈਟ:",
        signIn: "Google ਨਾਲ ਸਾਈਨ ਇਨ ਕਰੋ",
        viewSource: "ਸਰੋਤ ਦੇਖੋ ⭧",
        mockData: [
            {
                id: 'cit-1',
                authors: "Smith, J., Roberts, L.",
                year: 2023,
                title: "LEO ਓਪਰੇਸ਼ਨਾਂ ਵਿੱਚ ਹੱਡੀਆਂ ਦੀ ਘਣਤਾ 'ਤੇ ਲੰਬੇ ਸਮੇਂ ਤੱਕ ਮਾਈਕ੍ਰੋਗ੍ਰੈਵਿਟੀ ਦੇ ਪ੍ਰਭਾਵ।",
                journal: "ਜਰਨਲ ਆਫ਼ ਸਪੇਸ ਹੈਲਥ",
                volume: "15(4)",
                pages: "45-60",
                summary: "ਇਹ ਅਧਿਐਨ ਪੁਲਾੜ ਯਾਤਰੀਆਂ ਵਿੱਚ ਹੱਡੀਆਂ ਦੇ ਤੇਜ਼ ਨੁਕਸਾਨ ਦਾ ਵੇਰਵਾ ਦਿੰਦਾ ਹੈ ਅਤੇ ਆਈ.ਐਸ.ਐਸ. ਵਿੱਚ ਵਰਤੇ ਗਏ ਵਿਰੋਧੀ ਉਪਾਵਾਂ ਦਾ ਮੁਲਾਂਕਣ ਕਰਦਾ ਹੈ।",
                bullets: [
                    { category: "ਮਾਈਕ੍ਰੋਗ੍ਰੈਵਿਟੀ", explanation: "ਜ਼ੀਰੋ-ਜੀ ਵਿੱਚ ਸਰੀਰਕ ਤਬਦੀਲੀਆਂ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰਦਾ ਹੈ।" },
                    { category: "ਵਿਰੋਧੀ ਉਪਾਅ", explanation: "ਨਵੇਂ ਕਸਰਤ ਪ੍ਰੋਟੋਕੋਲ ਦੀ ਤਜਵੀਜ਼ ਕਰਦਾ ਹੈ।" }
                ],
                url: "https://example.com/paper1",
                isBiotech: true
            },
            {
                id: 'cit-2',
                authors: "Chen, X., Williams, D.",
                year: 2024,
                title: "ਡੀਪ ਸਪੇਸ ਟ੍ਰਾਂਜਿਟ ਲਈ ਅਗਲੀ ਪੀੜ੍ਹੀ ਦੇ ਪ੍ਰੋਪਲਸ਼ਨ ਸਿਸਟਮ।",
                journal: "ਏਰੋਸਪੇਸ ਇੰਜੀਨੀਅਰਿੰਗ ਸਮੀਖਿਆ",
                volume: "8(2)",
                pages: "112-130",
                summary: "ਆਇਨ ਥ੍ਰਸਟਰ ਤਕਨਾਲੋਜੀ ਦੀ ਮੌਜੂਦਾ ਸਥਿਤੀ ਅਤੇ ਮੰਗਲ ਮਿਸ਼ਨਾਂ ਲਈ ਇਸਦੀ ਵਰਤੋਂ ਦੀ ਸਮੀਖਿਆ ਕਰਦਾ ਹੈ।",
                bullets: [
                    { category: "ਪ੍ਰੋਪਲਸ਼ਨ", explanation: "ਖਾਸ ਆਵੇਗ ਲਾਭਾਂ ਦੀ ਜਾਂਚ ਕਰਦਾ ਹੈ।" },
                    { category: "ਡੀਪ ਸਪੇਸ", explanation: "LEO ਤੋਂ ਪਰੇ ਵਿਸਤ੍ਰਿਤ ਮਿਸ਼ਨਾਂ ਲਈ ਲਾਗੂ ਹੋਣ ਦੀ ਸੰਭਾਵਨਾ।" }
                ],
                url: "https://example.com/paper2",
                isBiotech: false
            }
        ]
    },
    serbian: {
        appTitle: "Pretraživač citata o svemirskoj literaturi",
        appSubtitle: "Zalepite odeljak i odmah dobijte proverene citate.",
        textareaPlaceholder: "Ovde unesite svoj odeljak o svemirskom istraživanju, mikrogravitaciji ili vazduhoplovnom inženjerstvu...",
        btnGenerate: "Generiši Citate",
        btnClear: "Obriši",
        btnCopyAll: "Kopiraj Sve",
        btnExportPdf: "Izvezi PDF Bibliografiju",
        btnAddToProject: "Dodaj u Projekat",
        selectProject: "Izaberi Projekat...",
        btnNewProject: "+ Novi",
        resultsHeading: "Citati",
        annotatedHeading: "Odeljak sa beleškama",
        footerText1: "Napravljeno pomoću Antigravity 🚀",
        footerText2: "Svemirski Dostupan Dizajn • WCAG 2.2 AA",
        filterBiotech: "Samo Svemirska Biotehnologija",
        formatLabel: "Format:",
        signIn: "Prijavite se pomoću Google-a",
        viewSource: "Prikaži izvor ⭧",
        mockData: [
            {
                id: 'cit-1',
                authors: "Smith, J., Roberts, L.",
                year: 2023,
                title: "Efekti produžene mikrogravitacije na gustinu kostiju u LEO operacijama.",
                journal: "Časopis za svemirsko zdravlje",
                volume: "15(4)",
                pages: "45-60",
                summary: "Ova studija detaljno opisuje brzi gubitak koštane mase kod astronauta i procenjuje protivmere korišćene na ISS-u.",
                bullets: [
                    { category: "Mikrogravitacija", explanation: "Analizira fiziološke promene u nultoj gravitaciji." },
                    { category: "Protivmere", explanation: "Predlaže nove protokole za vežbanje." }
                ],
                url: "https://example.com/paper1",
                isBiotech: true
            },
            {
                id: 'cit-2',
                authors: "Chen, X., Williams, D.",
                year: 2024,
                title: "Sistemi za propulziju sledeće generacije za tranzit u duboki svemir.",
                journal: "Pregled Vazduhoplovnog Inženjerstva",
                volume: "8(2)",
                pages: "112-130",
                summary: "Pregleda trenutno stanje tehnologije jonskog potisnika i njegovu primenu za misije na Mars.",
                bullets: [
                    { category: "Propulzija", explanation: "Ispituje specifične dobitke impulsa." },
                    { category: "Duboki Svemir", explanation: "Primenljivost za produžene misije izvan LEO-a." }
                ],
                url: "https://example.com/paper2",
                isBiotech: false
            }
        ]
    },
    shona: {
        appTitle: "Tsvagiriso yeZvinyorwa zveMuchadenga",
        appSubtitle: "Isa ndima yako ugowana zvinyorwa zvakasimbiswa ipapo.",
        textareaPlaceholder: "Isa ndima yako yekutsvaguruda kwemuchadenga, microgravity kana aerospace engineering pano...",
        btnGenerate: "Gadzira Zvinyorwa",
        btnClear: "Dzima",
        btnCopyAll: "Kopa Zvese",
        btnExportPdf: "Tumira Kunze PDF Bibliography",
        btnAddToProject: "Wedzera kuPurojekiti",
        selectProject: "Sarudza Purojekiti...",
        btnNewProject: "+ Itsva",
        resultsHeading: "Zvinyorwa",
        annotatedHeading: "Ndima Yakanyorwa Zvichitevera",
        footerText1: "Yakavakwa neAntigravity 🚀",
        footerText2: "Dhizaini Inosvikirika yeMuchadenga • WCAG 2.2 AA",
        filterBiotech: "Space-Biotech Chete",
        formatLabel: "Kumisikidzwa:",
        signIn: "Pinda neGoogle",
        viewSource: "Wona Kwanobva ⭧",
        mockData: [
             {
                id: 'cit-1',
                authors: "Smith, J., Roberts, L.",
                year: 2023,
                title: "Mhedzisiro yekugara munguva yakareba yemicrogravity pahunhu hwemapfupa mumabasa eLEO.",
                journal: "Jenari yeZvehutano yeMuchadenga",
                volume: "15(4)",
                pages: "45-60",
                summary: "Chidzidzo ichi chinodonongodza kurasikirwa kwekukurumidza kwemapfupa mune vanoenda muchadenga uye inoongorora nzira dzinoshandiswa muISS.",
                bullets: [
                    { category: "Microgravity", explanation: "Inoongorora shanduko dzemuviri mu zero-G." },
                    { category: "Zvidziviriro", explanation: "Inokurudzira maitiro matsva ekurovedza muviri." }
                ],
                url: "https://example.com/paper1",
                isBiotech: true
            },
            {
                id: 'cit-2',
                authors: "Chen, X., Williams, D.",
                year: 2024,
                title: "Michina yehutano hwezvizvarwa zvinotevera parwendo rwemuchadenga rwakadzika.",
                journal: "Ongororo yeAerospace Engineering",
                volume: "8(2)",
                pages: "112-130",
                summary: "Inoongorora mamiriro aripo ehutongi hweion thruster uye kushandiswa kwayo kune mishoni dzinoenda kuMars.",
                bullets: [
                    { category: "Kusunda", explanation: "Inoongorora zvakazoitika impulse gains." },
                    { category: "Runzvimbo Rwakadzika", explanation: "Kushandisa kumamishoni akawedzerwa anodarika LEO." }
                ],
                url: "https://example.com/paper2",
                isBiotech: false
            }
        ]
    },
    spanish: {
        appTitle: "Buscador de Citas de Literatura Espacial",
        appSubtitle: "Pega un párrafo y obtén citas verificadas al instante.",
        textareaPlaceholder: "Ingresa aquí tu párrafo sobre investigación espacial, microgravedad o ingeniería aeroespacial...",
        btnGenerate: "Generar Citas",
        btnClear: "Borrar",
        btnCopyAll: "Copiar Todo",
        btnExportPdf: "Exportar Bibliografía PDF",
        btnAddToProject: "Agregar al Proyecto",
        selectProject: "Seleccionar Proyecto...",
        btnNewProject: "+ Nuevo",
        resultsHeading: "Citas",
        annotatedHeading: "Párrafo Anotado",
        footerText1: "Construido con Antigravity 🚀",
        footerText2: "Diseño Accesible Espacial • WCAG 2.2 AA",
        filterBiotech: "Solo Biotecnología Espacial",
        formatLabel: "Formato:",
        signIn: "Iniciar sesión con Google",
        viewSource: "Ver fuente ⭧",
        mockData: [
            {
                id: 'cit-1',
                authors: "Smith, J., Roberts, L.",
                year: 2023,
                title: "Efectos de la microgravedad prolongada en la densidad ósea en operaciones LEO.",
                journal: "Revista de Salud Espacial",
                volume: "15(4)",
                pages: "45-60",
                summary: "Este estudio detalla la rápida pérdida de masa ósea en astronautas y evalúa las contramedidas utilizadas a bordo de la ISS.",
                bullets: [
                    { category: "Microgravedad", explanation: "Analiza cambios fisiológicos en gravedad cero." },
                    { category: "Contramedidas", explanation: "Propone nuevos protocolos de ejercicio." }
                ],
                url: "https://example.com/paper1",
                isBiotech: true
            },
            {
                id: 'cit-2',
                authors: "Chen, X., Williams, D.",
                year: 2024,
                title: "Sistemas de propulsión de próxima generación para tránsito en el espacio profundo.",
                journal: "Revisión de Ingeniería Aeroespacial",
                volume: "8(2)",
                pages: "112-130",
                summary: "Revisa el estado actual de la tecnología de propulsores iónicos y su aplicación para misiones a Marte.",
                bullets: [
                    { category: "Propulsión", explanation: "Examina las ganancias de impulso específico." },
                    { category: "Espacio Profundo", explanation: "Aplicabilidad para misiones extendidas más allá de LEO." }
                ],
                url: "https://example.com/paper2",
                isBiotech: false
            }
        ]
    },
    tamil: {
        appTitle: "விண்வெளி இலக்கிய மேற்கோள் கண்டுபிடிப்பான்",
        appSubtitle: "ஒரு பத்தியை ஒட்டவும், உடனடியாக சரிபார்க்கப்பட்ட மேற்கோள்களைப் பெறவும்.",
        textareaPlaceholder: "உங்கள் விண்வெளி ஆராய்ச்சி, நுண் ஈர்ப்பு அல்லது விண்வெளி பொறியியல் பத்தியை இங்கே உள்ளிடவும்...",
        btnGenerate: "மேற்கோள்களை உருவாக்கு",
        btnClear: "அழி",
        btnCopyAll: "அனைத்தையும் நகலெடு",
        btnExportPdf: "PDF நூலியலை ஏற்றுமதி செய்",
        btnAddToProject: "திட்டத்தில் சேர்",
        selectProject: "திட்டத்தைத் தேர்ந்தெடு...",
        btnNewProject: "+ புதியது",
        resultsHeading: "மேற்கோள்கள்",
        annotatedHeading: "சிறுகுறிப்பு செய்யப்பட்ட பத்தி",
        footerText1: "Antigravity மூலம் உருவாக்கப்பட்டது 🚀",
        footerText2: "விண்வெளி அணுகக்கூடிய வடிவமைப்பு • WCAG 2.2 AA",
        filterBiotech: "விண்வெளி பயோடெக் மட்டும்",
        formatLabel: "வடிவம்:",
        signIn: "Google மூலம் உள்நுழைக",
        viewSource: "ஆதாரத்தைக் காண்க ⭧",
        mockData: [
            {
                id: 'cit-1',
                authors: "Smith, J., Roberts, L.",
                year: 2023,
                title: "LEO செயல்பாடுகளில் எலும்பு அடர்த்தியில் நீடித்த நுண் ஈர்ப்பின் விளைவுகள்.",
                journal: "விண்வெளி சுகாதார இதழ்",
                volume: "15(4)",
                pages: "45-60",
                summary: "இந்த ஆய்வு விண்வெளி வீரர்களில் எலும்பு நிறை வேகமாக இழக்கப்படுவதை விவரிக்கிறது மற்றும் ISS இல் பயன்படுத்தப்படும் எதிர்ப்புகளை மதிப்பிடுகிறது.",
                bullets: [
                    { category: "நுண் ஈர்ப்பு", explanation: "பூஜ்ஜிய ஈர்ப்பு விசையில் உடலியல் மாற்றங்களை பகுப்பாய்வு செய்கிறது." },
                    { category: "எதிர்ப்புகள்", explanation: "புதிய உடற்பயிற்சி நெறிமுறைகளை முன்மொழிகிறது." }
                ],
                url: "https://example.com/paper1",
                isBiotech: true
            },
            {
                id: 'cit-2',
                authors: "Chen, X., Williams, D.",
                year: 2024,
                title: "ஆழமான விண்வெளிப் போக்குவரத்துக்கான அடுத்த தலைமுறை உந்துவிசை அமைப்புகள்.",
                journal: "விண்வெளி பொறியியல் ஆய்வு",
                volume: "8(2)",
                pages: "112-130",
                summary: "அயன் உந்துவிசை தொழில்நுட்பத்தின் தற்போதைய நிலை மற்றும் செவ்வாய் கிரக பணிகளுக்கான அதன் பயன்பாட்டை மதிப்பாய்வு செய்கிறது.",
                bullets: [
                    { category: "உந்துவிசை", explanation: "குறிப்பிட்ட உந்துவிசை ஆதாயங்களை ஆராய்கிறது." },
                    { category: "ஆழமான விண்வெளி", explanation: "LEO க்கு அப்பால் நீட்டிக்கப்பட்ட பணிகளுக்கான பொருந்தக்கூடிய தன்மை." }
                ],
                url: "https://example.com/paper2",
                isBiotech: false
            }
        ]
    },
    telugu: {
        appTitle: "అంతరిక్ష సాహిత్య ఉల్లేఖన శోధనకారి",
        appSubtitle: "పారాగ్రాఫ్‌ను పేస్ట్ చేయండి మరియు ధృవీకరించబడిన ఉల్లేఖనాలను తక్షణమే పొందండి.",
        textareaPlaceholder: "మీ అంతరిక్ష పరిశోధన, మైక్రోగ్రావిటీ లేదా ఏరోస్పేస్ ఇంజనీరింగ్ పారాగ్రాఫ్‌ను ఇక్కడ నమోదు చేయండి...",
        btnGenerate: "ఉల్లేఖనాలను సృష్టించు",
        btnClear: "క్లియర్",
        btnCopyAll: "అన్నీ కాపీ చేయండి",
        btnExportPdf: "PDF బిబ్లియోగ్రఫీని ఎగుమతి చేయండి",
        btnAddToProject: "ప్రాజెక్ట్‌కు జోడించు",
        selectProject: "ప్రాజెక్ట్‌ని ఎంచుకోండి...",
        btnNewProject: "+ కొత్తది",
        resultsHeading: "ఉల్లేఖనాలు",
        annotatedHeading: "వ్యాఖ్యానంతో కూడిన పారాగ్రాఫ్",
        footerText1: "Antigravity తో నిర్మించబడింది 🚀",
        footerText2: "అంతరిక్ష-యాక్సెస్ చేయగల డిజైన్ • WCAG 2.2 AA",
        filterBiotech: "స్పేస్ బయోటెక్ మాత్రమే",
        formatLabel: "ఫార్మాట్:",
        signIn: "Google తో సైన్ ఇన్ చేయండి",
        viewSource: "మూలాన్ని చూడండి ⭧",
        mockData: [
            {
                id: 'cit-1',
                authors: "Smith, J., Roberts, L.",
                year: 2023,
                title: "LEO కార్యకలాపాలలో ఎముక సాంద్రతపై సుదీర్ఘమైన మైక్రోగ్రావిటీ ప్రభావాలు.",
                journal: "జర్నల్ ఆఫ్ స్పేస్ హెల్త్",
                volume: "15(4)",
                pages: "45-60",
                summary: "ఈ అధ్యయనం వ్యోమగాములలో ఎముక ద్రవ్యరాశి వేగంగా కోల్పోవడాన్ని వివరిస్తుంది మరియు ISS లో ఉపయోగించే ప్రతిఘటనలను అంచనా వేస్తుంది.",
                bullets: [
                    { category: "మైక్రోగ్రావిటీ", explanation: "సున్నా-గురుత్వాకర్షణలో శారీరక మార్పులను విశ్లేషిస్తుంది." },
                    { category: "ప్రతిఘటనలు", explanation: "కొత్త వ్యాయామ ప్రోటోకాల్‌లను ప్రతిపాదిస్తుంది." }
                ],
                url: "https://example.com/paper1",
                isBiotech: true
            },
            {
                id: 'cit-2',
                authors: "Chen, X., Williams, D.",
                year: 2024,
                title: "లోతైన అంతరిక్ష రవాణా కోసం తదుపరి తరం ప్రొపల్షన్ వ్యవస్థలు.",
                journal: "ఏరోస్పేస్ ఇంజనీరింగ్ రివ్యూ",
                volume: "8(2)",
                pages: "112-130",
                summary: "అయాన్ థ్రస్టర్ టెక్నాలజీ యొక్క ప్రస్తుత స్థితి మరియు అంగారక మిషన్ల కొరకు దాని అనువర్తనాన్ని సమీక్షిస్తుంది.",
                bullets: [
                    { category: "ప్రొపల్షన్", explanation: "నిర్దిష్ట ప్రేరణ లాభాలను పరిశీలిస్తుంది." },
                    { category: "లోతైన అంతరిక్షం", explanation: "LEO కి మించిన విస్తృత మిషన్లకు వర్తించే సామర్థ్యం." }
                ],
                url: "https://example.com/paper2",
                isBiotech: false
            }
        ]
    },
    turkish: {
        appTitle: "Uzay Edebiyatı Alıntı Bulucu",
        appSubtitle: "Bir paragraf yapıştırın ve anında doğrulanmış alıntılar alın.",
        textareaPlaceholder: "Uzay araştırması, mikro yerçekimi veya havacılık mühendisliği paragrafınızı buraya girin...",
        btnGenerate: "Alıntı Oluştur",
        btnClear: "Temizle",
        btnCopyAll: "Tümünü Kopyala",
        btnExportPdf: "PDF Bibliyografyasını Dışa Aktar",
        btnAddToProject: "Projeye Ekle",
        selectProject: "Proje Seç...",
        btnNewProject: "+ Yeni",
        resultsHeading: "Alıntılar",
        annotatedHeading: "Açıklamalı Paragraf",
        footerText1: "Antigravity ile üretilmiştir 🚀",
        footerText2: "Uzay-Erişilebilir Tasarım • WCAG 2.2 AA",
        filterBiotech: "Sadece Uzay Biyoteknolojisi",
        formatLabel: "Biçim:",
        signIn: "Google ile giriş yap",
        viewSource: "Kaynağı Görüntüle ⭧",
        mockData: [
            {
                id: 'cit-1',
                authors: "Smith, J., Roberts, L.",
                year: 2023,
                title: "LEO operasyonlarında uzun süreli mikro yerçekiminin kemik yoğunluğu üzerindeki etkileri.",
                journal: "Uzay Sağlığı Dergisi",
                volume: "15(4)",
                pages: "45-60",
                summary: "Bu çalışma, astronotlardaki hızlı kemik kütlesi kaybını detaylandırmakta ve ISS'te kullanılan önlemleri değerlendirmektedir.",
                bullets: [
                    { category: "Mikro yerçekimi", explanation: "Sıfır yerçekimindeki fizyolojik değişiklikleri analiz eder." },
                    { category: "Önlemler", explanation: "Yeni egzersiz protokolleri önerir." }
                ],
                url: "https://example.com/paper1",
                isBiotech: true
            },
            {
                id: 'cit-2',
                authors: "Chen, X., Williams, D.",
                year: 2024,
                title: "Derin uzay geçişi için yeni nesil tahrik sistemleri.",
                journal: "Havacılık Mühendisliği İncelemesi",
                volume: "8(2)",
                pages: "112-130",
                summary: "İyon itici teknolojisinin mevcut durumunu ve Mars görevleri için uygulamasını gözden geçirir.",
                bullets: [
                    { category: "Tahrik", explanation: "Spesifik impuls kazanımlarını inceler." },
                    { category: "Derin Uzay", explanation: "LEO ötesindeki uzun görevler için uygulanabilirlik." }
                ],
                url: "https://example.com/paper2",
                isBiotech: false
            }
        ]
    }
};
