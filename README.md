# 🌱 Agro AI – AI-Powered Crop Advisory Platform

A full-stack AI-powered agricultural advisory platform that helps farmers make informed decisions using Artificial Intelligence, secure authentication, and real-time crop management.

Developed as part of the **TBI-GEU Summer Internship Program 2026**.

---

# 📖 Overview

Agro AI is an intelligent web application designed to assist farmers by providing AI-generated crop recommendations, crop management, market price information, pest detection, and secure user authentication.

The platform combines modern web technologies with Google's Gemini AI to deliver personalized agricultural guidance. Users can register, log in securely, manage crop records, monitor farming information, and receive AI-powered recommendations through an intuitive and responsive interface.

---

# ✨ Key Highlights

- 🌱 AI Crop Advisory using Google Gemini AI
- 🌾 Complete Crop Management (CRUD)
- 📊 Interactive Dashboard with Live Statistics
- 🔐 JWT Authentication
- 🔑 Google OAuth Login
- 🐛 Pest Detection Module
- 💹 Market Price Module
- 👤 User Profile Management
- 📱 Responsive User Interface
- 🌙 Dark Mode Support

---

# 🚀 Live Deployment

## Frontend (Vercel)

https://ai-powered-crop-advisory-chatbot-pr-mu.vercel.app

## Backend (Render)

https://ai-powered-crop-advisory-chatbot-fa3i.onrender.com

---

# 📂 Project Links

## GitHub Repository

https://github.com/harshavennapu/AI-Powered-Crop-Advisory-Chatbot-Prototype-

## Figma Wireframes

https://www.figma.com/design/WqO78g3MdiHz4XJCQVjYgy/Week-3-Wireframes

---

# 📄 Documentation

This repository includes:

- README.md
- PROMPTS.md (Prompt Engineering Log)
- Postman Collection
- Database Schema
- Weekly Internship Deliverables
- Frontend Completion Report
- Deployment Documentation

---

# 🌟 Features

## 🤖 AI Features

- AI Crop Advisory using Google Gemini AI
- Intelligent Farming Recommendations
- Smart Prompt Processing
- Real-time AI Response Generation
- Loading Indicator
- User-friendly Error Handling
- Agriculture-focused AI Assistance

---

## 🌾 Crop Management

- Add Crop
- View Crop Details
- Update Crop Information
- Delete Crop
- Crop Detail View
- Real-time CRUD Operations
- Form Validation
- Success & Error Notifications

---

## 📊 Dashboard

- Total Users
- Total Crops
- AI Feature Count
- Protected Dashboard
- Real-time API Integration

---

## 🔐 Authentication

- User Registration
- User Login
- Google OAuth Login
- JWT Authentication
- Protected Routes
- Secure Password Hashing
- Logout
- Request Validation
- Rate Limiting

---

## 🌿 Agriculture Modules

- AI Crop Advisory
- Crop Information Management
- Pest Detection
- Market Prices
- Dashboard Analytics

---

## 💻 Frontend Features

- Responsive Design
- Mobile Friendly Layout
- Dark Mode
- Component-based Architecture
- Dashboard Interface
- AI Prompt Input
- AI Response Display
- Loading States
- Error Handling
- Reusable Components
- Form Validation
- Empty State UI

---

# 🛠 Tech Stack

## Frontend

- Next.js
- React.js
- Tailwind CSS
- JavaScript (ES6+)
- Vercel (Deployment)

---

## Backend

- Node.js
- Express.js
- REST APIs
- Google Gemini AI API
- Render (Deployment)

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

## Validation & Security

- Express Validator
- Express Rate Limit
- CORS
- Environment Variables
- Protected Routes

---

## Development Tools

- Git
- GitHub
- Visual Studio Code
- Postman
- Thunder Client
- Google AI Studio
- Google Cloud Console
- Chrome DevTools

---

# 📁 Project Structure

```text
AI-Powered-Crop-Advisory-Chatbot-Prototype-

│
├── front-end/
│   ├── app/
│   │   ├── about/
│   │   ├── ai_features/
│   │   ├── dashboard/
│   │   ├── detail_listview/
│   │   ├── login/
│   │   ├── signup/
│   │   ├── profile/
│   │   ├── market_prices/
│   │   ├── pest_detection/
│   │   └── showcase/
│   │
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
│   └── .env
│
├── Docs/
├── postman/
├── PROMPTS.md
└── README.md
```
---

# 🗄 Database

The application uses **MongoDB Atlas** with **Mongoose ODM** to securely store user information, crop records, and dashboard statistics.

## Collections

### 👤 Users

- Name
- Email
- Password (Encrypted)
- Google ID (OAuth Users)
- Created At
- Updated At

