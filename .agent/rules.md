# Project Rules: MedTechBTF

## AI & API Standards
- **Model**: Always use the latest available Gemini model. Currently: `gemini-3-flash-preview`.
- **Endpoint**: Use `v1beta` for preview models.
- **Security**: Never expose API keys in the frontend. Always use Vercel Serverless Functions in `/api/` as a proxy.
- **Environment Variables**: Always assume `GEMINI_API_KEY` is set in Vercel.

## Design System (Solid Minimalism)
- **Colors**: Solid White background ($bg-main: #ffffff), Solid Black accents ($accent-primary: #000000).
- **Style**: High contrast, bold borders (2px), no soft shadows (use offset hard shadows if needed).
- **Typography**:
    - Sans: 'Inter' for UI.
    - Mono: 'JetBrains Mono' for metadata and code.
- **Aesthetics**: Functional and "Industrial", not "Premium/Glossy".

## Directory Structure
- `/index.html`: Main portal (Gateway to all tools).
- `/tools/[tool-name]/`: Independent tool projects.
- `/api/`: Backend logic / API proxies for Vercel.
- `/private_docs/`: Workspace for notes (Git ignored).

## Version Control
- Commit messages: Use prefixes like `feat:`, `fix:`, `style:`, `debug:`.
- Branch: `main`.

# Tool Inventory
- **test-tool**: 
    - Purpose: Initial directory structure and basic CSS validation tool.
    - Status: Completed (Template).
- **test-AI-API-TEST**:
    - Purpose: Functional test for Gemini API integration.
    - Status: Active (Testing Gemini 3 Flash).
    - Tech: Integrated with `/api/gemini.js` Vercel function.
- **blood-transfusion-calc**:
    - Purpose: Blood transfusion calculations (e.g., predicted Hb increase).
    - Status: Development.
