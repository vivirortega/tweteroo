import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

let users = [];
let tweets = [];

app.post("/sign-up", (req, res) => {
  const { username, avatar } = req.body;
  const user = {
    username: username,
    avatar: avatar,
  };

  users.push(user);
  res.send("Ok");
});

app.post("/tweets", (req, res) => {
  const { username, tweet } = req.body;
  const tweetUser = users.find((user) => user.username === username);
  
  const tweetPost = { 
    username: username,
    avatar: tweetUser.avatar,
    tweet: tweet,
  };

  tweets.push(tweetPost); 
  res.send("Ok");
})

app.get("/tweets", (req, res) => {
    const tweets10 = tweets.slice(-10);
    tweets10.reverse();
    res.send(tweets10); 
})

app.listen(5000, () => console.log("Server working"));

