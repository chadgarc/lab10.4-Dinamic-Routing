# Blog App — Lab 10.4

The site is hosted [here](https://chadgarc.github.io/lab10.4-Dinamic-Routing/).

## About

This project is part of a Per Scholas lab focused on **React Router, client-side authentication, and protected routes**. The application demonstrates dynamic routing, React Context for state management, and animated page transitions.

## Lab Focus

The lab centered on implementing a full blog application with:

1. **Dynamic Routing** — Generating pages from data using route parameters (slugs)
2. **React Context** — Client-side authentication system with `useContext`
3. **Protected Routes** — Redirecting unauthenticated users from `/admin` to `/login`
4. **Conditional Rendering** — UI changes based on authentication state
5. **Bonus: Page Transitions** — Fade-in/fade-out animations with `framer-motion`

## Challenges & Learnings

This lab presented a meaningful challenge, particularly with **React Context**. Working with `useContext` and managing state across multiple components required careful planning around provider wrapping and data flow. It was a valuable learning experience, the pattern is starting to click, but I recognize there's still more practice needed to fully master it.

Implementing **slugs** and dynamic routes (`/blog/:slug`) was more approachable and a good exercise in reading URL parameters with `useParams()`.

Overall, the lab was a great way to deepen understanding of React patterns. It was very interesting to see how routing, context, and conditional rendering come together in a single cohesive application.

## Deployment Note

This project uses **HashRouter** instead of BrowserRouter. Since GitHub Pages serves static files and does not handle client-side routing with direct URLs (e.g., `/blog/my-post`), `HashRouter` uses URL hashes (`/#/blog/my-post`) to ensure all routes resolve correctly on static hosting.

## Stack

| Technology    | Version |
| ------------- | ------- |
| React         | ^19.2.8 |
| TypeScript    | ~6.0.2  |
| Vite          | ^8.2.2  |
| TailwindCSS   | ^4.3.3  |
| DaisyUI       | ^5.7.22 |
| React Router  | ^8.3.1  |
| framer-motion | ^13.2.0 |

## Features

- **Dynamic Routing** — Blog posts rendered from data via `/blog/:slug`
- **Authentication** — React Context-based auth with login/logout and localStorage persistence
- **Protected Routes** — Admin page accessible only to authenticated users
- **User Data** — Each post displays the author with a random username and color
- **Post Not Found** — Graceful fallback when a slug doesn't match
- **Animated Transitions** — Fade-in/fade-out page transitions with `AnimatePresence`

## Project Structure

```
src/
├── App.tsx                  # Router setup, ProtectedRoute
├── main.tsx                 # Entry point with HashRouter + Providers
├── index.css                # Tailwind/DaisyUI styles
├── data/
│   └── data.ts              # Mock posts (30) and users (29)
├── types/
│   └── index.ts             # Post, User, Reactions, AuthContextType interfaces
├── hooks/
│   ├── Providers.tsx         # AuthProvider + DataProvider wrapper
│   ├── Contexts/
│   │   ├── AuthContext.ts    # Auth context + useAuth hook
│   │   └── DataContext.ts    # Data context + useData hook
│   └── CustomHooks/
│       ├── AuthContext.tsx   # AuthProvider with localStorage
│       └── DataContext.tsx   # DataProvider with useState
├── components/
│   ├── Layout/
│   │   └── Layout.tsx       # NavBar + Outlet
│   ├── Header/
│   │   ├── NavBar.tsx       # DaisyUI navbar
│   │   └── LoggedUser.tsx   # Conditional Login/Logout dropdown
│   ├── motion/
│   │   └── FrameMotion.tsx  # Fade-in/out animation wrapper
│   └── body/
│       ├── elements/
│       │   └── BlogPost.tsx # Single post card with user avatar
│       └── pages/
│           ├── Blog.tsx     # /blog — list of all posts
│           ├── Slug.tsx     # /blog/:slug — single post or "Post not found"
│           ├── Login.tsx    # /login — login button
│           └── Admin.tsx    # /admin — protected admin dashboard
```

## Routes

| Path          | Component           | Protected                   |
| ------------- | ------------------- | --------------------------- |
| `/`           | Redirect to `/blog` | No                          |
| `/blog`       | Blog index          | No                          |
| `/blog/:slug` | Single post         | No                          |
| `/login`      | Login page          | No                          |
| `/admin`      | Admin dashboard     | Yes — redirects to `/login` |
