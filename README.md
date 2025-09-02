# secret-santa-nizer
Draw and pick names for Secret Santa! Special Edition for the Thao family.

Assignments are stored in the `/backups` directory.

### How to Install Dependencies
This project uses [npm](https://www.npmjs.com/) (Nope Package Manager) to manage and install its dependencies
1) Execute the command: `npm install`

### How to Run the Backend Node.js App
1) Execute the command: `node server.js`
2) Call the endpoint using Insomnia or [curl](https://curl.se/) below:
```
curl -X POST -H "Content-Type: application/json" -d "{\"names\": [\"Jane\", \"John\"]}" http://localhost:3001/api/assign
```
3) Terminate the app with: Ctrl + C   

_If you don't have `npm` or Node.js installed on your local machine, see the steps at: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm_

### How to Run the Frontend React App
_Note: The backend Node.js app must be running first otherwise the frontend React app won't function!_

1) Execute the command: `npm run dev`
2) Open your browser and navigate to: http://localhost:5173/
3) Terminate the app with: Ctrl + C

### Wishlist
* Instead of saving assignments to JSON files, save into sqlite3 database
* Learn more about Fisher-Yates algorithm for more advanced randomization logic
