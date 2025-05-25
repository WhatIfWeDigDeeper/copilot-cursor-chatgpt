# Cursor

- [Autocomplete](#autocomplete)
  - [Change on multiple lines](#change-on-multiple-lines)
- [Suggestions](#suggestions)
  - [functions](#functions)
  - [Sample starting code](#sample-starting-code)
  - [with comments](#with-comments)
- [debugging](#debugging)


[Cursor](https://www.cursor.com/) is a code editor that is designed to be fast and efficient. It is built on top of the [CodeMirror](https://codemirror.net/) library, which provides a powerful and flexible code editing experience. Cursor is designed to be lightweight and fast, making it ideal for developers who need a quick and efficient way to edit code. Cursor is also designed to be extensible, allowing developers to add their own custom features and functionality. This makes it a great choice for developers who want to create their own custom code editing experience.

## Autocomplete

Cursor suggests 3 functions from "def" in a file named write_file.py

VS Code waits until `def write` to autocomplete the function

VS Code suggests functions one at a time

But many more fns are suggested with just going to new line

Cursor stops after 3

Then it requires typing `def` to suggest a single fn

### Change on multiple lines

Renaming parameter cursor suggests same function parameter name to accept with tab. It also suggests changing the same parameter name in different functions in the same file. If you change your mind and rename it back, it does not suggest renaming the usage or the other functions.

VS Code now does the same and you accept each rename parameter & usage like Cursor in multiple functions. It keeps supporting renaming if you change it back.

## Suggestions

### functions

Cursor in video suggested creating a function after typing `parse_input` without the `def` and also suggested a fn `parse_output` It didn't do it when I was trying on my trial pro version. Had to bring up prompt and "create function for line n". It didn't seem to recognize the highlighted line. It did suggest 2 other functions for me, `parse_input_to_dict` and `parse_input_to_list` after accepting the first fn.

VS Code also didn't suggest creating a function. I was able to select the line and bring up inline chat and type "create function". VS Code suggested parse related functions

parse_input_with_quotes
parse_input_with_quotes_and_escape
parse_input_with_quotes_and_escape_and_special_chars

### Sample starting code

```python
 if __name___ == "__main__":
```

It only suggested parsing examples for the last 3 functions with the initial suggestion after typing `if`.

VS Code suggested after typing `if` and created multiple actual examples, creating a file, reading a file, appending, and deleting. It suggested examples for all functions in the file with two tabs to accept. It did have an error where it added "``" on one line.

### with comments

Given the following

```python
if __name__ == "__main__":
  # read user input and store it in a file
  # ask the user for more input until they say "done"
```

Cursor created the following code with multiple tabs

```python
if __name__ == "__main__":
  # read user input and store it in a file
  # ask the user for more input until they say "done"

  # create a file
  file_path = "test.txt"
  create_file(file_path)

  # ask the user for input
  user_input = input("Enter your input: ")

  # write the input to the file
  write_file(file_path, user_input)

  # ask the user for more input
  more_input = input("Enter more input: ")

  # write the more input to the file
  write_file(file_path, more_input)

  # ask the user for more input
  more_input = input("Enter more input: ")
```

VS Code created this code

```python
if __name__ == "__main__":
  # read user input and store it in a file
  # ask the user for more input until they say "done"
    user_input = input("Enter some text (type 'done' to finish): ")
    while user_input.lower() != "done":
        append_file("user_input.txt", user_input + "\n")
        user_input = input("Enter some text (type 'done' to finish): ")

    # read the file and print its contents
    print("Contents of user_input.txt:")
    print(read_file("user_input.txt"))
```


## debugging
