# Demo REST API Notes

## Prompt inline (CMD + I)

```text
add some event specific routes which can be used to create events, edit an event (identified by ID) or delete an event.

Use ESM imports exports.
```

Inline chat not aware of entire codebase (as of now)

## Chat

```
#codebase Edit the #file:events.js file to contain and export functions that will  create a new event (with title, description, address and date), edit an event, delete an event or get all or a single event by ID.
```

Note can start typing `#events.js` and it will add the `#file:`

Result doesn't use SQLLite db, so follow up Prompt

```text

I'm using a SQLite database. Update the #file:database.js file to also contain a fitting "events" table.

Use this database from this file in the #file:event.js file to perform the tasks mentioned before.
```

## Events Controller

```text
Insert and export functions for creating an event, editing an event, deleting an event and for getting one event by ID or all events.
Consider #file:event.js
```

Resulted in blocked code. Had to add alias to the import statement

Quicker with Cursor to rename and it predict the edits in the file.

```text
Update the routes to use the appropriate controller functions from #file:eventsController.js
```

```text
import all controller functions through one single "events" object
```

When referencing a file from typing in chat, `#file:` is automatically added to the file name. You don't start typing `#file:`. You start type the file name with the `#` like `#events.js` and it will be added automatically.
