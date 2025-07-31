# Social Network (Facebook Clone project)

This repository is a **full-stack clone inspired by the original Facebook platform**, created solely for **learning purposes**, **architecture practice**, and **handling large-scale web projects**.

## 📌 About the Project

This project is not affiliated with Facebook, Inc. and is intended for **educational and portfolio** use only. The goal is to recreate the core features of a social media application like Facebook using modern web development tools and best practices.

## 🎯 Key Objectives

- Practice scalable **frontend and backend architecture**
- Improve skills in **full-stack development**
- Understand how to build and structure **complex user interfaces and data flows**
- Explore **real-time communication**, **authentication**, and **media uploads**
- Simulate a real-world, production-grade application

## 🔧 Tech Stack

- **Frontend:** Next.js, React, TypeScript, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT
- **Real-time Features:** Socket.IO (for chat and notifications)
- **File Uploads:** Cloudinary or Firebase Storage
- **Hosting:** Vercel (Frontend and possible Backend too), Render/Railway (Backend)

## 🚀 Features (Planned / Built)

- [ ] User registration and login
- [ ] Profile management
- [ ] Post creation (text, image)
- [ ] Like and comment system
- [ ] Friends / Follow system
- [ ] Real-time chat (Messenger-style)
- [ ] Marketplace section
- [ ] Group creation and joining
- [ ] Notifications system

> This is a work in progress and features may be added over time.

## 🧠 Learning Focus

- Component-based UI architecture
- REST API design with Express
- Database schema modeling with Mongoose
- Real-time data handling using WebSockets
- Clean code practices and project organization

## 📁 Folder Structure
```bash
/ (Root)
├── frontend/        # Next.js frontend
└── backend/         # Express (TS) + MongoDB 
```

## 🌿 Git Branching Strategy
This project uses a structured Git workflow to manage development, testing, and deployment in a clean and scalable way.

### 🔄 Branches Overview
| Branch Name     | Purpose                                                                 |
|-----------------|-------------------------------------------------------------------------|
| `main` / `production` | ✅ Stable, production-ready code. Used for final live deployments.     |
| `development`           | 🧪 Ongoing development. New features are merged here for staging/testing. |
| `feature/*`     | 🛠️  Specific feature branches (e.g. `feature/chat`, `feature/profile`).     |
| `hotfix/*`      | 🚑 Emergency fixes to be patched directly into production.                |
| `release/*`     | 🚀 Pre-release polish and testing before pushing to `main`. (Optional)     |

### 🛠 Example Workflow

```bash
# Start a new feature
git checkout -b feature/user-profile

# Work, commit, and push
git push origin feature/user-profile

# Merge into dev when feature is done
git checkout dev
git merge feature/user-profile

# Deploy tested features by merging dev → main
git checkout main
git merge dev
