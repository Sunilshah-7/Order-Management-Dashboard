# Project Features Overview

This project is a modernized Vite React admin dashboard UI. It is frontend-only and uses hardcoded fake data from `src/DummyData.jsx`; there is no backend/API integration, persistence layer, authentication, or real form submission flow.

## Tech Stack

- React 19 with Vite 6.
- React Router DOM 7 with `createBrowserRouter` and `RouterProvider`.
- Tailwind CSS 4 for the primary blue-white UI system.
- Recharts for line, area, and bar charts.
- MUI Icons for sidebar and action icons.
- Shared Tailwind UI helpers in `src/components/DashboardKit.jsx`.

## Application Layout

- `src/index.jsx` defines the route object tree and renders `RouterProvider`.
- `src/App.jsx` is the shared shell with sticky top bar, responsive sidebar, and routed page content via `Outlet`.
- `src/components/SideBar/Sidebar.jsx` uses `NavLink` so active sidebar tabs update from the current route.
- `src/components/TopBar/Topbar.jsx` provides the dashboard brand area and utility icons.
- Most modern UI is styled with Tailwind classes rather than the older colocated CSS files.

## Routes

- `/` renders the Home dashboard.
- `/analytics` renders analytics KPIs and charts.
- `/sales` renders regional sales overview content.
- `/users` renders the user list table.
- `/users/:userId` renders the user detail/edit screen.
- `/users/newUser` renders the new user form.
- `/products` renders the product list table.
- `/products/:productId` renders the product detail/edit screen.
- `/products/newProduct` renders the new product form.
- `/transactions` renders transaction metrics and table data.
- `/reports` renders the Business Reports page.
- `/mail` renders an inbox-style Mail page.
- `/feedback` renders customer feedback data.
- `/messages` renders internal messages.
- `/staff/manage` renders staff management data.
- `/staff/reports` renders staff reporting metrics.

## Dashboard And Navigation Features

- Blue-white responsive app shell with sticky top navigation.
- Sidebar sections include Dashboard, Quick Menu, Notifications, and Staff.
- Duplicate sidebar labels were clarified as Business Reports and Staff Reports.
- Active sidebar links use a blue background with white text/icons.
- Home dashboard includes revenue, orders, cost, active-user chart, and recent transaction table.
- Shared `PageHeader`, `StatCard`, `Card`, `DataTable`, `StatusBadge`, `ChartPanel`, and form helpers keep pages visually consistent.

## User Management Features

- User list page displays fake users in a Tailwind-styled table.
- Columns include ID, avatar/name/role, email, status, transaction amount, and actions.
- Each user row links to `/users/:userId`.
- Delete action removes the user from local component state for the current session only.
- User detail page reads the route parameter and displays the matching fake user when available.
- User detail/edit form is UI-only and shows a demo-mode notice.
- New user form includes username, full name, email, password, phone, address, gender, and active status.

## Product Management Features

- Product list page displays fake products in a Tailwind-styled table.
- Columns include ID, image/name/category, stock, status, price, and actions.
- Each product row links to `/products/:productId`.
- Delete action removes the product from local component state for the current session only.
- Product detail page reads the route parameter and displays matching fake product details when available.
- Product detail page includes a Recharts sales performance panel and an edit form.
- New product page is now a full demo form, not a placeholder.

## Additional Sidebar Page Features

- Analytics page shows visitor and conversion metrics with area and bar charts.
- Sales page shows revenue KPIs, regional revenue chart, and sales priorities.
- Transactions page shows recent fake transactions with status badges.
- Business Reports page lists fake report records by owner, update time, and status.
- Mail page shows inbox-style fake mail items.
- Feedback page shows customer scores, comments, and follow-up states.
- Messages page shows internal message queue data.
- Manage Staff page shows staff roster, workload, and availability.
- Staff Reports page shows headcount, utilization, high-load metrics, and team notes.

## Data Model And Sample Data

- `userData` powers dashboard active-user charts.
- `productData` powers product sales charts.
- `analyticsData` and `salesData` power the new analytics and sales charts.
- `userRows` powers the users table and user detail pages.
- `productRows` powers the products table and product detail pages.
- `transactions`, `reports`, `mailItems`, `feedbackItems`, `messages`, and `staff` power the new sidebar pages.
- Data edits and deletes are local to component state and reset on refresh.

## Useful File Map

- `src/index.jsx`: route definitions and app render.
- `src/App.jsx`: shared application shell.
- `src/DummyData.jsx`: static fake data for all pages.
- `src/components/DashboardKit.jsx`: shared Tailwind UI primitives.
- `src/components/TopBar/Topbar.jsx`: top navigation bar.
- `src/components/SideBar/Sidebar.jsx`: route-aware sidebar navigation.
- `src/pages/ModernPages.jsx`: Analytics, Sales, Transactions, Reports, Mail, Feedback, Messages, and Staff pages.
- `src/pages/Home/Home.jsx`: dashboard page.
- `src/pages/UserList/UserList.jsx`: users table page.
- `src/pages/User/User.jsx`: user profile/edit page.
- `src/pages/NewUser/NewUser.jsx`: user creation form.
- `src/pages/ProductList/ProductList.jsx`: products table page.
- `src/pages/Product/Product.jsx`: product detail/edit page.
- `src/pages/NewProduct/NewProduct.jsx`: product creation form.

## Current Limitations

- Forms are UI-only and do not submit, validate, or persist data.
- Delete actions only update local in-memory state.
- There is no backend API, database, authentication, or authorization.
- Refreshing the app resets all fake data.
- There is no configured test or lint script.
