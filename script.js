/* ═══════════════════════════════════════════════════════
   COSMIC QUIZ — NASA Mission Control Logic
   ═══════════════════════════════════════════════════════ */

// ── Quiz Data ──
const quizData = {
    earth: {
        label: "EARTH",
        emoji: "🌍",
        questions: [
            {
                q: "What percentage of Earth's surface is covered by water?",
                options: ["51%", "61%", "71%", "81%"],
                answer: 2,
                fact: "About 71% of Earth's surface is water, but 96.5% of that is in the oceans as saltwater. Only 3.5% is freshwater!"
            },
            {
                q: "What is the hottest layer of the Earth?",
                options: ["Mantle", "Outer Core", "Inner Core", "Crust"],
                answer: 2,
                fact: "The inner core reaches temperatures of about 5,400°C (9,800°F) — nearly as hot as the surface of the Sun!"
            },
            {
                q: "How old is planet Earth approximately?",
                options: ["3.5 billion years", "4.5 billion years", "5.5 billion years", "6.5 billion years"],
                answer: 1,
                fact: "Earth formed approximately 4.54 billion years ago from a solar nebula. The oldest known rocks are about 4 billion years old."
            },
            {
                q: "Which gas makes up most of Earth's atmosphere?",
                options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
                answer: 2,
                fact: "Nitrogen makes up 78% of Earth's atmosphere, while oxygen is 21%. The remaining 1% includes argon, CO₂, and trace gases."
            },
            {
                q: "What causes the seasons on Earth?",
                options: ["Distance from the Sun", "Earth's axial tilt", "The Moon's gravity", "Solar flares"],
                answer: 1,
                fact: "Earth's 23.5° axial tilt causes different hemispheres to receive varying amounts of sunlight throughout the year, creating seasons."
            },
            {
                q: "What is the deepest point in Earth's oceans?",
                options: ["Tonga Trench", "Puerto Rico Trench", "Mariana Trench", "Java Trench"],
                answer: 2,
                fact: "The Challenger Deep in the Mariana Trench is ~36,000 feet (10,994 m) deep — if you placed Mt. Everest inside, there'd still be over a mile of water above it!"
            },
            {
                q: "How long does it take for Earth to complete one full rotation?",
                options: ["Exactly 24 hours", "23 hours 56 minutes", "24 hours 15 minutes", "23 hours 30 minutes"],
                answer: 1,
                fact: "A sidereal day (one full rotation) is 23h 56m 4s. The extra ~4 minutes in our 24-hour day accounts for Earth's orbital movement around the Sun."
            },
            {
                q: "What is Earth's largest continent by area?",
                options: ["Africa", "North America", "Europe", "Asia"],
                answer: 3,
                fact: "Asia covers about 44.58 million km² — it's larger than the Moon's entire surface area of 37.9 million km²!"
            },
            {
                q: "What protects Earth from harmful solar radiation?",
                options: ["The ozone layer", "Earth's magnetic field", "The atmosphere", "All of the above"],
                answer: 3,
                fact: "Earth has a triple-layer defense: the magnetosphere deflects solar wind, the atmosphere absorbs radiation, and the ozone layer filters UV rays."
            },
            {
                q: "What is the most abundant element in Earth's crust?",
                options: ["Iron", "Silicon", "Aluminum", "Oxygen"],
                answer: 3,
                fact: "Oxygen makes up about 46% of Earth's crust by weight, mostly bound in silicate minerals. Silicon is second at 28%."
            }
        ]
    },
    "solar-system": {
        label: "SOLAR SYSTEM",
        emoji: "☀️",
        questions: [
            {
                q: "Which planet has the most moons in our solar system?",
                options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
                answer: 1,
                fact: "Saturn holds the record with over 140 confirmed moons! Jupiter comes close with over 90. New moons are still being discovered."
            },
            {
                q: "What is the Great Red Spot on Jupiter?",
                options: ["A volcano", "A giant storm", "An impact crater", "A magnetic anomaly"],
                answer: 1,
                fact: "The Great Red Spot is a massive anticyclonic storm larger than Earth that has been raging for at least 350 years!"
            },
            {
                q: "Which planet rotates on its side?",
                options: ["Venus", "Neptune", "Uranus", "Mercury"],
                answer: 2,
                fact: "Uranus has an axial tilt of 98°, likely caused by a collision with an Earth-sized object billions of years ago. It essentially rolls around the Sun!"
            },
            {
                q: "How long does it take sunlight to reach Earth?",
                options: ["About 4 minutes", "About 8 minutes", "About 12 minutes", "About 20 minutes"],
                answer: 1,
                fact: "Light from the Sun takes about 8 minutes and 20 seconds to reach Earth, traveling at 299,792 km/s across 150 million km."
            },
            {
                q: "Which is the hottest planet in our solar system?",
                options: ["Mercury", "Venus", "Mars", "Jupiter"],
                answer: 1,
                fact: "Despite being farther from the Sun than Mercury, Venus is hotter (465°C / 869°F) due to its thick CO₂ atmosphere creating a runaway greenhouse effect."
            },
            {
                q: "What is the asteroid belt located between?",
                options: ["Earth and Mars", "Mars and Jupiter", "Jupiter and Saturn", "Saturn and Uranus"],
                answer: 1,
                fact: "The asteroid belt between Mars and Jupiter contains millions of objects, but their total mass is only about 4% of the Moon's mass!"
            },
            {
                q: "Which planet has the shortest year?",
                options: ["Venus", "Mercury", "Mars", "Earth"],
                answer: 1,
                fact: "Mercury orbits the Sun in just 88 Earth days, but its day (sunrise to sunrise) is 176 Earth days — a day on Mercury is twice as long as its year!"
            },
            {
                q: "What moon in our solar system is most likely to harbor life?",
                options: ["Titan", "Europa", "Ganymede", "Io"],
                answer: 1,
                fact: "Europa (Jupiter's moon) has a subsurface ocean beneath its icy crust with 2-3 times more water than Earth's oceans, making it a prime candidate for life."
            },
            {
                q: "What is the largest volcano in the solar system?",
                options: ["Mauna Loa (Earth)", "Olympus Mons (Mars)", "Maat Mons (Venus)", "Tvashtar (Io)"],
                answer: 1,
                fact: "Olympus Mons on Mars is 21.9 km tall (nearly 3x Everest) and 600 km across — so wide that standing on its rim you couldn't see the summit due to the curvature!"
            },
            {
                q: "What are Saturn's rings primarily made of?",
                options: ["Rock and dust", "Ice and rock", "Gas and plasma", "Metal fragments"],
                answer: 1,
                fact: "Saturn's rings are 99.9% pure water ice, ranging from tiny grains to house-sized chunks. Despite spanning 282,000 km, they're only about 10 meters thick!"
            }
        ]
    },
    universe: {
        label: "UNIVERSE",
        emoji: "🌌",
        questions: [
            {
                q: "What is the estimated age of the universe?",
                options: ["10.8 billion years", "13.8 billion years", "15.8 billion years", "20 billion years"],
                answer: 1,
                fact: "The universe is 13.8 billion years old, determined by studying the cosmic microwave background radiation — the afterglow of the Big Bang."
            },
            {
                q: "What makes up most of the universe?",
                options: ["Normal matter", "Dark matter", "Dark energy", "Radiation"],
                answer: 2,
                fact: "Dark energy makes up ~68% of the universe, dark matter ~27%, and normal matter only ~5%. We can't directly observe 95% of the universe!"
            },
            {
                q: "What is at the center of most galaxies?",
                options: ["A neutron star", "A supermassive black hole", "A quasar", "A giant nebula"],
                answer: 1,
                fact: "Our Milky Way's central black hole, Sagittarius A*, has a mass of ~4 million Suns. The largest known supermassive black hole (TON 618) is 66 billion solar masses!"
            },
            {
                q: "What is a light-year a measure of?",
                options: ["Time", "Speed", "Distance", "Brightness"],
                answer: 2,
                fact: "One light-year is about 9.46 trillion km. The nearest star system, Alpha Centauri, is 4.37 light-years away — current rockets would take ~73,000 years to reach it."
            },
            {
                q: "How many galaxies are estimated to exist in the observable universe?",
                options: ["About 2 billion", "About 200 billion", "About 2 trillion", "About 200 trillion"],
                answer: 2,
                fact: "Recent estimates suggest about 2 trillion galaxies in the observable universe, each containing billions of stars. That's more galaxies than grains of sand on Earth!"
            },
            {
                q: "What happens at the event horizon of a black hole?",
                options: [
                    "Matter is destroyed",
                    "Light can no longer escape",
                    "Time stops completely",
                    "Gravity reverses"
                ],
                answer: 1,
                fact: "The event horizon is the 'point of no return' where escape velocity exceeds the speed of light. An outside observer would see you freeze and fade to red at this boundary."
            },
            {
                q: "What is the cosmic microwave background (CMB)?",
                options: [
                    "Radiation from the Sun",
                    "Leftover radiation from the Big Bang",
                    "Energy from black holes",
                    "Light from distant galaxies"
                ],
                answer: 1,
                fact: "The CMB is the oldest light in the universe, emitted ~380,000 years after the Big Bang. It's everywhere and has a temperature of 2.725 K (-270.4°C)."
            },
            {
                q: "What type of star will our Sun eventually become?",
                options: ["Black hole", "Neutron star", "White dwarf", "Red supergiant"],
                answer: 2,
                fact: "In about 5 billion years, our Sun will expand into a red giant, then shed its outer layers to become a white dwarf about the size of Earth but with the mass of the Sun."
            },
            {
                q: "What is the largest known structure in the universe?",
                options: ["The Milky Way", "The Boötes Void", "Hercules-Corona Borealis Great Wall", "The Andromeda Galaxy"],
                answer: 2,
                fact: "The Hercules-Corona Borealis Great Wall is a galactic filament spanning ~10 billion light-years, so large it challenges our understanding of cosmic uniformity."
            },
            {
                q: "What phenomenon causes the expansion of the universe to accelerate?",
                options: ["Gravity", "Dark energy", "Dark matter", "Cosmic radiation"],
                answer: 1,
                fact: "Dark energy, discovered in 1998, is causing the universe's expansion to accelerate. This was so unexpected it won the Nobel Prize in 2011."
            }
        ]
    }
};

