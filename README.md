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
├── .env
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

Create a `.env` file:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
```

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

| Method | Endpoint   | Description     |
| ------ | ---------- | --------------- |
| GET    | /todos     | Get all tasks   |
| POST   | /todos     | Create new task |
| PUT    | /todos/:id | Update a task   |
| DELETE | /todos/:id | Delete a task   |

---

## 🔒 Security

- Basic input sanitization using `sanitize-html`
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
