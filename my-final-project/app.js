const express = require('express');
const cors = require('cors');
const birdsRouter = require('./routes/birds');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/birds', birdsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
