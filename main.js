/**
 * Aklavya Kumar Portfolio - 3D WebGL GLSL Shader & Interactive Engine (main.js)
 * Engineer, Neurotechnology Researcher & Author | Cumberland Valley High School
 * Features Real-Time Topographic GLSL Shaders + Natural Engineering Copy
 */

// --- 1. Complete Engineering, Research & Publications Database ---
const PROJECTS_DATA = [
    {
        id: "cognitrack-bci",
        title: "CogniTrack: EEG Brain-Computer Interface Platform",
        category: "biotech",
        categoryName: "Biomedical & BCI Research",
        status: "500+ Neural Datasets",
        image: "img/biotech.jpg",
        imageFit: "cover",
        summary: "An EEG-based Brain-Computer Interface built in Python and PyTorch that analyzes 500+ neural signal datasets to detect cognitive fatigue and prevent burnout.",
        details: "CogniTrack is an EEG-based Brain-Computer Interface (BCI) platform built in Python and PyTorch to objectively measure cognitive load and prevent burnout in students and working professionals. By training deep learning models across more than 500 neural signal datasets, the system classifies mental fatigue states in real time. Full technical methodology and results are documented in the formal research paper, alongside a public overview article published on Medium.",
        tags: ["Python", "PyTorch", "500+ Neural Datasets", "EEG Signal Processing", "Machine Learning", "Research Paper"],
        metrics: "500+ Neural Signal Datasets | Research Paper & Medium Article",
        link: "https://docs.google.com/document/d/1GCnS6kl_VVaN-jITx9sfBQzqym1Ut4TVTBo4DzyOyy4/edit?usp=sharing",
        linkText: "Read Formal Research Paper",
        secondaryLink: "https://medium.com/@aklavyakumr/cognitrack-a-brain-computer-interface-for-objective-monitoring-of-cognitive-fatigue-and-student-2f5b4cb5b3b6?sharedUserId=aklavyakumr",
        secondaryLinkText: "Read Medium Article"
    },
    {
        id: "published-book-bci",
        title: "From Healing to Superhuman (Published Book)",
        category: "biotech",
        categoryName: "Published Author",
        status: "Available on Amazon",
        image: "img/from_healing_to_superhuman.jpg",
        imageFit: "contain",
        summary: "Authored and published 'From Healing to Superhuman: How Brain-Computer Interfaces Restore Broken Bodies and Enhance Daily Life', available on Amazon.",
        details: "Written by Aklavya Kumar and available on Amazon, 'From Healing to Superhuman: How Brain-Computer Interfaces Restore Broken Bodies and Enhance Daily Life' examines the engineering, clinical rehabilitation pathways, cognitive enhancement applications, and ethical questions surrounding modern neurotechnology and Brain-Computer Interfaces.",
        tags: ["Published Book", "Amazon", "Brain-Computer Interfaces", "Neurotechnology", "Biomedical Engineering"],
        metrics: "Published Book by Aklavya Kumar | Available on Amazon",
        link: "https://www.amazon.com/s?k=From+Healing+to+Superhuman+Aklavya+Kumar",
        linkText: "View Book on Amazon"
    },
    {
        id: "ftc-robotics-lead",
        title: "FIRST Tech Challenge: FTC 8468 The Javengers",
        category: "robotics",
        categoryName: "Robotics & Autonomous Systems",
        status: "Dean's List Semi-Finalist",
        image: "img/ftc-team.jpeg",
        imageFit: "cover",
        summary: "Build & Programming Lead for FTC 8468 The Javengers (1600x1200 team workspace). Developing millimeter-accurate Java autonomous routines and custom hardware.",
        details: "Serving as Build & Programming Lead for FIRST Tech Challenge Team 8468 The Javengers in Mechanicsburg, PA (sponsored by Optum, TE Connectivity, Bank of America, and UnitedHealth Group), following three seasons with FTC 14464 BotBusters. Designed multi-stage intake, lift, and scoring mechanisms in OnShape and Fusion 360, and wrote millimeter-accurate Java autonomous navigation using RoadRunner, PedroPathing, and OpenCV. Competed in 3 Pennsylvania State Championship Finals, won 12 team awards (Control, Inspire, Motivate, Connect, and Think), and was named a FIRST Dean's List Semi-Finalist. Also directs summer robotics camps for over 40 local students.",
        tags: ["Java", "RoadRunner", "PedroPathing", "OnShape CAD", "FTC 8468 The Javengers", "Dean's List Semi-Finalist"],
        metrics: "3x PA State Finalist | 12 Awards | Dean's List Semi-Finalist",
        link: "http://www.pacar-robotics.org",
        linkText: "Visit PACAR Robotics (pacar-robotics.org)"
    },
    {
        id: "scioly-precision-devices",
        title: "Science Olympiad Autonomous & Aerospace Hardware",
        category: "robotics",
        categoryName: "Precision Engineering",
        status: "30+ Medals | Top-20 Nationals",
        image: "img/robotTour.jpg",
        imageFit: "cover",
        summary: "Engineered competitive Hovercraft (3rd at MIT), Electric Vehicle (4th at Penn State), Robot Tour (5th), and Helicopter systems across national invitationals.",
        details: "Varsity competitor and lead robotics developer for Cumberland Valley High School Science Olympiad, contributing to consecutive Top-20 National team finishes (19th in 2024, 20th in 2025) and winning more than 30 medals at MIT, UPenn, Solon, Battle of Valley Forge, and Penn State. Built and calibrated four hardware systems: (1) Hovercraft: thrust-controlled air-cushion vehicle with optimized lift-to-weight ratios and propulsion vectoring (3rd Place at MIT); (2) Electric Vehicle: battery-powered chassis with custom gear trains and electrical braking for exact target stopping (4th Place at Penn State); (3) Robot Tour: autonomous sensor-guided vehicle programmed for obstacle navigation and vector mapping (5th Place); (4) Helicopter: ultra-low-mass balsa endurance aircraft.",
        tags: ["Robot Tour (5th)", "Hovercraft (3rd MIT)", "Electric Vehicle (4th PSU)", "Helicopter", "30+ Medals", "Embedded C / Python"],
        metrics: "3rd MIT Hovercraft | 4th PSU EV | 5th Robot Tour | 30+ Medals",
        link: "https://github.com/Fe4Rless233/Robot-Tour",
        linkText: "Inspect Robot Tour GitHub Repository"
    },
    {
        id: "iro-world-semifinalist",
        title: "International Research Olympiad (IRO) & CVHS Research",
        category: "biotech",
        categoryName: "Scientific Research",
        status: "Top 10% Globally",
        image: "img/IRO.jpg",
        imageFit: "contain",
        summary: "International Semifinalist placing in the Top 10% worldwide among 10,000+ competitors. Founded the CVHS IRO chapter and mentors 60+ student researchers.",
        details: "Earned International Semifinalist honors in the International Research Olympiad (IRO), ranking in the Top 10% globally out of more than 10,000 entrants in scientific literature analysis and quantitative problem-solving. Founded the Cumberland Valley High School IRO chapter, guiding over 60 students in experimental design, Python and pandas data analysis, and research paper authorship.",
        tags: ["IRO International Semifinalist", "Top 10% Worldwide", "60+ Student Researchers", "Python & Pandas", "Scientific Writing"],
        metrics: "Top 10% Globally (10,000+ Entrants) | Official Certificate",
        link: "img/IRO-2026-Certificate-Aklavya.pdf",
        linkText: "View Official IRO Certificate (PDF)"
    },
    {
        id: "fbla-national-top10",
        title: "FBLA National Top 10 & PA State Champion",
        category: "leadership",
        categoryName: "Information Systems & Finance",
        status: "1st PA State | 8th & 10th Nat'l",
        image: "img/fbla.png",
        imageFit: "contain",
        summary: "1st Place PA State Champion & 10th Place National Winner in Management Information Systems (2026); 8th Place National Winner in Intro to Programming (2025).",
        details: "Serving as FBLA Region 26 Regional Treasurer, overseeing regional conference budgets and student chapter allocations. At the state and national levels, won 1st Place PA State Champion and 10th Place Nationally in Management Information Systems (2026), 3rd Place PA State and 8th Place Nationally in Introduction to Programming (2025), and 3rd Place PA State in Fundamentals of Artificial Intelligence. Also placed 3rd Regionally in DECA Principles of Marketing.",
        tags: ["10th Nat'l MIS", "8th Nat'l Programming", "1st PA State MIS", "3rd PA State AI", "Region 26 Treasurer"],
        metrics: "1st PA State | 8th & 10th Place Nationally",
        link: "https://www.credly.com/badges/4bc863de-348f-409d-92ae-2020ad48edf7/linked_in_profile",
        linkText: "Verify Credly National Badge",
        secondaryLink: "https://www.linkedin.com/posts/aklavyakumar_fbla-fblanlc-managementinformationsystems-ugcPost-7478869082348601344-ot7V/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFXbmsIB-gLth7idAgpxxeTHCbyOXw-U7f8",
        secondaryLinkText: "View LinkedIn NLC Post"
    },
    {
        id: "fbla-intro-programming-game",
        title: "The Destruction of the Possible Mission Force",
        category: "coding",
        categoryName: "Game Development",
        status: "8th Place National Game",
        image: "img/DTPMF.png",
        imageFit: "cover",
        summary: "Standalone Python game built for the FBLA Intro to Programming competition, earning 3rd Place in Pennsylvania and 8th Place Nationally.",
        details: "Architected and programmed 'The Destruction of the Possible Mission Force', an interactive game featuring custom state management, collision physics, and original level progression. Awarded 3rd Place at the Pennsylvania FBLA State Leadership Conference and 8th Place at the National Leadership Conference. Playable online via itch.io with full source code on GitHub.",
        tags: ["Python", "PyGame / RenPy", "itch.io", "8th Place National", "Open Source"],
        metrics: "8th Place Nationally | Playable on itch.io",
        link: "https://readingcookiesa.itch.io/the-destruction-of-the-possible-mission-force",
        linkText: "Play Game on itch.io",
        secondaryLink: "https://github.com/nulladmin1/FBLA_Intro-to-Programming_2024-2025",
        secondaryLinkText: "View GitHub Repository"
    },
    {
        id: "cv-coding-club-usaco",
        title: "Cumberland Valley Coding Club & USACO Mentorship",
        category: "coding",
        categoryName: "Algorithms & Competitive Coding",
        status: "70+ Students | 4 USACO Silver",
        image: "img/cvcoding.png",
        imageFit: "contain",
        summary: "Founded the CVHS Coding Club and built a curriculum in Dynamic Programming, Graph Theory, and Greedy algorithms across 25+ workshops.",
        details: "Founded and serves as President of the Cumberland Valley High School Coding Club. Authored an algorithmic training curriculum covering Dynamic Programming, Graph Theory, and Greedy methods in C++ and Python. Hosted more than 25 workshops and mock competitions, training over 70 students for ACSL Finals and USACO divisions, with 4 club members advancing to USACO Silver.",
        tags: ["C++", "Python", "Dynamic Programming", "Graph Algorithms", "25+ Workshops", "4 USACO Silver Students"],
        metrics: "25+ Workshops | 70+ Students | 4 USACO Silver",
        link: "https://fe4rless233.github.io/CVcodingclub/index.html",
        linkText: "Visit CV Coding Club Website",
        secondaryLink: "img/CVCodingClubBoard.pdf",
        secondaryLinkText: "View Club Poster (PDF)"
    },
    {
        id: "penn-state-pulse-med",
        title: "Penn State College of Medicine PULSE Pathway",
        category: "biotech",
        categoryName: "Clinical Medicine",
        status: "1 of 30 Selected Statewide",
        image: "img/PULSE.png",
        imageFit: "cover",
        summary: "Selected as 1 of 30 students across Pennsylvania for Penn State College of Medicine's 12-week clinical pathway with 40+ hours of physician shadowing.",
        details: "Selected as one of 30 participants statewide for the 12-week PULSE medical pathway at Penn State College of Medicine. Completed more than 40 hours of clinical shadowing, problem-based learning (PBL) diagnostic case studies, and hospital community health initiatives.",
        tags: ["Penn State Medicine", "1 of 30 Statewide", "40+ Hrs Clinical Shadowing", "Medical Case Studies"],
        metrics: "1 of 30 Selected Statewide | 40+ Clinical Hours",
        link: "img/PULSE.png",
        linkText: "View Official PULSE Certificate"
    },
    {
        id: "abha-fullstack-platform",
        title: "ABHA Full-Stack Web Platform & PA Food Bank Service",
        category: "community",
        categoryName: "Full-Stack Web & Civic Impact",
        status: "1,000+ Users | 14,000+ Meals",
        image: "img/abha.jpg",
        imageFit: "cover",
        summary: "Built and maintains the official React/Next.js web platform (abhaweb.org) serving 1,000+ residents; 10+ years of service at the Central PA Food Bank.",
        details: "As Webmaster and Volunteer Lead for the Association of Bengalis in Harrisburg Area (ABHA), architected, deployed, and maintains the production React and Next.js web application (abhaweb.org) serving more than 1,000 regional users. Alongside cultural outreach, has volunteered for over 10 years with the Central Pennsylvania Food Bank, sorting food donations and leading youth fundraisers that have funded over 14,000 meals.",
        tags: ["React", "Next.js", "TypeScript", "1,000+ Active Users", "14,000+ Meals Funded", "10+ Years Service"],
        metrics: "1,000+ Platform Users | 14,000+ Meals Provided",
        link: "https://abhaweb.org/",
        linkText: "Visit Live Platform (abhaweb.org)"
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

    const fragmentShaderSource = `
        precision highp float;
        uniform vec2 u_resolution;
        uniform float u_time;
        uniform float u_scroll;

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
            vec2 p = uv * 2.4;
            p.y += u_scroll * 0.0012;
            
            float t = u_time * 0.18;
            
            float e1 = snoise(p * 1.1 + vec2(t, t * 0.6));
            float e2 = 0.5 * snoise(p * 2.3 - vec2(t * 0.8, -t * 0.4));
            float e3 = 0.25 * snoise(p * 4.6 + vec2(0.0, t * 1.1));
            float elevation = e1 + e2 + e3;

            float contourFreq = 14.0;
            float lines = abs(fract(elevation * contourFreq) - 0.5);
            float contour = smoothstep(0.035, 0.01, lines);

            vec2 gridUV = abs(fract(p * 3.0) - 0.5);
            float gridLine = smoothstep(0.015, 0.004, min(gridUV.x, gridUV.y)) * 0.18;

            vec3 baseColor = vec3(0.02, 0.02, 0.028);
            vec3 crimson = vec3(1.0, 0.165, 0.294);
            vec3 amber = vec3(1.0, 0.624, 0.11);

            vec3 lineColor = mix(crimson, amber, clamp(elevation * 0.5 + 0.5, 0.0, 1.0));
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
        "CogniTrack EEG BCI Lead: 500+ Neural Datasets in PyTorch",
        "International Research Olympiad Semifinalist (Top 10% Worldwide)",
        "FTC 8468 The Javengers Lead & FIRST Dean's List Semi-Finalist",
        "FBLA 1st Place PA State & Dual Top-10 National Winner",
        "Penn State College of Medicine PULSE Pathway Scholar",
        "Scholastic Art & Writing Gold Key Winner"
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

// --- 8. Project Grid Renderer ---
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
                    <img src="${p.image}" alt="${p.title} - Aklavya Kumar" class="project-img" style="object-fit: ${p.imageFit || 'cover'};" loading="lazy">
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
                        Inspect Specifications &amp; Links
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

    const secondaryBtnHTML = project.secondaryLink ? `
        <a href="${project.secondaryLink}" target="_blank" rel="noopener noreferrer" class="btn-arch-secondary btn-arch-sm">
            ${project.secondaryLinkText}
        </a>
    ` : "";

    body.innerHTML = `
        <div class="mb-3">
            <span class="mono-label">${project.categoryName}</span>
            <h2 class="h3 text-white mb-2">${project.title}</h2>
            <p class="mono-meta mb-3">HIGHLIGHTS: ${project.metrics}</p>
        </div>
        <img src="${project.image}" alt="${project.title} - Aklavya Kumar" class="img-fluid mb-4 w-100" style="max-height: 320px; object-fit: ${project.imageFit || 'cover'}; background: #050507; border: 1px solid var(--border-strong);">
        <h4 class="mono-label">Engineering &amp; Research Overview</h4>
        <p class="mb-4" style="line-height: 1.7;">${project.details}</p>
        
        <h4 class="mono-label">Technologies &amp; Recognition</h4>
        <div class="tech-tags mb-4">
            ${project.tags.map(t => `<span class="tech-pill">${t}</span>`).join('')}
        </div>

        <div class="d-flex flex-wrap justify-content-end gap-2">
            ${secondaryBtnHTML}
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
