# JavaScript Code Challenge

## Objectives

- DOM Manipulation
- Events and Event Handlers
- Callbacks

## Instructions

We're building out a comment feature for our appliction. A user should be able to create a new comment and add that comment to a `comments list`. The comments list can be filtered via a keyword.

---

## Deliverables

### Functionality demo

![Functionality Demo](functionality-demo.gif)

---

- A user should be able to fill out the comment field, submit the form, and append their new comment to the page as a list item.
  - Each comment should have a delete button. Sample markup for a comment might look like this:

```html
<li>
  YOUR COMMENT HERE
  <button type="button" name="button">X</button>
</li>
```


3. If a user provides a search term into the 'Filter comments' input field, the comments list should automatically display only comments containing the filtering term. (Hint: You could use a "keyup" event bound to the comments filtering input field).

  - If the user clears the filtering input all comments should be displayed again.

### Part Two - Refactoring with Constructors and Prototypes (feel free to use either ES5 or ES6)

**Note** When creating constructors and prototypes, you may use ES6 classes or just create the constructor function separately. Your choice.

1. **Create your refactored OO Solution in a new file.(`index.js`)**
2. Code your solution in `comment.js` and `commentList.js`
3. The commment class should support the following api: `new Comment('Comment text')`
4. Instances of comments should have a method called 'render' that returns a string representing an `li` HTML element containing the comment's text.
5. The comment lists class `commentList.js` should have a comments array. The initializer should be able to take an array of strings and convert them to comments
6. Instances of CommentList should have a method called 'render' that returns a string of a `ul`. Inside of the ul, the comment list should include the return value of the render method of all of it's comments.
7. Instances of CommentList should have a method called 'addComment' that takes in a string. It should instantiate a new Comment and add it to the CommentList's array of comments.
8. Implement a filter functionality for your comment list.
9. Implement a delete functionality on each comment.
