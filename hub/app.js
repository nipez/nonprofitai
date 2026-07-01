const STORAGE_KEY = "nonprofit-ops-assistant-v31";

const seedState = {
  audienceMode: "internal",
  showAllViews: false,
  showConversationMenu: false,
  grantAssistant: {
    outputType: "grantAnswer",
    prompt: "",
    sourceNotes: "",
    tone: "clear",
    draft: "",
    approvedLanguage: []
  },
  tasks: [
    {
      id: crypto.randomUUID(),
      title: "Reframe prototype around nonprofit operations assistant",
      owner: "Nick",
      due: "2026-06-30",
      complete: false
    },
    {
      id: crypto.randomUUID(),
      title: "Create three SaaS wedge demos",
      owner: "Nick",
      due: "2026-07-02",
      complete: false
    },
    {
      id: crypto.randomUUID(),
      title: "Prepare simple preview for All Chicago or AMPT",
      owner: "Nick + Barb",
      due: "2026-07-03",
      complete: false
    },
    {
      id: crypto.randomUUID(),
      title: "Map grant, board, and reporting document examples",
      owner: "Nick",
      due: "2026-07-05",
      complete: false
    },
    {
      id: crypto.randomUUID(),
      title: "Decide first pilot context: All Chicago vs AMPT",
      owner: "Barb",
      due: "2026-07-08",
      complete: false
    },
    {
      id: crypto.randomUUID(),
      title: "Keep Denis view simple and non-technical",
      owner: "Nick + Barb",
      due: "2026-07-08",
      complete: false
    }
  ],
  views: [
    {
      name: "Builder View",
      audience: "Nick + Barb",
      summary: "Product wedge decisions, pilot context, discovery prompts, demo materials, and next actions.",
      next: "Keep the product simple enough to explain in one minute."
    },
    {
      name: "Nonprofit View",
      audience: "Pilot organization leadership and staff",
      summary: "A calmer experience focused on one recurring document or follow-up workflow at a time.",
      next: "Show a single output flow, not the whole internal workspace."
    },
    {
      name: "Simple Sponsor View",
      audience: "Funder/champion",
      summary: "High-level status, practical value, and why less is more.",
      next: "Keep concise, practical, and free of technical detail."
    }
  ],
  talkTrack: [
    {
      title: "Open with the job to be done",
      body: "This is a prototype for helping nonprofits finish recurring documents and follow-up work with less friction."
    },
    {
      title: "Name the calmer frame",
      body: "Less is more. Start with one clear output: grant draft, board packet, report, or meeting follow-up."
    },
    {
      title: "Reassure on data",
      body: "This prototype is local-only. No donor, community, partner, or staff data is being sent externally."
    },
    {
      title: "Invite co-design",
      body: "Pilot users should help decide which document workflows are appropriate to test first."
    }
  ],
  languageGuide: [
    {
      say: "Operational efficiency and staff capacity",
      avoid: "AI transformation"
    },
    {
      say: "Support human judgment",
      avoid: "Automate decisions"
    },
    {
      say: "Start with painful recurring work",
      avoid: "Pick an AI use case first"
    },
    {
      say: "Data boundaries and consent",
      avoid: "Upload everything and see what happens"
    }
  ],
  materials: [
    {
      title: "AI 101 brief",
      audience: "AMPT staff",
      status: "Draft next",
      purpose: "Explain practical AI concepts in plain language without hype or fear.",
      owner: "Nick"
    },
    {
      title: "Ethics and anti-racism framing",
      audience: "Angela, Anna, board",
      status: "Draft next",
      purpose: "Name privacy, consent, bias, surveillance, labor, and human-in-the-loop boundaries.",
      owner: "Nick"
    },
    {
      title: "2-3 candidate solution examples",
      audience: "AMPT leadership",
      status: "In prototype",
      purpose: "Show realistic workflow examples across reporting, CRM/fundraising, and finance/ops.",
      owner: "Nick + Barb"
    },
    {
      title: "Board-ready talking points",
      audience: "AMPT board",
      status: "In prototype",
      purpose: "Give Angela concise language for why this is capacity-building work, not job replacement.",
      owner: "Nick"
    },
    {
      title: "Chicago onsite plan",
      audience: "Angela, Anna, Barb, Denis",
      status: "In prototype",
      purpose: "Propose a 1-2 day observation agenda that validates workflows before building.",
      owner: "Nick + Barb"
    }
  ],
  followups: [
    {
      person: "Barb",
      next: "Send latest prototype and ask for added intake questions.",
      channel: "Email",
      timing: "Now",
      status: "Open"
    },
    {
      person: "Angela",
      next: "Frame prototype as discovery method, not proposed AMPT software.",
      channel: "Call / email",
      timing: "Next regroup",
      status: "Prepare"
    },
    {
      person: "Nicole",
      next: "Understand Keela workflow, donor follow-up process, and existing automation work.",
      channel: "Discovery call",
      timing: "Before CRM pilot framing",
      status: "Needed"
    },
    {
      person: "Anna",
      next: "Align on partner trust, relationship boundaries, and network rollout posture.",
      channel: "Angela intro",
      timing: "Before network-facing framing",
      status: "Needed"
    },
    {
      person: "Denis",
      next: "Keep updated on travel, pilot readiness, and where underwriting may matter.",
      channel: "Short recap",
      timing: "After Barb alignment",
      status: "Open"
    }
  ],
  nextActions: [
    {
      title: "Send Barb the working link/state export",
      detail: "Ask her to add or email additional pre-onsite intake questions.",
      owner: "Nick"
    },
    {
      title: "Research Keela enough to ask Nicole smart questions",
      detail: "Focus on workflows, integrations, exports, segmentation, and reporting.",
      owner: "Nick"
    },
    {
      title: "Schedule the SVP AI/IT learning call",
      detail: "Capture what worked, what failed, and what governance guardrails they used.",
      owner: "Barb"
    }
  ],
  blockers: [
    {
      title: "CRM reality is still unknown",
      detail: "Keela usage and Nicole's fundraising process must be understood before proposing CRM support."
    },
    {
      title: "Anna has not been aligned yet",
      detail: "Partner relationship and trust considerations need Anna's input before network-facing framing."
    },
    {
      title: "Data policy is not defined",
      detail: "No real AMPT records should enter any AI-enabled workflow until consent, vendor, and retention boundaries are documented."
    }
  ],
  meetingPrep: [
    {
      title: "Lead with operational efficiency",
      detail: "Use Barb's framing: AI may help create the solution, but operational efficiency is the thing AMPT is buying."
    },
    {
      title: "Show the prototype as method",
      detail: "Make clear that the hub demonstrates how discovery can become structure quickly; it is not the proposed AMPT solution."
    },
    {
      title: "Ask for workflow access",
      detail: "The next practical ask is permission to observe reporting, Keela/fundraising, finance/admin, and knowledge-sharing workflows."
    }
  ],
  audienceProfiles: {
    internal: {
      title: "Nonprofit ops assistant build cockpit",
      note: "Internal product view for shaping a simple SaaS assistant from real nonprofit workflows without overwhelming users.",
      label: "Builder working view",
      body: "Use this view to choose the first SaaS wedge, prepare demos, track pilot context, and keep the experience intentionally simple.",
      recommendedViews: ["dashboard", "intake", "risks", "roadmap"],
      navLabels: {
        dashboard: "Start Here",
        intake: "Discovery",
        risks: "Trust",
        roadmap: "Next Step"
      },
      pathway: [
        {
          title: "Start Here",
          body: "What Nick and Barb need to know and do next.",
          target: "dashboard"
        },
        {
          title: "Product Wedges",
          body: "Grant/report drafts, board packets, knowledge desk, and meeting follow-up.",
          target: "intake"
        },
        {
          title: "Trust",
          body: "Data boundaries, source rules, citations, and human review.",
          target: "risks"
        },
        {
          title: "Next Step",
          body: "Choose the first demo, pilot context, and stakeholder preview.",
          target: "roadmap"
        }
      ],
      overview: [
        {
          label: "Current Work",
          title: "Turn calls into product",
          detail: "Use the prototype to translate discovery into three simple SaaS opportunities."
        },
        {
          label: "Main Risk",
          title: "Do not overwhelm",
          detail: "Denis' signal is clear: less is more. The product must show one useful output at a time."
        },
        {
          label: "Next Move",
          title: "Pick the first wedge",
          detail: "Grant/report assistant, board packet assistant, or knowledge desk should be tested before expanding the platform."
        }
      ],
      nextActions: [
        {
          title: "Send Barb the working link/state export",
          detail: "Ask her to add or email additional pre-onsite intake questions.",
          owner: "Nick"
        },
        {
          title: "Research Keela enough to ask Nicole smart questions",
          detail: "Focus on workflows, integrations, exports, segmentation, and reporting.",
          owner: "Nick"
        },
        {
          title: "Schedule the SVP AI/IT learning call",
          detail: "Capture what worked, what failed, and what governance guardrails they used.",
          owner: "Barb"
        }
      ],
      blockers: [
        {
          title: "CRM reality is still unknown",
          detail: "Keela usage and Nicole's fundraising process must be understood before proposing CRM support."
        },
        {
          title: "Anna has not been aligned yet",
          detail: "Partner relationship and trust considerations need Anna's input before network-facing framing."
        },
        {
          title: "Data policy is not defined",
          detail: "No real AMPT records should enter any AI-enabled workflow until consent, vendor, and retention boundaries are documented."
        }
      ],
      meetingPrep: [
        {
          title: "Lead with operational efficiency",
          detail: "Use Barb's framing: AI may help create the solution, but operational efficiency is the thing AMPT is buying."
        },
        {
          title: "Show the prototype as method",
          detail: "Make clear that the hub demonstrates how discovery can become structure quickly; it is not the proposed AMPT solution."
        },
        {
          title: "Ask for workflow access",
          detail: "The next practical ask is permission to observe reporting, Keela/fundraising, finance/admin, and knowledge-sharing workflows."
        }
      ],
      briefing: [
        {
          label: "Purpose",
          body: "Use this hub to organize the AMPT discovery process and keep Nick and Barb aligned before client-facing decisions."
        },
        {
          label: "Current Ask",
          body: "Refine intake questions, research Keela, schedule the SVP learning call, and prepare the regroup materials."
        },
        {
          label: "Show",
          body: "Dashboard, Briefing, Call Prep, Materials, Workflows, Risks, and Charters."
        },
        {
          label: "Avoid",
          body: "Do not present speculative CRM or data automation details as settled before Nicole and Anna are aligned."
        }
      ],
      agenda: [
        {
          phase: "0-5 min",
          title: "Agree on the frame",
          detail: "Use Barb's language: the project is about operational efficiency and staff capacity; AI is only one possible way to build the solution."
        },
        {
          phase: "5-15 min",
          title: "Review what changed since kickoff",
          detail: "Confirm Keela/CRM discovery, AMPT newsletter context, Anna alignment, and the SVP AI/IT learning call."
        },
        {
          phase: "15-25 min",
          title: "Choose the next discovery asks",
          detail: "Decide what to ask Nicole, Anna, and Angela before onsite observation or any pilot charter language."
        },
        {
          phase: "25-35 min",
          title: "Walk the prototype as a method",
          detail: "Show dashboard, agenda, workflow map, risks, and drafts as a way to convert conversations into usable project structure."
        },
        {
          phase: "35-45 min",
          title: "Leave with owners",
          detail: "Confirm who sends what, what not to say yet, and which material should be ready for the mid-to-late June regroup."
        }
      ],
      demoPath: [
        {
          view: "Briefing",
          say: "This is our internal working room for turning calls into structure.",
          ask: "What would make this easier for Barb to co-manage with me?",
          decide: "Which parts are safe to eventually show Angela?"
        },
        {
          view: "Agenda",
          say: "The agenda keeps us from drifting into tool talk too early.",
          ask: "Are these the right decisions for our next call?",
          decide: "What needs to happen before the regroup package is sent?"
        },
        {
          view: "Workflows",
          say: "We are organizing the work around observed friction, not imagined AI use cases.",
          ask: "Which workflow do we need to understand first: Keela, reporting, finance/admin, or knowledge sharing?",
          decide: "Which staff member should explain the real current state?"
        },
        {
          view: "Risks",
          say: "The prototype is useful because it keeps privacy, consent, and relationship risk visible.",
          ask: "What should stay internal until Angela, Anna, and Nicole weigh in?",
          decide: "What is approved language versus rough working language?"
        }
      ]
    },
    ampt: {
      title: "Nonprofit product conversation",
      note: "A simple view for choosing one recurring document workflow to improve first.",
      label: "Nonprofit user view",
      body: "This view keeps the conversation practical: what paperwork takes time, what information needs care, and which output would be useful to test first.",
      recommendedViews: ["dashboard", "intake", "data", "roadmap"],
      navLabels: {
        dashboard: "Start",
        intake: "Questions",
        data: "Boundaries",
        roadmap: "Next Step"
      },
      pathway: [
        {
          title: "Start",
          body: "Why this is useful, what is safe, and what is not being decided yet.",
          target: "dashboard"
        },
        {
          title: "Choose Output",
          body: "Grant/report draft, board packet, knowledge answer, or meeting follow-up.",
          target: "intake"
        },
        {
          title: "Boundaries",
          body: "What information stays protected and where human review must remain explicit.",
          target: "data"
        },
        {
          title: "Next Step",
          body: "How a nonprofit moves from one demo to one narrow pilot.",
          target: "roadmap"
        }
      ],
      overview: [
        {
          label: "Purpose",
          title: "Find one painful output",
          detail: "The conversation starts with a recurring document or follow-up task, not a technology recommendation."
        },
        {
          label: "Decision",
          title: "Choose one safe workflow",
          detail: "The nonprofit decides what is useful to test and what information stays protected."
        },
        {
          label: "Guardrail",
          title: "People stay in control",
          detail: "Human judgment, privacy, and staff comfort come before any pilot."
        }
      ],
      simpleSummary: [
        {
          label: "What We Need To Learn",
          title: "Where staff time is getting stuck",
          detail: "Start by understanding recurring work that takes time, causes friction, or pulls staff away from mission-centered work."
        },
        {
          label: "What Stays Protected",
          title: "AMPT controls the boundaries",
          detail: "No sensitive donor, partner, staff, or community data should enter any tool until AMPT defines what is allowed."
        },
        {
          label: "Next Safe Step",
          title: "Choose one workflow to observe",
          detail: "The next step is observation and listening, not selecting a technology or committing to a pilot."
        }
      ],
      sayIt: [
        "We are not starting with a technology recommendation.",
        "We are starting by learning where work is taking too much time.",
        "AMPT will decide what data is protected and what is appropriate to test."
      ],
      nextConversation: {
        question: "Which recurring workflow would be most useful and safe to understand first?",
        ask: "Permission to observe one real workflow with the staff who know it best.",
        avoid: "Do not choose a tool, vendor, or AI pilot before the workflow is understood."
      },
      oneMinuteStory: "This work is about helping AMPT understand where staff time is getting stuck, then choosing one safe workflow to learn from. We are not starting with an AI tool or a vendor. We are starting with AMPT's real work, AMPT's privacy boundaries, and AMPT's judgment about what is appropriate to test.",
      confidence: [
        {
          label: "Solid",
          title: "The framing is right",
          detail: "The project is centered on staff capacity, not technology hype."
        },
        {
          label: "Still Open",
          title: "First workflow is not chosen",
          detail: "AMPT still needs to decide which area is safest and most useful to observe first."
        },
        {
          label: "Must Wait",
          title: "No real data yet",
          detail: "Sensitive information should wait until AMPT sets clear boundaries."
        }
      ],
      takeaway: {
        headline: "Start with one safe workflow",
        body: "The best next step is not to choose a tool. It is to choose one workflow AMPT wants to understand better, observe how the work really happens, and name the privacy boundaries before anything is tested.",
        remember: "AMPT stays in control of pace, data, and decisions."
      },
      followUp: {
        subject: "AMPT discovery next step",
        greeting: "Hi Angela,",
        body: "Thank you for the conversation. The clearest next step is to choose one recurring workflow that would be useful and safe to understand first. From there, Barb and I can help observe the current process, document what takes time, and identify what should stay protected before any pilot is discussed.",
        close: "The important point is that AMPT stays in control of what is observed, what data is off-limits, and what would be appropriate to test."
      },
      callClose: {
        script: "To close, the only decision we need is where to begin learning. If AMPT can choose one workflow and the right staff voices, Barb and I can keep the next step small, safe, and useful.",
        outcomes: [
          "One workflow AMPT is comfortable exploring first.",
          "One or two staff members who can explain how the work really happens.",
          "A clear list of information that should stay protected."
        ]
      },
      nextActions: [
        {
          title: "Choose one area to learn about first",
          detail: "Pick the reporting, fundraising/Keela, finance/admin, or knowledge-sharing work that feels most useful and safe to examine.",
          owner: "AMPT"
        },
        {
          title: "Invite the right staff voices",
          detail: "Identify who can explain the real work and where human judgment matters.",
          owner: "Angela / Anna"
        },
        {
          title: "Name what stays private",
          detail: "Mark which information should stay out of prototypes and which would require written approval.",
          owner: "AMPT"
        }
      ],
      blockers: [
        {
          title: "Workflow priorities are not selected yet",
          detail: "The first pilot should not be chosen until AMPT confirms which work creates the most friction."
        },
        {
          title: "Sensitive data boundaries need approval",
          detail: "The prototype is safe because it is local and synthetic; a real pilot needs AMPT-approved rules."
        },
        {
          title: "Staff comfort must be protected",
          detail: "Discovery should not feel like a job-replacement audit. It should feel like removing administrative drag."
        }
      ],
      meetingPrep: [
        {
          title: "This is not the proposed solution",
          detail: "Frame the hub as a way to organize discovery and show how quickly structure can emerge from conversation."
        },
        {
          title: "AMPT decides what is appropriate",
          detail: "Angela, Anna, Nicole, and staff should help decide what is observed, what is off-limits, and what success means."
        },
        {
          title: "Human review is built in",
          detail: "The solution areas assume humans approve decisions, communications, and sensitive interpretations."
        }
      ],
      briefing: [
        {
          label: "Purpose",
          body: "Show AMPT a calm discovery method for finding operational pain and protecting human judgment."
        },
        {
          label: "Current Ask",
          body: "Ask Angela which workflows are appropriate to observe and who should help define data boundaries."
        },
        {
          label: "Show",
          body: "Briefing, Call Prep, Workflows, Survey, Risks, Data, and Readiness."
        },
        {
          label: "Avoid",
          body: "Do not imply AMPT has already chosen a pilot, shared data, or committed to an AI tool."
        }
      ],
      agenda: [
        {
          phase: "0-5 min",
          title: "Start with trust and control",
          detail: "Make clear that AMPT chooses the workflows, boundaries, participants, and pace."
        },
        {
          phase: "5-15 min",
          title: "Name the real work",
          detail: "Ask which recurring tasks consume time, create stress, or pull people away from relationship-centered work."
        },
        {
          phase: "15-25 min",
          title: "Identify safe observation areas",
          detail: "Discuss reporting, fundraising/Keela, finance/admin, and knowledge-sharing as candidates without selecting a pilot yet."
        },
        {
          phase: "25-35 min",
          title: "Set data and consent boundaries",
          detail: "Define what is off-limits, what requires approval, and where human review must remain explicit."
        },
        {
          phase: "35-45 min",
          title: "Agree on next steps",
          detail: "Confirm who should join discovery, what Barb and Nick should prepare, and what Angela needs before any recommendation."
        }
      ],
      demoPath: [
        {
          view: "Briefing",
          say: "This is a discovery method, not a proposed AMPT software system.",
          ask: "Does this framing feel accurate, respectful, and useful?",
          decide: "Whether AMPT is comfortable using this structure for discovery."
        },
        {
          view: "Intake",
          say: "We start with work that is painful, repetitive, or pulling staff away from mission work.",
          ask: "Which questions feel safe and which should be reworded?",
          decide: "Who should answer these before any onsite observation?"
        },
        {
          view: "Data",
          say: "No real AMPT data should enter any AI-enabled workflow until boundaries are explicit.",
          ask: "What categories should be off-limits or require written approval?",
          decide: "Minimum data policy needed before a pilot."
        },
        {
          view: "Readiness",
          say: "A pilot should only move when workflow, consent, human review, and staff comfort are ready.",
          ask: "What would make this feel trustworthy enough to test internally?",
          decide: "Whether to proceed to observation, not implementation."
        }
      ]
    },
    sponsor: {
      title: "Simple sponsor update",
      note: "High-level view: what is happening, why it matters, and where support may help later.",
      label: "Simple sponsor update",
      body: "This view keeps the story high-level: the opportunity is a simple nonprofit operations assistant, tested through real workflows before any bigger rollout.",
      recommendedViews: ["dashboard"],
      navLabels: {
        dashboard: "Update"
      },
      pathway: [
        {
          title: "Status",
          body: "What is happening right now.",
          target: "dashboard"
        },
        {
          title: "Why It Matters",
          body: "How this may help nonprofits save staff time.",
          target: "dashboard"
        },
        {
          title: "What Comes Next",
          body: "Pick one small product wedge before any big funding ask.",
          target: "dashboard"
        },
        {
          title: "Helpful Role",
          body: "Encouragement now, support later when the pilot is scoped.",
          target: "dashboard"
        }
      ],
      overview: [
        {
          label: "Status",
          title: "Moving carefully",
          detail: "Nick and Barb are simplifying the idea into one useful nonprofit assistant."
        },
        {
          label: "Bottom Line",
          title: "This is about saving staff time",
          detail: "The goal is practical capacity for nonprofits, not technology for its own sake."
        },
        {
          label: "Denis' Role",
          title: "Encourage, then support later",
          detail: "Stay supportive now; help with a small pilot only after the first workflow is clear."
        }
      ],
      sponsorSummary: [
        {
          label: "Where Things Stand",
          title: "The project is moving carefully",
          detail: "Nick and Barb are organizing the next AMPT conversation around staff capacity, workflow pain, and trust."
        },
        {
          label: "Why It Matters",
          title: "This can help AMPT save time",
          detail: "The goal is to reduce repetitive administrative work so AMPT staff can spend more time on relationship and mission work."
        },
        {
          label: "How Denis Can Help",
          title: "Support a small, responsible pilot",
          detail: "The useful role is encouragement, travel/pilot support, and patience while AMPT chooses the right workflow."
        }
      ],
      sayIt: [
        "The work is moving carefully and thoughtfully.",
        "The goal is to help AMPT save staff time.",
        "Denis can help later by supporting a small pilot once AMPT is ready."
      ],
      nextConversation: {
        question: "Does this simple story make sense?",
        ask: "Encouragement and patience while AMPT chooses the right first workflow.",
        avoid: "Do not push AMPT toward a solution before they are ready."
      },
      oneMinuteStory: "The project is moving in a careful, practical way. Nick and Barb are helping AMPT look for places where staff time could be saved, but they are not pushing a technology solution. The helpful role for Denis is to stay supportive and be ready to help with a small pilot later, once AMPT chooses the right first workflow.",
      confidence: [
        {
          label: "Solid",
          title: "The relationship is active",
          detail: "Nick and Barb are moving the work forward with care."
        },
        {
          label: "Still Open",
          title: "Pilot not selected yet",
          detail: "AMPT has not chosen the first workflow, and that is okay."
        },
        {
          label: "Must Wait",
          title: "Funding ask comes later",
          detail: "Wait until the pilot is scoped before discussing a specific amount."
        }
      ],
      takeaway: {
        headline: "Careful progress, no pressure",
        body: "The project is moving, but it is intentionally early. AMPT should choose the right first workflow before anyone talks about a specific pilot or funding amount.",
        remember: "Denis' best role is steady encouragement and support when AMPT is ready."
      },
      followUp: {
        subject: "AMPT project update",
        greeting: "Hi Denis,",
        body: "Quick update: the AMPT work is moving in a careful and practical direction. Nick and Barb are helping frame the next conversation around staff time, operational capacity, and trust. No specific pilot or funding ask is ready yet, which is the right posture at this stage.",
        close: "The helpful role for now is encouragement and patience while AMPT chooses the first workflow to study."
      },
      callClose: {
        script: "The close is simple: this is promising, but it should stay patient. AMPT needs to choose the right first workflow before anyone talks about a pilot or funding amount.",
        outcomes: [
          "Denis understands the project is moving carefully.",
          "No pressure is added before AMPT is ready.",
          "Denis is prepared to support a small pilot later."
        ]
      },
      nextActions: [
        {
          title: "Keep the relationship warm",
          detail: "Encourage the work without pushing AMPT to move faster than trust allows.",
          owner: "Denis / Nick"
        },
        {
          title: "Support a small pilot later",
          detail: "Funding may help once AMPT has chosen a safe workflow to test internally.",
          owner: "Denis"
        },
        {
          title: "Let Barb and Nick do the discovery",
          detail: "The next phase is listening and workflow observation, not selling a tool.",
          owner: "Barb / Denis"
        }
      ],
      blockers: [
        {
          title: "AMPT has not picked the first workflow yet",
          detail: "That is appropriate. The first pilot should follow discovery, not come before it."
        },
        {
          title: "Trust matters more than speed",
          detail: "Angela, Anna, Nicole, and staff need to feel comfortable before anything expands."
        },
        {
          title: "Partner rollout comes later",
          detail: "AMPT should test internally before suggesting anything to partner nonprofits."
        }
      ],
      meetingPrep: [
        {
          title: "Say this simply",
          detail: "The work is moving, and the team is being thoughtful."
        },
        {
          title: "Avoid technical detail",
          detail: "Denis only needs the status, the purpose, and the next helpful role."
        },
        {
          title: "Name the practical goal",
          detail: "Help AMPT save staff time and build capacity."
        }
      ],
      briefing: [
        {
          label: "Simple Status",
          body: "Nick and Barb are shaping a careful discovery process with AMPT. The work is early, thoughtful, and moving in the right direction."
        },
        {
          label: "The Point",
          body: "This is about helping AMPT save time and support staff capacity. It is not about chasing technology."
        },
        {
          label: "What Comes Next",
          body: "AMPT should choose one safe internal workflow to study before anyone funds or builds a pilot."
        },
        {
          label: "Denis' Role",
          body: "Be supportive, help with logistics or funding when the pilot is ready, and let the discovery process stay patient."
        }
      ],
      agenda: [
        {
          phase: "0-5 min",
          title: "Status in plain English",
          detail: "The work is moving and the team is being careful."
        },
        {
          phase: "5-15 min",
          title: "Why it matters",
          detail: "AMPT may be able to save staff time and build capacity."
        },
        {
          phase: "15-25 min",
          title: "What happens next",
          detail: "Nick and Barb will help AMPT choose one safe workflow to study."
        },
        {
          phase: "25-35 min",
          title: "Where support helps",
          detail: "Denis can help later with travel, encouragement, or a small pilot once AMPT is ready."
        },
        {
          phase: "35-40 min",
          title: "Keep it patient",
          detail: "Do not push a solution before AMPT has named the right problem."
        }
      ],
      demoPath: [
        {
          view: "Briefing",
          say: "The work is moving in a careful, practical direction.",
          ask: "Does this feel clear enough?",
          decide: "Keep Denis' update simple."
        },
        {
          view: "Dashboard",
          say: "The key point is capacity: helping AMPT save staff time.",
          ask: "What support would be useful later?",
          decide: "No detailed ask until AMPT chooses the pilot."
        },
        {
          view: "Roadmap",
          say: "Start small inside AMPT before talking about the broader nonprofit network.",
          ask: "Can Denis support that patient approach?",
          decide: "Sponsor role stays encouraging and light-touch."
        }
      ]
    }
  },
  roadmap: [
    {
      phase: "Now",
      title: "Use the hub with Barb",
      detail: "Refine intake questions, action items, and stakeholder notes before showing a client-facing version."
    },
    {
      phase: "Before AMPT regroup",
      title: "Prepare calm discovery materials",
      detail: "AI 101, ethics framing, board talking points, and 2-3 solution examples grounded in workflow pain."
    },
    {
      phase: "AMPT alignment",
      title: "Bring Angela, Anna, and Nicole into discovery",
      detail: "Confirm which workflows are appropriate to observe and what data boundaries must be respected."
    },
    {
      phase: "Chicago onsite",
      title: "Observe actual work",
      detail: "Map reporting, fundraising/Keela, finance/admin, and knowledge-sharing workflows."
    },
    {
      phase: "Pilot build",
      title: "Build one focused solution",
      detail: "Choose the highest-value, lowest-risk workflow and keep humans in the review loop."
    },
    {
      phase: "Network model",
      title: "Decide what can scale",
      detail: "Separate AMPT-specific tooling from repeatable capacity-building patterns for partner nonprofits."
    }
  ],
  onsitePlan: [
    {
      phase: "Pre-work",
      title: "Collect workflow inventory",
      detail: "Ask AMPT to list recurring reporting, fundraising, finance/admin, and knowledge-sharing tasks without sharing sensitive records."
    },
    {
      phase: "Day 1 AM",
      title: "Leadership and trust alignment",
      detail: "Meet with Angela and Anna to confirm goals, boundaries, staff concerns, and what should not be automated."
    },
    {
      phase: "Day 1 PM",
      title: "Workflow walk-throughs",
      detail: "Observe reporting and Keela/fundraising workflows with the people who actually do the work."
    },
    {
      phase: "Day 2 AM",
      title: "Operations and data boundaries",
      detail: "Review finance/admin intake, recurring documents, access rules, and where personal or community data appears."
    },
    {
      phase: "Day 2 PM",
      title: "Pilot selection",
      detail: "Score candidate solutions by value, feasibility, risk, staff readiness, and ability to keep humans in control."
    }
  ],
  research: [
    {
      title: "Keela donor management",
      decision: "Can a fundraising workflow pilot support AMPT's existing CRM instead of replacing it?",
      owner: "Nick",
      status: "Open",
      notes: "Research integrations, exports, segmentation, automations, reporting, and API or Zapier-style connector options."
    },
    {
      title: "SVP peer learning",
      decision: "What has worked for a similar nonprofit support network using AI or automation?",
      owner: "Barb",
      status: "Open",
      notes: "Schedule the AI/IT expert conversation and capture usable patterns, mistakes, and governance practices."
    },
    {
      title: "AMPT newsletter/programs",
      decision: "Which AMPT services reveal common partner pain points that could shape future network rollout?",
      owner: "Nick + Barb",
      status: "Open",
      notes: "Track board cohort, grant readiness, fundraising, reporting, and capacity-building themes."
    },
    {
      title: "Data governance baseline",
      decision: "What policy language must exist before sensitive records touch any AI-enabled workflow?",
      owner: "Nick",
      status: "Open",
      notes: "Draft plain-language rules for consent, retention, vendor access, human review, and prohibited data."
    }
  ],
  risks: [
    {
      title: "Sensitive community data exposure",
      severity: "High",
      mitigation: "Start with synthetic/sample data, map sensitive fields, and require explicit data-handling approval before integrations."
    },
    {
      title: "AI framed as job replacement",
      severity: "High",
      mitigation: "Lead with operational efficiency, staff capacity, and human judgment. Avoid replacement language."
    },
    {
      title: "Building before observing real workflows",
      severity: "Medium",
      mitigation: "Use the onsite agenda and intake questions to validate pain before choosing a pilot."
    },
    {
      title: "Duplicating Nicole's existing work",
      severity: "Medium",
      mitigation: "Confirm Keela and fundraising processes with Nicole before defining any CRM-related solution."
    },
    {
      title: "Overbuilding for a one-person consultancy",
      severity: "Medium",
      mitigation: "Choose maintainable tools, small scopes, and clear handoff/support boundaries."
    },
    {
      title: "Consent is assumed instead of explicit",
      severity: "High",
      mitigation: "Document what data categories are allowed, prohibited, anonymized, or require written consent before use."
    }
  ],
  library: [
    {
      title: "Kickoff call summary",
      type: "Transcript / notes",
      status: "Captured",
      use: "Stakeholder context, pilot areas, ethics requirements, action items."
    },
    {
      title: "Barb June 5 call",
      type: "Transcript / notes",
      status: "Captured",
      use: "Barb role, process-first framing, prototype idea, weekly cadence."
    },
    {
      title: "Barb June 10 call",
      type: "Transcript / notes",
      status: "Captured",
      use: "Rename away from AI, operational efficiency positioning, SVP and Keela leads."
    },
    {
      title: "AMPT newsletter/program notes",
      type: "Public source",
      status: "In progress",
      use: "Understand AMPT offerings, partner needs, board cohort, grant-readiness themes."
    },
    {
      title: "Keela research notes",
      type: "Vendor research",
      status: "Needed",
      use: "Shape CRM/fundraising discovery without duplicating Nicole's work."
    }
  ],
  readiness: [
    {
      item: "Language avoids AI-first framing",
      status: "Ready",
      evidence: "Hub renamed to Solution Building Hub and uses operational efficiency language."
    },
    {
      item: "Prototype does not contain real AMPT personal data",
      status: "Ready",
      evidence: "Uses seeded project context and synthetic examples only."
    },
    {
      item: "Barb can understand and use it",
      status: "Ready",
      evidence: "Barb said it felt friendly, non-technical, and useful."
    },
    {
      item: "Keela assumptions validated",
      status: "Not ready",
      evidence: "Need Nicole workflow details before CRM/fundraising pilot is positioned."
    },
    {
      item: "Anna relationship/trust input captured",
      status: "Not ready",
      evidence: "Anna has not yet been looped into the planning."
    },
    {
      item: "Data governance rules drafted",
      status: "In progress",
      evidence: "Risk register and privacy checklist exist; policy language still needed."
    }
  ],
  privacyChecklist: [
    {
      label: "No real community-member PII in prototype",
      status: "Required"
    },
    {
      label: "Use sample or synthetic records for demonstrations",
      status: "Required"
    },
    {
      label: "Identify systems of record before any integration",
      status: "Required"
    },
    {
      label: "Define human review points for external communication",
      status: "Required"
    },
    {
      label: "Document vendor/data retention boundaries",
      status: "Required"
    }
  ],
  dataMatrix: [
    {
      category: "Synthetic or sample data",
      prototype: "Allowed",
      pilot: "Allowed",
      aiUse: "Allowed",
      rule: "Preferred for demos, testing, and early workflow design."
    },
    {
      category: "Public AMPT information",
      prototype: "Allowed",
      pilot: "Allowed",
      aiUse: "Allowed with review",
      rule: "Use only public-facing materials; review before summarizing externally."
    },
    {
      category: "Internal process notes",
      prototype: "Allowed",
      pilot: "Allowed",
      aiUse: "Review first",
      rule: "Avoid personal details; mark draft versus approved notes."
    },
    {
      category: "Donor records",
      prototype: "No real records",
      pilot: "Restricted",
      aiUse: "Human-approved only",
      rule: "Requires Nicole workflow approval, access rules, and communication review."
    },
    {
      category: "Community-member PII",
      prototype: "Prohibited",
      pilot: "Prohibited unless explicitly approved",
      aiUse: "Prohibited by default",
      rule: "Do not send to third-party AI tools without consent and documented policy."
    },
    {
      category: "Finance, banking, payroll, legal",
      prototype: "No real records",
      pilot: "Restricted",
      aiUse: "Restricted",
      rule: "Classify fields and approvals before intake automation or extraction."
    }
  ],
  glossary: [
    {
      term: "Solution building",
      meaning: "A practical process for identifying workflow pain and building a right-sized support tool.",
      useInsteadOf: "AI transformation"
    },
    {
      term: "Operational efficiency",
      meaning: "Reducing repetitive administrative burden so staff can spend more time on mission work.",
      useInsteadOf: "Automation for its own sake"
    },
    {
      term: "Human-in-the-loop",
      meaning: "AI or software may draft, sort, or prepare information, but people approve decisions and external communication.",
      useInsteadOf: "Fully automated decisions"
    },
    {
      term: "Data boundary",
      meaning: "A rule that defines what information can be used, where it can go, and who must approve it.",
      useInsteadOf: "Just upload it"
    },
    {
      term: "Pilot",
      meaning: "A small, measured test of one workflow before AMPT recommends anything to its nonprofit network.",
      useInsteadOf: "Big platform rollout"
    },
    {
      term: "Staff capacity",
      meaning: "The ability for AMPT staff to do higher-value work with less manual drag.",
      useInsteadOf: "Headcount reduction"
    }
  ],
  rolloutTracks: [
    {
      name: "AMPT Internal Pilot",
      audience: "AMPT staff",
      funding: "Underwritten pilot",
      model: "Observe workflows, choose one narrow pilot, validate ethics and usefulness, then document lessons."
    },
    {
      name: "Under-$2M Partner Nonprofits",
      audience: "AMPT free-service tier",
      funding: "Sponsored by Denis, AMPT grants, or pooled capacity-building funds",
      model: "Standardized discovery, lightweight templates, low-maintenance automations, and training-first support."
    },
    {
      name: "Over-$2M Partner Nonprofits",
      audience: "AMPT paid-service tier",
      funding: "Nonprofit-priced Solution Studio engagements",
      model: "Scoped consulting projects with deeper integrations, dashboards, and ongoing advisory options."
    }
  ],
  workflows: [
    {
      name: "Recurring reporting",
      owner: "Angela / Anna / operations",
      current: "Manual exports, merges, spreadsheet cleanup, and presentation-ready summaries.",
      evidence: "Ask for report cadence, source systems, recipients, manual steps, and time spent per cycle.",
      opportunity: "Dashboard or report automation with approved metrics and role-specific views."
    },
    {
      name: "Fundraising and Keela",
      owner: "Nicole",
      current: "Donor management, segmentation, follow-up planning, and relationship tracking.",
      evidence: "Confirm Keela usage, fields, tags, exports, reminders, and where work happens outside Keela.",
      opportunity: "Next-action support, donor tagging hygiene, and human-approved outreach prep."
    },
    {
      name: "Finance and admin intake",
      owner: "Finance / operations",
      current: "Invoices, forms, receipts, recurring document review, and routine data entry.",
      evidence: "Collect document types, volume, approval steps, sensitive fields, and exception handling.",
      opportunity: "Structured intake queue with extraction, routing, and human review."
    },
    {
      name: "Internal knowledge sharing",
      owner: "All staff",
      current: "Knowledge lives in meetings, inboxes, documents, and individual memory.",
      evidence: "Map repeated questions, recurring meetings, document repositories, and decision history.",
      opportunity: "Searchable internal memory with draft/approved content boundaries."
    }
  ],
  charters: [
    {
      name: "Reporting + Analytics Relief",
      problem: "Manual reporting appears to consume repeated staff time and may be the easiest value to measure.",
      scope: "One recurring report or dashboard workflow, using approved metrics and non-sensitive sample data first.",
      success: "Reduce manual preparation time, improve consistency, and give leadership a clearer readout.",
      data: "Start with exports or synthetic examples; map sensitive partner fields before connecting systems.",
      humanReview: "AMPT staff approves metric definitions and any external-facing interpretation.",
      kickoffNeeds: "Report examples, source systems, cadence, current manual steps, and report recipients."
    },
    {
      name: "Keela Fundraising Workflow Support",
      problem: "Donor follow-up and segmentation may create drift if work happens outside Keela or depends on memory.",
      scope: "Support Nicole's current process with tagging hygiene, next-action prep, or reporting around Keela.",
      success: "Improve follow-up consistency without replacing donor relationship judgment.",
      data: "Donor data requires strict access rules; use samples until Nicole confirms fields and permissions.",
      humanReview: "All donor communications and relationship decisions stay human-approved.",
      kickoffNeeds: "Keela workflow walkthrough, existing automation details, donor fields, and communication approval rules."
    },
    {
      name: "Finance + Operations Intake",
      problem: "Routine document intake and data entry may be taking staff time without requiring much judgment.",
      scope: "One repeated document type with extraction, routing, exception handling, and review queue.",
      success: "Reduce rekeying, improve routing speed, and preserve finance/admin oversight.",
      data: "Banking, vendor, staff, and personal information must be classified before any automation.",
      humanReview: "Finance/admin staff reviews extracted fields and approves routing before system-of-record updates.",
      kickoffNeeds: "Document samples, field list, approval flow, exception examples, and sensitivity map."
    },
    {
      name: "Internal Knowledge Sharing",
      problem: "Important context may live across meetings, inboxes, documents, and individual memory.",
      scope: "A searchable internal memory for approved documents, notes, and decisions with clear boundaries.",
      success: "Reduce repeated status questions and make prior decisions easier to find.",
      data: "Separate draft/private material from approved organizational knowledge.",
      humanReview: "Staff validates what content is trusted, outdated, confidential, or shareable.",
      kickoffNeeds: "Document locations, recurring questions, meeting cadence, decision records, and access rules."
    }
  ],
  surveyPacks: [
    {
      audience: "Leadership",
      questions: [
        "What internal work would you most like to make easier before recommending anything to partners?",
        "What concerns would make this effort feel unsafe or misaligned with AMPT values?",
        "Which decisions must always remain human-owned?"
      ],
      decision: "Sets scope, ethical guardrails, and leadership comfort."
    },
    {
      audience: "Program / strategy",
      questions: [
        "What partner-facing work creates the most repeat administrative burden?",
        "Which reports or updates are hardest to produce consistently?",
        "Where would better internal visibility improve partner support?"
      ],
      decision: "Identifies workflows with AMPT and future network relevance."
    },
    {
      audience: "Fundraising",
      questions: [
        "How is Keela used today for donor records, segmentation, and follow-up?",
        "What fundraising work still happens in spreadsheets, email, or memory?",
        "What donor communication steps require explicit human approval?"
      ],
      decision: "Prevents duplicating Nicole's CRM work and clarifies donor-data risk."
    },
    {
      audience: "Finance / admin",
      questions: [
        "What documents arrive repeatedly and require manual entry or routing?",
        "Which fields are sensitive, regulated, or inappropriate for AI tools?",
        "What exceptions require staff judgment?"
      ],
      decision: "Tests whether intake automation is valuable and safe."
    }
  ],
  economics: [
    {
      title: "Reporting time savings",
      assumption: "10-15 hours/week if manual reporting pain matches kickoff estimate.",
      implication: "A reporting pilot may produce the clearest measurable ROI.",
      confidence: "Medium"
    },
    {
      title: "Pilot build window",
      assumption: "4-6 weeks for a narrow validated pilot after discovery and data access.",
      implication: "Avoid enterprise scope; choose a single workflow with visible value.",
      confidence: "Medium"
    },
    {
      title: "Sponsored partner tier",
      assumption: "Under-$2M nonprofits likely need funded or subsidized work.",
      implication: "Templates and repeatable playbooks matter for network scale.",
      confidence: "High"
    },
    {
      title: "Maintainer capacity",
      assumption: "Solution Studio is one-person-led, so systems must stay small and observable.",
      implication: "Prefer boring infrastructure, clean handoff, and optional support retainers.",
      confidence: "High"
    }
  ],
  techStack: [
    {
      name: "Standalone HTML prototype",
      status: "Active",
      purpose: "Fast demos, local review, and low-friction stakeholder conversations."
    },
    {
      name: "GitHub",
      status: "Scaffolded",
      purpose: "Source control, version history, issue tracking, and GitHub Actions checks."
    },
    {
      name: "Railway",
      status: "Scaffolded",
      purpose: "Node/Express hosting once the prototype needs a shared URL."
    },
    {
      name: "Supabase",
      status: "Scaffolded",
      purpose: "Future authentication, project records, RLS policies, and persistence."
    },
    {
      name: "Data policy layer",
      status: "Needed before real AMPT data",
      purpose: "Defines what can be stored, processed, exported, or sent to vendors."
    }
  ],
  handoff: [
    {
      item: "Named owner for each workflow",
      status: "Needed",
      detail: "Every pilot needs a staff owner who understands the workflow and approves outputs."
    },
    {
      item: "Human review checkpoints",
      status: "Required",
      detail: "External communication, donor work, partner decisions, and sensitive data outputs stay human-reviewed."
    },
    {
      item: "Plain-language runbook",
      status: "Needed",
      detail: "Document how to use, troubleshoot, pause, and update the system."
    },
    {
      item: "Access and offboarding rules",
      status: "Needed",
      detail: "Define who can see what, how access is removed, and who audits permissions."
    },
    {
      item: "Fallback/manual process",
      status: "Required",
      detail: "The organization should be able to keep working if the system is unavailable."
    }
  ],
  notes: [
    {
      date: "2026-06-10",
      source: "Barb weekly",
      title: "Lead with operational efficiency",
      body: "Barb strongly agreed that AI should be framed as the tool underneath the work, not the headline. The public-facing language should center staff capacity, workflow pain, and operational efficiency."
    },
    {
      date: "2026-06-10",
      source: "Barb weekly",
      title: "Prototype reaction",
      body: "Barb found the prototype friendly and non-technical. She especially liked the intake questions and saw her role as translating operational pain into practical questions."
    },
    {
      date: "2026-06-10",
      source: "Barb weekly",
      title: "New research paths",
      body: "Barb may introduce an SVP AI/IT expert. AMPT appears to use Keela, which should be researched before any fundraising/CRM pilot is proposed."
    }
  ],
  decisions: [
    {
      date: "2026-06-10",
      title: "Rename hub away from AI-first language",
      rationale: "Barb and Nick agreed that 'operational efficiency' is safer and more accurate than leading with AI.",
      status: "Accepted"
    },
    {
      date: "2026-06-10",
      title: "Use prototype as internal working hub first",
      rationale: "The hub should help Nick and Barb sharpen the process before becoming AMPT-facing.",
      status: "Accepted"
    },
    {
      date: "2026-06-10",
      title: "Research Keela before CRM pilot framing",
      rationale: "A fundraising solution should support AMPT's existing donor-management reality rather than duplicate it.",
      status: "Open"
    }
  ],
  stakeholders: [
    {
      name: "Nick Perez",
      role: "Solution Studio lead",
      note: "Technical/product lead. Should frame the work as operational efficiency supported by AI, not AI for its own sake.",
      tags: ["Builder", "Strategy"]
    },
    {
      name: "Angela Mungia",
      role: "Founding Executive Director, AMPT",
      note: "Primary decision-maker. Equity, trust, labor, and community privacy are the doorway.",
      tags: ["Decision-maker", "Ethics-first"]
    },
    {
      name: "Barb Kimball",
      role: "Operations liaison",
      note: "Strong process-mapping background. Can help translate messy work into simple discovery questions.",
      tags: ["Discovery partner", "Operations"]
    },
    {
      name: "Nicole",
      role: "Fundraising, AMPT",
      note: "Fundraising lead. AMPT appears to use Keela; confirm current donor workflow before any CRM pilot framing.",
      tags: ["CRM", "Keela", "Validate first"]
    },
    {
      name: "Anna",
      role: "Managing Director of Strategy, AMPT",
      note: "Owns partner relationships. Buy-in needed before network-facing rollout is credible.",
      tags: ["Gatekeeper", "Trust"]
    },
    {
      name: "Denis",
      role: "Funder and connector",
      note: "Champion and likely underwriter. Offered to cover travel for Chicago onsite.",
      tags: ["Sponsor", "Travel"]
    },
    {
      name: "SVP AI/IT contact",
      role: "Potential peer learning source",
      note: "Barb can introduce an expert from Social Venture Partners to share what worked in a similar nonprofit network.",
      tags: ["Research", "Peer model"]
    }
  ],
  pilots: [
    {
      name: "Reporting + Analytics Relief",
      summary: "Replace manual exports, merges, and pivot-table work with role-specific reporting.",
      value: "Estimated 10-15 hours/week saved if current reporting pain matches kickoff assumptions.",
      risks: "Data access, metric definitions, sensitive partner information."
    },
    {
      name: "Keela Fundraising Workflow Support",
      summary: "Understand AMPT's Keela donor workflow, then explore tagging, segmentation, and follow-up prompts around the existing system.",
      value: "Could reduce donor follow-up drift while respecting Nicole's current process.",
      risks: "Must not duplicate or disrupt current CRM work; donor communications remain human-approved."
    },
    {
      name: "Finance + Operations Intake",
      summary: "Invoice/document intake with structured extraction, routing, and review queues.",
      value: "Good fit if repeated data entry is eating staff time without adding judgment.",
      risks: "Vendor, banking, and personally identifiable information require strict boundaries."
    },
    {
      name: "Internal Knowledge Sharing",
      summary: "Capture recurring staff updates, documents, and meeting notes into a searchable internal source of truth.",
      value: "Could reduce repetitive status meetings and help a lean team find prior decisions faster.",
      risks: "Needs clear rules around confidential partner details and draft-versus-approved knowledge."
    }
  ],
  questions: [
    {
      question: "What recurring task do you dread because it takes time but does not use your judgment?",
      why: "This frames the work around drudgery removal instead of job replacement.",
      category: "Pain points"
    },
    {
      question: "What work is pulling staff away from higher-value mission work?",
      why: "This is Barb's preferred operational doorway into the conversation.",
      category: "Capacity"
    },
    {
      question: "Which reports are created manually, how often, and who uses them?",
      why: "Reporting was the clearest time-savings candidate from the kickoff call.",
      category: "Reporting"
    },
    {
      question: "Which systems hold donor, partner, finance, program, and grant information today?",
      why: "A tool map is needed before any pilot can be scoped responsibly.",
      category: "Systems"
    },
    {
      question: "How is Keela used today, and where does donor follow-up still happen outside the system?",
      why: "The CRM pilot needs to fit AMPT's actual fundraising workflow.",
      category: "CRM"
    },
    {
      question: "Where does sensitive community or personal information appear in the workflow?",
      why: "Data-handling boundaries need to be known before AI touches any process.",
      category: "Privacy"
    },
    {
      question: "What decisions must remain explicitly human-owned?",
      why: "This turns the ethics principle into an operational rule.",
      category: "Governance"
    },
    {
      question: "What would a successful pilot need to prove before AMPT recommends anything to partners?",
      why: "This connects the internal pilot to future network credibility.",
      category: "Success"
    }
  ]
};

