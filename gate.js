const T = {
  fr: {
    tb_tag:'Événements · Local & International',
    tb_h:'Événements<span class="gate-sub">Local ou international</span>',
    tb_p:'Séminaires, teambuilding et galas — en local ou à l\'international.',
    tb_cta:'Explorer les événements',
    cv_tag:'Votre assistant personnel',
    cv_h:'Travel<br>Manager',
    cv_p:"Un contact dédié pour tous vos voyages d'affaires, incentives et événements.",
    cv_cta:'Découvrir le service'
  },
  en: {
    tb_tag:'Events · Local & International',
    tb_h:'Events<span class="gate-sub">Local or international</span>',
    tb_p:'Seminars, team building and galas — local or international.',
    tb_cta:'Explore events',
    cv_tag:'Your personal assistant',
    cv_h:'Travel<br>Manager',
    cv_p:'One dedicated contact for all your business travel, incentives and events.',
    cv_cta:'Discover service'
  }
};
let lang = 'fr';

function setLang(l) {
  lang = l;
  document.getElementById('glang-fr').classList.toggle('active', l === 'fr');
  document.getElementById('glang-en').classList.toggle('active', l === 'en');
  document.querySelectorAll('[data-i]').forEach(function(el) {
    var k = el.getAttribute('data-i');
    if (T[l][k] !== undefined) {
      if (k.endsWith('_h')) el.innerHTML = T[l][k];
      else el.textContent = T[l][k];
    }
  });
  sessionStorage.setItem('alchimia-lang', l);
}

function enterSite(url) {
  var gate = document.getElementById('gate');
  gate.classList.add('exiting');
  setTimeout(function() { window.location.href = url; }, 530);
}

document.addEventListener('DOMContentLoaded', function() {
  var saved = sessionStorage.getItem('alchimia-lang');
  if (saved === 'fr' || saved === 'en') setLang(saved);

  document.getElementById('panel-tb').addEventListener('click', function() { enterSite('teambuilding.html'); });
  document.getElementById('panel-cv').addEventListener('click', function() { enterSite('conciergerie.html'); });

  document.getElementById('glang-fr').addEventListener('click', function() { setLang('fr'); });
  document.getElementById('glang-en').addEventListener('click', function() { setLang('en'); });

  document.querySelectorAll('.gate-panel').forEach(function(p) {
    p.addEventListener('keydown', function(