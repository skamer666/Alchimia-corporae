/* ── PROGRAMME DATA ── */
const PROGS={
  centrale:{
    id:'centrale',
    name:{fr:'OPÉRATION CENTRALE',en:'OPERATION CENTRALE'},
    sub:{fr:'Le CODIR en salle de crise',en:'The CODIR in the crisis room'},
    type:{fr:'Crise CODIR',en:'CODIR Crisis'},
    emoji:'⚡',
    img:'img_centrale_1.png',
    pb:{fr:'Votre CODIR croit bien fonctionner, jusqu\'à ce que la pression révèle les silences, les positions camouflées et les décisions jamais vraiment prises.',en:'Your CODIR believes it functions well, until real pressure exposes the silences, hidden positions and decisions never truly made.'},
    kpi:{fr:'−40% sur le temps de décision · +35% d\'exécution · NPS 72–89',en:'−40% decision time · +35% execution · NPS 72–89'},
    intro:{
      fr:'Un scénario de crise fictif, conçu à partir d\'un diagnostic confidentiel de votre propre organisation, éclate en temps réel dans une salle de contrôle militaro-industrielle. Pendant six heures, votre CODIR fait face à ce qu\'il n\'a jamais vu, sans téléphone, sans script, sous caméra. Le lendemain matin, il regarde les images.',
      en:'A fictional crisis scenario, designed from a confidential diagnostic of your own organisation, erupts in real time in a military-grade control room. For six hours, your CODIR faces what it has never seen, without phones, without scripts, on camera. The next morning, it watches the footage.'
    },
    mechanism:{
      fr:'Votre CODIR entre dans une salle de contrôle militaro-industrielle. Les téléphones sont confisqués à l\'entrée. En six heures, 40 à 60 fragments d\'information contradictoires arrivent en rafale : dépêches de presse, convocations d\'actionnaires, injonctions juridiques, signalements internes de lanceurs d\'alerte.\n\nDes acteurs professionnels incarnent journalistes, syndicalistes, avocats et activistes, entraînés à partir du diagnostic confidentiel réalisé au préalable auprès de chaque membre du CODIR. Tout est filmé sous quatre angles discrets.\n\nLe dispositif intègre une fausse accalmie, fenêtre de régulation calculée, où les défenses s\'abaissent et où les positions politiques internes réelles émergent. Puis l\'escalade finale : une décision antérieure était fondée sur une information fausse.\n\nLe signal silencieux marque la fin. Déjeuner avec les acteurs hors personnage. Deux heures de débrief avec un psychologue organisationnel. Le lendemain : replay des images brutes, construction collective des règles de fonctionnement, signatures physiques.',
      en:'Your CODIR enters a military-grade control room. Phones confiscated at entry. Over six hours, 40 to 60 contradictory information fragments arrive in rapid succession: press releases, shareholder summons, legal injunctions, internal whistleblower reports.\n\nProfessional actors play journalists, union reps, lawyers and activists, trained from the confidential diagnostic gathered beforehand from each CODIR member. Everything filmed from four discreet angles.\n\nThe structure incorporates a \'false calm\', a calculated regulation window, where defences lower and real internal political positions emerge. Then the final escalation: a prior decision was based on false information.\n\nA silent signal ends the session. Lunch with actors out of character. Two hours of debrief with an organisational psychologist. Next day: raw footage replay, collective construction of operating rules, physical signatures.'
    },
    psychology:{
      fr:'L\'environnement inconnu et oppressant active le système nerveux sympathique, désorganisant les comportements de façade sans paralyser, une zone de révélation que les environnements sécurisants ne permettent jamais d\'atteindre.\n\nLa confiscation des téléphones supprime la valve d\'anxiété habituelle et impose une présence totale, rare dans le contexte des CODIR modernes.\n\nLes 40 à 60 fragments contradictoires répliquent le fonctionnement du cerveau bayésien sous stress : chaque décision partielle révèle les biais cognitifs individuels et les dynamiques de pouvoir réelles.\n\nL\'absence de débrief immédiat est intentionnelle : la mémoire émotionnelle a besoin de temps pour se consolider. Le déjeuner avec les acteurs hors personnage transforme l\'émotion en information exploitable.\n\nLe replay vidéo le lendemain est le mécanisme le plus puissant du dispositif. La mémoire autobiographique reconstruit les événements de façon flatteuse, voir les images crée une dissonance cognitive impossible à ignorer, forçant une mise à jour des croyances que nul feedback externe ne peut produire.',
      en:'The unfamiliar, oppressive environment activates the sympathetic nervous system, disrupting facade behaviours without paralysing, a revelation zone that safe environments never allow.\n\nPhone confiscation eliminates the usual anxiety valve and imposes total presence, rare in modern CODIR settings.\n\nThe 40 to 60 contradictory fragments replicate Bayesian brain function under stress: each partial decision reveals individual cognitive biases and real power dynamics.\n\nThe absence of an immediate debrief is intentional: emotional memory needs time to consolidate. Lunch with actors out of character transforms emotion into exploitable information.\n\nThe next-day video replay is the most powerful mechanism in the structure. Autobiographical memory reconstructs events flatteringly, seeing the footage creates cognitive dissonance impossible to ignore, forcing a belief update that no external feedback can produce.'
    },
    results:[
      {num:'−40%',lbl:{fr:'sur le temps de décision',en:'decision time reduction'},src:'Institute for Crisis Management, 2021'},
      {num:'73%',lbl:{fr:'des CODIR rapportent des réunions mesurément améliorées à 90 j',en:'of CODIRs report measurably improved meetings at 90 days'},src:'HBR, 2019'},
      {num:'+35%',lbl:{fr:'de décisions effectivement exécutées',en:'of decisions actually executed'},src:''},
      {num:'85%',lbl:{fr:'de rappel précis à 6 semaines vs 12 % en séminaire classique',en:'precise recall at 6 weeks vs 12% classical seminar'},src:'INSEAD'}
    ],
    nps:'72–89'
  },
  frontiere:{
    id:'frontiere',
    name:{fr:'OPÉRATION FRONTIÈRE',en:'OPERATION FRONTIÈRE'},
    sub:{fr:'La nuit qui efface les tribus',en:'The night that erases tribes'},
    type:{fr:'Intégration d\'équipes',en:'Team Integration'},
    emoji:'🌙',
    img:'img_frontiere_0.png',
    pb:{fr:'Deux équipes coexistent sans se faire confiance. Les séminaires de fusion n\'ont rien changé. Les silos résistent.',en:'Two teams coexist without trust. Post-merger seminars changed nothing. Silos persist.'},
    kpi:{fr:'−52% de méfiance intergroupes · +340% d\'interactions · NPS 78–92',en:'−52% intergroup mistrust · +340% interactions · NPS 78–92'},
    intro:{
      fr:'Deux équipes arrivent séparément. Elles repartent ensemble, transformées par une nuit que leurs cerveaux n\'oublieront pas. Conçu pour les post-fusions, les réorganisations et toutes les situations où la méfiance entre groupes a résisté à tout ce qu\'on a essayé.',
      en:'Two teams arrive separately. They leave together, transformed by a night their brains will not forget. Designed for post-mergers, reorganisations, and every situation where intergroup mistrust has resisted everything that has been tried.'
    },
    mechanism:{
      fr:'Deux équipes arrivent séparément dans un bâtiment désaffecté en soirée, chacune persuadée d\'avoir un adversaire en face d\'elle.\n\nLe dispositif repose sur 90 jours de préparation : entretiens individuels confidentiels dans les deux camps, les verbatims nourrissent directement la conception du scénario. Le bâtiment est divisé en zones distinctes pour chaque tribu.\n\nLes premiers défis sont délibérément solubles séparément, pour consolider l\'identité tribale. Puis les épreuves deviennent progressivement impossibles sans l\'autre camp. Un système de double clé, chaque camp en détient une sans le savoir, crée la révélation vers 2h du matin, précisément quand la fatigue cognitive a érodé les défenses identitaires.\n\nMoment du feu de camp : nourriture et café partagés dans l\'espace commun. Nuit profonde : les défenses tombent, les conversations deviennent personnelles. À l\'aube : révélation de la double clé, portes qui s\'ouvrent.\n\nLe lendemain : frise chronologique collective, introduction à la théorie de l\'objectif superordonné (Sherif), construction d\'un récit partagé, engagements réciproques, objet physique du bâtiment rapporté comme ancre mémorielle.',
      en:'Two teams arrive separately at an abandoned building at nightfall, each convinced the other is an adversary.\n\nBuilt on 90 days of preparation: individual confidential interviews in both camps, verbatims directly feed scenario design. The building is divided into distinct zones for each tribe.\n\nFirst challenges are deliberately solvable separately, consolidating tribal identity. Then challenges become progressively impossible without the other camp. A double-key system, each camp holds one without knowing it, creates the revelation around 2am, precisely when cognitive fatigue has eroded identity defences.\n\nCampfire moment: food and coffee shared in a common space. Deep night: defences fall, conversations become personal. At dawn: double-key revelation, doors open.\n\nNext day: collective timeline, introduction to superordinate goal theory (Sherif), construction of a shared narrative, reciprocal commitments, physical object from the building as a memory anchor.'
    },
    psychology:{
      fr:'La théorie du contact d\'Allport (1954) exige quatre conditions simultanées : statut égal, objectif commun, interdépendance, soutien institutionnel. Ce format est l\'un des seuls à les activer toutes en même temps, condition que les séminaires classiques n\'atteignent jamais.\n\nL\'expérience de Robbers Cave (Sherif) démontre que l\'hostilité entre groupes disparaît en quelques heures lorsqu\'ils reçoivent un objectif qu\'aucun ne peut atteindre seul. La double clé en est la réplication directe.\n\nL\'ocytocine libérée dans une situation de stress partagé et surmontable crée le lien de tranchée, un attachement entre adversaires plus durable que les liens formés en contexte agréable.\n\nAprès minuit, le cortex préfrontal n\'a plus la capacité de maintenir les barrières identitaires construites par l\'appartenance de groupe. Les personnes fatiguées sont plus authentiques, et c\'est précisément quand la révélation intervient.\n\nL\'objet physique rapporté du bâtiment réactive ensuite le réseau mémoriel à chaque fois qu\'il est vu : la mémoire multisensorielle ressuscite l\'intégralité de l\'épisode associé.',
      en:'Allport\'s contact theory (1954) requires four simultaneous conditions: equal status, common goal, interdependence, institutional support. This format is one of the only programmes that activates all four at once, a condition classical seminars never achieve.\n\nSherif\'s Robbers Cave experiment demonstrates that intergroup hostility disappears within hours when groups receive an objective neither can achieve alone. The double-key system is its direct replication.\n\nOxytocin released in a shared stressful yet surmountable situation creates the foxhole bond, an attachment between adversaries more durable than bonds formed in pleasant contexts.\n\nAfter midnight, the prefrontal cortex can no longer maintain the identity barriers constructed by group membership. Exhausted people are more authentic, and that is precisely when the revelation occurs.\n\nThe physical object brought back from the building subsequently reactivates the memory network each time it is seen: multisensory memory resurrects the entire associated episode.'
    },
    results:[
      {num:'−52%',lbl:{fr:'de méfiance intergroupes',en:'intergroup mistrust reduction'},src:'Meyer et al., Journal of Applied Psychology, 2018'},
      {num:'+340%',lbl:{fr:'d\'interactions spontanées inter-équipes à 90 jours',en:'spontaneous cross-team interactions at 90 days'},src:'McKinsey, 2020'},
      {num:'−38%',lbl:{fr:'de départs volontaires à 18 mois',en:'voluntary departures at 18 months'},src:'BCG, 2021'},
      {num:'91%',lbl:{fr:'de rappel précis à 6 semaines vs 8 % en classique',en:'precise recall at 6 weeks vs 8% classical'},src:'Damasio / INSERM, 2021'}
    ],
    nps:'78–92'
  },
  miroir:{
    id:'miroir',
    name:{fr:'OPÉRATION MIROIR',en:'OPERATION MIROIR'},
    sub:{fr:'Quand le client devient le professeur',en:'When the client becomes the teacher'},
    type:{fr:'Performance commerciale',en:'Sales Performance'},
    emoji:'🎭',
    img:'img_miroir_0.png',
    pb:{fr:'Vos commerciaux répètent les mêmes erreurs face aux clients difficiles, sans jamais les voir. Les formations classiques n\'y changent rien.',en:'Your salespeople repeat the same mistakes with difficult clients, without ever seeing them. Classical training changes nothing.'},
    kpi:{fr:'+23–31% de taux de conversion · 87% de rétention · NPS 81–94',en:'+23–31% conversion rate · 87% retention · NPS 81–94'},
    intro:{
      fr:'Pendant une journée, des acteurs professionnels jouent vos clients les plus difficiles. Vos commerciaux croient vivre de vrais rendez-vous. Tout est filmé. Le lendemain matin, chacun regarde, pour la première fois, qui il est vraiment en face d\'un client difficile.',
      en:'For one day, professional actors play your most difficult clients. Your salespeople believe they are in real appointments. Everything is filmed. The next morning, each person watches, for the first time, who they really are facing a difficult client.'
    },
    mechanism:{
      fr:'Le programme démarre par un diagnostic de deux semaines : observation de réunions commerciales réelles et analyse CRM des 12 derniers mois. Les données nourrissent directement la conception des profils et le calibrage de la difficulté.\n\nSix acteurs sont formés pendant trois semaines aux techniques commerciales du secteur, dotés d\'une biographie de personnage de 4 à 6 pages et de faux profils LinkedIn créés un mois à l\'avance.\n\nSix profils client sont incarnés : Le Docteur (maîtrise tout, déteste le bluff), Le Silencieux (révèle la panique face au vide conversationnel), Le Comparateur (cite un concurrent à chaque argument), L\'Émotionnel (mauvaise expérience passée, fonctionne à la sensation), Le Pressé (téléphone toutes les 8 minutes), Le Saboteur Bienveillant (adore tout mais n\'a jamais eu de pouvoir de décision).\n\nLa difficulté progresse dans la journée, les profils les plus exigeants arrivent l\'après-midi, quand la fatigue érode les façades. Les caméras sont cachées dans des cadres photos, des livres, des plantes. La révélation finale est opérée par le Saboteur, qui tend sa carte d\'acteur au logo Alchimia.\n\nSoirée : projection collective. Le coach demande "qu\'est-ce que vous voyez ?", jamais "qu\'est-ce qui s\'est mal passé ?". Lendemain : session individuelle avec coach comportemental, puis construction collective d\'un nouveau répertoire.',
      en:'The programme begins with a two-week diagnostic: observation of real sales meetings and CRM analysis of the past 12 months. The data directly feeds profile design and difficulty calibration.\n\nSix actors are trained for three weeks in sector-specific sales techniques, given 4–6 page character biographies and fake LinkedIn profiles created a month in advance.\n\nSix client profiles are embodied: The Doctor (knows everything, detests bluffing), The Silent (reveals panic at conversational void), The Comparator (cites a competitor at every argument), The Emotional (bad past experience, runs on feeling not logic), The Rushed (phone rings every 8 minutes), The Benevolent Saboteur (loves everything and has never held decision power).\n\nDifficulty progresses throughout the day, the most demanding profiles arrive in the afternoon, when fatigue erodes facades. Cameras are hidden in photo frames, books, plants. The final reveal is made by the Saboteur, who hands over their Alchimia actor card.\n\nEvening: collective screening. Coach asks "what do you see?", never "what went wrong?". Next day: individual session with a behavioural coach, then collective repertoire-building.'
    },
    psychology:{
      fr:'La pratique délibérée (Ericsson) exige une répétition ciblée sur des zones d\'inconfort précises avec feedback immédiat. Ce format crée cinq sessions de pratique délibérée en une journée, ce qu\'aucune formation classique ne peut produire.\n\nLe biais de confirmation dans l\'écoute commerciale : le cerveau filtre les signaux qui contredisent l\'hypothèse d\'acceptation du pitch. Les acteurs envoient des signaux contradictoires précis. La vidéo montre en noir sur blanc ce qui a été filtré.\n\nLes comportements ancrés en mémoire procédurale depuis 2 à 3 ans ne remontent à la surface qu\'en situation de pression réelle. Impossible à reproduire en jeu de rôle classique.\n\nL\'effet miroir et la dissonance cognitive : se voir faire quelque chose qu\'on ne savait pas faire crée une dissonance entre l\'image de soi et la réalité observée, bien plus puissant que tout feedback externe.\n\nLa charge émotionnelle du moment de révélation grave l\'intégralité de la journée en mémoire épisodique à long terme. Damasio : 2 à 3 ans de rétention versus 48 heures pour une formation classique.',
      en:'Deliberate practice (Ericsson) requires targeted repetition on specific discomfort zones with immediate feedback. This format creates five deliberate practice sessions in one day, something no classical training can produce.\n\nConfirmation bias in commercial listening: the brain filters signals that contradict the pitch acceptance hypothesis. Actors send precise contradictory signals. The video shows in black and white what was filtered.\n\nBehaviours anchored in procedural memory over 2–3 years only surface under real-stakes pressure. Impossible to reproduce in classical role play.\n\nThe mirror effect and cognitive dissonance: seeing yourself doing something you didn\'t know you were doing creates dissonance between self-image and observed reality, far more powerful than any external feedback.\n\nThe emotional charge of the revelation moment embeds the entire day in long-term episodic memory. Damasio: 2–3 years\' retention versus 48 hours for a classical course.'
    },
    results:[
      {num:'+23–31%',lbl:{fr:'de taux de conversion à 90 jours',en:'conversion rate at 90 days'},src:'Corporate Executive Board, 2019'},
      {num:'−18%',lbl:{fr:'de durée du cycle de vente',en:'sales cycle duration reduction'},src:'Gartner Sales Practice, 2020'},
      {num:'87%',lbl:{fr:'de rétention vs 9 % en formation classique',en:'retention vs 9% classical training'},src:'IFCP, 2021'},
      {num:'3/4',lbl:{fr:'des commerciaux les plus expérimentés reconsidèrent leur relation au métier',en:'of most experienced salespeople radically reconceive their relationship to the profession'},src:''}
    ],
    nps:'81–94'
  },
  silence:{
    id:'silence',
    name:{fr:'OPÉRATION SILENCE',en:'OPERATION SILENCE'},
    sub:{fr:'Négocier comme le GIGN',en:'Negotiate like the GIGN'},
    type:{fr:'Négociation GIGN',en:'GIGN Negotiation'},
    emoji:'🎯',
    img:'img_silence_0.png',
    pb:{fr:'Sous pression, vos équipes argumentent, cèdent trop vite ou se bloquent. Aucun cadre de négociation ne résiste quand l\'amygdale prend le contrôle.',en:'Under pressure, your teams argue, concede too fast or freeze. No negotiation framework survives when the amygdala takes over.'},
    kpi:{fr:'+19% de valeur des accords · −43% de conflits internes · NPS 85–94',en:'+19% deal value · −43% internal conflicts · NPS 85–94'},
    intro:{
      fr:'D\'anciens négociateurs du GIGN, du BRI, du RAID et du FBI transmettent leurs techniques exactes sur deux jours, avec exercices filmés en cellules de négociation réelles. Ce qui se transmet ici ne s\'apprend nulle part ailleurs.',
      en:'Former GIGN, BRI, RAID and FBI negotiators teach their exact techniques over two days, with filmed exercises in real negotiation cells. What is transmitted here cannot be learned anywhere else.'
    },
    mechanism:{
      fr:'Jour 1 : théorie et exercices. Six techniques enseignées progressivement avec des exercices entre pairs après chaque bloc.\n\nÉcoute Active à trois niveaux (sélective → focalisée → totale). Mirroring : répéter les 2–3 derniers mots avec une légère intonation montante, génère 3 à 4 fois plus d\'informations d\'un interlocuteur fermé. Labeling : nommer l\'émotion perçue sans l\'attribuer ("il semble que cette situation pèse sur vous", jamais "vous êtes en colère"). Voix FM Nuit : grave, lente, calme, active le parasympathique de l\'interlocuteur par contagion neuronale. Questions Calibrées : toujours "comment" ou "quoi", jamais "pourquoi", "pourquoi" crée une accusation implicite mesurable en IRMf. Audit d\'Accusation : lister tous les reproches avant qu\'ils soient formulés, désarmant la résistance préparée.\n\nJour 2 : cellules de négociation réelles. Une table, deux chaises, un téléphone fixe, rien d\'autre. Acteurs incarnant : L\'Agressif Contrôlé, Le Fermé Total, Le Manipulateur Bienveillant, L\'Émotionnel Explosif, Le Rationnel Froid, Le Contre-négociateur Expert (reconnaît les techniques par leur nom en temps réel).\n\nLes autres participants observent sur écran silencieux, commentés en direct par un négociateur sur le langage corporel. Négociation par téléphone uniquement : la plus difficile, la plus mémorable.',
      en:'Day 1: theory and exercises. Six techniques taught progressively with peer exercises after each block.\n\nActive Listening at three levels (selective → focused → total). Mirroring: repeat the last 2–3 words with slight rising intonation, extracts 3–4× more information from a closed person. Labelling: name the perceived emotion without attributing it ("it seems this situation has been weighing on you", never "you seem angry"). FM Night Voice: deep, slow, calm, activates the interlocutor\'s parasympathetic system through neural contagion. Calibrated Questions: always "how" or "what", never "why", "why" creates an implicit accusation measurable on fMRI. Accusation Audit: list all reproaches before they are raised, disarming prepared resistance.\n\nDay 2: real negotiation cells. A table, two chairs, a landline, nothing else. Actors embodying: The Controlled Aggressor, The Completely Closed, The Benevolent Manipulator, The Explosive Emotional, The Cold Rationalist, The Expert Counter-negotiator (recognises techniques by name in real time).\n\nOther participants observe on a silent screen, live-commented by a negotiator on body language. Phone-only negotiation: the most difficult, the most remembered.'
    },
    psychology:{
      fr:'L\'amygdale sous pression déclenche un hijacking du cortex préfrontal, tous les cadres cognitifs appris disparaissent. Les techniques du GIGN sont les seules conçues spécifiquement pour fonctionner sous cet état neurologique.\n\nEmpathie tactique et ocytocine : le labeling et le mirroring déclenchent la production d\'ocytocine chez l\'interlocuteur, réduisant l\'activation de son amygdale et ouvrant une fenêtre de coopération.\n\nLa régulation vocale active simultanément le nerf vague des deux parties par contagion émotionnelle (théorie polyvagale de Porges). Parler lentement calme physiologiquement les deux interlocuteurs.\n\nLa différence entre "pourquoi" et "comment/quoi" est mesurable en IRMf : "pourquoi" active le réseau de défense et la charge de justification. "Comment" active le réseau de résolution de problèmes.\n\nLa mémoire procédurale des automatismes négatifs, argumenter face à une objection, céder trop vite sous silence, monter en pression, ne se modifie qu\'au travers de la pratique répétée sous stress suffisant. Le niveau de stress des cellules du Jour 2 est calibré précisément pour activer ce mécanisme.',
      en:'The amygdala under pressure triggers a hijacking of the prefrontal cortex, all learned cognitive frameworks disappear. GIGN techniques are the only ones designed specifically to function under this neurological state.\n\nTactical empathy and oxytocin: labelling and mirroring trigger oxytocin production in the interlocutor, reducing their amygdala activation and opening a cooperation window.\n\nVocal regulation simultaneously activates both parties\' vagus nerves through emotional contagion (Porges\' polyvagal theory). Speaking slowly physiologically calms both parties.\n\nThe difference between "why" and "how/what" is measurable on fMRI: "why" activates the defence network and justification load. "How" activates the problem-solving network.\n\nProcedural memory of negative automatisms, arguing at an objection, conceding under silence, escalating with pressure, only changes through repeated practice under sufficient stress. The Day 2 cell stress level is precisely calibrated to activate this mechanism.'
    },
    results:[
      {num:'+19%',lbl:{fr:'de valeur des accords à 90 jours',en:'deal value at 90 days'},src:'Black Swan Group, 2019–2022'},
      {num:'−43%',lbl:{fr:'de durée de résolution des conflits internes à 6 mois',en:'internal conflict resolution time at 6 months'},src:'Harvard PON, 2020'},
      {num:'−35%',lbl:{fr:'de durée des négociations sociales',en:'union negotiation duration reduction'},src:'ANDRH, 2021'},
      {num:'89%',lbl:{fr:'de rétention vs 11 % en formation classique',en:'retention vs 11% classical'},src:''}
    ],
    nps:'85–94'
  }
};