let state = loadState();

const owners = ["Nick", "Barb", "Nick + Barb", "Angela", "Nicole", "Anna", "Denis", "SVP contact"];

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return structuredClone(seedState);

  try {
    return JSON.parse(saved);
  } catch {
    return structuredClone(seedState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function render() {
  document.body.dataset.activeView = document.querySelector(".nav-button.active")?.dataset.view || "dashboard";
  renderAudience();
  renderNavigation();
  renderPathway();
  renderModeOverview();
  renderSimpleSummary();
  renderOneMinuteStory();
  renderConfidence();
  renderTakeaway();
  renderSayIt();
  renderNextConversation();
  renderCallClose();
  renderFollowUp();
  renderTodayStrip();
  renderMetrics();
  renderDecisionQueue();
  renderDashboardBrief();
  renderDashboardPriorities();
  renderGrantAssistant();
  renderBriefing();
  renderAgenda();
  renderDemoPath();
  renderTasks();
  renderViews();
  renderPrep();
  renderMaterials();
  renderStakeholders();
  renderFollowups();
  renderWorkflows();
  renderPilots();
  renderCharters();
  renderComparison();
  renderQuestions();
  renderSurvey();
  renderOnsite();
  renderResearch();
  renderRisks();
  renderDataMatrix();
  renderGlossary();
  renderLibrary();
  renderReadiness();
  renderNotes();
  renderDecisions();
  renderEconomics();
  renderTech();
  renderHandoff();
  renderRollout();
  renderRoadmap();
}

function renderNavigation() {
  const profile = getAudienceProfile();
  const recommendedViews = new Set(profile.recommendedViews || ["dashboard"]);
  const navButtons = Array.from(document.querySelectorAll(".nav-button"));
  const showAll = Boolean(state.showAllViews);
  const isConversationMode = state.audienceMode === "ampt" || state.audienceMode === "sponsor";
  const toggle = document.querySelector("#showAllViewsButton");
  const menuButton = document.querySelector("#conversationMenuButton");

  document.body.classList.toggle("conversation-mode", isConversationMode);
  document.body.classList.toggle("conversation-menu-open", isConversationMode && Boolean(state.showConversationMenu));

  if (menuButton) {
    menuButton.hidden = !isConversationMode;
    menuButton.textContent = state.showConversationMenu ? "Hide Sections" : "Sections";
    menuButton.setAttribute("aria-pressed", String(Boolean(state.showConversationMenu)));
  }

  document.querySelectorAll(".guided-stepper button").forEach((button, index) => {
    button.classList.toggle("active", isConversationMode && index === 0);
  });

  if (toggle) {
    const hiddenCount = navButtons.filter((button) => !recommendedViews.has(button.dataset.view)).length;
    toggle.textContent = showAll ? "Simple menu" : "More";
    toggle.setAttribute("aria-pressed", String(showAll));
  }

  navButtons.forEach((button) => {
    if (!button.dataset.fullLabel) {
      button.dataset.fullLabel = button.textContent.trim();
    }
    const isRecommended = recommendedViews.has(button.dataset.view);
    button.hidden = !showAll && !isRecommended;
    button.classList.toggle("is-secondary", showAll && !isRecommended);
    button.textContent = !showAll && profile.navLabels?.[button.dataset.view] ? profile.navLabels[button.dataset.view] : button.dataset.fullLabel;
  });

  document.querySelectorAll(".nav-group-label").forEach((label) => {
    let next = label.nextElementSibling;
    let hasVisibleButton = false;
    while (next && !next.classList.contains("nav-group-label")) {
      if (next.classList.contains("nav-button") && !next.hidden) {
        hasVisibleButton = true;
        break;
      }
      next = next.nextElementSibling;
    }
    label.classList.toggle("is-empty", !hasVisibleButton);
  });

  const activeButton = document.querySelector(".nav-button.active");
  if (!activeButton || activeButton.hidden) {
    activateView(profile.recommendedViews?.[0] || "dashboard");
  }
}

function renderDashboardPriorities() {
  const profile = getAudienceProfile();
  renderPriorityList("#nextActionList", profile.nextActions, "owner");
  renderPriorityList("#blockerList", profile.blockers);
  renderPriorityList("#meetingPrepList", profile.meetingPrep);
}

function ensureGrantAssistantState() {
  if (!state.grantAssistant) {
    state.grantAssistant = structuredClone(seedState.grantAssistant);
  }
  if (!Array.isArray(state.grantAssistant.approvedLanguage)) {
    state.grantAssistant.approvedLanguage = [];
  }
  state.grantAssistant.approvedLanguage = state.grantAssistant.approvedLanguage.filter(
    (item) => !item.text?.includes("recurring administrative burden so nonprofit staff can spend more time")
  );
}

function renderGrantAssistant() {
  ensureGrantAssistantState();
  const assistant = state.grantAssistant;
  const outputType = document.querySelector("#grantOutputType");
  if (!outputType) return;

  outputType.value = assistant.outputType || "grantAnswer";
  document.querySelector("#grantPrompt").value = assistant.prompt || "";
  document.querySelector("#grantSourceNotes").value = assistant.sourceNotes || "";
  document.querySelector("#grantTone").value = assistant.tone || "clear";
  document.querySelector("#grantDraftOutput").value = assistant.draft || "";
  renderApprovedLanguage();
}

function renderApprovedLanguage() {
  const list = document.querySelector("#approvedLanguageList");
  if (!list) return;
  ensureGrantAssistantState();
  list.innerHTML = "";

  if (!state.grantAssistant.approvedLanguage.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "No approved language saved yet.";
    list.append(empty);
    return;
  }

  state.grantAssistant.approvedLanguage.forEach((item) => {
    const card = document.createElement("article");
    card.className = "approved-language-card";
    card.innerHTML = `
      <div>
        <span>${escapeHtml(item.type)}</span>
        <h5>${escapeHtml(item.title)}</h5>
        <p>${escapeHtml(item.text)}</p>
      </div>
      <div class="approved-language-actions">
        <button class="ghost-button use-approved-language" type="button" data-approved-id="${escapeHtml(item.id)}">Use</button>
        <button class="icon-button remove-approved-language" type="button" data-approved-id="${escapeHtml(item.id)}" aria-label="Remove approved language">×</button>
      </div>
    `;
    list.append(card);
  });
}

function renderPathway() {
  const profile = getAudienceProfile();
  const items = profile.pathway || [];
  const fields = [
    ["#pathOneTitle", "#pathOneBody"],
    ["#pathTwoTitle", "#pathTwoBody"],
    ["#pathThreeTitle", "#pathThreeBody"],
    ["#pathFourTitle", "#pathFourBody"]
  ];

  items.forEach((item, index) => {
    const [titleSelector, bodySelector] = fields[index] || [];
    const title = document.querySelector(titleSelector);
    const body = document.querySelector(bodySelector);
    const button = document.querySelectorAll(".path-button")[index];
    if (title) title.textContent = item.title;
    if (body) body.textContent = item.body;
    if (button) button.dataset.viewTarget = item.target;
  });
}

function renderModeOverview() {
  const panel = document.querySelector("#modeOverview");
  if (!panel) return;
  const profile = getAudienceProfile();
  const items = profile.overview || [];
  const fields = [
    ["#overviewOneLabel", "#overviewOneTitle", "#overviewOneDetail"],
    ["#overviewTwoLabel", "#overviewTwoTitle", "#overviewTwoDetail"],
    ["#overviewThreeLabel", "#overviewThreeTitle", "#overviewThreeDetail"]
  ];

  items.forEach((item, index) => {
    const [labelSelector, titleSelector, detailSelector] = fields[index] || [];
    const label = document.querySelector(labelSelector);
    const title = document.querySelector(titleSelector);
    const detail = document.querySelector(detailSelector);
    if (label) label.textContent = item.label;
    if (title) title.textContent = item.title;
    if (detail) detail.textContent = item.detail;
  });
}

function renderSimpleSummary() {
  const panel = document.querySelector("#simpleSummaryPanel");
  if (!panel) return;
  const profile = getAudienceProfile();
  const items = profile.simpleSummary || profile.sponsorSummary || [];
  const fields = [
    ["#simpleOneLabel", "#simpleOneTitle", "#simpleOneDetail"],
    ["#simpleTwoLabel", "#simpleTwoTitle", "#simpleTwoDetail"],
    ["#simpleThreeLabel", "#simpleThreeTitle", "#simpleThreeDetail"]
  ];

  items.forEach((item, index) => {
    const [labelSelector, titleSelector, detailSelector] = fields[index] || [];
    const label = document.querySelector(labelSelector);
    const title = document.querySelector(titleSelector);
    const detail = document.querySelector(detailSelector);
    if (label) label.textContent = item.label;
    if (title) title.textContent = item.title;
    if (detail) detail.textContent = item.detail;
  });
}

function renderOneMinuteStory() {
  const story = document.querySelector("#oneMinuteStoryText");
  if (!story) return;
  story.textContent = getAudienceProfile().oneMinuteStory || "";
}

function renderConfidence() {
  const list = document.querySelector("#confidenceList");
  if (!list) return;
  const profile = getAudienceProfile();
  list.innerHTML = "";

  (profile.confidence || []).forEach((item) => {
    const card = document.createElement("article");
    card.innerHTML = `
      <span>${escapeHtml(item.label)}</span>
      <strong>${escapeHtml(item.title)}</strong>
      <p>${escapeHtml(item.detail)}</p>
    `;
    list.append(card);
  });
}

function renderTakeaway() {
  const profile = getAudienceProfile();
  const item = profile.takeaway;
  if (!item) return;

  document.querySelector("#takeawayHeadline").textContent = item.headline;
  document.querySelector("#takeawayBody").textContent = item.body;
  document.querySelector("#takeawayRemember").textContent = item.remember;
}

function renderSayIt() {
  const list = document.querySelector("#sayItList");
  if (!list) return;
  const profile = getAudienceProfile();
  list.innerHTML = "";

  (profile.sayIt || []).forEach((item) => {
    const point = document.createElement("p");
    point.textContent = item;
    list.append(point);
  });
}

function renderNextConversation() {
  const profile = getAudienceProfile();
  const item = profile.nextConversation;
  if (!item) return;

  document.querySelector("#nextQuestionText").textContent = item.question;
  document.querySelector("#nextAskText").textContent = item.ask;
  document.querySelector("#nextAvoidText").textContent = item.avoid;
}

function renderCallClose() {
  const profile = getAudienceProfile();
  const item = profile.callClose;
  const outcomes = document.querySelector("#callCloseOutcomes");
  if (!item || !outcomes) return;

  document.querySelector("#callCloseScript").textContent = item.script;
  outcomes.innerHTML = "";
  item.outcomes.forEach((outcome) => {
    const li = document.createElement("li");
    li.textContent = outcome;
    outcomes.append(li);
  });
}

function renderFollowUp() {
  const output = document.querySelector("#followUpText");
  if (!output) return;
  output.textContent = buildFollowUpNote();
}

function renderDecisionQueue() {
  const list = document.querySelector("#decisionQueueList");
  if (!list) return;
  list.innerHTML = "";

  const openDecisions = state.decisions.filter((decision) => decision.status !== "Accepted").slice(0, 3);
  if (!openDecisions.length) {
    const empty = document.createElement("article");
    empty.className = "decision-empty";
    empty.textContent = "No open decisions. Use Add Decision when the next call surfaces a choice.";
    list.append(empty);
    return;
  }

  openDecisions.forEach((decision) => {
    const row = document.createElement("article");
    row.className = "decision-card";
    row.innerHTML = `
      <div>
        <span>${escapeHtml(decision.status)}</span>
        <h4>${escapeHtml(decision.title)}</h4>
        <p>${escapeHtml(decision.rationale)}</p>
      </div>
      <button class="ghost-button decision-accept" type="button" data-decision-title="${escapeHtml(decision.title)}">Mark decided</button>
    `;
    list.append(row);
  });
}

function renderDashboardBrief() {
  const output = document.querySelector("#dashboardBriefOutput");
  if (!output) return;
  output.textContent = buildDashboardBrief();
}

function buildDashboardBrief() {
  const profile = getAudienceProfile();
  const openTasks = state.tasks.filter((task) => !task.complete).slice(0, 3);
  const openDecisions = state.decisions.filter((decision) => decision.status !== "Accepted").slice(0, 2);

  return [
    `${profile.title}`,
    "",
    `Frame: ${profile.body}`,
    "",
    "One-minute story:",
    profile.oneMinuteStory || "Use the dashboard summary as the story.",
    "",
    "Key takeaway:",
    profile.takeaway ? `${profile.takeaway.headline}: ${profile.takeaway.body}` : "- No takeaway set.",
    "",
    "Call close:",
    profile.callClose ? `${profile.callClose.script}\n${profile.callClose.outcomes.map((item) => `- ${item}`).join("\n")}` : "- No close set.",
    "",
    "Confidence:",
    profile.confidence ? profile.confidence.map((item) => `- ${item.label}: ${item.title}. ${item.detail}`).join("\n") : "- No confidence notes.",
    "",
    "Next actions:",
    formatTasks(openTasks),
    "",
    "Open decisions:",
    openDecisions.length
      ? openDecisions.map((decision) => `- ${decision.title}: ${decision.rationale}`).join("\n")
      : "- No open decisions.",
    "",
    "Meeting flow:",
    formatAgenda(profile),
    "",
    "Watch-outs:",
    profile.blockers.map((item) => `- ${item.title}: ${item.detail}`).join("\n")
  ].join("\n");
}

function renderTodayStrip() {
  const profile = getAudienceProfile();
  const openTasks = state.tasks
    .filter((task) => !task.complete)
    .sort((a, b) => String(a.due || "9999-12-31").localeCompare(String(b.due || "9999-12-31")));
  const dueTask = openTasks[0];
  const blocker = profile.blockers?.[0];
  const readyMaterial = state.materials.find((item) => item.status === "In prototype") || state.materials[0];

  const dueTitle = document.querySelector("#todayDueTitle");
  const dueDetail = document.querySelector("#todayDueDetail");
  const blockedTitle = document.querySelector("#todayBlockedTitle");
  const blockedDetail = document.querySelector("#todayBlockedDetail");
  const readyTitle = document.querySelector("#todayReadyTitle");
  const readyDetail = document.querySelector("#todayReadyDetail");
  if (!dueTitle || !dueDetail || !blockedTitle || !blockedDetail || !readyTitle || !readyDetail) return;

  if (dueTask) {
    dueTitle.textContent = dueTask.title;
    dueDetail.textContent = `${dueTask.owner}${dueTask.due ? ` by ${formatDisplayDate(dueTask.due)}` : ""}`;
  } else {
    dueTitle.textContent = "No open actions";
    dueDetail.textContent = "Everything in the action list is marked complete.";
  }

  blockedTitle.textContent = blocker?.title || "No blocker selected";
  blockedDetail.textContent = blocker?.detail || "No critical dependency has been selected.";

  readyTitle.textContent = readyMaterial?.title || "No material selected";
  readyDetail.textContent = readyMaterial ? `${readyMaterial.status}: ${readyMaterial.purpose}` : "No material is ready yet.";
}

function renderPriorityList(selector, items, metaKey) {
  const list = document.querySelector(selector);
  if (!list) return;
  list.innerHTML = "";

  items.forEach((item) => {
    const row = document.createElement("article");
    row.className = "priority-item";
    row.innerHTML = `
      <strong>${escapeHtml(item.title)}</strong>
      <span>${escapeHtml(item.detail)}</span>
      ${metaKey && item[metaKey] ? `<em>${escapeHtml(item[metaKey])}</em>` : ""}
    `;
    list.append(row);
  });
}

function renderBriefing() {
  const grid = document.querySelector("#briefingGrid");
  if (!grid) return;
  const profile = getAudienceProfile();
  grid.innerHTML = "";

  profile.briefing.forEach((item) => {
    const card = document.createElement("article");
    card.className = "data-card briefing-card";
    card.innerHTML = `
      <span>${escapeHtml(item.label)}</span>
      <p>${escapeHtml(item.body)}</p>
    `;
    grid.append(card);
  });
}

function renderAgenda() {
  const list = document.querySelector("#agendaList");
  if (!list) return;
  const profile = getAudienceProfile();
  list.innerHTML = "";

  document.querySelector("#agendaNote").textContent = `${profile.label}: ${profile.note}`;

  profile.agenda.forEach((item) => {
    const row = document.createElement("article");
    row.className = "timeline-item";
    row.innerHTML = `
      <span class="timeline-phase">${escapeHtml(item.phase)}</span>
      <div>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.detail)}</p>
      </div>
    `;
    list.append(row);
  });
}

function renderDemoPath() {
  const grid = document.querySelector("#demoPathGrid");
  if (!grid) return;
  const profile = getAudienceProfile();
  grid.innerHTML = "";

  document.querySelector("#demoNote").textContent = `${profile.label}: show only the views that help this audience make the next decision.`;

  profile.demoPath.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "demo-card";
    card.innerHTML = `
      <span class="demo-step">Step ${index + 1}</span>
      <h3>${escapeHtml(item.view)}</h3>
      <dl>
        <div>
          <dt>Say</dt>
          <dd>${escapeHtml(item.say)}</dd>
        </div>
        <div>
          <dt>Ask</dt>
          <dd>${escapeHtml(item.ask)}</dd>
        </div>
        <div>
          <dt>Decide</dt>
          <dd>${escapeHtml(item.decide)}</dd>
        </div>
      </dl>
    `;
    grid.append(card);
  });
}

