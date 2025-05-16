# Udemy course notes

[AI For Developers With GitHub Copilot, Cursor AI & ChatGPT](https://www.udemy.com/course/ai-for-developers-with-github-copilot-cursor-ai-chatgpt/)

My observations

Using AI tools to help with coding is like going from a bicycle to a motorcycle. You can go a lot faster and go futher with less effort. But you still need to know how to ride the motorcycle, balance like you did on the bicycle, and navigate where you want to go. You also need to be a lot more careful about driving safely. There's a reason why motorcycle helments are a lot bigger than bicycle helmets.

- [11 Using "Next Edit" Suggestions](#11-using-next-edit-suggestions)
- [12 Mastering Prompts: Using Comments To Guide Github Copilot's AI](#12-mastering-prompts-using-comments-to-guide-github-copilots-ai)
- [14 Using inline chat](#14-using-inline-chat)
- [15 settings](#15-settings)
- [16 Code actions](#16-code-actions)
- [Sidebar chat](#sidebar-chat)



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




