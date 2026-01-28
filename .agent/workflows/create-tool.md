---
description: Create a new tool in the MedTechBTF project following the solid design system.
---

This workflow automates the creation of a new tool within the `tools/` directory.

### Steps:

1. **Identify Tool Details**
   - Determine the `tool-name` (folder name) and a brief `description`.

2. **Create Project Directory**
   - Create `tools/[tool-name]/`.

3. **Generate Base Files**
   - Create `tools/[tool-name]/index.html` using the solid design system (include back link to portal).
   - Create `tools/[tool-name]/script.js` (empty or with basic listener).

4. **Update Main Portal**
   - Add a new card to `/index.html` with the tool's name and description.
   - Use the standard "Development" or "Draft" badge.

5. **Update Project Rules**
   - Add the new tool to the `# Tool Inventory` section in `/.agent/rules.md`.

6. **Finalize**
   - Propose a git commit with the `feat:` prefix.
   - Remind the user about the 3-step push to Vercel.

// turbo-all
7. **Execution Template**
   - Use `mkdir` to create folders.
   - Use `write_to_file` to generate templates.
   - Use `replace_file_content` to update portal/rules.