function renderAudience() {
  const modeInput = document.querySelector("#audienceMode");
  modeInput.value = state.audienceMode || "internal";

  const selected = getAudienceProfile();
  document.body.dataset.audience = state.audienceMode || "internal";
  document.querySelector("#dashboardTitle").textContent = selected.title;
  document.querySelector("#dashboardNote").textContent = selected.note;
  document.querySelector("#audienceBanner").innerHTML = `
    <div>
      <strong>${escapeHtml(selected.label)}</strong>
      <span>${escapeHtml(selected.body)}</span>
    </div>
  `;
}

function getAudienceProfile() {
  return state.audienceProfiles?.[state.audienceMode] || state.audienceProfiles.internal;
}

function renderMetrics() {
  document.querySelector("#openTaskCount").textContent = state.tasks.filter((task) => !task.complete).length;
  document.querySelector("#pilotCount").textContent = state.pilots.length;
  document.querySelector("#stakeholderCount").textContent = state.stakeholders.length;
  document.querySelector("#researchCount").textContent = state.research.length;
  document.querySelector("#materialReadyCount").textContent = state.materials.filter((item) => item.status === "In prototype").length;
  document.querySelector("#highRiskCount").textContent = state.risks.filter((item) => item.severity === "High").length;
  document.querySelector("#workflowCount").textContent = state.workflows.length;
  document.querySelector("#handoffCount").textContent = state.handoff.filter((item) => item.status === "Required").length;
}

