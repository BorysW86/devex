## Project Purpose
This project creates professional training workshops and educational programs using a two-agent system:
1. **Training Creator** — writes and structures training content
2. **Training Reviewer** — reviews, critiques, and suggests improvements

The human (Borys) is the final approver of scope, content, and direction.

## Workflow
```
[Human defines need] → [Creator drafts] → [Reviewer critiques] → [Creator revises] → [Human approves]
```

### Step-by-step:
1. Human describes the training need (topic, audience, format, duration)
2. **training-creator** agent produces first draft (structure, content, materials list)
3. **training-reviewer** agent analyzes the draft for quality, accuracy, completeness, and suggests improvements
4. Creator revises based on reviewer feedback
5. Human reviews final version and approves or requests changes
6. Approved content is saved to trainings/training-name/ folder

## Agent Routing Rules

### Parallel execution (when independent):
- Creator and Reviewer can work on different sections simultaneously
- Research tasks can run in background

### Sequential execution (when dependent):
- Reviewer MUST wait for Creator's draft before reviewing
- Creator MUST incorporate Reviewer feedback before final version
- Human approval MUST come after both agents have completed their cycle

## Project Structure
```
training-agents/
├── CLAUDE.md                          # This file — project context
├── .claude/
│   ├── agents/
│   │   ├── training-creator.md        # Creator agent definition
│   │   └── training-reviewer.md       # Reviewer agent definition
│   └── commands/
│       └── new-training.md            # Slash command to start new training
├── trainings/                         # Output folder for all trainings
└── templates/
    └── training-template.md           # Template for new trainings
```

## Domain Context
The primary author (Borys) has deep expertise in:
- **IT outsourcing** — 20 years as a buyer, managing €2-3M annual outsourcing budget
- **Logistics & supply chain** — SAP TM, tracking systems, customs, EU compliance
- **Banking & fintech** — DORA, PSD2, core banking, KNF regulations
- **AI in enterprise** — AI readiness, productivity measurement, DORA metrics
- **Vendor management** — scoring models, cooperation models (body leasing → strategic partnership)

Trainings are typically:
- In **Polish** (primary) or English
- For **Polish IT outsourcing companies** (leadership, sales, delivery teams)
- From the **buyer's perspective** — not teaching sales techniques, but revealing buyer's decision process
- Duration: 2-3 hours online + follow-up consultations
- Interactive: breakout rooms, case studies, live role-play

## Notion Integration
Training materials are stored in Notion as the single source of truth.
Workspace: "Outsourcing training part 2" → "Trening_V4"

## Quality Standards
All training content must:
- Be grounded in real market data (with sources/dates)
- Include specific examples from logistics and/or banking domains
- Use the buyer's voice ("I expect...", "What I see...") not prescriptive ("You should...")
- Include actionable tools (scorecards, templates, checklists)
- Have measurable outcomes for participants
- Be structured for interactive delivery (not lecture-only)
