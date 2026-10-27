/**
 * Aklavya Kumar Portfolio - 3D WebGL GLSL Shader & Interactive Engine (main.js)
 * High School Senior (Batch of June 2027) | Cumberland Valley High School
 * Features Real-Time Raymarched/Procedural Topographic GLSL Shaders + Complete Resume Data
 */

// --- 1. Complete Verified Project & Research Database (From Resume & Common App PDFs) ---
const PROJECTS_DATA = [
    {
        id: "cognitrack-bci",
        title: "CogniTrack: EEG Brain-Computer Interface Platform",
        category: "biotech",
        categoryName: "Biomedical & BCI Research",
        status: "500+ Neural Datasets",
        image: "img/biotech.jpg",
        summary: "Engineered an EEG-based Brain-Computer Interface (BCI) platform in Python and PyTorch processing 500+ neural signal datasets to predict cognitive burnout.",
        details: "Engineered an EEG-based Brain-Computer Interface (BCI) platform in Python and PyTorch to predict and prevent student and adult burnout. Processed over 500+ neural signal datasets to build a novel AI diagnostic model. Authored and published an independent computational biomedical research paper exploring cognitive load tracking and neural signal processing, with technical findings submitted for leading technical journal review.",
        tags: ["Python", "PyTorch", "500+ Neural Datasets", "EEG Signal Processing", "Machine Learning", "Peer-Reviewed Paper"],
        metrics: "500+ Neural Signal Datasets Processed | Published Research",
        link: "https://medium.com/@aklavyakumr/cognitrack-a-brain-computer-interface-for-objective-monitoring-of-cognitive-fatigue-and-student-2f5b4cb5b3b6?sharedUserId=aklavyakumr",
        linkText: "Read Published Research on Medium"
    },
    {
        id: "published-book-bci",
        title: "Published Book: From Healing to Superhuman",
        category: "biotech",
        categoryName: "Published Author",
        status: "Available on Amazon",
        image: "img/biotech.jpg",
        summary: "Authored and published a comprehensive book on Amazon detailing the medical, cognitive, and ethical future of Brain-Computer Interfaces (BCIs).",
        details: "Authored and published the book 'From Healing to Superhuman', available globally on Amazon. Explores the evolution, clinical applications, cognitive enhancement capabilities, and societal impacts of Brain-Computer Interfaces (BCIs) and neurotechnology. Managed independent editing, formatting, and global retail distribution.",
        tags: ["Published Author", "Amazon Retail", "Neurotechnology", "BCI Ethics", "Medical Therapeutics", "Cognitive Enhancement"],
        metrics: "Published Book on Amazon | Global Distribution",
        link: "https://www.amazon.com/s?k=From+Healing+to+Superhuman+Aklavya+Kumar",
        linkText: "View Book on Amazon"
    },
    {
        id: "ftc-robotics-lead",
        title: "FIRST Tech Challenge (FTC 8468 The Javengers / 14464)",
        category: "robotics",
        categoryName: "Robotics & Autonomous Systems",
        status: "Dean's List Semi-Finalist (Top 40 PA)",
        image: "img/ftc-team.jpg",
        summary: "Programmed millimeter-precise Java autonomous systems (RoadRunner & PedroPathing) and engineered intake/lift mechanisms. Led team to 3 State Finals & 12 awards.",
        details: "Build & Programming Lead for FTC 8468 The Javengers (sponsored by Optum, TE Connectivity, Bank of America, UnitedHealth Group) and previously FTC 14464 BotBusters. Programmed millimeter-precise Java autonomous navigation systems using RoadRunner, PedroPathing, and OpenCV. Engineered complex intake, lift, and scoring mechanisms for state-finalist robots. Led team to 3 PA State Finals appearances and 12 competitive awards (Motivate, Connect, Inspire, Control, and Think awards). Named FIRST Dean's List Semi-Finalist (Top 40 across Pennsylvania). Coached summer robotics camps for 40+ Cumberland Valley youth.",
        tags: ["Java", "RoadRunner", "PedroPathing", "OnShape CAD", "3x State Finalist", "12 Competitive Awards", "Dean's List Semi-Finalist"],
        metrics: "3 State Finals | 12 Awards | Top 40 PA Dean's List Semi-Finalist",
        link: "http://www.pacar-robotics.org",
        linkText: "Visit PACAR Robotics (pacar-robotics.org)"
    },
    {
        id: "scioly-precision-devices",
        title: "Science Olympiad Precision Engineering Apparatuses",
        category: "robotics",
        categoryName: "Autonomous & Aerospace Hardware",
        status: "30+ Medals | 19th & 20th Nat'l",
        image: "img/robotTour.jpg",
        summary: "Designed and calibrated Hovercraft (3rd MIT), Electric Vehicle (4th PSU), Robot Tour (5th), and Helicopter. Led 20+ member team to 19th & 20th National finishes.",
        details: "Varsity competitor and Lead Robotics Developer for CVHS Science Olympiad. Led 20+ member team to consecutive Top 20 National tournament finishes (19th in 2024, 20th in 2025) and earned 30+ individual and team build/lab medals across MIT, UPenn, Solon, Battle of Valley Forge, and Penn State invitationals. Engineered four precision apparatuses: (1) Hovercraft: lightweight thrust-controlled air-cushion vehicle with propulsion vectoring (3rd Place at MIT); (2) Electric Vehicle: battery-powered vehicle with custom gear trains and electrical braking system for exact stopping accuracy (4th Place at PSU); (3) Robot Tour: autonomous sensor-guided mobile vehicle navigating obstacle courses under strict timing constraints (5th Place); (4) Helicopter: rubber-band powered endurance aircraft with high-aspect-ratio propellers.",
        tags: ["Robot Tour (5th)", "Hovercraft (3rd MIT)", "Electric Vehicle (4th PSU)", "Helicopter", "30+ Medals", "Arduino & MicroPython"],
        metrics: "3rd MIT Hovercraft | 4th PSU EV | 5th Robot Tour | 30+ Medals",
        link: "https://github.com/Fe4Rless233/Robot-Tour",
        linkText: "Inspect Robot Tour GitHub Repository"
    },
    {
        id: "iro-world-semifinalist",
        title: "International Research Olympiad (IRO) & CVHS Chapter",
        category: "biotech",
        categoryName: "Global Scientific Research",
        status: "Top 10% Globally (10k+ Entrants)",
        image: "img/IRO.jpg",
        summary: "International Semifinalist ranking in the Top 10% globally out of 10,000+ entrants. Founded CVHS's first research program and mentored 60+ peers.",
        details: "Achieved International Semifinalist distinction in the International Research Olympiad (IRO), placing in the Top 10% globally among 10,000+ entrants. Pioneered Cumberland Valley High School's first research program as Founder and President of the CVHS IRO Club. Mentored 60+ peers in quantitative, qualitative, and mixed-method experimental design, Python/pandas data analytics, and academic paper writing.",
        tags: ["IRO International Semifinalist", "Top 10% of 10k+ Entrants", "60+ Peers Mentored", "Python & Pandas", "Experimental Design"],
        metrics: "Top 10% Globally (10,000+ Entrants) | 60+ Peers Mentored",
        link: "img/IRO-2026-Certificate-Aklavya.pdf",
        linkText: "View Official IRO Certificate (PDF)"
    },
    {
        id: "fbla-national-top10",
        title: "FBLA Dual National Top 10 & Region 26 Treasurer",
        category: "leadership",
        categoryName: "Information Systems & Finance",
        status: "1st PA State | 8th & 10th Nat'l",
        image: "img/fbla.png",
        summary: "1st Place PA State & 10th Place National Champion in Management Information Systems (2026); 3rd PA State & 8th Place National in Intro to Programming (2025).",
        details: "Serves as FBLA Region 26 Regional Treasurer, managing financial accounts, RLC funds, and event budgets across student initiatives. Competed at state and national levels: 1st Place PA State Champion and 10th Place National Winner in Management Information Systems (2026); 3rd Place PA State and 8th Place National Winner in Introduction to Programming (2025); 3rd Place PA State in Fundamentals of Artificial Intelligence. Also earned 3rd Place Regional in DECA Principles of Marketing.",
        tags: ["10th Nat'l MIS", "8th Nat'l Programming", "1st PA State MIS", "3rd PA State AI", "Region 26 Treasurer", "DECA 3rd Place"],
        metrics: "1st PA State | 8th & 10th Place Nationally",
        link: "https://www.credly.com/badges/4bc863de-348f-409d-92ae-2020ad48edf7/linked_in_profile",
        linkText: "Verify Credly National Badge"
    },
    {
        id: "fbla-intro-programming-game",
        title: "The Destruction of the Possible Mission Force",
        category: "coding",
        categoryName: "Game Architecture & Software",
        status: "8th Place National Game",
        image: "img/DTPMF.png",
        summary: "Interactive game engineered in Python for FBLA Intro to Programming, winning 3rd in PA State and 8th Place Nationally.",
        details: "Designed and programmed 'The Destruction of the Possible Mission Force', an interactive game featuring custom state machines, collision physics, and algorithmic progression. Awarded 3rd Place at the PA FBLA State Leadership Conference and 8th Place at the National Leadership Conference. Published on itch.io with full open-source repository on GitHub.",
        tags: ["Python", "PyGame / RenPy", "itch.io Published", "8th Place National", "Open Source"],
        metrics: "8th Place Nationally | Published on itch.io",
        link: "https://readingcookiesa.itch.io/the-destruction-of-the-possible-mission-force",
        linkText: "Launch Game on itch.io"
    },
    {
        id: "cv-coding-club-usaco",
        title: "CVHS Coding Club & USACO / ACSL Curriculum",
        category: "coding",
        categoryName: "Algorithms & Competitive Coding",
        status: "70+ Coached | 4 USACO Silver",
        image: "img/cvcoding.png",
        summary: "Founded CVHS Coding Club; formulated curriculum in Dynamic Programming, Graph Theory, and Greedy algorithms across 25+ workshops.",
        details: "Founder (Grades 10, 11) and President of the Cumberland Valley High School Coding Club. Formulated a rigorous competitive programming curriculum covering Dynamic Programming (DP), Graph Theory, and Greedy algorithms. Led 25+ hands-on workshops and mock contests, coaching 70+ students to ACSL Finals and USACO Silver ranks (including 4 USACO Silver-ranked students directly mentored).",
        tags: ["C++", "Python", "Dynamic Programming", "Graph Algorithms", "25+ Workshops", "4 USACO Silver Students"],
        metrics: "25+ Workshops | 70+ Students Coached | 4 USACO Silver",
        link: "https://fe4rless233.github.io/CVcodingclub/index.html",
        linkText: "Visit CV Coding Club Platform"
    },
    {
        id: "penn-state-pulse-med",
        title: "Penn State College of Medicine PULSE Pathway",
        category: "biotech",
        categoryName: "Clinical Medicine & Shadowing",
        status: "1 of 30 Selected Statewide",
        image: "img/PULSE.png",
        summary: "Selected as 1 of 30 statewide participants for a 12-week longitudinal medical pathway at Penn State College of Medicine with 40+ clinical shadowing hours.",
        details: "Selected as one of only 30 students statewide for Penn State College of Medicine's competitive 12-week PULSE longitudinal medical pathway curriculum (Sept 2025 - Dec 2025). Completed 40+ hours of clinical shadowing, interactive problem-based learning (PBL) medical case studies, and hospital community health projects.",
        tags: ["1 of 30 Statewide", "40+ Hrs Clinical Shadowing", "Penn State Medicine", "Problem-Based Learning"],
        metrics: "1 of 30 Selected Statewide | 40+ Clinical Hours",
        link: "img/PULSE.png",
        linkText: "Inspect Official PULSE Credential"
    },
    {
        id: "abha-fullstack-platform",
        title: "Full-Stack Bengali Community Platform & PA Food Bank",
        category: "community",
        categoryName: "Full-Stack Web & Civic Impact",
        status: "1,000+ Users | 14,000+ Meals",
        image: "img/abha.jpg",
        summary: "Engineered and deployed the official React/Next.js community platform (abhaweb.org) serving 1,000+ users; raised funds for 14,000+ meals at PA Food Bank.",
        details: "Serves as Webmaster and Volunteer Lead for the Association of Bengalis in Harrisburg Area (ABHA). Engineered, deployed, and maintained the official responsive React and Next.js web application (abhaweb.org) serving over 1,000+ local users. Concurrently completed 10+ years of dedicated service with the Central Pennsylvania Food Bank, sorting donations and leading youth fundraising drives that provided over 14,000 meals.",
        tags: ["React", "Next.js", "TypeScript", "1,000+ Active Users", "14,000+ Meals Funded", "10+ Years Service"],
        metrics: "1,000+ Platform Users | 14,000+ Meals Provided",
        link: "https://abhaweb.org/",
        linkText: "Launch Live Platform (abhaweb.org)"
    }
];