function renderViews() {
  const grid = document.querySelector("#viewGrid");
  if (!grid) return;
  grid.innerHTML = "";

  state.views.forEach((item) => {
    const card = document.createElement("article");
    card.className = "data-card view-card";
    card.innerHTML = `
      <h3>${escapeHtml(item.name)}</h3>
      <p><strong>${escapeHtml(item.audience)}</strong></p>
      <p>${escapeHtml(item.summary)}</p>
      <div class="next-step"><strong>Next</strong><span>${escapeHtml(item.next)}</span></div>
    `;
    grid.append(card);
  });
}

function renderPrep() {
  const talkTrackList = document.querySelector("#talkTrackList");
  const languageGuide = document.querySelector("#languageGuide");
  if (!talkTrackList || !languageGuide) return;

  talkTrackList.innerHTML = "";
  state.talkTrack.forEach((item) => {
    const card = document.createElement("article");
    card.className = "prep-card";
    card.innerHTML = `<strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.body)}</span>`;
    talkTrackList.append(card);
  });

  languageGuide.innerHTML = "";
  state.languageGuide.forEach((item) => {
    const row = document.createElement("article");
    row.className = "language-row";
    row.innerHTML = `
      <div><strong>Say</strong><span>${escapeHtml(item.say)}</span></div>
      <div><strong>Avoid</strong><span>${escapeHtml(item.avoid)}</span></div>
    `;
    languageGuide.append(row);
  });
}