// ══════════════════════════════════════
// STATE
// ══════════════════════════════════════
let currentCategory = null;
let currentQuestionIndex = 0;
let score = 0;
let answered = false;
let shuffledQuestions = [];
let missionStartTime = null;
let questionStartTime = null;
let questionTimerInterval = null;

// ══════════════════════════════════════
// DOM REFS
// ══════════════════════════════════════
const screens = {
    landing: document.getElementById("landing-screen"),
    category: document.getElementById("category-screen"),
    quiz: document.getElementById("quiz-screen"),
    results: document.getElementById("results-screen")
};

const els = {
    btnStart: document.getElementById("btn-start"),
    btnBackHome: document.getElementById("btn-back-home"),
    btnBackCat: document.getElementById("btn-back-cat"),
    btnNext: document.getElementById("btn-next"),
    btnRetry: document.getElementById("btn-retry"),
    btnNewCat: document.getElementById("btn-new-cat"),
    categoryCards: document.querySelectorAll(".mission-card"),
    missionClock: document.getElementById("mission-clock"),
    quizCategoryLabel: document.getElementById("quiz-category-label"),
    quizProgress: document.getElementById("quiz-progress"),
    progressBarFill: document.getElementById("progress-bar-fill"),
    scoreValue: document.getElementById("score-value"),
    questionNumber: document.getElementById("question-number"),
    questionText: document.getElementById("question-text"),
    questionPanel: document.getElementById("question-panel"),
    optionsGrid: document.getElementById("options-grid"),
    timerDisplay: document.getElementById("timer-display"),
    funFact: document.getElementById("fun-fact"),
    funFactText: document.getElementById("fun-fact-text"),
    resultsEmoji: document.getElementById("results-emoji"),
    resultsTitle: document.getElementById("results-title"),
    resultsSubtitle: document.getElementById("results-subtitle"),
    resultsScore: document.getElementById("results-score"),
    ringProgress: document.getElementById("ring-progress"),
    statCorrect: document.getElementById("stat-correct"),
    statWrong: document.getElementById("stat-wrong"),
    statPercent: document.getElementById("stat-percent"),
    statTime: document.getElementById("stat-time"),
    confettiCanvas: document.getElementById("confetti-canvas")
};

