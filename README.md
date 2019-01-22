# JavaScript Code Challenge

## Objectives

- DOM Manipulation
- Events and Event Handlers
- Callbacks

## Instructions

We're building out a comment feature for our application. A user should be able to create a new comment and add that comment to a `comments list`. The comments list can be filtered via a keyword.

---

## Running the Server

Instead of actually accessing the data from a remote API, this challenge uses a package called [json-server](https://github.com/typicode/json-server) to create a fake API for development and testing.

It is very easy to set-up.

1 - Run the command `$ npm install -g json-server` in the command line from this directory

2 - Run  `$ json-server --watch db.json`

That's it. You will have a server running on `localhost:3000` that serves the JSON data contained in the `db.json` file.

*Troubleshooting: If this fails, be sure you don't already have something running on port 3000*

This server will follow normal RESTful routing conventions and will responde with JSON. The endpoints available to you are listed below:

| HTTP Verb | Endpoint        | Response                  | Required Params                             |
| :-------- | :-------------- | :------------------------ | :------------------------------------------ |
| `GET`     | `/comments`     | all comments              | none                                        |
| `GET`     | `/comments/:id` | a single comment          | comment id in url                           |
| `POST`    | `/comments`     | the newly created comment | `content` key in body                       |
| `PATCH`   | `/comments/:id` | the updated comment       | `content` key in body and comment id in url |
| `DELETE`  | `/comments/:id` | empty object `{}`         | comment id in url                           |


Don't forget to specify the `headers` when sending JSON to the server:

```js
headers: {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}
```
---

## Deliverables

### Functionality demo

![Functionality Demo](functionality-demo.gif)

---

- When the page loads, a user should be able to see all of the already existing comments on the page.

- A user should be able to fill out the comment field, submit the form, and append their new comment to the page as a list item.
  - Each comment should have a delete button. Sample markup for a comment might look like this:

```html
<li class="list-group-item">
  <span> a sample comment </span>
  <button class="btn btn-danger btn-sm pull-right">Delete</button>
</li>
```

- A user should be able to type a search term into the filter comments input
  - The comments list should **only display comments _containing_ the search term**
  - **MAJOR KEY ALERT** `json-server` does not have any validations. If your `db.json` file has any blank or invalid comments, feel free to copy/paste the valid comments found in `db-backup.json`
  - If the user clears the filter input, all comments should be displayed again.

- A user should be able to delete a particular comment by clicking the delete button. These changes should be present in both the DOM and the server.

- A user should be able to edit a particular comment. How you choose to implement this is up to you. You could create a new form on the page, change the comment to an `<input>` tag, pre-fill the already existing form, or use a modal.

Good luck!