function renderMaterials() {
  const grid = document.querySelector("#materialsGrid");
  if (!grid) return;
  grid.innerHTML = "";

  state.materials.forEach((item) => {
    const card = document.createElement("article");
    card.className = "data-card";
    card.innerHTML = `
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.purpose)}</p>
      <div class="tag-row">
        <span class="tag">${escapeHtml(item.audience)}</span>
        <span class="tag safe">${escapeHtml(item.status)}</span>
        <span class="tag">${escapeHtml(item.owner)}</span>
      </div>
    `;
    grid.append(card);
  });
}

function renderTasks() {
  const taskList = document.querySelector("#taskList");
  const template = document.querySelector("#taskTemplate");
  taskList.innerHTML = "";

  state.tasks.forEach((task) => {
    const node = template.content.firstElementChild.cloneNode(true);
    node.classList.toggle("done", task.complete);

    const completeInput = node.querySelector(".task-complete");
    const titleInput = node.querySelector(".task-title");
    const ownerInput = node.querySelector(".task-owner");
    const dateInput = node.querySelector(".task-date");

    owners.forEach((owner) => {
      const option = document.createElement("option");
      option.value = owner;
      option.textContent = owner;
      ownerInput.append(option);
    });

    completeInput.checked = task.complete;
    titleInput.value = task.title;
    ownerInput.value = task.owner;
    dateInput.value = task.due;

    completeInput.addEventListener("change", () => {
      task.complete = completeInput.checked;
      saveState();
      render();
    });

    titleInput.addEventListener("input", () => {
      task.title = titleInput.value;
      saveState();
    });

    ownerInput.addEventListener("change", () => {
      task.owner = ownerInput.value;
      saveState();
    });

    dateInput.addEventListener("change", () => {
      task.due = dateInput.value;
      saveState();
    });

    node.querySelector(".task-remove").addEventListener("click", () => {
      state.tasks = state.tasks.filter((item) => item.id !== task.id);
      saveState();
      render();
    });

    taskList.append(node);
  });
}

function renderStakeholders() {
  const grid = document.querySelector("#stakeholderGrid");
  grid.innerHTML = "";

  state.stakeholders.forEach((person) => {
    const card = document.createElement("article");
    card.className = "data-card";
    card.innerHTML = `
      <h3>${escapeHtml(person.name)}</h3>
      <p><strong>${escapeHtml(person.role)}</strong></p>
      <p>${escapeHtml(person.note)}</p>
      <div class="tag-row">${person.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>
    `;
    grid.append(card);
  });
}

function renderFollowups() {
  const grid = document.querySelector("#followupGrid");
  if (!grid) return;
  grid.innerHTML = "";

  state.followups.forEach((item) => {
    const card = document.createElement("article");
    card.className = "data-card";
    card.innerHTML = `
      <h3>${escapeHtml(item.person)}</h3>
      <p>${escapeHtml(item.next)}</p>
      <div class="tag-row">
        <span class="tag">${escapeHtml(item.channel)}</span>
        <span class="tag">${escapeHtml(item.timing)}</span>
        <span class="tag ${item.status === "Needed" ? "risk" : "safe"}">${escapeHtml(item.status)}</span>
      </div>
    `;
    grid.append(card);
  });
}

function renderWorkflows() {
  const grid = document.querySelector("#workflowGrid");
  if (!grid) return;
  grid.innerHTML = "";

  state.workflows.forEach((workflow) => {
    const card = document.createElement("article");
    card.className = "data-card";
    card.innerHTML = `
      <h3>${escapeHtml(workflow.name)}</h3>
      <p><strong>Owner:</strong> ${escapeHtml(workflow.owner)}</p>
      <div class="note-stack">
        <div class="note-block"><strong>Current</strong><span>${escapeHtml(workflow.current)}</span></div>
        <div class="note-block safe"><strong>Evidence</strong><span>${escapeHtml(workflow.evidence)}</span></div>
        <div class="note-block"><strong>Opportunity</strong><span>${escapeHtml(workflow.opportunity)}</span></div>
      </div>
    `;
    grid.append(card);
  });
}

function renderPilots() {
  const grid = document.querySelector("#pilotGrid");
  grid.innerHTML = "";

  state.pilots.forEach((pilot) => {
    const score = scorePilot(pilot);
    const card = document.createElement("article");
    card.className = "data-card";
    card.innerHTML = `
      <h3>${escapeHtml(pilot.name)}</h3>
      <p>${escapeHtml(pilot.summary)}</p>
      <div class="score-row">
        <span>Readiness score</span>
        <strong>${score.total}/10</strong>
      </div>
      <p class="score-detail">${escapeHtml(score.reason)}</p>
      <div class="note-stack">
        <div class="note-block safe"><strong>Value</strong><span>${escapeHtml(pilot.value)}</span></div>
        <div class="note-block risk"><strong>Risks</strong><span>${escapeHtml(pilot.risks)}</span></div>
      </div>
    `;
    grid.append(card);
  });
}

