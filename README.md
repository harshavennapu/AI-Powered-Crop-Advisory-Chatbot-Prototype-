# 🌱 Agro AI – AI-Powered Crop Advisory Chatbot

## Overview

Agro AI is a full-stack AI-powered Crop Advisory Chatbot developed to assist farmers with intelligent agricultural recommendations. The application provides secure user authentication, AI-powered assistance, and a responsive user interface built with modern web technologies.

The project consists of a **Next.js frontend**, **Node.js/Express backend**, **MongoDB Atlas** database, **JWT Authentication**, **Google OAuth Login**, and **Google Gemini AI** integration. Users can securely authenticate, access protected pages, and interact with an AI-powered Crop Advisory assistant that provides intelligent farming recommendations in real time.

---

# Project Links

## GitHub Repository

https://github.com/harshavennapu/AI-Powered-Crop-Advisory-Chatbot-Prototype-

## Figma Wireframes

https://www.figma.com/design/WqO78g3MdiHz4XJCQVjYgy/Week-3-Wireframes?node-id=0-1

---

# Documentation

- README.md
- PROMPTS.md (Week 7 Prompt Engineering Log)
- Postman Collection
- Database Schema
- Weekly Deliverables

---

# Features

## 🌾 AI Features

- AI-powered Crop Advisory using Google Gemini AI
- Real-time AI-generated farming recommendations
- Crop Disease Guidance
- Pest Detection Assistance
- Weather Insights
- Soil Analysis
- Market Price Information
- Smart Irrigation Suggestions
- Loading State while generating AI responses
- User-friendly Error Handling

---

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

---

## 💻 Frontend Features

- Responsive Design
- Dashboard
- Modern UI
- Mobile Friendly
- Dark Mode Support
- Component-based Architecture
- AI Prompt Input
- AI Response Display
- Loading Spinner
- Error Messages

---

# Tech Stack

## Frontend

- Next.js
- React.js
- Tailwind CSS

---

## Backend

- Node.js
- Express.js
- REST API
- Google Gemini AI API

---

## Database

- MongoDB Atlas
- Mongoose

---

## Authentication

- JWT
- Google OAuth 2.0
- Passport.js
- bcryptjs

---

## Validation & Security

- express-validator
- express-rate-limit
- CORS
- Environment Variables

---

## Development Tools

- Git
- GitHub
- Visual Studio Code
- Postman
- Thunder Client
- Google AI Studio
- Google Cloud Console

---

# Project Structure

```text
AI-Powered-Crop-Advisory-Chatbot-Prototype-

│
├── front-end/
│
│   ├── app/
│   ├── components/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── back-end/
│
│   ├── config/
│   ├── controllers/
│   │      └── aiController.js
│   │
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   │      └── aiRoutes.js
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── Docs/
│
├── postman/
│
├── PROMPTS.md
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

---

## User APIs

| Method | Endpoint | Description |
|--------|-------------------------|----------------|
| GET | /api/users | Get All Users |
| GET | /api/users/:id | Get User By ID |
| PUT | /api/users/:id | Update User |
| DELETE | /api/users/:id | Delete User |
| GET | /api/users/search | Search Users |

---

## AI APIs

| Method | Endpoint | Description |
|--------|----------------------|--------------------------------|
| POST | /api/ai/generate | Generate AI Crop Advisory |

---
# Authentication Flow

1. User registers using Email and Password.
2. Password is securely hashed using **bcrypt** before storing in MongoDB.
3. User logs in using valid credentials.
4. The server verifies the credentials and generates a **JWT Token**.
5. The JWT Token is stored in the browser's Local Storage.
6. Protected routes require a valid Authorization Token.
7. Users can also authenticate using **Google OAuth**.
8. Logout removes the stored token and redirects users to the login page.

---

# AI Feature Workflow

1. User navigates to the **AI Features** page.
2. User enters an agriculture-related question.
3. Frontend sends a **POST** request to:

```
/api/ai/generate
```

4. Backend receives the prompt.
5. The backend securely communicates with **Google Gemini AI**.
6. Gemini generates an intelligent farming recommendation.
7. Backend returns the generated response.
8. Frontend displays the AI response.
9. Loading and error states provide a better user experience.

---

# Security Features

- JWT Authentication
- Google OAuth 2.0
- Password Hashing (bcrypt)
- Protected Routes
- Express Validator
- Express Rate Limiting
- CORS Protection
- Environment Variables
- Secure Gemini API Key Storage
- Global Error Handling
- Input Validation

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

Frontend URL

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

Backend URL

```
http://localhost:5000
```

---

# Environment Variables

Create a `.env` file inside the **back-end** directory.

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GOOGLE_CLIENT_ID=your_google_client_id

GOOGLE_CLIENT_SECRET=your_google_client_secret

GEMINI_API_KEY=your_google_gemini_api_key
```

