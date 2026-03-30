import express from "express"

const app = express(); // setup an express app

app.use(express.json())

// import routes

import UserRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";

// route declearation
app.use("/api/v1/users", UserRouter);
app.use("/api/v1/posts", postRouter);

// example: http://localhost:4000/api/v1/users/register

export default app;