/* ── TRANSLATIONS ── */
const PT={
  fr:{
    back:'← Tous les programmes',
    section_mech:'En quoi ça consiste',
    section_psy:'La mécanique psychologique',
    section_res:'Résultats documentés',
    nps_lbl:'NPS moyen',
    cta_h:'Demander ce programme',
    cta_p:'Décrivez-nous votre contexte. Nous revenons sous 24h avec une proposition adaptée.',
    cta_btn:'Prendre contact',
    pb_lbl:'Le problème',
    sol_lbl:'La solution',
    disclaimer:'Programme exemple, chaque déploiement est entièrement conçu sur mesure à partir d\'un diagnostic de votre organisation.'
  },
  en:{
    back:'← All programmes',
    section_mech:'How it works',
    section_psy:'Psychological mechanism',
    section_res:'Documented results',
    nps_lbl:'Average NPS',
    cta_h:'Request this programme',
    cta_p:'Tell us your context. We respond within 24h with a tailored proposal.',
    cta_btn:'Get in touch',
    pb_lbl:'The challenge',
    sol_lbl:'The approach',
    disclaimer:'Example programme, every deployment is fully tailored from a diagnostic of your specific organisation.'
  }
};

let lang='fr';

function init(){
  const saved=sessionStorage.getItem('alchimia-lang');
  if(saved&&(saved==='fr'||saved==='en'))lang=saved;

  const id=new URLSearchParams(window.location.search).get('id');
  if(!id||!PROGS[id]){window.location.href='teambuilding.html';return;}

  var btnFr=document.getElementById('btn-fr');
  var btnEn=document.getElementById('btn-en');
  if(btnFr)btnFr.addEventListener('click',function(){setLang('fr');});
  if(btnEn)btnEn.addEventListener('click',function(){setLang('en');});

  render(id);
  initNav();
  initScrollAnim();
}

