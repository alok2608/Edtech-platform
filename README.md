# StudyNotion Edtech Project

An online learning platform (MERN stack) where students can browse and enroll in courses, and instructors can create and publish course content with video lectures.

## Live

- App: https://edtech-platform-delta.vercel.app
- API: https://studynotion-backend-xuqj.onrender.com

## Stack

- Frontend: React, Redux Toolkit, Tailwind CSS
- Backend: Node.js, Express, MongoDB (Mongoose)
- Media: Cloudinary
- Payments: Razorpay
- Email: Brevo

## Running locally

```bash
npm install
cd server && npm install
```

Copy `server/.env.example` to `server/.env` and fill in your own credentials (MongoDB Atlas, Cloudinary, Razorpay, Brevo). Also create a `.env` file in the project root with:

```
REACT_APP_BASE_URL=http://localhost:4000/api/v1
```

Then from the project root:

```bash
npm run dev
```

This runs the client (`:3000`) and server (`:4000`) together.
