import express from "express";
import times from "lodash/times.js";
import {router as calc} from './calc.js'

const app = express();
app.use('/calc', calc)

const users = times(100, (i) => {
    return {
        id: i,
        name: `User ${i}`,
    };
});

app.param("id", (req, res, next, id) => {
    const user = users.find((user) => user.id === parseInt(id));
    if (user) {
        req.user = user;
        next();
        return;
    }

    res.sendStatus(404);
});

app.get("/users/:id", (req, res) => {
    res.json(req.user);
});

app.get("/users/hello/:id", (req, res) => {
    res.send("Hello " + req.user.name);
});

app.get("/user/info/:id", (req, res) => {
    console.log(req.user.id)
    if (req.user.id % 2 === 0) {
        res.send("Parzysty identyfikator")
    } else {
        res.send("Nie parzysty identyfikator")
    }
});

app.use((req, res, next) => {
    res.status(404).send("404 – nie ma takiego adresu w aplikacji")
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

//import express from "express";
// import times from "lodash/times.js";
//
// const app = express();
//
// const users = times(100, (i) => {
//   return {
//     id: i,
//     name: `User ${i}`,
//   };
// });
//
// app.param("id", (req, res, next, id) => {
//   req.user = users.find((user) => user.id === parseInt(id));
//   if (req.user) {
//     next();
//     return;
//   }
//
//   res.sendStatus(404);
// });
//
// app.get("/users/:id", (req, res) => {
//   res.json(req.user);
// });
//
// app.get("/users/hello/:id", (req, res) => {
//   res.send("Hello " + req.user.name);
// });
//
// app.use((req, res, next) => {
//   res.status(404).send("404 – nie ma takiego adresu w aplikacji")
// });
//
//
//app.param('id', (req, res, next, id) => {
//   const [user] = users.filter((user) => user.id === id);
//   if (user) {
//     req.user = user;
//     req.id = parseInt(id);
//     next();
//   } else {
//     next(new Error('Failed to load user!'));
//   }
// });
//
// app.get('/user/info/:id', (req, res, next) => {
//   console.log(req.id);
//   if (req.id % 2 === 0) {
//     res.send('Identyfikator parzysty');
//   } else {
//     next('route');
//   }
// });
//
// app.get('/user/info/:id', (req, res) => {
//   res.send('Identyfikator nieparzysty');
// });

//app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });