# 🌱 Agro AI – Crop Advisory Chatbot

## Overview

Agro AI is a full-stack AI-powered Crop Advisory Chatbot developed to assist farmers with intelligent agricultural recommendations. The application provides secure user authentication, AI-powered assistance, and a responsive user interface built with modern web technologies.

The project consists of a **Next.js frontend**, **Node.js/Express backend**, **MongoDB Atlas** database, **JWT Authentication**, **Google OAuth Login**, and **Google Gemini AI** integration.

---

# Project Links

## GitHub Repository

https://github.com/harshavennapu/AI-Powered-Crop-Advisory-Chatbot-Prototype-

## Figma Wireframes

https://www.figma.com/design/WqO78g3MdiHz4XJCQVjYgy/Week-3-Wireframes?node-id=0-1

---

# Features

## 🌾 AI Features

- AI-powered Crop Advisory
- Crop Disease Guidance
- Pest Detection Assistance
- Weather Insights
- Soil Analysis
- Market Price Information
- Smart Irrigation Suggestions

## 👤 Authentication Features

- User Registration
- User Login
- Google OAuth Login
- JWT Authentication
- Protected Routes
- Logout Functionality
- Secure Password Hashing (bcrypt)
- Request Validation
- API Rate Limiting

## 💻 Frontend Features

- Responsive Design
- Dashboard
- Modern UI
- Mobile Friendly
- Dark Mode Support
- Component-based Architecture

---

# Tech Stack

## Frontend

- Next.js
- React.js
- Tailwind CSS

## Backend

- Node.js
- Express.js
- REST API

## Database

- MongoDB Atlas
- Mongoose

## Authentication

- JWT
- Google OAuth 2.0
- Passport.js
- bcryptjs

## Validation & Security

- express-validator
- express-rate-limit
- CORS

## Development Tools

- Git
- GitHub
- Visual Studio Code
- Postman
- Thunder Client
- Google Cloud Console

---

# Project Structure

```text
AI-Powered-Crop-Advisory-Chatbot-Prototype-

│
├── front-end/
│   ├── app/
│   ├── components/
│   ├── public/
│   └── package.json
│
├── back-end/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── Docs/
│
├── postman/
│
└── README.md
```

---

# Database

This project uses **MongoDB Atlas** with **Mongoose ODM**.

## User Model

- Name
- Email
- Password (Encrypted)
- CreatedAt
- UpdatedAt

---

## Database Schema

![Database Schema](Docs/W5_SchemaDiagram_TBI-26100998.png)

---

# Frontend Routes

| Route | Description |
|--------|-------------|
| / | Home |
| /about | About |
| /login | Login |
| /signup | Register |
| /dashboard | Protected Dashboard |
| /ai_features | AI Features |
| /market_prices | Market Prices |
| /detail_listview | Weather Details |
| /showcase | Component Showcase |

---

# Backend REST APIs

## Authentication APIs

| Method | Endpoint | Description |
|--------|------------------------------|----------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |
| GET | /api/auth/google | Google Login |
| GET | /api/auth/google/callback | Google Callback |

## User APIs

| Method | Endpoint | Description |
|--------|-------------------------|----------------|
| GET | /api/users | Get All Users |
| GET | /api/users/:id | Get User By ID |
| PUT | /api/users/:id | Update User |
| DELETE | /api/users/:id | Delete User |
| GET | /api/users/search | Search Users |

---

# Authentication Flow

1. User registers using Email and Password.
2. Password is hashed using bcrypt.
3. User logs in.
4. Server returns JWT Token.
5. JWT is stored in Local Storage.
6. Protected APIs require Authorization Token.
7. Users can also login using Google OAuth.

---

# Security Features

- JWT Authentication
- Google OAuth
- Password Hashing (bcrypt)
- Protected Routes
- Express Validator
- Express Rate Limiting
- Environment Variables
- CORS Protection

---

# Installation

## Clone Repository

```bash
git clone https://github.com/harshavennapu/AI-Powered-Crop-Advisory-Chatbot-Prototype-
```

---

# Frontend Setup

```bash
cd front-end
npm install
npm run dev
```

Frontend

```
http://localhost:3000
```

---

# Backend Setup

```bash
cd back-end
npm install
npm run dev
```

Backend

```
http://localhost:5000
```

---

# Environment Variables

Create a `.env` file inside `back-end`.

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GOOGLE_CLIENT_ID=your_google_client_id

GOOGLE_CLIENT_SECRET=your_google_client_secret

GEMINI_API_KEY=your_gemini_api_key
```

---

# API Testing

The APIs were tested using:

- Postman
- Thunder Client

The Postman Collection includes:

- User Registration
- User Login
- Google OAuth Login
- JWT Authentication
- Protected CRUD APIs
- Search User API
- Automatic JWT Token Storage

---

# Error Handling

The backend includes:

- Global Error Handler
- Express Validator
- JWT Middleware
- Rate Limiter
- Proper HTTP Status Codes
- Invalid Route Handler
- JSON Error Responses

---

# Current Status

## Completed

- Responsive Frontend
- User Registration
- User Login
- Google OAuth Login
- JWT Authentication
- Protected Routes
- CRUD APIs
- MongoDB Atlas Integration
- Input Validation
- Password Hashing
- API Rate Limiting
- Postman API Testing
- Global Error Handling
- GitHub Repository

---

# Future Enhancements

- Voice-Based Chatbot
- Image-Based Disease Detection
- Weather API Integration
- Farmer Profiles
- Chat History
- Email Verification
- Forgot Password
- Refresh Tokens
- Role-Based Access Control

---

# Author

**Vennapu Sree Sai Chandra Harsha**

M.Tech – Artificial Intelligence & Machine Learning

TBI-GEU Summer Internship Program 2026

---

# License

This project was developed as part of the **TBI-GEU Summer Internship Program 2026** for educational and learning purposes.
