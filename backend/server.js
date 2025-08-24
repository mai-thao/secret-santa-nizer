const express = require('express');
const assignRoute = require('./routes/assign');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use('/api', assignRoute);

app.listen(PORT, () => {
  console.log(`Server is up and running at http://localhost:${PORT}`);
});