> **Note:** Never commit your `.env` file or API keys to GitHub. Only commit a `.env.example` file if needed.

---

# API Testing

The REST APIs were tested using:

- Postman
- Thunder Client

### Authentication APIs

- Register User
- Login User
- Google OAuth Login

### User APIs

- Get All Users
- Get User By ID
- Update User
- Delete User
- Search User

### AI APIs

- Generate AI Crop Advisory
- Prompt Validation
- AI Response Generation
- Error Response Handling

### API Verification

- HTTP Status Codes
- JWT Authorization
- Protected Routes
- AI Response Testing
- Browser Network Verification (200 OK)

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
- AI API Error Handling
- Loading State Handling
- User-friendly Error Messages

---

# Prompt Engineering

The project includes a dedicated **PROMPTS.md** file documenting:

- Three prompt variations
- Example input and output
- Best performing prompt
- System prompt used
- Prompt engineering observations

---
# Week 7 Deliverables

## ✅ Deliverable 1 – AI Feature Integration

Successfully integrated **Google Gemini AI** into the Agro AI application.

Implemented features include:

- Google Gemini AI integration
- Secure API key management using `.env`
- AI Crop Advisory endpoint
- Frontend to Backend API communication
- Loading state while generating responses
- User-friendly error handling
- AI-generated farming recommendations

---

## ✅ Deliverable 2 – AI Feature Demonstration

Successfully completed and documented:

- User Input Screen
- Loading State
- AI Response Screen
- Browser Network Request (`POST /api/ai/generate` → **200 OK**)

Documentation available in:

```
Docs/W7_AIFeatureDemo_TBI-26100998.pdf
```

---

## ✅ Deliverable 3 – Prompt Engineering

Created:

```
PROMPTS.md
```

Includes:

- Three prompt variations
- Example inputs
- Example outputs
- Best prompt analysis
- System prompt used

---

## ✅ Deliverable 4 – Peer Code Review

Reviewed two classmates' GitHub repositories by providing:

- Architectural observations
- Code improvement suggestions
- Technical questions

---

# Current Status

## ✅ Completed

### Frontend

- Responsive UI
- Dashboard
- Login & Registration
- AI Features Page
- Protected Routes
- Loading State
- Error Messages

### Backend

- REST APIs
- JWT Authentication
- Google OAuth
- MongoDB Atlas Integration
- CRUD Operations
- Google Gemini AI Integration
- AI Crop Advisory Endpoint
- Input Validation
- Global Error Handling

### Security

- JWT Authentication
- Password Hashing
- Google OAuth
- Express Validator
- Rate Limiting
- CORS
- Environment Variables

### Documentation

- README.md
- PROMPTS.md
- Database Schema
- Postman Collection
- Week Deliverables

---

# Future Enhancements

Planned improvements include:

- Voice-based AI Chatbot
- Image-based Crop Disease Detection
- Weather API Integration
- Farmer Profiles
- Chat History
- AI Conversation History
- Multiple AI Prompt Modes
- AI Response Download
- PDF Report Generation
- Email Verification
- Forgot Password
- Refresh Tokens
- Role-Based Access Control
- Multi-language Support
- Offline Mode
- Mobile Application

---

# Screenshots

## AI Crop Advisory

```
Docs/W7_AIFeatureDemo_TBI-26100998.pdf
```

   

Recommended screenshots:

- Home Page
- Login Page
- Dashboard
- AI Features Page
- AI Generated Response
- Network Request (200 OK)

---

# Contributing

Contributions are welcome.

To contribute:

1. Fork the repository.
2. Create a new feature branch.
3. Commit your changes.
4. Push the branch.
5. Open a Pull Request.

---

# Author

## Vennapu Sree Sai Chandra Harsha

**M.Tech – Artificial Intelligence & Machine Learning**

**TBI-GEU Summer Internship Program 2026**

GitHub:
https://github.com/harshavennapu


---

# Acknowledgements

Special thanks to:

- TBI-GEU Summer Internship Program
- Google Gemini AI
- MongoDB Atlas
- Next.js
- Express.js
- React.js
- Open Source Community

---

# License

This project was developed as part of the **TBI-GEU Summer Internship Program 2026** for educational and learning purposes.

It is intended for academic, research, and demonstration purposes only.

---

# ⭐ Project Status

**Week 1** ✅ Project Setup

**Week 2** ✅ UI Development

**Week 3** ✅ Responsive Frontend

**Week 4** ✅ Frontend-Backend Integration

**Week 5** ✅ Database Integration (MongoDB Atlas)

**Week 6** ✅ Authentication System (JWT + Google OAuth)

**Week 7** ✅ Google Gemini AI Integration & Crop Advisory Feature

---

If you found this project useful, consider giving it a ⭐ on GitHub!
