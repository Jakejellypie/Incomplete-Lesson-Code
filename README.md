# Lesson Code

This is the Incomplete file that the students will code in.
In case there's too many issues to debug, you can download the completed Lesson version from [here](https://github.com/blekmus/js-group-lesson)

### Link to DiscountCord Socket.IO server
```
https://js-group-demo.onrender.com
```

## Lesson steps

### Step 1
Download the live-lesson template from the public GitHub Repo and initialize npm in that folder
``` sh
npm init
```

### Step 2 
Installing dependencies.
Express to send static files (css, html, clientside-js) to the backend server
Socket.io a websocket library, to actually illicit communication b/w the front-end lesson code and backend demo.

``` sh
npm install express
npm install socket.io
```

### Step 3
Check if installations happened properly by checking inside of `package.json`.

### Step 4
In their test-server.js, explaining the imports and what they are going to be used for in this lesson.

``` js
const expressImport = require("express");
const httpImport = require("http");
const socketIO = require("socket.io");
```

### Step 5
Talk about the server-side code in the test-server, explain how it works, that the `server.on` means listening and `.emit` means sending. What sockets mean and stuff like that. Not making them write the test-server just explaining it, it's already written for them.

### Step 6
Add Socket.IO CDN script to import the minified version of the library from the internet. It is through this that we can actually use the io function in our client-side js to communicate with the backend server

``` html
<script src="https://cdn.socket.io/4.7.2/socket.io.min.js"></script>
```

``` js
const socket = io("link to backend");
```

### Step 6 
Explaining the already written js variables in client-side js. These variables just connect to the html, adding the the import feature for the message UI js functions.

### Step 7 
Make them write their own username, and description as top level variables.

### Step 8 
Write the socket specific variable (events) and functions (emit and on).

### Step 9
Have them connected to the DiscountCord Socket.IO server linked above and have a mini group chat between the class

### Step 10
Debug if needed, if their code is too messed up, guide them to a GitHub repo with correctly written code.

### Step 11 
Do live demonstration where we send messages to and from the live lesson everyone's coded and our demo website.
