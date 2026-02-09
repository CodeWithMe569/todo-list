# 📝 Todo List — Full Stack App

A simple full-stack Todo application built using vanilla frontend technologies and a Node.js backend.
This project focuses on learning core web development concepts including REST APIs, database interaction, and client-server communication.

---

## 🚀 Tech Stack

### Frontend

* HTML
* CSS
* JavaScript (Vanilla)

### Backend

* Node.js
* Express.js

### Database

* MongoDB

---

## 📂 Project Structure

```
todo-app/
│
├── backend/
│   ├── routes/
│   ├── db.js
│   ├── server.js
│   └── package.json
│
└── frontend/
    ├── index.html
    ├── style.css
    └── app.js
```

---

## ✨ Features

* Create todos
* View all todos
* Mark todos as completed
* Delete todos
* RESTful API design
* MongoDB persistence

*(More features planned — editing, filtering, auth, pagination)*

---

## 🛠️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone <your-repo-url>
cd todo-app
```

---

### 2️⃣ Start MongoDB

Make sure MongoDB is running locally:

```bash
mongod
```

---

### 3️⃣ Backend Setup

```bash
cd backend
npm install
npm run dev
```

Server runs at:

```bash
http://localhost:3000
```

---

### 4️⃣ Frontend Setup

Open directly:

```bash
frontend/index.html
```

OR run static server:

```bash
npx serve frontend
```

---

## 🔌 API Endpoints

| Method | Endpoint   | Description     |
| ------ | ---------- | --------------- |
| GET    | /todos     | Fetch all todos |
| POST   | /todos     | Create todo     |
| PUT    | /todos/:id | Update todo     |
| DELETE | /todos/:id | Delete todo     |

---

## 🎯 Learning Goals

This project was built to practice:

* Building REST APIs
* MongoDB CRUD operations
* Client-server architecture
* Fetch API usage
* Project structuring

---

## 🔮 Future Improvements

* Authentication
* Input validation
* Pagination
* UI enhancements
* Deployment
* Docker setup

---

## 👨‍💻 Author

Built as a learning project while exploring backend development and system fundamentals.

---

## 📜 License

This project is open-source and free to use.