// --- 2. Initialization ---
document.addEventListener("DOMContentLoaded", () => {
    initWebGLShader();
    initTypewriter();
    renderProjects(PROJECTS_DATA);
    initFiltersAndSearch();
    initModal();
    initSkillBars();
    initMobileNavDrawer();
    initScrollProgressBar();
    initBackToTop();
});

// --- 3. Real-Time 3D WebGL GLSL Topographic Wave Shader ---
function initWebGLShader() {
    // Support either #shader-canvas or legacy #particles-canvas ID
    const canvas = document.getElementById("shader-canvas") || document.getElementById("particles-canvas");
    if (!canvas) return;
    canvas.id = "shader-canvas";

    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) return;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        gl.viewport(0, 0, canvas.width, canvas.height);
    }
    resize();
    window.addEventListener("resize", resize);

    const vertexShaderSource = `
        attribute vec2 a_position;
        void main() {
            gl_Position = vec4(a_position, 0.0, 1.0);
        }
    `;

    // Custom 3D Topographic Wireframe & Elevation Field GLSL Fragment Shader
    // Strictly Obsidian (#050507), Crimson (#ff2a4b), and Warm Amber (#ff9f1c) — Zero Purple/Blue
    const fragmentShaderSource = `
        precision highp float;
        uniform vec2 u_resolution;
        uniform float u_time;
        uniform float u_scroll;

        // 3D Simplex-style procedural hash & noise
        vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

        float snoise(vec2 v) {
            const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
            vec2 i  = floor(v + dot(v, C.yy));
            vec2 x0 = v - i + dot(i, C.xx);
            vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
            vec4 x12 = x0.xyxy + C.xxzz;
            x12.xy -= i1;
            i = mod289(i);
            vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
            vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
            m = m*m;
            m = m*m;
            vec3 x = 2.0 * fract(p * C.www) - 1.0;
            vec3 h = abs(x) - 0.5;
            vec3 ox = floor(x + 0.5);
            vec3 a0 = x - ox;
            m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
            vec3 g;
            g.x  = a0.x  * x0.x  + h.x  * x0.y;
            g.yz = a0.yz * x12.xz + h.yz * x12.yw;
            return 130.0 * dot(m, g);
        }

        void main() {
            vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.y, u_resolution.x);
            
            // Perspective 3D plane projection
            vec2 p = uv * 2.4;
            p.y += u_scroll * 0.0012;
            
            float t = u_time * 0.18;
            
            // Multi-octave 3D terrain elevation
            float e1 = snoise(p * 1.1 + vec2(t, t * 0.6));
            float e2 = 0.5 * snoise(p * 2.3 - vec2(t * 0.8, -t * 0.4));
            float e3 = 0.25 * snoise(p * 4.6 + vec2(0.0, t * 1.1));
            float elevation = e1 + e2 + e3;

            // Topographic isolines (architectural contour lines)
            float contourFreq = 14.0;
            float lines = abs(fract(elevation * contourFreq) - 0.5);
            float contour = smoothstep(0.035, 0.01, lines);

            // Secondary structural coordinate grid
            vec2 gridUV = abs(fract(p * 3.0) - 0.5);
            float gridLine = smoothstep(0.015, 0.004, min(gridUV.x, gridUV.y)) * 0.18;

            // Base obsidian color (#050507)
            vec3 baseColor = vec3(0.02, 0.02, 0.028);
            // Architectural crimson (#ff2a4b)
            vec3 crimson = vec3(1.0, 0.165, 0.294);
            // Warm amber (#ff9f1c)
            vec3 amber = vec3(1.0, 0.624, 0.11);

            // Blend isolines based on elevation height
            vec3 lineColor = mix(crimson, amber, clamp(elevation * 0.5 + 0.5, 0.0, 1.0));
            
            // Vignette depth attenuation so foreground text has maximum contrast
            float vignette = 1.0 - smoothstep(0.2, 1.45, length(uv));
            
            vec3 finalColor = baseColor + lineColor * contour * 0.24 * vignette + vec3(0.4, 0.45, 0.55) * gridLine * vignette;

            gl_FragColor = vec4(finalColor, 1.0);
        }
    `;

    function compileShader(type, source) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            gl.deleteShader(shader);
            return null;
        }
        return shader;
    }

    const vs = compileShader(gl.VERTEX_SHADER, vertexShaderSource);
    const fs = compileShader(gl.FRAGMENT_SHADER, fragmentShaderSource);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);

    const posBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
        -1, -1,  1, -1, -1,  1,
        -1,  1,  1, -1,  1,  1
    ]), gl.STATIC_DRAW);

    const posLoc = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const resLoc = gl.getUniformLocation(program, "u_resolution");
    const timeLoc = gl.getUniformLocation(program, "u_time");
    const scrollLoc = gl.getUniformLocation(program, "u_scroll");

    let startTime = performance.now();

    function render() {
        const elapsed = (performance.now() - startTime) * 0.001;
        gl.uniform2f(resLoc, canvas.width, canvas.height);
        gl.uniform1f(timeLoc, elapsed);
        gl.uniform1f(scrollLoc, window.scrollY || 0.0);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
        requestAnimationFrame(render);
    }
    render();
}