// ══════════════════════════════════════
// STARFIELD — Deep Space Background
// ══════════════════════════════════════
function initStarfield() {
    const canvas = document.getElementById("starfield");
    const ctx = canvas.getContext("2d");
    let stars = [];
    let shootingStars = [];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function createStars() {
        stars = [];
        const count = Math.floor((canvas.width * canvas.height) / 4000);
        for (let i = 0; i < count; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: Math.random() * 1.4 + 0.2,
                opacity: Math.random() * 0.6 + 0.2,
                twinkleSpeed: Math.random() * 0.015 + 0.003,
                twinklePhase: Math.random() * Math.PI * 2
            });
        }
    }

    function draw(time) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Subtle nebula glows
        const g1 = ctx.createRadialGradient(
            canvas.width * 0.2, canvas.height * 0.3, 0,
            canvas.width * 0.2, canvas.height * 0.3, canvas.width * 0.45
        );
        g1.addColorStop(0, "rgba(252, 61, 33, 0.015)");
        g1.addColorStop(1, "transparent");
        ctx.fillStyle = g1;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const g2 = ctx.createRadialGradient(
            canvas.width * 0.8, canvas.height * 0.7, 0,
            canvas.width * 0.8, canvas.height * 0.7, canvas.width * 0.4
        );
        g2.addColorStop(0, "rgba(0, 212, 255, 0.012)");
        g2.addColorStop(1, "transparent");
        ctx.fillStyle = g2;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw stars
        for (const star of stars) {
            const twinkle = Math.sin(time * star.twinkleSpeed + star.twinklePhase) * 0.35 + 0.65;
            const alpha = star.opacity * twinkle;
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(220, 225, 240, ${alpha})`;
            ctx.fill();

            // Slight glow for brighter stars
            if (star.r > 1.0) {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.r * 2.5, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(220, 225, 240, ${alpha * 0.08})`;
                ctx.fill();
            }
        }

        // Shooting stars
        if (Math.random() < 0.002 && shootingStars.length < 2) {
            shootingStars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height * 0.5,
                len: Math.random() * 100 + 50,
                speed: Math.random() * 10 + 5,
                angle: Math.PI / 4 + (Math.random() - 0.5) * 0.4,
                opacity: 1,
                life: 0
            });
        }

        for (let i = shootingStars.length - 1; i >= 0; i--) {
            const s = shootingStars[i];
            s.life++;
            s.x += Math.cos(s.angle) * s.speed;
            s.y += Math.sin(s.angle) * s.speed;
            s.opacity = Math.max(0, 1 - s.life / 35);

            if (s.opacity <= 0) { shootingStars.splice(i, 1); continue; }

            const tailX = s.x - Math.cos(s.angle) * s.len;
            const tailY = s.y - Math.sin(s.angle) * s.len;
            const grad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
            grad.addColorStop(0, "transparent");
            grad.addColorStop(1, `rgba(255, 255, 255, ${s.opacity})`);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(tailX, tailY);
            ctx.lineTo(s.x, s.y);
            ctx.stroke();
        }

        requestAnimationFrame(draw);
    }

    resize();
    createStars();
    requestAnimationFrame(draw);
    window.addEventListener("resize", () => { resize(); createStars(); });
}

