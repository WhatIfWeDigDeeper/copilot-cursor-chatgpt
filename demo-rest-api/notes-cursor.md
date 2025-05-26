# Cursor

Break up problems into multiple steps.

## Steps

1. Create a new file for the problem.
2. Write the code for the problem.
3. Run the code.
4. Debug the code.
5. Refactor the code.
6. Test the code.

## Prompt user login and signup

```text
Users must be able to register, sign up, and log in.

Don't add any JWT code or anything like that, just generate a user model (without using classes) in the models folder. Also generate sign up and log in routes, (e.g. `/users/signup` in the routes folder.

Last but not least, add the code for linking route and model to a user's controller (controllers folder).

Don't add any code for storing user data in a database yet

```

Note have to use `cmd shift v` to past into chat, otherwise it adds the files with the lines, but you can't execute the prompt.


```text
Change the import-export syntax across all files from common.js to ESM.
```

Manually converted const fn = () => to export function. Cursor recognized what I was doing and converted the rest of the functions to export function and removed the final exports.

```text
I want to store all data in a SQLite database.

How do I add one to this application?
```

```text
I want to use the better SQLite3 package instead of the SQLite3 package.
```

Better validation of user input.

```text
validate email with regex
```


```text
extract to a function validateEmail with commented regex
```
