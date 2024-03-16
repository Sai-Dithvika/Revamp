
## Backend Tech Stack

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node-dot-js&logoColor=white)  ![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)  ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)  ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white) ![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)


---

# BACKEND DOCS

## ROUTES

### AUTH

- **SIGNUP**

  **ENDPOINT:** http://localhost:6969/auth/signup (POST)

  **required body:**
  - email: string
  - password: string
  - username: string
  - age: number
  - phone_no: string
  - avatar: string

  **status_codes:**
  - success: 201
  - error: 500

- **LOGIN**

    **ENDPOINT:** http://localhost:6969/auth/login (POST)

    **requires body:**
    - email: string
    - password: string

    **status_code:**
    - error: 500, 401
    - on success, client will receive cookies and an authtoken

- **LOGOUT**

    **ENDPOINT:** http://localhost:6969/auth/logout (POST)

    Just call this using POST.

### QUIZ

If you need all the quizzes related to a module, use the following endpoint:

**ENDPOINT:** http://localhost:6969/quiz/:moduleID (GET)

**requirements:**
- parameters = moduleid: number

If you need quizzes specific for a sub-module, use the following routes:

**ENDPOINT:** http://localhost:6969