// ══════════════════════════════════════
// MISSION CLOCK (header telemetry)
// ══════════════════════════════════════
function initMissionClock() {
    const startTime = Date.now();
    setInterval(() => {
        const elapsed = Date.now() - startTime;
        const h = String(Math.floor(elapsed / 3600000)).padStart(2, "0");
        const m = String(Math.floor((elapsed % 3600000) / 60000)).padStart(2, "0");
        const s = String(Math.floor((elapsed % 60000) / 1000)).padStart(2, "0");
        if (els.missionClock) {
            els.missionClock.textContent = `${h}:${m}:${s}`;
        }
    }, 1000);
}

// ══════════════════════════════════════
// QUESTION TIMER
// ══════════════════════════════════════
function startQuestionTimer() {
    questionStartTime = Date.now();
    clearInterval(questionTimerInterval);
    questionTimerInterval = setInterval(() => {
        const elapsed = Date.now() - questionStartTime;
        const m = String(Math.floor(elapsed / 60000)).padStart(2, "0");
        const s = String(Math.floor((elapsed % 60000) / 1000)).padStart(2, "0");
        if (els.timerDisplay) {
            els.timerDisplay.textContent = `${m}:${s}`;
        }
    }, 1000);
}

function stopQuestionTimer() {
    clearInterval(questionTimerInterval);
}

