# Web forum frontend

This is the repo for the Frontend of my CVWO winter 23-24 submission

Demo: https://cvwo-frontend-gbiu.onrender.com/ 

The backend is based on free tier hence it will not have any data, and data won't last after the server spun down

The first user is always an admin and can create and delete new categories. You need categories to create a post

Checkout my [Backend repo](https://github.com/ThienDuc3112/CVWO_23-24_Backend)

## How to use: 

- Clone this repo
- Install all dependencies
- Edit `@/src/constants.ts`
- Change `API_URL` to the url of the rails server
- Run with `npm run dev`
- Go to the link vite provide

## User manual:

Central design:
The forum is design around 3 main models: 
- Threads: This is the central piece of the forum. The thread that has title, content, user and upvotes/downvotes. This can contain many follow ups, and belongs to a category. This is also the only thing that the search function will search for. Any users can create/read/update/delete a thread (Provided they are the creator of the thread or they are an admin). Upon deletion, it’s follow ups will also be deleted
- Category: A grouping of threads of similar topics, only admin are allowed to create or delete a category, and deleting it will cause all threads under it to be deleted as well.
- Follow ups: The responses to threads, sorted by created time. It has everything a thread has except for a title. Every users can create/read/update/delete a follow up (Provided appropriate role)

User:
Users can see other users' profiles, and see their threads and follow ups that they have posted. A user account can be created (sign up) and read (profile page), and is essential for creating/updating/deleting threads and follow ups, as well as upvote/downvote.

Admin: 
If the web app is hosted on a local machine, the very first user created will automatically become admin. Admins can create and delete a category, as well as performing all CRUD operations on other users threads/follow ups. To assign more admins, the app hoster can go to the backend console and set the is_admin attribute of a user to true.

Other features / designs:
- Search: will search for title and content of threads, doesn’t work on follow up
- Top post: Sorted all the post by their amount of upvotes
- Upvote and downvote: Any login user can upvote / downvote a thread or follow up as many times as they want.
- Markdown: Threads and post can be written with markdown