// --- 4. Mobile Navigation Drawer ---
function initMobileNavDrawer() {
    const toggleBtn = document.getElementById("mobile-nav-toggle");
    const closeBtn = document.getElementById("mobile-drawer-close");
    const overlay = document.getElementById("mobile-drawer-overlay");
    const drawer = document.getElementById("mobile-drawer");
    const mobileLinks = document.querySelectorAll(".mobile-drawer-link");

    if (!toggleBtn || !drawer || !overlay) return;

    function openDrawer() {
        drawer.classList.add("active");
        overlay.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closeDrawer() {
        drawer.classList.remove("active");
        overlay.classList.remove("active");
        document.body.style.overflow = "auto";
    }

    toggleBtn.addEventListener("click", openDrawer);
    if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
    overlay.addEventListener("click", closeDrawer);
    mobileLinks.forEach(link => link.addEventListener("click", closeDrawer));
}

// --- 5. Scroll Progress Bar ---
function initScrollProgressBar() {
    const bar = document.getElementById("scroll-progress-bar");
    if (!bar) return;

    window.addEventListener("scroll", () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
        bar.style.width = scrolled + "%";
    });
}

// --- 6. Back To Top Button ---
function initBackToTop() {
    const btn = document.getElementById("back-to-top");
    if (!btn) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 350) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// --- 7. Hero Typewriter ---
