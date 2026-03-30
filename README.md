Here you go — wrapped properly as a **README.md file (clean, final, ready to paste)** 👇

---

````md
# 📦 Project Initialization (package.json)

To start a Node.js project, the first step is initializing a `package.json` file. This file contains important information such as project version, dependencies, entry point, and metadata.

---

## 🚀 Initialize Project

Run the following command in your terminal:

```bash
npm init
````

You can use any terminal, such as:

* Git Bash
* PowerShell
* Zsh
* Command Prompt

---

## 📝 Configuration Prompts

After running the command, npm will ask for project details:

* **package name** → your-project-name
* **version** → 1.0.0
* **description** → short project description
* **entry point** → index.js
* **test command** → optional
* **git repository** → your repo link
* **keywords** → related tags
* **author** → your name
* **license** → ISC
* **type** → commonjs

---

## 📌 Example package.json

```json
{
  "name": "your-project-name",
  "version": "1.0.0",
  "description": "Project description",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "Your Name",
  "license": "ISC",
  "type": "commonjs"
}
```

---

> ✅ Now your `package.json` is successfully created

---

# 🗄️ MongoDB Setup Guide

## 📌 Step 1: Create MongoDB Account

Go to: [https://www.mongodb.com/](https://www.mongodb.com/)
Sign up and create your account.

---

## 📁 Step 2: Create Project

After login:

* Click **New Project**
* Enter project name
* (Optional) Add description
* Click **Create Project**

---

## 🏗️ Step 3: Create Cluster

* Click **Build a Database**
* Choose **Free Tier (M0)**
* Select region & provider
* Click **Create Cluster**

---

## 🔐 Step 4: Create Database User

* Go to **Database Access**
* Add new user:

  * Username
  * Password
* Select **Read & Write Access**
* Save user

---

## 🌐 Step 5: Network Access

* Go to **Network Access**
* Click **Add IP Address**
* Select **Allow Access from Anywhere (0.0.0.0/0)** *(for development only)*

---

## 🔗 Step 6: Get Connection String

* Go to **Clusters → Connect**
* Select **Connect your application**
* Copy connection string

### Example:

```bash
mongodb+srv://username:password@cluster0.mongodb.net/yourDatabaseName
```

---

## 🔑 Step 7: Setup Environment Variables

Create a `.env` file in the root directory:

```bash
.env
```

Add your MongoDB URI:

```env
MONGODB_URI=mongodb+srv://username:password@cluster0.mongodb.net/yourDatabaseName
PORT=8000
```

### 📖 Explanation

The `.env` file is used to store **sensitive data** like database URLs and API keys.
This keeps your code secure and clean instead of hardcoding values.

---

## 📌 Step 8: Create constants.js

Create a file:

```bash
constants.js
```

Add:

```js
export const DB_NAME = "yourDatabaseName";
```

### 📖 Why use constants?

`constants.js` is used to store fixed values in one place.
This improves code readability and avoids repetition.

---

## 📌 Step 9: Setup Database Connection

### Install Mongoose

```bash
npm install mongoose
```

---

### 📂 Create `config/database.js`

```js
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);

        console.log(`\n✅ MongoDB connected! HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("❌ MongoDB connection failed:", error);
        process.exit(1);
    }
};

export default connectDB;
```

### 📖 Explanation

* `mongoose.connect()` → connects app with MongoDB
* `process.env.MONGODB_URI` → gets URI from `.env`
* Stops app if DB fails

---

## 📌 Step 10: Create Server Entry File

Create `index.js`:

```js
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import app from "./app.js";

dotenv.config({
    path: "./.env"
});

const startServer = async () => {
    try {
        await connectDB();

        app.on("error", (error) => {
            console.error("ERROR:", error);
            throw error;
        });

        const PORT = process.env.PORT || 8000;

        app.listen(PORT, () => {
            console.log(`🚀 Server is running on port: ${PORT}`);
        });

    } catch (err) {
        console.error("❌ MongoDB connection error:", err);
    }
};

startServer();
```

---

## 📖 Explanation

This file is the **main entry point** of your application:

* Loads environment variables
* Connects to MongoDB
* Starts the server

---

# 🚀 Node.js Authentication Backend with MongoDB

![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)
![Express](https://img.shields.io/badge/Express.js-Backend-black)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)
![Mongoose](https://img.shields.io/badge/Mongoose-ODM-red)
![bcrypt](https://img.shields.io/badge/bcrypt-Password%20Hashing-blue)
![License](https://img.shields.io/badge/License-ISC-lightgrey)

## Project Overview

This project is a simple and clean **Node.js authentication backend** built with **Express.js**, **MongoDB**, and **Mongoose**. The main goal of this backend is to understand how a real API is structured and how different parts of the backend work together. In this project, the authentication module includes three basic APIs: **register**, **login**, and **logout**.

The application is organized in a modular way so that every file has a clear responsibility. The database connection is kept separate from the server startup logic, request handling is separated into controllers, database structure is defined inside models, and routes are responsible for mapping URLs to the correct controller functions. This structure makes the backend easier to read, easier to maintain, and easier to scale later.

---

## Tech Stack
# 📦 Project Initialization (package.json)

- **Node.js** for running JavaScript on the server
- **Express.js** for creating the HTTP server and APIs
- **MongoDB** as the database
- **Mongoose** for communicating with MongoDB using schemas and models
- **dotenv** for environment variables
- **bcrypt** for password hashing
- **Postman** for API testing

---

## Project Structure

```text
project-root/
│
├── config/
│   └── database.js
│
├── controllers/
│   └── user.controller.js
│
├── models/
│   └── user.model.js
│
├── routes/
│   └── user.route.js
│
├── .env
├── .gitignore
├── app.js
├── constants.js
├── index.js
└── package.json
```

Each folder and file has a specific purpose. The `config` folder is created to store configuration logic such as the MongoDB connection. The `models` folder is created to define the structure of database documents. The `controllers` folder contains the business logic of the application, meaning the actual code that runs when an API is called. The `routes` folder is used to connect URLs with controller functions. The root files such as `app.js`, `index.js`, `.env`, and `package.json` handle application startup, configuration, and project metadata.

---

## Step 1: Initialize the Project

The first step is to initialize the Node.js project. This creates the `package.json` file, which stores the basic information about the project such as its name, version, dependencies, and scripts.

```bash
npm init
```

You can run this command in any terminal such as Git Bash, PowerShell, Zsh, or Command Prompt.

During initialization, npm asks for details like the package name, version, description, entry point, author, and license. These values are stored inside `package.json`.

### Example `package.json`

> **Important:** Since this project uses `import` and `export`, the `type` should be set to `module` instead of `commonjs`.

```json
{
  "name": "your-project-name",
  "version": "1.0.0",
  "description": "Node.js authentication backend with MongoDB",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "node index.js"
  },
  "keywords": ["nodejs", "express", "mongodb", "authentication"],
  "author": "Your Name",
  "license": "ISC",
  "type": "module"
}
```

The `package.json` file is important because Node.js uses it to understand how your project should run. It also keeps track of all installed packages. Without this file, managing dependencies and scripts becomes difficult.

---

## Step 2: Install Required Packages

After initializing the project, the next step is to install the packages needed for the backend.

```bash
npm install express mongoose dotenv bcrypt
```

These packages are used for different purposes. `express` is used to create the server and define APIs. `mongoose` is used to connect the application with MongoDB and define schemas and models. `dotenv` is used to load environment variables from the `.env` file. `bcrypt` is used to hash passwords before storing them in the database so that user passwords remain secure.

---

## Step 3: Create a MongoDB Atlas Project and Cluster

To connect the backend with MongoDB, first create an account on MongoDB Atlas. After signing in, create a new project and then create a new cluster. The free tier is enough for practice and learning.

Once the cluster is created, you need to do two important things:

1. Create a database user by setting a username and password.
2. Add your IP address in **Network Access** or allow access from everywhere (`0.0.0.0/0`) for development.

After that, open the **Connect** option on the cluster, choose **Connect your application**, and copy the provided connection string.

### Example MongoDB Connection String

```bash
mongodb+srv://username:password@cluster0.mongodb.net/yourDatabaseName
```

This connection string is the bridge between your backend and your MongoDB database.

---

## Step 4: Create the `.env` File

Create a `.env` file in the root of the project and store the MongoDB URI and port inside it.

```env
MONGODB_URI=mongodb+srv://username:password@cluster0.mongodb.net/yourDatabaseName
PORT=8000
```

The `.env` file is used to store sensitive and configurable values such as database URLs, API keys, and port numbers. This is better than writing those values directly in the code because sensitive data should not be hardcoded. It also makes it easier to change configuration later without editing multiple files.

You should also add `.env` to `.gitignore` so that your secrets are not pushed to GitHub.

### Example `.gitignore`

```gitignore
node_modules
.env
```

---

## Step 5: Create `constants.js`

Create a file named `constants.js`.

```js
export const DB_NAME = "yourDatabaseName";
```

This file is used to store values that do not change frequently. A constants file is useful because it keeps reusable values in one place. If the value needs to be updated later, you can change it in one file instead of searching through the whole project.

In this project, `DB_NAME` is stored as a constant because the database name is a fixed value. Even if it is not heavily used right now, keeping it in a separate file is a good practice and makes the project more organized.

---

## Step 6: Create the Database Connection File

Inside the `config` folder, create a file named `database.js`.

```js
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`\n✅ MongoDB connected: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("❌ MongoDB connection failed:", error);
        process.exit(1);
    }
};

export default connectDB;
```

This file is created to keep database connection logic separate from the rest of the application. Instead of writing MongoDB connection code directly inside `index.js`, it is placed in its own file so the code remains modular and clean.

The `connectDB` function connects the application to MongoDB using `mongoose.connect()`. The URI is read from `process.env.MONGODB_URI`, which comes from the `.env` file. If the connection succeeds, the host name is logged in the console. If the connection fails, an error is printed and the application is stopped using `process.exit(1)`.

---

## Step 7: Create `app.js`

Now create `app.js`.

```js
import express from "express";
import UserRouter from "./routes/user.route.js";

const app = express();

// middleware
app.use(express.json());

// route declaration
app.use("/api/v1/users", UserRouter);

export default app;
```

The purpose of `app.js` is to create and configure the Express application. This file is responsible for initializing the app, adding middleware, and registering routes. It does not start the server itself. Its role is to prepare the application so that `index.js` can later run it.

The `express.json()` middleware is important because it allows the server to read JSON data sent from the client in the request body. Without this middleware, `req.body` would not work properly for JSON requests.

The route declaration `app.use("/api/v1/users", UserRouter)` tells Express that any request starting with `/api/v1/users` should be handled by the user router. This creates a clear base path for all user-related APIs.

---

## Step 8: Create `index.js`

Create the main entry file named `index.js`.

```js
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import app from "./app.js";

dotenv.config({
    path: "./.env"
});

const startServer = async () => {
    try {
        await connectDB();

        app.on("error", (error) => {
            console.error("ERROR:", error);
            throw error;
        });

        const PORT = process.env.PORT || 8000;

        app.listen(PORT, () => {
            console.log(`🚀 Server is running on port: ${PORT}`);
        });
    } catch (err) {
        console.error("❌ MongoDB connection error:", err);
    }
};

startServer();
```

This file is the main starting point of the backend. It loads environment variables, connects the database, and starts the Express server.

The flow here is important. First, `dotenv.config()` loads the values from `.env`. Then `connectDB()` connects the application to MongoDB. Only after the database connection succeeds does the server start listening on the defined port. This order is useful because it prevents the application from accepting requests when the database is not connected.

---

## Step 9: Create the User Model

Inside the `models` folder, create `user.model.js`.

```js
import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            minlength: 1,
            maxlength: 30,
            trim: true
        },
        password: {
            type: String,
            required: true,
            minlength: 8,
            maxlength: 50
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        }
    },
    {
        timestamps: true
    }
);

