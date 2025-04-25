
# 🚀 MERN Stack App Deployment with Docker Compose

This project sets up a production-like MERN Stack (MongoDB, Express.js, React, Node.js) using Docker Compose. It runs all services in isolated containers on an internal Docker network, with only the React frontend exposed to the host machine.

---

## 📁 Project Structure

```
project-root/
├── backend/           # Node.js + Express API
│   └── Dockerfile
├── frontend/          # React frontend
│   └── Dockerfile
├── docker-compose.yml
└── README.md
```

---

## 🛠️ Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/mern-docker-app.git
cd mern-docker-app
```

### 2. Build and run containers

```bash
docker-compose up --build
```

This will:
- Build the frontend and backend images
- Start the MongoDB container
- Launch all services on an internal Docker network

### 3. Access the application

- 🌐 Frontend: [http://localhost](http://localhost)
- 🛠 Backend and MongoDB are internal and not exposed to the host

---



## 🔌 Internal API Routing

- The frontend calls the backend using `/api/tasks`.
- Docker Compose ensures that the backend is accessible internally via service name (`backend`).
- Backend must handle requests to `/api/tasks` (e.g., with Express routes).

---

## 🔧 Useful Commands

- Start with build: `docker-compose up --build`
- Stop services: `docker-compose down`
- View logs: `docker-compose logs -f`
- Remove volumes: `docker-compose down -v`
- Rebuild one service: `docker-compose up --build backend`

---



## 📬 Contributions

Feel free to fork the repo, open issues, or submit pull requests for improvements. Happy coding! 💻🔥
