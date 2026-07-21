/* quiz.js — reusable interactive practice widgets for the course.
   Two feedback-loop widgets, both auto-graded and instant:
     Quiz.mcq(mountId, questions)        — multiple choice retrieval practice
     Quiz.classify(mountId, config)      — sort items into categories (interleaving)
   Depends on the .quiz styles in course.css. */
(function (global) {
  function el(tag, cls, text) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  // --- Multiple choice ----------------------------------------------------
  // questions: [{ q, options:[...], correct:<index>, why:<string> }]
  function mcq(mountId, questions) {
    const root = document.getElementById(mountId);
    if (!root) return;
    questions.forEach((item, qi) => {
      const box = el("div", "quiz");
      box.appendChild(el("div", "q", (qi + 1) + ". " + item.q));
      const fb = el("div", "feedback");
      item.options.forEach((opt, oi) => {
        const b = el("button", "opt", opt);
        b.onclick = () => {
          if (box.dataset.done) return;
          if (oi === item.correct) {
            b.classList.add("correct");
            fb.textContent = item.why;
            fb.style.color = "var(--good)";
            box.dataset.done = "1";
          } else {
            b.classList.add("wrong");
            fb.textContent = "Not quite — recall the mechanism, then try again.";
            fb.style.color = "#c0392b";
          }
        };
        box.appendChild(b);
      });
      box.appendChild(fb);
      root.appendChild(box);
    });
  }

  // --- Classify (interleaving) -------------------------------------------
  // config: { categories:[...labels], items:[{ text, answer:<label>, why }] }
  function classify(mountId, config) {
    const root = document.getElementById(mountId);
    if (!root) return;
    let remaining = config.items.length;
    const score = el("div", "feedback");
    config.items.forEach((item, ii) => {
      const box = el("div", "quiz");
      box.appendChild(el("div", "q", (ii + 1) + ". " + item.text));
      const fb = el("div", "feedback");
      config.categories.forEach((cat) => {
        const b = el("button", "opt", cat);
        b.style.display = "inline-block";
        b.style.width = "auto";
        b.style.marginRight = "0.4rem";
        b.onclick = () => {
          if (box.dataset.done) return;
          if (cat === item.answer) {
            b.classList.add("correct");
            fb.textContent = item.why || "Correct.";
            fb.style.color = "var(--good)";
            box.dataset.done = "1";
            if (--remaining === 0) {
              score.textContent = "✓ All sorted — you can tell the three apart.";
              score.style.color = "var(--good)";
            }
          } else {
            b.classList.add("wrong");
            fb.textContent = "Not that one — which stage produces this vector?";
            fb.style.color = "#c0392b";
          }
        };
        box.appendChild(b);
      });
      box.appendChild(fb);
      root.appendChild(box);
    });
    root.appendChild(score);
  }

  global.Quiz = { mcq: mcq, classify: classify };
})(window);