---

### 🌾 Crops

- Crop Name
- Season
- Soil Type
- Fertilizer
- Water Requirement
- Expected Yield
- Created At
- Updated At

---

### 📊 Dashboard

Dashboard statistics are generated dynamically from the database, including:

- Total Users
- Total Crops
- AI Feature Count

---

# 🗂 Database Schema

![Database Schema](Docs/W5_SchemaDiagram_TBI-26100998.png)

---

# 🌐 Frontend Routes

| Route | Description |
|--------|-------------|
| `/` | Home Page |
| `/about` | About Project |
| `/login` | User Login |
| `/signup` | User Registration |
| `/dashboard` | Protected Dashboard |
| `/detail_listview` | Crop Management (CRUD) |
| `/ai_features` | AI Crop Advisory |
| `/market_prices` | Market Price Dashboard |
| `/pest_detection` | Pest Detection |
| `/profile` | User Profile |
| `/showcase` | UI Component Showcase |

---

# 🔗 Backend REST APIs

## 🔐 Authentication APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register User |
| POST | `/api/auth/login` | Login User |
| GET | `/api/auth/google` | Google OAuth Login |
| GET | `/api/auth/google/callback` | Google OAuth Callback |

---

## 👤 User APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | Get All Users |
| GET | `/api/users/profile` | Get Logged-in User |
| PUT | `/api/users/profile` | Update Logged-in User |
| GET | `/api/users/search` | Search Users |
| GET | `/api/users/:id` | Get User by ID |
| PUT | `/api/users/:id` | Update User |
| DELETE | `/api/users/:id` | Delete User |

---

## 🌾 Crop APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/crops` | Get All Crops |
| POST | `/api/crops` | Add Crop |
| PUT | `/api/crops/:id` | Update Crop |
| DELETE | `/api/crops/:id` | Delete Crop |

---

## 📊 Dashboard APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/dashboard/stats` | Dashboard Statistics |

---

## 🤖 AI APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/ai/generate` | Generate AI Crop Advisory |

---

## 💹 Market APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/market` | Get Market Prices |

---

## 🐛 Pest Detection APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/pests` | Pest Detection Information |

---

# 🔐 Authentication Workflow

1. User registers using Name, Email, and Password.
2. Password is encrypted using **bcryptjs**.
3. User logs in using valid credentials.
4. The backend verifies the credentials.
5. A **JWT Token** is generated.
6. The token is stored in Local Storage.
7. Protected routes verify the token before granting access.
8. Users can also authenticate using **Google OAuth 2.0**.
9. Logout removes the stored token and redirects the user to the Login page.

---

# 📊 Dashboard Workflow

```
User Login
      │
      ▼
JWT Token Generated
      │
      ▼
Protected Dashboard
      │
      ▼
Dashboard API
      │
      ▼
MongoDB
      │
      ▼
Dashboard Statistics
```

The dashboard displays:

- Registered Users
- Total Crops
- AI Features
- Personalized Welcome Message

---

# 🤖 AI Crop Advisory Workflow

```
User Input
      │
      ▼
Frontend
      │
POST /api/ai/generate
      │
      ▼
Backend Validation
      │
      ▼
Google Gemini AI
      │
      ▼
AI Response
      │
      ▼
Frontend Display
```

Features include:

- Loading Indicator
- AI-generated Farming Recommendations
- Friendly Error Messages
- Real-time Response Generation

---

# 🌾 Crop Management Workflow

## ➕ Create Crop

```
User fills Crop Form
        │
        ▼
POST /api/crops
        │
        ▼
MongoDB
        │
        ▼
Crop List Updated
```

---

## 📖 Read Crops

```
GET /api/crops
        │
        ▼
Retrieve Crop Records
        │
        ▼
Display Crop Cards
```

---

## ✏️ Update Crop

```
Edit Crop
      │
      ▼
PUT /api/crops/:id
      │
      ▼
MongoDB Updated
      │
      ▼
UI Refresh
```

---

## ❌ Delete Crop

```
Delete Crop
      │
      ▼
DELETE /api/crops/:id
      │
      ▼
MongoDB Updated
      │
      ▼
Crop Removed from UI
```

---

# 🔄 Application Workflow

```
User Login
      │
      ▼
Dashboard
      │
      ▼
Choose Feature
      │
      ├── AI Crop Advisory
      ├── Crop Management
      ├── Market Prices
      ├── Pest Detection
      └── User Profile
            │
            ▼
Backend APIs
            │
            ▼
MongoDB / Google Gemini AI
            │
            ▼
Frontend Response
```
---

# ⚙️ Installation Guide

## 1. Clone the Repository

