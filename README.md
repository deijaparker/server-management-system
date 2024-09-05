# Server Management System

## Project Overview

The **Server Management System** is an API designed to serve information to manage various components of a fictional management application hub for ambitious entrepreneurs. This API handles operations related to 'minions', innovative 'million dollar ideas', and handle the meetings that keep getting added to your busy schedule, providing a robust backend for the application.

## 🎯 Project Goal

The goal of this project is to focus on **Express routes**, demonstrating how to create and manage API endpoints, work with RESTful APIs, and handle CRUD operations.

## 🛠️ Technologies Used

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web framework for Node.js
- **JavaScript** - Programming language used
- **npm** - Node package manager

## 📦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (Node package manager)

### Installation

1. **Clone the repository:**

   ```bash
   git clone <https://github.com/deijaparker/server-management-system>
   ```

## 🕹️ How to Use

To get started, follow these steps:

1. Open the root project directory in your terminal.
2. Run the following command to install the project dependencies and build the front-end application:

   ```bash
   npm install
   ```

3. Once the installation is complete, start the server with the following command:

   ```bash
   npm run start
   ```

4. Check your terminal for the message **"Server listening on port."** This indicates that the server is running.

> The `npm run start` script will automatically restart the server whenever changes are made to the `server.js` file or the `server/` folder. If you prefer to disable this feature, start your server using the following command:

    ```bash
    node server.js
    ```

5. To stop the server or the npm script, use the `Ctrl + C` command in your terminal.

6. Make sure to use **Google Chrome (version 60 or higher)** or **Firefox (version 55 or higher)** for the best experience.

## API Endpoints

### `/api/minions`

- `GET /api/minions` - Get an array of all minions.
- `POST /api/minions` - Create a new minion and save it to the database.
- `GET /api/minions/:minionId` - Get a single minion by ID.
- `PUT /api/minions/:minionId` - Update a single minion by ID.
- `DELETE /api/minions/:minionId` - Delete a single minion by ID.

### `/api/ideas`

- `GET /api/ideas` - Get an array of all ideas.
- `POST /api/ideas` - Create a new idea and save it to the database.
- `GET /api/ideas/:ideaId` - Get a single idea by ID.
- `PUT /api/ideas/:ideaId` - Update a single idea by ID.
- `DELETE /api/ideas/:ideaId` - Delete a single idea by ID.

### `/api/meetings`

- `GET /api/meetings` - Get an array of all meetings.
- `POST /api/meetings` - Create a new meeting and save it to the database.
- `DELETE /api/meetings` - Delete all meetings from the database.

---

Happy managing!
