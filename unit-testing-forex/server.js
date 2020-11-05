//PACKAGES AND VARIABLES
const express = require("express");
const app = express();
const PORT = 3000;

//MIDDLEWARE
app.use(express.json());

//ROUTE
app.use("/", (req, res) => {
  res.send({ data: {} });
});

//INITIALIZE SERVER
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}.`);
});
