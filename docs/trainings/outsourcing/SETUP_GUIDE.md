# Training Workshop Creator — Setup Guide
## Agentic workflow with Claude Code: Two agents + human approval

---

## Part 1: Install Claude Code

### What is Claude Code?
Claude Code is Anthropic's agentic coding tool that runs in your terminal. It reads files, writes content, executes commands, and can use subagents — specialized AI assistants that handle specific tasks.

### Requirements
- **OS:** macOS, Linux, or Windows (with Git for Windows or WSL)
- **Account:** Claude Pro, Max, Teams, or Enterprise subscription (OR Anthropic Console API key)
- **Internet connection**
- Node.js is NOT required for the native installer

### Step 1: Install Claude Code

**macOS (recommended — native installer):**
```sh
curl -fsSL https://cli.claude.com/install.sh | sh
```

**Windows (PowerShell):**
```powershell
irm https://cli.claude.com/install.ps1 | iex
```
Note: Git for Windows is required. Install from https://gitforwindows.org/ first.

**Linux:**
```sh
curl -fsSL https://cli.claude.com/install.sh | sh
```

### Step 2: Verify installation
```sh
claude --version
```

### Step 3: Authenticate
```sh
claude
```
Follow the browser prompts to log in with your Anthropic account.

### Step 4: Run diagnostics (if any issues)
```sh
claude doctor
```

---

## Part 2: Set Up the Training Agents Project

### Step 1: Clone / open the repo
```sh
cd devex
claude
```

Claude automatically reads `CLAUDE.md` and knows about your agents.

### Step 2: Project file structure
```
devex/
├── CLAUDE.md                          ← Project context (Claude reads this automatically)
├── .claude/
│   ├── agents/
│   │   ├── training-creator.md        ← Creator agent
│   │   └── training-reviewer.md       ← Reviewer agent
│   └── commands/
│       └── new-training.md            ← /new-training slash command
├── docs/trainings/outsourcing/        ← Existing training materials (v1, v4)
└── templates/
    └── training-template.md           ← Template for new trainings
```

### Step 3: (Optional) Configure Notion MCP
If you want Claude Code to push content directly to Notion:
```sh
claude mcp add notion -- npx @anthropic-ai/notion-mcp
```

---

## Part 3: How to Use the Workflow

### Option A: Use the slash command
In Claude Code, type:
```
/new-training
```
This launches the guided workflow: define topic → creator drafts → reviewer critiques → you approve.

### Option B: Manual agent invocation
You can invoke agents directly:

**Ask the creator to draft:**
```
Use the training-creator agent to create a 2-hour workshop about
"AI readiness assessment for IT outsourcing companies" targeting
Polish software house CEOs, in Polish.
```

**Ask the reviewer to critique:**
```
Use the training-reviewer agent to review the training in
trainings/ai-readiness/
```

---

## Part 4: How the Agents Work Together

### The Creator Agent
- **Role:** Writes training content
- **Strengths:** Research, structuring, writing in buyer's voice, domain expertise
- **Model:** Claude Sonnet

### The Reviewer Agent
- **Role:** Reviews, critiques, suggests improvements
- **Strengths:** Fact-checking, quality assessment, scope analysis, constructive criticism
- **Model:** Claude Sonnet
- **Key trait:** Opinionated — doesn't just approve, actively suggests improvements

### The Human (You)
- **Role:** Final approver, domain expert, direction setter
- Items marked [DECISION NEEDED] by the reviewer require your input

### Communication Flow
```
You: "Create a training about X"
  ↓
Creator Agent: [researches, drafts, saves files]
  ↓
Reviewer Agent: [reads draft, verifies facts, writes review_notes.md]
  ↓
You: [reads review summary, decides on scope changes]
  ↓
Creator Agent: [revises based on feedback]
  ↓
You: [approves final version]
  ↓
(Optional) Push to Notion
```

---

## Part 5: Tips & Best Practices

### Cost optimization
- Sonnet model for both agents (good quality, lower cost than Opus)
- A typical training creation session: ~100-200K tokens
- Included in Max subscription

### Context management
- Each agent runs in its own context — keeps the main conversation clean
- The `review_notes.md` file serves as persistent communication between agents

### Notion workflow
- Draft in local files first (faster, no API limits)
- Push to Notion only after human approval

---

## Quick Reference: Key Commands

```sh
# Start Claude Code in project
cd devex && claude

# Create new training (guided)
/new-training

# Check available agents
/agents
```

---

## Official Resources
- **Claude Code docs:** https://docs.anthropic.com/en/docs/claude-code
- **Subagents guide:** https://docs.anthropic.com/en/docs/claude-code/sub-agents
- **GitHub repo:** https://github.com/anthropics/claude-code
