const express = require('express');
const cors = require("cors");
const assignRoute = require('./routes/assign');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" })); // Allow Vite frontend cross-origin requests
app.use('/api', assignRoute);

app.listen(PORT, () => {
  console.log(`Server is up and running at http://localhost:${PORT}`);
});
