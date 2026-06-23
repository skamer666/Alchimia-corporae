/* programmes-immersifs.js */
const TB=[
  {
    id:'centrale',cat:'codir',emoji:'⚡',bg:'#080e1a',img:'img_centrale_1.png',
    name:{fr:'OPÉRATION CENTRALE',en:'OPERATION CENTRALE'},
    type:{fr:'Crise CODIR',en:'CODIR Crisis'},
    kpi:{fr:'−40% décision · +35% exécution · NPS 72–89',en:'−40% decision time · +35% execution · NPS 72–89'},
    pb:{
      fr:'Votre CODIR croit bien fonctionner — jusqu\'à ce que la pression révèle les silences, les positions camouflées et les décisions jamais vraiment prises.',
      en:'Your CODIR believes it functions well — until real pressure exposes the silences, hidden positions and decisions never truly made.'
    },
    sol:{
      fr:'Une simulation de crise authentique, filmée et débriefée, qui rend visibles les dynamiques qui freinent l\'exécution — et crée le déclic collectif.',
      en:'An authentic, filmed crisis simulation that makes visible the dynamics holding back execution — and creates the collective turning point.'
    }
  },
  {
    id:'frontiere',cat:'fusion',emoji:'🌙',bg:'#12091e',img:'img_frontiere_0.png',
    name:{fr:'OPÉRATION FRONTIÈRE',en:'OPERATION FRONTIÈRE'},
    type:{fr:'Intégration d\'équipes',en:'Team Integration'},
    kpi:{fr:'−52% méfiance · +340% interactions · NPS 78–92',en:'−52% mistrust · +340% interactions · NPS 78–92'},
    pb:{
      fr:'Deux équipes coexistent sans se faire confiance. Les séminaires de fusion n\'ont rien changé. Les silos résistent.',
      en:'Two teams coexist without trust. Post-merger seminars changed nothing. Silos persist.'
    },
    sol:{
      fr:'Une nuit de défi commun dans un environnement inédit, conçue pour créer le lien de tranchée là où tous les autres formats ont échoué.',
      en:'A night of shared challenge in an unfamiliar environment, designed to create the foxhole bond where every other format has failed.'
    }
  },
  {
    id:'miroir',cat:'commercial',emoji:'🎭',bg:'#0a1a16',img:'img_miroir_0.png',
    name:{fr:'OPÉRATION MIROIR',en:'OPERATION MIROIR'},
    type:{fr:'Performance commerciale',en:'Sales Performance'},
    kpi:{fr:'+23–31% conversion · 87% rétention · NPS 81–94',en:'+23–31% conversion · 87% retention · NPS 81–94'},
    pb:{
      fr:'Vos commerciaux répètent les mêmes erreurs face aux clients difficiles — sans jamais les voir. Les formations classiques n\'y changent rien.',
      en:'Your salespeople repeat the same mistakes with difficult clients — without ever seeing them. Classical training changes nothing.'
    },
    sol:{
      fr:'Des acteurs professionnels jouent vos clients pendant une journée entière. Tout est filmé. Le lendemain, chacun regarde qui il est vraiment en rendez-vous.',
      en:'Professional actors play your clients for an entire day. Everything filmed. The next morning, each person watches who they really are in a meeting.'
    }
  },
  {
    id:'silence',cat:'negociation',emoji:'🎯',bg:'#0d0d1a',img:'img_silence_0.png',
    name:{fr:'OPÉRATION SILENCE',en:'OPERATION SILENCE'},
    type:{fr:'Négociation GIGN',en:'GIGN Negotiation'},
    kpi:{fr:'+19% valeur accords · −43% conflits · NPS 85–94',en:'+19% deal value · −43% conflicts · NPS 85–94'},
    pb:{
      fr:'Sous pression, vos équipes argumentent, cèdent trop vite ou se bloquent. Aucun cadre de négociation ne résiste quand l\'amygdale prend le contrôle.',
      en:'Under pressure, your teams argue, concede too fast or freeze. No negotiation framework survives when the amygdala takes over.'
    },
    sol:{
      fr:'Les techniques exactes des négociateurs du GIGN, transmises par les maîtres, apprises sous stress réel avec des acteurs jouant des profils impossibles.',
      en:'The exact techniques of GIGN negotiators, taught by the masters, learned under real stress with actors playing impossible profiles.'
    }
  }
];

