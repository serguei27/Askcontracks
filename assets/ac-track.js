/* Ask Contracks: campaign labels and conversion events. Sets no cookies and stores nothing in the browser. */
(function () {
  /* Stays off until an analytics account exists: paste its script URL here. */
  var ANALYTICS_SRC = '';
  var ANALYTICS_DOMAIN = 'askcontracks.com';
  var KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];

  var script = document.currentScript;
  var params = new URLSearchParams(location.search);
  var label = KEYS.map(function (k) { return params.get(k); }).filter(Boolean).join(' / ').slice(0, 200);
  window.acAttribution = label;

  if (ANALYTICS_SRC) {
    window.plausible = window.plausible || function () { (window.plausible.q = window.plausible.q || []).push(arguments); };
    var s = document.createElement('script');
    s.defer = true;
    s.src = ANALYTICS_SRC;
    s.setAttribute('data-domain', ANALYTICS_DOMAIN);
    document.head.appendChild(s);
  }

  /* props: brand, band, weakest_c, versions. Never personal data. */
  window.acTrack = function (name, props) {
    try { if (window.plausible) window.plausible(name, props ? { props: props } : undefined); } catch (e) {}
  };
  if (script && script.dataset.event) window.acTrack(script.dataset.event);

  if (!label) return;

  /* Carry the label to the next page, and onto the lead form. */
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a) return;
    var url = new URL(a.href, location.href);
    if (url.origin !== location.origin || (url.pathname === location.pathname && url.hash)) return;
    KEYS.forEach(function (k) { if (params.get(k) && !url.searchParams.get(k)) url.searchParams.set(k, params.get(k)); });
    a.href = url.href;
  });
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('form[name="ask-contracks"] input[name="source"]').forEach(function (i) {
      i.value = i.value + ' · ' + label;
    });
  });
})();
