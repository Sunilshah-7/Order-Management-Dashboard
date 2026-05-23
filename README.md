# Order Management Admin Dashboard

A Vite-based React admin dashboard for managing users and products. This project serves as a frontend interface for an order management system, featuring user management, product management, and dashboard analytics.

## Tech Stack

- **React 19** with **Vite 6** for fast development and building
- **React Router DOM 7** for client-side routing
- **Material UI (MUI)** for UI components including:
  - MUI DataGrid for tabular data display
  - MUI Icons for iconography
- **Recharts** for data visualization (line charts)
- **Emotion** for styling (used by MUI)
- Plain CSS files colocated with components/pages

## Project Structure

```
src/
├── App.jsx          # Main application shell with routing
├── index.jsx        # Application entry point
├── DummyData.jsx    # Static sample data for charts and tables
├── components/      # Reusable UI components
│   ├── Chart/       # Reusable Recharts line chart component
│   ├── FeaturedInfo/# Dashboard metric cards
│   ├── Sidebar/     # Navigation sidebar
│   ├── TopBar/      # Top navigation bar
│   ├── WidgetLarge/ # Latest transactions table
│   └── WidgetSmall/ # New members widget
├── pages/           # Application pages
│   ├── Home/        # Dashboard overview
│   ├── UserList/    # User management table
│   ├── User/        # User detail/edit page
│   ├── NewUser/     # User creation form
│   ├── ProductList/ # Product management table
│   ├── Product/     # Product detail/edit page
│   └── NewProduct/  # New product form (placeholder)
├── index.css        # Global styles
└── App.css          # Application-specific styles

public/
└ index.html         # HTML template
```

## Key Features

### Dashboard (`/`)
- Revenue, Sales, and Cost summary cards with month-over-month indicators
- User analytics line chart showing user growth trends
- New members widget displaying recent user signups
- Latest transactions table showing recent order activity

### User Management
- **User List** (`/users`): Display users in a searchable, filterable MUI DataGrid
- **User Detail** (`/users/:userId`): View and edit user profile information
- **New User** (`/users/newUser`): Form to create new users
- Features include avatar upload, status toggles, and form validation (UI-only)

### Product Management
- **Product List** (`/products`): Display products in a MUI DataGrid
- **Product Detail** (`/products/:productId`): View and edit product information
- **New Product** (`/products/newProduct`): Form to create new products
- Features include product images, stock management, and pricing

## Data & Persistence

⚠️ **Important**: This is a presentational dashboard with no backend integration:
- All data is hardcoded in `src/DummyData.jsx`
- Data modifications (edits/deletions) only persist in local component state
- Refreshing the page resets all data to original state
- Forms are UI-only and do not submit data to any API
- No authentication or authorization system is implemented

## Available Scripts

In the project directory, you can run:

### `npm run dev` or `yarn dev`
Runs the app in development mode with hot module replacement.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload when you make changes.

### `npm run build` or `yarn build`
Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for best performance.
The build is minified and filenames include hashes for cache busting.

### `npm run preview` or `yarn preview`
Locally preview the production build before deploying.

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Guidelines

This project follows specific conventions documented in `AGENTS.md`:
- Components and pages have colocated CSS files (e.g., `User.jsx` with `User.css`)
- Functional React components with JSX syntax
- Existing libraries (MUI, Recharts, React Router) are preferred over new additions
- Mock data should be clearly labeled as fake/sample data
- UI-only behavior (non-functional forms) should be explicitly documented

## Limitations & Future Work

As noted in `PROJECT_FEATURES.md` and `AGENTS.md`:
- No backend API integration
- No persistence layer (data resets on refresh)
- No authentication system
- Forms are presentational only
- Some sidebar navigation items are visual labels only
- Detail pages display static records rather than fetching by route parameter

## Learn More

To learn more about the technologies used:
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [React Router Documentation](https://reactrouter.com/)
- [Material UI Documentation](https://mui.com/)
- [Recharts Documentation](https://recharts.org/)

---
*This README was updated to accurately reflect the Vite-based React architecture of this project, replacing the default Create React App documentation.*