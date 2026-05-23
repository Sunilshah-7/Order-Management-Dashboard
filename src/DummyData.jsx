export const userData = [
  { name: "Jan", "Active User": 4000 },
  { name: "Feb", "Active User": 3200 },
  { name: "Mar", "Active User": 5100 },
  { name: "Apr", "Active User": 4200 },
  { name: "May", "Active User": 5600 },
  { name: "Jun", "Active User": 6100 },
  { name: "Jul", "Active User": 6500 },
  { name: "Aug", "Active User": 7200 },
  { name: "Sep", "Active User": 6800 },
  { name: "Oct", "Active User": 7400 },
  { name: "Nov", "Active User": 8100 },
  { name: "Dec", "Active User": 8700 },
];

export const productData = [
  { name: "Jan", Sales: 4000 },
  { name: "Feb", Sales: 3000 },
  { name: "Mar", Sales: 5000 },
  { name: "Apr", Sales: 4400 },
  { name: "May", Sales: 6200 },
  { name: "Jun", Sales: 7100 },
];

export const analyticsData = [
  { name: "Mon", Visitors: 1200, Conversion: 240 },
  { name: "Tue", Visitors: 1700, Conversion: 310 },
  { name: "Wed", Visitors: 1500, Conversion: 290 },
  { name: "Thu", Visitors: 2100, Conversion: 440 },
  { name: "Fri", Visitors: 2600, Conversion: 520 },
  { name: "Sat", Visitors: 2300, Conversion: 480 },
  { name: "Sun", Visitors: 2800, Conversion: 610 },
];

export const salesData = [
  { name: "North", Revenue: 42000 },
  { name: "South", Revenue: 36000 },
  { name: "West", Revenue: 51000 },
  { name: "East", Revenue: 47000 },
];

export const userRows = [
  {
    id: 1,
    username: "Jon Snow",
    avatar: "https://i.pravatar.cc/120?img=11",
    email: "jon@example.com",
    role: "Operations Lead",
    status: "active",
    transaction: "$1,240",
  },
  {
    id: 2,
    username: "Cersei Lannister",
    avatar: "https://i.pravatar.cc/120?img=32",
    email: "cersei@example.com",
    role: "Finance Admin",
    status: "active",
    transaction: "$2,810",
  },
  {
    id: 3,
    username: "Jaime Lannister",
    avatar: "https://i.pravatar.cc/120?img=13",
    email: "jaime@example.com",
    role: "Warehouse Manager",
    status: "pending",
    transaction: "$890",
  },
  {
    id: 4,
    username: "Arya Stark",
    avatar: "https://i.pravatar.cc/120?img=47",
    email: "arya@example.com",
    role: "Customer Success",
    status: "active",
    transaction: "$3,420",
  },
];

export const productRows = [
  {
    id: 1,
    name: "Airpods",
    img: "https://www.nicepng.com/png/detail/298-2982212_apple-airpods-png.png",
    stock: 12,
    status: "active",
    price: "$100",
    category: "Audio",
  },
  {
    id: 2,
    name: "Laptop",
    img: "https://toppng.com/uploads/preview/samsung-laptop-png-11552846920ggjwoxjcy6.png",
    stock: 10,
    status: "active",
    price: "$1,200",
    category: "Computers",
  },
  {
    id: 3,
    name: "Earphones",
    img: "https://www.kindpng.com/picc/m/309-3093277_earphones-png-transparent-png.png",
    stock: 15,
    status: "paused",
    price: "$50",
    category: "Audio",
  },
  {
    id: 4,
    name: "Mobile",
    img: "https://www.vhv.rs/dpng/d/7-72850_new-mobile-phone-png-transparent-png.png",
    stock: 20,
    status: "active",
    price: "$500",
    category: "Phones",
  },
];

export const transactions = [
  { id: "TX-1042", customer: "Riley Quinn", date: "May 21, 2026", amount: "$824.00", status: "Approved" },
  { id: "TX-1041", customer: "Morgan Lee", date: "May 20, 2026", amount: "$1,245.00", status: "Pending" },
  { id: "TX-1040", customer: "Casey Park", date: "May 19, 2026", amount: "$310.00", status: "Declined" },
  { id: "TX-1039", customer: "Taylor Kim", date: "May 18, 2026", amount: "$2,020.00", status: "Approved" },
];

export const reports = [
  { name: "Monthly revenue", owner: "Finance", updated: "Today", status: "Ready" },
  { name: "Inventory health", owner: "Operations", updated: "Yesterday", status: "Review" },
  { name: "Customer retention", owner: "Growth", updated: "May 19", status: "Ready" },
];

export const mailItems = [
  { from: "Ops Desk", subject: "Warehouse cycle count complete", time: "09:12 AM", status: "Unread" },
  { from: "Finance", subject: "Invoice batch needs approval", time: "08:44 AM", status: "Unread" },
  { from: "Support", subject: "Priority account update", time: "Yesterday", status: "Read" },
];

export const feedbackItems = [
  { customer: "Bluebird Supply", score: 9, comment: "Fast shipping and clear order status.", status: "Positive" },
  { customer: "Northwind Retail", score: 7, comment: "Would like better invoice exports.", status: "Neutral" },
  { customer: "Summit Goods", score: 4, comment: "Backorder communication was late.", status: "Needs follow-up" },
];

export const messages = [
  { sender: "Priya Shah", topic: "Can you review the Q3 stock plan?", channel: "Internal", time: "12 min ago" },
  { sender: "Alex Morgan", topic: "New supplier onboarding checklist", channel: "Staff", time: "34 min ago" },
  { sender: "Jordan Miles", topic: "Customer escalation closed", channel: "Support", time: "1 hr ago" },
];

export const staff = [
  { id: 1, name: "Priya Shah", team: "Operations", role: "Director", workload: "Balanced", status: "Online" },
  { id: 2, name: "Alex Morgan", team: "Warehouse", role: "Lead", workload: "High", status: "Online" },
  { id: 3, name: "Jordan Miles", team: "Support", role: "Manager", workload: "Balanced", status: "Away" },
  { id: 4, name: "Nina Patel", team: "Finance", role: "Analyst", workload: "Low", status: "Offline" },
];
