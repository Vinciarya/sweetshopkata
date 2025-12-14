<div align="center">
<br />
<a href="https://www.google.com/search?q=https://sweetshopkata.vercel.app/" target="_blank">
<img src="frontend/public/image.png" alt="Project Banner" width="100">
</a>
<br />

<div>
<img src="https://www.google.com/search?q=https://img.shields.io/badge/-React-black%3Fstyle%3Dfor-the-badge%26logoColor%3Dwhite%26logo%3Dreact%26color%3D61DAFB" alt="React" />
<img src="https://www.google.com/search?q=https://img.shields.io/badge/-TypeScript-black%3Fstyle%3Dfor-the-badge%26logoColor%3Dwhite%26logo%3Dtypescript%26color%3D3178C6" alt="TypeScript" />
<img src="https://www.google.com/search?q=https://img.shields.io/badge/-Node.js-black%3Fstyle%3Dfor-the-badge%26logoColor%3Dwhite%26logo%3Dnode.js%26color%3D339933" alt="Node.js" />
<img src="https://www.google.com/search?q=https://img.shields.io/badge/-PostgreSQL-black%3Fstyle%3Dfor-the-badge%26logoColor%3Dwhite%26logo%3Dpostgresql%26color%3D4169E1" alt="PostgreSQL" />
<img src="https://www.google.com/search?q=https://img.shields.io/badge/-Tailwind_CSS-black%3Fstyle%3Dfor-the-badge%26logoColor%3Dwhite%26logo%3Dtailwindcss%26color%3D06B6D4" alt="Tailwind CSS" />
</div>

<h3 align="center">Sweet Shop Management System</h3>

<div align="center">
Build a secure, full-stack e-commerce inventory system using <b>TDD</b> and <b>AI-Assisted Development</b>.
</div>
</div>

📋 <a name="table">Table of Contents</a>

✨ Introduction

⚙️ Tech Stack

🔋 Features

🤖 AI & TDD Workflow

🤸 Quick Start

🚀 Deployment

<a name="introduction">✨ Introduction</a>

Build a robust Full-Stack Inventory System with React, Node.js, and PostgreSQL! Implement secure authentication using JWT, manage real-time inventory updates, and deliver a seamless shopping experience.

This project demonstrates modern software practices: Test-Driven Development (TDD) for reliability, Glassmorphism UI for aesthetics, and AI-Pair Programming for efficient debugging and architecture planning.

<a name="tech-stack">⚙️ Tech Stack</a>

React is the library used for the frontend, featuring a component-based architecture and hooks for managing the shopping cart and user session state.

TypeScript provides static typing across the entire stack (Frontend & Backend), ensuring type safety, better tooling, and fewer runtime errors.

Node.js & Express power the RESTful API, handling complex business logic for inventory management, authentication, and secure routing.

PostgreSQL is the relational database of choice, offering robust data integrity for user accounts, product details, and transaction history.

Tailwind CSS enables rapid UI development with utility classes, used here to create a modern, responsive "Glassmorphism" design.

Vite is the build tool for the frontend, ensuring instant server start and lightning-fast Hot Module Replacement (HMR).

Jest & Supertest form the testing backbone, allowing for a rigorous TDD workflow where tests are written before implementation.

Axios handles HTTP requests between the client and server, utilizing interceptors for automatic token attachment and error handling.

<a name="features">🔋 Features</a>

👉 Secure Authentication: Complete user registration and login flows protected by JWT (JSON Web Tokens) and Bcrypt password hashing.

👉 Inventory Management: Real-time tracking of stock levels. Users can purchase items, and Admins can restock or update prices instantly.

👉 Admin Dashboard: A protected interface for administrators to add new sweets, delete obsolete items, and manage global inventory.

👉 Glassmorphism UI: A stunning, modern interface featuring translucent cards, background blurs, and responsive gradients built with Tailwind CSS.

👉 TDD Architecture: The backend was built using Test-Driven Development—ensuring every route (GET, POST, DELETE) is fully tested and reliable.

👉 Global State: Manages user sessions and cart data efficiently across the application.

👉 Deployment Ready: Fully configured for cloud deployment with Vercel (Frontend) and Render (Backend & Database).

<a name="ai-tdd">🤖 AI & TDD Workflow</a>

This project leverages AI Tools (Gemini, ChatGPT) as "Pair Programmers" to enhance the TDD process.

Planning: AI assisted in designing the database schema and API contract.

Debugging: AI analyzed complex logs (e.g., CORS, ECONNREFUSED) to identify environment variable misconfigurations.

Refactoring: AI suggested cleaner async/await patterns and error handling middleware.

<a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

Prerequisites

Make sure you have the following installed on your machine:

Git

Node.js (v18+)

PostgreSQL (Running locally or in the cloud)

1. Clone the Repository

git clone https://github.com/Vinciarya/sweetshopkata.git
cd sweetshopkata


2. Backend Setup

cd backend
npm install

# Create .env file
echo "PORT=3000" >> .env
echo "DATABASE_URL=postgres://user:pass@localhost:5432/sweetshop" >> .env
echo "JWT_SECRET=your_secret_key" >> .env

# Run server (and migrations if applicable)
npm run dev


3. Frontend Setup

cd ../frontend
npm install

# Create .env file
echo "VITE_API_URL=http://localhost:3000/api" >> .env

# Start React Dev Server
npm run dev


<a name="deployment">🚀 Deployment</a>

The application is live!

Service

URL

Frontend (Vercel)

https://sweetshopkata.vercel.app

Backend (Render)

https://sweet-shop-api-zkaq.onrender.com

<div align="center">
<sub>Built with ❤️ using React, Node.js and TypeScript</sub>
</div>