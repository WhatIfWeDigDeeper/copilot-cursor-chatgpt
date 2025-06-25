# Rob Conery video Notes

[Copilot the good parts](https://robconery.com/ai/copilot-the-good-parts-efficiency/) - efficiency

Concerns

> - It will take jobs away and devalue our work.
> - Entire teams will be replaced by a few devs with AI tools.
> - Programmers will forget how to program.
> - Code quality will decline or be entirely untrustworthy.
> - It takes too much time to vet the code.

Good parts

> - Generate formatted Git commit messages which you customize with custom instructions.
> - Fix CSS problems or, better yet, make something look less atrocious.
> - Generate test data for a database using DDL or a JSON object as context.
> - Create a database for you using nothing but a spec document.
> - Create a database change script using two DDL files.
> - Add open source documents for your project, including CoC, issue templates, LICENSE, SECURITY.md, and a CHANGELOG based on Git commits.

1. Play around, find out
2. Shortens Google / Stack Overflow feedback loop
3. Git commit messages
4. Customization
5. Override the defaults
6. Templates
7. Finding Errors

## Advice

- Go slow, small steps
- Keep going. If things aren't right, change up your prompt or iterate.

Check cutoff date for model training as it may not know about recent changes in the language or libraries.

Claude Sonnet 4 trained up to March 2025

## settings.json
```JSON
{
  "github.copilot.chat.commitMessageFormat": {
    "text": "Use the subject line with a blank line after it, followed by a description of the changes made. Use the present tense and imperative mood. For example: 'Add new feature to improve user experience.'"
  }
}
```

## copilot-instructions.md

```markdown

## docs

- Add JSDoc to document the main functions.

## Tone and Responses

- Use a friendly and conversational tone.
- Be concise and to the point.
- Use examples to illustrate your points.
- Be open to feedback and willing to iterate on your responses.

## Terminal

- never run a rm command. Put that in plain text and not in the code block.

```

## Copilot Generated

- [ ] Copilot is not a replacement for developers, but a tool to help them be more efficient.
- [ ] Copilot can help you write code faster, but it is not always the best solution.
- [ ] Copilot can help you learn new things, but it is not a replacement for learning.
- [ ] Copilot can help you find bugs, but it is not a replacement for testing.
- [ ] Copilot can help you write documentation, but it is not a replacement for writing documentation.
- [ ] Copilot can help you write tests, but it is not a replacement for writing tests.

# NDC Jan 27-31 2025

[Beyond The Hype: Every Day, Real World Uses for Copilot](https://www.youtube.com/watch?v=kkCw-M4zoUA)

- Shorts the Google -> Stack Overflow feedback loop
- Good at boilerplate code
- Can give it template code
- explain codebase - write a README describing the project and how to use it
