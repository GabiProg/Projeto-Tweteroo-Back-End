import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const users = [];
const tweets = [];

app.post("/sign-up", (req, res) => {
    const user = req.body;
    users.push(user);
    res.send("OK");
});

app.post("/tweets", (req, res) =>{
    const tweet = req.body;
    
    const getAvatar = users.find(item => item.username === tweet.username);
    
    tweets.push({
        ...tweet,
        avatar: getAvatar.avatar
    });
    
    res.send("OK");
});

// app.get("/tweets", (req, res) =>{
//     res.send(tweets);
// });

app.listen(5000, () => console.log("Listening port on 5000"));