/* Reusable SBS cycle-stepper for NGS lessons.
   Shows sequencing-by-synthesis one cycle at a time, using Illumina 2-channel encoding:
     A = red + green (both channels lit)
     C = red only
     T = green only
     G = neither ("dark" base — inferred from absence of signal)

   Markup:
     <div class="sbs" data-template="ACGTGGAC"></div>
   The stepper builds its own controls and readout. */

(function () {
  var CHAN = {
    A: { red: true,  green: true,  css: 'sbs-A' },
    C: { red: true,  green: false, css: 'sbs-C' },
    T: { red: false, green: true,  css: 'sbs-T' },
    G: { red: false, green: false, css: 'sbs-G' }
  };

  function build(el) {
    var template = (el.getAttribute('data-template') || 'ACGTGGAC').toUpperCase();
    var cycle = 0;

    el.innerHTML =
      '<div class="sbs-strand" aria-label="synthesized read"></div>' +
      '<div class="sbs-readout"><span class="sbs-cyclelabel">Cycle 0 — no bases read yet</span>' +
      '<span class="sbs-channels"><span class="sbs-chan sbs-red">RED</span>' +
      '<span class="sbs-chan sbs-green">GREEN</span></span></div>' +
      '<div class="sbs-controls">' +
      '<button class="sbs-btn sbs-next">Add next base (1 cycle)</button>' +
      '<button class="sbs-btn sbs-reset">Reset</button></div>';

    var strand = el.querySelector('.sbs-strand');
    var label = el.querySelector('.sbs-cyclelabel');
    var redEl = el.querySelector('.sbs-red');
    var greenEl = el.querySelector('.sbs-green');

    function render() {
      strand.innerHTML = '';
      for (var i = 0; i < cycle; i++) {
        var b = template[i];
        var box = document.createElement('span');
        box.className = 'sbs-base ' + CHAN[b].css;
        box.textContent = b;
        strand.appendChild(box);
      }
      if (cycle === 0) {
        label.textContent = 'Cycle 0 — no bases read yet';
        redEl.classList.remove('lit'); greenEl.classList.remove('lit');
      } else if (cycle > template.length) {
        label.textContent = 'Read complete — ' + template.length + ' cycles, ' + template.length + ' bases';
        redEl.classList.remove('lit'); greenEl.classList.remove('lit');
      } else {
        var base = template[cycle - 1];
        var c = CHAN[base];
        redEl.classList.toggle('lit', c.red);
        greenEl.classList.toggle('lit', c.green);
        var sig = c.red && c.green ? 'both channels' : c.red ? 'red only' : c.green ? 'green only' : 'neither channel (dark)';
        label.textContent = 'Cycle ' + cycle + ' — ' + sig + ' → called ' + base;
      }
    }

    el.querySelector('.sbs-next').addEventListener('click', function () {
      if (cycle <= template.length) cycle++;
      render();
    });
    el.querySelector('.sbs-reset').addEventListener('click', function () {
      cycle = 0; render();
    });
    render();
  }

  document.addEventListener('DOMContentLoaded', function () {
    Array.prototype.forEach.call(document.querySelectorAll('.sbs'), build);
  });
})();
