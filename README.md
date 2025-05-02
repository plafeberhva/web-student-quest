# web-student-quest
Retro style adventure game, web based in Typescript.

## Attribution

This project uses Cursor rules adapted from [Andre Ratzenberger's cursor-rules repository](https://github.com/AndreRatzenberger/cursor-rules/). Many thanks to Andre for making these comprehensive rules available to the community.

---

## Required Workflow for Making Changes

To ensure consistency and best practices, always follow this procedure when working on this repository:

1. **Create a GitHub Issue**
   - Open an issue describing the task or feature you want to work on.
2. **Create a Feature Branch**
   - Create and switch to a new branch named after the issue (e.g., `issue-1-description`).
3. **Make Your Changes**
   - Edit, add, or remove files as needed to address the issue.
4. **Stage and Commit**
   - Stage your changes and commit with a descriptive message referencing the issue (e.g., `closes #1`).
5. **Push the Branch to GitHub**
   - Push your feature branch to the remote repository.
6. **Open a Pull Request**
   - Open a pull request from your feature branch to `main`, referencing the issue.
7. **Merge After Review**
   - After review (and resolving any conflicts), merge the pull request into `main`.
8. **Clean Up**
   - Delete the feature branch both locally and remotely after merging.

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
