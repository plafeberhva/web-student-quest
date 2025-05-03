# web-student-quest
Retro style adventure game, web based in Typescript.
Maintained through best practice procedures ad documented in this document.
This project serves as an example to ICT students so they can learn how to properly manage collaborative development environments. Therefor, please make sure to follow the procedure or enhance it. Changes should follow the procedure and be well documented so that they can be audited.
The goal it to create a fun game in a web based environment. Any improvements are welcome.

## Attribution

This project uses Cursor rules adapted from [Andre Ratzenberger's cursor-rules repository](https://github.com/AndreRatzenberger/cursor-rules/). Many thanks to Andre for making these comprehensive rules available to the community.

This project's story was generated with the help of the [AI story generator]( https://generatestory.io/ai-game-story-generator/). 

---

## Design Decisions

For alignment between all parties involved, we will need a document containing all design decisions.

Initial decision:

1. Typescript architecture
2. UI language English, with all strings stored in multi language tables.
3. All project communication in English.
4. Open source coding frameworks.
5. Documentation in markdown, mermaid, svg and any other textual markup languages that can be maintained in Github.
6. Design is done using UML and BPMN.
7. Where possible, work is done following ISO standards for quality, software development, risk and security.
8. Open stack publication.
9. Testing framework for testing the code, using Mockito.
10. Project structure using Github issues, with status "working" and "verifying", always maximum one person responsible for each issue.
11. Issues always small enough so they can be completed in 1-2 days.

## Required Workflow for Making Changes

To ensure consistency and best practices, always follow this procedure when working on this repository.
**After each action, perform the corresponding check to confirm success before proceeding.**

1. **Create a GitHub Issue**
   - Action: Open an issue describing the task or feature you want to work on.
   - **Check:** Confirm the issue appears in the GitHub Issues list.
2. **Assign the Issue and Add 'Working' Label**
   - Action: Assign the issue to yourself and add the label 'Working'.
   - **Check:** Confirm you are assigned and the label 'Working' is present on the issue.
3. **Create a Feature Branch**
   - Action: Create and switch to a new branch named after the issue (e.g., `issue-1-description`).
   - **Check:** Run `git branch` and confirm you are on the new branch.
4. **Make Your Changes**
   - Action: Edit, add, or remove files as needed to address the issue.
   - **Check:** Use `git status` to confirm the intended files are modified.
5. **Stage and Commit**
   - Action: Stage your changes and commit with a descriptive message referencing the issue (e.g., `closes #1`).
   - **Check:** Run `git log -1` to confirm your commit message and files.
6. **Push the Branch to GitHub**
   - Action: Push your feature branch to the remote repository.
   - **Check:** Visit GitHub or run `git branch -r` to confirm the branch is on the remote.
7. **Open a Pull Request**
   - Action: Open a pull request from your feature branch to `main`, referencing the issue.
   - **Check:** Confirm the PR appears in the GitHub Pull Requests list and is linked to the correct issue and branch.
8. **Merge After Review**
   - Action: After review (and resolving any conflicts), merge the pull request into `main`.
   - **Check:** Confirm the PR is marked as merged and the changes appear in the `main` branch.
9. **Clean Up**
   - Action: Delete the feature branch both locally and remotely after merging.
   - **Check:** Run `git branch` and `git branch -r` to confirm the branch is deleted locally and remotely.

> **Note:** This is the only correct procedure for making changes in this repository. Always follow these steps for every new task or feature.

---

## Git Best Practices

1. **Commit Often, But with Purpose**
   - Make small, focused commits with clear messages.
   - Avoid committing unrelated changes together.
2. **Write Descriptive Commit Messages**
   - Use the present tense (e.g., "Add feature" not "Added feature").
   - Briefly explain what and why, not just what.
3. **Pull Before You Push**
   - Always pull the latest changes from the remote before pushing your work.
4. **Use Branches for Features and Fixes**
   - Create a new branch for each feature or bugfix.
   - Name branches clearly (e.g., `feature/login`, `bugfix/header-alignment`).
5. **Review Changes Before Committing**
   - Use `git status` and `git diff` to review your changes.
6. **Keep the Main Branch Stable**
   - Only merge tested and reviewed code into `main`.
7. **.env and Sensitive Files**
   - Never commit secrets or sensitive files. Use `.gitignore` to exclude them.
8. **Resolve Conflicts Promptly**
   - If you encounter a merge conflict, resolve it as soon as possible.
9. **Push Regularly**
   - Don't let your local branch drift too far from the remote.
10. **Tag Releases**
    - Use tags to mark release points (e.g., `v1.0.0`).

---

Feel free to expand or adjust this list as you learn more!

---

## Story Point Scale

| Points | Description                                                                 | Typical Effort         | Example Task Type                |
|--------|-----------------------------------------------------------------------------|------------------------|----------------------------------|
| 0      | Trivial, negligible effort, almost no work                                  | < 15 minutes           | Typo fix, rewording a sentence   |
| 1      | Very small, well-understood, no risk, no dependencies                       | 15 min – 1 hour        | Rename a variable, update config |
| 2      | Small, straightforward, minor complexity, low risk                          | 1 – 2 hours            | Add a unit test, update docs     |
| 3      | Moderate, some complexity, may require brief investigation or coordination  | 2 – 4 hours            | Refactor a function, small UI fix|
| 5      | Significant, multiple steps, moderate complexity, some unknowns             | 4 – 8 hours (1 day)    | Implement a new feature, write several tests |
| 8      | Large, complex, needs breaking down if possible, high uncertainty           | 1 – 2 days             | Integrate with external API, major refactor  |
| 13+    | Too large to estimate, must be split into smaller tasks                     | > 2 days               | "Epic" or multi-feature work     |

**Guidelines:**
- Use the smallest value that fits the task.
- If a task is >8 points, break it down.
- All types of work (dev, design, docs, testing) are estimated.
-"Done" means implemented and unit tested, but not necessarily reviewed or deployed.
