# Order Management Admin Dashboard

A modern Vite + React admin dashboard for demo order-management workflows. The app is frontend-only and uses fake data for dashboards, users, products, transactions, reports, notifications, and staff screens.

## Tech Stack

- React 19 with Vite 6
- React Router DOM 7 using `createBrowserRouter` and `RouterProvider`
- Tailwind CSS 4 for the blue-white dashboard UI
- Recharts for charts and trend panels
- MUI Icons for navigation and action iconography
- Static sample data from `src/DummyData.jsx`

## Features

- Blue-white responsive admin shell with top bar and route-aware sidebar navigation.
- Active sidebar state updates per route, including nested User and Product pages.
- Home dashboard with KPI cards, active-user chart, and recent transactions.
- Working sidebar pages for Analytics, Sales, Transactions, Business Reports, Mail, Feedback, Messages, Manage Staff, and Staff Reports.
- Users page with a Tailwind table, local delete interaction, edit links, and Add New User route.
- Products page with a Tailwind table, local delete interaction, edit links, and Add New Product route.
- User and Product detail/edit pages read the route parameter and display matching fake records.
- New User and New Product forms are polished demo forms.

## Routes

- `/` - Home dashboard
- `/analytics` - analytics charts and KPI trends
- `/sales` - sales overview
- `/users` - users table
- `/users/:userId` - user detail/edit screen
- `/users/newUser` - new user form
- `/products` - products table
- `/products/:productId` - product detail/edit screen
- `/products/newProduct` - new product form
- `/transactions` - transaction table and summary metrics
- `/reports` - business reports page
- `/mail` - inbox-style mail page
- `/feedback` - customer feedback page
- `/messages` - internal messages page
- `/staff/manage` - staff management page
- `/staff/reports` - staff reports page

## Project Structure

```text
src/
├── App.jsx                    # Shared app shell with Topbar, Sidebar, and Outlet
├── index.jsx                  # React Router data-router setup and root render
├── index.css                  # Tailwind import and global base styles
├── DummyData.jsx              # Fake chart, table, notification, and staff data
├── components/
│   ├── DashboardKit.jsx       # Shared Tailwind UI primitives
│   ├── SideBar/Sidebar.jsx    # Route-aware sidebar
│   └── TopBar/Topbar.jsx      # Sticky top navigation
└── pages/
    ├── ModernPages.jsx        # Analytics, Sales, Reports, Mail, Feedback, Staff pages
    ├── Home/Home.jsx
    ├── UserList/UserList.jsx
    ├── User/User.jsx
    ├── NewUser/NewUser.jsx
    ├── ProductList/ProductList.jsx
    ├── Product/Product.jsx
    └── NewProduct/NewProduct.jsx
```

Some legacy CSS/component files remain in the repo, but the modernized screens primarily use Tailwind classes and shared helpers from `DashboardKit.jsx`.

## Data And Persistence

This is a demo frontend with no backend integration.

- Data is fake and stored in `src/DummyData.jsx`.
- Delete actions update local component state only.
- Forms and edit buttons are UI-only and do not submit to an API.
- Refreshing the browser resets data to the original fake records.
- There is no authentication, authorization, persistence layer, or API client.

## Available Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

- `npm run dev` starts Vite at `http://localhost:3000`.
- `npm run build` creates the production build in `build/`.
- `npm run preview` previews the production build locally.

## Verification

The required verification command for code changes is:

```bash
npm run build
```

There is currently no configured test or lint script.
