Create a new training workshop using the two-agent workflow.

## Steps:

1. **Ask the human for:**
   - Training topic and title
   - Target audience (who will participate)
   - Format (duration, online/offline, group size)
   - Key domains (logistics, banking, general IT)
   - Language (Polish / English)
   - Any specific requirements or constraints

2. **Use the training-creator subagent to:**
   - Research the market (web search for current data)
   - Draft the training structure and full content
   - Save files to trainings/training-name/

3. **Use the training-reviewer subagent to:**
   - Read all drafted content
   - Verify facts and market claims
   - Assess quality, completeness, and audience fit
   - Write review notes to trainings/training-name/review_notes.md

4. **Present to the human:**
   - Summary of what was created
   - Key review findings (critical issues, scope suggestions)
   - Items marked [DECISION NEEDED]
   - Ask for approval or revision direction

5. **If revisions needed:**
   - Send reviewer feedback back to training-creator
   - Creator revises and updates files
   - Reviewer does a quick re-check
   - Present final version to human

6. **When approved:**
   - Offer to push to Notion (if Notion MCP is available)
   - Confirm all files are saved in the trainings folder
