## [Github Copilot deep dive: Model selection, prompting techniques, and agent mode](https://www.youtube.com/watch?v=0Oz-WQi51aU)


use readme to store prompts and having a PRD where we have setup instructions, structure. See [Prompt file](https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot#prompt-file-examples)

copilot-instructions.md - pre-prompt for preferences in generating the code. Reusable across projects

tell it use changelog to track changes of what it has done

edit mode you drag files into the context

agent mode will use the context of the file you are working on and the files you have edited recently to generate code that is relevant to your current task. It will also use the context of the project you are working on to generate code that is relevant to the project.

## Copilot-instructions.md

```markdown
# Copilot Instructions
## Coding Style
- Use camelCase for variable and function names
- Use PascalCase for class names
- Use single quotes for strings
- Use 2 spaces for indentation
- Use semicolons at the end of statements
## Libraries
- Use `express` for web applications
- Use `mongoose` for MongoDB interactions
- Use `jest` for unit testing
## Preferences
- Use TypeScript for type safety
- Use ESLint for code linting
- Use Prettier for code formatting
## Project Structure
- Use a `src` folder for source code
- Use a `tests` folder for unit tests
- Use a `docs` folder for documentation
## Context
- Use the current file and recently edited files as context for code generation
- Use the project structure and libraries as context for code generation
## Tracking Changes
- Use a `CHANGELOG.md` file to track changes made by Copilot
```

## Rule of thumb

- If something is taking longer then it is using more energy
- if there is a large amount of output then it is using more tokens.
- Go with lighter models first, like Claude 3.5, Copilot default (GPT 4.1), o4 mini, or Gemini flash as they are faster, use up less tokens, and use less energy, and then only use the heavier, reasoning models like Gemini Pro 2.5, Claude 3.7, or GPT-4o if you need more depth or complexity in the response.

Can X out prompts in the chat session history so it doesn't influence future prompts.

open file always added by default. Can remove it by clicking on the eye icon next to the file name in the chat prompt area.

Create a markdown file called `copilot-quickstart.md` in the docs folder of your project. Add an overview of how to use Copilot, including the following sections, instructions on setup and configuration, examples of how to use Copilot, and tips for getting the most out of Copilot.
