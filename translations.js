// translations.js
// Stores all translations for UI elements and mocked AI responses.
// Note: In an actual production environment, a CDN-based i18n library (like i18next) is preferred,
// but for a static vanilla JS site, a dictionary object handles this perfectly.

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
    espanol: {
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
    }
};
