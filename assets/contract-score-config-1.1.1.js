/* Ask Contracks — Contract Score config 1.1.1, for the 5Cs engine 1.0.x.
   Wording here is approved by Serguei before it goes live. */
window.CONTRACT_SCORE_CONFIG = {
  brand: 'Ask Contracks',
  scoreName: 'Contract Score',
  assessmentObject: 'contract_management_capability',
  assessmentLabel: "Your team's contract-management practice",
  configVersion: '1.1.1',
  scoreVersion: '1.0',

  cLabels: ['Scope & variations', 'Programme, delay & claims', 'Instructions & decisions', 'Payments & certification', 'Deadlines & weekly review'],

  /* 15 scored questions, 3 per C. goodAnswer 'No' means No is the protective answer.
     action: the first action shown when this question is a gap. */
  questions: [
    { c: 0, goodAnswer: 'Yes', text: 'If the client disputed a change tomorrow, could your team produce the instruction, records, value and status from one live register?', action: 'Set up one live variation register, with value, status and owner.' },
    { c: 0, goodAnswer: 'Yes', text: 'Is changed or extra work priced and submitted before it starts — or as soon as it does?', action: 'Price changed work and submit it before it starts, or as soon as it does.' },
    { c: 0, goodAnswer: 'No', text: 'Do you have variations older than 60 days that are still not submitted or valued?', action: 'Go through variations older than 60 days and submit or value them.' },
    { c: 1, goodAnswer: 'Yes', text: 'Is each delay event recorded at the time, with its own records and programme impact?', action: 'Record each delay event at the time, with its records and programme impact.' },
    { c: 1, goodAnswer: 'Yes', text: 'Do you send extension-of-time notices within the contract period, with the programme impact shown?', action: "Check your contract's notice periods, then send extension-of-time notices within them, with the programme impact shown." },
    { c: 1, goodAnswer: 'No', text: 'Is there a delay or extra cost on the project that has not yet been notified or claimed?', action: "List every delay or extra cost not yet notified, and check your contract's own clause for each one now." },
    { c: 2, goodAnswer: 'Yes', text: 'Is every site instruction confirmed in writing within 48 hours — including verbal and WhatsApp ones?', hint: '48 hours is our recommended discipline, not a contractual deadline.', action: 'Confirm every instruction in writing, including verbal and WhatsApp ones. We recommend within 48 hours; that is a discipline, not a contractual deadline.' },
    { c: 2, goodAnswer: 'Yes', text: 'Could you pull together the records and correspondence for any given week within one day?', action: 'File correspondence and records so any week can be pulled together within a day.' },
    { c: 2, goodAnswer: 'No', text: 'Do decisions or approvals you need from the client stay open for weeks without a written chase?', action: 'Chase every open client decision in writing, with a date.' },
    { c: 3, goodAnswer: 'Yes', text: 'Are payment applications submitted on the contractual date, with full supporting records?', action: 'Submit payment applications on the contractual date, with full supporting records.' },
    { c: 3, goodAnswer: 'Yes', text: 'Could you say today how much you have applied for but not yet been paid?', action: 'Track what you have applied for, what is certified and what is paid.' },
    { c: 3, goodAnswer: 'No', text: 'Has a recent payment application been reduced without a clear written reason?', action: 'Challenge every payment reduction in writing, and ask for the reason.' },
    { c: 4, goodAnswer: 'Yes', text: 'Do you have one written register of every notice period and time-bar in your contract?', action: 'Put every notice period and time-bar from your contract into one register.' },
    { c: 4, goodAnswer: 'Yes', text: 'Does a named person review the contract position with the team every week?', action: 'Name one person to review the contract position with the team every week.' },
    { c: 4, goodAnswer: 'No', text: 'Would contractual deadlines slip if one key person were away for two weeks?', action: 'Make sure a second person knows the deadlines and can act on them.' }
  ],

  /* Used to make up exactly three actions when fewer gaps exist. */
  cMaintain: [
    'Keep the variation register live and check it at every weekly review.',
    'Keep recording delay events at the time, even in quiet weeks.',
    'Keep confirming instructions in writing, especially the urgent verbal ones.',
    'Keep reconciling applied, certified and paid amounts every month.',
    'Test your deadline register whenever a new person joins or a new contract starts.'
  ],

  /* Free result: the weakest C, named, with its likely consequence. */
  exposure: [
    { title: 'Extra work that may never get paid', detail: 'Your answers suggest changed work may not always be recorded, priced and submitted on time.', why: 'Depending on the contract, a variation that is unrecorded or submitted late can be harder to value and recover.' },
    { title: 'Delay without the record behind it', detail: 'Your answers suggest delay events may not always be recorded and notified as they happen.', why: 'Strong extension-of-time and claim positions are built on contemporaneous records. Depending on the contract, late notice may weaken entitlement to time or money.' },
    { title: 'Instructions you may not be able to substantiate', detail: 'Your answers suggest instructions and client decisions may not always be confirmed in writing.', why: 'An instruction nobody confirmed can be hard to prove later. An open client decision can hold up work with no record of why.' },
    { title: 'Payment that may be reduced or delayed unchallenged', detail: 'Your answers suggest applications, certificates and reductions may not always be tracked and followed up.', why: 'A reduction left unchallenged in writing can tighten cash now and be harder to reopen at final account.' },
    { title: 'Missed contractual notices', detail: 'Your answers suggest notices may not be consistently identified, issued or evidenced within contractual deadlines.', why: 'Depending on the contract and applicable law, late or missing notices may weaken entitlement to additional payment or time.' }
  ],

  /* Report: interpretation of each C by its score. weak = 0 or 33, partial = 67, strong = 100. */
  interpret: [
    { weak: "Changed work is getting built before it's recorded or priced. That's how a good project ends with a margin nobody can find.",
      partial: 'Most changes are captured, but not all of them, and not always in time. The ones that slip are often the ones the client disputes.',
      strong: 'Changes are recorded, priced and submitted as they happen. Keep it that way when the pace picks up.' },
    { weak: 'Delay is being lived, not recorded. Without the record at the time, an extension of time turns into an argument.',
      partial: "Some delay events are recorded and notified, some aren't. A claim is only as strong as its weakest month of records.",
      strong: "Delay is recorded and notified as it happens. That's what a defensible time position is built on." },
    { weak: "Instructions and decisions live on the phone and in WhatsApp. If it isn't confirmed in writing, it's hard to prove later.",
      partial: 'Most instructions get confirmed. Some don\'t, and open decisions drift. Those gaps are where disputes start.',
      strong: 'Instructions are confirmed and decisions chased in writing. Your record will back you when it matters.' },
    { weak: "Cash depends on the client's goodwill more than on your paperwork. Reductions that go unchallenged tend to stay.",
      partial: "Applications go in, but tracking and follow-up are uneven. That's where certified amounts quietly shrink.",
      strong: "You know what you've applied for, what's certified and what's paid. Keep challenging every cut in writing." },
    { weak: "The contract's deadlines live in someone's head. One busy month or one absence, and a notice period can pass.",
      partial: "Deadlines are partly tracked, but the system leans on one or two people. That's fine until they're away.",
      strong: "Deadlines are tracked and reviewed every week, by more than one person. That's real control." }
  ],

  /* Report: five-line self-improvement checklist, one line per C. */
  checklist: [
    'Every instruction that changes the work is on one register, priced and submitted.',
    'Every delay event is recorded at the time, with its programme impact and its notice.',
    'Every instruction is confirmed in writing, and every open decision has a written chase with a date.',
    'Applied, certified and paid amounts are tracked, and every reduction is challenged in writing.',
    'Every notice period and time-bar is on one register, reviewed weekly by a named person and a backup.'
  ],

  /* Bands: copy only. Thresholds live in the engine. */
  bands: {
    Fragile: { note: 'Rights depend on individuals, memory and informal communication.', colour: '#C0392B',
      head: 'Your contract is running on goodwill.',
      body: 'Deadlines, changes and payments depend on memory and good relationships. That works — until a dispute, a demanding client or a key person leaving tests it.',
      cta: "Your Contract Score shows gaps that could already be costing you entitlement. Let's discuss what to secure first." },
    Exposed: { note: 'Processes exist, but missed steps can weaken entitlement.', colour: '#C5A050',
      head: 'It holds day to day. Under pressure, it could crack.',
      body: 'The basics are there but not applied consistently. When pressure arrives — a claim, a payment dispute, a busy month — that is where entitlement and cash can slip.',
      cta: "Your Contract Score highlights where your team may be exposed. Let's discuss how to protect your contractual position." },
    Resilient: { note: 'Actions, notices and evidence are managed and traceable.', colour: '#2D6A4F',
      head: 'Your controls look strong. Keep them that way.',
      body: 'Your answers suggest deadlines are tracked, changes recorded and payments followed up. The risk now is scale — new contracts, new people, new clients.',
      cta: "Your Contract Score shows a well-protected position. Let's discuss how to hold it through the busy phases." }
  },
  /* Used instead of the band head when the score is 70+ but one C has nothing in place. */
  holeHead: 'Strong overall, with one real gap.',
  holeBody: 'Most of your controls look strong, but your answers show nothing in place on one of the 5Cs. That is where a strong overall position may still be exposed.',

  /* Q16-Q20: unscored qualifying questions (v3.4). */
  situation: [
    { id: 'q16', field: 'contract-value', type: 'single', text: 'What is the value of your main live contract?',
      options: ['Under €500K', '€500K – €5M', '€5M – €50M', 'Over €50M'] },
    { id: 'q17', field: 'q17-challenges', type: 'pick2', text: 'What are your top two challenges for the next 90 days?', hint: 'Pick two.',
      options: ['Get unpriced variations submitted', 'Build extension-of-time and claim positions on records', 'Get instructions confirmed in writing', 'Recover reduced or late payments', 'Stop missing notice deadlines', 'Add senior contract capacity without hiring'] },
    { id: 'q18', field: 'q18-obstacle', type: 'single-other', text: "What's the biggest obstacle?", otherField: 'q18-other',
      options: ['No time — too many live issues', 'No expertise — not sure what good looks like', "No accountability — people won't follow the process unless someone enforces it", 'No clarity — unsure what to fix first', 'Internal politics — decisions drift into side conversations', 'Other'] },
    { id: 'q19', field: 'q19-solution', type: 'single', text: 'Which would suit you best?',
      options: ["We'll do it ourselves with a clear method", 'A proven method plus expert support'] },
    { id: 'q20', field: 'q20-open', type: 'open', text: "Anything we should know about your contract or what's at risk right now?", hint: 'Optional.', max: 1000 }
  ],

  /* Best fit (v3.4 §3): contract €500K or more and "method plus support". */
  isBestFit: function (s) { return s.q16 >= 1 && s.q19 === 1; },
  urgentQ17: ['Recover reduced or late payments', 'Build extension-of-time and claim positions on records', 'Stop missing notice deadlines'],

  plans: {
    control: { name: 'Control', price: 'from €1,500 / month', opt: 'Control — from €1,500/month',
      what: 'Senior review and advice every week. Your team keeps drafting and sending — we make sure it is the right thing, at the right time.' },
    dedicated: { name: 'Dedicated', price: 'from €2,500 / month', opt: 'Dedicated — from €2,500/month',
      what: 'A named senior contract manager running one agreed contract hands-on — within a defined monthly capacity.' },
    'control-or-dedicated': { name: 'Control or Dedicated', price: 'from €1,500 / month', opt: 'Control or Dedicated — confirmed on the call',
      what: 'Weekly senior review, or a named contract manager running the contract hands-on. Which one fits is settled on the call.' },
    /* One-off first paid step (Task G, scope approved 11 Nov 2026). Set live: false to show 'stand' instead. */
    review: { name: 'Contract Review', live: true, stand: 'control', price: 'from €500, one-off', opt: 'Contract Review — from €500',
      what: 'A snapshot of one live contract: one working session with a senior contract manager, then a short written note with key deadlines and notices, current exposure and three priorities. Not a full contract review, claim preparation or ongoing support.' },
    custom: { name: 'Custom', price: 'scoped quote', opt: 'Custom — quote',
      what: 'Support shaped around several contracts, a substantial claim or intensive work — agreed in scope before we start.' }
  },
  /* Plan suggestion (Serguei, 11 Nov 2026): from Q16 and Q19 only.
     Review when "do it ourselves" or under €500K; Custom when over €50M; otherwise Control or Dedicated. */
  planKey: function (s) {
    if (s.q19 === 0 || s.q16 === 0) return 'review';
    if (s.q16 === 3) return 'custom';
    return 'control-or-dedicated';
  },
  shownPlan: function (k) { return this.plans[k].live === false ? this.plans[k].stand : k; },

  copy: {
    diy: 'Use the actions in your report to strengthen how your team manages the contract.',
    diyTitle: 'Improve it yourself',
    supportTitle: 'Expert support',
    callButton: 'Book a Free 45-Minute Call →',
    callSub: 'No documents needed · No obligation',
    reviewLine: 'Not ready for ongoing support? Start with a Contract Review — from €500.',
    retake: 'Retake the Contract Score',
    powered: 'Powered by the 5Cs Framework™ — Fragile · Exposed · Resilient.'
  }
};
