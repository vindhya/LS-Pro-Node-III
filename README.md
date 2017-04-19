# LS-Pro-Node-III

Topics:

 * POST Requests
 * middleware
 * body-parser


### Routes

  * Run `npm init` to create your `package.json` file.
  * Install `express` with `npm i --save express`
  * Create your server file called `server.js`.
  * Import `express` and create your `app`.
  * Set your `app` to listen on port 3000 and then write a `'/'` route that returns `'Hello World!'`;
  * Create the following route: `/books` that returns an array of book objects.  Create this array outside of the route handling callbacks.  Each book object should have a unique id, a name property, an author property and a page count property.
  * Create a route called `/book/:id` that returns the specific book specified.
  * Create a POST route called `/newbook` that accepts a JSON object representing a new book to add to the books array.  Verify that this route works by sending a GET request from postman or chrome to `/books` after you've posted the data.  Keep in mind that this change is not being written to the storage device so this change will not persist if you restart your server.  (That's where DBs come in.)
