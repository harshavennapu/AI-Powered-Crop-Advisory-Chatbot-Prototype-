# 🌱 AgriAssist AI – Crop Advisory Chatbot

## Overview

AgriAssist AI is a full-stack AI-powered Crop Advisory Chatbot designed to assist farmers and agricultural field supervisors through natural-language conversations. The application provides intelligent agricultural recommendations related to crop diseases, pest management, irrigation practices, soil health, fertilizer usage, and post-harvest handling.

The project consists of a **Next.js frontend** and a **Node.js/Express backend REST API**, with **MongoDB Atlas** used for data storage and **Google Gemini API** powering AI-generated agricultural responses.

---

# Project Links

## GitHub Repository

https://github.com/harshavennapu/AI-Powered-Crop-Advisory-Chatbot-Prototype-

## Figma Wireframes

https://www.figma.com/design/WqO78g3MdiHz4XJCQVjYgy/Week-3-Wireframes?node-id=0-1&t=tU32SfY9KcpudG7G-1

---

# Features

## AI-Powered Agricultural Assistance

* AI-powered crop advisory chatbot
* Natural language interaction
* Crop disease diagnosis support
* Pest management recommendations
* Irrigation guidance
* Soil health recommendations
* Fertilizer suggestions
* Post-harvest handling advice
* Context-aware responses using Gemini AI

## User Features

* Secure user authentication
* Interactive dashboard
* Responsive web interface
* Mobile-friendly design
* Reusable UI component library
* Component showcase page

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
* Mongoose

## AI Integration

* Google Gemini API

## Development Tools

* Git
* GitHub
* Visual Studio Code
* Postman / Thunder Client

---

# Project Structure

```
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
│   ├── server.js
│   ├── package.json
│   ├── .env.example
│   └── README.md
│
└── README.md
```

---

# Frontend Routes

| Route      | Description            |
| ---------- | ---------------------- |
| /          | Home Page              |
| /about     | About Page             |
| /dashboard | Dashboard              |
| /login     | Login Page             |
| /showcase  | UI Components Showcase |

---

# Backend REST API

The backend exposes RESTful API endpoints supporting CRUD operations.

| Method | Endpoint          | Description    |
| ------ | ----------------- | -------------- |
| GET    | /api/crops        | Get all crops  |
| GET    | /api/crops/:id    | Get crop by ID |
| POST   | /api/crops        | Add a new crop |
| PUT    | /api/crops/:id    | Update crop    |
| DELETE | /api/crops/:id    | Delete crop    |
| GET    | /api/crops/search | Search crops   |

> Replace the above endpoints with your actual API endpoints if they are different.

---

# UI Component Library

Reusable components are located in:

```
components/ui/
```

Available Components:

* Button
* Input
* Modal
* Toast
* Loader

All components are exported through a centralized `index.js` file and demonstrated on the Showcase page.

---

# Installation

## Clone Repository

```bash
git clone https://github.com/harshavennapu/AI-Powered-Crop-Advisory-Chatbot-Prototype-
```

---

# Frontend Setup

Navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run the frontend:

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

# Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file using `.env.example`.

Run the backend:

```bash
npm run dev
```

or

```bash
npm start
```

Backend runs at:

```
http://localhost:5000
```

---

# Environment Variables

Create a `.env` file inside the backend folder using `.env.example`.

Example:

```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
GEMINI_API_KEY=your_gemini_api_key
```

---

# API Testing

The REST API was tested using:

* Postman
* Thunder Client

The exported API collection includes:

* GET requests
* POST requests
* PUT requests
* DELETE requests
* Search endpoint
* Saved example responses

---

# Error Handling

The backend includes:

* Global error handling middleware
* Proper HTTP status codes
* JSON error responses
* Invalid route handling
* Validation for malformed requests

---

# Project Objective

The objective of AgriAssist AI is to provide accessible agricultural advisory support through an AI-powered chatbot. The platform aims to improve agricultural decision-making, reduce information gaps, and demonstrate the practical application of Artificial Intelligence in agriculture.

---

# Current Status

## Completed

* Frontend application
* Responsive UI
* Multi-page routing
* Reusable UI component library
* Backend REST API
* CRUD API endpoints
* MongoDB Atlas integration
* Google Gemini API integration
* Error handling middleware
* Environment variable configuration
* API testing with Postman/Thunder Client
* GitHub repository setup

---

# Future Enhancements

* Voice-based chatbot interaction
* Image-based crop disease detection
* Real-time weather integration
* Multilingual support
* Farmer profile management
* Chat history storage
* AI recommendation analytics

---

# Author

**Vennapu Sree Sai Chandra Harsha**

M.Tech – Artificial Intelligence and Machine Learning

TBI-GEU Summer Internship Program 2026

TBI-GEU Summer Internship Program 2026
