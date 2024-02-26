import express from 'express'

const app = express();



app.use(function (req, res, next) {
    console.log("Middleware 1");
    next()
})

app.get("/test", (req, res) => {
    res.send("Hello World!");
});

app.post("/test", (req, res) => {
    res.send("Hello World from post!");
});

app.patch("/test", (req, res) => {
    res.send("Hello World from patch!");
});

app.get("/file", (req, res) => {
    res.download("./kc.jpg");
})

app.get("/att", (req, res) => {
    res.attachment("./kc.jpg");
})

app.get("/json", (req, res) => {
    res.json({name: "Kamil", age: 25});
})
app.get('/test', function(req, res){
    res.send("wiadomosc z get")
})
app.listen(3000, function(){
    console.log("dziala port 300")
})