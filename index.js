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
    
    tweets.unshift({
        ...tweet,
        avatar: getAvatar.avatar
    });
    
    res.send("OK");
});

app.get("/tweets", (req, res) =>{
    if(tweets.length <= 10){
        res.send(tweets);
    } else {
        res.send(tweets.splice(0, 10));
    }
});

app.listen(5000, () => console.log("Listening port on 5000"));