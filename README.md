# Sistya Bank

![Sistya Bank](https://github.com/user-attachments/assets/50cd260d-0ebb-489a-8121-5866e9b313a7)  
*A modern banking application with authentication, transactions, and balance tracking.*

## 🚀 Overview
Sistya Bank is a fully responsive and feature-rich banking application that allows users to securely manage their finances. It includes user authentication, money transfers, transaction tracking, and a beautiful UI, providing a seamless banking experience.

## ✨ Features
- 🔑 **User Authentication** (Sign up, Login, Logout, Forgot Password)
- 🔄 **OTP Validation** to verify user
- 💰 **Send Money** using mobile number
- 📜 **Transaction Monitoring** (Sent, Received, and All Transactions)
- 🏦 **View Account Details**
- 📊 **Balance Inquiry**
- 🔐 **Encrypted Password Storage** (bcrypt)
- ✅ **Validation Schema** (Zod)
- 🎨 **Beautiful, Fully Responsive Design** (ShadCN & Tailwind CSS)

## 🛠️ Built With
- **Next.js 15** (App Router)
- **Turborepo** (Monorepo architecture)
- **NextAuth** (Authentication)
- **Docker** (Containerization)
- **PostgreSQL & Prisma** (Database & ORM)
- **TypeScript** (Static Typing)
- **ShadCN** (UI Components)
- **Tailwind CSS** (Styling)

## 🌍 Live Demo
Sistya Bank is deployed on **[Vercel](https://sistya-bank.vercel.app)** for real-time banking operations.

## 📥 Installation

To set up Sistya Bank locally, follow these steps:

### Prerequisites
- **Node.js** (>= 18)
- **Yarn** (Package manager)
- **Docker** (For database setup)
- **PostgreSQL** (If running DB manually)

### Clone the Repository
```bash
git clone https://github.com/avinashsinghwk/sistya-bank.git
cd sistya-bank
```

### Install Dependencies
```bash
yarn install
```

### Set Up Environment Variables
Create a `.env` file in `apps/bank-app` and `packages/db` with the following variables:
```env
# apps/bank-app/.env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret
NEXT_PUBLIC_MAIN_URL=http://localhost:3000
...
```

```env
# packages/db/.env
DATABASE_URL=postgresql://user:password@localhost:5432/sistya-bank
...
```

### Obtain the Database URL
You can either use a **remote PostgreSQL instance** or **run PostgreSQL in Docker**:

#### Option 1: Using Docker (Recommended)
```bash
docker run --name sistya-bank-db -e POSTGRES_USER=user -e POSTGRES_PASSWORD=password -e POSTGRES_DB=sistya-bank -p 5432:5432 -d postgres
```
Your `DATABASE_URL` for Docker:
```env
DATABASE_URL=postgresql://user:password@localhost:5432/sistya-bank
```

#### Option 2: Using a Remote PostgreSQL Database
If using a remote PostgreSQL instance (e.g., Neondb, aiven.io), replace `DATABASE_URL` with the connection string provided by your service provider.

### Apply Database Migrations
```bash
cd packages/db
yarn prisma migrate dev
```

### Run the Development Server
```bash
yarn dev
```
Visit `http://localhost:3000` to view the app.

## 🤝 Contributing
We welcome contributions! Follow these steps to contribute:

1. **Fork** the repository.
2. **Clone** your fork:
   ```bash
   git clone https://github.com/avinashsinghwk/sistya-bank.git
   ```
3. **Create a new branch**:
   ```bash
   git checkout -b feature-name
   ```
4. **Make your changes and commit**:
   ```bash
   git commit -m "Added new feature"
   ```
5. **Push to your fork**:
   ```bash
   git push origin feature-name
   ```
6. **Create a Pull Request** on GitHub.

## 📧 Contact
For support or inquiries, reach out via:
- GitHub Issues: [Create an Issue](https://github.com/avinashsinghwk/sistya-bank/issues)
- Email: abhinashsinghwk2@gmail.com

---

⭐ **Star this repository** if you found it useful!