```bash
git clone https://github.com/harshavennapu/AI-Powered-Crop-Advisory-Chatbot-Prototype-.git
```

Move into the project directory:

```bash
cd AI-Powered-Crop-Advisory-Chatbot-Prototype-
```

---

# 💻 Frontend Setup

```bash
cd front-end
npm install
npm run dev
```

The frontend runs locally at:

```
http://localhost:3000
```

---

# 🖥 Backend Setup

```bash
cd back-end
npm install
npm run dev
```

The backend runs locally at:

```
http://localhost:5000
```

---

# 🌍 Environment Variables

## Backend (.env)

Create a `.env` file inside the **back-end** folder.

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

Create a `.env.local` file inside the **front-end** folder.

```env
NEXT_PUBLIC_API_URL=https://ai-powered-crop-advisory-chatbot-fa3i.onrender.com
```

> Never commit `.env` or `.env.local` files to GitHub.

---

# 🚀 Deployment Documentation (Week 9)

## Live Frontend URL

https://ai-powered-crop-advisory-chatbot-pr-mu.vercel.app

---

## Live Backend URL

https://ai-powered-crop-advisory-chatbot-fa3i.onrender.com

---

## Deployment Platforms

| Component | Platform |
|-----------|----------|
| Frontend | Vercel |
| Backend | Render |
| Database | MongoDB Atlas |

---

## Deployment Verification

The deployed application supports the following features:

- ✅ User Registration
- ✅ User Login
- ✅ Google OAuth Login
- ✅ JWT Authentication
- ✅ Protected Dashboard
- ✅ Crop CRUD Operations
- ✅ AI Crop Advisory
- ✅ Profile Management
- ✅ Market Prices
- ✅ Pest Detection

---

## Known Limitations (Free Tier)

- Render free services automatically spin down after periods of inactivity.
- The first backend request after idle may take approximately **30–60 seconds**.
- AI responses may take a few extra seconds depending on Google Gemini API response time.
- Vercel Preview Deployment URLs change after each deployment. The Production URL should be used for sharing the application.

---

# 🧪 API Testing

The backend APIs were tested using:

- Postman
- Thunder Client
- Browser Developer Tools (Network Tab)

---

## Authentication

- Register User
- Login User
- Google OAuth Login

---

## Dashboard

- Dashboard Statistics

---

## Crop APIs

- Create Crop
- Read Crop
- Update Crop
- Delete Crop

---

## AI APIs

- Generate AI Crop Advisory

---

## Verification

Verified API responses include:

- HTTP 200 OK
- JWT Authentication
- Protected Routes
- CRUD Operations
- AI Response Generation

---

# ❌ Error Handling

The application includes comprehensive error handling for:

- Invalid Login Credentials
- Unauthorized Access
- Missing JWT Tokens
- Invalid API Requests
- Empty Form Validation
- Server Errors
- Loading States
- Empty State UI
- Friendly Error Messages

---

# 🤖 Prompt Engineering

The project includes a dedicated prompt engineering log.

```
PROMPTS.md
```

It contains:

- Prompt Variations
- Sample Inputs
- Sample Outputs
- Best Prompt Selection
- Prompt Engineering Observations

---

# 📚 Internship Deliverables

## ✅ Week 7 Deliverables

### AI Feature Integration

Completed

- Google Gemini AI Integration
- AI Prompt Interface
- AI Loading State
- AI Response Display
- Error Handling
- Secure API Key Storage

Documentation:

```
Docs/W7_AIFeatureDemo_TBI-26100998.pdf
```

---

## ✅ Week 8 Deliverables

### Fully Connected Frontend

Completed

- Dashboard connected to Backend
- JWT Authentication
- Crop CRUD Operations
- AI Feature Integration
- Responsive UI
- Loading States
- Error Handling
- Real API Integration

Documentation:

```
Docs/W8_FrontendCompletion_TBI-26100998.pdf
```

---

## ✅ Week 9 Deliverables

Completed

- Frontend Deployment on Vercel
- Backend Deployment on Render
- Live Public Application
- Deployment Documentation
- README Updated
- Deployment Verification
- Deployment Screenshots
- Peer Testing Feedback

---

# 📊 Current Project Status

## Frontend

- ✅ Responsive Home Page
- ✅ User Authentication
- ✅ Dashboard
- ✅ Crop CRUD
- ✅ AI Crop Advisory
- ✅ Market Prices
- ✅ Pest Detection
- ✅ Profile Management
- ✅ Responsive Navigation
- ✅ Dark Mode

---

## Backend

- ✅ REST APIs
- ✅ JWT Authentication
- ✅ Google OAuth
- ✅ MongoDB Atlas Integration
- ✅ AI Integration
- ✅ Validation
- ✅ Global Error Handling

