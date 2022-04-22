import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

let users = [];

app.post("/sign-up", (req, res) => {
  const { username, avatar } = req.body;
  const user = {
    username: username,
    avatar: avatar,
  };

  users.push(user);
  res.send("Ok");
});

app.listen(5000, () => console.log("Server working"));
