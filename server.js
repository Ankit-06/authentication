const app = require("./src/app");
const { PORT } = require("./src/config");

app.listen(PORT, () => {
  console.log(`Server is working on http://localhost:${PORT}`);
});