const T={
fr:{
n_back:'← Événements',n_conc:'Travel Manager',n_contact:'Contact',n_cta:'Demander un devis',
h_badge:'Teambuilding & Formations · Belgique & International',
h_h1:'Teambuilding immersif<br><span>& formations.</span>',
h_sub:'4 programmes OPÉRATION ancrés dans les neurosciences + 6 modules de formation certifiables. Conçus sur mesure pour votre équipe.',
h_cta1:'Voir les programmes',h_cta2:'Voir les formations',
h_s1:'Ancrage comportemental 2–3× supérieur à la formation classique*',
h_s2:'Mémorisation par l\'expérience vécue*',
h_s3:'Protocole neurosciences DOSE activé',
h_src:'*Sources : Bjork & Bjork (2011), Roediger & Karpicke (2006), Schacter — neurosciences de l\'apprentissage',
nr_label:'La science derrière l\'expérience',
nr_h2:'Pourquoi l\'expérience<br>crée un apprentissage durable',
nr_p:'Nos programmes activent les 4 hormones clés de la performance collective — le protocole DOSE.',
d_n:'Dopamine',d_d:'Motivation et récompense. Activée par les défis progressifs et les succès collectifs.',
o_n:'Ocytocine',o_d:'Lien social et confiance. Générée par les expériences partagées intenses.',
s_n:'Sérotonine',s_d:'Reconnaissance et statut positif. Renforcée par la valorisation des contributions.',
e_n:'Endorphines',e_d:'Dépassement et résilience. Libérées lors de l\'effort collectif.',
nr_stat_lbl:'meilleure rétention en apprentissage expérientiel actif vs. passif, selon les recherches en mémoire épisodique',
nr_source:'Bjork & Bjork (2011) · Roediger & Karpicke (2006) · Schacter — mémoire épisodique',
nf1:'La mémoire épisodique (souvenirs d\'expériences) est la plus résistante à l\'oubli sur le long terme.',
nf2:'L\'émotion renforce la consolidation mémorielle via l\'amygdale — plus l\'expérience est intense, plus l\'ancrage est fort.',
nf3:'Le débrief post-expérience double l\'effet de transfert vers les comportements professionnels réels.',
tb_label:'Programmes immersifs',
tb_h2:'4 programmes OPÉRATION',
tb_sub:'Chacun conçu autour d\'un problème précis. Chacun déployé sur mesure pour votre équipe.',
tbf_all:'Tous',tbf_codir:'CODIR & Crise',tbf_fusion:'Post-fusion',tbf_com:'Commercial',tbf_neg:'Négociation',
tb_pb_lbl:'Le problème',tb_kpi_lbl:'ROI documenté',
tb_example:'Exemple — personnalisé pour chaque organisation',
tb_discover:'Voir le programme complet →',
fo_label:'Formation & Développement',
fo_h2:'Des formations qui transforment durablement',
fo_p:'6 modules ancrés dans les neurosciences, finançables via les fonds sectoriels belges.',
fo1:'Leadership & Management',fo1p:'Posture, gestion d\'équipe multiculturelle, décision sous pression.',
fo2:'Intelligence Émotionnelle',fo2p:'Empathie, régulation, communication assertive.',
fo3:'Gestion du Stress & Résilience',fo3p:'Techniques neuroscientifiques pour performer sous pression.',
fo4:'Communication & Influence',fo4p:'Prise de parole, négociation, communication interculturelle.',
fo5:'Dynamique d\'Équipe',fo5p:'Cohésion, rôles, résolution de conflits.',
fo6:'Créativité & Innovation',fo6p:'Design thinking, brainstorming avancé, pilotage de l\'innovation.',
fcta_h:'Éligible aux fonds sectoriels belges',
fcta_p:'Cefora (CP 200), Fonds 4S, Constructiv, chèques-formation wallons. Jusqu\'à 50% de financement.',
fcta_btn:'Vérifier mon éligibilité',
ct_label:'Parlons de votre projet',ct_h2:'Prêt à transformer votre équipe ?',
ct_p:'Décrivez-nous vos objectifs. Nous revenons sous 24h avec une proposition adaptée.',
ct_note:'💡 Première consultation gratuite de 30 min. Estimation sans engagement.',
cf_send:'Envoyer ma demande',
ft_desc:'Transformer les équipes par l\'expérience. Ancré dans les neurosciences.',
ft_copy:'© 2026 Alchimia Corporate SRL — Belgique.',ft_eco_lbl:'Engagement éco-responsable'
},
en:{
n_back:'← Events',n_conc:'Travel Manager',n_contact:'Contact',n_cta:'Request a quote',
h_badge:'Team Building & Training · Belgium & International',
h_h1:'Immersive team building<br><span>& training.</span>',
h_sub:'4 OPÉRATION programmes rooted in neuroscience + 6 certifiable training modules. Entirely built to order.',
h_cta1:'See programmes',h_cta2:'See training',
h_s1:'Behavioural anchoring 2–3× greater than classical training*',
h_s2:'Retention through active experience*',
h_s3:'Neuroscience DOSE protocol',
h_src:'*Sources: Bjork & Bjork (2011), Roediger & Karpicke (2006), Schacter — learning neuroscience',
nr_label:'The science behind the experience',
nr_h2:'Why experience creates<br>lasting learning',
nr_p:'Our programmes activate the 4 key hormones of collective performance — the DOSE protocol.',
d_n:'Dopamine',d_d:'Motivation and reward. Activated by progressive challenges and collective successes.',
o_n:'Oxytocin',o_d:'Social bonding and trust. Generated by shared intense experiences.',
s_n:'Serotonin',s_d:'Recognition and positive status. Reinforced by valuing contributions.',
e_n:'Endorphins',e_d:'Self-surpassing and resilience. Released through collective effort.',
nr_stat_lbl:'better retention in active experiential learning vs. passive formats, based on episodic memory research',
nr_source:'Bjork & Bjork (2011) · Roediger & Karpicke (2006) · Schacter — episodic memory',
nf1:'Episodic memory (memories of experiences) is the most resilient to forgetting over time.',
nf2:'Emotion reinforces memory consolidation via the amygdala — the more intense the experience, the stronger the anchoring.',
nf3:'Post-experience debrief doubles the transfer effect to real professional behaviours.',
tb_label:'Immersive programmes',
tb_h2:'4 OPÉRATION programmes',
tb_sub:'Each built around a specific problem. Each deployed entirely to order for your team.',
tbf_all:'All',tbf_codir:'CODIR & Crisis',tbf_fusion:'Post-merger',tbf_com:'Commercial',tbf_neg:'Negotiation',
tb_pb_lbl:'The challenge',tb_kpi_lbl:'Documented ROI',
tb_example:'Example — tailored for each organisation',
tb_discover:'See full programme →',
fo_label:'Training & Development',
fo_h2:'Training that transforms durably',
fo_p:'6 modules rooted in neuroscience, fundable via Belgian sectoral funds.',
fo1:'Leadership & Management',fo1p:'Posture, multicultural team management, decision-making under pressure.',
fo2:'Emotional Intelligence',fo2p:'Empathy, regulation, assertive communication.',
fo3:'Stress Management & Resilience',fo3p:'Neuroscience techniques to perform under pressure.',
fo4:'Communication & Influence',fo4p:'Public speaking, negotiation, intercultural communication.',
fo5:'Team Dynamics',fo5p:'Cohesion, roles, conflict resolution.',
fo6:'Creativity & Innovation',fo6p:'Design thinking, advanced brainstorming, innovation management.',
fcta_h:'Eligible for Belgian sectoral funds',
fcta_p:'Cefora (CP 200), Fonds 4S, Constructiv, Walloon training vouchers. Up to 50% funding.',
fcta_btn:'Check my eligibility',
ct_label:'Discuss your project',ct_h2:'Ready to transform your team?',
ct_p:'Tell us your objectives. We respond within 24h with a tailored proposal.',
ct_note:'💡 Free 30-min consultation. Budget estimate with no commitment.',
cf_send:'Send my enquiry',
ft_desc:'Transforming teams through experience. Rooted in neuroscience.',
ft_copy:'© 2026 Alchimia Corporate SRL — Belgium.',ft_eco_lbl:'Eco-responsible commitment'
}};