function renderCharters() {
  const grid = document.querySelector("#charterGrid");
  if (!grid) return;
  grid.innerHTML = "";

  state.charters.forEach((charter) => {
    const card = document.createElement("article");
    card.className = "data-card charter-card";
    card.innerHTML = `
      <h3>${escapeHtml(charter.name)}</h3>
      <div class="note-stack">
        <div class="note-block"><strong>Problem</strong><span>${escapeHtml(charter.problem)}</span></div>
        <div class="note-block safe"><strong>Scope</strong><span>${escapeHtml(charter.scope)}</span></div>
        <div class="note-block"><strong>Success</strong><span>${escapeHtml(charter.success)}</span></div>
        <div class="note-block risk"><strong>Data boundary</strong><span>${escapeHtml(charter.data)}</span></div>
        <div class="note-block"><strong>Human review</strong><span>${escapeHtml(charter.humanReview)}</span></div>
        <div class="note-block"><strong>Kickoff needs</strong><span>${escapeHtml(charter.kickoffNeeds)}</span></div>
      </div>
    `;
    grid.append(card);
  });
}

function renderComparison() {
  const target = document.querySelector("#comparisonTable");
  if (!target) return;

  const rows = state.pilots
    .map((pilot) => ({ pilot, score: scorePilot(pilot) }))
    .sort((a, b) => b.score.total - a.score.total);

  target.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Candidate</th>
          <th>Score</th>
          <th>Value signal</th>
          <th>Risk signal</th>
          <th>Selection note</th>
        </tr>
      </thead>
      <tbody>
        ${rows
          .map(
            ({ pilot, score }) => `
              <tr>
                <td><strong>${escapeHtml(pilot.name)}</strong></td>
                <td>${score.total}/10</td>
                <td>${escapeHtml(pilot.value)}</td>
                <td>${escapeHtml(pilot.risks)}</td>
                <td>${escapeHtml(score.reason)}</td>
              </tr>
            `
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function scorePilot(pilot) {
  const text = `${pilot.name} ${pilot.summary} ${pilot.value} ${pilot.risks}`.toLowerCase();
  let score = 6;
  const reasons = ["Baseline discovery fit"];
  if (text.includes("reporting")) score += 2;
  if (text.includes("reporting")) reasons.push("clear kickoff pain signal");
  if (text.includes("human")) {
    score += 1;
    reasons.push("explicit human-review fit");
  }
  if (text.includes("sensitive") || text.includes("personally identifiable")) {
    score -= 1;
    reasons.push("privacy risk to validate");
  }
  if (text.includes("duplicate") || text.includes("disrupt")) {
    score -= 1;
    reasons.push("existing workflow dependency");
  }
  return {
    total: Math.max(1, Math.min(10, score)),
    reason: reasons.join("; ")
  };
}

function renderQuestions() {
  const list = document.querySelector("#questionList");
  list.innerHTML = "";

  state.questions.forEach((item) => {
    const row = document.createElement("article");
    row.className = "question-item";
    row.innerHTML = `
      <div>
        <strong>${escapeHtml(item.question)}</strong>
        <span>${escapeHtml(item.why)}</span>
      </div>
      <span class="category-pill">${escapeHtml(item.category)}</span>
    `;
    list.append(row);
  });
}

function renderSurvey() {
  const grid = document.querySelector("#surveyGrid");
  if (!grid) return;
  grid.innerHTML = "";

  state.surveyPacks.forEach((pack) => {
    const card = document.createElement("article");
    card.className = "data-card";
    card.innerHTML = `
      <h3>${escapeHtml(pack.audience)}</h3>
      <ul class="compact-list">
        ${pack.questions.map((question) => `<li>${escapeHtml(question)}</li>`).join("")}
      </ul>
      <div class="next-step"><strong>Decision</strong><span>${escapeHtml(pack.decision)}</span></div>
    `;
    grid.append(card);
  });
}

function renderRoadmap() {
  const list = document.querySelector("#roadmapList");
  if (!list) return;
  list.innerHTML = "";

  state.roadmap.forEach((item) => {
    const row = document.createElement("article");
    row.className = "timeline-item";
    row.innerHTML = `
      <span class="timeline-phase">${escapeHtml(item.phase)}</span>
      <div>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.detail)}</p>
      </div>
    `;
    list.append(row);
  });
}

function renderOnsite() {
  const list = document.querySelector("#onsiteList");
  if (!list) return;
  list.innerHTML = "";

  state.onsitePlan.forEach((item) => {
    const row = document.createElement("article");
    row.className = "timeline-item";
    row.innerHTML = `
      <span class="timeline-phase">${escapeHtml(item.phase)}</span>
      <div>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.detail)}</p>
      </div>
    `;
    list.append(row);
  });
}

function renderResearch() {
  const grid = document.querySelector("#researchGrid");
  if (!grid) return;
  grid.innerHTML = "";

  state.research.forEach((item) => {
    const card = document.createElement("article");
    card.className = "data-card";
    card.innerHTML = `
      <h3>${escapeHtml(item.title)}</h3>
      <p><strong>Decision:</strong> ${escapeHtml(item.decision)}</p>
      <div class="tag-row">
        <span class="tag">${escapeHtml(item.owner)}</span>
        <span class="tag safe">${escapeHtml(item.status)}</span>
      </div>
      <div class="next-step"><strong>Notes</strong><span>${escapeHtml(item.notes)}</span></div>
    `;
    grid.append(card);
  });
}

function renderRisks() {
  const grid = document.querySelector("#riskGrid");
  if (!grid) return;
  grid.innerHTML = "";

  state.risks.forEach((item) => {
    const card = document.createElement("article");
    card.className = "data-card";
    card.innerHTML = `
      <h3>${escapeHtml(item.title)}</h3>
      <div class="tag-row">
        <span class="tag risk">${escapeHtml(item.severity)} severity</span>
      </div>
      <div class="next-step"><strong>Mitigation</strong><span>${escapeHtml(item.mitigation)}</span></div>
    `;
    grid.append(card);
  });

  const checklist = document.createElement("article");
  checklist.className = "data-card checklist-card";
  checklist.innerHTML = `
    <h3>Privacy checklist</h3>
    <div class="checklist">
      ${state.privacyChecklist
        .map((item) => `<div><span aria-hidden="true">✓</span><strong>${escapeHtml(item.label)}</strong><em>${escapeHtml(item.status)}</em></div>`)
        .join("")}
    </div>
  `;
  grid.append(checklist);
}

function renderDataMatrix() {
  const target = document.querySelector("#dataMatrix");
  if (!target) return;

  target.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Data category</th>
          <th>Prototype</th>
          <th>Pilot</th>
          <th>AI use</th>
          <th>Rule</th>
        </tr>
      </thead>
      <tbody>
        ${state.dataMatrix
          .map(
            (item) => `
              <tr>
                <td><strong>${escapeHtml(item.category)}</strong></td>
                <td>${escapeHtml(item.prototype)}</td>
                <td>${escapeHtml(item.pilot)}</td>
                <td>${escapeHtml(item.aiUse)}</td>
                <td>${escapeHtml(item.rule)}</td>
              </tr>
            `
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function renderGlossary() {
  const grid = document.querySelector("#glossaryGrid");
  if (!grid) return;
  grid.innerHTML = "";

  state.glossary.forEach((item) => {
    const card = document.createElement("article");
    card.className = "data-card";
    card.innerHTML = `
      <h3>${escapeHtml(item.term)}</h3>
      <p>${escapeHtml(item.meaning)}</p>
      <div class="next-step"><strong>Use instead of</strong><span>${escapeHtml(item.useInsteadOf)}</span></div>
    `;
    grid.append(card);
  });
}

function renderLibrary() {
  const grid = document.querySelector("#libraryGrid");
  if (!grid) return;
  grid.innerHTML = "";

  state.library.forEach((item) => {
    const card = document.createElement("article");
    card.className = "data-card";
    card.innerHTML = `
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.use)}</p>
      <div class="tag-row">
        <span class="tag">${escapeHtml(item.type)}</span>
        <span class="tag ${item.status === "Needed" ? "risk" : "safe"}">${escapeHtml(item.status)}</span>
      </div>
    `;
    grid.append(card);
  });
}

function renderReadiness() {
  const grid = document.querySelector("#readinessGrid");
  if (!grid) return;
  grid.innerHTML = "";

  state.readiness.forEach((item) => {
    const card = document.createElement("article");
    card.className = "data-card";
    card.innerHTML = `
      <h3>${escapeHtml(item.item)}</h3>
      <p>${escapeHtml(item.evidence)}</p>
      <div class="tag-row">
        <span class="tag ${item.status === "Not ready" ? "risk" : item.status === "Ready" ? "safe" : ""}">${escapeHtml(item.status)}</span>
      </div>
    `;
    grid.append(card);
  });
}

function renderNotes() {
  const grid = document.querySelector("#notesGrid");
  if (!grid) return;
  grid.innerHTML = "";

  state.notes.forEach((note) => {
    const card = document.createElement("article");
    card.className = "data-card";
    card.innerHTML = `
      <h3>${escapeHtml(note.title)}</h3>
      <p>${escapeHtml(note.body)}</p>
      <div class="tag-row">
        <span class="tag">${escapeHtml(note.date)}</span>
        <span class="tag safe">${escapeHtml(note.source)}</span>
      </div>
    `;
    grid.append(card);
  });
}

function renderDecisions() {
  const list = document.querySelector("#decisionList");
  if (!list) return;
  list.innerHTML = "";

  state.decisions.forEach((decision) => {
    const row = document.createElement("article");
    row.className = "timeline-item";
    row.innerHTML = `
      <span class="timeline-phase">${escapeHtml(decision.status)}</span>
      <div>
        <h3>${escapeHtml(decision.title)}</h3>
        <p><strong>${escapeHtml(decision.date)}</strong> ${escapeHtml(decision.rationale)}</p>
      </div>
    `;
    list.append(row);
  });
}

function renderRollout() {
  const grid = document.querySelector("#rolloutGrid");
  if (!grid) return;
  grid.innerHTML = "";

  state.rolloutTracks.forEach((track) => {
    const card = document.createElement("article");
    card.className = "data-card";
    card.innerHTML = `
      <h3>${escapeHtml(track.name)}</h3>
      <p><strong>${escapeHtml(track.audience)}</strong></p>
      <div class="note-stack">
        <div class="note-block safe"><strong>Funding</strong><span>${escapeHtml(track.funding)}</span></div>
        <div class="note-block"><strong>Model</strong><span>${escapeHtml(track.model)}</span></div>
      </div>
    `;
    grid.append(card);
  });
}

function renderEconomics() {
  const grid = document.querySelector("#economicsGrid");
  if (!grid) return;
  grid.innerHTML = "";

  state.economics.forEach((item) => {
    const card = document.createElement("article");
    card.className = "data-card";
    card.innerHTML = `
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.assumption)}</p>
      <div class="note-stack">
        <div class="note-block safe"><strong>Implication</strong><span>${escapeHtml(item.implication)}</span></div>
      </div>
      <div class="tag-row"><span class="tag">${escapeHtml(item.confidence)} confidence</span></div>
    `;
    grid.append(card);
  });
}

function renderTech() {
  const grid = document.querySelector("#techGrid");
  if (!grid) return;
  grid.innerHTML = "";

  state.techStack.forEach((item) => {
    const card = document.createElement("article");
    card.className = "data-card";
    card.innerHTML = `
      <h3>${escapeHtml(item.name)}</h3>
      <p>${escapeHtml(item.purpose)}</p>
      <div class="tag-row"><span class="tag safe">${escapeHtml(item.status)}</span></div>
    `;
    grid.append(card);
  });
}

function renderHandoff() {
  const grid = document.querySelector("#handoffGrid");
  if (!grid) return;
  grid.innerHTML = "";

  state.handoff.forEach((item) => {
    const card = document.createElement("article");
    card.className = "data-card";
    card.innerHTML = `
      <h3>${escapeHtml(item.item)}</h3>
      <p>${escapeHtml(item.detail)}</p>
      <div class="tag-row"><span class="tag ${item.status === "Required" ? "risk" : ""}">${escapeHtml(item.status)}</span></div>
    `;
    grid.append(card);
  });
}

function addTask() {
  state.tasks.unshift({
    id: crypto.randomUUID(),
    title: "New action item",
    owner: "Nick",
    due: "",
    complete: false
  });
  saveState();
  render();
}

function addStakeholder() {
  const name = prompt("Stakeholder name");
  if (!name) return;

  state.stakeholders.push({
    name,
    role: "Role to clarify",
    note: "Add relationship notes, concerns, and next step.",
    tags: ["New"]
  });
  saveState();
  render();
}

function addPilot() {
  const name = prompt("Pilot concept name");
  if (!name) return;

  state.pilots.push({
    name,
    summary: "Describe the workflow, users, and current pain.",
    value: "Estimate time saved or quality improvement after discovery.",
    risks: "List data, ethics, adoption, and maintenance risks."
  });
  saveState();
  render();
}

function addQuestion() {
  const question = prompt("Discovery question");
  if (!question) return;

  state.questions.push({
    question,
    why: "Explain why this answer matters.",
    category: "Discovery"
  });
  saveState();
  render();
}

function addNote() {
  const title = prompt("Note title");
  if (!title) return;

  const body = prompt("Note detail") || "Add detail.";
  state.notes.unshift({
    date: new Date().toISOString().slice(0, 10),
    source: "Manual note",
    title,
    body
  });
  saveState();
  render();
}

function addDecision() {
  const title = prompt("Decision title");
  if (!title) return;

  const rationale = prompt("Rationale") || "Add rationale.";
  state.decisions.unshift({
    date: new Date().toISOString().slice(0, 10),
    title,
    rationale,
    status: "Open"
  });
  saveState();
  render();
}

function acceptDecision(title) {
  const decision = state.decisions.find((item) => item.title === title && item.status !== "Accepted");
  if (!decision) return;

  decision.status = "Accepted";
  decision.date = new Date().toISOString().slice(0, 10);
  saveState();
  render();
}

function captureDashboardItem() {
  const type = document.querySelector("#captureType").value;
  const input = document.querySelector("#captureText");
  const text = input.value.trim();
  if (!text) return;

  const parsed = splitCaptureText(text);
  const today = new Date().toISOString().slice(0, 10);

  if (type === "task") {
    state.tasks.unshift({
      id: crypto.randomUUID(),
      title: parsed.title,
      owner: "Nick",
      due: "",
      complete: false
    });
  } else if (type === "decision") {
    state.decisions.unshift({
      date: today,
      title: parsed.title,
      rationale: parsed.body,
      status: "Open"
    });
  } else {
    state.notes.unshift({
      date: today,
      source: "Quick capture",
      title: parsed.title,
      body: parsed.body
    });
  }

  input.value = "";
  saveState();
  render();
}

function syncGrantAssistantInputs() {
  ensureGrantAssistantState();
  state.grantAssistant.outputType = document.querySelector("#grantOutputType").value;
  state.grantAssistant.prompt = document.querySelector("#grantPrompt").value.trim();
  state.grantAssistant.sourceNotes = document.querySelector("#grantSourceNotes").value.trim();
  state.grantAssistant.tone = document.querySelector("#grantTone").value;
  state.grantAssistant.draft = document.querySelector("#grantDraftOutput").value;
}

function loadGrantExample() {
  ensureGrantAssistantState();
  state.grantAssistant.outputType = "grantAnswer";
  state.grantAssistant.tone = "clear";
  state.grantAssistant.prompt = "Describe the program for which you are requesting funding, the population served, the need being addressed, and the outcomes you expect to achieve during the grant period.";
  state.grantAssistant.sourceNotes = [
    "Organization: Southside Youth Arts Collective",
    "Program: After-school arts and mentoring program for middle and high school students",
    "Population served: Youth ages 12-18 on the South Side of Chicago, especially students who have limited access to arts enrichment, safe after-school spaces, and consistent adult mentorship.",
    "Need: Many students in the neighborhoods we serve do not have affordable access to arts programming after school. Families have told us they want safe, structured programs where young people can build confidence, express themselves, and connect with supportive adults. Schools are stretched thin and cannot always offer consistent creative enrichment.",
    "Program activities: Students meet three afternoons per week during the school year. They participate in visual arts, storytelling, digital media, music, and spoken word workshops. Each student is paired with a mentor. The program also includes monthly family showcases and two community exhibitions each year.",
    "Expected outcomes: Serve 75 students during the grant period. At least 80% of participating students will complete a final creative project. At least 70% will report increased confidence in sharing their ideas. Families will report stronger connection to school and community resources.",
    "Measurement: Attendance records, student surveys, mentor notes, completed creative projects, family feedback forms, and participation in showcases.",
    "Funding request: Support teaching artist stipends, program supplies, mentor coordination, transportation assistance, and the final community showcase."
  ].join("\n");
  state.grantAssistant.draft = "";
  saveState();
  renderGrantAssistant();
}

function createGrantDraft(event) {
  event?.preventDefault();
  syncGrantAssistantInputs();

  const assistant = state.grantAssistant;
  const prompt = assistant.prompt || "Draft a clear nonprofit grant or report response from the notes.";
  const notes = parseSourceNotes(assistant.sourceNotes);

  const draft = buildGrantDraft({
    outputType: assistant.outputType,
    tone: assistant.tone,
    prompt,
    notes
  });

  assistant.draft = draft;
  saveState();
  document.querySelector("#grantDraftOutput").value = draft;
}

function parseSourceNotes(text) {
  const lines = text
    .split(/\n+/)
    .map((line) => line.replace(/^[-•*]\s*/, "").trim())
    .filter(Boolean);

  const sections = {};
  const loose = [];

  lines.forEach((line) => {
    const match = line.match(/^([^:]{2,40}):\s*(.+)$/);
    if (match) {
      sections[match[1].trim().toLowerCase()] = match[2].trim();
    } else {
      loose.push(line);
    }
  });

  return { sections, loose, raw: text.trim() };
}

function pickNote(notes, keys, fallback) {
  for (const key of keys) {
    const found = Object.entries(notes.sections).find(([label]) => label.includes(key));
    if (found?.[1]) return found[1];
  }
  if (notes.loose.length) return notes.loose[0];
  return fallback;
}

function summarizeLooseNotes(notes) {
  if (!notes.loose.length) return "";
  return notes.loose.slice(0, 4).join(" ");
}

function toneOpening(tone, notes) {
  const organization = pickNote(notes, ["organization"], "The organization");
  const program = pickNote(notes, ["program"], "the proposed program");
  if (tone === "warm") return `${organization} is seeking support for ${program}, a community-centered effort designed to meet a real need with care, consistency, and trusted relationships.`;
  if (tone === "concise") return `${organization} requests funding for ${program} to address a clear community need and deliver measurable outcomes during the grant period.`;
  return `${organization} is requesting support for ${program}. The program responds to a documented community need and is designed to provide practical, measurable benefit to the people served.`;
}

function buildGrantDraft({ outputType, tone, prompt, notes }) {
  const organization = pickNote(notes, ["organization"], "The organization");
  const program = pickNote(notes, ["program"], "the proposed program");
  const need = pickNote(notes, ["need", "problem", "challenge"], "The community need should be described here using specific local context, participant experience, and evidence from the organization.");
  const approach = pickNote(notes, ["activities", "approach", "work", "solution"], "The program activities should be described here, including what participants will do, how often services occur, and who will provide support.");
  const beneficiaries = pickNote(notes, ["population", "beneficiaries", "participants", "who served", "audience"], "The population served should be named here, including age range, geography, eligibility, or other relevant context.");
  const outcomes = pickNote(notes, ["expected outcomes", "outcome", "success", "impact"], "The expected outcomes should be stated with measurable targets where possible.");
  const measurement = pickNote(notes, ["measurement", "measure", "evaluation"], "The organization should explain how it will track participation, quality, outcomes, and participant feedback.");
  const funding = pickNote(notes, ["funding", "budget", "request"], "");
  const guardrails = pickNote(notes, ["trust", "guardrail", "privacy", "data"], "");
  const loose = summarizeLooseNotes(notes);

  if (outputType === "funderReport") {
    return [
      "Funder Report Draft",
      "",
      `Prompt: ${prompt}`,
      "",
      `${organization} is reporting on progress for ${program}.`,
      "",
      "Progress to date:",
      approach,
      "",
      "Who benefits:",
      beneficiaries,
      "",
      "Early signs of value:",
      outcomes,
      "",
      "What we are learning:",
      need,
      guardrails ? "\nTrust and review:" : "",
      guardrails,
      loose ? `\nAdditional source notes:\n${loose}` : "",
      "",
      "Review note: Confirm facts, names, metrics, and any sensitive details before sharing externally."
    ].filter(Boolean).join("\n");
  }

  if (outputType === "programUpdate") {
    return [
      "Program Update Draft",
      "",
      `Prompt: ${prompt}`,
      "",
      toneOpening(tone, notes),
      "",
      "What is happening:",
      approach,
      "",
      "Why it matters:",
      need,
      "",
      "Who it supports:",
      beneficiaries,
      "",
      "What success looks like:",
      outcomes,
      "",
      "How progress will be measured:",
      measurement,
      guardrails ? "\nBoundaries:" : "",
      guardrails,
      loose ? `\nUseful context:\n${loose}` : "",
      "",
      "Review note: This is a working draft. Staff should edit for voice, accuracy, and approved language."
    ].filter(Boolean).join("\n");
  }

  return [
    "Grant Answer Draft",
    "",
    `Funder question: ${prompt}`,
    "",
    toneOpening(tone, notes),
    "",
    `${program} will serve ${beneficiaries} ${need}`,
    "",
    `${organization} will carry out the program through the following activities: ${approach}`,
    "",
    funding ? `Grant funds will support ${funding}` : "",
    "",
    `During the grant period, ${organization} expects to achieve the following outcomes: ${outcomes}`,
    "",
    `Progress will be measured through ${measurement}`,
    guardrails ? "\nResponsible use and trust:" : "",
    guardrails,
    loose ? `\nAdditional source notes:\n${loose}` : "",
    "",
    "Review note: Before submission, replace any generic language with verified organization-specific details and approved metrics."
  ].filter(Boolean).join("\n");
}

function clearGrantAssistant() {
  ensureGrantAssistantState();
  state.grantAssistant = {
    ...state.grantAssistant,
    outputType: "grantAnswer",
    prompt: "",
    sourceNotes: "",
    tone: "clear",
    draft: ""
  };
  saveState();
  renderGrantAssistant();
}

function copyGrantDraft() {
  syncGrantAssistantInputs();
  navigator.clipboard.writeText(state.grantAssistant.draft || "");
}

function downloadGrantDraft() {
  syncGrantAssistantInputs();
  const draft = state.grantAssistant.draft || "No draft created yet.";
  const blob = new Blob([draft], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "grant-report-assistant-draft.txt";
  link.click();
  URL.revokeObjectURL(url);
}

function saveApprovedLanguageFromDraft() {
  syncGrantAssistantInputs();
  const text = state.grantAssistant.draft.trim();
  if (!text) return;

  const title = prompt("Name this reusable language", "Approved grant/report language");
  if (!title) return;

  state.grantAssistant.approvedLanguage.unshift({
    id: crypto.randomUUID(),
    title,
    type: document.querySelector("#grantOutputType").selectedOptions[0]?.textContent || "Grant/report",
    text: text.length > 520 ? `${text.slice(0, 517)}...` : text
  });
  saveState();
  renderApprovedLanguage();
}

function useApprovedLanguage(id) {
  ensureGrantAssistantState();
  const item = state.grantAssistant.approvedLanguage.find((entry) => entry.id === id);
  if (!item) return;
  const notesInput = document.querySelector("#grantSourceNotes");
  const prefix = notesInput.value.trim() ? `${notesInput.value.trim()}\n\n` : "";
  notesInput.value = `${prefix}Approved language: ${item.text}`;
  syncGrantAssistantInputs();
  saveState();
}

function removeApprovedLanguage(id) {
  ensureGrantAssistantState();
  state.grantAssistant.approvedLanguage = state.grantAssistant.approvedLanguage.filter((item) => item.id !== id);
  saveState();
  renderApprovedLanguage();
}

function splitCaptureText(text) {
  const [title, ...rest] = text.split(":");
  if (!rest.length) {
    return {
      title: text.length > 84 ? `${text.slice(0, 81)}...` : text,
      body: text
    };
  }

  return {
    title: title.trim() || "Captured item",
    body: rest.join(":").trim() || text
  };
}

function generateDraft() {
  const type = document.querySelector("#draftType").value;
  const notes = document.querySelector("#draftNotes").value.trim();
  const openTasks = state.tasks.filter((task) => !task.complete);
  const profile = getAudienceProfile();

  const drafts = {
    recap: `Subject: AMPT solution-building project - next steps\n\nHi Denis and Barb,\n\nBarb and I connected again today and aligned on a useful framing: this should lead with operational efficiency and staff capacity, with AI as one tool that may help us get there. The goal is not to ask AMPT what AI they want. The goal is to understand what work is taking too much time, causing friction, or pulling staff away from higher-value mission work.\n\nNear-term priorities:\n${formatTasks(openTasks)}\n\nA few guardrails will stay explicit from the beginning: personal and community data protection, human review for external-facing work, staff augmentation rather than replacement, and an anti-racism/equity lens before any tool recommendation.\n\nNotes to emphasize:\n${notes}\n\nBest,\nNick`,
    agenda: `AMPT Chicago Onsite Observation Agenda\n\nPurpose:\nUnderstand real workflows before recommending any AI pilot.\n\nSession blocks:\n1. Leadership context with Angela and Anna\n2. Fundraising/CRM walkthrough with Nicole\n3. Reporting and analytics workflow review\n4. Finance/operations task mapping\n5. Privacy, consent, and human-in-the-loop checkpoint\n6. Pilot scoring and next-step alignment\n\nQuestions to answer:\n${state.questions.map((item) => `- ${item.question}`).join("\n")}\n\nNotes to emphasize:\n${notes}`,
    meetingAgenda: `Subject: Proposed agenda - ${profile.title}\n\nHi,\n\nHere is a simple agenda for the next conversation. I would keep it focused on practical decisions and avoid getting too deep into tools before the workflow and trust questions are clear.\n\n${formatAgenda(profile)}\n\nUseful materials to have nearby:\n${state.materials.slice(0, 4).map((item) => `- ${item.title} (${item.status})`).join("\n")}\n\nOpen actions:\n${formatTasks(openTasks)}\n\nNotes to emphasize:\n${notes}\n\nBest,\nNick`,
    demoPath: `${profile.title} Demo Path\n\nUse this walkthrough to keep the conversation focused on what this audience needs to understand or decide.\n\n${formatDemoPath(profile)}\n\nNotes to emphasize:\n${notes}`,
    charter: `Pilot Charter Summary\n\n${state.charters.map((charter) => `${charter.name}\nProblem: ${charter.problem}\nScope: ${charter.scope}\nSuccess: ${charter.success}\nData boundary: ${charter.data}\nHuman review: ${charter.humanReview}\nKickoff needs: ${charter.kickoffNeeds}`).join("\n\n")}\n\nNotes to emphasize:\n${notes}`,
    materials: `AMPT Regroup Materials Checklist\n\nMaterials to prepare before the mid-to-late June regroup:\n\n${state.materials.map((item) => `- ${item.title} (${item.owner}, ${item.status}): ${item.purpose}`).join("\n")}\n\nPrivacy checklist:\n${state.privacyChecklist.map((item) => `- ${item.label}`).join("\n")}\n\nNotes to emphasize:\n${notes}`,
    survey: `Subject: Pre-onsite workflow discovery questions\n\nHi Angela,\n\nAhead of any onsite observation, Barb and I would like to keep discovery focused on current work rather than tools. The goal is to understand where recurring work takes time, creates friction, or pulls staff away from higher-value mission work.\n\nSuggested question groups:\n\n${state.surveyPacks.map((pack) => `${pack.audience}\n${pack.questions.map((question) => `- ${question}`).join("\n")}\nDecision this informs: ${pack.decision}`).join("\n\n")}\n\nWe can adapt these before sending anything to staff.\n\nNotes to emphasize:\n${notes}\n\nBest,\nNick`,
    tech: `Technical Readiness Summary\n\nCurrent build path:\n${state.techStack.map((item) => `- ${item.name} (${item.status}): ${item.purpose}`).join("\n")}\n\nHandoff requirements:\n${state.handoff.map((item) => `- ${item.item} (${item.status}): ${item.detail}`).join("\n")}\n\nData boundary reminder:\nNo real AMPT donor, partner, staff, or community-member data should enter the prototype until policies, permissions, and review points are explicit.\n\nNotes to emphasize:\n${notes}`,
    board: `Board-Ready Talking Points\n\n- This effort is about operational capacity, not replacing staff.\n- AMPT will pilot internally before recommending anything to partner nonprofits.\n- Sensitive personal and community data should not be sent to third-party AI tools without explicit policy, consent, and controls.\n- The first pilot should focus on recurring administrative burden where human judgment remains central.\n- Success should be measured by time saved, quality improved, staff confidence, and ethical fit.\n\nLikely solution areas:\n${state.pilots.map((pilot) => `- ${pilot.name}: ${pilot.summary}`).join("\n")}\n\nNotes to emphasize:\n${notes}`,
    angela: `How to frame this prototype with Angela\n\nThis is not the proposed AMPT solution. It is a quick working artifact that shows how we can move from conversation to structure quickly.\n\nSuggested language:\n\"I built this as a lightweight project hub for organizing the discovery process with Barb. It helps us track stakeholders, action items, candidate workflow areas, intake questions, and draft materials. The important part is not the software itself. The important part is the method: start small, make the work visible, protect sensitive data, and focus first on operational pain.\"\n\nEthics note:\n\"This version is local-only. No AMPT donor, community, partner, or staff data is being sent to any AI vendor. Before anything real touches data, we would define boundaries, consent expectations, and human review points.\"\n\nPositioning:\n\"We are not starting by asking what AI AMPT wants. We are starting by asking what work takes too much time, creates friction, or pulls staff away from mission work. AI may help build parts of the solution, but operational efficiency is the actual goal.\"\n\nQuick demo path:\n1. Dashboard: show the project structure and privacy note.\n2. Views: explain Nick + Barb, AMPT, and Denis modes.\n3. Call Prep: show the language guide.\n4. Intake: show how discovery starts with workflow pain.\n5. Roadmap: show how this becomes an onsite pilot.\n\nNotes to emphasize:\n${notes}`
  };

  document.querySelector("#draftOutput").textContent = drafts[type];
}

function formatTasks(tasks) {
  if (!tasks.length) return "- No open tasks.";

  return tasks
    .map((task) => {
      const due = task.due ? ` by ${task.due}` : "";
      return `- ${task.title} (${task.owner}${due})`;
    })
    .join("\n");
}

function formatDisplayDate(value) {
  if (!value) return "";
  const [year, month, day] = value.split("-").map(Number);
  if (!year || !month || !day) return value;
  return new Date(year, month - 1, day).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric"
  });
}

function formatAgenda(profile) {
  return profile.agenda
    .map((item) => `- ${item.phase} - ${item.title}: ${item.detail}`)
    .join("\n");
}

function formatDemoPath(profile) {
  return profile.demoPath
    .map((item, index) => `${index + 1}. ${item.view}\nSay: ${item.say}\nAsk: ${item.ask}\nDecide: ${item.decide}`)
    .join("\n\n");
}

function exportBrief() {
  const profile = getAudienceProfile();
  const brief = [
    "# AMPT Solution Building Hub Export",
    "",
    "## Current View",
    `${profile.title}: ${profile.note}`,
    "",
    "## Meeting Agenda",
    formatAgenda(profile),
    "",
    "## Demo Path",
    formatDemoPath(profile),
    "",
    "## Key Takeaway",
    profile.takeaway ? `${profile.takeaway.headline}: ${profile.takeaway.body} ${profile.takeaway.remember}` : "No takeaway set.",
    "",
    "## Follow-Up Note",
    buildFollowUpNote(),
    "",
    "## Call Close",
    profile.callClose ? `${profile.callClose.script}\n${profile.callClose.outcomes.map((item) => `- ${item}`).join("\n")}` : "No call close set.",
    "",
    "## Open Actions",
    formatTasks(state.tasks.filter((task) => !task.complete)),
    "",
    "## Stakeholders",
    ...state.stakeholders.map((person) => `- ${person.name} (${person.role}): ${person.note}`),
    "",
    "## Follow-ups",
    ...state.followups.map((item) => `- ${item.person} [${item.status}]: ${item.next}`),
    "",
    "## Candidate Solutions",
    ...state.pilots.map((pilot) => `- ${pilot.name}: ${pilot.summary} Value: ${pilot.value} Risks: ${pilot.risks}`),
    "",
    "## Pilot Charters",
    ...state.charters.map((charter) => `- ${charter.name}: ${charter.problem} Scope: ${charter.scope} Success: ${charter.success}`),
    "",
    "## Next Actions",
    ...profile.nextActions.map((item) => `- ${item.title} (${item.owner}): ${item.detail}`),
    "",
    "## Open Blockers",
    ...profile.blockers.map((item) => `- ${item.title}: ${item.detail}`),
    "",
    "## Workflow Map",
    ...state.workflows.map((workflow) => `- ${workflow.name}: ${workflow.current} Evidence: ${workflow.evidence}`),
    "",
    "## Survey Packs",
    ...state.surveyPacks.map((pack) => `- ${pack.audience}: ${pack.questions.join(" / ")}`),
    "",
    "## Materials",
    ...state.materials.map((item) => `- ${item.title} (${item.status}, ${item.owner}): ${item.purpose}`),
    "",
    "## Onsite Plan",
    ...state.onsitePlan.map((item) => `- ${item.phase}: ${item.title}. ${item.detail}`),
    "",
    "## Research Queue",
    ...state.research.map((item) => `- ${item.title} (${item.owner}): ${item.decision}`),
    "",
    "## Risk Register",
    ...state.risks.map((item) => `- ${item.title} [${item.severity}]: ${item.mitigation}`),
    "",
    "## Data Matrix",
    ...state.dataMatrix.map((item) => `- ${item.category}: Prototype ${item.prototype}; Pilot ${item.pilot}; AI ${item.aiUse}. ${item.rule}`),
    "",
    "## Glossary",
    ...state.glossary.map((item) => `- ${item.term}: ${item.meaning} Use instead of: ${item.useInsteadOf}`),
    "",
    "## Library",
    ...state.library.map((item) => `- ${item.title} (${item.status}): ${item.use}`),
    "",
    "## Angela Readiness",
    ...state.readiness.map((item) => `- ${item.item} [${item.status}]: ${item.evidence}`),
    "",
    "## Notes",
    ...state.notes.map((note) => `- ${note.date} ${note.title}: ${note.body}`),
    "",
    "## Decisions",
    ...state.decisions.map((decision) => `- ${decision.date} [${decision.status}] ${decision.title}: ${decision.rationale}`),
    "",
    "## Partner Rollout",
    ...state.rolloutTracks.map((track) => `- ${track.name}: ${track.model}`),
    "",
    "## Economics",
    ...state.economics.map((item) => `- ${item.title}: ${item.assumption} ${item.implication}`),
    "",
    "## Tech + Handoff",
    ...state.techStack.map((item) => `- ${item.name} (${item.status}): ${item.purpose}`),
    ...state.handoff.map((item) => `- ${item.item} (${item.status}): ${item.detail}`),
    "",
    "## Roadmap",
    ...state.roadmap.map((item) => `- ${item.phase}: ${item.title}. ${item.detail}`),
    "",
    "## Intake Questions",
    ...state.questions.map((item) => `- ${item.question} (${item.category})`)
  ].join("\n");

  const blob = new Blob([brief], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "ampt-ai-project-brief.md";
  link.click();
  URL.revokeObjectURL(url);
}

function saveProjectJson() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "ampt-solution-building-hub-state.json";
  link.click();
  URL.revokeObjectURL(url);
}

function loadProjectJson(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const imported = JSON.parse(String(reader.result));
      state = { ...structuredClone(seedState), ...imported };
      saveState();
      render();
    } catch {
      alert("That JSON file could not be loaded.");
    } finally {
      event.target.value = "";
    }
  });
  reader.readAsText(file);
}

function copyDraft() {
  const output = document.querySelector("#draftOutput").textContent;
  navigator.clipboard.writeText(output);
}

function copyDashboardBrief() {
  navigator.clipboard.writeText(buildDashboardBrief());
}

function buildFollowUpNote() {
  const followUp = getAudienceProfile().followUp;
  if (!followUp) return "";

  return [
    `Subject: ${followUp.subject}`,
    "",
    followUp.greeting,
    "",
    followUp.body,
    "",
    followUp.close,
    "",
    "Best,",
    "Nick"
  ].join("\n");
}

function copyFollowUpNote() {
  navigator.clipboard.writeText(buildFollowUpNote());
}

function toggleHandoutMode() {
  const enabled = !document.body.classList.contains("handout-mode");
  document.body.classList.toggle("handout-mode", enabled);
  const button = document.querySelector("#handoutModeButton");
  button.setAttribute("aria-pressed", String(enabled));
  button.textContent = enabled ? "Exit Handout" : "Handout";
}

function togglePresentMode() {
  const enabled = !document.body.classList.contains("present-mode");
  document.body.classList.toggle("present-mode", enabled);
  const button = document.querySelector("#presentModeButton");
  button.setAttribute("aria-pressed", String(enabled));
  button.textContent = enabled ? "Exit" : "Present";
}

function movePresentation(direction) {
  const navButtons = Array.from(document.querySelectorAll(".nav-button")).filter((button) => !button.hidden);
  const activeIndex = navButtons.findIndex((button) => button.classList.contains("active"));
  const nextIndex = (activeIndex + direction + navButtons.length) % navButtons.length;
  navButtons[nextIndex].click();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function applySearchFilter() {
  const query = document.querySelector("#viewSearch").value.trim().toLowerCase();
  const activeView = document.querySelector(".view.active");
  if (!activeView) return;

  const items = activeView.querySelectorAll(".data-card, .demo-card, .decision-card, .dashboard-brief-output, .follow-up-output, .simple-card, .one-minute-story, .confidence-meter, .key-takeaway, .say-it-strip, .next-conversation, .call-close, .timeline-item, .question-item, .task-row, .priority-item, .prep-card, .language-row, table tbody tr");
  items.forEach((item) => {
    const matches = !query || item.textContent.toLowerCase().includes(query);
    item.classList.toggle("is-filtered-out", !matches);
  });
}

function focusGuidedSection(targetId) {
  const target = document.querySelector(`#${targetId}`);
  if (!target) return;

  document.querySelectorAll(".guided-stepper button").forEach((button) => {
    button.classList.toggle("active", button.dataset.guideTarget === targetId);
  });
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

document.querySelectorAll(".nav-button").forEach((button) => {
  button.addEventListener("click", () => {
    activateView(button.dataset.view);
  });
});

function activateView(viewId) {
  const view = document.querySelector(`#${viewId}`);
  const button = document.querySelector(`.nav-button[data-view="${viewId}"]`);
  if (!view || !button) return;

  document.body.dataset.activeView = viewId;
  document.querySelectorAll(".nav-button").forEach((nav) => nav.classList.remove("active"));
  document.querySelectorAll(".view").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  view.classList.add("active");
  applySearchFilter();
}

document.querySelectorAll(".guided-stepper button").forEach((button) => {
  button.addEventListener("click", () => focusGuidedSection(button.dataset.guideTarget));
});

document.querySelectorAll(".path-button").forEach((button) => {
  button.addEventListener("click", () => activateView(button.dataset.viewTarget));
});

document.querySelector("#addTaskButton").addEventListener("click", addTask);
document.querySelector("#addStakeholderButton").addEventListener("click", addStakeholder);
document.querySelector("#addPilotButton").addEventListener("click", addPilot);
document.querySelector("#addQuestionButton").addEventListener("click", addQuestion);
document.querySelector("#addNoteButton").addEventListener("click", addNote);
document.querySelector("#addDecisionButton").addEventListener("click", addDecision);
document.querySelector("#addDecisionFromDashboardButton").addEventListener("click", addDecision);
document.querySelector("#decisionQueueList").addEventListener("click", (event) => {
  const button = event.target.closest(".decision-accept");
  if (!button) return;
  acceptDecision(button.dataset.decisionTitle);
});
document.querySelector("#generateDraftButton").addEventListener("click", generateDraft);
document.querySelector("#grantAssistantForm").addEventListener("submit", createGrantDraft);
document.querySelector("#loadGrantExampleButton").addEventListener("click", loadGrantExample);
document.querySelector("#clearGrantAssistantButton").addEventListener("click", clearGrantAssistant);
document.querySelector("#copyGrantDraftButton").addEventListener("click", copyGrantDraft);
document.querySelector("#downloadGrantDraftButton").addEventListener("click", downloadGrantDraft);
document.querySelector("#saveApprovedLanguageButton").addEventListener("click", saveApprovedLanguageFromDraft);
document.querySelector("#grantDraftOutput").addEventListener("input", () => {
  syncGrantAssistantInputs();
  saveState();
});
["#grantOutputType", "#grantPrompt", "#grantSourceNotes", "#grantTone"].forEach((selector) => {
  document.querySelector(selector).addEventListener("input", () => {
    syncGrantAssistantInputs();
    saveState();
  });
});
document.querySelector("#approvedLanguageList").addEventListener("click", (event) => {
  const useButton = event.target.closest(".use-approved-language");
  if (useButton) {
    useApprovedLanguage(useButton.dataset.approvedId);
    return;
  }
  const removeButton = event.target.closest(".remove-approved-language");
  if (removeButton) {
    removeApprovedLanguage(removeButton.dataset.approvedId);
  }
});
document.querySelector("#presentModeButton").addEventListener("click", togglePresentMode);
document.querySelector("#handoutModeButton").addEventListener("click", toggleHandoutMode);
document.querySelector("#handoutExitButton").addEventListener("click", toggleHandoutMode);
document.querySelector("#presentPrevButton").addEventListener("click", () => movePresentation(-1));
document.querySelector("#presentNextButton").addEventListener("click", () => movePresentation(1));
document.querySelector("#exportButton").addEventListener("click", exportBrief);
document.querySelector("#saveStateButton").addEventListener("click", saveProjectJson);
document.querySelector("#loadStateInput").addEventListener("change", loadProjectJson);
document.querySelector("#copyDraftButton").addEventListener("click", copyDraft);
document.querySelector("#copyDashboardBriefButton").addEventListener("click", copyDashboardBrief);
document.querySelector("#copyFollowUpButton").addEventListener("click", copyFollowUpNote);
document.querySelector("#captureButton").addEventListener("click", captureDashboardItem);
document.querySelector("#captureText").addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
    event.preventDefault();
    captureDashboardItem();
  }
});
document.querySelector("#viewSearch").addEventListener("input", applySearchFilter);
document.querySelector("#clearSearchButton").addEventListener("click", () => {
  document.querySelector("#viewSearch").value = "";
  applySearchFilter();
});
document.querySelector("#showAllViewsButton").addEventListener("click", () => {
  state.showAllViews = !state.showAllViews;
  saveState();
  renderNavigation();
  applySearchFilter();
});
document.querySelector("#conversationMenuButton").addEventListener("click", () => {
  state.showConversationMenu = !state.showConversationMenu;
  saveState();
  renderNavigation();
});
document.querySelector("#audienceMode").addEventListener("change", (event) => {
  state.audienceMode = event.target.value;
  state.showConversationMenu = false;
  saveState();
  renderAudience();
  renderNavigation();
  renderPathway();
  renderModeOverview();
  renderSimpleSummary();
  renderOneMinuteStory();
  renderConfidence();
  renderTakeaway();
  renderSayIt();
  renderNextConversation();
  renderCallClose();
  renderFollowUp();
  renderTodayStrip();
  renderDashboardBrief();
  renderDashboardPriorities();
  renderBriefing();
  renderAgenda();
  renderDemoPath();
  applySearchFilter();
});
document.addEventListener("keydown", (event) => {
  if (!document.body.classList.contains("present-mode")) return;
  if (event.key === "ArrowRight") movePresentation(1);
  if (event.key === "ArrowLeft") movePresentation(-1);
});
document.querySelector("#resetDemoButton").addEventListener("click", () => {
  if (!confirm("Reset local demo data?")) return;
  state = structuredClone(seedState);
  saveState();
  render();
});

render();