function initTypewriter() {
    const el = document.getElementById("typewriter-text");
    if (!el) return;

    const phrases = [
        "Author of 'From Healing to Superhuman' (Published on Amazon)",
        "CogniTrack BCI Lead: 500+ Neural Signal Datasets in PyTorch",
        "IRO International Semifinalist (Top 10% of 10,000+ Entrants)",
        "FTC 8468 The Javengers Lead |PA Top 40 Dean's List Semi-Finalist",
        "FBLA 1st PA State & 8th / 10th Place National Winner",
        "Penn State College of Medicine PULSE (1 of 30 Selected Statewide)",
        "Scholastic Art & Writing Gold Key Winner for Personal Memoir"
    ];

    let phraseIdx = 0;
    let charIdx = 0;
    let isDeleting = false;

    function type() {
        const current = phrases[phraseIdx];
        if (isDeleting) {
            el.textContent = current.substring(0, charIdx - 1);
            charIdx--;
        } else {
            el.textContent = current.substring(0, charIdx + 1);
            charIdx++;
        }

        let speed = isDeleting ? 22 : 50;

        if (!isDeleting && charIdx === current.length) {
            speed = 2200;
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            phraseIdx = (phraseIdx + 1) % phrases.length;
            speed = 300;
        }

        setTimeout(type, speed);
    }
    type();
}

