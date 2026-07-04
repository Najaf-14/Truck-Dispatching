# Truck Dispatching

Truck Dispatching is a full-stack web application designed for a trucking and logistics business. It combines a modern React-based frontend with an Express and MongoDB backend to support public-facing pages, user authentication, driver registration, contact submissions and an admin dashboard for managing the platform.

## Overview

This project provides a complete foundation for a dispatching business website with:

- A polished public website for services, pricing, testimonials, FAQ and contact
- User authentication for customers and administrators
- Driver registration and management workflows
- Admin tools to manage users, drivers, testimonials and incoming contact messages
- Secure API routes with authentication and role-based access control

## Main Features

### Public Website
- Home page with informational sections and call-to-action areas
- Services and pricing pages
- Contact form for customer inquiries
- Driver registration form
- Login and signup pages

### Authentication and Authorization
- User registration and login
- JWT-based authentication
- Protected routes for authenticated users
- Admin-only access for dashboard management features

### Admin Dashboard
- View and manage users
- Manage driver submissions
- Review contact messages
- Manage testimonials

## Tech Stack

### Frontend
- React
- Vite
- React Router DOM
- Axios
- React Toastify
- SweetAlert2
- CSS for component styling

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- JWT
- bcryptjs
- CORS
- dotenv
- Nodemon

### Development Tools
- ESLint
- Vite dev server

## Project Structure

```text
truck-dispatching/
├── public/                  # Static assets
├── src/                     # React frontend source
│   ├── Admin/               # Admin dashboard pages and styles
│   ├── Auth/                # Login and signup UI
│   ├── Components/          # Reusable UI components
│   ├── Pages/               # Main route pages
│   ├── routes/              # Application routing setup
│   └── main.jsx             # Frontend entry point
├── Server/                  # Backend application
│   ├── App/
│   │   ├── controllers/     # Request handlers
│   │   ├── middleware/      # Auth and authorization middleware
│   │   └── models/          # Mongoose models
│   ├── config/              # Database configuration
│   ├── routes/              # API route definitions
│   └── index.js             # Server entry point
├── package.json             # Frontend scripts and dependencies
├── Server/package.json      # Backend scripts and dependencies
└── README.md                # Project documentation
```

## Prerequisites

Make sure the following are installed on your machine:

- Node.js 18 or newer
- npm or yarn
- MongoDB running locally, or a MongoDB Atlas connection string

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/Najaf-14/Truck-Dispatching.git
cd truck-dispatching
```

### 2. Install frontend dependencies

```bash
npm install
```

### 3. Install backend dependencies

```bash
cd Server
npm install
```

## Environment Configuration

Create a file named `.env` inside the Server folder:

```env
PORT=5000
MONGO_URL=mongodb://localhost:27017/truck_dispatching
JWT_SECRET=your_secret_key_here
```

### Variable Explanation
- `PORT`: The port used by the Express server
- `MONGO_URL`: MongoDB connection string
- `JWT_SECRET`: Secret key used to sign and verify JSON Web Tokens

> The backend will not run correctly without a valid MongoDB connection string and a JWT secret.

## Running the Application

### Start the backend

From the Server folder:

```bash
cd Server
npm start
```

This starts the API server with Nodemon, which automatically restarts the server when files change.

### Start the frontend

From the project root:

```bash
npm run dev
```

Once started, open the app at:

- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## Available Scripts

### Frontend scripts

From the root project directory:

```bash
npm run dev      # Start the Vite development server
npm run build    # Build the production-ready frontend bundle
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint checks
```

### Backend scripts

From the Server directory:

```bash
npm start        # Start the backend server with Nodemon
```

## API Endpoints

The backend exposes several RESTful routes under the following base paths:

### Authentication

Base path: `/api/auth`

- `POST /signup` - Register a new user
- `POST /login` - Authenticate a user and return a JWT
- `GET /admin/manageUsers` - Retrieve all users (protected)
- `DELETE /admin/user/:id` - Delete a user (protected)

### Contact Messages

Base path: `/api/contact`

- `POST /` - Submit a contact message
- `GET /admin/messages` - Get all messages (admin access)
- `DELETE /admin/message/:id` - Delete a message (admin access)

### Driver Registration

Base path: `/api/driverform`

- `POST /register` - Register a driver
- `GET /all` - Retrieve all drivers
- `PUT /update/:id` - Update driver data
- `DELETE /delete/:id` - Delete a driver

## Frontend Routing

The frontend uses React Router and includes routes for:

- `/` - Home page
- `/pricing` - Pricing page
- `/services` - Services page
- `/contact` - Contact page
- `/driver` - Driver registration page
- `/login` - Login page
- `/signup` - Signup page
- `/admin` - Admin dashboard area

Admin routes are protected and only accessible to users with the admin role.

## Database Model Summary

The backend uses MongoDB with Mongoose models for:

- Users
- Contacts
- Drivers

These models support authentication, user management, contact submissions and driver-related operations.

## Development Notes

- The frontend and backend are configured to work together locally through CORS.
- The backend currently allows requests from the frontend origin `http://localhost:5173`.
- The application uses protected routing to control access to authenticated and admin-only pages.

## Troubleshooting

### Common issues

- If the backend fails to start, verify that `.env` exists in the Server folder and contains valid values.
- If MongoDB connection fails, ensure your MongoDB instance is running and the `MONGO_URL` is correct.
- If the frontend cannot reach the backend, confirm that both servers are running and that the API base URL is correct.

## License

This project is currently licensed under the ISC license as defined in the backend package configuration.

## Contributing

If you want to improve the project:

1. Create a new branch for your feature or fix
2. Make your changes
3. Test the app locally
4. Submit a pull request with a clear summary of your work