userSchema.pre("save", async function () {
    if (!this.isModified("password")) return;
    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

export const User = mongoose.model("User", userSchema);
```

### Why do we use a schema?

A schema defines the structure of documents inside MongoDB. It tells Mongoose what fields should exist, what their data types are, which fields are required, and what validation rules should be applied. In this project, the schema ensures that every user has a `username`, `email`, and `password`, and it also enforces rules such as uniqueness, trimming, lowercase formatting, and minimum or maximum lengths.

### Why do we use a model?

A model is created from the schema and is used to interact with the database. It gives you methods such as `create()`, `findOne()`, `findById()`, `updateOne()`, and many more. In simple words, the schema defines the shape of the data, and the model is the tool used to work with that data.

### Why is bcrypt used here?

Passwords should never be stored in plain text. If plain-text passwords are saved in the database, anyone with database access could see them directly. That is why `bcrypt` is used. It converts the password into a hashed value before saving it.

The `pre("save")` middleware runs automatically before a user document is saved. It checks whether the password field has been modified. If yes, it hashes the password using `bcrypt.hash()`. This means the original password is never stored directly in MongoDB.

The `comparePassword` method is added to the schema so that during login, the entered password can be compared with the hashed password stored in the database. This comparison is done using `bcrypt.compare()`.

The `timestamps: true` option automatically adds `createdAt` and `updatedAt` fields, which helps track when a user was created and last updated.

---

## Step 10: Create the Controller

Inside the `controllers` folder, create `user.controller.js`.

```js
import { User } from "../models/user.model.js";

const registerUser = async (req, res) => {
    try {
        const { username, password, email } = req.body;

        if (!username || !password || !email) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingUser = await User.findOne({
            email: email.toLowerCase()
        });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const user = await User.create({
            username,
            password,
            email: email.toLowerCase()
        });

        return res.status(201).json({
            message: "User registered successfully",
            user: {
                id: user._id,
                email: user.email,
                username: user.username
            }
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            });
        }

        const user = await User.findOne({
            email: email.toLowerCase()
        });

        if (!user) {
            return res.status(400).json({
                message: "User not found"
            });
        }

        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid credentials"
            });
        }

        return res.status(200).json({
            message: "User logged in successfully",
            user: {
                id: user._id,
                email: user.email,
                username: user.username
            }
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
};

const logoutUser = async (req, res) => {
    try {
        const { email } = req.body;

        const user = await User.findOne({ email: email?.toLowerCase() });

        if (!user) {
            return res.status(400).json({
                message: "User not found"
            });
        }

        return res.status(200).json({
            message: "User logout successful"
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
};

export {
    registerUser,
    loginUser,
    logoutUser
};
```

### Why do we create controllers?

Controllers contain the main business logic of the application. They are responsible for handling incoming requests, processing data, talking to the model, and sending responses back to the client. If all this logic were written directly inside route files, the project would quickly become messy. That is why controllers are separated into their own folder.

### How does `registerUser` work?

The `registerUser` controller receives data from `req.body`, validates that all required fields are present, checks whether a user with the same email already exists, and then creates a new user document in MongoDB. While the user is being saved, the password is automatically hashed because of the `pre("save")` hook in the model.

### How does `loginUser` work?

The `loginUser` controller finds the user by email and then uses the model method `comparePassword()` to compare the entered password with the hashed password stored in the database. If the email does not exist or the password does not match, the API returns an error. Otherwise, it returns a success response.

### How does `logoutUser` work?

In the current version of this project, `logoutUser` is a simple API that checks whether the user exists and then returns a logout success response. This is fine for a basic learning project, but in a real application, logout usually involves clearing a cookie, destroying a session, or invalidating a JWT token.

---

## Step 11: Create the Route File

Inside the `routes` folder, create `user.route.js`.

```js
import { Router } from "express";
import { loginUser, logoutUser, registerUser } from "../controllers/user.controller.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(logoutUser);

export default router;
```

Routes are used to decide which function should run for a given URL and HTTP method. In this file, the router connects the `/register`, `/login`, and `/logout` paths to their corresponding controller functions.

This separation is useful because the route file remains short and readable, while the actual logic stays inside the controller.

---

## Authentication API Endpoints

Once the route file is connected in `app.js`, the following API endpoints become available:

| Method | Endpoint | Purpose |
|--------|----------|---------|
| `POST` | `/api/v1/users/register` | Register a new user |
| `POST` | `/api/v1/users/login` | Login an existing user |
| `POST` | `/api/v1/users/logout` | Logout a user |

The base route `/api/v1/users` comes from `app.js`, and the specific route endings such as `/register` or `/login` come from `user.route.js`.

---

## How the Backend Flow Works

The backend follows a very clear request-response flow:

1. The server starts from `index.js`.
2. `index.js` loads environment variables and connects to MongoDB.
3. `index.js` imports `app.js` and starts the Express server.
4. `app.js` registers middleware and attaches the user routes.
5. When a client hits an endpoint like `/api/v1/users/register`, Express forwards that request to `user.route.js`.
6. The route file calls the correct controller function, such as `registerUser`.
7. The controller validates the request data and interacts with the `User` model.
8. The model talks to MongoDB.
9. MongoDB returns the result.
10. The controller sends the final JSON response back to the client.

In short, the full flow is:

```text
index.js -> app.js -> routes -> controllers -> models -> MongoDB -> response
```

This is one of the most important concepts to understand in backend development because once this flow becomes clear, the structure of most Express backends becomes easier to understand.

---

## Testing APIs with Postman

### What is Postman?

Postman is a tool used to test APIs. It allows you to send HTTP requests to your backend and see the response without creating a frontend first. This is extremely useful while developing backend applications because you can verify whether your APIs are working correctly.

### Why do we use Postman?

Postman is used because it makes backend testing fast and easy. You can choose the HTTP method, enter the API URL, send JSON data in the request body, and inspect the response. It helps you debug errors and confirm whether your API logic is working as expected.

### How to test your APIs in Postman

1. Open Postman.
2. Create a new request.
3. Select the request method, usually `POST` for register, login, and logout.
4. Enter the URL.
5. Open the **Body** tab.
6. Choose **raw** and then select **JSON**.
7. Enter the request data.
8. Click **Send**.

### Example Register API

**Method:** `POST`

**URL:**

```text
http://localhost:8000/api/v1/users/register
```

**Body:**

```json
{
  "username": "testuser",
  "email": "testuser@gmail.com",
  "password": "12345678"
}
```

### Example Login API

**Method:** `POST`

**URL:**

```text
http://localhost:8000/api/v1/users/login
```

**Body:**

```json
{
  "email": "testuser@gmail.com",
  "password": "12345678"
}
```

### Example Logout API

**Method:** `POST`

**URL:**

```text
http://localhost:8000/api/v1/users/logout
```

**Body:**

```json
{
  "email": "testuser@gmail.com"
}
```

If the API is working correctly, Postman will show a JSON response with the status code and message.

---

## Why This Structure Is Good

This project structure is good because it follows separation of concerns. Every file has a specific role, which makes the project easier to understand and maintain.

- `package.json` stores project metadata and dependencies.
- `.env` stores secure configuration values.
- `constants.js` stores fixed reusable values.
- `config/database.js` handles MongoDB connection.
- `app.js` configures the Express app.
- `index.js` starts the application.
- `models/user.model.js` defines the database structure and password logic.
- `controllers/user.controller.js` contains the business logic.
- `routes/user.route.js` maps endpoints to controller functions.

When the project grows, this structure helps you add more features without making the code confusing.

---

## Current Features

- User registration API
- User login API
- User logout API
- Password hashing with bcrypt
- Mongoose schema validation
- Modular backend structure
- MongoDB Atlas integration
- API testing with Postman

---

## Important Notes

- Because this project uses ES module syntax (`import`/`export`), make sure `package.json` contains `"type": "module"`.
- Passwords are hashed before saving, so the original password is never stored in plain text.
- The current logout implementation is only a basic learning version. For real authentication systems, logout is usually connected with tokens or sessions.
- In a production project, you would also add input validation, cookies or JWT authentication, and better error handling middleware.

---

## Final Summary

This backend project demonstrates how to build a basic authentication system in Node.js using Express, MongoDB, Mongoose, and bcrypt. It starts from project initialization, moves to database setup, defines a user schema and model, builds controllers for authentication logic, connects routes, and finally tests the APIs using Postman. The project is simple enough for learning, but it also follows a structure that is close to real-world backend development.

If you understand how these files connect and how the rQequest flows from `index.js` to the database and back, you will have a strong foundation for building larger backend applications.