let lang='fr',filter='all';

function init(){
  const saved=sessionStorage.getItem('alchimia-lang');
  if(saved&&(saved==='fr'||saved==='en'))setLang(saved);
  renderTB();applyLang();initScrollAnim();initNav();
  setTimeout(initCountUp,720);
  document.getElementById('btn-fr').addEventListener('click',function(){setLang('fr');});
  document.getElementById('btn-en').addEventListener('click',function(){setLang('en');});
  document.getElementById('ham').addEventListener('click',toggleMob);
  document.querySelectorAll('#mob a').forEach(function(a){a.addEventListener('click',toggleMob);});
  document.querySelectorAll('.tb-f').forEach(function(btn){
    btn.addEventListener('click',function(){filterTB(btn,btn.getAttribute('data-cat'));});
  });
}

function initCountUp(){
  document.querySelectorAll('.hero-neuro-item .n').forEach(el=>{
    const text=(el.childNodes[0]||{}).textContent;
    if(!text)return;
    const target=parseInt(text.trim(),10);
    if(isNaN(target))return;
    const em=el.querySelector('em');
    const suffix=em?em.outerHTML:'';
    let startTime=null;
    const duration=1200;
    const ease=t=>1-Math.pow(1-t,4);
    const step=ts=>{
      if(!startTime)startTime=ts;
      const p=Math.min((ts-startTime)/duration,1);
      el.innerHTML=Math.round(ease(p)*target)+suffix;
      if(p<1)requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}

function setLang(l){
  lang=l;
  document.getElementById('btn-fr').classList.toggle('active',l==='fr');
  document.getElementById('btn-en').classList.toggle('active',l==='en');
  applyLang();renderTB();
  sessionStorage.setItem('alchimia-lang',l);
}

function applyLang(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k=el.getAttribute('data-i18n');
    if(T[lang][k]!==undefined){
      const html_keys=['h_h1','nr_h2'];
      if(html_keys.includes(k))el.innerHTML=T[lang][k];
      else el.textContent=T[lang][k];
    }
  });
}

function renderTB(){
  const grid=document.getElementById('tb-grid');
  if(!grid)return;
  const items=filter==='all'?TB:TB.filter(d=>d.cat===filter);
  grid.innerHTML=items.map(d=>`
    <a href="programme.html?id=${d.id}" class="tb-card">
      <div class="tb-img" style="background-image:url(${d.img})">
        <span class="tb-type-over"><span class="chip chip-navy">${d.type[lang]}</span></span>
        <span class="tb-emoji-img">${d.emoji}</span>
      </div>
      <div class="tb-body">
        <h3 class="tb-name">${d.name[lang]}</h3>
        <div class="tb-pb-block">
          <span class="tb-pb-lbl">${T[lang].tb_pb_lbl}</span>
          <p class="tb-pb-text">${d.pb[lang]}</p>
        </div>
        <div class="tb-kpi-block">
          <span class="tb-kpi-lbl">${T[lang].tb_kpi_lbl}</span>
          <p class="tb-kpi-text">${d.kpi[lang]}</p>
        </div>
        <div class="tb-card-footer">
          <span class="tb-example">${T[lang].tb_example}</span>
          <span class="tb-discover">${T[lang].tb_discover}</span>
        </div>
      </div>
    </a>`).join('');
}

function filterTB(btn,cat){
  filter=cat;
  document.querySelectorAll('.tb-f').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
  renderTB();
}

function initScrollAnim(){
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target);}});
  },{threshold:.1});
  document.querySelectorAll('.fade').forEach(el=>obs.observe(el));
}

function initNav(){
  window.addEventListener('scroll',function(){
    document.getElementById('nav').classList.toggle('scrolled',window.scrollY>30);
  });
}

function toggleMob(){document.getElementById('mob').classList.toggle('open');}

document.addEventListener('DOMContentLoaded',init);