// --- 8. Project Grid Renderer (No Scroll Fade-In Cliche) ---
function renderProjects(projects) {
    const grid = document.getElementById("projects-grid");
    if (!grid) return;

    if (projects.length === 0) {
        grid.innerHTML = `
            <div class="col-12 text-center py-5">
                <h4 class="text-white">No matching engineering records found</h4>
                <p class="mono-meta">Adjust your filter or search query.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = projects.map((p) => `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="project-card">
                <div class="project-img-wrapper">
                    <img src="${p.image}" alt="${p.title}" class="project-img" loading="lazy">
                    <span class="project-status-badge">${p.status}</span>
                </div>
                <div class="project-body">
                    <span class="project-category-tag">${p.categoryName}</span>
                    <h3 class="project-title">${p.title}</h3>
                    <p class="project-desc">${p.summary}</p>
                    <div class="tech-tags">
                        ${p.tags.map(t => `<span class="tech-pill">${t}</span>`).join('')}
                    </div>
                    <button class="btn-project-details" onclick="openProjectModal('${p.id}')">
                        Inspect Specifications &amp; Credentials
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function initFiltersAndSearch() {
    const filterBtns = document.querySelectorAll(".filter-btn");
    const searchInput = document.getElementById("project-search");

    let currentCategory = "all";
    let currentQuery = "";

    function filterData() {
        const filtered = PROJECTS_DATA.filter(p => {
            const matchesCat = currentCategory === "all" || p.category === currentCategory;
            const q = currentQuery.toLowerCase();
            const matchesQuery = p.title.toLowerCase().includes(q) ||
                                 p.summary.toLowerCase().includes(q) ||
                                 p.tags.some(t => t.toLowerCase().includes(q));
            return matchesCat && matchesQuery;
        });
        renderProjects(filtered);
    }

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentCategory = btn.dataset.filter;
            filterData();
        });
    });

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            currentQuery = e.target.value;
            filterData();
        });
    }
}

