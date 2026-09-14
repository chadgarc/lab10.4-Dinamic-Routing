# AGENTS.md — Blog Application Lab

## Project Overview

A React + TypeScript + Vite + TailwindCSS + DaisyUI blog application demonstrating dynamic routing, client-side authentication, and protected routes.

---

## Objectives

1. Implement dynamic routes in React Router to generate pages from data
2. Create an index page that links to multiple dynamic detail pages
3. Read and use route parameters (slugs) to fetch and display data for a specific page
4. Structure a basic client-side authentication system using React Context
5. Create a protected route that redirects unauthenticated users
6. Conditionally render UI elements based on authentication status
7. (Bonus) Implement simple fade-in/fade-out page transitions

---

## Technical Stack

| Technology | Version |
|---|---|
| React | ^19.2.8 |
| TypeScript | ~6.0.2 |
| Vite | ^8.2.2 |
| TailwindCSS | ^4.3.3 |
| DaisyUI | ^5.7.22 |
| React Router | *(not yet installed — must add)* |

---

## Requirements

### 1. Mock Blog Data (`lib/posts.ts`)
- Create an in-memory array of blog post objects
- Each post must have: `id`, `slug` (URL-friendly string), `title`, `content`

### 2. Public Blog Pages
- **Blog Index Page (`/blog`)**: Display list of all posts; each item links to its slug-based URL (e.g., `/blog/my-first-post`)
- **Dynamic Blog Post Page (`/blog/:slug`)**: Render a single post using the slug from the URL; display "Post not found" if slug doesn't match any post

### 3. Authentication System (`AuthContext`)
- Create `AuthContext` providing:
  - `isAuthenticated: boolean`
  - `login(): void` — sets `isAuthenticated` to `true`
  - `logout(): void` — sets `isAuthenticated` to `false`
- **Login Page (`/login`)**: Button that calls `login()`
- **Navbar/Header**: Show "Log In" link when logged out; show "Log Out" button and "Admin" link when logged in

### 4. Protected Admin Route
- **Admin Page (`/admin`)**: Accessible only to authenticated users
- Unauthenticated users navigating to `/admin` must be redirected to `/login`
- Content: "Welcome to the Admin Dashboard."

### 5. (Bonus) Page Transitions
- Add fade-in/fade-out transitions using `framer-motion` (`AnimatePresence`)

---

## Expected File Structure

```
src/
├── App.tsx                  # Main router setup
├── main.tsx                 # Entry point
├── index.css                # Tailwind/DaisyUI styles
├── lib/
│   └── posts.ts             # Mock blog data
├── context/
│   └── AuthContext.tsx      # Authentication context
├── pages/
│   ├── BlogIndex.tsx        # /blog route
│   ├── BlogPost.tsx         # /blog/:slug route
│   ├── Login.tsx            # /login route
│   ├── Admin.tsx            # /admin route (protected)
│   └── Navbar.tsx           # Navigation component
└── ...
```

---

## Grading Rubric

### Criterion 1: All Required Deliverables Submitted (10 pts)
- **Complete (10 pts)**: All files, documentation, or artifacts provided. Project is runnable and reviewable.
- **Incomplete (0 pts)**: Missing key files or deliverables; cannot compile/run or review the work.

### Criterion 2: Essential Requirements Fulfilled (10 pts)
- **Complete (10 pts)**: All main tasks/features explicitly stated in the prompt are at least partially implemented. The solution is runnable without major blocking errors. Primary outputs match expectations or are reasonably close.
- **Incomplete (0 pts)**: Main functionalities not attempted or severely broken.

---

## Key Implementation Notes

- **React Router v6** is required — install `react-router-dom`
- Use `useParams()` hook to read the `slug` parameter from the URL
- Use `useNavigate()` or `<Navigate>` component for redirects on the protected route
- Wrap the protected route component with a check on `isAuthenticated`
- The `AuthContext` should be provided at the root level (`App.tsx`) and consumed by `Navbar`, `Login`, and `Admin` components
- Use `BrowserRouter`, `Routes`, `Route`, and `Link` components from `react-router-dom`
- For the bonus, install `framer-motion` and wrap routes with `AnimatePresence` + `motion.div`
- TailwindCSS and DaisyUI are already configured — leverage `daisyui` components for UI elements like buttons and navbars
- The project builds to `./docs` (configured in `vite.config.ts`)

---

## Verification Checklist

- [ ] Blog index page lists all mock posts with links
- [ ] Clicking a post link navigates to `/blog/:slug` and displays correct content
- [ ] Non-existent slug shows "Post not found"
- [ ] AuthContext provides `isAuthenticated`, `login()`, `logout()`
- [ ] Login page has a working login button
- [ ] Navbar conditionally renders based on auth state
- [ ] `/admin` redirects unauthenticated users to `/login`
- [ ] Authenticated users can access `/admin` and see "Welcome to the Admin Dashboard"
- [ ] (Bonus) Page transitions are animated
- [ ] `pnpm dev` runs without errors
- [ ] `pnpm build` compiles successfully
