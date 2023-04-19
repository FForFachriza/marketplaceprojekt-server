import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import expressSession from "express-session";
import { PrismaSessionStore } from "@quixo3/prisma-session-store";
import { PrismaClient } from "@prisma/client";
import productsRouter from "./routes/productsRoute.js";
import categoriesRouter from "./routes/categoriesRoute.js";
import usersRouter from "./routes/usersRoute.js";
import authRouter from "./routes/authRoute.js";
import statusRouter from "./routes/statusRoute.js"

const app = express();

// config
dotenv.config({
  path: "./.env",
});

// app
app.use(express.json());

app.use(
  expressSession({
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000, // ms
      secure: "auto",
    },
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: new PrismaSessionStore(new PrismaClient(), {
      checkPeriod: 2 * 60 * 1000, //ms
      dbRecordIdIsSessionId: true,
      dbRecordIdFunction: undefined,
    }),
  })
);

app.use(
  cors({
    credentials: true,
    origin: process.env.APP_URL,
  })
);

// router
app.use(authRouter);
app.use(productsRouter);
app.use(categoriesRouter);
app.use(usersRouter);
app.use(statusRouter)
// listening

app.listen(process.env.APP_PORT, () => {
  console.log(`Server is running on port localhost:${process.env.APP_PORT}`);
});