// ══════════════════════════════════════
// SCREEN TRANSITIONS
// ══════════════════════════════════════
function switchScreen(from, to) {
    from.classList.add("exit");
    from.classList.remove("active");
    setTimeout(() => {
        from.classList.remove("exit");
        to.classList.add("active");
    }, 300);
}

// ══════════════════════════════════════
// QUIZ LOGIC
// ══════════════════════════════════════
function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function startQuiz(categoryKey) {
    currentCategory = categoryKey;
    const data = quizData[categoryKey];
    shuffledQuestions = shuffleArray(data.questions);
    currentQuestionIndex = 0;
    score = 0;
    answered = false;
    missionStartTime = Date.now();

    els.quizCategoryLabel.textContent = data.label;
    els.scoreValue.textContent = "0";

    // Reset progress markers
    document.querySelectorAll(".pm").forEach(pm => {
        pm.style.background = "rgba(255,255,255,0.06)";
        pm.style.borderColor = "rgba(255,255,255,0.08)";
    });

    loadQuestion();
    switchScreen(screens.category, screens.quiz);
}

function loadQuestion() {
    answered = false;
    const q = shuffledQuestions[currentQuestionIndex];
    const total = shuffledQuestions.length;
    const num = currentQuestionIndex + 1;

    // Header
    els.quizProgress.textContent = `${String(num).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
    els.progressBarFill.style.width = `${(num / total) * 100}%`;
    els.questionNumber.textContent = `TASK ${String(num).padStart(2, "0")}`;
    els.questionText.textContent = q.q;

    // Hide extras
    els.funFact.classList.add("hidden");
    els.btnNext.classList.add("hidden");

    // Re-animate panel
    els.questionPanel.style.animation = "none";
    void els.questionPanel.offsetWidth;
    els.questionPanel.style.animation = "panel-enter 0.4s var(--ease-out) both";

    // Start timer
    startQuestionTimer();

    // Build options
    const letters = ["A", "B", "C", "D"];
    els.optionsGrid.innerHTML = "";

    q.options.forEach((opt, i) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.style.animation = "none";
        void btn.offsetWidth;
        btn.style.animation = `opt-enter 0.35s var(--ease-out) ${i * 0.05}s both`;
        btn.innerHTML = `
      <span class="option-letter">${letters[i]}</span>
      <span class="option-text">${opt}</span>
    `;
        btn.addEventListener("click", () => handleAnswer(i, btn));
        els.optionsGrid.appendChild(btn);
    });
}

function handleAnswer(selectedIndex, selectedBtn) {
    if (answered) return;
    answered = true;
    stopQuestionTimer();

    const q = shuffledQuestions[currentQuestionIndex];
    const correct = q.answer;
    const allBtns = els.optionsGrid.querySelectorAll(".option-btn");

    // Mark disabled
    allBtns.forEach((btn, i) => {
        if (i !== selectedIndex && i !== correct) {
            btn.classList.add("disabled");
        }
    });

    // Update progress marker
    const marker = document.querySelectorAll(".pm")[currentQuestionIndex];

    if (selectedIndex === correct) {
        selectedBtn.classList.add("correct");
        score++;
        els.scoreValue.textContent = score;
        els.scoreValue.classList.add("score-pop");
        setTimeout(() => els.scoreValue.classList.remove("score-pop"), 350);
        createSparkles(selectedBtn);
        if (marker) {
            marker.style.background = "var(--success)";
            marker.style.borderColor = "var(--success)";
            marker.style.boxShadow = "0 0 6px var(--success)";
        }
    } else {
        selectedBtn.classList.add("wrong");
        selectedBtn.classList.add("shake");
        allBtns[correct].classList.add("correct");
        if (marker) {
            marker.style.background = "var(--danger)";
            marker.style.borderColor = "var(--danger)";
            marker.style.boxShadow = "0 0 6px var(--danger)";
        }
    }

    allBtns.forEach(btn => btn.classList.add("disabled"));

    // Show intel
    els.funFactText.textContent = q.fact;
    els.funFact.classList.remove("hidden");
    els.funFact.style.animation = "none";
    void els.funFact.offsetWidth;
    els.funFact.style.animation = "panel-enter 0.35s var(--ease-out) both";

    // Next button
    els.btnNext.classList.remove("hidden");
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
        els.btnNext.querySelector("span").textContent = "NEXT TASK";
    } else {
        els.btnNext.querySelector("span").textContent = "VIEW DEBRIEF";
    }
}

function nextQuestion() {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showResults();
    }
}

// ── Sparkle FX ──
function createSparkles(element) {
    const rect = element.getBoundingClientRect();
    const colors = ["#10B981", "#F59E0B", "#00D4FF", "#FC3D21"];

    for (let i = 0; i < 10; i++) {
        const spark = document.createElement("div");
        spark.style.cssText = `
      position: fixed;
      width: 5px; height: 5px;
      border-radius: 50%;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      z-index: 200;
      pointer-events: none;
      left: ${rect.left + rect.width / 2}px;
      top: ${rect.top + rect.height / 2}px;
      transition: all 0.55s cubic-bezier(0.16, 1, 0.3, 1);
      opacity: 1;
    `;
        document.body.appendChild(spark);

        requestAnimationFrame(() => {
            spark.style.left = `${rect.left + rect.width / 2 + (Math.random() - 0.5) * 100}px`;
            spark.style.top = `${rect.top + rect.height / 2 + (Math.random() - 0.5) * 100}px`;
            spark.style.opacity = "0";
            spark.style.transform = "scale(0)";
        });

        setTimeout(() => spark.remove(), 600);
    }
}

// ══════════════════════════════════════
// RESULTS — Mission Debrief
// ══════════════════════════════════════
function showResults() {
    stopQuestionTimer();

    const total = shuffledQuestions.length;
    const percent = Math.round((score / total) * 100);
    const wrong = total - score;

    // Mission time
    const missionElapsed = Date.now() - missionStartTime;
    const mm = String(Math.floor(missionElapsed / 60000)).padStart(2, "0");
    const ss = String(Math.floor((missionElapsed % 60000) / 1000)).padStart(2, "0");

    // Grade
    let emoji, title, subtitle;
    if (percent === 100) {
        emoji = "👑"; title = "MISSION PERFECT";
        subtitle = "Flawless execution, Commander. You've mastered this domain of space science.";
    } else if (percent >= 80) {
        emoji = "🌟"; title = "MISSION ACCOMPLISHED";
        subtitle = "Outstanding performance. Your knowledge of the cosmos is exceptional.";
    } else if (percent >= 60) {
        emoji = "🚀"; title = "MISSION SUCCESSFUL";
        subtitle = "Solid work, astronaut. A few areas to review, but a successful mission overall.";
    } else if (percent >= 40) {
        emoji = "🛸"; title = "MISSION PARTIAL";
        subtitle = "Some turbulence along the way. Review the mission intel and try again.";
    } else {
        emoji = "📡"; title = "MISSION INCOMPLETE";
        subtitle = "The cosmos is vast, Commander. Study the briefing materials and relaunch.";
    }

    els.resultsEmoji.textContent = emoji;
    els.resultsTitle.textContent = title;
    els.resultsSubtitle.textContent = subtitle;
    els.statCorrect.textContent = score;
    els.statWrong.textContent = wrong;
    els.statPercent.textContent = `${percent}%`;
    els.statTime.textContent = `${mm}:${ss}`;

    switchScreen(screens.quiz, screens.results);

    // Animate ring
    setTimeout(() => {
        const circumference = 2 * Math.PI * 85;
        const offset = circumference - (score / total) * circumference;
        els.ringProgress.style.strokeDashoffset = offset;
        animateCounter(els.resultsScore, 0, score, 1200);
    }, 500);

    // Confetti
    if (percent >= 60) {
        setTimeout(() => launchConfetti(), 600);
    }
}

function animateCounter(el, from, to, duration) {
    const start = performance.now();
    function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(from + (to - from) * eased);
        if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}

// ══════════════════════════════════════
// CONFETTI
// ══════════════════════════════════════
function launchConfetti() {
    const canvas = els.confettiCanvas;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = [];
    const colors = ["#FC3D21", "#00D4FF", "#10B981", "#F59E0B", "#3B82F6", "#FFFFFF"];

    for (let i = 0; i < 100; i++) {
        pieces.push({
            x: canvas.width / 2 + (Math.random() - 0.5) * 200,
            y: canvas.height + 10,
            vx: (Math.random() - 0.5) * 10,
            vy: -(Math.random() * 16 + 8),
            w: Math.random() * 8 + 4,
            h: Math.random() * 5 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 10,
            gravity: 0.22 + Math.random() * 0.1,
            opacity: 1,
            delay: Math.random() * 250
        });
    }

    const startTime = performance.now();

    function draw(now) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let alive = false;

        for (const p of pieces) {
            const elapsed = now - startTime;
            if (elapsed < p.delay) { alive = true; continue; }

            p.vy += p.gravity;
            p.x += p.vx;
            p.y += p.vy;
            p.vx *= 0.99;
            p.rotation += p.rotationSpeed;

            if (p.y > canvas.height + 20) p.opacity -= 0.05;

            if (p.opacity > 0) {
                alive = true;
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate((p.rotation * Math.PI) / 180);
                ctx.globalAlpha = Math.max(0, p.opacity);
                ctx.fillStyle = p.color;
                ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
                ctx.restore();
            }
        }

        if (alive) requestAnimationFrame(draw);
        else ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    requestAnimationFrame(draw);
}

// ══════════════════════════════════════
// EVENT LISTENERS
// ══════════════════════════════════════
els.btnStart.addEventListener("click", () => {
    switchScreen(screens.landing, screens.category);
});

els.btnBackHome.addEventListener("click", () => {
    switchScreen(screens.category, screens.landing);
});

els.btnBackCat.addEventListener("click", () => {
    stopQuestionTimer();
    switchScreen(screens.quiz, screens.category);
});

els.categoryCards.forEach(card => {
    card.addEventListener("click", () => {
        startQuiz(card.dataset.category);
    });
});

els.btnNext.addEventListener("click", nextQuestion);

els.btnRetry.addEventListener("click", () => {
    els.ringProgress.style.strokeDashoffset = 534.07;
    startQuiz(currentCategory);
    switchScreen(screens.results, screens.quiz);
});

els.btnNewCat.addEventListener("click", () => {
    els.ringProgress.style.strokeDashoffset = 534.07;
    switchScreen(screens.results, screens.category);
});

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
    if (!screens.quiz.classList.contains("active")) return;

    const keyMap = { "1": 0, "2": 1, "3": 2, "4": 3, a: 0, b: 1, c: 2, d: 3 };
    const index = keyMap[e.key.toLowerCase()];

    if (index !== undefined && !answered) {
        const btn = els.optionsGrid.querySelectorAll(".option-btn")[index];
        if (btn) btn.click();
    }

    if ((e.key === "Enter" || e.key === " ") && answered) {
        e.preventDefault();
        nextQuestion();
    }
});

// ══════════════════════════════════════
// INIT
// ══════════════════════════════════════
document.addEventListener("DOMContentLoaded", () => {
    initStarfield();
    initMissionClock();
});
