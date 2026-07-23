# Node.js To-Do Application

A simple **CRUD (Create, Read, Update, Delete)** To-Do application built with **Node.js**, **Express.js**, and **MongoDB**.
It allows users to manage tasks stored in a MongoDB database with basic authentication and input sanitization.

---

## 🚀 Features

- Create new to-do items
- View all to-do items
- Update existing to-do items
- Delete to-do items
- MongoDB database integration
- Input sanitization using `sanitize-html`
- HTTP Basic Authentication
- Responsive UI using Bootstrap

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB
- sanitize-html
- Bootstrap 4
- Axios

---

## 📁 Project Structure

```text
project-root/
├── public/
│   └── script.js
├── server.js
├── package.json
├── .env.example
├── .env              (created locally, not committed)
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/sajansinghthakuri/To-Do-App.git
cd To-Do-App
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Copy the example file and fill in your own values:

```bash
cp .env.example .env
```

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
```

`.env` is listed in `.gitignore` and is never committed — each developer/deployment keeps their own copy with their own credentials.

---

## ▶️ Running the Application

```bash
npm start
```

or

```bash
node server.js
```

App will run at:

```
http://localhost:3000
```

---

## 🔐 Authentication

This app uses **HTTP Basic Authentication** via request headers.

Credentials are encoded in Base64 format:

```
Authorization: Basic base64(username:password)
```

⚠️ Note: This is a simple implementation and not recommended for production use.

---

## 📡 API Endpoints

| Method | Endpoint      | Description                          |
| ------ | ------------- | ------------------------------------ |
| GET    | /             | Render the page with all tasks       |
| POST   | /create-item  | Create a new task (`{ text }`)       |
| POST   | /update-item  | Update a task (`{ id, text }`)       |
| POST   | /delete-item  | Delete a task (`{ id }`)             |

Empty or whitespace-only `text` is rejected with a `400` response on both create and update.

---

## 🔒 Security

- MongoDB connection string is loaded from a `.env` file via `dotenv` and is never hardcoded or committed to the repo
- Basic input sanitization using `sanitize-html`
- Empty/whitespace-only input is rejected on both the client and server
- Simple HTTP Basic Authentication
- Protection against basic injection/XSS risks

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

sajansinghthakuri https://github.com/sajansinghthakuri
https://github.com/sajansinghthakuri/To-Do-App.git
Developed as a Node.js CRUD To-Do application using Express and MongoDB.
