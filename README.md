# Commands
- On Client
    npm run dev
run the front end on http://localhost:5173/
- On Server
    npm run dev
run de server on http://localhost:3000/

# Packages and dependencies
## Front End
- Vite
    npm create vite client
## Back end
- Express
- morgan
- jsonwebtoken
- cors
### Dev Dependencies
- typescript
    - @types/node
    - @types/express
    - @types/morgan
    - @types/cors
- ts-node-dev

# Backend engine

- Send fetch post with a JSON body to http://localhost:3000/login, this will make a token

- Send a fetch get to http://localhost:3000/profile with a headers:

Content-Type application/json
Authorization Barer 'token'

replace 'token' with your own token

//npx tsc --init