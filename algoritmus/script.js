const questions = [
  {
    type: "choice",
    text: "Jak se v programu projeví algoritmus, ve kterém byla porušena podmínka věcné správnosti?",
    options: [
      "Program se nikdy nespustí a překladač nahlásí syntaktickou chybu.",
      "Program se zacyklí a bude nutné ho násilně ukončit.",
      "Program zdánlivě pracuje bez problému, ale poskytuje chybné výsledky.",
      "Program skončí ihned po načtení prvního vstupního údaje."
    ],
    answer: 2,
    explanation: "Věcná správnost se týká správnosti výstupů. Porucha se proto často projeví až jako chybný, avšak syntakticky správný výsledek."
  },
  {
    type: "choice",
    text: "Který zápis správně převádí matematický zlomek (A+B)/(C+D) do programátorského zápisu?",
    options: [
      "X := A+B / C+D",
      "X := (A+B) / (C+D)",
      "X := A+B / (C+D)",
      "X := (A+B) / C+D"
    ],
    answer: 1,
    explanation: "Oba čitatel i jmenovatel musí být uzavřeny do závorek, aby se výrazy vyhodnotily jako celý zlomek."
  },
  {
    type: "choice",
    text: "Jak se ve vývojovém diagramu značí blok pro načtení vstupních dat od uživatele?",
    options: [
      "Obdélníkem s textem Načti.",
      "Kosočtvercem s textem Vstup.",
      "Kosodélníkem s textem Čti.",
      "Oválem s textem Začátek."
    ],
    answer: 2,
    explanation: "Vstup a výstup se ve vývojovém diagramu zobrazují kosodélníkem."
  },
  {
    type: "choice",
    text: "Která vlastnost algoritmu zajišťuje, že při zadání stejných vstupních dat dostaneme vždy stejný výsledek?",
    options: ["Obecnost.", "Srozumitelnost.", "Jednoznačnost.", "Opakovatelnost."],
    answer: 3,
    explanation: "Opakovatelnost, neboli determinismus, znamená shodu výsledeků při shodných vstupních datech."
  },
  {
    type: "choice",
    text: "Jaký je hlavní účel překladače?",
    options: [
      "Převádí vývojový diagram na slovní popis.",
      "Překládá program napsaný v programovacím jazyce do strojového kódu.",
      "Automaticky opravuje logické chyby.",
      "Převádí komentáře v kódu do češtiny."
    ],
    answer: 1,
    explanation: "Překladač převádí zdrojový kód do jazyka stroje nebo meziřádku, neodstraňuje logické chyby."
  },
  {
    type: "open",
    text: "Vyjmenuj všech 6 základních podmínek (vlastností), které musí splňovat správný algoritmus.",
    model: "Konečnost, věcná správnost, jednoznačnost, obecnost, opakovatelnost a srozumitelnost."
  },
  {
    type: "open",
    text: "Jaké dvě hlavní podmínky řešitelnosti musíme v algoritmech nejčastěji ošetřit pomocí větvení, aby program při výpočtu nehavaroval?",
    model: "Jmenovatel zlomku nesmí být nulový a výraz pod odmocninou nesmí být v oboru reálných čísel záporný."
  },
  {
    type: "open",
    text: "Vysvětli rozdíl mezi logickým součinem (AND) a logickým součtem (OR) dvou proměnných A a B.",
    model: "AND má hodnotu 1 pouze tehdy, jsou-li A i B rovny 1. OR má hodnotu 1 tehdy, když je alespoň jedna z proměnných rovna 1."
  },
  {
    type: "open",
    text: "K čemu slouží ve vývojovém diagramu značka Spojka a jakým pravidlem se řídí její označování?",
    model: "Spojka slouží ke spojení dvou částí vývojového diagramu, které nelze nakreslit souvisle. Spojky na obou koncích přerušení musí mít stejné označení."
  }
];

const quiz = document.getElementById("quiz");
const form = document.getElementById("quiz-form");
const progressText = document.getElementById("progress-text");
const progressBar = document.getElementById("progress-bar");
const resultBox = document.getElementById("quiz-result");

