---
description: Synchronize the local environment with the GitHub remote repository.
---

This workflow helps you check if your local project is up-to-date with GitHub and pulls changes if necessary.

### Steps:

1. **Check Remote Status (Fetch)**
   - Run `git fetch origin`. This gets the latest information from GitHub without changing your files.

2. **Verify Sync State**
   - Run `git status`. (Note: We removed `-uno` to ensure new/untracked files like workflows are visible).
   - **If "Your branch is up to date" AND "nothing to commit"**: Everything is already synced. Stop here.
   - **If "Your branch is behind 'origin/main'"**: There are new changes on GitHub. Proceed to step 3.
   - **If "Your branch is ahead of 'origin/main'"**: You have local commits that haven't been pushed yet.
   - **If "Untracked files" exist**: You have new files that haven't been added to Git yet.

3. **Pull Latest Changes**
   - If behind, run `git pull origin main`.

4. **Summary Report**
   - Provide a concise summary to the user: "Synced", "Pulled X commits", or "You need to push your changes".

// turbo-all
5. **Execution Template**
   - Use `run_command` to execute the git commands.
   - Use `command_status` to analyze the output.
