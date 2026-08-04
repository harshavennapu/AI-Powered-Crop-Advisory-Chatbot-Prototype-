# 🌱 Agro AI – AI-Powered Crop Advisory Platform

<p align="center">

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?logo=mongodb)
![Google Gemini](https://img.shields.io/badge/AI-Google%20Gemini-blue)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)
![Vercel](https://img.shields.io/badge/Frontend-Vercel-black?logo=vercel)
![Render](https://img.shields.io/badge/Backend-Render-46E3B7?logo=render)
![License](https://img.shields.io/badge/License-Educational-success)

</p>

An AI-powered full-stack web application that helps farmers make informed agricultural decisions using **Artificial Intelligence**, **real-time crop management**, **secure authentication**, and a modern responsive interface.

This project was developed as the **Capstone Project** for the **TBI-GEU Summer Internship Program 2026 – AI-Assisted Full Stack Web Development**.

---

# 📑 Table of Contents

- [Project Overview](#-project-overview)
- [Project Objectives](#-project-objectives)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [System Architecture](#-system-architecture)
- [Project Structure](#-project-structure)
- [Live Demo](#-live-demo)
- [Project Screenshots](#-project-screenshots)
- [Installation Guide](#-installation-guide)
- [Environment Variables](#-environment-variables)
- [Database Design](#-database-design)
- [REST API Documentation](#-rest-api-documentation)
- [Authentication Workflow](#-authentication-workflow)
- [AI Crop Advisory Workflow](#-ai-crop-advisory-workflow)
- [Deployment](#-deployment)
- [Testing](#-testing)
- [Known Limitations](#-known-limitations)
- [Future Enhancements](#-future-enhancements)
- [Author](#-author)
- [Acknowledgements](#-acknowledgements)
- [License](#-license)

---

# 📖 Project Overview

Agro AI is an intelligent agricultural advisory platform designed to assist farmers in making better farming decisions using Artificial Intelligence.

The platform combines modern full-stack web technologies with **Google Gemini AI** to provide personalized crop recommendations, crop management, market price information, pest detection, and secure user authentication.

The application follows a modern client-server architecture where a **Next.js frontend** communicates with an **Express.js REST API**, stores data in **MongoDB Atlas**, and integrates with **Google Gemini AI** for intelligent agricultural assistance.

---

# 🎯 Project Objectives

The primary objectives of this project are:

- 🌱 Help farmers make informed crop decisions.
- 🤖 Provide AI-powered agricultural recommendations.
- 🔐 Ensure secure authentication using JWT and Google OAuth.
- 🌾 Simplify crop management through CRUD operations.
- 📈 Display useful agricultural information in a responsive dashboard.
- ☁ Demonstrate cloud deployment using Vercel and Render.
- 💡 Showcase practical Full Stack Web Development skills.

---

# 🗓 Internship Timeline

This project was developed over **10 weeks** as part of the **TBI-GEU Summer Internship Program 2026**. Each week focused on achieving a specific milestone, gradually building the application from planning to deployment.

| Week | Focus Area | Key Deliverables |
|------|------------|------------------|
| **Week 1** | Project Planning | Selected the project topic, defined the problem statement, finalized the technology stack, gathered requirements, and planned the application architecture. |
| **Week 2** | Frontend Development | Built the initial user interface, created reusable React components, designed responsive pages, and implemented navigation. |
| **Week 3** | UI/UX Enhancement | Improved responsiveness, refined the user interface, implemented wireframes, and enhanced the overall user experience. |
| **Week 4** | Backend Development | Developed the Express.js backend, created RESTful APIs, connected the frontend with the backend, and implemented routing. |
| **Week 5** | Database Integration | Connected MongoDB Atlas, designed database schemas, implemented CRUD operations, and tested database functionality. |
| **Week 6** | Authentication & Security | Implemented JWT authentication, integrated Google OAuth, secured routes, validated user input, and improved application security. |
| **Week 7** | AI Integration | Integrated Google Gemini AI, developed the AI Crop Advisory feature, optimized prompts, handled AI responses, and improved error handling. |
| **Week 8** | Application Integration | Connected all frontend pages with backend APIs, completed dashboard functionality, tested end-to-end workflows, and enhanced responsiveness. |
| **Week 9** | Deployment | Deployed the frontend on Vercel, backend on Render, resolved deployment and CORS issues, verified the live application, and updated the project documentation. |
| **Week 10** | Final Capstone Submission | Prepared the final README, created the presentation, recorded the demo video, verified all deliverables, and completed the final project submission. |

---

## 🎯 Skills Gained During the Internship

Throughout this internship, I gained practical experience in:

- Full Stack Web Development
- Next.js & React Development
- Node.js & Express.js Backend Development
- REST API Design and Integration
- MongoDB Atlas Database Management
- JWT Authentication & Google OAuth
- AI Integration using Google Gemini API
- Prompt Engineering
- Cloud Deployment with Vercel & Render
- Git & GitHub Version Control
- Debugging and Problem Solving
- Technical Documentation

---
  
# ✨ Key Features

## 🤖 Artificial Intelligence

- AI-powered Crop Advisory
- Google Gemini AI Integration
- Intelligent Farming Recommendations
- Smart Prompt Processing
- Real-time AI Response Generation
- Friendly Error Handling
- Loading Indicators

---

## 🌾 Crop Management

- Add New Crop
- View Crop Details
- Update Crop Information
- Delete Crop Records
- Real-time CRUD Operations
- Form Validation
- Success & Error Notifications

---

## 📊 Dashboard

- Protected Dashboard
- User Statistics
- Crop Statistics
- AI Feature Access
- Responsive Dashboard Cards
- Dynamic Data Loading

---

## 🔐 Authentication & Security

- User Registration
- Secure Login
- JWT Authentication
- Google OAuth Login
- Protected Routes
- Password Encryption using bcrypt
- Express Validator
- Rate Limiting
- Secure Environment Variables

---

## 🌿 Agriculture Modules

- AI Crop Advisory
- Crop Management
- Market Prices
- Pest Detection
- User Profile Management

---

## 💻 User Experience

- Fully Responsive Design
- Mobile Friendly
- Dark Mode Support
- Modern UI Components
- Loading States
- Error Handling
- Reusable Components
- Clean Navigation

---

# 🛠 Tech Stack

## Frontend

- Next.js
- React.js
- Tailwind CSS
- JavaScript (ES6+)

---

## Backend

- Node.js
- Express.js
- REST API
- Google Gemini API

---

## Database

- MongoDB Atlas
- Mongoose ODM

---

## Authentication

- JWT Authentication
- Google OAuth 2.0
- Passport.js
- bcryptjs

---

## Security

- Express Validator
- Express Rate Limit
- CORS
- Environment Variables

---

## Deployment

| Component | Platform |
|-----------|----------|
| Frontend | Vercel |
| Backend | Render |
| Database | MongoDB Atlas |

---

# 🏗 System Architecture

```text
                    User
                      │
                      ▼
         Next.js Frontend (Vercel)
                      │
          REST API Requests (HTTPS)
                      │
                      ▼
        Express.js Backend (Render)
             │                 │
             │                 │
             ▼                 ▼
    MongoDB Atlas       Google Gemini AI
      (Database)          (AI Responses)
```

---

# 📂 Project Structure

```text
AI-Powered-Crop-Advisory-Chatbot-Prototype
│
├── front-end/
│   ├── app/
│   ├── components/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── back-end/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── ...
│
├── Docs/
│   ├── images/
│   ├── reports/
│   └── schema/
│
├── postman/
├── PROMPTS.md
└── README.md
```

---

# 🚀 Live Demo

| Resource | Link |
|----------|------|
| 🌐 Frontend | **https://YOUR-PRODUCTION-VERCEL-URL** |
| ⚙ Backend | **https://ai-powered-crop-advisory-chatbot-fa3i.onrender.com** |
| 💻 GitHub Repository | **https://github.com/harshavennapu/AI-Powered-Crop-Advisory-Chatbot-Prototype-** |
| 🎥 Demo Video | **Coming Soon (YouTube - Unlisted)** |

---

# 📸 Project Screenshots

> Replace these placeholders after saving your screenshots inside `Docs/images`.

## 🏠 Home Page

```text
Docs/images/home.png
```

![Home Page](Docs/images/home.png)

---

## 📊 Dashboard

```text
Docs/images/dashboard.png
```

![Dashboard](Docs/images/dashboard.png)

---

## 🤖 AI Crop Advisory

```text
Docs/images/ai-feature.png
```

![AI Crop Advisory](Docs/images/ai-feature.png)

---

## 🌾 Crop Management

```text
Docs/images/crop-management.png
```

![Crop Management](Docs/images/crop-management.png)

---
# ⚙ Installation Guide

## Prerequisites

Before running the project locally, ensure you have the following installed:

- Node.js (v18 or later recommended)
- npm
- Git
- MongoDB Atlas Account
- Google AI Studio API Key (Gemini)
- Google Cloud Console OAuth Credentials

---

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/harshavennapu/AI-Powered-Crop-Advisory-Chatbot-Prototype-.git
```

Navigate to the project directory:

```bash
cd AI-Powered-Crop-Advisory-Chatbot-Prototype-
```

---

# 💻 Frontend Setup

Move to the frontend folder:

```bash
cd front-end
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

The frontend will be available at:

```
http://localhost:3000
```

---

# 🖥 Backend Setup

Open another terminal.

Move to the backend folder:

```bash
cd back-end
```

Install dependencies:

```bash
npm install
```

Run the backend server:

```bash
npm run dev
```

The backend will be available at:

```
http://localhost:5000
```

---

# 🌍 Environment Variables

## Backend (.env)

Create a `.env` file inside the `back-end` directory.

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GOOGLE_CLIENT_ID=your_google_client_id

GOOGLE_CLIENT_SECRET=your_google_client_secret

GOOGLE_CALLBACK_URL=http://localhost:5000/api/auth/google/callback

CLIENT_URL=http://localhost:3000

GEMINI_API_KEY=your_gemini_api_key
```

---

## Frontend (.env.local)

Create a `.env.local` file inside the `front-end` directory.

```env
NEXT_PUBLIC_API_URL=https://ai-powered-crop-advisory-chatbot-fa3i.onrender.com
```

> **Important:** Never commit `.env` or `.env.local` files to GitHub.

---

# 🗄 Database Design

The application uses **MongoDB Atlas** as its cloud-hosted NoSQL database and **Mongoose ODM** for schema modeling.

MongoDB was selected because it offers:

- Flexible document-based storage
- Easy scalability
- High performance
- Cloud accessibility
- Excellent compatibility with Node.js

---

## Database Collections

### 👤 Users

| Field | Description |
|--------|-------------|
| name | User Name |
| email | User Email |
| password | Encrypted Password |
| googleId | OAuth User ID |
| createdAt | Record Creation Time |
| updatedAt | Last Updated Time |

---

### 🌾 Crops

| Field | Description |
|--------|-------------|
| cropName | Name of Crop |
| season | Suitable Season |
| soilType | Soil Type |
| fertilizer | Recommended Fertilizer |
| waterRequirement | Water Requirement |
| expectedYield | Expected Yield |
| createdAt | Creation Timestamp |
| updatedAt | Last Updated Timestamp |

---

# 🗂 Database Schema

> Save your schema image as:

```
Docs/W5_SchemaDiagram_TBI-26100998.png
```

Then it will automatically appear below.

![Database Schema]( Docs/W5_SchemaDiagram_TBI-26100998.png)

---

# 🌐 Frontend Routes

| Route | Purpose |
|--------|----------|
| `/` | Home Page |
| `/about` | About the Project |
| `/login` | User Login |
| `/signup` | User Registration |
| `/dashboard` | Protected Dashboard |
| `/detail_listview` | Crop Management |
| `/ai_features` | AI Crop Advisory |
| `/market_prices` | Market Prices |
| `/pest_detection` | Pest Detection |
| `/profile` | User Profile |
| `/showcase` | UI Showcase |

---

# 🔗 REST API Documentation

## Authentication APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Authenticate user |
| GET | `/api/auth/google` | Google OAuth Login |
| GET | `/api/auth/google/callback` | OAuth Callback |

---

## User APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users/profile` | Logged-in User Profile |
| PUT | `/api/users/profile` | Update Profile |
| GET | `/api/users` | Get All Users |
| GET | `/api/users/search` | Search Users |
| GET | `/api/users/:id` | Get User by ID |
| PUT | `/api/users/:id` | Update User |
| DELETE | `/api/users/:id` | Delete User |

---

## Crop APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/crops` | Get All Crops |
| POST | `/api/crops` | Create Crop |
| PUT | `/api/crops/:id` | Update Crop |
| DELETE | `/api/crops/:id` | Delete Crop |

---

## Dashboard APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/dashboard/stats` | Dashboard Statistics |

---

## AI APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/ai/generate` | Generate AI Crop Advisory |

---

## Market APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/market` | Fetch Market Prices |

---

## Pest Detection APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/pests` | Pest Detection Information |

---

# 🔐 Authentication Workflow

```text
User Registration/Login
          │
          ▼
Password Validation
          │
          ▼
JWT Token Generation
          │
          ▼
Token Stored in Browser
          │
          ▼
Protected Routes
          │
          ▼
Authorized Access
```

Users may also authenticate securely using **Google OAuth 2.0**.

---

# 🤖 AI Crop Advisory Workflow

```text
Farmer enters prompt
          │
          ▼
Next.js Frontend
          │
POST /api/ai/generate
          │
          ▼
Express Backend
          │
          ▼
Google Gemini AI
          │
          ▼
AI Response
          │
          ▼
Displayed on Dashboard
```

The AI module provides:

- Crop recommendations
- Farming guidance
- Seasonal advice
- Intelligent responses
- Real-time output

---

# 🌾 Crop Management Workflow

## Create Crop

```text
User Input
     │
     ▼
POST /api/crops
     │
     ▼
MongoDB Atlas
     │
     ▼
Updated Crop List
```

---

## Read Crop

```text
GET /api/crops
      │
      ▼
Retrieve Data
      │
      ▼
Display Crop Cards
```

---

## Update Crop

```text
Edit Crop
     │
     ▼
PUT /api/crops/:id
     │
     ▼
Database Updated
     │
     ▼
UI Refreshed
```

---

## Delete Crop

```text
Delete Crop
     │
     ▼
DELETE /api/crops/:id
     │
     ▼
Record Removed
     │
     ▼
Updated Interface
```

---

# 🔄 Overall Application Workflow

```text
User
 │
 ▼
Authentication
 │
 ▼
Dashboard
 │
 ├── Crop Management
 ├── AI Crop Advisory
 ├── Market Prices
 ├── Pest Detection
 └── Profile
         │
         ▼
Backend APIs
         │
         ▼
MongoDB Atlas + Google Gemini AI
         │
         ▼
Response Returned to User
```

---
# 🚀 Deployment

The Agro AI platform has been successfully deployed using modern cloud hosting services.

| Component | Platform | Status |
|-----------|----------|--------|
| Frontend | Vercel | ✅ Live |
| Backend | Render | ✅ Live |
| Database | MongoDB Atlas | ✅ Connected |
| AI Service | Google Gemini API | ✅ Integrated |

---

# 🌐 Live Project Links

| Resource | URL |
|----------|-----|
| 🌍 Frontend | https://YOUR-PRODUCTION-VERCEL-URL |
| ⚙️ Backend | https://ai-powered-crop-advisory-chatbot-fa3i.onrender.com |
| 💻 GitHub Repository | https://github.com/harshavennapu/AI-Powered-Crop-Advisory-Chatbot-Prototype- |
| 🎥 Demo Video | https://youtube.com/watch?v=YOUR_VIDEO_ID *(Replace after uploading)* |

---

# 📸 Project Screenshots

> Save the following images inside **Docs/images/**.

---

## 🏠 Home Page

![Home Page](Docs/images/home.png)

---

## 📊 Dashboard

![Dashboard](Docs/images/dashboard.png)

---

## 🤖 AI Crop Advisory

![AI Feature](Docs/images/ai-feature.png)

---

## 🌾 Crop Management

![Crop Management](Docs/images/crop-management.png)

---

# 🤖 AI Feature

The AI Crop Advisory module leverages **Google Gemini AI** to provide personalized farming guidance based on user prompts.

## AI Use Cases

- Crop Recommendations
- Farming Best Practices
- Seasonal Advice
- Soil Guidance
- Fertilizer Suggestions
- General Agricultural Queries

---

## AI Workflow

```text
Farmer Prompt
      │
      ▼
Next.js Frontend
      │
POST /api/ai/generate
      │
      ▼
Express Backend
      │
      ▼
Google Gemini API
      │
      ▼
AI Response
      │
      ▼
Displayed to User
```

---

# 🧪 API Testing

The backend APIs were tested using:

- ✅ Postman
- ✅ Thunder Client
- ✅ Browser Developer Tools

---

## Authentication Testing

- Register User
- Login User
- Google OAuth Login

---

## Crop API Testing

- Create Crop
- Read Crop
- Update Crop
- Delete Crop

---

## AI API Testing

Endpoint:

```http
POST /api/ai/generate
```

Verified:

- Successful Response
- Error Handling
- Prompt Validation
- AI Generated Recommendation

---

## Dashboard Testing

Verified:

- User Count
- Crop Count
- Protected Dashboard
- JWT Authentication

---

# 📄 Project Documentation

This repository contains all internship deliverables and supporting documents.

## Included Documents

- README.md
- PROMPTS.md
- Postman Collection
- Database Schema
- Deployment Documentation
- Weekly Internship Reports

---

# ⚠️ Known Limitations

Since the application uses free cloud services, a few limitations exist.

- Render free instances automatically spin down after inactivity.
- The first backend request may take **30–60 seconds** to wake up.
- AI response speed depends on the Google Gemini API.
- Preview Vercel URLs change after each deployment.
- Market data availability depends on the backend API.

---

# 📈 Performance & Security

Implemented security features include:

- JWT Authentication
- Google OAuth
- Password Hashing (bcrypt)
- Protected Routes
- Input Validation
- Environment Variables
- Rate Limiting
- CORS Protection

---

# 📋 Project Status

| Module | Status |
|---------|--------|
| User Authentication | ✅ Completed |
| Google OAuth | ✅ Completed |
| Dashboard | ✅ Completed |
| Crop CRUD | ✅ Completed |
| AI Crop Advisory | ✅ Completed |
| Market Prices | ✅ Completed |
| Pest Detection | ✅ Completed |
| User Profile | ✅ Completed |
| Deployment | ✅ Completed |

---

# 🎥 Demo Video

A complete demonstration of the project is available on YouTube.

**Video Duration:** Approximately **5 Minutes**

The demonstration includes:

- Project Introduction
- Problem Statement
- User Authentication
- Crop Management
- AI Crop Advisory
- Code Walkthrough
- Deployment Demo

📺 **Demo Video**

```text
https://youtube.com/watch?v=YOUR_VIDEO_ID
```

> Replace the above link after uploading your video as **Unlisted**.

---
# 🚀 Future Enhancements

The following features can be added in future versions to further improve the platform.

## AI & Smart Farming

- 🌦 Weather API Integration
- 🌱 AI-based Crop Disease Detection from Images
- 🛰 Satellite-based Crop Monitoring
- 🤖 Personalized Farming Assistant
- 📈 AI-powered Yield Prediction
- 📍 Location-based Crop Recommendations

---

## Authentication & Security

- Email Verification
- Forgot Password
- Password Reset
- Refresh Token Authentication
- Multi-Factor Authentication (MFA)

---

## User Experience

- Multi-language Support
- Voice-enabled AI Assistant
- Dark/Light Theme Customization
- Notification System
- AI Chat History
- Offline Support

---

## Mobile & Analytics

- Android Application
- iOS Application
- Advanced Dashboard Analytics
- Farmer Performance Reports
- Export Reports as PDF

---

# 🧪 Testing Summary

The project was thoroughly tested during development.

### Functional Testing

- ✅ User Registration
- ✅ User Login
- ✅ Google OAuth
- ✅ Dashboard
- ✅ Protected Routes
- ✅ Crop CRUD Operations
- ✅ AI Crop Advisory
- ✅ Market Prices
- ✅ Pest Detection
- ✅ Profile Management

---

### API Testing

Tools Used:

- Postman
- Thunder Client
- Browser Developer Tools

Verified:

- HTTP Status Codes
- Authentication
- Authorization
- CRUD Operations
- AI Responses
- Error Handling

---
# 💡 Challenges Faced & Solutions

During the development and deployment of Agro AI, several technical challenges were encountered. Each issue was analyzed and resolved to ensure a stable, secure, and production-ready application.

| Challenge | Solution |
|-----------|----------|
| Frontend and backend communication (CORS) | Configured CORS correctly and updated allowed frontend origins for deployed Vercel applications. |
| Google OAuth redirect mismatch | Updated OAuth credentials and authorized redirect URIs in Google Cloud Console. |
| Deployment on Render | Configured environment variables, verified API endpoints, and resolved deployment configuration issues. |
| AI integration with Google Gemini | Implemented API integration with proper request validation, response handling, and error management. |
| Secure authentication | Implemented JWT authentication, password hashing using bcrypt, protected routes, and request validation. |
| Database connectivity | Connected MongoDB Atlas using Mongoose and managed environment variables securely. |
| Frontend API configuration | Replaced local API endpoints with deployed backend URLs for production. |

# 📂 Internship Deliverables

This project was developed as part of the **TBI-GEU Summer Internship Program 2026**.

The repository includes all major internship deliverables:

- ✅ Week 7 – AI Feature Integration
- ✅ Week 8 – Frontend Integration
- ✅ Week 9 – Deployment
- ✅ Week 10 – Final Capstone Submission

Supporting files include:

- README.md
- PROMPTS.md
- Postman Collection
- Database Schema
- Deployment Reports
- Weekly Documentation

---

# 🤝 Contributing

Contributions are welcome.

If you would like to improve this project:

1. Fork this repository.
2. Create a feature branch.

```bash
git checkout -b feature-name
```

3. Commit your changes.

```bash
git commit -m "Add new feature"
```

4. Push your branch.

```bash
git push origin feature-name
```

5. Create a Pull Request.

---

# 👨‍💻 Author

## Vennapu Sree Sai Chandra Harsha

**M.Tech – Artificial Intelligence & Machine Learning**

**TBI-GEU Summer Internship Program 2026**

### Connect with Me

- **GitHub:** https://github.com/harshavennapu

- **LinkedIn:**  https://www.linkedin.com/in/vennapu-sree-sai-chandra-harsha-730572259/

> Replace the LinkedIn URL with your profile link.

---

# 🙏 Acknowledgements

Special thanks to the following technologies and organizations that made this project possible.

### Internship

- Technology Business Incubator (TBI-GEU)
- Graphic Era (Deemed to be University)

### Technologies

- Next.js
- React.js
- Node.js
- Express.js
- MongoDB Atlas
- Google Gemini AI
- Passport.js
- JWT Authentication
- Tailwind CSS
- Vercel
- Render

---

# 📄 License

This project was developed as part of the **TBI-GEU Summer Internship Program 2026** for educational and learning purposes.

You are free to use this project for learning and reference purposes.

---

# 📌 Repository Information

| Item | Status |
|------|--------|
| README | ✅ Completed |
| Documentation | ✅ Completed |
| Deployment | ✅ Completed |
| API Testing | ✅ Completed |
| AI Integration | ✅ Completed |
| GitHub Repository | ✅ Completed |
| Demo Video | ✅ Completed |
| Screenshots |  ✅ Completed |

---

# ⭐ If You Like This Project

If you found this project useful, please consider giving it a ⭐ on GitHub.

It helps others discover the project and supports future improvements.

---

# 🌾 Final Project Summary

**Agro AI** is an AI-powered agricultural advisory platform that demonstrates modern **Full Stack Web Development** practices by integrating:

- 🌐 Next.js for the frontend
- ⚙️ Express.js for the backend
- 🍃 MongoDB Atlas for cloud database management
- 🤖 Google Gemini AI for intelligent crop advisory
- 🔐 JWT & Google OAuth for secure authentication
- ☁️ Vercel & Render for cloud deployment

The project showcases practical implementation of authentication, RESTful APIs, CRUD operations, AI integration, cloud deployment, and responsive UI design, making it a comprehensive full-stack capstone application.

---

<p align="center">

**🌱 Built with ❤️ using Next.js, Express.js, MongoDB Atlas, Google Gemini AI, Vercel & Render**

**© 2026 Vennapu Sree Sai Chandra Harsha**

</p>
