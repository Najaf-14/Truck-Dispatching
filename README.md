# Truck Dispatching

Truck Dispatching is a full-stack web application for managing a truck dispatching business. The frontend is built with React and Vite and the backend is an Express API connected to MongoDB for authentication and admin user management.

## Tech Stack

- Frontend: React, Vite, React Router, Axios
- UI helpers: React Toastify, SweetAlert2
- Backend: Node.js, Express, MongoDB, Mongoose, JWT, bcryptjs
- Tooling: ESLint, Nodemon

## Features

- Public pages for home, pricing, services, contact, driver registration, login and signup
- Protected home route for authenticated users
- Admin dashboard with user, driver and testimonial management views
- JWT-based authentication with role-based access control
- MongoDB-backed user management endpoints for admin operations

## Project Structure

- `src/` - React frontend
  - `Pages/` - Page-level screens
  - `Components/` - Reusable UI sections
  - `Admin/` - Admin dashboard screens
  - `Auth/` - Login and signup components
  - `routes/` - Frontend routing
- `Server/` - Express + MongoDB backend
  - `App/controllers/` - Route controllers
  - `App/middleware/` - Auth and role middleware
  - `App/models/` - Mongoose models
  - `config/` - Database connection
  - `routes/` - API routes

## Prerequisites

- Node.js 18 or newer
- MongoDB running locally or a MongoDB Atlas connection string

## Setup

Install dependencies for the frontend and backend:

```bash
# From the project root
npm install

# From the backend folder
cd Server
npm install
```

Start the backend API from the `Server` folder:

```bash
cd Server
npm start
```

Start the frontend from the project root:

```bash
npm run dev
```

The frontend runs on `http://localhost:5173` by default and the backend listens on the port defined in `Server/.env`.

## Environment Variables

Create a `Server/.env` file with:

```env
PORT=5000
MONGO_URL=mongodb://localhost:27017/truck_dispatching
JWT_SECRET=your_secret_key
```

`PORT` and `MONGO_URL` are required for the API to start successfully and `JWT_SECRET` is used to sign auth tokens.

## Available Scripts

Frontend (`package.json`):

```bash
npm run dev      # Start the Vite dev server
npm run build    # Build the production bundle
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```

Backend (`Server/package.json`):

```bash
npm start        # Start the API with nodemon
```

## API Endpoints

Base path: `/api/auth`

- `POST /signup` - Create a new user
- `POST /login` - Authenticate a user and return a JWT
- `GET /admin/manageUsers` - List users, protected by auth and admin middleware
- `DELETE /admin/user/:id` - Delete a user, protected by auth and admin middleware

## Notes

- The backend CORS configuration allows requests from `http://localhost:5173`.
- The frontend uses protected routes for authenticated and admin-only sections.