function setLang(l){
  lang=l;
  sessionStorage.setItem('alchimia-lang',l);
  var btnFr=document.getElementById('btn-fr');
  var btnEn=document.getElementById('btn-en');
  if(btnFr)btnFr.classList.toggle('active',l==='fr');
  if(btnEn)btnEn.classList.toggle('active',l==='en');
  var id=new URLSearchParams(window.location.search).get('id');
  if(id&&PROGS[id])render(id);
}

function set(id,text){var el=document.getElementById(id);if(el)el.textContent=text;}
function setHtml(id,html){var el=document.getElementById(id);if(el)el.innerHTML=html;}

function render(id){
  var p=PROGS[id];
  var t=PT[lang];
  if(!p||!t)return;

  document.title=p.name[lang]+', Alchimia Corporate';

  // Hero
  var hero=document.getElementById('hero');
  if(hero)hero.style.backgroundImage='url('+p.img+')';
  set('hero-type',p.type[lang]);
  set('hero-emoji',p.emoji);
  set('hero-name',p.name[lang]);
  set('hero-sub',p.sub[lang]);

  // Back links
  document.querySelectorAll('.back-lnk').forEach(function(el){el.textContent=t.back;});

  // Framing
  set('pb-lbl',t.pb_lbl);
  set('pb-text',p.pb[lang]);
  set('sol-lbl',t.sol_lbl);
  if(p.sol)set('sol-text',p.sol[lang]);
  set('roi-text',p.kpi[lang]);

  // Disclaimer
  set('disclaimer-text',t.disclaimer);

  // Intro
  set('intro-text',p.intro[lang]);

  // Sections
  set('lbl-mech',t.section_mech);
  setHtml('mechanism-text',p.mechanism[lang].split('\n\n').map(function(para){return'<p>'+para+'</p>';}).join(''));

  set('lbl-psy',t.section_psy);
  setHtml('psychology-text',p.psychology[lang].split('\n\n').map(function(para){return'<p>'+para+'</p>';}).join(''));

  // Results
  set('lbl-res',t.section_res);
  setHtml('results-grid',p.results.map(function(r){
    return'<div class="stat-card"><div class="stat-num">'+r.num+'</div><div class="stat-lbl">'+r.lbl[lang]+'</div>'+(r.src?'<div class="stat-src">'+r.src+'</div>':'')+'</div>';
  }).join(''));
  set('nps-lbl',t.nps_lbl);
  set('nps-val',p.nps);

  // CTA
  set('cta-h',t.cta_h);
  set('cta-p',t.cta_p);
  set('cta-btn',t.cta_btn);

  // Lang buttons
  var btnFr=document.getElementById('btn-fr');
  var btnEn=document.getElementById('btn-en');
  if(btnFr)btnFr.classList.toggle('active',lang==='fr');
  if(btnEn)btnEn.classList.toggle('active',lang==='en');
}

function initScrollAnim(){
  if(!('IntersectionObserver' in window)){
    document.querySelectorAll('.anim').forEach(function(el){el.classList.add('in');});
    return;
  }
  var obs=new IntersectionObserver(function(entries){
    entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target);}});
  },{threshold:.06,rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.anim').forEach(function(el){obs.observe(el);});
}

function initNav(){
  window.addEventListener('scroll',function(){
    var nav=document.getElementById('nav');
    if(nav)nav.classList.toggle('scrolled',window.scrollY>30);
  });
}

document.addEventListener('DOMContentLoaded',init);
