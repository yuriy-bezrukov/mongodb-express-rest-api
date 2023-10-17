import cors from "cors";
import express from "express";
import "express-async-errors";

import "./loadEnvironment.js";
import posts from "./routes/posts.js";
import tasks from "./routes/tasks.js";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/posts", posts);
app.use("/tasks", tasks);

app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured.")
})

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
