<div align="center">
  <br />
  <a href="https://sweetshopkata.vercel.app" target="_blank">
    <img src="frontend/public/image.png" alt="Sweet Shop Logo" width="200" />
  </a>
  <br />

  <h1 align="center">Sweet Shop Management System</h1>

  <p align="center">
    Build a secure, full-stack e-commerce inventory system using <b>TDD</b> and <b>AI-Assisted Development</b>.
  </p>

  <div align="center">
    <img src="https://img.shields.io/badge/-React-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="TypeScript" />
    <img src="https://img.shields.io/badge/-Node.js-black?style=for-the-badge&logoColor=white&logo=node.js&color=339933" alt="Node.js" />
    <img src="https://img.shields.io/badge/-PostgreSQL-black?style=for-the-badge&logoColor=white&logo=postgresql&color=4169E1" alt="PostgreSQL" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="Tailwind CSS" />
  </div>
</div>

<br />

## 📋 Table of Contents

- [✨ Introduction](#-introduction)
- [⚙️ Tech Stack](#️-tech-stack)
- [🔋 Features](#-features)
- [🤖 AI & TDD Workflow](#-ai--tdd-workflow)
- [🤸 Quick Start](#-quick-start)
- [🚀 Deployment](#-deployment)

<a name="-introduction"></a>
## ✨ Introduction

Build a robust Full-Stack Inventory System with **React**, **Node.js**, and **PostgreSQL**! Implement secure authentication using JWT, manage real-time inventory updates, and deliver a seamless shopping experience.

This project demonstrates modern software practices:
- **Test-Driven Development (TDD)** for reliability.
- **Glassmorphism UI** for aesthetics.
- **AI-Pair Programming** for efficient debugging and architecture planning.

<a name="️-tech-stack"></a>
## ⚙️ Tech Stack

- **React**: Component-based architecture with hooks for managing state.
- **TypeScript**: Static typing for both Frontend & Backend.
- **Node.js & Express**: RESTful API for business logic and routing.
- **PostgreSQL**: Relational database for robust data integrity.
- **Tailwind CSS**: Utility-first CSS for the "Glassmorphism" design.
- **Vite**: Frontend build tool for instant HMR.
- **Jest & Supertest**: Testing backbone for TDD workflow.
- **Axios**: HTTP client with interceptors for API communication.

<a name="-features"></a>
## 🔋 Features

- **👉 Secure Authentication**: Complete user registration and login flows protected by JWT and Bcrypt.
- **👉 Inventory Management**: Real-time tracking of stock levels. Users can purchase, Admins can restock.
- **👉 Admin Dashboard**: Protected interface for managing sweets and inventory.
- **👉 Glassmorphism UI**: Stunning modern interface with translucent cards and gradients.
- **👉 TDD Architecture**: Fully tested backend routes (GET, POST, DELETE).
- **👉 Global State**: Efficient session and cart management.
- **👉 Deployment Ready**: Configured for Vercel (Frontend) and Render (Backend).

<a name="-ai--tdd-workflow"></a>
## 🤖 AI & TDD Workflow

This project leverages AI Tools (Gemini, ChatGPT) as "Pair Programmers" to enhance the TDD process.

- **Planning**: Database schema and API contract design.
- **Debugging**: Analyzing logs (CORS, ECONNREFUSED) and fixing config.
- **Refactoring**: Improving code patterns and error handling.

<a name="-quick-start"></a>
## 🤸 Quick Start

Follow these steps to set up the project locally.

### Prerequisites

- **Git**
- **Node.js** (v18+)
- **PostgreSQL** (Running locally or in the cloud)

### 1. Clone the Repository

```bash
git clone https://github.com/Vinciarya/sweetshopkata.git
cd sweetshopkata
```

### 2. Backend Setup

```bash
cd backend
npm install

# Create .env file
echo "PORT=3000" >> .env
echo "DATABASE_URL=postgres://user:pass@localhost:5432/sweetshop" >> .env
echo "JWT_SECRET=your_secret_key" >> .env

# Run server (and migrations if applicable)
npm run dev
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install

# Create .env file
echo "VITE_API_URL=http://localhost:3000/api" >> .env

# Start React Dev Server
npm run dev
```

<a name="-deployment"></a>
## 🚀 Deployment

The application is live!

| Service | URL |
| :--- | :--- |
| **Frontend (Vercel)** | [https://sweetshopkata.vercel.app](https://sweetshopkata.vercel.app) |
| **Backend (Render)** | [https://sweet-shop-api-zkaq.onrender.com](https://sweet-shop-api-zkaq.onrender.com) |

<br />

<div align="center">
  <sub>Built with  using React, Node.js and TypeScript</sub>
</div>