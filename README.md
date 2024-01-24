# Web forum frontend

This is the repo for the backend of my CVWO winter 23-24 submission

Checkout my [Backend repo](https://github.com/ThienDuc3112/CVWO_23-24_Backend)

How to use: 

- Clone this repo
- Install all dependencies
- Edit `@/src/constants.ts`
- Change `API_URL` to the url of the rails server
- Run with `npm run dev`
- Go to the link vite provide

User manual:
- The first user will be an admin, all subsequent users will be normal user.
- Admin can create and delete categories, as well as edit/delete other users Thread and Follow ups
- To make a user admin, you can go to the rails server directory and open rails console, find the user with `User.find(id)` and set `is_admin` to true
- The content of a threads and follow ups can be multiline and use markdown 