---

## Database

- ✅ MongoDB Atlas
- ✅ User Collection
- ✅ Crop Collection
- ✅ Dashboard Statistics

---
# 📸 Screenshots

Project screenshots and reports are available in the **Docs** folder.

## Development Screenshots

- Week 2 Frontend Development
- Week 3 Responsive UI
- Week 4 Frontend & Backend Integration
- Week 5 MongoDB CRUD Operations
- Week 6 Authentication Flow
- Week 7 AI Feature Integration
- Week 8 Frontend Completion

---

## Week 9 Deployment Screenshots

The following deployment screenshots are included in the project documentation:

- ✅ Vercel Dashboard showing successful frontend deployment
- ✅ Render Dashboard showing successful backend deployment
- ✅ Live Home Page with deployed URL visible
- ✅ AI Crop Advisory feature working on the deployed application

Deployment proof document:

```
Docs/W9_DeploymentProof_TBI-26100998.pdf
```

---

# 🚀 Future Enhancements

The following features are planned for future versions of Agro AI:

- 🌦 Weather API Integration
- 🛰 Live Weather Forecast
- 🐛 AI-based Image Disease Detection
- 🎤 Voice-enabled AI Assistant
- 📧 Email Verification
- 🔑 Forgot Password & Password Reset
- 🔄 Refresh Token Authentication
- 👨‍🌾 Farmer Profile Dashboard
- 📜 AI Chat History
- 🌍 Multi-language Support
- 📱 Android & iOS Mobile Application
- 📍 GPS-based Crop Recommendations
- 📈 Advanced Analytics Dashboard
- 🔔 Push Notifications

---

# 🤝 Contributing

Contributions are welcome!

To contribute:

1. Fork the repository.
2. Create a new feature branch.

```bash
git checkout -b feature-name
```

3. Commit your changes.

```bash
git commit -m "Added new feature"
```

4. Push the branch.

```bash
git push origin feature-name
```

5. Open a Pull Request.

---

# 👨‍💻 Author

## Vennapu Sree Sai Chandra Harsha

**M.Tech – Artificial Intelligence & Machine Learning**

**TBI-GEU Summer Internship Program 2026**

GitHub:

https://github.com/harshavennapu

---

# 🙏 Acknowledgements

Special thanks to:

- Technology Business Incubator (TBI-GEU)
- Graphic Era (Deemed to be University)
- Google Gemini AI
- MongoDB Atlas
- Google Cloud Console
- Next.js
- React.js
- Express.js
- Node.js
- Tailwind CSS
- Vercel
- Render

---

# 📄 License

This project was developed as part of the **TBI-GEU Summer Internship Program 2026** for educational and learning purposes.

---

# ⭐ Project Status

## Internship Progress

- ✅ Week 1 – Project Setup
- ✅ Week 2 – Frontend Development
- ✅ Week 3 – Responsive UI
- ✅ Week 4 – Frontend & Backend Integration
- ✅ Week 5 – MongoDB CRUD Operations
- ✅ Week 6 – JWT Authentication & Google OAuth
- ✅ Week 7 – AI Crop Advisory using Google Gemini
- ✅ Week 8 – Frontend Completion & Dashboard Integration
- ✅ Week 9 – Frontend & Backend Deployment

---

## Current Features

### Authentication

- ✅ Register
- ✅ Login
- ✅ Google OAuth Login
- ✅ JWT Authentication

### Dashboard

- ✅ Protected Dashboard
- ✅ Live Statistics

### Crop Management

- ✅ Add Crop
- ✅ View Crops
- ✅ Update Crop
- ✅ Delete Crop

### AI Features

- ✅ AI Crop Advisory
- ✅ Google Gemini Integration

### Other Modules

- ✅ Market Prices
- ✅ Pest Detection
- ✅ User Profile
- ✅ Responsive UI

---

# 📌 Week 9 Deployment Summary

| Requirement | Status |
|-------------|--------|
| Live Frontend (Vercel) | ✅ Completed |
| Live Backend (Render) | ✅ Completed |
| Register/Login | ✅ Working |
| Google OAuth | ✅ Working |
| Dashboard | ✅ Working |
| Crop CRUD | ✅ Working |
| AI Crop Advisory | ✅ Working |
| README Updated | ✅ Completed |
| Deployment Documentation | ✅ Completed |
| Deployment Screenshots | ✅ Completed |
| Peer Testing | ✅ Completed |

---

# 🌟 Thank You

Thank you for reviewing this project.

If you found this project useful, consider giving it a ⭐ on GitHub.

---

**Made with ❤️ using Next.js, Express.js, MongoDB Atlas, Google Gemini AI, Render, and Vercel.**
