# Interview AI - Job Preparation Platform

An AI-powered interview preparation platform that helps users practice and improve their interview skills through realistic interview simulations powered by Google's Generative AI.

## 📋 Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Unique Selling Points (USPs)](#unique-selling-points)
- [How It Works](#how-it-works)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Configuration](#configuration)
- [Running the Project](#running-the-project)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)

---

## 🎯 Project Overview

Interview AI is a comprehensive job preparation platform designed to help candidates practice interviews in a realistic environment. The platform uses cutting-edge AI technology to generate interview questions, evaluate responses, and provide detailed feedback to help users improve their interview performance.

**Use Cases:**
- Job seekers preparing for technical and behavioral interviews
- Students practicing for internship interviews
- Professionals upskilling for career transitions
- Interview coaching platforms integration

---

## ✨ Features

### User Management
- ✅ User registration and authentication
- ✅ Secure login with JWT tokens
- ✅ Session management with token blacklisting
- ✅ Protected routes and user verification

### Interview System
- ✅ AI-powered interview simulations
- ✅ Multiple interview types (technical, behavioral, HR)
- ✅ Real-time question generation using Google GenAI
- ✅ Detailed interview reports and analysis
- ✅ Score calculation and performance metrics

### Additional Features
- ✅ PDF resume upload and parsing
- ✅ Interview history and tracking
- ✅ Personalized feedback and recommendations
- ✅ Responsive UI with modern design
- ✅ Cookie-based session persistence

---

## 🛠 Tech Stack

### Frontend
| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 19.2.0 | UI Framework |
| Vite | 7.3.1 | Build tool & dev server |
| React Router | 7.13.0 | Client-side routing |
| Axios | 1.13.5 | HTTP client |
| SASS | 1.97.3 | CSS preprocessing |
| ESLint | 9.39.1 | Code linting |

### Backend
| Technology | Version | Purpose |
|-----------|---------|---------|
| Express.js | 5.2.1 | Web framework |
| Node.js | Latest | Runtime environment |
| MongoDB | 9.2.1 (Mongoose) | NoSQL database |
| JWT | 9.0.3 | Authentication |
| bcryptjs | 3.0.3 | Password hashing |
| Google GenAI | 1.42.0 | AI for interview generation |
| Multer | 2.0.2 | File upload handling |
| pdf-parse | 2.4.5 | PDF processing |
| Puppeteer | 24.37.5 | Web automation |
| Zod | 3.25.76 | Schema validation |
| dotenv | 17.3.1 | Environment variables |

### Database
- **MongoDB** - Document-based NoSQL database for storing user data, interviews, and reports

### External APIs
- **Google Generative AI API** - For AI-powered interview question generation and analysis

---

## 🚀 Unique Selling Points

1. **AI-Powered Intelligence**
   - Uses Google's latest Generative AI to create realistic, contextual interview questions
   - Intelligent evaluation of user responses based on industry standards

2. **Comprehensive Interview Preparation**
   - Covers multiple interview types (technical, behavioral, HR)
   - Customizable interview difficulty levels
   - Real-time feedback and performance metrics

3. **Secure & Scalable**
   - JWT-based authentication with token blacklisting
   - Bcryptjs password hashing for security
   - MongoDB for scalable data storage

4. **User-Friendly Interface**
   - Clean, modern UI built with React
   - Responsive design for mobile and desktop
   - Real-time interview simulations

5. **Rich Features**
   - Resume parsing and upload functionality
   - Detailed interview reports and analytics
   - Interview history and progress tracking

---

## 🔄 How It Works

### User Journey

```
1. Registration
   ↓
2. User Profile Setup
   ↓
3. Select Interview Type (Technical/Behavioral/HR)
   ↓
4. Start Interview
   ↓
5. AI Generates Questions
   ↓
6. User Responds to Questions
   ↓
7. AI Evaluates Responses
   ↓
8. Generate Report & Feedback
   ↓
9. View Results & Analytics
```

### Technical Flow

```
Frontend (React)
    ↓
Vite Dev Server (Port 5174)
    ↓
HTTP Requests (Axios)
    ↓
Backend API (Express.js - Port 3000)
    ↓
MongoDB (Local/Atlas)
    ↓
Google GenAI API
```

### Authentication Flow

1. User registers with username, email, and password
2. Password is hashed using bcryptjs (10 salt rounds)
3. User is created in MongoDB
4. JWT token is generated and stored in cookies
5. Token is validated on protected routes
6. Token can be blacklisted on logout

---

## 📁 Project Structure

```
interview-ai-yt/
│
├── Frontend/                          # React Frontend
│   ├── src/
│   │   ├── features/
│   │   │   ├── auth/                 # Authentication module
│   │   │   │   ├── pages/            # Login, Register pages
│   │   │   │   ├── components/       # Protected route wrapper
│   │   │   │   ├── hooks/            # useAuth hook
│   │   │   │   ├── services/         # Auth API calls
│   │   │   │   └── auth.context.jsx  # Auth context
│   │   │   └── interview/            # Interview module
│   │   │       ├── pages/            # Interview pages
│   │   │       ├── hooks/            # Interview hooks
│   │   │       ├── services/         # Interview API
│   │   │       └── style/            # Interview styles
│   │   ├── App.jsx                   # Main app component
│   │   ├── app.routes.jsx            # Route configuration
│   │   ├── main.jsx                  # Entry point
│   │   └── style/                    # Global styles
│   ├── package.json
│   ├── vite.config.js
│   └── eslint.config.js
│
├── Backend/                           # Express Backend
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js           # MongoDB connection
│   │   ├── controllers/
│   │   │   ├── auth.controller.js    # Auth logic
│   │   │   └── interview.controller.js # Interview logic
│   │   ├── middlewares/
│   │   │   ├── auth.middleware.js    # JWT verification
│   │   │   └── file.middleware.js    # File upload
│   │   ├── models/
│   │   │   ├── user.model.js         # User schema
│   │   │   ├── interviewReport.model.js # Report schema
│   │   │   └── blacklist.model.js    # Token blacklist
│   │   ├── routes/
│   │   │   ├── auth.routes.js        # Auth endpoints
│   │   │   └── interview.routes.js   # Interview endpoints
│   │   ├── services/
│   │   │   └── ai.service.js         # Google GenAI service
│   │   └── app.js                    # Express app setup
│   ├── server.js                     # Entry point
│   ├── .env                          # Environment variables
│   └── package.json
│
└── README.md                          # This file
```

---

## 📋 Prerequisites

### System Requirements
- **Node.js**: v18 or higher
- **npm**: v8 or higher
- **MongoDB**: Local installation or MongoDB Atlas account
- **Git**: For version control

### External Requirements
- **Google Generative AI API Key**: Get from [Google AI Studio](https://aistudio.google.com/app/apikey)
- **MongoDB Connection String**: Local or Atlas

---

## 🔧 Installation & Setup

### Step 1: Clone the Repository
```bash
git clone <repository-url>
cd interview-ai-yt
```

### Step 2: Backend Setup

```bash
cd Backend

# Install dependencies
npm install

# Create .env file
# Add the following variables:
# MONGO_URI=mongodb://127.0.0.1:27017/interview-ai
# GOOGLE_GENAI_API_KEY=your_api_key_here
# JWT_SECRET=your_secret_key_here
```

### Step 3: Frontend Setup

```bash
cd ../Frontend

# Install dependencies
npm install
```

---

## ⚙️ Configuration

### Backend Configuration (.env)

Create a `.env` file in the `Backend` directory:

```env
# MongoDB Connection
MONGO_URI=mongodb://127.0.0.1:27017/interview-ai
# For MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/database-name

# Google Generative AI
GOOGLE_GENAI_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# JWT Secret (Generate a strong random string)
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production_12345
```

### Frontend Configuration

No additional configuration needed. The frontend automatically connects to:
- Backend API: `http://localhost:3000`
- Frontend Dev Server: `http://localhost:5174` (or 5173 if available)

---

## 🚀 Running the Project

### Terminal 1: Start Backend

```bash
cd Backend
npm run dev
```

Expected output:
```
[nodemon] 3.1.14
[nodemon] watching path(s): *.*
Server is running on port 3000
Connected to Database
```

### Terminal 2: Start Frontend

```bash
cd Frontend
npm run dev
```

Expected output:
```
> frontend@0.0.0 dev
> vite

  VITE v7.3.1  ready in XXX ms

  ➜  Local:   http://localhost:5174/
```

### Access the Application

Open your browser and navigate to:
- **Frontend**: [http://localhost:5174](http://localhost:5174)
- **Backend API**: [http://localhost:3000](http://localhost:3000)

---

## 🔌 API Endpoints

### Authentication Endpoints

#### Register User
```
POST /api/auth/register
Content-Type: application/json

Body:
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "SecurePassword123"
}

Response (201):
{
  "message": "User registered successfully",
  "user": {
    "id": "userId",
    "username": "john_doe",
    "email": "john@example.com"
  }
}
```

#### Login User
```
POST /api/auth/login
Content-Type: application/json

Body:
{
  "email": "john@example.com",
  "password": "SecurePassword123"
}

Response (200):
{
  "message": "User logged in successfully",
  "user": {
    "id": "userId",
    "username": "john_doe",
    "email": "john@example.com"
  }
}
```

#### Get Current User
```
GET /api/auth/get-me
Authorization: Bearer <token>

Response (200):
{
  "user": {
    "id": "userId",
    "username": "john_doe",
    "email": "john@example.com"
  }
}
```

#### Logout User
```
GET /api/auth/logout
Authorization: Bearer <token>

Response (200):
{
  "message": "User logged out successfully"
}
```

### Interview Endpoints

#### Start Interview
```
POST /api/interview/start
Authorization: Bearer <token>
Content-Type: application/json

Body:
{
  "type": "technical",
  "duration": 30
}
```

#### Submit Interview Responses
```
POST /api/interview/submit
Authorization: Bearer <token>
Content-Type: application/json

Body:
{
  "interviewId": "interviewId",
  "responses": [
    {
      "questionId": "q1",
      "answer": "User's response"
    }
  ]
}
```

#### Get Interview Reports
```
GET /api/interview/reports
Authorization: Bearer <token>

Response: List of all interview reports for the user
```

---

## 🧪 Testing

### Manual Testing Workflow

#### 1. Test Registration
1. Navigate to [http://localhost:5174/register](http://localhost:5174/register)
2. Enter credentials:
   - Username: `test_user`
   - Email: `test@example.com`
   - Password: `TestPass123`
3. Click "Register"
4. Should redirect to home page

#### 2. Test Login
1. Navigate to [http://localhost:5174/login](http://localhost:5174/login)
2. Enter credentials:
   - Email: `test@example.com`
   - Password: `TestPass123`
3. Click "Login"
4. Should successfully authenticate and redirect

#### 3. Test Interview Simulation
1. After login, click "Start Interview"
2. Select interview type
3. Wait for AI-generated questions
4. Provide responses
5. Submit and view results

#### 4. Test Protected Routes
1. Try accessing [http://localhost:5174](http://localhost:5174) without logging in
2. Should redirect to login page

### API Testing with cURL or Postman

#### Test Registration API
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "api_test",
    "email": "api@test.com",
    "password": "ApiTest123"
  }'
```

#### Test Login API
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "api@test.com",
    "password": "ApiTest123"
  }'
```

---

## 🐛 Troubleshooting

### Issue: Backend fails to start with "MongoDB Connection Error"
**Solution:** Ensure MongoDB is running locally or update `MONGO_URI` in `.env` with valid Atlas connection string

### Issue: "secretOrPrivateKey must have a value" error
**Solution:** Ensure `JWT_SECRET` is set in `.env` file and backend is restarted

### Issue: CORS errors when making requests
**Solution:** Check that `CORS` origin includes both `http://localhost:5173` and `http://localhost:5174`

### Issue: Frontend can't connect to backend
**Solution:** Verify backend is running on port 3000 and check network connectivity

### Issue: Google GenAI API errors
**Solution:** Verify API key is valid and has proper permissions in Google Cloud Console

---

## 📝 Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGO_URI` | MongoDB connection string | `mongodb://127.0.0.1:27017/interview-ai` |
| `GOOGLE_GENAI_API_KEY` | Google AI API key | `AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX` |
| `JWT_SECRET` | JWT signing secret | `your_secret_key_here` |

---

## 🔐 Security Considerations

- ✅ Passwords are hashed with bcryptjs (10 rounds)
- ✅ JWT tokens stored in secure HTTP-only cookies
- ✅ Token blacklisting on logout
- ✅ CORS properly configured
- ✅ Input validation with Zod
- ✅ Protected API routes with authentication middleware

---

## 📦 Build & Deployment

### Build Frontend for Production
```bash
cd Frontend
npm run build
```

Output will be in `Frontend/dist/` directory.

### Build Backend
Backend doesn't require building; ensure all dependencies are installed with `npm install`.

---

## 🤝 Contributing

To contribute to this project:
1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

---

## 📄 License

This project is open source and available under the ISC License.

---

## 📞 Support

For issues or questions:
1. Check the troubleshooting section above
2. Review API endpoints documentation
3. Check backend console for error messages
4. Verify all environment variables are set correctly

---

## 🎓 Learning Resources

- [Express.js Documentation](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Google Generative AI](https://ai.google.dev/)
- [JWT Introduction](https://jwt.io/introduction)

---

**Last Updated:** July 6, 2026

**Version:** 1.0.0
