# 🌱 Agro AI – Crop Advisory Chatbot

## Overview

Agro AI is a full-stack AI-powered Crop Advisory Chatbot designed to assist farmers and agricultural field supervisors through natural-language conversations. The application provides intelligent agricultural recommendations related to crop diseases, pest management, irrigation practices, soil health, fertilizer usage, and post-harvest handling.

The application consists of a **Next.js frontend**, a **Node.js/Express REST API backend**, **MongoDB Atlas** for database storage, and **Google Gemini AI** for generating intelligent agricultural recommendations.

---

# Project Links

## GitHub Repository

https://github.com/harshavennapu/AI-Powered-Crop-Advisory-Chatbot-Prototype-

## Figma Wireframes

https://www.figma.com/design/WqO78g3MdiHz4XJCQVjYgy/Week-3-Wireframes?node-id=0-1&t=tU32SfY9KcpudG7G-1

---

# Features

## 🌾 AI-Powered Agricultural Assistance

* AI-powered crop advisory chatbot
* Natural language conversation
* Crop disease diagnosis assistance
* Pest management recommendations
* Irrigation guidance
* Soil health analysis
* Fertilizer recommendations
* Post-harvest handling suggestions
* Context-aware responses using Google Gemini AI

## 👤 User Features

* Secure JWT Authentication
* User Registration & Login
* Interactive Dashboard
* Responsive Design
* Mobile-Friendly Interface
* Reusable UI Component Library
* Component Showcase Page

---

# Tech Stack

## Frontend

* Next.js
* React.js
* Tailwind CSS

## Backend

* Node.js
* Express.js
* REST API

## Database

* MongoDB Atlas
* Mongoose ODM

## AI Integration

* Google Gemini API

## Development Tools

* Git
* GitHub
* Visual Studio Code
* Postman
* Thunder Client

---

# Database Choice

This project uses **MongoDB Atlas** as the primary cloud database and **Mongoose** as the Object Data Modeling (ODM) library.

### Why MongoDB?

* Flexible NoSQL document database
* Stores JSON-like documents efficiently
* Excellent integration with Node.js and Express
* Highly scalable for AI-powered applications
* Suitable for storing user data, crop information, and chatbot-related records

---

# Database Models

The application stores data using Mongoose models located inside:

```text
backend/models/
```

Current models include:

* User
* Crop (or your actual model names)
* Additional models can be added as the application grows.

---

# Database Schema

The project database structure is shown below.

> **Note:** Replace the placeholder image with your exported Week 5 schema diagram.

```DatabaseSchema Diagram
<img width="804" height="600" alt="W5_SchemaDiagram_TBI-26100998" src="https://github.com/user-attachments/assets/6ca5b21a-2148-4857-9b69-120fbec2cdc5" />

```


---

# Project Structure

```text
AgriAssist-AI/
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── public/
│   ├── package.json
│   └── next.config.js
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   ├── package.json
│   ├── .env.example
│   └── README.md
│
├── docs/
│   └── W5_SchemaDiagram_InternID.png
│
└── README.md
```

---

# Frontend Routes

| Route      | Description           |
| ---------- | --------------------- |
| /          | Home Page             |
| /about     | About Page            |
| /dashboard | User Dashboard        |
| /login     | Login Page            |
| /showcase  | UI Component Showcase |

---

# Backend REST API

The backend provides RESTful CRUD APIs.

| Method | Endpoint          | Description    |
| ------ | ----------------- | -------------- |
| GET    | /api/crops        | Get all crops  |
| GET    | /api/crops/:id    | Get crop by ID |
| POST   | /api/crops        | Create crop    |
| PUT    | /api/crops/:id    | Update crop    |
| DELETE | /api/crops/:id    | Delete crop    |
| GET    | /api/crops/search | Search crops   |

> Update the above table if your actual API endpoints differ.

---

# UI Component Library

Reusable components are located in:

```text
components/ui/
```

Available Components

* Button
* Input
* Modal
* Toast
* Loader

All UI components are exported through a centralized `index.js` file and demonstrated on the Showcase page.

---

# Installation

## Clone Repository

```bash
git clone https://github.com/harshavennapu/AI-Powered-Crop-Advisory-Chatbot-Prototype-
```

---

# Frontend Setup

Navigate to the frontend directory.

```bash
cd frontend
```

Install dependencies.

```bash
npm install
```

Run the development server.

```bash
npm run dev
```

Frontend URL

```text
http://localhost:3000
```

---

# Backend Setup

Navigate to the backend directory.

```bash
cd backend
```

Install dependencies.

```bash
npm install
```

Create a `.env` file using `.env.example`.

Run the backend.

```bash
npm run dev
```

or

```bash
npm start
```

Backend URL

```text
http://localhost:5000
```

---

# Set Up the Database

This project uses **MongoDB Atlas**.

### Steps

1. Create a MongoDB Atlas account.
2. Create a new cluster.
3. Create a database user.
4. Whitelist your IP address.
5. Copy the MongoDB connection string.
6. Create a `.env` file inside the backend folder.
7. Add the required environment variables.
8. Start the backend server.

The application automatically connects to MongoDB Atlas using Mongoose.

---

# Environment Variables

Create a `.env` file using the provided `.env.example`.

Example

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

GEMINI_API_KEY=your_gemini_api_key
```

---

# API Testing

The backend REST APIs were tested using:

* Postman
* Thunder Client

The API collection includes:

* GET Requests
* POST Requests
* PUT Requests
* DELETE Requests
* Search Endpoint
* Saved Sample Responses

---

# Error Handling

The backend includes:

* Global Error Handling Middleware
* Proper HTTP Status Codes
* JSON Error Responses
* Invalid Route Handling
* Request Validation
* Database Error Handling

---

# Project Objective

The objective of Agro AI is to provide intelligent agricultural guidance through an AI-powered chatbot. The system demonstrates the practical use of Artificial Intelligence, Full-Stack Web Development, REST APIs, Cloud Database Integration, and Responsive UI Design for solving real-world agricultural problems.

---

# Current Status

## Completed

* Responsive Frontend Application
* Multi-page Navigation
* Reusable UI Component Library
* REST API Development
* CRUD Operations
* MongoDB Atlas Integration
* Mongoose Database Models
* Google Gemini AI Integration
* JWT Authentication
* Error Handling Middleware
* Environment Variable Configuration
* API Testing using Postman and Thunder Client
* GitHub Repository Setup
* Database Integration with Live CRUD Operations

---

# Future Enhancements

* Voice-Based Chatbot
* Image-Based Crop Disease Detection
* Weather API Integration
* Multilingual Support
* Farmer Profile Management
* Chat History Storage
* AI Recommendation Analytics
* Offline Support
* Role-Based Access Control

---

# Author

**Vennapu Sree Sai Chandra Harsha**

M.Tech – Artificial Intelligence and Machine Learning

TBI-GEU Summer Internship Program 2026

---

# License

This project was developed as part of the **TBI-GEU Summer Internship Program 2026** for educational and learning purposes.
