import app from "./app";

const port = 6558;
const url = "http://localhost:";

app.listen(port, () => {
  console.log(`CTRL + CLICK => ${url}${port}`);
});
