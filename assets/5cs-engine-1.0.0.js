/* 5Cs scoring engine 1.0.0 — shared by every scorecard brand.
   Fixed here, never per brand: the five Cs and their order, 15 scored Yes/No questions (3 per C),
   equal weights, the bands and the result structure. Brand configs supply questions, copy, routing and colours.
   Per C: good answers / 3 -> 0, 33, 67 or 100. Total: good answers / 15 x 100, rounded (steps of about 6.67).
   Bands: Fragile 0-39, Exposed 40-69, Resilient 70-100. Reachable band edges: 33 -> 40 and 67 -> 73. */
(function () {
  var VERSION = '1.0.0';
  var CS = ['CONTAIN', 'COMMAND', 'CLOSE', 'CONFIRM', 'CONTROL'];
  var BANDS = [
    { key: 'Fragile', min: 0, max: 39 },
    { key: 'Exposed', min: 40, max: 69 },
    { key: 'Resilient', min: 70, max: 100 }
  ];

  function check(cfg) {
    if (!cfg || !cfg.questions || cfg.questions.length !== 15) throw new Error('5Cs: config needs exactly 15 scored questions');
    for (var c = 0; c < 5; c++) {
      if (cfg.questions.filter(function (q) { return q.c === c; }).length !== 3) throw new Error('5Cs: each C needs exactly 3 questions');
    }
  }

  function band(score) {
    for (var i = 0; i < BANDS.length; i++) if (score >= BANDS[i].min && score <= BANDS[i].max) return BANDS[i].key;
    return null;
  }

  /* answers: array of 15, each 1 (Yes), 0 (No) or null (unanswered). */
  function isGood(cfg, answers, k) {
    var v = answers[k];
    if (v === null || v === undefined) return false;
    return (cfg.questions[k].goodAnswer === 'No') ? v === 0 : v === 1;
  }

  function evaluate(cfg, answers) {
    check(cfg);
    var perC = CS.map(function (name, c) {
      var ks = [];
      cfg.questions.forEach(function (q, k) { if (q.c === c) ks.push(k); });
      var good = ks.filter(function (k) { return isGood(cfg, answers, k); }).length;
      return { c: c, name: name, good: good, score: Math.round(good / 3 * 100), gaps: ks.filter(function (k) { return !isGood(cfg, answers, k); }) };
    });
    var good = 0;
    cfg.questions.forEach(function (q, k) { if (isGood(cfg, answers, k)) good++; });
    var score = Math.round(good / 15 * 100);
    /* Weakest first; ties keep the 5Cs order. */
    var order = perC.slice().sort(function (a, b) { return a.score - b.score || a.c - b.c; }).map(function (p) { return p.c; });
    return {
      engineVersion: VERSION,
      good: good,
      score: score,
      band: band(score),
      perC: perC,
      order: order,
      weakest: perC[order[0]].score < 100 ? order[0] : null,
      strongest: order.slice().reverse().filter(function (c) { return perC[c].score === 100; }),
      gapCs: order.filter(function (c) { return perC[c].score < 100; })
    };
  }

  /* Exactly n actions tied to the lowest Cs: one failed question per C in weakest order, round robin,
     then topped up with each C's maintenance action. */
  function actions(cfg, result, n) {
    n = n || 3;
    var out = [], pools = result.order.map(function (c) { return result.perC[c].gaps.slice(); });
    while (out.length < n && pools.some(function (p) { return p.length; })) {
      pools.forEach(function (p) { if (p.length && out.length < n) out.push(cfg.questions[p.shift()].action); });
    }
    for (var i = 0; out.length < n && i < result.order.length; i++) out.push(cfg.cMaintain[result.order[i]]);
    return out;
  }

  window.FiveCs = { version: VERSION, cs: CS, bands: BANDS, band: band, evaluate: evaluate, actions: actions, isGood: isGood };
})();
