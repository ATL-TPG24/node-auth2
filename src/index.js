const express = require('express');
const app = express();
const port = 3000;

const userRouter = require('./routers/userRouter');

// app.get('/', (req, res) => {
//   res.send('Hello World!!! Nascar!');
// });
app.use('/', userRouter);
app.use('/items', userRouter);

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
