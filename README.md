# Auth Server (Node + Express + TypeScript)

A comprehensive authentication server built with Node.js, Express, TypeScript, and MongoDB. Features JWT-based authentication with refresh tokens, user management, and secure cookie handling.

## Tech Stack

- **Runtime**: Node.js >=22.0.0
- **Framework**: Express.js
- **Language**: TypeScript (strict mode)
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (Access & Refresh tokens)
- **Testing**: Jest
- **Validation**: Zod
- **Security**: bcrypt, CORS, cookie-parser

## Features

- 🔐 JWT Authentication with access and refresh tokens
- 👤 User registration and management
- 🍪 Secure HTTP-only cookies
- 🛡️ Input validation with Zod schemas
- 🔄 Token refresh mechanism
- 🌐 CORS configuration for multiple origins
- 📊 Health check endpoint
- 🧪 Unit testing with Jest
- 🎯 TypeScript path mapping
- 📝 ESLint & Prettier configured

## Scripts

- `yarn dev` - Run in watch mode with ts-node-dev
- `yarn build` - Compile TypeScript to `dist/`
- `yarn start` - Start compiled server
- `yarn test` - Run unit tests with Jest
- `yarn test:watch` - Run tests in watch mode
- `yarn lint` - Run ESLint
- `yarn lint:fix` - Fix ESLint errors
- `yarn format` - Check code formatting
- `yarn format:write` - Format code with Prettier

## API Endpoints

### Health

- `GET /health` - Health check endpoint

### Authentication

- `POST /api/auth/login` - User login
- `POST /api/auth/refresh` - Refresh access token
- `POST /api/auth/logout` - User logout (requires auth)

### Users

- `POST /api/users` - Create new user
- `GET /api/users/currentuser` - Get current user (requires auth)

## Environment Configuration

Create a `.env` file in the root directory with the following variables:

```env
# Server Configuration
SERVER_TYPE=DEV
PORT=3000

# Database
MONGO_URI=mongodb://localhost:27017/auth-db

# JWT Configuration
ACCESS_TOKEN_KEY=your-access-token-secret
ACCESS_TOKEN_EXPIRY=15m
REFRESH_TOKEN_KEY=your-refresh-token-secret
REFRESH_TOKEN_EXPIRY=7d

# Cookie Configuration
COOKIE_EXPIRY_IN_DAYS=7
```

## CORS Configuration

The server is configured to accept requests from:

- `http://localhost:5173` (Vite dev server)

## Project Structure

```
src/
├── apis/           # API routes and controllers
│   ├── auth/       # Authentication endpoints
│   └── users/      # User management endpoints
├── configs/        # Configuration files
├── core/           # Core application setup
├── middlewares/    # Express middlewares
└── utils/          # Utility functions and helpers
```

## Setup

1. **Install dependencies**

   ```bash
   yarn install
   ```

2. **Set up environment variables**

   ```bash
   # Create .env file with required variables (see Environment Configuration)
   ```

3. **Start MongoDB**

   ```bash
   # Make sure MongoDB is running locally or update MONGO_URI
   ```

4. **Run development server**
   ```bash
   yarn dev
   ```

## Testing

```bash
# Run all tests
yarn test

# Run tests in watch mode
yarn test:watch

# Test health endpoint
curl http://localhost:3000/health
```

## Security Features

- Password hashing with bcrypt
- JWT token-based authentication
- HTTP-only secure cookies
- Input validation and sanitization
- CORS protection
- Environment-based configuration
