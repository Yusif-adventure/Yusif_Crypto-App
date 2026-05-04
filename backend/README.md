# Coinbase Clone Backend

This backend provides a Node.js + MongoDB API for the Coinbase clone frontend.

## Setup

1. Copy `.env.example` to `.env`
2. Install dependencies:
   ```bash
   cd backend
   npm install
   ```
3. Start the backend:
   ```bash
   npm run dev
   ```

## API Endpoints

- `GET /register?name=...&email=...&password=...` - register a new user using query parameters
- `POST /api/auth/register` - register a new user using JSON body
- `POST /api/auth/login` - login with email and password

### Register request body example

```json
{
  "name": "Alice",
  "email": "alice@example.com",
  "password": "securePassword123"
}
```

### Successful response

```json
{
  "success": true,
  "message": "User registered successfully.",
  "data": {
    "user": {
      "id": "...",
      "name": "Alice",
      "email": "alice@example.com"
    },
    "token": "..."
  }
}
```