function renderQuiz() {
  quiz.innerHTML = questions.map((question, index) => {
    const number = index + 1;
    let body = "";
    if (question.type === "choice") {
      body = `<div class="options">${question.options.map((option, optionIndex) => `
        <label class="option">
          <input type="radio" name="q${index}" value="${optionIndex}" />
          <span>${String.fromCharCode(97 + optionIndex)}) ${option}</span>
        </label>`).join("")}</div>`;
    } else {
      body = `<textarea class="text-answer" name="q${index}" rows="4" aria-label="Odpověď na otevřenou otázku ${number}" placeholder="Napište vlastní odpověď..."></textarea>`;
    }
    return `<article class="question-card" id="question-${index}">
      <div class="question-top">
        <span class="question-number">${number}</span>
        <div style="width:100%">
          <h3>${question.text}</h3>
          ${body}
          <div class="feedback" id="feedback-${index}"></div>
        </div>
      </div>
    </article>`;
  }).join("");
  updateProgress();
}

function updateProgress() {
  let completed = 0;
  questions.forEach((question, index) => {
    if (question.type === "choice") {
      if (form.querySelector(`input[name="q${index}"]:checked`)) completed++;
    } else {
      const text = form.querySelector(`[name="q${index}"]`)?.value.trim();
      if (text) completed++;
    }
  });
  progressText.textContent = `${completed} / ${questions.length}`;
  progressBar.style.width = `${completed / questions.length * 100}%`;
}

renderQuiz();

form.addEventListener("change", updateProgress);
form.addEventListener("input", updateProgress);

form.addEventListener("submit", event => {
  event.preventEvent && event.preventEvent();
  event.preventDefault();
  let score = 0;
  let incomplete = [];

  questions.forEach((question, index) => {
    const card = document.getElementById(`question-${index}`);
    const feedback = document.getElementById(`feedback-${index}`);
    card.classList.remove("correct", "incorrect");
    feedback.className = "feedback";

    if (question.type === "choice") {
      const selected = form.querySelector(`input[name="q${index}"]:checked`);
      if (!selected) {
        incomplete.push(index + 1);
        feedback.className = "feedback visible neutral";
        feedback.innerHTML = `<strong>Nebyla vybrána odpověď.</strong>Správná odpověď: ${String.fromCharCode(97 + question.answer)}) ${question.options[question.answer]}<br>${question.explanation}`;
      } else if (Number(selected.value) === question.answer) {
        score++;
        card.classList.add("correct");
        feedback.className = "feedback visible success";
        feedback.innerHTML = `<strong>Správně</strong>${question.explanation}`;
      } else {
        card.classList.add("incorrect");
        feedback.className = "feedback visible error";
        feedback.innerHTML = `<strong>Špatně</strong>Správná odpověď: ${String.fromCharCode(97 + question.answer)}) ${question.options[question.answer]}<br>${question.explanation}`;
      }
    } else {
      const answer = form.querySelector(`[name="q${index}"]`).value.trim();
      if (!answer) incomplete.push(index + 1);
      feedback.className = "feedback visible neutral";
      feedback.innerHTML = `<strong>Vzorová odpověď k vlastnímu porovnání:</strong>${question.model}`;
    }
  });

  const openCount = questions.filter(q => q.type === "open").length;
  resultBox.classList.add("visible");
  if (incomplete.length) {
    resultBox.innerHTML = `<strong>${score} / 5</strong> správně u otázek s výběrem odpovědi. Neodpovězené položky: ${incomplete.join(", ")}. Otevřené otázky nejsou automaticky hodnoceny – porovnejte je se vzorovými odpověďmi.`;
  } else {
    resultBox.innerHTML = `<strong>${score} / 5</strong> správně u otázek s výběrem odpovědi. Otevřených otázek k porovnání: ${openCount}.`;
  }
  resultBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

document.getElementById("reset-test").addEventListener("click", () => {
  form.reset();
  document.querySelectorAll(".question-card").forEach(card => card.classList.remove("correct", "incorrect"));
  document.querySelectorAll(".feedback").forEach(feedback => {
    feedback.className = "feedback";
    feedback.innerHTML = "";
  });
  resultBox.className = "quiz-result";
  resultBox.innerHTML = "";
  updateProgress();
  document.getElementById("test").scrollIntoView({ behavior:"smooth" });
});

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});
navLinks.addEventListener("click", event => {
  if (event.target.matches("a")) {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

const sectionLinks = [...document.querySelectorAll(".nav-links a")];
const observedSections = sectionLinks.map(link => document.querySelector(link.getAttribute("href"))).filter(Boolean);
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      sectionLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
    }
  });
}, { rootMargin:"-30% 0px -60%", threshold:0 });
observedSections.forEach(section => observer.observe(section));
