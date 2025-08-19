# [Real World Development with Github Copilot and VS Code](https://www.youtube.com/watch?v=eOxOzcw70f0&t=1730s)


## copilot-instructions.md

```markdown
# Stack

Typescript, React 18, Datadog, Tailwind CSS

```

## .github/instructions/

`frontend.instructions.md`

```markdown
---
applyTo: "**/*.{tsx,ts}"
---

# Typescript usage

- Avoid enums; use maps or union types instead.
- Use functional components with Typescript interfaces.
- Include proper type definitions for props and state.

```typescript
import { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
    // Datadog tracking
    datadogRum.startSessionReplayRecording();
  }, []);

  return <div className="p-4 bg-blue-500 text-white">Hello, World!</div>;
};

export default MyComponent;

```

## .github/prompts/

Specific prompts for adding features or fixing bugs in the codebase.


## .github/chatmodes/

- **TDD.chatmode.md**: A chat mode focused on Test-Driven Development (TDD) practices and methodologies.
- **default**: The standard chat mode for general inquiries and assistance.
- **code**: A chat mode focused on code-related questions and programming help.
- **debug**: A chat mode specifically for debugging assistance and troubleshooting code issues.

