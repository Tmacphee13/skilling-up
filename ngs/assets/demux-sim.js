/* Reusable demux bench for NGS lessons.
   Renders a sample sheet + a set of observed index pairs. The learner classifies each
   read (which sample, or Undetermined); the widget grades using the real demux rule:
   BOTH i7 and i5 must be within the mismatch tolerance of exactly one sample sheet entry.

   Markup:
     <div class="demux" data-mismatch="1"
          data-samples='[{"name":"S1","i7":"AAAACCCC","i5":"GGGGTTTT"}, ...]'
          data-reads='[{"i7":"AAAACCCC","i5":"GGGGTTTT"}, ...]'></div>
*/
(function () {
  function hamming(a, b) {
    if (!a || !b || a.length !== b.length) return Infinity;
    var d = 0;
    for (var i = 0; i < a.length; i++) if (a[i] !== b[i]) d++;
    return d;
  }
  function closest(idx, key, samples) {
    var best = { name: null, dist: Infinity };
    samples.forEach(function (s) {
      var d = hamming(idx, s[key]);
      if (d < best.dist) best = { name: s.name, dist: d };
    });
    return best;
  }
  function correctAnswer(read, samples, mm) {
    var hits = samples.filter(function (s) {
      return hamming(read.i7, s.i7) <= mm && hamming(read.i5, s.i5) <= mm;
    });
    return hits.length === 1 ? hits[0].name : 'Undetermined';
  }
  function explain(read, samples, mm, answer) {
    var i7 = closest(read.i7, 'i7', samples);
    var i5 = closest(read.i5, 'i5', samples);
    var i7txt = 'i7 closest to ' + i7.name + ' (' + i7.dist + ' mismatch' + (i7.dist === 1 ? '' : 'es') + ')';
    var i5txt = 'i5 closest to ' + i5.name + ' (' + i5.dist + ' mismatch' + (i5.dist === 1 ? '' : 'es') + ')';
    if (answer !== 'Undetermined') {
      return i7txt + ', ' + i5txt + ' — both within ' + mm + ', same sample → ' + answer + '.';
    }
    if (i7.name !== i5.name && i7.dist <= mm && i5.dist <= mm) {
      return i7txt + ' but ' + i5txt + ' — that i7+i5 pair is not a real sample (index hop). UDI sends it to Undetermined.';
    }
    return i7txt + ', ' + i5txt + ' — an index exceeds the ' + mm + '-mismatch limit → Undetermined.';
  }

  function build(el) {
    var mm = parseInt(el.getAttribute('data-mismatch') || '1', 10);
    var samples = JSON.parse(el.getAttribute('data-samples'));
    var reads = JSON.parse(el.getAttribute('data-reads'));

    var rows = samples.map(function (s) {
      return '<tr><td class="dx-name">' + s.name + '</td><td class="mono">' + s.i7 + '</td><td class="mono">' + s.i5 + '</td></tr>';
    }).join('');
    var sheet = '<div class="dx-sheet"><div class="dx-caption">Sample sheet · mismatch tolerance = ' + mm +
      ' per index</div><table><thead><tr><th>Sample</th><th>i7</th><th>i5</th></tr></thead><tbody>' +
      rows + '</tbody></table></div>';

    var opts = samples.map(function (s) { return s.name; }).concat(['Undetermined']);
    var readsHtml = reads.map(function (r, ri) {
      var btns = opts.map(function (o) {
        return '<button class="dx-opt" data-read="' + ri + '" data-choice="' + o + '">' + o + '</button>';
      }).join('');
      return '<div class="dx-read" data-read="' + ri + '">' +
        '<div class="dx-obs">Read ' + (ri + 1) + ' — observed <span class="mono">i7=' + r.i7 +
        '</span> <span class="mono">i5=' + r.i5 + '</span></div>' +
        '<div class="dx-opts">' + btns + '</div><div class="dx-fb fb"></div></div>';
    }).join('');

    el.innerHTML = sheet + '<div class="dx-caption">Assign each read:</div>' + readsHtml;

    el.addEventListener('click', function (e) {
      var btn = e.target.closest('.dx-opt');
      if (!btn) return;
      var ri = parseInt(btn.getAttribute('data-read'), 10);
      var choice = btn.getAttribute('data-choice');
      var read = reads[ri];
      var answer = correctAnswer(read, samples, mm);
      var wrap = el.querySelector('.dx-read[data-read="' + ri + '"]');
      wrap.querySelectorAll('.dx-opt').forEach(function (b) {
        b.classList.remove('correct', 'wrong');
        if (b.getAttribute('data-choice') === answer) b.classList.add('correct');
      });
      var right = choice === answer;
      if (!right) btn.classList.add('wrong');
      var fb = wrap.querySelector('.dx-fb');
      fb.textContent = (right ? '✓ ' : '✗ ') + explain(read, samples, mm, answer);
      fb.className = 'dx-fb fb ' + (right ? 'good' : 'bad');
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    Array.prototype.forEach.call(document.querySelectorAll('.demux'), build);
  });
})();
