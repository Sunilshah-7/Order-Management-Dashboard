import React from "react";
import {
  analyticsData,
  feedbackItems,
  mailItems,
  messages,
  reports,
  salesData,
  staff,
  transactions,
} from "../DummyData";
import {
  Card,
  ChartPanel,
  DataTable,
  PageHeader,
  StatCard,
  StatusBadge,
} from "../components/DashboardKit";

const statusTone = {
  Approved: "green",
  Pending: "amber",
  Declined: "red",
  Ready: "green",
  Review: "amber",
  Unread: "blue",
  Read: "slate",
  Positive: "green",
  Neutral: "amber",
  "Needs follow-up": "red",
  Online: "green",
  Away: "amber",
  Offline: "slate",
};

export function Analytics() {
  return (
    <>
      <PageHeader
        title="Analytics"
        description="Track traffic, conversion, and engagement trends across the demo commerce operation."
      />
      <div className="grid gap-6 md:grid-cols-3">
        <StatCard label="Visitors" value="14.2K" detail="+18% from last week" />
        <StatCard label="Conversion" value="21.8%" detail="+3.4 points from last week" tone="green" />
        <StatCard label="Bounce Rate" value="31%" detail="-6% from last week" tone="amber" />
      </div>
      <div className="mt-8 grid gap-6 xl:grid-cols-2">
        <ChartPanel title="Visitor Trend" data={analyticsData} dataKey="Visitors" type="area" />
        <ChartPanel title="Conversions" data={analyticsData} dataKey="Conversion" type="bar" />
      </div>
    </>
  );
}

export function Sales() {
  return (
    <>
      <PageHeader
        title="Sales"
        description="Regional sales performance, pipeline health, and demo order momentum."
      />
      <div className="grid gap-6 md:grid-cols-3">
        <StatCard label="Revenue" value="$176K" detail="+12% month over month" tone="green" />
        <StatCard label="Open Pipeline" value="$48K" detail="23 active opportunities" />
        <StatCard label="Avg Order" value="$684" detail="+$42 vs prior period" tone="amber" />
      </div>
      <div className="mt-8 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <ChartPanel title="Regional Revenue" data={salesData} dataKey="Revenue" type="bar" />
        <Card title="Sales Priorities">
          <div className="space-y-4 text-sm text-slate-600">
            {["Renew enterprise accounts", "Recover stalled carts", "Audit discount approvals"].map(
              (item) => (
                <div key={item} className="rounded-lg bg-blue-50 p-4 font-semibold text-blue-950">
                  {item}
                </div>
              ),
            )}
          </div>
        </Card>
      </div>
    </>
  );
}

export function Transactions() {
  return (
    <>
      <PageHeader title="Transactions" description="Recent fake payments and approval states." />
      <div className="mb-8 grid gap-6 md:grid-cols-3">
        <StatCard label="Processed" value="$4,399" detail="Last 24 hours" />
        <StatCard label="Approved" value="75%" detail="3 of 4 demo transactions" tone="green" />
        <StatCard label="Review Queue" value="1" detail="Pending finance approval" tone="amber" />
      </div>
      <DataTable
        rows={transactions}
        getRowKey={(row) => row.id}
        columns={[
          { key: "id", header: "Transaction" },
          { key: "customer", header: "Customer" },
          { key: "date", header: "Date" },
          { key: "amount", header: "Amount" },
          {
            key: "status",
            header: "Status",
            render: (row) => <StatusBadge tone={statusTone[row.status]}>{row.status}</StatusBadge>,
          },
        ]}
      />
    </>
  );
}

export function BusinessReports() {
  return (
    <>
      <PageHeader title="Business Reports" description="Demo reports for finance, inventory, and growth teams." />
      <DataTable
        rows={reports}
        getRowKey={(row) => row.name}
        columns={[
          { key: "name", header: "Report" },
          { key: "owner", header: "Owner" },
          { key: "updated", header: "Updated" },
          {
            key: "status",
            header: "Status",
            render: (row) => <StatusBadge tone={statusTone[row.status]}>{row.status}</StatusBadge>,
          },
        ]}
      />
    </>
  );
}

export function Mail() {
  return (
    <>
      <PageHeader title="Mail" description="Inbox-style demo updates for operational work." />
      <DataTable
        rows={mailItems}
        getRowKey={(row) => row.subject}
        columns={[
          { key: "from", header: "From" },
          { key: "subject", header: "Subject" },
          { key: "time", header: "Time" },
          {
            key: "status",
            header: "Status",
            render: (row) => <StatusBadge tone={statusTone[row.status]}>{row.status}</StatusBadge>,
          },
        ]}
      />
    </>
  );
}

export function Feedback() {
  return (
    <>
      <PageHeader title="Feedback" description="Customer comments and demo follow-up signals." />
      <DataTable
        rows={feedbackItems}
        getRowKey={(row) => row.customer}
        columns={[
          { key: "customer", header: "Customer" },
          { key: "score", header: "Score" },
          { key: "comment", header: "Comment" },
          {
            key: "status",
            header: "Status",
            render: (row) => <StatusBadge tone={statusTone[row.status]}>{row.status}</StatusBadge>,
          },
        ]}
      />
    </>
  );
}

export function Messages() {
  return (
    <>
      <PageHeader title="Messages" description="Internal message queue with fake staff updates." />
      <DataTable
        rows={messages}
        getRowKey={(row) => row.topic}
        columns={[
          { key: "sender", header: "Sender" },
          { key: "topic", header: "Topic" },
          { key: "channel", header: "Channel" },
          { key: "time", header: "Time" },
        ]}
      />
    </>
  );
}

export function StaffManage() {
  return (
    <>
      <PageHeader title="Manage Staff" description="Staff roster, roles, workload, and availability." />
      <DataTable
        rows={staff}
        columns={[
          { key: "name", header: "Name" },
          { key: "team", header: "Team" },
          { key: "role", header: "Role" },
          { key: "workload", header: "Workload" },
          {
            key: "status",
            header: "Status",
            render: (row) => <StatusBadge tone={statusTone[row.status]}>{row.status}</StatusBadge>,
          },
        ]}
      />
    </>
  );
}

export function StaffReports() {
  return (
    <>
      <PageHeader title="Staff Reports" description="Demo staffing metrics and team capacity." />
      <div className="grid gap-6 md:grid-cols-3">
        <StatCard label="Headcount" value="42" detail="Across four teams" />
        <StatCard label="Utilization" value="82%" detail="Balanced overall" tone="green" />
        <StatCard label="High Load" value="7" detail="Need manager review" tone="amber" />
      </div>
      <div className="mt-8">
        <Card title="Team Notes">
          <div className="grid gap-6 md:grid-cols-3">
            {["Operations coverage is stable.", "Warehouse workload is elevated.", "Support response time improved."].map(
              (note) => (
                <div key={note} className="rounded-lg bg-blue-50 p-4 text-sm font-semibold text-blue-950">
                  {note}
                </div>
              ),
            )}
          </div>
        </Card>
      </div>
    </>
  );
}
