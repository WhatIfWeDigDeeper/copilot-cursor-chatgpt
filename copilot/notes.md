# GitHub Copilot


- [11 Using "Next Edit" Suggestions](#11-using-next-edit-suggestions)
- [12 Mastering Prompts: Using Comments To Guide Github Copilot's AI](#12-mastering-prompts-using-comments-to-guide-github-copilots-ai)
- [14 Using inline chat](#14-using-inline-chat)
- [15 settings](#15-settings)
- [16 Code actions](#16-code-actions)
- [Sidebar chat](#sidebar-chat)
- [24 Unit tests](#24-unit-tests)
- [Prompt Engineering](#prompt-engineering)
- [Being specific and adding context](#being-specific-and-adding-context)
- [Validating input](#validating-input)
- [Effective iteration](#effective-iteration)
- [Extensions](#extensions)
- [General](#general)
- [Github Copilot deep dive: Model selection, prompting techniques, and agent mode](#github-copilot-deep-dive-model-selection-prompting-techniques-and-agent-mode)
- [Copilot-instructions.md](#copilot-instructionsmd)



## 11 Using "Next Edit" Suggestions

Shows Next edit suggestion you'd likely make.

## 12 Mastering Prompts: Using Comments To Guide Github Copilot's AI

Add comment as a prompt to guide Copilot's AI.

```python
# This function takes a list of numbers and returns the sum of the even numbers
# generates this function
def sum_even_numbers(numbers):
    # Initialize a variable to store the sum
    total = 0
    # Iterate through the list of numbers
    for number in numbers:
        # Check if the number is even
        if number % 2 == 0:
            # Add the even number to the total
            total += number
    # Return the total sum of even numbers
    return total
```


## 14 Using inline chat

Can use alternative suggestions and click on button at end to see side panel with all suggestions.

select code and then cmd + i to open inline chat

## 15 settings

Use Instruction files. `.github/copilot-instructionsmd` in the root of your repo. This file contains instructions for Copilot to follow when generating code. You can use this file to set up your coding style, preferred libraries, and other preferences. Copilot will use these instructions to generate code that matches your style and preferences.

Temporal Context: recently viewed and edited files, and the current file you are working on. Copilot will use this context to generate code that is relevant to your current task.

## 16 Code actions

Sparkle when on a line or selecting code. Click on the sparkle to see the code actions available for that line or selection. You can also use the keyboard shortcut `Cmd + .`

Review code selected like PR review. Modify code gives suggestions.

## Sidebar chat

`#file:README.md`
`#fn-name`

`@` to see all copilot functionality.

## 24 Unit tests

`/tests`

`@workspace /new create node project with express`

## Prompt Engineering

- Be specific
- Add useful context
- Add examples
- Split complex tasks
- Iterate to improve the result BUT don't get lost in "iteration hell"!

Other
- Use constraints

## Being specific and adding context

Give intent
Give context.
Give specifics on what you want it to do

## Validating input

Split complext tasks into multiple prompts

## Effective iteration

Easy to fall into the trap of using AI for everything.

## Extensions

[Extensions](https://github.com/marketplace?type=apps&copilot_app=true)


## General

- replace "'" with "`" and copilot will suggest the correct code
- `@` to see all copilot functionality
- `#file:README.md` to see the file name
- `#fn-name` to see the function name
- `@workspace /new create node project with express --with-tests --with-linting --with-prettier --with-eslint --with-prettier --with-vscode --with-git --with-docker --with-kubernetes --with-helm --with-terraform` to create a new project with express, tests, linting, prettier, eslint, prettier, vscode, git, docker, kubernetes, helm and terraform
- type /tests to create a new tests folder


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
```
