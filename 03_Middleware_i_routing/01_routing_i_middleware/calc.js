// import express from 'express';
//
// export const router = express.Router();
//
// const operations = ['add', 'subtract', 'divide', 'multiply', 'modulo'];
//
// router.get('/:num1/:operation/:num2', (req, res, next) => {
//     const num1 = parseInt(req.params.num1);
//     const num2 = parseInt(req.params.num2);
//     if (isNaN(num1) || isNaN(num2)) {
//         res.status(409);
//         next(new Error('Not a number'));
//     } else if (!operations.includes(req.params.operation)) {
//         res.status(409);
//         next(new Error('Unknown operation'));
//     } else {
//         let result = 0;
//         switch (req.params.operation) {
//             case 'add':
//                 result = num1 + num2;
//                 break;
//             case 'subtract':
//                 result = num1 - num2;
//                 break;
//             case 'divide':
//                 result = num1 / num2;
//                 break;
//             case 'multiply':
//                 result = num1 * num2;
//                 break;
//             case 'modulo':
//                 result = num1 % num2;
//                 break;
//         }
//         res.send(`${result}`);
//     }
// });
//
// router.use((err, req, res, next) => {
//     res.send(err.message);
// });

import express from 'express';

export const router = express.Router();

router.get('/:num1/:operation/:num2', function (req, res) {
    let num1 = parseInt(req.params.num1);
    let num2 = parseInt(req.params.num2);
    let operation = ["add", "subtract", "multiply", "divide", "modulo"]

    if ( isNaN(num1) && isNaN(num2)) {
        console.error("num1 i num2 muszą być liczbami");
       throw new Error("Podaj liczby")
    }

    if (!operation.includes(req.params.operation)) {
        res.sendStatus(409)
        throw new Error("Podaj liczby")("Podaj poprawną operację - \"add\", \"subtract\", \"multiply\", \"divide\", \"modulo\" ")
    }
    let result = 0
    switch (req.params.operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            result = num1 / num2;
            break;
        case "modulo":
            result = num1 % num2;
            break;
    }
    res.send(`${result}`)
})

router.use((err, req, res, next) => {
    res.send(err.message);
});


//import express from 'express';
//
// export const router = express.Router();
//
// const operations = ['add', 'subtract', 'divide', 'multiply', 'modulo'];
//
// router.get('/:num1/:operation/:num2', (req, res, next) => {
//   const num1 = parseInt(req.params.num1);
//   const num2 = parseInt(req.params.num2);
//   if (isNaN(num1) || isNaN(num2)) {
//     res.status(409);
//     next(new Error('Not a number'));
//   } else if (!operations.includes(req.params.operation)) {
//     res.status(409);
//     next(new Error('Unknown operation'));
//   } else {
//     let result = 0;
//     switch (req.params.operation) {
//       case 'add':
//         result = num1 + num2;
//         break;
//       case 'subtract':
//         result = num1 - num2;
//         break;
//       case 'divide':
//         result = num1 / num2;
//         break;
//       case 'multiply':
//         result = num1 * num2;
//         break;
//       case 'modulo':
//         result = num1 % num2;
//         break;
//     }
//     res.send(`${result}`);
//   }
// });
//
// router.use((err, req, res, next) => {
//   res.send(err.message);
// });