/* ── DATA ── */
const TB=[
  {
    id:'centrale',
    cat:'codir',
    emoji:'⚡',
    bg:'#080e1a',
    img:'img_centrale_1.png',
    name:{fr:'OPÉRATION CENTRALE',en:'OPERATION CENTRALE'},
    type:{fr:'Crise CODIR',en:'CODIR Crisis'},
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
    id:'frontiere',
    cat:'fusion',
    emoji:'🌙',
    bg:'#12091e',
    img:'img_frontiere_0.png',
    name:{fr:'OPÉRATION FRONTIÈRE',en:'OPERATION FRONTIÈRE'},
    type:{fr:'Intégration d\'équipes',en:'Team Integration'},
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
    id:'miroir',
    cat:'commercial',
    emoji:'🎭',
    bg:'#0a1a16',
    img:'img_miroir_0.png',
    name:{fr:'OPÉRATION MIROIR',en:'OPERATION MIROIR'},
    type:{fr:'Performance commerciale',en:'Sales Performance'},
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
    id:'silence',
    cat:'negociation',
    emoji:'🎯',
    bg:'#0d0d1a',
    img:'img_silence_0.png',
    name:{fr:'OPÉRATION SILENCE',en:'OPERATION SILENCE'},
    type:{fr:'Négociation GIGN',en:'GIGN Negotiation'},
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

/* ── TRANSLATIONS ── */
const T={fr:{n_meth:'Méthode',n_neuro:'Neurosciences',n_prog:'Programmes',n_form:'Formation',n_conc:'Conciergerie',n_contact:'Contact',n_cta:'Demander un devis',h_badge:'Teambuilding B2B · Belgique & International',h_h1:'Des expériences qui<br><span>transforment vraiment.</span>',h_sub:'Programmes de teambuilding immersif et formations ancrées dans les neurosciences. Conçus sur mesure pour votre équipe.',h_cta1:'Voir les programmes',h_cta2:'Prendre contact',h_s1:'Mémorisation par l\'expérience vécue*',h_s2:'Ancrage supérieur vs. formation classique*',h_s3:'Protocole neurosciences activé',h_src:'*Sources : recherches en neurosciences de l\'apprentissage (Edgar Dale, Bjork, Schacter)',m_label:'Notre approche',m_h2:'Le Cycle de Transformation Alchimia',m_p:'Chaque programme suit un protocole rigoureux en 5 étapes, conçu pour que le changement s\'ancre dans la durée.',m_why_label:'Pourquoi ça fonctionne',m_why:'Le cerveau retient <strong style="color:var(--navy)">ce qu\'il vit intensément</strong>. Nos expériences activent la mémoire épisodique — la plus résistante à l\'oubli — pour un ancrage qui dure.',s1_t:'Diagnostic',s1_h:'Révélation',s1_p:'Analyse des besoins, entretiens, cartographie des dynamiques d\'équipe.',s2_t:'Design',s2_h:'Co-construction',s2_p:'Programme sur mesure aligné sur vos objectifs stratégiques.',s3_t:'Action',s3_h:'Immersion',s3_p:'Vécu intense, émotions authentiques, mécanismes neurologiques activés.',s4_t:'Analyse',s4_h:'Décodage',s4_p:'Retour d\'expérience collectif, ancrage cognitif, transfert vers le quotidien.',s5_t:'Suivi',s5_h:'Impact',s5_p:'Mesure à 30/60/90 jours. Rapport remis à votre direction.',nr_label:'La science derrière l\'expérience',nr_h2:'Pourquoi l\'expérience<br>crée un apprentissage durable',nr_p:'Nos programmes activent les 4 hormones clés de la performance collective — le protocole DOSE.',d_n:'Dopamine',d_d:'Motivation et récompense. Activée par les défis progressifs et les succès collectifs.',o_n:'Ocytocine',o_d:'Lien social et confiance. Générée par les expériences partagées intenses.',s_n:'Sérotonine',s_d:'Reconnaissance et statut positif. Renforcée par la valorisation des contributions.',e_n:'Endorphines',e_d:'Dépassement et résilience. Libérées lors de l\'effort collectif.',nr_stat_lbl:'des informations sont retenues quand elles sont vécues activement, contre 10% en lecture passive',nr_source:'Cône d\'apprentissage — Edgar Dale / recherches en neurosciences cognitives',nf1:'La mémoire épisodique (souvenirs d\'expériences) est la plus résistante à l\'oubli sur le long terme.',nf2:'L\'émotion renforce la consolidation mémorielle via l\'amygdale — plus l\'expérience est intense, plus l\'ancrage est fort.',nf3:'Le débrief post-expérience double l\'effet de transfert vers les comportements professionnels réels.',tb_label:'Programmes',tb_h2:'Teambuilding immersif',tb_sub:'4 programmes d\'exception, chacun conçu sur mesure pour votre équipe.',tbf_all:'Tous',tbf_codir:'CODIR & Crise',tbf_fusion:'Post-fusion',tbf_com:'Commercial',tbf_neg:'Négociation',tb_pb_lbl:'Le problème',tb_sol_lbl:'La solution',tb_discover:'Découvrir le programme',tb_price:'Prix groupe',tb_group:'Groupe',tb_dur:'Durée',tb_target:'Profil',fo_label:'Formation & Développement',fo_h2:'Des formations qui transforment durablement',fo1:'Leadership & Management',fo1p:'Posture, gestion d\'équipe multiculturelle, décision sous pression.',fo2:'Intelligence Émotionnelle',fo2p:'Empathie, régulation, communication assertive.',fo3:'Gestion du Stress & Résilience',fo3p:'Techniques neuroscientifiques pour performer sous pression.',fo4:'Communication & Influence',fo4p:'Prise de parole, négociation, communication interculturelle.',fo5:'Dynamique d\'Équipe',fo5p:'Cohésion, rôles, résolution de conflits.',fo6:'Créativité & Innovation',fo6p:'Design thinking, brainstorming avancé, pilotage de l\'innovation.',fcta_h:'Éligible aux fonds sectoriels belges',fcta_p:'Cefora (CP 200), Fonds 4S, Constructiv, chèques-formation wallons. Jusqu\'à 50% de financement.',fcta_btn:'Vérifier mon éligibilité',ec_label:'Notre engagement',ec_h2:'Éco-responsabilité',ec_p:'La performance ne se fait pas au détriment de la planète.',ec1:'Bilan carbone fourni',ec1p:'Chaque événement : calcul de l\'empreinte carbone remis avec le compte-rendu.',ec2:'Prestataires locaux privilégiés',ec2p:'Priorité aux acteurs locaux et régionaux.',ec3:'Train recommandé ≤ 3h',ec3p:'Le train est systématiquement proposé pour les déplacements européens.',ec4:'Compensation carbone',ec4p:'Émissions résiduelles compensées via projets certifiés Gold Standard.',ec_grade:'Engagement éco-responsabilité Alchimia Corporate',ec_box_p:'Module d\'audit éco intégré dans nos programmes — vos équipes repartent avec des actions concrètes.',ec_cta:'Demander un audit éco',ct_label:'Parlons de votre projet',ct_h2:'Prêt à transformer votre équipe ?',ct_p:'Décrivez-nous vos objectifs. Nous revenons sous 24h avec une proposition adaptée.',ct_note:'💡 Première consultation gratuite de 30 min. Estimation sans engagement.',cf1:'Prénom',cf2:'Nom',cf3:'Entreprise',cf4:'Fonction',cf5:'Email professionnel',cf6:'Intérêt principal',cf6_0:'Choisir...',cf6_1:'Teambuilding immersif',cf6_2:'Formation & développement',cf6_3:'Audit éco-responsabilité',cf8:'Votre projet',cf_send:'Envoyer ma demande',ft_desc:'Transformer les équipes par l\'expérience. Ancré dans les neurosciences.',ft_tb_head:'Teambuilding',ft_prog:'Programmes',ft_meth:'La méthode',ft_form:'Formation',ft_nr:'Neurosciences',ft_other:'Autres services',ft_conc:'Conciergerie',ft_eco:'Éco-responsabilité',ft_ct:'Contact',ft_home:'Accueil',ft_leg:'Légal',ft_priv:'Confidentialité',ft_ment:'Mentions légales',ft_cgv:'CGV',ft_copy:'© 2026 Alchimia Corporate SRL — Belgique.',ft_eco_lbl:'Engagement éco-responsable'},
en:{n_meth:'Method',n_neuro:'Neuroscience',n_prog:'Programmes',n_form:'Training',n_conc:'Concierge',n_contact:'Contact',n_cta:'Request a quote',h_badge:'B2B Team Building · Belgium & International',h_h1:'Experiences that<br><span>truly transform.</span>',h_sub:'Immersive team building programmes and training rooted in neuroscience. Tailored to your team.',h_cta1:'See programmes',h_cta2:'Get in touch',h_s1:'Retention through active experience*',h_s2:'Greater anchoring vs. classic training*',h_s3:'Neuroscience DOSE protocol',h_src:'*Sources: learning neuroscience research (Edgar Dale, Bjork, Schacter)',m_label:'Our approach',m_h2:'The Alchimia Transformation Cycle',m_p:'Every programme follows a rigorous 5-step protocol, designed so change lasts — not just on the day.',m_why_label:'Why it works',m_why:'The brain retains <strong style="color:var(--navy)">what it lives intensely</strong>. Our experiences activate episodic memory — the most resilient to forgetting — for lasting change.',s1_t:'Diagnosis',s1_h:'Revelation',s1_p:'Needs analysis, interviews, mapping team dynamics.',s2_t:'Design',s2_h:'Co-creation',s2_p:'Tailor-made programme aligned with your strategic objectives.',s3_t:'Action',s3_h:'Immersion',s3_p:'Intense experience, authentic emotions, neurological mechanisms activated.',s4_t:'Analysis',s4_h:'Decoding',s4_p:'Collective debrief, cognitive anchoring, transfer to daily work.',s5_t:'Follow-up',s5_h:'Impact',s5_p:'Measured at 30/60/90 days. Report delivered to management.',nr_label:'The science behind the experience',nr_h2:'Why experience creates<br>lasting learning',nr_p:'Our programmes activate the 4 key hormones of collective performance — the DOSE protocol.',d_n:'Dopamine',d_d:'Motivation and reward. Activated by progressive challenges and collective successes.',o_n:'Oxytocin',o_d:'Social bonding and trust. Generated by shared intense experiences.',s_n:'Serotonin',s_d:'Recognition and positive status. Reinforced by valuing contributions.',e_n:'Endorphins',e_d:'Self-surpassing and resilience. Released through collective effort.',nr_stat_lbl:'of information is retained when actively experienced, versus 10% from passive reading',nr_source:'Learning Cone — Edgar Dale / cognitive neuroscience research',nf1:'Episodic memory (memories of experiences) is the most resilient to forgetting over time.',nf2:'Emotion reinforces memory consolidation via the amygdala — the more intense the experience, the stronger the anchoring.',nf3:'Post-experience debrief doubles the transfer effect to real professional behaviours.',tb_label:'Programmes',tb_h2:'Immersive team building',tb_sub:'4 exceptional programmes, each built entirely to order.',tbf_all:'All',tbf_codir:'CODIR & Crisis',tbf_fusion:'Post-merger',tbf_com:'Commercial',tbf_neg:'Negotiation',tb_pb_lbl:'The challenge',tb_sol_lbl:'The approach',tb_discover:'Discover the programme',tb_price:'Group price',tb_group:'Group',tb_dur:'Duration',tb_target:'Profile',fo_label:'Training & Development',fo_h2:'Training that transforms durably',fo1:'Leadership & Management',fo1p:'Posture, multicultural team management, decision-making under pressure.',fo2:'Emotional Intelligence',fo2p:'Empathy, regulation, assertive communication.',fo3:'Stress Management & Resilience',fo3p:'Neuroscience techniques to perform under pressure.',fo4:'Communication & Influence',fo4p:'Public speaking, negotiation, intercultural communication.',fo5:'Team Dynamics',fo5p:'Cohesion, roles, conflict resolution.',fo6:'Creativity & Innovation',fo6p:'Design thinking, advanced brainstorming, innovation management.',fcta_h:'Eligible for Belgian sectoral funds',fcta_p:'Cefora (CP 200), Fonds 4S, Constructiv, Walloon training vouchers. Up to 50% funding.',fcta_btn:'Check my eligibility',ec_label:'Our commitment',ec_h2:'Sustainability',ec_p:'Performance should not come at the expense of the planet.',ec1:'Carbon footprint provided',ec1p:'Every event: carbon footprint calculation delivered with the summary.',ec2:'Local suppliers first',ec2p:'Priority to local and regional providers for every event.',ec3:'Train recommended ≤ 3h',ec3p:'For European travel, the train is systematically proposed first.',ec4:'Carbon offsetting',ec4p:'Residual emissions offset through Gold Standard certified projects.',ec_grade:'Alchimia Corporate sustainability commitment',ec_box_p:'Eco audit module integrated in our programmes — teams leave with concrete actions.',ec_cta:'Request an eco audit',ct_label:'Discuss your project',ct_h2:'Ready to transform your team?',ct_p:'Tell us your objectives. We respond within 24h with a tailored proposal.',ct_note:'💡 Free 30-min consultation. Budget estimate with no commitment.',cf1:'First name',cf2:'Last name',cf3:'Company',cf4:'Job title',cf5:'Business email',cf6:'Main interest',cf6_0:'Choose...',cf6_1:'Immersive team building',cf6_2:'Training & development',cf6_3:'Eco-responsibility audit',cf8:'Your project',cf_send:'Send my enquiry',ft_desc:'Transforming teams through experience. Rooted in neuroscience.',ft_tb_head:'Team Building',ft_prog:'Programmes',ft_meth:'Our method',ft_form:'Training',ft_nr:'Neuroscience',ft_other:'Other services',ft_conc:'Concierge',ft_eco:'Sustainability',ft_ct:'Contact',ft_home:'Home',ft_leg:'Legal',ft_priv:'Privacy',ft_ment:'Legal notice',ft_cgv:'T&Cs',ft_copy:'© 2026 Alchimia Corporate SRL — Belgium.',ft_eco_lbl:'Eco-responsible commitment'}};

let lang='fr',filter='all';

function init(){
  const saved=sessionStorage.getItem('alchimia-lang');
  if(saved&&(saved==='fr'||saved==='en'))setLang(saved);
  renderTB();applyLang();initScrollAnim();initNav();
  setTimeout(initCountUp, 720);

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
      const html_keys=['h_h1','nr_h2','m_why','m_h2'];
      if(html_keys.includes(k))el.innerHTML=T[lang][k];
      else el.textContent=T[lang][k];
    }
  });
}

function renderTB(){
  const items=filter==='all'?TB:TB.filter(d=>d.cat===filter);
  document.getElementById('tb-grid').innerHTML=items.map(d=>`
    <a href="programme.html?id=${d.id}" class="tb-card">
      <div class="tb-img" style="background-image:url(${d.img})">
        <span class="tb-emoji-img">${d.emoji}</span>
      </div>
      <div class="tb-body">
        <span class="chip chip-navy tb-type-chip">${d.type[lang]}</span>
        <h3>${d.name[lang]}</h3>
        <div class="tb-pb">
          <span class="tb-pb-lbl">${T[lang].tb_pb_lbl}</span>
          <p>${d.pb[lang]}</p>
        </div>
        <div class="tb-sol">
          <span class="tb-sol-lbl">${T[lang].tb_sol_lbl}</span>
          <p>${d.sol[lang]}</p>
        </div>
        <span class="tb-discover">${T[lang].tb_discover} →</span>
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
