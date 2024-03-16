
## Backend Tech Stack

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node-dot-js&logoColor=white)  ![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)  ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)  ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white) ![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)


---

# BACKEND DOCS

## ROUTES

### AUTH

- SIGNUP

  **ENDPOINT:** -> http://localhost:6969/auth/signup  (post)

  **required body:**
  - email:string
  - password:string
  - username:string
  - age : number
  - phone_no : string
  - avatar :string

  **status_codes:**
  - success -201
  - error -500

- LOGIN

    **ENDPOINT:** -> http://localhost:6969/auth/login  (post)

    **requires body:**
    - email:string
    - password :string

    **status_code:**
    - error = 500 , 401
    - onsucess client will recieve cookies and and authtoken

- LOGOUT

    **ENDPOINT:** -> http://localhost:6969/auth/logout  (post)

    just call this using post

### QUIZ

if you need all the quizes related to a module use the following end point
    **ENDPOINT:** -> http://localhost:6969/quiz/:moduleID  (get)

    **requirements:**
    - parameters = moduleid:number

if you need quizzes specific for a sub-module use the following routes

    **ENDPOINT:** -> http://localhost:6969/quiz/submodulesquiz/:submoduleID  (get)

    **requirements**
    - parameters = submoduleid : number
further doubts ask me

### AI

- For automatic quiz generation after completing the quiz call the following api endpoint along with respective parameters

    **ENDPOINT** -> http://localhost:6969/quiz/results/:moduleID/:submoduleID/:score  (get)

    **REQUIREMENTS**:
    - moduleID -> moduleid,
    - submoduleID -> submoduleid,
    - score -> score from quiz

    **STATUS_CODE:**

    success -> 200 and you will receive new quiz in this format
    ```
    data:{[]}
    ```
    error -> 404 , 500

- For doubts or normal chat use the below endpoints

    **ENDPOINT** -> http://localhost:6969/quiz/doubt  (post)

    **REQUIREMENTS:**
    - doubt : string

    **status_code:**
    - success -200 and ans as response
    - error -500 , 404

just take care about the amount of text user sends , dont allow user to send more than 500 words
complete the frontend , if any doubt ask anyone

