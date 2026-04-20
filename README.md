# 📌 Task Management System (MERN Stack)

## 📖 Project Overview

This project is a simple **Task Management System** developed using the MERN Stack (MongoDB, Express.js, React, Node.js).
The main purpose of this project is to understand how frontend and backend work together and perform basic CRUD operations.

In this application, users can create tasks, view all tasks, update their status, and delete them. The UI is kept simple and clean using Bootstrap.

---

## 🚀 Features

* ➕ Create new tasks
* 📋 View all tasks
* 🔄 Update task status (Pending / Completed)
* ❌ Delete tasks
* 🎨 Clean and responsive UI using Bootstrap

---

## 🛠️ Tech Stack

* **Frontend:** React (Functional Components + Hooks)
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **Styling:** Bootstrap

---

## 📂 Project Structure

```
mern-task-manager/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   └── App.js
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone <your-repo-link>
cd mern-task-manager
```

---

### 2️⃣ Run Backend

```
cd backend
npm install
npm start
```

---

### 3️⃣ Start MongoDB

Make sure MongoDB is running:

```
mongod
```

---

### 4️⃣ Run Frontend

Open a new terminal:

```
cd frontend
npm install
npm start
```

---

## 🌐 API Endpoints

| Method | Endpoint       | Description     |
| ------ | -------------- | --------------- |
| GET    | /api/tasks     | Get all tasks   |
| POST   | /api/tasks     | Create new task |
| PUT    | /api/tasks/:id | Update task     |
| DELETE | /api/tasks/:id | Delete task     |

---

## 🧠 What I Learned

* How to connect React with backend APIs
* Working with MongoDB using Mongoose
* Creating REST APIs using Express
* Managing state using React Hooks
* Basic project structure in MERN stack



## ⚠️ Limitations

* No authentication system
* Basic UI only
* No advanced validation

---

## 🔮 Future Improvements

* Add login/signup (JWT authentication)
* Add filters (Pending / Completed)
* Improve UI with better design
* Add due dates and reminders

---

## 🙌 Conclusion

This project helped me understand the basics of full-stack development using MERN. It is a beginner-friendly project and a good starting point for learning how real-world applications work.

---

## 👨‍💻 Author

Developed by: *[Eeshu Kushwaha]*