// --- 9. Project Modal ---
function openProjectModal(id) {
    const project = PROJECTS_DATA.find(p => p.id === id);
    if (!project) return;

    const modal = document.getElementById("project-modal");
    const body = document.getElementById("modal-body-content");
    if (!modal || !body) return;

    body.innerHTML = `
        <div class="mb-3">
            <span class="mono-label">${project.categoryName}</span>
            <h2 class="h3 text-white mb-2">${project.title}</h2>
            <p class="mono-meta mb-3">VERIFIED METRICS: ${project.metrics}</p>
        </div>
        <img src="${project.image}" alt="${project.title}" class="img-fluid mb-4 w-100" style="max-height: 290px; object-fit: cover; border: 1px solid var(--border-strong);">
        <h4 class="mono-label">Technical Summary &amp; Architecture</h4>
        <p class="mb-4" style="line-height: 1.7;">${project.details}</p>
        
        <h4 class="mono-label">Stack, Hardware &amp; Recognition</h4>
        <div class="tech-tags mb-4">
            ${project.tags.map(t => `<span class="tech-pill">${t}</span>`).join('')}
        </div>

        <div class="d-flex justify-content-end">
            <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="btn-arch-primary btn-arch-sm">
                ${project.linkText}
            </a>
        </div>
    `;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function initModal() {
    const modal = document.getElementById("project-modal");
    const closeBtn = document.getElementById("modal-close");

    if (closeBtn && modal) {
        closeBtn.addEventListener("click", () => {
            modal.classList.remove("active");
            document.body.style.overflow = "auto";
        });

        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.classList.remove("active");
                document.body.style.overflow = "auto";
            }
        });
    }
}

// --- 10. Skill Bars ---
function initSkillBars() {
    const fills = document.querySelectorAll(".skill-progress-fill");
    fills.forEach(fill => {
        const pct = fill.dataset.progress;
        fill.style.width = pct + "%";
    });
}
