/* Reusable quiz widget for NGS lessons.
   Markup:
   <div class="quiz" data-answer="1">
     <div class="q">Question text</div>
     <button class="opt">Option A</button>
     <button class="opt">Option B</button>   // index 1 == correct
     <div class="fb"></div>
   </div>
   data-answer is the 0-based index of the correct option.
   Optional per-option feedback via data-why on each button. */

document.addEventListener('click', function (e) {
  var btn = e.target.closest('.quiz button.opt');
  if (!btn) return;
  var quiz = btn.closest('.quiz');
  var opts = Array.prototype.slice.call(quiz.querySelectorAll('button.opt'));
  var answer = parseInt(quiz.getAttribute('data-answer'), 10);
  var chosen = opts.indexOf(btn);
  var fb = quiz.querySelector('.fb');

  opts.forEach(function (o, i) {
    o.classList.remove('correct', 'wrong');
    if (i === answer) o.classList.add('correct');
  });
  if (chosen !== answer) btn.classList.add('wrong');

  var correct = chosen === answer;
  var why = btn.getAttribute('data-why');
  fb.textContent = (correct ? '✓ ' : '✗ ') + (why || (correct ? 'Correct.' : 'Not quite — the highlighted answer is right.'));
  fb.className = 'fb ' + (correct ? 'good' : 'bad');
});
